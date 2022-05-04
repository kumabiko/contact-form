//エラーメッセージコンポーネント
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// react-hook-formから、useFormContextとSubmitHandlerをimport
// SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { FormInput } from '@/types/contact';

export const Form = () => {
  const [isChecked, setIdChecked] = useState(false);
  const router = useRouter();

  // useFormフックを使い、registerとhandleSubmitを取得する。
  // registerは、フォームのフィールドを登録することで、バリデーションを機能させる。
  // handleSubmitは、submitイベントの制御に関わる。
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<FormInput>();

  // submitイベントが発生して、かつバリデーションが成功した場合に実行する関数。
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await router.push(`/?confirm=1`);
  };

  const handleChange = () => {
    setIdChecked(!isChecked);
    console.log(isChecked);
    console.log('isChecked');
  };

  return (
    <>
      {/* form */}
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              下記フォームにご記入の上、お問合せください。
            </p>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-xs">
              *は必須入力となります。
            </p>
          </div>
          {/* text - end */}

          {/* form - start */}
          <form
            className="grid gap-4 mx-auto max-w-screen-md sm:grid-cols-2"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* 名前(姓)* */}
            <div>
              <label
                htmlFor="firstName"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                名前(姓)<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('familyName', { required: true })}
              />
              {errors.familyName && (
                <p className="my-2 text-sm  font-bold text-red-600">名前(姓)は必須項目です。</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                名前(名)<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('givenName', { required: true })}
              />
              {errors.givenName && (
                <p className="my-2 text-sm  font-bold text-red-600">名前(名)は必須項目です。</p>
              )}
            </div>

            <div>
              <label
                htmlFor="kanaFamilyName"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                ふりがな(姓)<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                pattern="[\u3041-\u3096]*"
                {...register('kanaFamilyName', { required: true })}
              />
              {errors.kanaFamilyName && (
                <p className="my-2 text-sm  font-bold text-red-600">ふりがな(姓)は必須項目です。</p>
              )}
            </div>

            <div>
              <label
                htmlFor="kanaGivenName"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                ふりがな(名)<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('kanaGivenName', { required: true })}
              />
              {errors.kanaGivenName && (
                <p className="my-2 text-sm  font-bold text-red-600">ふりがな(名)は必須項目です。</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                社名
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('companyName')}
              />
            </div>
            {/* メールアドレス start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                メールアドレス<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="my-2 text-sm  font-bold text-red-600">
                  メールアドレスを正しく入力して下さい。
                </p>
              )}
            </div>

            {/* 郵便番号 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="zipCode"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                郵便番号
              </label>
              <input
                type="text"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                placeholder="000-0000"
                {...register('zipCode', {
                  pattern: /^[0-9]{3}-[0-9]{4}$/,
                })}
              />
              {errors.zipCode && (
                <p className="my-2 text-sm font-bold text-red-600">
                  郵便番号を正しく入力して下さい。
                </p>
              )}
            </div>

            {/* 住所 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="prefecture"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                都道府県
              </label>
              <input
                type="text"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('prefecture')}
              />
            </div>

            {/* 市町村区 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="municipality"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                市区村町
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('municipality')}
              />
            </div>

            {/* 番地 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="houseNumber"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                番地
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('houseNumber')}
              />
            </div>

            {/* 建物名・部屋番号 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="buildingNameAndRoomNumber"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                建物名・部屋番号
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('buildingNameAndRoomNumber')}
              />
            </div>

            {/* 電話番号 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="phoneNumber"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                電話番号
              </label>
              <input
                placeholder="(例) 000-0000-0000"
                type="tel"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
                {...register('phoneNumber', {
                  pattern: /^0\d{1,3}-\d{2,4}-\d{3,4}$/,
                })}
              />
              {errors.phoneNumber && (
                <p className="my-2 text-sm font-bold text-red-600">
                  電話番号を正しく入力して下さい。
                  <br />
                </p>
              )}
            </div>

            {/* どの製品について start */}
            <div className="mb-6 w-full sm:col-span-2 md:mb-0 md:w-1/2  ">
              <label
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                htmlFor="product"
              >
                どの製品について
              </label>
              <div className="relative">
                <select
                  className="block py-3 px-2 pr-8 w-full leading-tight text-gray-700 bg-gray-50 focus:bg-white rounded border border-gray-200 focus:border-gray-500 appearance-none"
                  id="product"
                  {...register('product')}
                >
                  <option value="" hidden>
                    選択して下さい
                  </option>
                  <option value="Aサービスについて">Aサービスについて</option>
                  <option value="Bサービスについて">Bサービスについて</option>
                  <option value="Cサービスについて">Cサービスについて</option>
                  <option value="その他">その他</option>
                </select>
                <div className="flex absolute inset-y-0 right-0 items-center px-2 text-gray-700 pointer-events-none">
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* 問い合わせ件名 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                問い合わせ件名<span className="text-red-600">*</span>
              </label>
              <input
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('subject', { required: true })}
              />
              {errors.subject && (
                <p className="my-2 text-sm  font-bold text-red-600">
                  問い合わせ件名は必須項目です。
                </p>
              )}
            </div>
            {/* 問い合わせ内容 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                問い合わせ内容<span className="text-red-600">*</span>
              </label>
              <textarea
                className="py-2 px-3 w-full h-64 text-gray-800 bg-gray-50 focus:bg-white rounded border"
                {...register('message', { required: true })}
              ></textarea>
              {errors.message && (
                <p className="my-2 text-sm  font-bold text-red-600">
                  問い合わせ内容は必須項目です。
                </p>
              )}
            </div>

            <div className="mb-6 md:flex md:items-center">
              <label className="block font-bold text-gray-500">
                <input className="mr-2 leading-tight" type="checkbox" onChange={handleChange} />
                <span className="text-sm">個人情報の取り扱いに同意します。</span>
              </label>
            </div>

            <div className="flex justify-center sm:col-span-2">
              {!isValid && (
                <>
                  <p className="text-sm font-bold text-red-600">
                    まだ全ての必須項目の入力が完了していません。
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-center items-center sm:col-span-2">
              <button
                disabled={!isValid || !isChecked}
                className="inline-block py-3 px-8 text-sm font-semibold text-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-gray-300 rounded-lg outline-none focus-visible:ring ring-red-300 transition duration-100 md:text-base"
              >
                確認
              </button>
            </div>
          </form>
          {/* form - end */}
        </div>
      </div>
    </>
  );
};
