import type { Shape } from '../types';

export const SHAPES: Shape[] = [
  {
    name: 'star',
    question: 'Сколько звёздочек ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.6s ${d}s ease-in-out infinite">
          <polygon points="0,-26 6,-10 24,-10 10,3 15,22 0,10 -15,22 -10,3 -24,-10 -6,-10"
            fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <ellipse cx="-5" cy="-9" rx="6" ry="5" fill="rgba(255,255,255,.4)" transform="rotate(-30,-5,-9)"/>
        </g>
      </g>`;
    },
  },
  {
    name: 'apple',
    question: 'Сколько яблок ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.9s ${d}s ease-in-out infinite">
          <ellipse cx="0" cy="5" rx="20" ry="22" fill="#e74c3c" stroke="#922b21" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-1" rx="7" ry="10" fill="rgba(255,255,255,.2)"/>
          <line x1="0" y1="-17" x2="0" y2="-27" stroke="#4a2c0a" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="7" cy="-25" rx="8" ry="6" fill="#27ae60" stroke="#1a6e3c" stroke-width="1.5" transform="rotate(-22,7,-25)"/>
        </g>
      </g>`;
    },
  },
  {
    name: 'balloon',
    question: 'Сколько шариков ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 3.1s ${d}s ease-in-out infinite">
          <ellipse cx="0" cy="-5" rx="18" ry="22" fill="#C3B1E1" stroke="#7d5db5" stroke-width="2.5"/>
          <ellipse cx="-6" cy="-13" rx="6" ry="8" fill="rgba(255,255,255,.28)"/>
          <polygon points="0,17 -5,23 5,23" fill="#7d5db5"/>
          <path d="M0,23 Q6,29 0,37 Q-6,45 0,51" fill="none" stroke="#7d5db5" stroke-width="2"/>
        </g>
      </g>`;
    },
  },
  {
    name: 'fish',
    question: 'Сколько рыбок ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.3s ${d}s ease-in-out infinite">
          <ellipse cx="-2" cy="0" rx="22" ry="14" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <polygon points="20,0 33,-12 33,12" fill="#6BFFB8" stroke="#1a7a56" stroke-width="2.5"/>
          <circle cx="-12" cy="-4" r="4" fill="#1a7a56"/>
          <circle cx="-12" cy="-4" r="1.8" fill="white"/>
          <path d="M-4,-9 Q4,-14 12,-9" fill="none" stroke="#1a7a56" stroke-width="2"/>
        </g>
      </g>`;
    },
  },
  {
    name: 'flower',
    question: 'Сколько цветочков ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 3.3s ${d}s ease-in-out infinite">
          <ellipse cx="0"   cy="-20" rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2"/>
          <ellipse cx="19"  cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(72,19,-6)"/>
          <ellipse cx="12"  cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(144,12,16)"/>
          <ellipse cx="-12" cy="16"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(216,-12,16)"/>
          <ellipse cx="-19" cy="-6"  rx="7" ry="12" fill="#FF8C69" stroke="#c24d1e" stroke-width="2" transform="rotate(288,-19,-6)"/>
          <circle cx="0" cy="0" r="12" fill="#FFD93D" stroke="#c8880a" stroke-width="2.5"/>
          <circle cx="-3" cy="-3" r="4" fill="rgba(255,255,255,.45)"/>
        </g>
      </g>`;
    },
  },
  {
    name: 'rocket',
    question: 'Сколько ракет ты видишь?',
    draw(cx, cy, d) {
      return `<g transform="translate(${cx},${cy})">
        <g style="animation:popIn .4s ${d}s cubic-bezier(.34,1.56,.64,1) both,floatY 2.1s ${d}s ease-in-out infinite">
          <ellipse cx="0" cy="-10" rx="10" ry="18" fill="#a29bfe" stroke="#6c5ce7" stroke-width="2"/>
          <polygon points="0,-28 -10,-10 10,-10" fill="#6c5ce7"/>
          <rect x="-4" y="-6" width="8" height="10" rx="3" fill="#74b9ff"/>
          <polygon points="-10,8 -18,20 -4,14" fill="#fd79a8"/>
          <polygon points="10,8 18,20 4,14" fill="#fd79a8"/>
          <ellipse cx="0" cy="18" rx="5" ry="8" fill="#fdcb6e" opacity=".9">
            <animate attributeName="ry" values="8;12;8" dur="0.3s" repeatCount="indefinite"/>
          </ellipse>
        </g>
      </g>`;
    },
  },
];

export function randomShape(): Shape {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}
