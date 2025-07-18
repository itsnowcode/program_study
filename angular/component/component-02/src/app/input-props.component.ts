import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-props',
  standalone: true,
  template: `
    <div class="input-props">
      <h4>入力プロパティ課題</h4>
      <p>必須: {{ requiredProp }}</p>
      <p>オプション1: {{ optionalProp1 }}</p>
      <p>オプション2: {{ optionalProp2 }}</p>
    </div>
  `,
  styles: [`
    .input-props { border: 1px solid #c99; padding: 1rem; margin: 1rem 0; }
  `]
})
export class InputPropsComponent {
  @Input({ required: true, transform: (value: string) => value.trim() }) requiredProp!: string;
  @Input() optionalProp1?: string;
  @Input() optionalProp2?: string = 'オプション２のデフォルト値';
}
