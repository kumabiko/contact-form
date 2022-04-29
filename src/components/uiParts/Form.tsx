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
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
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
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
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
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
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
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
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
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                メールアドレス*
              </label>
              <input
                name="email"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                問い合わせ件名*
              </label>
              <input
                name="subject"
                className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
              >
                問い合わせ内容*
              </label>
              <textarea
                name="message"
                className="py-2 px-3 w-full h-64 text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-red-300 transition duration-100"
              ></textarea>
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
