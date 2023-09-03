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
    name: "Кухня 1",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen1.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.1.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.2.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.3.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.4.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.5.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.6.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.7.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen1.8.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 2,
    name: "Кухня 2",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen2.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.1.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.2.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.3.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.4.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.5.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.6.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.7.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.8.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.9.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen2.10.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 3,
    name: "Кухня 3",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen3.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen3.1.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen3.2.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 4,
    name: "Кухня 4",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen4.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen4.1.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen4.2.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen4.3.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen4.4.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 5,
    name: "Кухня 5",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen5.jpg",
      },
      {
        img: "./images/Products-img/kitchensImg/kitchen5.1.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 6,
    name: "Кухня 6",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen10.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 7,
    name: "Кухня 7",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen7.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 8,
    name: "Кухня 8",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen8.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 9,
    name: "Кухня 9",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen9.jpg",
      },
    ],
    
    curIndex: 0,
  },
  {
    id: 10,
    name: "Кухня 10",
    imageGallery: [
      {
        img: "./images/Products-img/kitchensImg/kitchen6.jpg",
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
            Кухни
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Разкрийте атмосферата на уют и готварско вълнение с нашите дървени
            кухни. Изживейте естетиката на традиционния български стил в
            съчетание с практичността на съвременния дизайн.
          </p>
        </div>
      </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Кухни
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
