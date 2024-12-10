const restaurants = [
    {
      id: 1,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/WD03B6j/Image-block.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 2,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/WD03B6j/Image-block.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 3,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/c3kWx7z/Image.png"',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 4,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/fqLKyg3/Image-block-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/TTjxPsX/Image-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/fqLKyg3/Image-block-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/fqLKyg3/Image-block-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/TTjxPsX/Image-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    {
      id: 9,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/fqLKyg3/Image-block-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$45.5',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Delicouse tackos, appetizing...',
    },
    // More products...
  ]

export default function itemsProduct() {
  return (
    <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="group relative bg-inherit rounded-lg shadow-2xl pb-2">
                  <img
                    alt={restaurant.imageAlt}
                    src={restaurant.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between px-2">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={restaurant.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {restaurant.name}
                        </a>
                      </h3>
                    </div>
                    <div className="flex">
                    <p className="text-sm font-medium text-gray-900">
                    {restaurant.price}</p>
                    </div>
                    
                  </div>
                  <div>
                      <p className="text-xs pl-2">{restaurant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}
