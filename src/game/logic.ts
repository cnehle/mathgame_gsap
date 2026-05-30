import type { Question, Difficulty, DifficultyConfig } from '../types';
import { randomShape } from '../shapes';
import { buildObjectsSVG } from '../shapes/layout';

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  easy: {
    label: 'Easy',
    labelRu: 'Лёгкий',
    maxCount: 5,
    useAddition: false,
    useSubtraction: false,
    timeLimit: null,
    drawingMode: false,
  },
  medium: {
    label: 'Medium',
    labelRu: 'Средний',
    maxCount: 8,
    useAddition: true,
    useSubtraction: false,
    timeLimit: 90,
    drawingMode: false,
  },
  hard: {
    label: 'Hard',
    labelRu: 'Сложный',
    maxCount: 10,
    useAddition: true,
    useSubtraction: true,
    timeLimit: 60,
    drawingMode: false,
  },
  drawing: {
    label: 'Drawing',
    labelRu: 'Рисование',
    maxCount: 9,
    useAddition: false,
    useSubtraction: false,
    timeLimit: null,
    drawingMode: true,
  },
};

export class QuestionGenerator {
  private svgEl: SVGSVGElement;

  constructor(svgEl: SVGSVGElement) {
    this.svgEl = svgEl;
  }

  generate(qIdx: number, difficulty: Difficulty): Question {
    const cfg = DIFFICULTY_CONFIG[difficulty];

    if (cfg.drawingMode) {
      return this.makeCount(qIdx, cfg.maxCount);
    }
    if (!cfg.useAddition || qIdx < 3) {
      return this.makeCount(qIdx, cfg.maxCount);
    }
    if (!cfg.useSubtraction || qIdx < 6) {
      return Math.random() < 0.5
        ? this.makeAdd(qIdx, cfg.maxCount)
        : this.makeCount(qIdx, cfg.maxCount);
    }
    return Math.random() < 0.5
      ? this.makeSub(qIdx, cfg.maxCount)
      : this.makeAdd(qIdx, cfg.maxCount);
  }

  private makeCount(qIdx: number, maxCount: number): Question {
    const maxN = Math.min(maxCount, qIdx < 3 ? 5 : qIdx < 6 ? 8 : 9);
    const minN = qIdx < 3 ? 1 : 2;
    const n = rand(minN, maxN);
    const sh = randomShape();
    buildObjectsSVG(this.svgEl, n, sh);
    return { text: sh.question, answer: n };
  }

  private makeAdd(qIdx: number, maxCount: number): Question {
    const maxSum = Math.min(maxCount, qIdx < 6 ? 7 : 10);
    const a = rand(1, Math.floor(maxSum / 2));
    const b = rand(1, maxSum - a);
    const sh = randomShape();
    buildObjectsSVG(this.svgEl, a + b, sh);
    return { text: `${a} + ${b} = ?`, answer: a + b };
  }

  private makeSub(qIdx: number, maxCount: number): Question {
    const maxA = Math.min(maxCount, qIdx < 8 ? 8 : 10);
    const a = rand(4, maxA);
    const b = rand(1, a - 1);
    const sh = randomShape();
    buildObjectsSVG(this.svgEl, a, sh, b);
    return { text: `${a} − ${b} = ?`, answer: a - b };
  }
}

export function buildAnswerOptions(correct: number): number[] {
  const wrongs: number[] = [];
  while (wrongs.length < 3) {
    const w = rand(Math.max(0, correct - 3), Math.min(10, correct + 3));
    if (w !== correct && !wrongs.includes(w)) wrongs.push(w);
  }
  return shuffle([correct, ...wrongs]);
}

function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}