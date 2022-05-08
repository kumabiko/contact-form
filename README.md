# contact-form

- コーポレートサイトのお問い合わせフォーム

# DEMO

contact-form-inky.vercel.app

- 入力画面

|入力前|入力後|
|---|---|
|![入力画面_記入前](https://user-images.githubusercontent.com/71934559/167281611-0addffab-3ec6-4651-a357-70ed4c156980.png)|![入力画面_記入後](https://user-images.githubusercontent.com/71934559/167281583-9d417217-35e8-4776-9ca0-4da01b23ced9.png)|

- 確認画面
![確認画面](https://user-images.githubusercontent.com/71934559/167281595-0ebd1b09-9a34-46c1-b706-9437a0d4ee9f.png)

- 完了画面

![完了画面](https://user-images.githubusercontent.com/71934559/167281591-3f903de3-5619-4c9d-a901-0f3f61364e92.png)

<img width="1675" alt="送信データ確認" src="https://user-images.githubusercontent.com/71934559/167281530-826443b0-8302-420c-a713-718d6fad25cb.png">

# Confirmation procedure(確認手順)

- 完了画面のブラウザのデバッグコンソールで送信データが確認できます。
  - 実際に送信は行われておりません。

# Features(こだわりポイント)

- フロントエンドの技術選定として、採用される事が多い`Next.js`と`Tailwind CSS`を使って実装しました。
- バリデーションには[React-hook-form](https://react-hook-form.com/jp/)を使用しました。
- 郵便番号を入力した際に、住所以降が自動入力される様になります。
  - 幾つかライブラリを検討した結果、シンプルでカスタムフックとして使いやすい[use-postal-jp](https://github.com/aiji42/use-postal-jp)を使っています。
  - React-hook-form との兼ね合いで、自動入力しても値が set されていないという問題があり、悩みましたが、useEffect を使って setValue する事で解決しました。
