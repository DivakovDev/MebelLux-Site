import Product from "./product"
// add those items ito the products array:

const products = [
    {
      id: 1,
      name: 'Спални',
        description: 'Спални с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/background1.png',
        href: '/products/bedrooms',
    },
    {
        id: 2,
        name: 'Кухни',
        description: 'Кухни с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/kitchen.jpg',
        href: '/products/kitchens',
    },
    {
        id: 3,
        name: 'Гардероби',
        description: 'Гардероби с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/weardrop.jpg',
        href: '/products/weardrops',
    },
    {
        id: 4,
        name: 'Нощни шкафчета',
        description: 'Нощни шкафчета с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/bedtables.jpg',
        href: '/products/bedtables',
    },
    {
        id: 5,
        name: 'Бюра',
        description: 'Бюра с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/desks.jpg',
        href: '/products/desks',
    },
    {
        id: 6,
        name: 'Антрета',
        description: 'Антрета с различни размери и цветове',
        options: 'Размери: 160/200, 180/200, 200/200',
        imageSrc: '/images/antre.jpg',
        href: '/products/antres',
    },
  ]

export default function Products() {
    return (
        <div className="bg-white">
                <h2 className="text-black text-4xl text-center pt-12 font-bold">Products</h2>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            img={product.imageSrc}
                            title={product.name}
                            description={product.description}
                            options={product.options}
                            href={product.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
  