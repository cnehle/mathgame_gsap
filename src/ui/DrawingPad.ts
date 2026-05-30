import type { Point } from '../types';
import { NeuralRecognizer } from '../recognizer/neural';
import { DrawingPreprocessor } from '../recognizer/preprocessor';

type RecognizedCallback = (result: {
  digit: number;
  score: number;
  correct: boolean;
}) => void;

export class DrawingPad {
  // Shared across all instances — model trains only once
  private static recognizer: NeuralRecognizer | null = null;
  private static preprocessor: DrawingPreprocessor | null = null;

/**
   * Initializes the shared neural recognizer.
   * Call this once before creating any DrawingPad instances.
   * Loads from IndexedDB if available, otherwise trains a new model.
   */
  static async initRecognizer(
    onProgress?: (stage: string, pct: number) => void
  ): Promise<void> {
    if (DrawingPad.recognizer && DrawingPad.recognizer.ready()) return;
    DrawingPad.recognizer = new NeuralRecognizer();
    DrawingPad.preprocessor = new DrawingPreprocessor();
    await DrawingPad.recognizer.init(onProgress);
  }

  private svg: SVGSVGElement;
  private currentPath: SVGPathElement | null = null;
  private points: Point[] = [];
  private isDrawing = false;
  private correctAnswer = 0;
  private onRecognizedCb: RecognizedCallback | null = null;

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    const ns = 'http://www.w3.org/2000/svg';
    this.svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
    this.svg.setAttribute('viewBox', '0 0 300 300');
    this.svg.setAttribute('xmlns', ns);
    this.svg.style.cssText =
      'width:100%;height:100%;display:block;touch-action:none;user-select:none;';

    const bg = document.createElementNS(ns, 'rect') as SVGRectElement;
    bg.setAttribute('width', '300');
    bg.setAttribute('height', '300');
    bg.setAttribute('fill', '#fafaf8');
    this.svg.appendChild(bg);

    for (let i = 1; i < 3; i++) {
      const hLine = document.createElementNS(ns, 'line') as SVGLineElement;
      hLine.setAttribute('x1', '0');
      hLine.setAttribute('y1', String(i * 100));
      hLine.setAttribute('x2', '300');
      hLine.setAttribute('y2', String(i * 100));
      hLine.setAttribute('stroke', 'rgba(0,0,0,0.06)');
      hLine.setAttribute('stroke-width', '1');
      this.svg.appendChild(hLine);

      const vLine = document.createElementNS(ns, 'line') as SVGLineElement;
      vLine.setAttribute('x1', String(i * 100));
      vLine.setAttribute('y1', '0');
      vLine.setAttribute('x2', String(i * 100));
      vLine.setAttribute('y2', '300');
      vLine.setAttribute('stroke', 'rgba(0,0,0,0.06)');
      vLine.setAttribute('stroke-width', '1');
      this.svg.appendChild(vLine);
    }

    container.appendChild(this.svg);
    this.bindEvents();
  }

  setCorrectAnswer(n: number): void {
    this.correctAnswer = n;
  }

  onRecognized(cb: RecognizedCallback): void {
    this.onRecognizedCb = cb;
  }

  recognize(): void {
    if (this.points.length < 8) {
      this.onRecognizedCb?.({ digit: -1, score: 0, correct: false });
      return;
    }
    if (!DrawingPad.recognizer || !DrawingPad.preprocessor) {
      console.error('Recognizer not initialized');
      return;
    }

    // Convert SVG drawing to 28×28 MNIST format
    const imageData = DrawingPad.preprocessor.process(this.svg);
    const result = DrawingPad.recognizer.predict(imageData);

    console.log(
      'Neural prediction:',
      result.allScores
        .map((s, i) => `${i}:${(s * 100).toFixed(1)}%`)
        .join(' ')
    );
    console.log(`Best: ${result.digit} (${(result.score * 100).toFixed(1)}%)`);

    const correct =
      result.digit === this.correctAnswer && result.score > 0.5;

    if (correct) this.animateSuccess();
    else this.animateFailure();

    setTimeout(() => {
      this.onRecognizedCb?.({
        digit: result.digit,
        score: result.score,
        correct,
      });
    }, correct ? 400 : 500);
  }

  clear(): void {
    this.svg.querySelectorAll('.drawn-path').forEach((p) => p.remove());
    this.points = [];
    this.currentPath = null;
    this.isDrawing = false;
    this.svg.style.animation = '';
  }

  destroy(): void {
    this.unbindEvents();
    this.container.innerHTML = '';
  }

  private bindEvents(): void {
    this.svg.addEventListener('mousedown', this.onStart);
    this.svg.addEventListener('mousemove', this.onMove);
    this.svg.addEventListener('mouseup', this.onEnd);
    this.svg.addEventListener('mouseleave', this.onEnd);
    this.svg.addEventListener('touchstart', this.onTouchStart, { passive: false });
    this.svg.addEventListener('touchmove', this.onTouchMove, { passive: false });
    this.svg.addEventListener('touchend', this.onEnd);
  }

  private unbindEvents(): void {
    this.svg.removeEventListener('mousedown', this.onStart);
    this.svg.removeEventListener('mousemove', this.onMove);
    this.svg.removeEventListener('mouseup', this.onEnd);
    this.svg.removeEventListener('mouseleave', this.onEnd);
    this.svg.removeEventListener('touchstart', this.onTouchStart);
    this.svg.removeEventListener('touchmove', this.onTouchMove);
    this.svg.removeEventListener('touchend', this.onEnd);
  }

  private onStart = (e: MouseEvent): void => {
    this.isDrawing = true;
    this.startStroke(this.svgPoint(e.clientX, e.clientY));
  };

  private onMove = (e: MouseEvent): void => {
    if (!this.isDrawing) return;
    this.continueStroke(this.svgPoint(e.clientX, e.clientY));
  };

  private onTouchStart = (e: TouchEvent): void => {
    e.preventDefault();
    this.isDrawing = true;
    this.startStroke(this.svgPoint(e.touches[0].clientX, e.touches[0].clientY));
  };

  private onTouchMove = (e: TouchEvent): void => {
    e.preventDefault();
    if (!this.isDrawing) return;
    this.continueStroke(this.svgPoint(e.touches[0].clientX, e.touches[0].clientY));
  };

  private onEnd = (): void => {
    this.isDrawing = false;
    this.currentPath = null;
  };

  private startStroke(pt: Point): void {
    this.points.push(pt);
    const ns = 'http://www.w3.org/2000/svg';
    this.currentPath = document.createElementNS(ns, 'path') as SVGPathElement;
    this.currentPath.setAttribute('class', 'drawn-path');
    this.currentPath.setAttribute('fill', 'none');
    this.currentPath.setAttribute('stroke', '#1a1a2e');
    this.currentPath.setAttribute('stroke-width', '6');
    this.currentPath.setAttribute('stroke-linecap', 'round');
    this.currentPath.setAttribute('stroke-linejoin', 'round');
    this.currentPath.setAttribute('d', `M ${pt.x} ${pt.y}`);
    this.svg.appendChild(this.currentPath);
  }

  private continueStroke(pt: Point): void {
    this.points.push(pt);
    if (!this.currentPath) return;
    const d = this.currentPath.getAttribute('d') ?? '';
    this.currentPath.setAttribute('d', `${d} L ${pt.x} ${pt.y}`);
  }

  private animateSuccess(): void {
    this.svg.querySelectorAll<SVGPathElement>('.drawn-path').forEach((p) => {
      p.setAttribute('stroke', '#00c853');
      p.style.animation = 'drawSuccess 0.4s ease-in-out';
    });
  }

  private animateFailure(): void {
    this.svg.querySelectorAll<SVGPathElement>('.drawn-path').forEach((p) => {
      p.setAttribute('stroke', '#e53935');
    });
    this.svg.style.animation = 'drawShake 0.5s ease-in-out';
    setTimeout(() => {
      this.svg.style.animation = '';
      this.points = [];
      this.svg.querySelectorAll('.drawn-path').forEach((p) => p.remove());
    }, 500);
  }

  private svgPoint(clientX: number, clientY: number): Point {
    const rect = this.svg.getBoundingClientRect();
    return {
      x: (clientX - rect.left) * (300 / rect.width),
      y: (clientY - rect.top) * (300 / rect.height),
    };
  }
}