import React, { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type Product = {
  id: number;
  name: string;
  imageGallery: { img: string }[];
  sizes: string;
  curIndex: number;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Бюро 1",
    imageGallery: [
      {
        img: "./images/Products-img/desksImg/desk1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 2,
    name: "Бюро 2",
    imageGallery: [
        {
            img: "./images/Products-img/desksImg/desk2.jpg",
          },
          {
            img: "./images/Products-img/desksImg/desk2.1.jpg",
          },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  // More products...
];

export default function Example() {
  const [products, setProducts] = useState(initialProducts);

  const prevSlide = (product: Product) => {
    const isFirstSlide = product.curIndex === 0;
    const index = isFirstSlide
      ? product.imageGallery.length - 1
      : product.curIndex - 1;
    const updatedProduct = { ...product, curIndex: index };
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id ? updatedProduct : prevProduct
      )
    );
  };

  const nextSlide = (product: Product) => {
    const isLastSlide = product.curIndex === product.imageGallery.length - 1;
    const index = isLastSlide ? 0 : product.curIndex + 1;
    const updatedProduct = { ...product, curIndex: index };
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id ? updatedProduct : prevProduct
      )
    );
  };

  return (
    <div className="bg-white border-t-2">
      <div className="flex justify-center px-6 pt-12 pb-12 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-luxOrange sm:text-6xl">
            Бюра
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
          Изработете работния си кът със стил и функционалност благодарение на нашите дървени бюра. Съчетайте работа и вдъхновение, като се наслаждавате на елегантната обстановка.
          </p>
        </div>
      </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Бюра
        </h2>

        <div className="grid grid-cols-1 mx-auto mt-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Image Slide */}
              <div
                style={{
                  backgroundImage: `url(${
                    product.imageGallery[product.curIndex].img
                  })`,
                }}
                className="w-9/12 mx-auto overflow-hidden bg-gray-200 bg-no-repeat bg-cover rounded-md h-72 aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-80 sm:h-64 lg:h-80 md:w-full lg:w-full"
              ></div>
              {/* Image Navigation */}
              {product.imageGallery.length > 1 && (
              <div className="absolute inset-0 items-center justify-between hidden group-hover:flex">
                <button
                  onClick={() => prevSlide(product)}
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                  <BsChevronCompactLeft />
                </button>
                <button
                  onClick={() => nextSlide(product)}
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                  <BsChevronCompactRight />
                </button>
              </div>
              )}
              <div className="flex justify-center w-full mt-4 h-20vh">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.name}
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
type Products = {
  id: number;
  name: string;
  imageGallery: { img: string }[];
  sizes: string;
  curIndex: number;
};
