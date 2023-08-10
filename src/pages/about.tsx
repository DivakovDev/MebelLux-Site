import React, { useEffect } from "react";
import Image from "next/image";

export default function ForUs() {
  return (
    <section>
      <div className="relative py-16 bg-white sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72"></div>
              <svg
                className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative max-w-xl px-4 mx-auto mt-18 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-3xl lg:py-20">
              <div className="relative w-full h-full pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
                <Image
                  className="absolute inset-0 object-cover w-full h-full"
                  width={768}
                  height={768}
                  src="/images/for-us.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* <!-- Content area --> */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                За Компанията
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  Фирма Мебеллукс произвежда мебели от естествена дървесина.
                  Притежава дългогодишен опит в областта на мебелопроизводството
                  и е оборудвана с модерни машини, които дават оптимална
                  възможност за производството на качествени мебели. Продукцията
                  ни се е наложила на Българския пазар благодарение на качество,
                  конкурентни цени и най - вече на стремежа за удоволетворяване
                  желанията на клиентите. Фирмата има богато разнообразие от
                  материали и цветове с което се дава възможност на клиента да
                  импровизира в идеите си.
                </p>
              </div>
            </div>

            {/* <!-- Stats section --> */}
            <div className="mt-10">
              <div className="mt-10">
                <a href="/partners" className="text-base font-medium text-luxOrange hover:text-luxWenge">
                  {" "}
                  Научете повече за това как променяме света от нашите Парньори{" "}
                  <span aria-hidden="true">&rarr;</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
