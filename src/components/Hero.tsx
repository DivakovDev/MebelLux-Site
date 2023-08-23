import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {useState } from "react"

export default function Hero() {
  return (
    <section>
    <div className="pt-10 bg-luxBlue sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center p-1 pr-2 text-black bg-white rounded-full sm:text-base lg:text-sm xl:text-base "
              >
                <span className="px-3 py-0.5 text-black hover:text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-luxOrange rounded-full">
                  МебелЛукс-М
                </span>
                <span className="my-1 ml-4 text-sm font-semibold hover:text-indigo-600">Вече с нов изглед</span>
                <ChevronRightIcon className="w-5 h-5 ml-2 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block text-black">Високо класни мебели</span>
                <span className="block text-luxOrange">по Ваш избор</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                Добре дошли в "МебелЛукс - М" – мястото за изискани, устойчиви дървени изделия. 
                Уникални ръчно изработени мебели, обединяващи естетика, функционалност и здравина. 
                Вашият дом или бизнес заслужават нашите дървени шедьоври.
              </p>
              <div className="p-4 mt-10 text-center bg-white rounded-full sm:p-2 sm:mt-12">
                <p className='text-lg text-gray-900'>Свържете се лесно и бързо със нас като натиснете <span><a className='font-bold text-luxOrange hover:underline' href="/contacts">тук</a>!</span></p>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="../images/home-bg.png"
                alt="home-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* More main page content here... */}
  </section>
  )
}
