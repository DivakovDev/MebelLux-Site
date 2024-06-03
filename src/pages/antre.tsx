import React, { Fragment, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";

type Product = {
  id: number;
  name: string;
  imageGallery: { img: string }[];
  curIndex: number;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Портманто 'Лукс' с гардеробче 'Лукс'",
    imageGallery: [
      {
        img: "./images/Products-img/hallwaysImg/hallways1.jpg",
      },
      {
        img: "./images/Products-img/hallwaysImg/hallways2.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 2,
    name: "Портманто 'Бебо'",
    imageGallery: [
      {
        img: "./images/Products-img/hallwaysImg/hallways2.jpg",
      },
    ],
    curIndex: 0,
  },
  {
    id: 3,
    name: "Малко антре",
    imageGallery: [
      {
        img: "./images/Products-img/hallwaysImg/hallways3.jpg",
      },
    ],
    curIndex: 0,
  },
  // More products...
];

export default function Example() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setSelectedProduct(null);
  }

  function openModal(product: Product) {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  const prevSlide = () => {
    if (!selectedProduct) return;
    const isFirstSlide = selectedProduct.curIndex === 0;
    const index = isFirstSlide
      ? selectedProduct.imageGallery.length - 1
      : selectedProduct.curIndex - 1;
    const updatedProduct = { ...selectedProduct, curIndex: index };
    setSelectedProduct(updatedProduct);
  };

  const nextSlide = () => {
    if (!selectedProduct) return;
    const isLastSlide =
      selectedProduct.curIndex ===
      selectedProduct.imageGallery.length - 1;
    const index = isLastSlide ? 0 : selectedProduct.curIndex + 1;
    const updatedProduct = { ...selectedProduct, curIndex: index };
    setSelectedProduct(updatedProduct);
  };

  return (
    <div className="bg-white border-t-2">
      <div className="flex justify-center px-6 pt-12 pb-12 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-luxOrange sm:text-6xl">
            Антрета
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Добавете стил и функционалност във входната част на вашия дом с
            нашите дървени антрета. Внесете усещане за покой и организация,
            вдъхновени от българската традиция.
          </p>
        </div>
      </div>
      <div className="max-w-2xl px-4 py-16 mx-auto border-t sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Най-продавани Антрета
        </h2>

        <div className="grid grid-cols-1 mx-auto mt-12 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Image Slide */}
              <button onClick={() => openModal(product)} className="flex w-full mx-auto overflow-hidden">
                <img
                  src={product.imageGallery[product.curIndex].img}
                  alt={product.name}
                  className="w-9/12 mx-auto overflow-hidden bg-gray-200 bg-no-repeat bg-cover rounded-md h-72 aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-80 sm:h-64 lg:h-80 md:w-full lg:w-full"
                />
              </button>

              <div className="flex justify-center w-full mt-4 h-20vh">
                <div>
                  <h3 className="font-semibold text-center text-gray-700 text-md">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="flex items-center justify-center min-h-full">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black opacity-50" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="relative z-50 p-4 mx-auto bg-white rounded-lg shadow-xl w-96">
                    <button
                      onClick={closeModal}
                      className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <img
                      src={selectedProduct?.imageGallery[selectedProduct.curIndex].img}
                      alt={selectedProduct?.name}
                      className="object-contain w-full h-96"
                    />

                    {selectedProduct && selectedProduct.imageGallery && selectedProduct.imageGallery.length > 1 && (
                      <div className="absolute flex space-x-2 bottom-4 right-4">
                        <button
                          onClick={prevSlide}
                          className="p-2 bg-black rounded-full hover:bg-gray-300 focus:outline-none"
                        >
                          <BsChevronCompactLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="p-2 bg-black rounded-full hover:bg-gray-300 focus:outline-none"
                        >
                          <BsChevronCompactRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}

                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
}
