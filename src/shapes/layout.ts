import type { Shape } from '../types';

const SVG_W = 600;
const OBJ_R = 28;
const PAD = 50;
const GAP = 24;
const STEP = OBJ_R * 2 + GAP;

export function buildObjectsSVG(
  svgEl: SVGSVGElement,
  count: number,
  shape: Shape,
  crossOutLast = 0,
): void {
  const cols = count <= 3 ? count : count <= 6 ? 3 : 3;
  const rows = Math.ceil(count / cols);
  const svgH = rows * STEP + PAD * 2;

  svgEl.setAttribute('viewBox', `0 0 ${SVG_W} ${svgH}`);
  svgEl.removeAttribute('width');
  svgEl.removeAttribute('height');

  let html = '';
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const rowLen = row === rows - 1 && count % cols !== 0 ? count % cols : cols;
    const rowWidth = rowLen * STEP - GAP;
    const startX = (SVG_W - rowWidth) / 2 + OBJ_R;
    const cx = startX + col * STEP;
    const cy = PAD + row * STEP + OBJ_R;
    const delay = (i * 0.08).toFixed(2);

    html += shape.draw(cx, cy, Number(delay));

    if (i >= count - crossOutLast) {
      const r = OBJ_R - 2;
      const xd = (i * 0.08 + 0.35).toFixed(2);
      html += `
        <line x1="${cx - r}" y1="${cy - r}" x2="${cx + r}" y2="${cy + r}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${xd}s both"/>
        <line x1="${cx + r}" y1="${cy - r}" x2="${cx - r}" y2="${cy + r}"
          stroke="#FF6B9D" stroke-width="6" stroke-linecap="round"
          style="animation:popIn .3s ${xd}s both"/>`;
    }
  }
  svgEl.innerHTML = html;
}
