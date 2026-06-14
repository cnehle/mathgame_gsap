import { gsap } from 'gsap';
import { transitionCard } from './animations';
import { rand } from '../utils';
/** Wheel deltaY threshold to advance to the next question. */
const WHEEL_THRESHOLD = 30;
/** Swipe distance (px) threshold on touch devices. */
const SWIPE_THRESHOLD = 40;

// Scroll-based slide transition between questions
export class ScrollTransition {
  private container: HTMLElement;
  private isAnimating = false;
  public enabled = false;
  private onScrollCallback: (() => void) | null = null;
  private wheelHandler: (e: WheelEvent) => void;
  private touchStartY = 0;
  private touchHandler: (e: TouchEvent) => void;
  private touchEndHandler: (e: TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;

    this.wheelHandler = (e: WheelEvent) => {
      if (e.deltaY > WHEEL_THRESHOLD) this.triggerNext();
    };

    this.touchHandler = (e: TouchEvent) => {
      this.touchStartY = e.touches[0].clientY;
    };

    this.touchEndHandler = (e: TouchEvent) => {
      const delta = this.touchStartY - e.changedTouches[0].clientY;
      if (delta > SWIPE_THRESHOLD) this.triggerNext();
    };

    window.addEventListener('wheel', this.wheelHandler, { passive: true });
    window.addEventListener('touchstart', this.touchHandler, { passive: true });
    window.addEventListener('touchend', this.touchEndHandler, {
      passive: true,
    });
  }

  onNext(fn: () => void): void {
    this.onScrollCallback = fn;
  }

  private triggerNext(): void {
    if (this.isAnimating || !this.onScrollCallback) return;
    if (!this.enabled) return;
    this.onScrollCallback();
  }

  // Animate card sliding out down, new content coming in from top
  async transition(onMidpoint: () => void): Promise<void> {
    if (this.isAnimating) return;
    this.isAnimating = true;

    await transitionCard(this.container, onMidpoint);

    this.isAnimating = false;
  }

  destroy(): void {
    window.removeEventListener('wheel', this.wheelHandler);
    window.removeEventListener('touchstart', this.touchHandler);
    window.removeEventListener('touchend', this.touchEndHandler);
  }
}

// Celebration burst — SVG emoji particles
import { celebrate as gsapCelebrate } from './animations';

export function spawnCelebration(): void {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
  svg.setAttribute('viewBox', '0 0 500 300');
  svg.style.cssText =
    'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:9999;width:min(500px,90vw);height:min(300px,40vh);';

  const colors = ['#FFD93D', '#FF6B9D', '#6BFFB8', '#C3B1E1', '#FF8C69'];

  for (let i = 0; i < 14; i++) {
    const star = document.createElementNS(ns, 'polygon');
    const cx = rand(40, 380);
    const cy = rand(50, 160);
    const size = rand(8, 18);
    const color = colors[i % colors.length];

    star.setAttribute(
      'points',
      `0,${-size} ${size * 0.3},${-size * 0.3} ${size},${-size * 0.3} ` +
        `${size * 0.5},${size * 0.2} ${size * 0.7},${size * 0.9} ` +
        `0,${size * 0.4} ${-size * 0.7},${size * 0.9} ` +
        `${-size * 0.5},${size * 0.2} ${-size},${-size * 0.3} ${-size * 0.3},${-size * 0.3}`,
    );
    star.setAttribute('fill', color);
    star.setAttribute('transform', `translate(${cx},${cy})`);
    svg.appendChild(star);
  }

  document.body.appendChild(svg);
  // Trigger GSAP animation on all the stars at once
  gsapCelebrate(svg);
  setTimeout(() => svg.remove(), 1600);
}

// Timer bar component
export class TimerBar {
  private bar: HTMLElement;
  private timerTween: gsap.core.Tween | null = null;
  private onExpire: (() => void) | null = null;

  constructor(barEl: HTMLElement) {
    this.bar = barEl;
  }

  start(seconds: number, onExpire: () => void): void {
    this.stop();
    this.onExpire = onExpire;
    this.bar.style.display = 'block';

    this.timerTween = gsap.fromTo(
      this.bar,
      { width: '100%', backgroundColor: '#6BFFB8' },
      {
        width: '0%',
        backgroundColor: '#FF6B9D',
        duration: seconds,
        ease: 'none',
        onUpdate: () => {
          const progress = this.timerTween?.progress() ?? 0;
          // Discrete color steps for clarity
          if (progress < 0.5) {
            this.bar.style.background = '#6BFFB8';
          } else if (progress < 0.75) {
            this.bar.style.background = '#FFD93D';
          } else {
            this.bar.style.background = '#FF6B9D';
          }
        },
        onComplete: () => {
          this.onExpire?.();
        },
      },
    );
  }

  stop(): void {
    this.timerTween?.kill();
    this.timerTween = null;
    this.bar.style.width = '100%';
  }

  hide(): void {
    this.stop();
    this.bar.style.display = 'none';
  }
}
