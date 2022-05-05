// next.jsの機能
import Link from 'next/link';
import { useRouter } from 'next/router';
//react-hook-form
import { useFormContext, SubmitHandler } from 'react-hook-form'; // SubmitHandlerは、submitイベントに関する関数の型宣言に使う

import { FormInput } from '@/types/contact';

export const Confirm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    getValues,
    formState: { isValid }, //form内の入力の有無や送信の状態などを取得できる errors以外にも色々ある
  } = useFormContext<FormInput>();

  const values = getValues(); // 入力データを取得

  //直アクセスの場合はリダイレクト
  //※必須項目の無いフォームは無いと思うのでisValidで判定
  if (!isValid) {
    void router.push(`/`);
  }

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    //ここでメール送信などのAPIを叩くなど処理をする想定
    await router.push('/complete');
  };

  return (
    <>
      {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden bg-white">
          <div className="flex justify-center items-center py-5 px-4 mt-6 sm:col-span-2 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">入力確認</h3>
          </div>
          <div className="px-4 mx-auto max-w-screen-md md:px-8">
            <dl>
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">名前</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.familyName} {values.givenName}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ふりがな</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.kanaFamilyName} {values.kanaGivenName}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">社名</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.companyName}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.email}</dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">郵便番号</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.zipCode}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">都道府県</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.prefecture}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">市区村町</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.address1}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">番地</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.address2}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">建物名・部屋番号</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.buildingNameAndRoomNumber}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">電話番号</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.phoneNumber}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">どの製品について</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.product}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">問い合わせ件名</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.subject}
                </dd>
              </div>
              {/* 行 end */}
              {/* 行 start */}
              <div className="py-5 px-4 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">問い合わせ内容</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {values.message}
                </dd>
              </div>
              {/* 行 end */}
            </dl>
          </div>
        </div>

        <div className="flex justify-center items-center my-6 sm:col-span-2">
          <button className="inline-block py-3 px-8 text-sm font-semibold text-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg outline-none focus-visible:ring ring-red-300 transition duration-100 md:text-base">
            送信
          </button>
          <Link href="/">
            <a className="mx-4">入力内容を修正する</a>
          </Link>
        </div>
      </form>
    </>
  );
};
