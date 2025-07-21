import { Component, signal, input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-input-props',
  standalone: true,
  templateUrl: './signal-input-props.component.html',
  styleUrl: './signal-input-props.component.scss'
})
export class SignalInputPropsComponent {
  requiredProp = input<string>();
  optionalProp1 = input<string>();
  optionalProp2 = input<string>('オプション２のデフォルト値');
}
