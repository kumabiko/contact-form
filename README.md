# contact-form

- コーポレートサイトのお問い合わせフォーム

# DEMO

contact-form-inky.vercel.app

- 入力画面

- 確認画面

- 完了画面

# Confirmation procedure(確認手順)

- 完了画面のブラウザのデバッグコンソールで送信データが確認できます。
  - 実際に送信は行われておりません。

# Features(こだわりポイント)

- フロントエンドの技術選定として、採用される事が多い`Next.js`と`Tailwind CSS`を使って実装しました。
- バリデーションには[React-hook-form](https://react-hook-form.com/jp/)を使用しました。
- 郵便番号を入力した際に、住所以降が自動入力される様になります。
  - 幾つかライブラリを検討した結果、シンプルでカスタムフックとして使いやすい[use-postal-jp](https://github.com/aiji42/use-postal-jp)を使っています。
  - React-hook-form との兼ね合いで、自動入力しても値が set されていないという問題があり、悩みましたが、useEffect を使って setValue する事で解決しました。
