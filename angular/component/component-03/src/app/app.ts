import { Component } from '@angular/core';
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
  onChildValueChange(value: string) {
    this.childValue = value;
  }
}
