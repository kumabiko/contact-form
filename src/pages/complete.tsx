import Link from 'next/link';

import { Header } from '@/components/uiParts/Header';

const Complete = () => {
  //直アクセスの場合は何かしらのフラグ管理をして、リダイレクト処理をする想定
  return (
    <>
      <Header />
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <p className="mx-auto max-w-screen-md text-center  md:text-lg">
              お問い合わせありがとうございました。
            </p>
            <p className="mx-auto max-w-screen-md text-center">
              <Link href="/">トップに戻る</Link>
            </p>
          </div>
          {/* text - end */}
        </div>
      </div>
    </>
  );
};

export default Complete;
