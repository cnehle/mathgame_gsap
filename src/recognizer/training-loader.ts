import * as tf from '@tensorflow/tfjs';

const IMAGE_SIZE = 784; // 28×28
const NUM_CLASSES = 10;
const NUM_DATASET_ELEMENTS = 65000;
const NUM_TRAIN_ELEMENTS = 55000;
const NUM_TEST_ELEMENTS = NUM_DATASET_ELEMENTS - NUM_TRAIN_ELEMENTS;

const MNIST_IMAGES_SPRITE_PATH =
  'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';
const MNIST_LABELS_PATH =
  'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';

export class MnistData {
  private datasetImages: Float32Array | null = null;
  private datasetLabels: Uint8Array | null = null;
  private trainIndices: Uint32Array | null = null;
  private testIndices: Uint32Array | null = null;
  private shuffledTrainIndex = 0;
  private shuffledTestIndex = 0;

  async load(onProgress?: (pct: number) => void): Promise<void> {
    onProgress?.(0);

    // Load the sprite image containing all 65000 digits
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const imgRequest = new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Failed to load MNIST images'));
      img.src = MNIST_IMAGES_SPRITE_PATH;
    });

    const labelsRequest = fetch(MNIST_LABELS_PATH);
    const [, labelsResponse] = await Promise.all([imgRequest, labelsRequest]);
    onProgress?.(30);

    // Process the sprite into a flat Float32Array
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d')!;
    const datasetBytesBuffer = new ArrayBuffer(
      NUM_DATASET_ELEMENTS * IMAGE_SIZE * 4
    );
    const chunkSize = 5000;

    for (let i = 0; i < NUM_DATASET_ELEMENTS / chunkSize; i++) {
      const datasetBytesView = new Float32Array(
        datasetBytesBuffer,
        i * IMAGE_SIZE * chunkSize * 4,
        IMAGE_SIZE * chunkSize
      );
      ctx.drawImage(
        img,
        0, i * chunkSize,
        img.width, chunkSize,
        0, 0,
        img.width, chunkSize
      );
      const imageData = ctx.getImageData(0, 0, canvas.width, chunkSize);
      for (let j = 0; j < imageData.data.length / 4; j++) {
        // All channels hold an equal value since the image is grayscale,
        // so just read the red channel
        datasetBytesView[j] = imageData.data[j * 4] / 255;
      }
      onProgress?.(30 + Math.floor((i / (NUM_DATASET_ELEMENTS / chunkSize)) * 50));
    }

    this.datasetImages = new Float32Array(datasetBytesBuffer);
    this.datasetLabels = new Uint8Array(await labelsResponse.arrayBuffer());

    this.trainIndices = tf.util.createShuffledIndices(NUM_TRAIN_ELEMENTS);
    this.testIndices = tf.util.createShuffledIndices(NUM_TEST_ELEMENTS);

    onProgress?.(100);
  }

  nextTrainBatch(batchSize: number): { xs: tf.Tensor; labels: tf.Tensor } {
    return this.nextBatch(
      batchSize,
      [this.datasetImages!, this.datasetLabels!],
      () => {
        this.shuffledTrainIndex = (this.shuffledTrainIndex + 1) % this.trainIndices!.length;
        return this.trainIndices![this.shuffledTrainIndex];
      }
    );
  }

  nextTestBatch(batchSize: number): { xs: tf.Tensor; labels: tf.Tensor } {
    return this.nextBatch(
      batchSize,
      [this.datasetImages!, this.datasetLabels!],
      () => {
        this.shuffledTestIndex = (this.shuffledTestIndex + 1) % this.testIndices!.length;
        return this.testIndices![this.shuffledTestIndex];
      }
    );
  }

  private nextBatch(
    batchSize: number,
    data: [Float32Array, Uint8Array],
    indexFn: () => number
  ): { xs: tf.Tensor; labels: tf.Tensor } {
    const batchImagesArray = new Float32Array(batchSize * IMAGE_SIZE);
    const batchLabelsArray = new Uint8Array(batchSize * NUM_CLASSES);

    for (let i = 0; i < batchSize; i++) {
      const idx = indexFn();
      const image = data[0].slice(idx * IMAGE_SIZE, idx * IMAGE_SIZE + IMAGE_SIZE);
      batchImagesArray.set(image, i * IMAGE_SIZE);
      const label = data[1].slice(idx * NUM_CLASSES, idx * NUM_CLASSES + NUM_CLASSES);
      batchLabelsArray.set(label, i * NUM_CLASSES);
    }

    const xs = tf.tensor2d(batchImagesArray, [batchSize, IMAGE_SIZE]);
    const labels = tf.tensor2d(batchLabelsArray, [batchSize, NUM_CLASSES]);
    return { xs, labels };
  }
}