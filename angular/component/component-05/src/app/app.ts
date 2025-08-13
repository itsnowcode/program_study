import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverBoxComponent } from './hover-box/hover-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverBoxComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
