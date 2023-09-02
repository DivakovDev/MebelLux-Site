/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Bars3Icon,
  PhoneIcon,
  PlayIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const solutions = [
  {
    name: "Спални",
    description: "Създайте уют и комфорт във вашата спалня",
    href: "/beds",
  },
  {
    name: "Антрета",
    description: "Структурирайте входното пространство на вашия дом",
    href: "/antre",
  },
  {
    name: "Кухни",
    description: "Модерни и функционални кухни за готвене и хранене",
    href: "/kitchens",
  },
  {
    name: "Детски-легла",
    description: "Зарадвайте вашето дете с удобни и забавни легла",
    href: "/kids-beds",
  },
  {
    name: "Бюра",
    description: "Организирайте си работното пространство у дома",
    href: "/desks",
  },
  {
    name: "Нощни-Шкафчета",
    description: "Добавете стил и удобство до вашия спален интериор",
    href: "/nightstands",
  },
  {
    name: "Секции",
    description: "Модулни системи за съхранение и организация",
    href: "/shelvingunits",
  },
  {
    name: "Гардероби",
    description: "Просторни и функционални гардероби за вашия дом",
    href: "/wardrobes",
  },
  {
    name: "Скринове",
    description: "Елегантни и практични скринове за всяка стая",
    href: "/chestsOfdrawers",
  },
  {
    name: "Тоалетки",
    description: "Изискани и функционални тоалетки за грим и грижа за себе си",
    href: "/vanity-tables",
  },
  {
    name: "ТВ-барчета",
    description: "Стилни решения за подредено ТВ пространство",
    href: "/tv-stands",
  },
  {
    name: "Градински-мебели",
    description: "Удобство и естетика за вашата градина или тераса",
    href: "/outdoor-furniture",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  return (
    <Popover className="relative z-50 w-full bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-4 border-gray-100 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                className="w-auto h-10 sm:h-14"
                src="/images/phoenix-logo.png"
                width={500}
                height={500}
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <Bars3Icon className="w-10 h-10" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Продукти</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-2 mx-auto mt-3 transform w-max sm:px-0 lg:-translate-x-1/2">
                      <div className="w-max">
                        <div className="grid grid-cols-3 gap-4 mt-4 bg-white border-2 rounded-md sm:grid-cols-3 sm:w-8/12 sm:gap-1">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="mb-2">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-indigo-600"
            >
              За нас
            </Link>
            <Link
              href="/partners"
              className="text-base font-medium text-gray-500 hover:text-indigo-600"
            >
              Партньори
            </Link>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-luxOrange whitespace-nowrap "
            >
              Контакти
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="w-auto h-10"
                    src="/images/phoenix-logo.png"
                    alt="Workflow"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">

                <Popover className="relative">
  {({ open }) => (
    <>
      <Popover.Button
        className={classNames(
          open ? "text-gray-900" : "text-gray-500",
          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gr-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        )}
      >
        <span>Продукти</span>
        <ChevronDownIcon
          className={classNames(
            open ? "text-gray-600" : "text-gray-400",
            "ml-2 h-5 w-5 group-hover:text-gray-500"
          )}
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="mt-6">
        {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
        </Popover.Panel>
      </Transition>
    </>
  )}
</Popover>
             <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-indigo-600"
            >
              За нас
            </Link>
            <Link
              href="/partners"
              className="text-base font-medium text-gray-500 hover:text-indigo-600"
            >
              Партньори
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-luxOrange whitespace-nowrap "
            >
              Контакти
            </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
