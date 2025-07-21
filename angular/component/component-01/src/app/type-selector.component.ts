import { Component } from '@angular/core';
import { AttrSelectorComponent } from './attr-selector.component';

@Component({
  selector: 'app-type-selector',
  standalone: true,
  imports: [AttrSelectorComponent],
  templateUrl: './type-selector.component.html',
  styleUrl: './type-selector.component.scss'
})
export class TypeSelectorComponent {}
