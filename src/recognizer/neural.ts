import * as tf from '@tensorflow/tfjs';
import { MnistData } from './training-loader';

const MODEL_STORAGE_KEY = 'indexeddb://mathgame-mnist-model-v3';
const IMAGE_SIZE = 28;
const NUM_CLASSES = 10;

export interface NeuralRecognitionResult {
  digit: number;
  score: number;
  allScores: number[];
}

export class NeuralRecognizer {
  private model: tf.LayersModel | null = null;
  private isReady = false;

  async init(onProgress?: (stage: string, pct: number) => void): Promise<void> {
    // 1. Try loading prebuilt model from repo (instant)
    try {
      const baseUrl = import.meta.env.BASE_URL || '/';
      this.model = await tf.loadLayersModel(`${baseUrl}model/mathgame-mnist.json`);
      this.isReady = true;
      onProgress?.('Модель загружена', 100);
      console.log('✅ Модель загружена из репозитория');
      return;
    } catch {
      console.log('Готовая модель не найдена, пробуем IndexedDB...');
    }

    // 2. Try loading from browser storage
    try {
      this.model = await tf.loadLayersModel(MODEL_STORAGE_KEY);
      this.isReady = true;
      onProgress?.('Модель загружена', 100);
      return;
    } catch {
      // No saved model — train a new one
    }

    onProgress?.('Загружаем датасет MNIST', 0);
    const data = new MnistData();
    await data.load((pct) => onProgress?.('Загружаем датасет MNIST', pct * 0.3));

    onProgress?.('Создаём нейросеть', 30);
    this.model = this.buildModel();

    onProgress?.('Обучение нейросети', 35);
    await this.train(data, (pct) =>
      onProgress?.('Обучение нейросети', 35 + pct * 0.6)
    );

    onProgress?.('Сохраняем модель', 95);
    await this.model.save(MODEL_STORAGE_KEY);

    onProgress?.('Готово!', 100);
    this.isReady = true;
  }

  private buildModel(): tf.LayersModel {
    const model = tf.sequential();

    // ── Conv block 1 ──
    model.add(
      tf.layers.conv2d({
        inputShape: [IMAGE_SIZE, IMAGE_SIZE, 1],
        kernelSize: 3,
        filters: 32,
        padding: 'same',
        activation: 'relu',
        kernelInitializer: 'heNormal',
      })
    );
    model.add(tf.layers.batchNormalization());
    model.add(
      tf.layers.conv2d({
        kernelSize: 3,
        filters: 32,
        padding: 'same',
        activation: 'relu',
        kernelInitializer: 'heNormal',
      })
    );
    model.add(tf.layers.batchNormalization());
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
    model.add(tf.layers.dropout({ rate: 0.25 }));

    // ── Conv block 2 ──
    model.add(
      tf.layers.conv2d({
        kernelSize: 3,
        filters: 64,
        padding: 'same',
        activation: 'relu',
        kernelInitializer: 'heNormal',
      })
    );
    model.add(tf.layers.batchNormalization());
    model.add(
      tf.layers.conv2d({
        kernelSize: 3,
        filters: 64,
        padding: 'same',
        activation: 'relu',
        kernelInitializer: 'heNormal',
      })
    );
    model.add(tf.layers.batchNormalization());
    model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
    model.add(tf.layers.dropout({ rate: 0.25 }));

    // ── Dense layers ──
    model.add(tf.layers.flatten());
    model.add(
      tf.layers.dense({
        units: 256,
        activation: 'relu',
        kernelInitializer: 'heNormal',
      })
    );
    model.add(tf.layers.batchNormalization());
    model.add(tf.layers.dropout({ rate: 0.5 }));

    // ── Output layer ──
    model.add(
      tf.layers.dense({
        units: NUM_CLASSES,
        activation: 'softmax',
        kernelInitializer: 'heNormal',
      })
    );

    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });

    return model;
  }

  private async train(
    data: MnistData,
    onProgress?: (pct: number) => void
  ): Promise<void> {
    if (!this.model) throw new Error('Model not built');

    const BATCH_SIZE = 128;
    const TRAIN_BATCHES = 800;
    const TEST_BATCH_SIZE = 1000;

    for (let i = 0; i < TRAIN_BATCHES; i++) {
      const batch = data.nextTrainBatch(BATCH_SIZE);

      const xs = tf.tidy(() => {
        const reshaped = batch.xs.reshape([BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE, 1]);
        return this.augment(reshaped);
      });

      await this.model.fit(xs, batch.labels, {
        batchSize: BATCH_SIZE,
        epochs: 1,
        verbose: 0,
      });

      xs.dispose();
      batch.xs.dispose();
      batch.labels.dispose();

      onProgress?.(((i + 1) / TRAIN_BATCHES) * 100);

      if (i % 5 === 0) {
        await new Promise((r) => setTimeout(r, 0));
      }
    }

    const testBatch = data.nextTestBatch(TEST_BATCH_SIZE);
    const testXs = testBatch.xs.reshape([
      TEST_BATCH_SIZE,
      IMAGE_SIZE,
      IMAGE_SIZE,
      1,
    ]);
    const evalResult = this.model.evaluate(testXs, testBatch.labels) as tf.Scalar[];
    const accuracy = (await evalResult[1].data())[0];
    console.log(`Точность на тестовом наборе: ${(accuracy * 100).toFixed(2)}%`);

    testXs.dispose();
    testBatch.xs.dispose();
    testBatch.labels.dispose();
  }

  private augment(images: tf.Tensor): tf.Tensor {
    return tf.tidy(() => {
      const batchSize = images.shape[0]!;

      const shiftX = Math.floor(Math.random() * 5) - 2;
      const shiftY = Math.floor(Math.random() * 5) - 2;

      const padded = tf.pad(images, [
        [0, 0],
        [2, 2],
        [2, 2],
        [0, 0],
      ]);
      const shifted = padded.slice(
        [0, 2 + shiftY, 2 + shiftX, 0],
        [batchSize, IMAGE_SIZE, IMAGE_SIZE, 1]
      );

      const contrast = 0.85 + Math.random() * 0.3;
      return shifted.mul(contrast).clipByValue(0, 1);
    });
  }

  predict(imageData: Float32Array): NeuralRecognitionResult {
    if (!this.model || !this.isReady) {
      throw new Error('Recognizer not initialized');
    }

    return tf.tidy(() => {
      const input = tf.tensor4d(imageData, [1, IMAGE_SIZE, IMAGE_SIZE, 1]);
      const output = this.model!.predict(input) as tf.Tensor;
      const scores = Array.from(output.dataSync());

      let bestDigit = 0;
      let bestScore = scores[0];
      for (let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
          bestScore = scores[i];
          bestDigit = i;
        }
      }

      return { digit: bestDigit, score: bestScore, allScores: scores };
    });
  }

  ready(): boolean {
    return this.isReady;
  }
}