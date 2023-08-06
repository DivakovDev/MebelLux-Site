import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForUs() {
  return (
      <section className="flex flex-col items-center p-8">
        <Image
          className="w-full h-auto"
          src="/images/for-us.jpg"
          width={256}
          height={512}
          alt="bed image"
        />

        <div className="flex flex-wrap">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold mb-4">За Компанията</h3>

            <p className="text-base mb-4">
              Фирма Мебеллукс произвеждаа мебели от естествена дървесина.
              Притежава дългогодишен опит в областта на мебелопроизводството и е
              оборудвана с модерни машини, които дават оптимална възможност за
              производството на качествени мебели. Продукцията ни се е наложила
              на Българския пазар благодарение на качество, конкурентни цени и
              най - вече на стремежа за удоволетворяване желанията на клиентите.
              Фирмата има богато разнообразие от материали и цветове с което се
              дава възможност на клиента да импровизира в идеите си.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/products" className="text-blue-600 hover:underline">
                Нашите продукти
              </Link>
              <Link href="/contacts" className="text-blue-600 hover:underline">
                Контакти
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
