/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="pb-6 bg-white sm:pb-8 lg:pb-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <header className="flex justify-between items-center py-4 mb-4 md:py-8">
            {/* logo - start  */}
            <a
              href="/"
              className="inline-flex gap-2.5 items-center text-2xl font-bold md:text-3xl text-black-800"
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                className="w-6 h-auto text-red-700"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Company
            </a>
            {/* logo - end  */}
          </header>

          <section className="flex overflow-hidden relative flex-1 shrink-0 justify-center items-center py-16 bg-gray-100 rounded-lg shadow-lg md:py-20 xl:py-48 min-h-96">
            {/* image - start  */}
            <img
              src="https://source.unsplash.com/VrAl7hRVX4A"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="object-cover object-center absolute inset-0 w-full h-full"
            />
            {/* image - end  */}

            {/* overlay - start  */}
            <div className="absolute inset-0  mix-blend-multiply"></div>
            {/* overlay - end  */}

            {/* text start  */}
            <div className="flex relative flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-4xl font-bold text-center text-white sm:text-5xl md:mb-12 md:text-6xl">
                お問合せフォーム
              </h1>
            </div>
            {/* text end  */}
          </section>
        </div>
      </div>
    </>
  );
};
