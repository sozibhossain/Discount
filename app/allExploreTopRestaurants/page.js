import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";



const restaurants = [
    {
      id: 1,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/1MG8zWk/Rectangle-2-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 2,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/NWkB3JJ/Rectangle-2-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 3,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/Z1n7hBG/Rectangle-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 4,
      name: "Trattoria dall'Oste",
      href: '#',
      imageSrc: 'https://i.ibb.co.com/1MG8zWk/Rectangle-2-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/NWkB3JJ/Rectangle-2-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/Z1n7hBG/Rectangle-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/Z1n7hBG/Rectangle-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/1MG8zWk/Rectangle-2-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 9,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/Z1n7hBG/Rectangle-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 10,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/NWkB3JJ/Rectangle-2-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 11,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/Z1n7hBG/Rectangle-2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    {
      id: 12,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co.com/NWkB3JJ/Rectangle-2-1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      review: '(4.5)',
      location: 'Via Luigi Alamanni, 3, 50123 Firenze',
      description: 'Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...',
    },
    // More products...
  ]

export default function page() {
  return (
    <div className='container mx-auto mt-5'>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-2xl'>Explore <span className='text-amber-500'>Restaurants</span></h1>
            </div>
            <div>
                <h1>Serch bar</h1>
            </div>
        </div>
        <div>
            <p className='mt-3'>Check your city Near by <br/> Restaurant</p>
        </div>
        {/* Explore Restaurants */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="group relative p-3 border-solid border-2 border-slate-300 rounded-md">
                  <img
                    alt={restaurant.imageAlt}
                    src={restaurant.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between ">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={restaurant.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {restaurant.name}
                        </a>
                      </h3>
                      <div className="flex items-center">
                      <CiLocationOn  className="mr-1"/>
                      <p className="mt-1 text-sm text-gray-500">{restaurant.location}</p>
                      </div>
                    </div>
                    <div className="flex">
                    <FaStar className="text-amber-500"/>
                    <p className="text-sm font-medium text-gray-900">
                    {restaurant.review}</p>
                    </div>
                    
                  </div>
                  <div>
                      <p className="text-xs">{restaurant.description}</p>
                  </div>
                  <div>
                    <button className="w-full p-2 bg-green-500 rounded-md mt-2">Visit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}
