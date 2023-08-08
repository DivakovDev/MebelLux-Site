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
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white border-t-2 border-luxBrown">
        <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-center text-gray-400">&copy;2023 "МебелЛукс-М". Всички права запазени. Уебсайт създаден от DivakovDev</p>
        </div>
      </footer>
    )
  }
  