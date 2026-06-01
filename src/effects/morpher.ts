import { gsap } from 'gsap';

// ─────────────────────────────────────────────────────────────
//  SVG Morpher — GSAP version
//
//  Interpolates a path between predefined shapes by tweening
//  numeric coordinates through GSAP's optimized animation engine.
//  All easing and timing is delegated to GSAP rather than
//  managed manually with requestAnimationFrame.
// ─────────────────────────────────────────────────────────────

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
      [50,10], [58,30], [70,22], [70,42],
      [88,50], [70,58], [70,78], [58,70],
      [50,90], [42,70], [30,78], [30,58],
      [12,50], [30,42], [30,22], [42,30],
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
      [25,60], [18,55], [12,48], [15,40], [22,35],
      [28,32], [32,28], [40,25], [48,28], [55,25],
      [62,28], [70,32], [78,38], [82,48], [78,58],
      [68,62],
    ],
  },
];

function pointsToPath(pts: Array<[number, number]>): string {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z';
}

export class SVGMorpher {
  private pathEl: SVGPathElement;
  private currentShapeIdx = 0;
  private activeTween: gsap.core.Tween | null = null;

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
    const nextIdx =
      (this.currentShapeIdx + 1 + Math.floor(Math.random() * (SHAPES.length - 1))) %
      SHAPES.length;
    await this.morphTo(nextIdx);
    this.currentShapeIdx = nextIdx;
  }

  private morphTo(targetIdx: number): Promise<void> {
    return new Promise((resolve) => {
      const from = SHAPES[this.currentShapeIdx];
      const to = SHAPES[targetIdx];

      // Build an object whose properties GSAP will interpolate.
      // Each x/y coordinate becomes a numeric property to tween.
      const state: Record<string, number> = {
        fillR: parseInt(from.fill.slice(1, 3), 16),
        fillG: parseInt(from.fill.slice(3, 5), 16),
        fillB: parseInt(from.fill.slice(5, 7), 16),
        strokeR: parseInt(from.stroke.slice(1, 3), 16),
        strokeG: parseInt(from.stroke.slice(3, 5), 16),
        strokeB: parseInt(from.stroke.slice(5, 7), 16),
      };
      from.points.forEach((p, i) => {
        state[`x${i}`] = p[0];
        state[`y${i}`] = p[1];
      });

      // Target values for the tween
      const target: Record<string, number> = {
        fillR: parseInt(to.fill.slice(1, 3), 16),
        fillG: parseInt(to.fill.slice(3, 5), 16),
        fillB: parseInt(to.fill.slice(5, 7), 16),
        strokeR: parseInt(to.stroke.slice(1, 3), 16),
        strokeG: parseInt(to.stroke.slice(3, 5), 16),
        strokeB: parseInt(to.stroke.slice(5, 7), 16),
      };
      to.points.forEach((p, i) => {
        target[`x${i}`] = p[0];
        target[`y${i}`] = p[1];
      });

      // Kill any previous morph
      this.activeTween?.kill();

      this.activeTween = gsap.to(state, {
        ...target,
        duration: 0.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          // Rebuild the path "d" attribute from current state
          const pts: Array<[number, number]> = [];
          for (let i = 0; i < from.points.length; i++) {
            pts.push([state[`x${i}`], state[`y${i}`]]);
          }
          this.pathEl.setAttribute('d', pointsToPath(pts));

          // Rebuild colors from current channel values
          const fill = `rgb(${Math.round(state.fillR)},${Math.round(state.fillG)},${Math.round(state.fillB)})`;
          const stroke = `rgb(${Math.round(state.strokeR)},${Math.round(state.strokeG)},${Math.round(state.strokeB)})`;
          this.pathEl.setAttribute('fill', fill);
          this.pathEl.setAttribute('stroke', stroke);
        },
        onComplete: () => {
          resolve();
        },
      });
    });
  }

  destroy(): void {
    this.activeTween?.kill();
  }
}