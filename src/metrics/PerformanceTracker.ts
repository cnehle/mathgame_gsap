// ─────────────────────────────────────────────────────────────
//  Performance Tracker
//
//  Collects runtime metrics for animation library comparison:
//  - FPS (frames per second, averaged + min over a window)
//  - Long frame count (frames > 16.7ms — visible jank)
//  - Memory usage (heap size snapshots)
//  - Stress test results (rapid shape/morph rendering)
// ─────────────────────────────────────────────────────────────

export interface FrameMetrics {
  avgFps: number;
  minFps: number;
  maxFrameTime: number;
  longFrames: number; // frames > 16.7ms (below 60fps)
  totalFrames: number;
  durationMs: number;
}

export interface MemorySnapshot {
  usedJSHeapSize: number; // bytes
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export interface BenchmarkResult {
  label: string;
  startMs: number;
  endMs: number;
  durationMs: number;
  frameMetrics?: FrameMetrics;
  memoryBefore?: MemorySnapshot;
  memoryAfter?: MemorySnapshot;
}

interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

export class PerformanceTracker {
  private frameTimes: number[] = [];
  private lastFrameTime = 0;
  private rafId = 0;
  private isRecording = false;

  /**
   * Start recording frame times for FPS analysis.
   * Call stopRecording() to get the metrics.
   */
  startRecording(): void {
    this.frameTimes = [];
    this.lastFrameTime = performance.now();
    this.isRecording = true;
    this.tick();
  }

  stopRecording(): FrameMetrics {
    this.isRecording = false;
    cancelAnimationFrame(this.rafId);
    return this.computeMetrics();
  }

  private tick = (): void => {
    if (!this.isRecording) return;
    const now = performance.now();
    const delta = now - this.lastFrameTime;
    this.frameTimes.push(delta);
    this.lastFrameTime = now;
    this.rafId = requestAnimationFrame(this.tick);
  };

  private computeMetrics(): FrameMetrics {
    if (this.frameTimes.length === 0) {
      return {
        avgFps: 0,
        minFps: 0,
        maxFrameTime: 0,
        longFrames: 0,
        totalFrames: 0,
        durationMs: 0,
      };
    }

    const total = this.frameTimes.reduce((s, t) => s + t, 0);
    const avgFrameTime = total / this.frameTimes.length;
    const maxFrameTime = Math.max(...this.frameTimes);
    const longFrames = this.frameTimes.filter((t) => t > 16.7).length;

    return {
      avgFps: 1000 / avgFrameTime,
      minFps: 1000 / maxFrameTime,
      maxFrameTime,
      longFrames,
      totalFrames: this.frameTimes.length,
      durationMs: total,
    };
  }

  /**
   * Snapshot current memory usage if available (Chrome only).
   */
  snapshotMemory(): MemorySnapshot | undefined {
    const perf = performance as PerformanceWithMemory;
    if (!perf.memory) return undefined;
    return {
      usedJSHeapSize: perf.memory.usedJSHeapSize,
      totalJSHeapSize: perf.memory.totalJSHeapSize,
      jsHeapSizeLimit: perf.memory.jsHeapSizeLimit,
    };
  }

  /**
   * Wrap an async benchmark in a labeled measurement.
   * Captures duration, FPS during the run, and memory before/after.
   */
  async benchmark(
    label: string,
    fn: () => void | Promise<void>
  ): Promise<BenchmarkResult> {
    const memoryBefore = this.snapshotMemory();
    this.startRecording();
    const startMs = performance.now();
    await fn();
    const endMs = performance.now();
    const frameMetrics = this.stopRecording();
    const memoryAfter = this.snapshotMemory();

    return {
      label,
      startMs,
      endMs,
      durationMs: endMs - startMs,
      frameMetrics,
      memoryBefore,
      memoryAfter,
    };
  }

  /**
   * Format a benchmark result as a human-readable string.
   */
  static format(result: BenchmarkResult): string {
    const lines = [
      `▶ ${result.label}`,
      `  Duration:    ${result.durationMs.toFixed(2)}ms`,
    ];

    if (result.frameMetrics) {
      const fm = result.frameMetrics;
      lines.push(
        `  Avg FPS:     ${fm.avgFps.toFixed(1)}`,
        `  Min FPS:     ${fm.minFps.toFixed(1)}`,
        `  Long frames: ${fm.longFrames} / ${fm.totalFrames} (${((fm.longFrames / fm.totalFrames) * 100).toFixed(1)}%)`,
        `  Worst frame: ${fm.maxFrameTime.toFixed(2)}ms`
      );
    }

    if (result.memoryBefore && result.memoryAfter) {
      const deltaMB =
        (result.memoryAfter.usedJSHeapSize - result.memoryBefore.usedJSHeapSize) /
        (1024 * 1024);
      const totalMB = result.memoryAfter.usedJSHeapSize / (1024 * 1024);
      lines.push(
        `  Memory:      ${totalMB.toFixed(2)} MB (Δ ${deltaMB > 0 ? '+' : ''}${deltaMB.toFixed(2)} MB)`
      );
    }

    return lines.join('\n');
  }
}