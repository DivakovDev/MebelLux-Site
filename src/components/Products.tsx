import Product from "./ProductInfo";
import React, { useState } from "react";
// add those items ito the products array:

const products = [
  {
    id: 1,
    name: "Спални",
    description: "Спални с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/bedImages/background1.png",
    href: "/beds",
  },
  {
    id: 2,
    name: "Кухни",
    description: "Кухни с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/kitchensImg/kitchen1.jpg",
    href: "/kitchens",
  },
  {
    id: 3,
    name: "Гардероби",
    description: "Гардероби с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/wardrobesImg/wardrobe1.jpg",
    href: "/wardrobes",
  },
  {
    id: 4,
    name: "Нощни шкафчета",
    description: "Нощни шкафчета с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/nightstandsImg/nightstands1.jpg",
    href: "/nightstands",
  },
  {
    id: 5,
    name: "Бюра",
    description: "Бюра с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/desksImg/desk1.jpg",
    href: "/desks",
  },
  {
    id: 6,
    name: "Антрета",
    description: "Антрета с различни размери и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/hallwaysImg/hallways1.jpg",
    href: "/antre",
  },
  {
    id: 7,
    name: "Детски легла",
    description: "Детски легла с различни дизайни и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/kids-bedsImg/kids-beds1.jpg",
    href: "/kids-beds",
  },
  {
    id: 8,
    name: "Секции",
    description: "Секции за всекидневна или хол с различни стилове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/shelvingunitsImg/shelvingunits1.jpg",
    href: "/shelvingunits",
  },
  {
    id: 9,
    name: "Скринове",
    description: "Скринове с различни размери и дизайни",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/chestsOfdrawersImg/chestsOfdrawers1.jpg",
    href: "/chestsOfdrawers",
  },
  {
    id: 11,
    name: "Тоалетки",
    description: "Тоалетки с огледало и различни стилове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/vanity-tablesImg/vanity-tables1.jpg",
    href: "/vanity-tables",
  },
  {
    id: 12,
    name: "ТВ барчета",
    description: "ТВ барчета с различни конфигурации и цветове",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/tv-standsImg/tv-stands1.jpg",
    href: "/tv-stands",
  },
  {
    id: 13,
    name: "Градински мебели",
    description: "Мебели за градината с различни дизайни",
    options: "Размери: разнообразни",
    imageSrc: "/images/Products-img/outdoor-furnitureImg/outdoor-furniture1.jpg",
    href: "/outdoor-furniture",
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
              className="px-4 py-2 font-medium text-white rounded bg-luxOrange hover:bg-luxWenge focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {showAllProducts ? "Покажи по-малко" : "Покажи всички"}
            </button>
          </div>
      </div>
    </div>
  );
}
