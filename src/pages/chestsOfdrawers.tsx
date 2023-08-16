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
    name: "Гардероб 1",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers1.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers1.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 2,
    name: "Гардероб 2",
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
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 3,
    name: "Гардероб 3",
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
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 4,
    name: "Гардероб 4",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers4.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers4.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 5,
    name: "Гардероб 5",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers5.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 6,
    name: "Гардероб 6",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers6.jpg",
      },
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers6.1.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 7,
    name: "Гардероб 7",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers7.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 8,
    name: "Гардероб 8",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers8.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 9,
    name: "Гардероб 9",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers9.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 10,
    name: "Гардероб 10",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers10.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 11,
    name: "Гардероб 11",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers11.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 12,
    name: "Гардероб 12",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers12.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 13,
    name: "Гардероб 13",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers13.jpg",
      },
    ],
    sizes: "120/200",
    curIndex: 0,
  },
  {
    id: 14,
    name: "Гардероб 14",
    imageGallery: [
      {
        img: "./images/Products-img/chestsOfdrawersImg/chestsOfdrawers14.jpg",
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
