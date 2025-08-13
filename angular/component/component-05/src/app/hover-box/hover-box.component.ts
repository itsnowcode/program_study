import { Component } from '@angular/core';

@Component({
  selector: 'app-hover-box',
  imports: [],
  templateUrl: './hover-box.component.html',
  styleUrl: './hover-box.component.scss',
  host: {
    '[style.backgroundColor]': 'bgColor',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HoverBoxComponent {
  bgColor = 'lightblue';

  onMouseEnter() {
    this.bgColor = 'orange';
  }

  onMouseLeave() {
    this.bgColor = 'lightblue';
  }
}
