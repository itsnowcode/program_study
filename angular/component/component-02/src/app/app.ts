import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputPropsComponent } from './input-props.component';
import { SignalInputPropsComponent } from "./signal-input-props.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputPropsComponent, SignalInputPropsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
