interface MorphShape {
  name: string;
  points: Array<[number, number]>;
  fill: string;
  stroke: string;
}

const SHAPES: MorphShape[] = [
  {
    name: 'star',
    fill: '#FFD93D', stroke: '#c8880a',
    points: [
      [50,8],[58,32],[82,32],[63,47],[70,72],
      [50,57],[30,72],[37,47],[18,32],[42,32],
      [50,8],[50,8],[50,8],[50,8],[50,8],[50,8],
    ],
  },
  {
    name: 'heart',
    fill: '#FF6B9D', stroke: '#8a1040',
    points: [
      [50,80],[30,62],[15,48],[15,33],[25,22],
      [38,22],[50,35],[62,22],[75,22],[85,33],
      [85,48],[70,62],[50,80],[50,80],[50,80],[50,80],
    ],
  },
  {
    name: 'hexagon',
    fill: '#6BFFB8', stroke: '#1a6a46',
    points: [
      [50,10],[76,25],[76,75],[50,90],[24,75],
      [24,25],[50,10],[50,10],[50,10],[50,10],
      [50,10],[50,10],[50,10],[50,10],[50,10],[50,10],
    ],
  },
  {
    name: 'flower',
    fill: '#FF8C69', stroke: '#c24d1e',
    points: [
      [50,15],[58,30],[72,22],[65,36],[82,38],
      [70,48],[78,62],[62,58],[58,75],[50,63],
      [42,75],[38,58],[22,62],[30,48],[18,38],
      [35,36],
    ],
  },
  {
    name: 'diamond',
    fill: '#C3B1E1', stroke: '#5a3e8a',
    points: [
      [50,8],[70,30],[92,50],[70,70],[50,92],
      [30,70],[8,50],[30,30],[50,8],[50,8],
      [50,8],[50,8],[50,8],[50,8],[50,8],[50,8],
    ],
  },
  {
    name: 'cloud',
    fill: '#a29bfe', stroke: '#6c5ce7',
    points: [
      [30,65],[18,65],[10,57],[10,48],[18,40],
      [22,40],[25,33],[33,28],[42,28],[48,33],
      [52,28],[62,26],[72,30],[76,40],[80,40],
      [88,48],
    ],
  },
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function pointsToPath(pts: Array<[number, number]>): string {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
}

function lerpColor(a: string, b: string, t: number): string {
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(lerp(ar, br, t)).toString(16).padStart(2, '0');
  const g = Math.round(lerp(ag, bg, t)).toString(16).padStart(2, '0');
  const bl = Math.round(lerp(ab, bb, t)).toString(16).padStart(2, '0');
  return `#${r}${g}${bl}`;
}

export class SVGMorpher {
  private pathEl: SVGPathElement;
  private currentShapeIdx = 0;
  private rafId = 0;

  constructor(svgEl: SVGSVGElement) {
    const ns = 'http://www.w3.org/2000/svg';

    const glow = document.createElementNS(ns, 'circle') as SVGCircleElement;
    glow.setAttribute('cx', '50');
    glow.setAttribute('cy', '50');
    glow.setAttribute('r', '46');
    glow.setAttribute('fill', 'rgba(255,255,255,0.06)');
    svgEl.appendChild(glow);

    this.pathEl = document.createElementNS(ns, 'path') as SVGPathElement;
    this.pathEl.setAttribute('fill', SHAPES[0].fill);
    this.pathEl.setAttribute('stroke', SHAPES[0].stroke);
    this.pathEl.setAttribute('stroke-width', '2');
    this.pathEl.setAttribute('d', pointsToPath(SHAPES[0].points));
    svgEl.appendChild(this.pathEl);
  }

  async morphToRandom(): Promise<void> {
    const nextIdx = (this.currentShapeIdx + 1 +
      Math.floor(Math.random() * (SHAPES.length - 1))) % SHAPES.length;
    await this.morphTo(nextIdx);
    this.currentShapeIdx = nextIdx;
  }

  private morphTo(targetIdx: number): Promise<void> {
    return new Promise((resolve) => {
      const from = SHAPES[this.currentShapeIdx];
      const to = SHAPES[targetIdx];
      const duration = 600;
      const start = performance.now();

      cancelAnimationFrame(this.rafId);

      const tick = (now: number): void => {
        const t = Math.min((now - start) / duration, 1);
        const e = easeInOut(t);

        const interpolated: Array<[number, number]> = from.points.map((fp, i) => [
          lerp(fp[0], to.points[i][0], e),
          lerp(fp[1], to.points[i][1], e),
        ]);

        this.pathEl.setAttribute('d', pointsToPath(interpolated));
        this.pathEl.setAttribute('fill', lerpColor(from.fill, to.fill, e));
        this.pathEl.setAttribute('stroke', lerpColor(from.stroke, to.stroke, e));

        if (t < 1) {
          this.rafId = requestAnimationFrame(tick);
        } else {
          resolve();
        }
      };

      this.rafId = requestAnimationFrame(tick);
    });
  }

  destroy(): void {
    cancelAnimationFrame(this.rafId);
  }
}