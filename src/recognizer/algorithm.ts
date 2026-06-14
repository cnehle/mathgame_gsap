import type { Point, RecognizerTemplate, RecognitionResult } from '../types';

const NUM_POINTS = 64;
const SQUARE_SIZE = 250;
const ORIGIN: Point = { x: 0, y: 0 };

export function recognize(
  points: Point[],
  templates: RecognizerTemplate[],
): RecognitionResult {
  const candidate = normalize(points);
  let bestScore = -Infinity;
  let bestDigit = -1;

  const scores: Array<{ digit: number; score: number }> = [];
  for (const tmpl of templates) {
    const score = greedyCloudMatch(candidate, tmpl.points);
    scores.push({ digit: tmpl.digit, score });
    if (score > bestScore) {
      bestScore = score;
      bestDigit = tmpl.digit;
    }
  }
  console.log(
    'Recognition scores:',
    scores.map((s) => `${s.digit}:${s.score.toFixed(3)}`).join(' '),
  );
  console.log('Best:', bestDigit, 'score:', bestScore);
  return { digit: bestDigit, score: Math.max(0, bestScore) };
}

function greedyCloudMatch(pts: Point[], tmpl: Point[]): number {
  const n = pts.length;
  const step = Math.max(1, Math.floor(Math.pow(n, 0.5)));
  let minDistance = Infinity;

  for (let i = 0; i < n; i += step) {
    const d1 = cloudDistance(pts, tmpl, i);
    const d2 = cloudDistance(tmpl, pts, i);
    minDistance = Math.min(minDistance, Math.min(d1, d2));
  }
  // Average distance per point — produces a comparable metric regardless of n
  const avgDistance = minDistance / n;
  // Convert distance to similarity score (0..1) using exponential decay
  return Math.exp(-avgDistance / 20);
}

function cloudDistance(pts: Point[], tmpl: Point[], start: number): number {
  const n = pts.length;
  const matched = new Array<boolean>(n).fill(false);
  let sum = 0;
  let i = start;

  do {
    let minIdx = -1;
    let minDist = Infinity;
    for (let j = 0; j < n; j++) {
      if (!matched[j]) {
        const d = dist(pts[i], tmpl[j]);
        if (d < minDist) {
          minDist = d;
          minIdx = j;
        }
      }
    }
    matched[minIdx] = true;
    const weight = 1 - ((i - start + n) % n) / n;
    sum += weight * minDist;
    i = (i + 1) % n;
  } while (i !== start);

  return sum;
}

export function normalize(points: Point[]): Point[] {
  let pts = resample(points, NUM_POINTS);
  const radians = indicativeAngle(pts);
  pts = rotateBy(pts, -radians);
  pts = scaleTo(pts, SQUARE_SIZE);
  pts = translateTo(pts, ORIGIN);
  return pts;
}

function resample(points: Point[], n: number): Point[] {
  if (points.length < 2) return points;

  const totalLength = pathLength(points);
  if (totalLength === 0) return points;

  const I = totalLength / (n - 1);
  let D = 0;
  let working = points.map((p) => ({ ...p }));
  const newPoints: Point[] = [{ ...working[0] }];

  let i = 1;
  while (i < working.length) {
    const d = dist(working[i - 1], working[i]);
    if (d === 0) {
      i++;
      continue;
    }
    if (D + d >= I) {
      const qx =
        working[i - 1].x + ((I - D) / d) * (working[i].x - working[i - 1].x);
      const qy =
        working[i - 1].y + ((I - D) / d) * (working[i].y - working[i - 1].y);
      const q: Point = { x: qx, y: qy };
      newPoints.push(q);
      working.splice(i, 0, q);
      D = 0;
    } else {
      D += d;
    }
    i++;
  }

  while (newPoints.length < n) {
    newPoints.push({ ...working[working.length - 1] });
  }
  if (newPoints.length > n) {
    newPoints.length = n;
  }
  return newPoints;
}

function indicativeAngle(points: Point[]): number {
  const c = centroid(points);
  return Math.atan2(c.y - points[0].y, c.x - points[0].x);
}

function rotateBy(points: Point[], radians: number): Point[] {
  const c = centroid(points);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return points.map((p) => ({
    x: (p.x - c.x) * cos - (p.y - c.y) * sin + c.x,
    y: (p.x - c.x) * sin + (p.y - c.y) * cos + c.y,
  }));
}

function scaleTo(points: Point[], size: number): Point[] {
  const b = boundingBox(points);
  return points.map((p) => ({
    x: p.x * (size / b.width),
    y: p.y * (size / b.height),
  }));
}

function translateTo(points: Point[], pt: Point): Point[] {
  const c = centroid(points);
  return points.map((p) => ({
    x: p.x + pt.x - c.x,
    y: p.y + pt.y - c.y,
  }));
}

function dist(a: Point, b: Point): number {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}

function pathLength(points: Point[]): number {
  let d = 0;
  for (let i = 1; i < points.length; i++) d += dist(points[i - 1], points[i]);
  return d;
}

function centroid(points: Point[]): Point {
  const x = points.reduce((s, p) => s + p.x, 0) / points.length;
  const y = points.reduce((s, p) => s + p.y, 0) / points.length;
  return { x, y };
}

function boundingBox(points: Point[]): { width: number; height: number } {
  const minX = Math.min(...points.map((p) => p.x));
  const maxX = Math.max(...points.map((p) => p.x));
  const minY = Math.min(...points.map((p) => p.y));
  const maxY = Math.max(...points.map((p) => p.y));
  return {
    width: Math.max(maxX - minX, 1),
    height: Math.max(maxY - minY, 1),
  };
}
