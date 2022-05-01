import React from 'react';

export const Form = () => {
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
          <form className="grid gap-4 mx-auto max-w-screen-md sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                名前(姓)*
              </label>
              <input
                name="first-name"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                名前(名)*
              </label>
              <input
                name="last-name"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                ふりがな(姓)*
              </label>
              <input
                name="first-name"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                pattern="[\u3041-\u3096]*"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                ふりがな(名)*
              </label>
              <input
                name="last-name"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                社名
              </label>
              <input
                name="company"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>
            {/* メールアドレス start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                メールアドレス*
              </label>
              <input
                name="email"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            {/* 郵便番号 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="phone"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                郵便番号
              </label>
              <input
                type="text"
                name="zip-code"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                placeholder="郵便番号"
                pattern="\d{3}-?\d{4}"
              />
            </div>

            {/* 住所 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="phone"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                都道府県
              </label>
              <input
                type="text"
                name="zip-code"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                placeholder="都道府県"
              />
            </div>

            {/* 市町村区 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                市町村区
              </label>
              <input
                name="subject"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            {/* 番地 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                番地
              </label>
              <input
                name="subject"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            {/* 建物名・部屋番号 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                建物名・部屋番号
              </label>
              <input
                name="subject"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>

            {/* 電話番号 */}
            <div className="sm:col-span-2 md:w-1/2">
              <label
                htmlFor="phone"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
                placeholder="電話番号"
                pattern="\d{2,4}-?\d{2,4}-?\d{3,4}"
              />
            </div>

            {/* どの製品について start */}
            <div className="mb-6 w-full md:mb-0 md:w-1/2 ">
              <label
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                htmlFor="grid-state"
              >
                どの製品について
              </label>
              <div className="relative">
                <select
                  className="block py-3 px-2 pr-8 w-full leading-tight text-gray-700 bg-gray-50 focus:bg-white rounded border border-gray-200 focus:border-gray-500 appearance-none"
                  id="grid-state"
                >
                  <option selected>選択して下さい</option>
                  <option>Aサービスについて</option>
                  <option>Bサービスについて</option>
                  <option>Cサービスについて</option>
                  <option>その他</option>
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
                問い合わせ件名*
              </label>
              <input
                name="subject"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 focus:bg-white rounded border"
              />
            </div>
            {/* 問い合わせ内容 start */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                問い合わせ内容*
              </label>
              <textarea
                name="message"
                className="py-2 px-3 w-full h-64 text-gray-800 bg-gray-50 focus:bg-white rounded border"
              ></textarea>
            </div>

            <div className="mb-6 md:flex md:items-center">
              <label className="block font-bold text-gray-500">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">個人情報の取り扱いに同意します。</span>
              </label>
            </div>

            <div className="flex justify-center items-center sm:col-span-2">
              <button className="inline-block py-3 px-8 text-sm font-semibold text-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg outline-none focus-visible:ring ring-red-300 transition duration-100 md:text-base">
                送信
              </button>
            </div>
          </form>
          {/* form - end */}
        </div>
      </div>
    </>
  );
};
