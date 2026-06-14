import type { MouseState } from '../types';
import { gsap } from 'gsap';
// ── Tuning constants ─────────────────────────────────────────
/** Lerp smoothing factor: lower = heavier inertia. */
const LERP_EASE = 0.06;
/** Moon base position in background SVG coordinates. */
const MOON_BASE_X = 880;
const MOON_BASE_Y = 72;
/** Parallax shift amplitudes per layer. */
const STARS_SHIFT_X = 12;
const STARS_SHIFT_Y = 8;
const MOON_SHIFT_X = 30;
const MOON_SHIFT_Y = 20;
const CLOUD_SHIFT_EVEN = -18;
const CLOUD_SHIFT_ODD = -12;
const CLOUD_SHIFT_Y = 5;

// ─────────────────────────────────────────────────────────────
//  Mouse tracking — GSAP version
//  Uses gsap.quickTo() which is the recommended high-performance
//  way to follow mouse movement: animations are batched and
//  rendered in GSAP's optimized ticker loop.
// ─────────────────────────────────────────────────────────────

export class MouseTracker {
  private state: MouseState = { x: 0, y: 0, normX: 0, normY: 0 };
  private listeners: Array<(s: MouseState) => void> = [];
  private targetNormX = 0;
  private targetNormY = 0;
  private rafId = 0;

  constructor() {
    window.addEventListener('mousemove', this.onMouseMove);
    this.tick();
  }

  private onMouseMove = (e: MouseEvent): void => {
    this.state.x = e.clientX;
    this.state.y = e.clientY;
    this.targetNormX = (e.clientX / window.innerWidth) * 2 - 1;
    this.targetNormY = (e.clientY / window.innerHeight) * 2 - 1;
  };

  private tick = (): void => {
    this.state.normX = gsap.utils.interpolate(
      this.state.normX,
      this.targetNormX,
      LERP_EASE,
    );
    this.state.normY = gsap.utils.interpolate(
      this.state.normY,
      this.targetNormY,
      LERP_EASE,
    );
    this.listeners.forEach((fn) => fn(this.state));
    this.rafId = requestAnimationFrame(this.tick);
  };

  subscribe(fn: (s: MouseState) => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  destroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }
}

/**
 * Parallax background — moves stars, moon, clouds with mouse.
 * GSAP version uses quickTo for ultra-smooth, batched updates.
 */
export class ParallaxBackground {
  private setStarsX: (value: number) => gsap.core.Tween;
  private setStarsY: (value: number) => gsap.core.Tween;
  private setMoonX: (value: number) => gsap.core.Tween;
  private setMoonY: (value: number) => gsap.core.Tween;
  private cloudSetters: Array<{
    x: (v: number) => gsap.core.Tween;
    y: (v: number) => gsap.core.Tween;
  }> = [];
  private unsub: (() => void) | null = null;

  constructor(bgSvg: SVGSVGElement, tracker: MouseTracker) {
    const starGroup = bgSvg.querySelector('#star-g') as SVGGElement;
    const moon = bgSvg.querySelector('#moon') as SVGCircleElement;
    const clouds = Array.from(bgSvg.querySelectorAll('.cloud')) as SVGElement[];

    // GSAP quickTo creates a function that animates a property to a value
    // efficiently — much faster than calling gsap.to() on every mousemove.
    this.setStarsX = gsap.quickTo(starGroup, 'x', {
      duration: 0.6,
      ease: 'power2.out',
    });
    this.setStarsY = gsap.quickTo(starGroup, 'y', {
      duration: 0.6,
      ease: 'power2.out',
    });
    this.setMoonX = gsap.quickTo(moon, 'attr.cx', {
      duration: 0.6,
      ease: 'power2.out',
    });
    this.setMoonY = gsap.quickTo(moon, 'attr.cy', {
      duration: 0.6,
      ease: 'power2.out',
    });

    clouds.forEach((c) => {
      this.cloudSetters.push({
        x: gsap.quickTo(c, 'x', { duration: 0.6, ease: 'power2.out' }),
        y: gsap.quickTo(c, 'y', { duration: 0.6, ease: 'power2.out' }),
      });
    });

    this.unsub = tracker.subscribe(({ normX, normY }) => {
      this.setStarsX(normX * STARS_SHIFT_X);
      this.setStarsY(normY * STARS_SHIFT_Y);
      this.setMoonX(MOON_BASE_X + normX * MOON_SHIFT_X);
      this.setMoonY(MOON_BASE_Y + normY * MOON_SHIFT_Y);
      this.cloudSetters.forEach((setter, i) => {
        const factor = i % 2 === 0 ? CLOUD_SHIFT_EVEN : CLOUD_SHIFT_ODD;
        setter.x(normX * factor);
        setter.y(normY * CLOUD_SHIFT_Y);
      });
    });
  }

  destroy(): void {
    this.unsub?.();
  }
}

/**
 * Cursor trail — colorful SVG particles following mouse.
 * GSAP version uses gsap.quickTo for each particle.
 */
export class CursorTrail {
  private svg: SVGSVGElement;
  private particles: SVGCircleElement[] = [];
  private positions: Array<{ x: number; y: number }> = [];
  private maxParticles = 12;
  private rafId = 0;
  private colors = ['#FFD93D', '#FF6B9D', '#6BFFB8', '#C3B1E1', '#FF8C69'];
  private currentX = 0;
  private currentY = 0;

  constructor() {
    const ns = 'http://www.w3.org/2000/svg';
    this.svg = document.createElementNS(ns, 'svg') as SVGSVGElement;
    this.svg.style.cssText =
      'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999;overflow:visible;';
    document.body.appendChild(this.svg);

    for (let i = 0; i < this.maxParticles; i++) {
      const c = document.createElementNS(ns, 'circle') as SVGCircleElement;
      c.setAttribute('r', String(6 - i * 0.4));
      c.setAttribute('fill', this.colors[i % this.colors.length]);
      c.setAttribute('cx', '-100');
      c.setAttribute('cy', '-100');
      c.style.opacity = '0';
      this.svg.appendChild(c);
      this.particles.push(c);
      this.positions.push({ x: 0, y: 0 });
    }

    window.addEventListener('mousemove', this.onMove);
    this.animate();
  }

  private onMove = (e: MouseEvent): void => {
    this.currentX = e.clientX;
    this.currentY = e.clientY;
  };

  private animate = (): void => {
    // Shift positions forward
    this.positions.unshift({ x: this.currentX, y: this.currentY });
    if (this.positions.length > this.maxParticles) this.positions.pop();

    this.particles.forEach((p, i) => {
      const pos = this.positions[i];
      if (!pos) return;
      p.setAttribute('cx', String(pos.x));
      p.setAttribute('cy', String(pos.y));
      p.style.opacity = String(1 - i / this.maxParticles);
    });

    this.rafId = requestAnimationFrame(this.animate);
  };

  destroy(): void {
    window.removeEventListener('mousemove', this.onMove);
    cancelAnimationFrame(this.rafId);
    this.svg.remove();
  }
}
