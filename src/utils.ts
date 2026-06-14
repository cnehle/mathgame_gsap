// ─────────────────────────────────────────────────────────────
//  Shared utility functions
// ─────────────────────────────────────────────────────────────

/** Random integer in [a, b] inclusive. */
export function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

/** Promise-based delay. */
export function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Query selector that throws if the element is missing. */
export function q<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}

/** Fisher–Yates shuffle — uniform random permutation. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}