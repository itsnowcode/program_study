import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypeSelectorComponent } from './type-selector.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypeSelectorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
