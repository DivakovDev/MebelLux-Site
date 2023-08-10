import React, { useEffect } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Луксозно легълце",
    href: "#",
    imageSrc: "./images/Products-img/background1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    sizes: "120/200",
  },
  {
    id: 2,
    name: "Луксозно легълце 2",
    href: "#",
    imageSrc: "./images/Products-img/background1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    sizes: "120/200",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-white">
      
        <div className="flex justify-center px-6 pt-12 pb-12 mx-auto text-center max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-luxOrange sm:text-6xl">
              Спални
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              Потопете се в уютната обстановка на нашите дървени спални.
              Създайте идеалното убежище за отпускане и възстановяване с
              изискания дизайн и непреходната издръжливост на дървото.
            </p>
          </div>
        </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Спални
        </h2>

        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.sizes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
