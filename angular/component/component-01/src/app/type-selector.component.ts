import { Component } from '@angular/core';
import { AttrSelectorComponent } from './attr-selector.component';

@Component({
  selector: 'app-type-selector',
  standalone: true,
  imports: [AttrSelectorComponent],
  template: `
    <div class="type-selector">
      <h4>タイプセレクター</h4>
      <p>これはタイプセレクターのテンプレートです。</p>
      <div appAttrSelector></div>
    </div>
  `,
  styles: [`
    .type-selector { border: 1px solid #ccc; padding: 1rem; margin: 1rem 0; }
  `]
})
export class TypeSelectorComponent {}
