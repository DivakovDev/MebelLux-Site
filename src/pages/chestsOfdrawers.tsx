import React, { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type Product = {
  id: number;
  name: string;
  imageGallery: { img: string }[];
  curIndex: number;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Скрин 'Уют'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers1.1.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 2,
    name: "Стругован Скрин 'Лукс'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers2.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers2.1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers2.2.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers2.3.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 3,
    name: "Скрин 'Бременен'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers3.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers3.1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers3.2.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers3.3.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 4,
    name: "Скрин 'Ира'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers4.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers4.1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers12.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 6,
    name: "Скрин ракла 'Лукс'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers6.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers6.1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers13.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 8,
    name: "Скрин ракла",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers8.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 9,
    name: "Скрин 'Бавария'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers9.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 10,
    name: "Скрин 'Гърция",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers10.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 14,
    name: "Скрин 'Бебо'",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers14.jpg",
      },
    ],
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
            Скринове
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Съчетайте функционалността с изтънчеността на нашите дървени
            скринове. Съхранявайте в стил и подредност, като допълните дома си с
            елегантни детайли.
          </p>
        </div>
      </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Скринове
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
                title='Previous Slide'
                  onClick={() => prevSlide(product)}
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                  <BsChevronCompactLeft />
                </button>
                <button
                title='Next Slide'
                  onClick={() => nextSlide(product)}
                  className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                >
                  <BsChevronCompactRight />
                </button>
              </div>
              )}
              <div className="flex justify-center w-full mt-4 h-20vh">
                <div>
                <h3 className="font-semibold text-center text-gray-700 text-md">
                    {product.name}
                  </h3>
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
  curIndex: number;
};
