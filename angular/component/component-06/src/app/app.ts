import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  parentCount = 0;
  showChild = true;

  changeData() {
    this.parentCount++;
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }

}
