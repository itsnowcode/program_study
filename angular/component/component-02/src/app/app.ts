import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputPropsComponent } from "./input-props.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputPropsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
