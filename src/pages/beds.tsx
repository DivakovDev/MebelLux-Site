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
        name: "Луксозно легълце",
        imageGallery: [
            {
                img: "./images/Products-img/background1.png",
            },
            {
                img: "./images/Products-img/bed1.jpg",
            },
            {
                img: "./images/Products-img/bed2.jpg",
            },
            {
                img: "./images/Products-img/bed3.jpg",
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
        const index = isFirstSlide ? product.imageGallery.length - 1 : product.curIndex - 1;
        const updatedProduct = { ...product, curIndex: index };
        setProducts((prevProducts) =>
            prevProducts.map((prevProduct) => (prevProduct.id === product.id ? updatedProduct : prevProduct))
        );
    };

    const nextSlide = (product: Product) => {
        const isLastSlide = product.curIndex === product.imageGallery.length - 1;
        const index = isLastSlide ? 0 : product.curIndex + 1;
        const updatedProduct = { ...product, curIndex: index };
        setProducts((prevProducts) =>
            prevProducts.map((prevProduct) => (prevProduct.id === product.id ? updatedProduct : prevProduct))
        );
    };

    return (
        <div className="bg-white">
            <div className="flex justify-center px-6 pt-12 pb-12 mx-auto text-center max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-luxOrange sm:text-6xl">Спални</h2>
                    <p className="mt-6 text-lg leading-8 text-black">
                        Потопете се в уютната обстановка на нашите дървени спални. Създайте идеалното убежище за отпускане и
                        възстановяване с изискания дизайн и непреходната издръжливост на дървото.
                    </p>
                </div>
            </div>
            <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Най-продавани Спални</h2>

                <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="relative group">
                            {/* Image Slide */}
                            <div
                                style={{ backgroundImage: `url(${product.imageGallery[product.curIndex].img})` }}
                                className="w-full overflow-hidden bg-gray-200 bg-no-repeat bg-cover rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80"
                            ></div>
                            {/* Image Navigation */}
                            <div className="absolute inset-0 flex items-center justify-between">
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

    const products: Product[] = [
        {
            id: 1,
            name: "Луксозно легълце",
            imageGallery: [
                {
                    img: "./images/Products-img/bedImages/background1.png",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.1.jpg",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.2.jpg",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.3.jpg",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.4.jpg",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.5.jpg",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.6.png",
                },
                {
                    img: "./images/Products-img/bedImages/bed0.7.png",
                },
            ],
            sizes: "120/200",
            curIndex: 0,
        },
        // More products...
    ];

    const prevSlide = (product: any) => {
        const isFirstSlide = product.curIndex === 0;
        const index = isFirstSlide ? product.imageGallery.length - 1 : product.curIndex - 1;
        product.curIndex = index;
      };
    
      const nextSlide = (product: any) => {
        const isLastSlide = product.curIndex === product.imageGallery.length - 1;
        const index = isLastSlide ? 0 : product.curIndex + 1;
        product.curIndex = index;

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
        {products.map((product: any) => (
          <div key={product.id} className="relative group">
            {/* Image Slide */}
            <div
              style={{ backgroundImage: `url(${product.imageGallery[product.curIndex].img})` }}
              className="w-full overflow-hidden bg-gray-200 bg-no-repeat bg-cover rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={() => prevSlide(product)} size={20} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={() => nextSlide(product)} size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
