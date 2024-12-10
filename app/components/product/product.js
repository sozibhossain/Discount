import React from 'react'


const products = [
    {
      id: 1,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/6my8Dys/Group-405-6.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 2,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/R32KjsK/Group-405-5.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 3,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/hLZMWbX/Group-405-4.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/xhbv8Cv/Group-405-3.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/93vDMdN/Group-405-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/6ZK8bD3/image-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/YPMqxxF/Group-405-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/tchgkJ7/image.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    {
      id: 4,
      name: 'Skateboard Shoe',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/48sK9JG/Group-405.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$125',
    },
    // More products...
  ]

export default function product() {
  return (
    <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}
