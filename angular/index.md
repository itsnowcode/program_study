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
    - 課題１：コンポーネントの構造：解答例
        - タイプセレクターのコンポーネントを作成
        - 属性セレクターのコンポーネントを作成
        - タイプセレクターのテンプレート内に属性セレクターを記載する
        - タイプセレクターのテンプレートと属性セレクターのテンプレートを出力する
    - 課題２：入力プロパティ：解答例
        - 入力プロパティを3つ持つコンポーネントを作成
        - 1つは必須プロパティとする
        - テンプレートで2つのプロパティに値を指定してセレクターを記載する
        - 必須プロパティは入力変換する (transformを使用)
        - 3つの入力プロパティを出力する
    - 課題３：出力プロパティ：解答例
        - 出力プロパティを1つ作成
        - モデル入力を1つ作成し双方向バインディングでバインドする


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

