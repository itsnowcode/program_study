import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputPropsComponent } from './output-props.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OutputPropsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  childValue = '';
  model = signal(0)
  onChildValueChange(value: string) {
    this.childValue = value;
  }
}
