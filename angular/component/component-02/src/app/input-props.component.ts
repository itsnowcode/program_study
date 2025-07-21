import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-props',
  standalone: true,
  templateUrl: './input-props.component.html',
  styleUrl: './input-props.component.scss'
})
export class InputPropsComponent {
  @Input({ required: true, transform: (value: string) => value.trim() }) requiredProp!: string;
  @Input() optionalProp1?: string;
  @Input() optionalProp2?: string = 'オプション２のデフォルト値';
}
