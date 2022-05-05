// フォームの入力値についての型定義。useFormフックを書く時に使う。
export type FormInput = {
  familyName: string; //名前(姓)*
  givenName: string; // 名前(名)*
  kanaFamilyName: string; //ふりがな(姓)*
  kanaGivenName: string; // ふりがな(名)*
  companyName: string; // 社名
  email: string; // メールアドレス*
  zipCode: string; // 郵便番号
  prefecture: string; // 都道府県
  address1: string; // 市区村町
  address2: string; // 番地
  buildingNameAndRoomNumber: string; // 建物名・部屋番号
  phoneNumber: string; // 電話番号
  product: 'Aサービスについて' | 'Bサービスについて' | 'Cサービスについて' | 'その他'; // どの製品について
  subject: string; // 問い合わせ件名*
  message: string; // 問い合わせ内容*
};
