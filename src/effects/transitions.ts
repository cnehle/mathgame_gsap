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
      if (e.deltaY > 30) this.triggerNext();
    };

    this.touchHandler = (e: TouchEvent) => {
      this.touchStartY = e.touches[0].clientY;
    };

    this.touchEndHandler = (e: TouchEvent) => {
      const delta = this.touchStartY - e.changedTouches[0].clientY;
      if (delta > 40) this.triggerNext();
    };

    window.addEventListener('wheel', this.wheelHandler, { passive: true });
    window.addEventListener('touchstart', this.touchHandler, { passive: true });
    window.addEventListener('touchend', this.touchEndHandler, { passive: true });
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

    this.container.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s';
    this.container.style.transform = 'translateY(-40px)';
    this.container.style.opacity = '0';

    await delay(350);
    onMidpoint();

    this.container.style.transition = 'none';
    this.container.style.transform = 'translateY(40px)';
    this.container.style.opacity = '0';

    // Force reflow
    void this.container.offsetHeight;

    this.container.style.transition = 'transform 0.4s cubic-bezier(.34,1.2,.64,1), opacity 0.4s';
    this.container.style.transform = 'translateY(0)';
    this.container.style.opacity = '1';

    await delay(400);
    this.isAnimating = false;
  }

  destroy(): void {
    window.removeEventListener('wheel', this.wheelHandler);
    window.removeEventListener('touchstart', this.touchHandler);
    window.removeEventListener('touchend', this.touchEndHandler);
  }
}

// Celebration burst — SVG emoji particles
export function spawnCelebration(): void {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
  svg.setAttribute('viewBox', '0 0 400 200');
  svg.style.cssText =
    'position:fixed;top:20%;left:50%;transform:translateX(-50%);pointer-events:none;z-index:50;width:min(400px,90vw);';

    // SVG star particles instead of emoji
  const starColors = ['#FFD93D', '#FF6B9D', '#6BFFB8', '#C3B1E1', '#FF8C69'];
  for (let i = 0; i < 14; i++) {
    const star = document.createElementNS(ns, 'polygon');
    const cx = rand(30, 370);
    const cy = rand(40, 160);
    const size = rand(8, 16);
    // 5-pointed star around (cx, cy)
    const points: string[] = [];
    for (let k = 0; k < 10; k++) {
      const angle = (Math.PI / 5) * k - Math.PI / 2;
      const r = k % 2 === 0 ? size : size * 0.45;
      points.push(`${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`);
    }
    star.setAttribute('points', points.join(' '));
    star.setAttribute('fill', starColors[i % starColors.length]);
    star.setAttribute('opacity', '0.9');
    star.style.cssText = `animation:celebrate ${rand(7, 13) / 10}s ${(i * 0.06).toFixed(2)}s ease-out both;`;
    svg.appendChild(star);
  }

  document.body.appendChild(svg);
  setTimeout(() => svg.remove(), 1600);
}

// Timer bar component
export class TimerBar {
  private bar: HTMLElement;
  private startTime = 0;
  private duration = 0;
  private rafId = 0;
  private onExpire: (() => void) | null = null;
  private active = false;

  constructor(barEl: HTMLElement) {
    this.bar = barEl;
  }

  start(seconds: number, onExpire: () => void): void {
    this.stop();
    this.duration = seconds * 1000;
    this.startTime = performance.now();
    this.onExpire = onExpire;
    this.active = true;
    this.bar.style.display = 'block';
    this.tick();
  }

  stop(): void {
    this.active = false;
    cancelAnimationFrame(this.rafId);
    this.bar.style.width = '100%';
  }

  hide(): void {
    this.stop();
    this.bar.style.display = 'none';
  }

  private tick = (): void => {
    if (!this.active) return;
    const elapsed = performance.now() - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);
    const remaining = 1 - progress;
    this.bar.style.width = `${remaining * 100}%`;

    // Color shifts from green → yellow → red as time runs out
    if (remaining > 0.5) {
      this.bar.style.background = '#6BFFB8';
    } else if (remaining > 0.25) {
      this.bar.style.background = '#FFD93D';
    } else {
      this.bar.style.background = '#FF6B9D';
    }

    if (progress >= 1) {
      this.active = false;
      this.onExpire?.();
      return;
    }
    this.rafId = requestAnimationFrame(this.tick);
  };
}

function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
