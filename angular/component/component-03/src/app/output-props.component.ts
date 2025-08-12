import { Component, Output, EventEmitter, signal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-props',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './output-props.component.html',
  styleUrl: './output-props.component.scss'
})
export class OutputPropsComponent {
  model = model(0);
  text = signal('');
  @Output() valueChange = new EventEmitter<string>();

  emitValue() {
    this.valueChange.emit(this.text());
  }

  increment() {
    this.model.update(oldValue => oldValue+ 1);
  }
}
