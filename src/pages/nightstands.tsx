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
    name: "Нощно Шкафче 1",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands1.jpg",
      },
      {
        img: "./images/Products-img/nightstandsImg/nightstands1.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 2,
    name: "Нощно Шкафче 2",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands2.jpg",
      },
      {
        img: "./images/Products-img/nightstandsImg/nightstands2.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 3,
    name: "Нощно Шкафче 3",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands3.jpg",
      },
      {
        img: "./images/Products-img/nightstandsImg/nightstands3.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 4,
    name: "Нощно Шкафче 4",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands4.jpg",
      },
      {
        img: "./images/Products-img/nightstandsImg/nightstands4.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 5,
    name: "Нощно Шкафче 5",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands5.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 6,
    name: "Нощно Шкафче 6",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands6.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 7,
    name: "Нощно Шкафче 7",
    imageGallery: [
      {
        img: "./images/Products-img/nightstandsImg/nightstands7.jpg",
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
    <div className="bg-white">
      <div className="flex justify-center px-6 pt-12 pb-12 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-luxOrange sm:text-6xl">
            Нощни Шкафчета
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Добавете последен завършващ акцент във вашата спалня с нашите
            дървени нощни шкафчета. Съхранявайте с нежност и стил всичко, което
            ви е необходимо за спокоен сън.
          </p>
        </div>
      </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Нощни Шкафчета
        </h2>

        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Image Slide */}
              <div
                style={{
                  backgroundImage: `url(${
                    product.imageGallery[product.curIndex].img
                  })`,
                }}
                className="w-full overflow-hidden bg-gray-200 bg-no-repeat bg-cover rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-80 lg:h-80"
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
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
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