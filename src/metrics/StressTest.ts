import { PerformanceTracker, type BenchmarkResult } from './PerformanceTracker';
import { SHAPES } from '../shapes';
import { buildObjectsSVG } from '../shapes/layout';
import { SVGMorpher } from '../effects/morpher';
import { delay } from '../utils';

// ─────────────────────────────────────────────────────────────
//  Stress Test Suite
//
//  Runs a fixed sequence of intensive operations to compare
//  animation performance between the CSS and GSAP versions.
//  Same operations, same order, same iteration counts — only the
//  underlying animation engine differs between versions.
// ─────────────────────────────────────────────────────────────

export interface StressTestReport {
  version: string;
  timestamp: string;
  userAgent: string;
  results: BenchmarkResult[];
  summary: {
    totalDurationMs: number;
    avgFpsAcrossTests: number;
    totalLongFrames: number;
  };
}

export class StressTestSuite {
  private tracker = new PerformanceTracker();
  private version: string;

  constructor(version: string) {
    this.version = version;
  }

  /**
   * Run the full benchmark suite and return a report.
   * Test 1: render 50 sets of shapes (object count animation stress)
   * Test 2: 20 consecutive morph transitions
   * Test 3: 10 seconds of idle observation (background activity only)
   */
  async run(
    objSvg: SVGSVGElement,
    morphSvg: SVGSVGElement,
    onProgress?: (stage: string, pct: number) => void,
  ): Promise<StressTestReport> {
    const results: BenchmarkResult[] = [];

    // ── Test 1: shape rendering stress ──
    onProgress?.('Тест 1: рендеринг фигур', 0);
    results.push(await this.testShapeRendering(objSvg, onProgress));

    // Small pause between tests
    await delay(500);

    // ── Test 2: morph transitions ──
    onProgress?.('Тест 2: морфинг', 33);
    results.push(await this.testMorphing(morphSvg, onProgress));

    await delay(500);

    // ── Test 3: idle observation ──
    onProgress?.('Тест 3: фоновая активность', 66);
    results.push(await this.testIdleAnimation());

    onProgress?.('Готово', 100);

    // Summary
    const totalDurationMs = results.reduce((s, r) => s + r.durationMs, 0);
    const validFps = results
      .map((r) => r.frameMetrics?.avgFps ?? 0)
      .filter((f) => f > 0);
    const avgFpsAcrossTests =
      validFps.reduce((s, f) => s + f, 0) / Math.max(validFps.length, 1);
    const totalLongFrames = results.reduce(
      (s, r) => s + (r.frameMetrics?.longFrames ?? 0),
      0,
    );

    return {
      version: this.version,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      results,
      summary: {
        totalDurationMs,
        avgFpsAcrossTests,
        totalLongFrames,
      },
    };
  }

  /**
   * Render 50 sets of shapes — each set has 9 objects.
   * Total: 450 SVG groups with entrance + float animations.
   */
  private async testShapeRendering(
    svgEl: SVGSVGElement,
    onProgress?: (stage: string, pct: number) => void,
  ): Promise<BenchmarkResult> {
    return this.tracker.benchmark(
      'Рендеринг 50×9 фигур с анимациями',
      async () => {
        for (let i = 0; i < 50; i++) {
          const shape = SHAPES[i % SHAPES.length];
          buildObjectsSVG(svgEl, 9, shape);
          // Allow the browser to render before the next batch
          await delay(50);
          if (i % 5 === 0) {
            onProgress?.(`Тест 1: рендеринг фигур (${i}/50)`, (i / 50) * 33);
          }
        }
      },
    );
  }

  /**
   * Perform 20 consecutive morph transitions.
   * Stresses the path-interpolation pipeline.
   */
  private async testMorphing(
    morphSvg: SVGSVGElement,
    onProgress?: (stage: string, pct: number) => void,
  ): Promise<BenchmarkResult> {
    // Fresh morpher instance for the test
    morphSvg.innerHTML = '';
    const morpher = new SVGMorpher(morphSvg);

    return this.tracker.benchmark('20 морфингов подряд', async () => {
      for (let i = 0; i < 20; i++) {
        await morpher.morphToRandom();
        onProgress?.(`Тест 2: морфинг (${i + 1}/20)`, 33 + ((i + 1) / 20) * 33);
      }
      morpher.destroy();
    });
  }

  /**
   * Just observe FPS for 5 seconds with no user interaction.
   * Captures idle cost of running parallax + cursor trail + background.
   */
  private async testIdleAnimation(): Promise<BenchmarkResult> {
    return this.tracker.benchmark('5 секунд фоновой анимации', async () => {
      await delay(5000);
    });
  }

  /**
   * Format the full report as plain text for copy-paste into thesis.
   */
  static formatReport(report: StressTestReport): string {
    const lines: string[] = [];
    lines.push('═'.repeat(60));
    lines.push(`  ОТЧЁТ О ПРОИЗВОДИТЕЛЬНОСТИ — ${report.version}`);
    lines.push('═'.repeat(60));
    lines.push(`Дата:        ${report.timestamp}`);
    lines.push(`Браузер:     ${report.userAgent}`);
    lines.push('');
    report.results.forEach((r) => {
      lines.push(PerformanceTracker.format(r));
      lines.push('');
    });
    lines.push('─'.repeat(60));
    lines.push('  ИТОГ');
    lines.push('─'.repeat(60));
    lines.push(
      `Общее время:     ${(report.summary.totalDurationMs / 1000).toFixed(2)}с`,
    );
    lines.push(
      `Средний FPS:     ${report.summary.avgFpsAcrossTests.toFixed(1)}`,
    );
    lines.push(`Долгих кадров:   ${report.summary.totalLongFrames}`);
    lines.push('═'.repeat(60));
    return lines.join('\n');
  }
}
