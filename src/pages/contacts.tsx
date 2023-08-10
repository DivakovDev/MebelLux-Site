import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function Contacts() {
  function sendEmail() {
    // functionality
  }
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-luxOrange">
              <a href="/">МебелЛукс-М</a>
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Нека Работим Заедно
            </p>
            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
              Свържете се с нас: За Въпроси, Заявки и Консултации относно Нашите
              Уникални Дървени Мебели
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 pb-24 mx-auto pt-none max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div>
            <h2 className="text-2xl font-extrabold text-center text-luxOrange sm:text-3xl">
              Имате възможност да ни посетите лично.
            </h2>
            <div className="mx-auto mt-3">
              <p className="text-lg text-center text-gray-500 ">
                Нашите майстори съчетават традиция с иновации, изваявайки всяко
                парче, за да разкаже историята на българското богатство.
                Изживейте магията на живо.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex justify-center">
                <div className="flex content-center">
                  <PhoneIcon
                    className="w-6 h-6 text-luxBrown"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-luxBrown hover:text-indigo-600">
                <a href="tel:+359 898 688 821" className="cta-btn"> +359 898 688 821</a>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex content-center">
                  <EnvelopeIcon
                    className="w-6 h-6 text-luxBrown"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-luxBrown">
                  <p>mebellux@abv.bg</p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex content-center">
                  <ClipboardDocumentCheckIcon
                    className="w-6 h-6 my-auto text-luxBrown"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-luxBrown">
                  <p className="mt-1">от Пон/Петък от 9:00 до 17:00</p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex content-center">
                  <MapPinIcon
                    className="w-6 h-6 text-luxBrown"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-luxBrown">
                  <p>
                    Адрес: гр. Велинград, ул. &quot;Чавдар Войвода&quot; 29,
                    4600
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
