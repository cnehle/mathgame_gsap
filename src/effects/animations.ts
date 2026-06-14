import { gsap } from 'gsap';

// ─────────────────────────────────────────────────────────────
//  Centralized GSAP animation utilities.
//  Each function corresponds to a former CSS @keyframes animation.
// ─────────────────────────────────────────────────────────────

/**
 * Animates all shape groups inside the objects SVG:
 * - "popIn" entrance with elastic bounce
 * - "floatY" infinite vertical bobbing
 *
 * Replaces the former CSS @keyframes popIn + floatY combo.
 */
export function animateShapes(svgEl: SVGSVGElement): void {
  const shapes = svgEl.querySelectorAll<SVGGElement>('.shape-anim');

  shapes.forEach((shape) => {
    const delay = parseFloat(shape.dataset.delay ?? '0');

    // Reset any leftover state
    gsap.set(shape, {
      transformOrigin: 'center center',
      svgOrigin:
        shape.getBoundingClientRect().left +
        ' ' +
        shape.getBoundingClientRect().top,
    });

    // Entrance pop-in
    gsap.fromTo(
      shape,
      { scale: 0, rotation: -20, opacity: 0, transformOrigin: 'center center' },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        delay,
        ease: 'back.out(1.7)',
        transformOrigin: 'center center',
        onComplete: () => {
          // After pop-in finishes, start the gentle floating loop
          gsap.to(shape, {
            y: -5,
            duration: 1.3,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            transformOrigin: 'center center',
          });
        },
      },
    );
  });
}

/**
 * Stops every active animation inside the objects SVG.
 * Call before re-rendering shapes for a new question.
 */
export function killShapeAnimations(svgEl: SVGSVGElement): void {
  const shapes = svgEl.querySelectorAll<SVGGElement>('.shape-anim');
  shapes.forEach((shape) => gsap.killTweensOf(shape));
}

/**
 * Confetti-like burst of SVG star particles flying upward.
 * Replaces the former CSS @keyframes celebrate.
 */
export function celebrate(svgEl: SVGSVGElement): void {
  const stars = svgEl.querySelectorAll<SVGPolygonElement>('polygon');

  stars.forEach((star, i) => {
    // Get current position from transform attribute
    const transform = star.getAttribute('transform') ?? '';
    const match = transform.match(/translate\(([^,]+),([^)]+)\)/);
    const startX = match ? parseFloat(match[1]) : 0;
    const startY = match ? parseFloat(match[2]) : 0;

    // Random direction outward
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY + Math.sin(angle) * distance - 20;

    // Animate by directly updating the transform attribute
    gsap.fromTo(
      star,
      { attr: { transform: `translate(${startX},${startY})` }, opacity: 1 },
      {
        attr: { transform: `translate(${endX},${endY})` },
        opacity: 0,
        duration: 0.9 + Math.random() * 0.5,
        delay: i * 0.04,
        ease: 'power2.out',
      },
    );
  });
}

/**
 * Pulsing scale-up loop on the correct answer button.
 * Replaces the former CSS @keyframes correctPulse.
 */
export function pulseCorrectButton(svgEl: SVGElement): void {
  gsap.to(svgEl, {
    scale: 1.12,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    transformOrigin: 'center center',
  });
}

/**
 * Horizontal shake when user draws an unrecognized digit.
 * Replaces the former CSS @keyframes drawShake.
 */
export function shake(el: SVGElement | HTMLElement): void {
  gsap.fromTo(
    el,
    { x: 0 },
    {
      x: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      keyframes: {
        x: [-8, 8, -5, 5, 0],
        easeEach: 'sine.inOut',
      },
    },
  );
}

/**
 * Quick scale bounce when user draws a correct digit.
 * Replaces the former CSS @keyframes drawSuccess.
 */
export function pulseSuccess(el: SVGElement | HTMLElement): void {
  gsap.fromTo(
    el,
    { scale: 1 },
    {
      scale: 1.08,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    },
  );
}

/**
 * Card slide-out / slide-in transition between questions.
 * Replaces the former CSS transition + JS reflow trick.
 */
export function transitionCard(
  card: HTMLElement,
  onMidpoint: () => void,
): Promise<void> {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });
    tl.to(card, {
      y: -40,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    });
    tl.call(onMidpoint);
    tl.fromTo(
      card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'back.out(1.2)',
      },
    );
  });
}

/**
 * Hover effect for answer buttons.
 * Used in mouseenter / mouseleave callbacks.
 */
export function buttonHoverIn(btn: HTMLElement, glowColor: string): void {
  gsap.to(btn, {
    scale: 1.12,
    y: -4,
    duration: 0.18,
    ease: 'back.out(2)',
    filter: `drop-shadow(0 8px 16px ${glowColor}88)`,
  });
}

export function buttonHoverOut(btn: HTMLElement): void {
  gsap.to(btn, {
    scale: 1,
    y: 0,
    duration: 0.18,
    ease: 'power2.out',
    filter: 'drop-shadow(0 0 0 transparent)',
  });
}

/**
 * Title drop-in on menu screen.
 * Replaces the former CSS @keyframes titleDrop.
 */
export function animateTitle(el: HTMLElement): void {
  gsap.fromTo(
    el,
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' },
  );
}

/**
 * Subtle decorative float for the morph element on menu screen.
 */
export function morphDecorationFloat(el: SVGElement): void {
  gsap.to(el, {
    y: -8,
    rotation: 5,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    transformOrigin: 'center center',
  });
}

/**
 * Subtle pulse for the scroll hint at the bottom.
 */
export function pulseHint(el: HTMLElement): void {
  gsap.fromTo(
    el,
    { opacity: 0.35 },
    {
      opacity: 0.7,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    },
  );
}

/**
 * Brain icon pulsing while neural network trains.
 */
export function pulseBrain(el: SVGElement): void {
  gsap.to(el, {
    scale: 1.06,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    transformOrigin: 'center center',
  });
}

/**
 * Complete-screen title bouncing.
 */
export function bounceTitle(el: HTMLElement): void {
  gsap.to(el, {
    y: -14,
    duration: 0.6,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });
}
