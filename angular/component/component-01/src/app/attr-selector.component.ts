import { Component } from '@angular/core';

@Component({
  selector: '[appAttrSelector]',
  standalone: true,
  template: `
    <div class="attr-selector">
      <h5>属性セレクター</h5>
      <p>これは属性セレクターのテンプレートです。</p>
    </div>
  `,
  styles: [`
    .attr-selector { border: 1px dashed #999; padding: 0.5rem; margin: 0.5rem 0; }
  `]
})
export class AttrSelectorComponent {}
