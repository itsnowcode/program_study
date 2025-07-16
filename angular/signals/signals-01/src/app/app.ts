import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signals-01');

  // カウンターのsignal
  readonly count = signal(0);

  // 偶数/奇数をcomputedで判定
  readonly parity = computed(() => (this.count() % 2 === 0 ? '偶数 (Even)' : '奇数 (Odd)'));

  // +1
  increment() {
    this.count.update(v => v + 1);
  }

  // -1
  decrement() {
    this.count.update(v => v - 1);
  }

  // リセット
  reset() {
    this.count.set(0);
  }
}
