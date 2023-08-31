import Link from 'next/link';
import { FormEvent, useState } from 'react';

type MessageData = {
  status?: string;
  message?: string;
};


import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function Contacts() {
  const [message, setMessage] = useState<MessageData>({});

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    const elements = e.currentTarget.elements as unknown as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res);
      });
  };
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-luxOrange">
              <Link href="/">МебелЛукс-М</Link>
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
                  <a href="tel:+359 898 688 821" className="cta-btn">
                    {" "}
                    +359 898 688 821
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex content-center">
                  <EnvelopeIcon
                    className="w-6 h-6 text-luxBrown"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-luxBrown hover:text-indigo-600">
                  <a href="mailto:mebellux@abv.bg">mitko197800@abv.bg</a>
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
                <div className="ml-3 text-base text-luxBrown hover:text-indigo-600">
                  <a href="https://goo.gl/maps/SPmYhJjsqXdwQfZ9A" target="_blank" rel="noopener">
                    Адрес: гр. Велинград, ул. &quot;Чавдар Войвода&quot; 29,
                    4600
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
                <div
                  className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Свържи се с нас чрез запитване по Имейл!
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Свържете се с нас лесно и бързо за нашите изискани български
                    дървени мебели!
                  </p>
                </div>
                <form
                  onSubmit={sendEmail}
                  method="POST"
                  className="max-w-xl mx-auto mt-16 sm:mt-20"
                >
                  {message?.status == 'success' ? (<span className='text-lg text-center text-green-600'> {message.message} </span>) : 
                  (<span className='text-lg text-center text-red-600'> {message.message} </span>)}
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Име
                      </label>
                      <div className="mt-2.5">
                        <input
                          placeholder="Петър Петров"
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Имейл
                      </label>
                      <div className="mt-2.5">
                        <input
                          placeholder="petar_petrov@gmail.com"
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Телефонен номер
                      </label>
                      <div className="mt-2.5">
                        <input
                          placeholder="+359 893 523 842"
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Запитване
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          placeholder="Здравейте, искам да се свържа с Вас за..."
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex px-4 py-2 mx-auto mt-10 rounded-md bg-luxOrange"
                  >
                    Изпрати
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
