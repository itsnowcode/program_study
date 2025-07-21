import { Component, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-output-props',
  standalone: true,
  templateUrl: './output-props.component.html',
  styleUrl: './output-props.component.scss'
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
