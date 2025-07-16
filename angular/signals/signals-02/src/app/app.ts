import { CommonModule } from '@angular/common';
import { Component, signal, linkedSignal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // カテゴリ選択肢
  readonly categories = ['果物', '野菜'];
  readonly itemsMap: Record<string, string[]> = {
    '果物': ['りんご', 'みかん', 'バナナ'],
    '野菜': ['にんじん', 'キャベツ', 'トマト']
  };

  // シグナル
  readonly selectedCategory = signal(this.categories[0]);
  readonly selectedItem = linkedSignal({
    source: () => this.selectedCategory(),
    computation: (category: string) => this.itemsMap[category][0]
  });

  get items() {
    return this.itemsMap[this.selectedCategory()];
  }

  onCategoryChange(element: EventTarget | null) {
    if (!element) return;
    if (!(element instanceof HTMLSelectElement)) return;
    this.selectedCategory.set(element.value);
    // selectedItemはlinkedSignalで自動更新
    console.log('カテゴリ変更:', element.value);
  }

  onItemChange(element: EventTarget | null) {
    if (!element) return;
    if (!(element instanceof HTMLSelectElement)) return;
    this.selectedItem.set(element.value);
    console.log('アイテム変更:', element.value);
  }
}
