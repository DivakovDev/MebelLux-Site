import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    id: 1,
    title: "РУМ Кремиковци",
    href: "#",
    Adress: 'Адрес:  гр. София, Квартал Ботунец - "РУМ Кремиковци"',
    PhoneNumber: "Тел: 089 850 9708 / 088 894 7480 /  088 565 0562",
    fax: "Факс: 029942149",
    imageUrl: "/images/Partners-img/rum.png",
  },
  {
    id: 2,
    title: "Транс-мебел",
    href: "#",
    Adress: 'Адрес:  гр. Банско, ул. Патриарх Евтимий №11',
    PhoneNumber: "Тел:  089 366 3354",
    imageUrl: "/images/Partners-img/transmebel.png",
  },
  {
    id: 3,
    title: "Краси - M 79",
    href: "#",
    Adress: 'Адрес:  гр. Пловдив, ж.к. Тракия, бл. 194, вх. Г',
    PhoneNumber: "Тел: 089 503 7678",
    imageUrl: "/images/Partners-img/krasi.jpeg",
  },
  {
    id: 4,
    title: "Мебели Бета",
    href: "#",
    Adress: 'Адрес:  гр. Пловдив ул. Бяло море 2',
    PhoneNumber: "Тел: 087 989 8858 / 087 989 8848",
    imageUrl: "/images/Partners-img/mebeli-beta-sofia-logo.jpg",
  },
  {
    id: 5,
    title: "Транс-мебел",
    href: "#",
    Adress: 'Адрес:  гр. Гоце Делчев, ул. Дунав №1',
    PhoneNumber: "Тел: 089 795 7600 / 089 795 7614 / 089 888 8383",
    imageUrl: "/images/Partners-img/transmebel.png",
  },
  {
    id: 6,
    title: "Краси - M 79",
    href: "#",
    Adress: 'Адрес:  гр. Пловдив,  ж.к. Тракия, бл. 144',
    PhoneNumber: "Тел: 087 903 8019",
    imageUrl: "/images/Partners-img/krasi.jpeg",
  },
  {
    id: 7,
    title: "Мебели Арена",
    href: "#",
    Adress: 'Адрес:  гр. Пловдив ул. Бяло море 2',
    PhoneNumber: "Тел: 087 997 1722",
    imageUrl: "/images/Partners-img/mebeliarena.png",
  },
  {
    id: 8,
    title: "Транс-мебел",
    href: "#",
    Adress: 'Адрес:  село Сатовча, Център',
    PhoneNumber: "Тел: 089 366 3351",
    imageUrl: "/images/Partners-img/transmebel.png",
  },
  {
    id: 9,
    title: "Краси - M 79",
    href: "#",
    Adress: 'Адрес:  гр.Добрич, ул. "Екзарх Йосиф I" №5, ет. 2',
    PhoneNumber: "Тел: 087 903 8018",
    imageUrl: "/images/Partners-img/krasi.jpeg",
  },
  {
    id: 10,
    title: "Мебели Венус",
    href: "#",
    Adress: 'Адрес:  гр. Пловдив, бул. "България" №180',
    PhoneNumber: "Тел: 089 357 2051",
    imageUrl: "/images/Partners-img/mebeli-venus.jpg",
  },
  {
    id: 11,
    title: "Мебели 1",
    href: "#",
    Adress: 'Адрес:  гр. Хасково, бул. "Раковски" 35',
    PhoneNumber: "Тел: 087 989 8858",
    imageUrl: "/images/Partners-img/mebeli1.jpg",
  },
  {
    id: 12,
    title: "М и М -Т. Момчилов",
    href: "#",
    Adress: 'Адрес:  София, ул. "Цар Симеон" №27А',
    PhoneNumber: "Тел: 029 831 448",
  },
  {
    id: 13,
    title: "Пер-65 ЕООД",
    href: "#",
    Adress: 'Адрес:  гр. София, ул. Пиротска №73',
    PhoneNumber: "Тел:  0887587833 / 0878587833",
  },
  {
    id: 14,
    title: "КЕА-83 ООД",
    href: "#",
    Adress: 'Адрес:  гр. Русе, ул. Княжеска №5',
    PhoneNumber: "Тел: 087 961 1047",
  },
  {
    id: 15,
    title: "Илина ООД",
    href: "#",
    Adress: 'Адрес:  гр. Бургас, ул. Цариградска №36',
    PhoneNumber: "Тел: 087 815 3033",
  },
  {
    id: 17,
    title: "Яница мебел ЕООД",
    href: "#",
    Adress: 'Адрес:  гр. Бургас, ул. Фердинандова №37',
    PhoneNumber: "Тел: 088 460 3372",
  },
  {
    id: 18,
    title: "ЕТ Мая мебел",
    href: "#",
    Adress: 'Адрес:  гр. Бургас, ул. Фердинандова №76',
    PhoneNumber: "Тел: 088 771 3470",
  },
  // More posts...
];

export default function Partners() {
    const [showAllPartners, setShowAllPartners] = React.useState(false);

  return (
    <div className="bg-white py-18 sm:py-12">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Нашите партньори
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Заедно създаваме превъзходство: Нашите надеждни партньори за автентични български дървени мебели
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners
          .slice(0, showAllPartners ? partners.length : 9)
          .map((partner) => (
            <article
              key={partner.id}
              className="flex flex-col items-center justify-between max-w-xl border-2 border-luxThistle"
            >
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {partner.title}
              </h3>
              <div className="relative flex items-center mt-3 gap-x-4">
                <img
                  src={partner.imageUrl}
                  alt=""
                  className="h-20 rounded-lg w-max bg-gray-50"
                />
              </div>
              <div className="relative pb-4 text-center group">
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {partner.Adress}
                </p>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {partner.PhoneNumber}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllPartners(!showAllPartners)}
              className="px-4 py-2 font-medium text-white rounded bg-luxOrange focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {showAllPartners ? "Покажи по-малко" : "Покажи всички"}
            </button>
          </div>
    </div>
  );
}
