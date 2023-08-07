import { ChevronRightIcon } from '@heroicons/react/24/solid'
import {useState } from "react"

export default function Hero() {
    const [email, setEmail] = useState("");
    const [inQuery, setInQuery] = useState("");
    const [ hasEnteredEmail, setHasEnteredEmail ] = useState(false);
    const submitForm = (e: any) => {
        e.preventDefault();
        if (email) setHasEnteredEmail(true);
        
        if(email && inQuery) console.log(email), console.log(inQuery);
    }

  return (
    <section>
    <div className="pt-10 bg-luxBlue sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center p-1 pr-2 text-black bg-white rounded-full sm:text-base lg:text-sm xl:text-base hover:text-luxBlue"
              >
                <span className="px-3 py-0.5 text-black text-xs font-semibold leading-5 uppercase tracking-wide bg-luxOrange rounded-full">
                  МебелЛукс-М
                </span>
                <span className="ml-4 text-sm">Вече с нов изглед</span>
                <ChevronRightIcon className="w-5 h-5 ml-2 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block text-black">Високо класни мебели</span>
                <span className="block text-luxOrange">по Ваш избор</span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                Добре дошли в "МебелЛукс" – мястото за изискани, устойчиви дървени изделия. 
                Уникални ръчно изработени мебели, обединяващи естетика, функционалност и здравина. 
                Вашият дом или бизнес заслужават нашите дървени шедьоври.
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className={`email min-w-0 flex-1 ${hasEnteredEmail ? 'hidden' : 'block'}`}>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxAzure focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className={`textarea min-w-0 flex-1 ${hasEnteredEmail ? 'block' : 'hidden'}`}>
                      <label htmlFor="textarea" className="sr-only">
                        Query
                      </label>
                      <textarea 
                        id="textarea"
                        onChange={(e) => setInQuery(e.target.value)}
                        placeholder="Enter your query"
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-2 border-black rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxAzure focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        onClick={submitForm}
                        className={`block w-full py-3 px-4 rounded-md shadow ${hasEnteredEmail ? 'bg-luxOrange' : 'bg-luxOrange'} text-white font-medium hover:${hasEnteredEmail ? 'bg-luxOrange' : 'bg-luxOrange'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxOrange focus:ring-offset-gray-900`}
                      >
                        {!hasEnteredEmail ? 'Get to ask us' : 'Ask us'}
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-900 text-md sm:mt-4">
                  Напишете вашия имейл след това натиснете бутона <span className='font-bold text-luxOrange'>'Изпрати'</span>. След като вашият имейл бъде изпратен, напишете вашия въпрос и отново натиснете <span className='font-bold text-luxOrange'>'Изпрати'</span>.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
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
