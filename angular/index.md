# Angularの詳細ガイドの課題

- [ベースプロジェクト(VSCode)](./base/)

## 基本構成
- [シグナル](https://angular.jp/guide/signals)
    - 課題１：シグナルを使ったカウンターアプリ：[解答例](./signals/signals-01/)
        - 現在の数値を表示 (signalを使用)
        - 値が偶数か奇数かを表示（computedを使用）
        - ボタンで＋1, −1できる (.updateを使用)
        - 0にリセットできる (.setを使用)
        - 数値が変わったら数値をコンソールに出力 (effectを使用)
    - 課題２：linkedSignalを使った連動セレクトボックス (テンプレート含む)：[解答例](./signals/signals-02/)
        - カテゴリのセレクトボックスを表示 (signalを使用)
        - 選択されたカテゴリのアイテムのセレクトボックスを表示（linkedSignalを使用）
        - カテゴリが選択されたら、アイテムは先頭を選択する
        - 例：カテゴリは果物・野菜等
- [コンポーネント](https://angular.jp/guide/components)
    - 課題１：コンポーネントの構造：[解答例](./component/component-01/)
        - タイプセレクターのコンポーネントを作成する
        - 属性セレクターのコンポーネントを作成する
        - タイプセレクターのテンプレート内に属性セレクターを記載する
        - タイプセレクターのテンプレートと属性セレクターのテンプレートを出力する
    - 課題２：入力プロパティ：[解答例](./component/component-02/)
        - 入力プロパティを3つ持つコンポーネントを作成する
        - 1つは必須プロパティとする
        - テンプレートで2つのプロパティに値を指定してセレクターを記載する
        - 必須プロパティは入力変換する (transformを使用)
        - 3つの入力プロパティを出力する
    - 課題３：出力プロパティ：[解答例](./component/component-03/)
        - 出力プロパティを1つ、モデル入力を1つ持つコンポーネントを作成する
        - モデル入力は双方向バインディングでバインドする
    - 課題４：ng-content：解答例
        - MessageCardComponentを作成する
        - 親コンポーネントのテンプレート内で、<app-message-card>好きなメッセージカードの内容をHTMLで記載する</app-message-card>のように記載して、親から渡されたHTMLが表示されるようにする
        - 表示部分はボーダーと背景色付きのボックスで囲まれているようにする
        - （追加の課題）ヘッダーと本文を分けて投影できるように改良する


- [テンプレート](https://angular.jp/guide/templates)
- [ディレクティブ](https://angular.jp/guide/directives)

## アプリの構造
- [依存性の注入](https://angular.jp/guide/di)
- [ルーティング](https://angular.jp/guide/routing)
- [フォーム](https://angular.jp/guide/forms)

## HTTP通信
- [HTTPクライアント](https://angular.jp/guide/http)

## テスト
- [テスト](https://angular.jp/guide/testing)

