import { StressTestSuite } from './StressTest';

// ─────────────────────────────────────────────────────────────
//  Performance Panel UI
//
//  Hidden by default. Toggle with Ctrl+P (Cmd+P on Mac).
//  Runs the stress test suite and copies results to clipboard.
// ─────────────────────────────────────────────────────────────

export class PerfPanel {
  private version: string;
  private objSvg: SVGSVGElement;
  private morphSvg: SVGSVGElement;
  private panel: HTMLElement;
  private runBtn: HTMLButtonElement;
  private closeBtn: HTMLButtonElement;
  private progressEl: HTMLElement;
  private progressStage: HTMLElement;
  private progressBar: HTMLElement;
  private resultsEl: HTMLElement;

  constructor(
    version: string,
    objSvg: SVGSVGElement,
    morphSvg: SVGSVGElement
  ) {
    this.version = version;
    this.objSvg = objSvg;
    this.morphSvg = morphSvg;
    this.panel = q('#perf-panel');
    this.runBtn = q('#perf-run-btn');
    this.closeBtn = q('#perf-close');
    this.progressEl = q('#perf-progress');
    this.progressStage = q('#perf-progress-stage');
    this.progressBar = q('#perf-progress-bar');
    this.resultsEl = q('#perf-results');

    this.bindEvents();
  }

  private bindEvents(): void {
    this.runBtn.addEventListener('click', () => this.runTests());
    this.closeBtn.addEventListener('click', () => this.hide());

    // Ctrl+P / Cmd+P toggles the panel
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  private toggle(): void {
    if (this.panel.classList.contains('hidden')) {
      this.show();
    } else {
      this.hide();
    }
  }

  show(): void {
    this.panel.classList.remove('hidden');
  }

  hide(): void {
    this.panel.classList.add('hidden');
  }

  private async runTests(): Promise<void> {
    this.runBtn.disabled = true;
    this.resultsEl.textContent = '';
    this.progressEl.style.display = 'block';

    const suite = new StressTestSuite(this.version);
    const report = await suite.run(this.objSvg, this.morphSvg, (stage, pct) => {
      this.progressStage.textContent = stage;
      this.progressBar.style.width = `${pct}%`;
    });

    const formatted = StressTestSuite.formatReport(report);
    this.resultsEl.textContent = formatted;
    console.log(formatted);

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(formatted);
      this.progressStage.textContent = '✓ Скопировано в буфер обмена';
    } catch {
      this.progressStage.textContent = 'Результаты в панели — скопируй вручную';
    }

    this.runBtn.disabled = false;
  }
}

function q<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Not found: ${selector}`);
  return el;
}