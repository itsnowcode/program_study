import { Component, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-output-props',
  standalone: true,
  template: `
    <div class="output-props">
      <h4>出力プロパティ課題</h4>
      <input type="text" [value]="model()" (input)="onInput($event)" />
      <button (click)="emitValue()">値を出力</button>
      <p>現在の値: {{ model() }}</p>
    </div>
  `,
  styles: [`
    .output-props { border: 1px solid #9c9; padding: 1rem; margin: 1rem 0; }
    input { margin-right: 1rem; }
  `]
})
export class OutputPropsComponent {
  model = signal('');
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.model.set(value);
  }

  emitValue() {
    this.valueChange.emit(this.model());
  }
}
