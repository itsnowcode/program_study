import { Component, signal, input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-input-props',
  standalone: true,
  template: `
    <div class="signal-input-props">
      <h4>シグナル入力プロパティ課題</h4>
      <p>必須: {{ requiredProp() }}</p>
      <p>オプション1: {{ optionalProp1() }}</p>
      <p>オプション2: {{ optionalProp2() }}</p>
    </div>
  `,
  styles: [`
    .signal-input-props { border: 1px solid #99c; padding: 1rem; margin: 1rem 0; }
  `]
})
export class SignalInputPropsComponent {
  requiredProp = input<string>();
  optionalProp1 = input<string>();
  optionalProp2 = input<string>('オプション２のデフォルト値');
}
