import Product from "./product";
import React, { useState } from "react";
// add those items ito the products array:

const products = [
  {
    id: 1,
    name: "Спални",
    description: "Спални с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/bedImages/background1.png",
    href: "/beds",
  },
  {
    id: 2,
    name: "Кухни",
    description: "Кухни с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/kitchen.jpg",
    href: "#",
  },
  {
    id: 3,
    name: "Гардероби",
    description: "Гардероби с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/weardrop.jpg",
    href: "/products/weardrops",
  },
  {
    id: 4,
    name: "Нощни шкафчета",
    description: "Нощни шкафчета с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/bedtables.jpg",
    href: "/products/bedtables",
  },
  {
    id: 5,
    name: "Бюра",
    description: "Бюра с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/desks.jpg",
    href: "/products/desks",
  },
  {
    id: 6,
    name: "Антрета",
    description: "Антрета с различни размери и цветове",
    options: "Размери: 160/200, 180/200, 200/200",
    imageSrc: "/images/Products-img/antre.jpg",
    href: "/antre",
  },
  {
    id: 7,
    name: "Детски легла",
    description: "Детски легла с различни дизайни и цветове",
    options: "Размери: 80/160, 90/190, 120/200",
    imageSrc: "/images/Products-img/children-beds.jpg",
    href: "/products/children-beds",
  },
  {
    id: 8,
    name: "Секции",
    description: "Секции за всекидневна или хол с различни стилове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/sections.jpg",
    href: "/products/sections",
  },
  {
    id: 9,
    name: "Скринове",
    description: "Скринове с различни размери и дизайни",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/dressers.jpg",
    href: "/products/dressers",
  },
  {
    id: 10,
    name: "Маси",
    description: "Маси за хранене или кафе с различни стилове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/tables.jpg",
    href: "/products/tables",
  },
  {
    id: 11,
    name: "Тоалетки",
    description: "Тоалетки с огледало и различни стилове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/vanities.jpg",
    href: "/products/vanities",
  },
  {
    id: 12,
    name: "ТВ барчета",
    description: "ТВ барчета с различни конфигурации и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/tv-stands.jpg",
    href: "/products/tv-stands",
  },
  {
    id: 13,
    name: "Градински мебели",
    description: "Мебели за градината с различни дизайни",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/outdoor-furniture.jpg",
    href: "/products/outdoor-furniture",
  },
];

export default function Products() {
  const [showAllProducts, setShowAllProducts] = React.useState(false);

  return (
    <div className="bg-white">
      <h2 className="pt-12 text-4xl font-bold text-center text-black">
        Продукти
      </h2>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products
            .slice(0, showAllProducts ? products.length : 6)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                img={product.imageSrc}
                title={product.name}
                description={product.description}
                options={product.options}
                href={product.href}
              />
            ))}
        </div>
        
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="px-4 py-2 font-medium text-white rounded bg-luxWenge hover:bg-luxOrange focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {showAllProducts ? "Покажи по-малко" : "Покажи всички"}
            </button>
          </div>
      </div>
    </div>
  );
}
