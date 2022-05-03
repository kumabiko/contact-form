/* eslint-disable @next/next/no-html-link-for-pages */
const Complete = () => {
  //直アクセスの場合は何かしらのフラグ管理をして、リダイレクト処理をする想定
  return (
    <div className="wrapper">
      <h1>お問い合わせありがとうございました。</h1>
      <p>
        <a href="/">トップに戻る</a>
      </p>
    </div>
  );
};

export default Complete;
