/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
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
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Антрета",
    description: "Структурирайте входното пространство на вашия дом",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Кухни",
    description: "Модерни и функционални кухни за готвене и хранене",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Детски-легла",
    description: "Зарадвайте вашето дете с удобни и забавни легла",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Бюра",
    description: "Организирайте си работното пространство у дома",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Нощни-Шкафчета",
    description: "Добавете стил и удобство до вашия спален интериор",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Секции",
    description: "Модулни системи за съхранение и организация",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Гардероби",
    description: "Просторни и функционални гардероби за вашия дом",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Скринове",
    description: "Елегантни и практични скринове за всяка стая",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Маси",
    description: "Разнообразие от маси за вашата дневна или трапезария",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Тоалетки",
    description: "Изискани и функционални тоалетки за грим и грижа за себе си",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "ТВ-барчета",
    description: "Стилни решения за подредено ТВ пространство",
    href: "#",
    icon: "ArrowPathIcon",
  },
  {
    name: "Градински-мебели",
    description: "Удобство и естетика за вашата градина или тераса",
    href: "#",
    icon: "ArrowPathIcon",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-4 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="w-16 h-16 sr-only">Workflow</span>
              <img
                className="w-auto h-10 sm:h-10"
                src="../images/phoenix-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
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
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Партньори
            </a>
            <a
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              За нас
            </a>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
            >
              Контакти
            </a>
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
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
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
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
