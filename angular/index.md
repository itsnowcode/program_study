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
        - 選択されたカテゴリまたはアイテムをコンソールに出力する
- [コンポーネント](https://angular.jp/guide/components)
    - 課題１：コンポーネントの構造：[解答例](./component/component-01/)
        - タイプセレクターのコンポーネントを作成する
        - 属性セレクターのコンポーネントを作成する
        - タイプセレクターのテンプレート内に属性セレクターを記載する
        - タイプセレクターのテンプレートと属性セレクターのテンプレートを表示する
    - 課題２：入力プロパティ：[解答例](./component/component-02/)
        - 入力プロパティを3つ持つコンポーネントを作成する
        - 1つは必須プロパティとする
        - テンプレートで2つのプロパティに値を指定してセレクターを記載する
        - 必須プロパティは入力変換する (transformを使用)
        - 3つの入力プロパティを表示する
    - 課題３：出力プロパティ：[解答例](./component/component-03/)
        - 出力プロパティを1つ、モデル入力を1つ持つコンポーネントを作成する
        - モデル入力は双方向バインディングでバインドする
    - 課題４：ng-content：[解答例](./component/component-04/)
        - MessageCardComponentを作成する
        - 親コンポーネントのテンプレート内で、<app-message-card>好きなメッセージカードの内容をHTMLで記載する</app-message-card>のように記載して、親から渡されたHTMLが表示されるようにする
        - 表示部分はボーダーと背景色付きのボックスで囲まれているようにする
        - （追加の課題）ヘッダーと本文を分けて投影できるように改良する
    - 課題５：ホスト要素
        - 「マウスを載せると背景色が変わるボックス」コンポーネントを作成する
        - 次の条件を満たすこと
            1. コンポーネントのホスト要素に背景色とパディングを適用する
                - :host CSSセレクターを使用する
            1. マウスがホスト要素に入ったときは背景色を別の色に変更する
                - hostプロパティ を使って背景色を切り替える
            1. マウスが離れたら元の背景色に戻す
                - 同上
    - 課題６：ライフサイクル
        - 以下のライフサイクルフックを実装し、各メソッド内で console.log() によるログ出力を行うコンポーネントを作成する
            - constructor
            - ngOnChanges
            - ngOnInit
            - ngDoCheck
            - ngAfterContentInit
            - ngAfterContentChecked
            - ngAfterViewInit
            - ngAfterViewChecked
            - ngOnDestroy
        - Input プロパティを一つ追加し、その変更がトリガーとなるフックの動作も確認する
        - 親コンポーネントに以下のように記述し、ボタン操作で変更することで動作を確認する
            - 作成したコンポーネントのInput プロパティに指定する変数を変更可能にするボタンを作成
            - @if ブロックを使用して作成したコンポーネントの表示・非表示を切り替えるボタンを作成
    - 課題７：ビュークエリ
    - 課題８：コンテンツクエリ
    - 課題９：DOM API
    - 課題１０：継承
    



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

