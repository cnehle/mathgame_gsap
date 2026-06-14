// Converts an SVG-based drawing into a 28×28 grayscale array
// compatible with MNIST-format input for the neural network.

export class DrawingPreprocessor {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 28;
    this.canvas.height = 28;
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!;
  }

  /**
   * Take an SVG element with drawn paths and convert to 28×28 grayscale
   * Float32Array (values 0..1) matching MNIST format (white digit on black).
   */
  process(svg: SVGSVGElement): Float32Array {
    // Find bounding box of all drawn paths to crop tightly
    const bbox = this.computeBoundingBox(svg);
    if (!bbox) {
      // Empty drawing → return all zeros
      return new Float32Array(28 * 28);
    }

    // Rasterize at 28×28 with padding so digit isn't touching edges
    return this.rasterize(svg, bbox);
  }

  private computeBoundingBox(
    svg: SVGSVGElement,
  ): { x: number; y: number; w: number; h: number } | null {
    const paths = svg.querySelectorAll<SVGPathElement>('.drawn-path');
    if (paths.length === 0) return null;

    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    paths.forEach((p) => {
      const bb = p.getBBox();
      minX = Math.min(minX, bb.x);
      minY = Math.min(minY, bb.y);
      maxX = Math.max(maxX, bb.x + bb.width);
      maxY = Math.max(maxY, bb.y + bb.height);
    });

    if (!isFinite(minX)) return null;
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
  }

  private rasterize(
    svg: SVGSVGElement,
    bbox: { x: number; y: number; w: number; h: number },
  ): Float32Array {
    // Center the digit in a 28×28 image with ~4px padding (MNIST style)
    const padding = 4;
    const targetSize = 28 - padding * 2; // 20×20 box for the digit
    const scale = targetSize / Math.max(bbox.w, bbox.h);
    const scaledW = bbox.w * scale;
    const scaledH = bbox.h * scale;
    const offsetX = (28 - scaledW) / 2;
    const offsetY = (28 - scaledH) / 2;

    // Clear canvas with black background
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 28, 28);

    // Draw each path manually onto the canvas, scaled and centered
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    const paths = svg.querySelectorAll<SVGPathElement>('.drawn-path');
    paths.forEach((path) => {
      const d = path.getAttribute('d') ?? '';
      this.drawPathScaled(d, bbox, scale, offsetX, offsetY);
    });

    // Read back grayscale values
    const imageData = this.ctx.getImageData(0, 0, 28, 28);
    const result = new Float32Array(28 * 28);
    for (let i = 0; i < 28 * 28; i++) {
      // Use red channel; image is grayscale
      result[i] = imageData.data[i * 4] / 255;
    }
    return result;
  }

  /**
   * Manually parse an SVG path "d" attribute and stroke it onto canvas,
   * applying scale and offset for centering.
   */
  private drawPathScaled(
    d: string,
    bbox: { x: number; y: number; w: number; h: number },
    scale: number,
    offsetX: number,
    offsetY: number,
  ): void {
    this.ctx.beginPath();
    const transform = (px: number, py: number): [number, number] => [
      (px - bbox.x) * scale + offsetX,
      (py - bbox.y) * scale + offsetY,
    ];

    // Parse simple M/L commands (our DrawingPad only uses these)
    const tokens = d.match(/[ML][^ML]+/g) ?? [];
    tokens.forEach((token) => {
      const cmd = token[0];
      const nums = token
        .slice(1)
        .trim()
        .split(/[\s,]+/)
        .map(Number);
      const [tx, ty] = transform(nums[0], nums[1]);
      if (cmd === 'M') {
        this.ctx.moveTo(tx, ty);
      } else {
        this.ctx.lineTo(tx, ty);
      }
    });

    this.ctx.stroke();
  }
}
