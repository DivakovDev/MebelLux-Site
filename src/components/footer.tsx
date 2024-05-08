import Link from 'next/link';
import Image from 'next/image';

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    main: [
      { name: 'Начало', href: '/' },
      { name: 'За нас', href: '/about' },
      { name: 'Контакти', href: '/contacts' },
      { name: 'Парньори', href: '/partners' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '/facebook-logo.png',
        path:'https://www.facebook.com/profile.php?id=100094699432351&locale=bg_BG',
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white border-t-2">
        <div className="px-4 py-4 mx-auto sm:flex sm:justify-between sm:px-6 lg:px-8">
          <nav className="flex flex-col mx-auto sm:mx-0 sm:flex-row"aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="flex px-5 py-2 mx-auto my-auto">
                  <Link href={item.href} className="text-base font-semibold text-luxWenge hover:text-luxOrange">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex justify-center pt-3 sm:pt-0 sm:justify-normal">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.path} className="mt-1 text-luxWenge hover:text-luxBrown">
                <span className="sr-only">{item.name}</span>
                <Image
            src={item.href}
            alt={item.name}
            height={64}
            width={128}
          />
              </Link>
            ))}
          </div>
        </div>
        <p className="pt-6 pb-6 text-base text-center text-luxWenge">
  &copy;2023 &quot;МебелЛукс-М&quot;. Всички права запазени. Уебсайт създаден от{" "}
  <a
    href="https://github.com/DivakovDev"
    className="font-bold text-luxOrange hover:underline underline-offset-2"
  >
    DivakovDev
  </a>
</p>
      </footer>
    )
  }
  