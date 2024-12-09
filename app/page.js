import '@/app/css/pages.css';
import Banner from '@/public/assets/banner/banner.png';
import Image from 'next/image';
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { Ri24HoursLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import ExploreTopRestaurants from '@/app/components/exploreTopRestaurants/exploreTopRestaurants';




export default function Home() {
  return (
    <div>
      {/* Banner area start */}
      <div className='bg-img'>
        <div className="container mx-auto py-16">
          <div class="grid xl:grid-cols-5  md:grid-cols-1 gap-4 ">
              <div className="xl:col-span-3 md:col-span-5">
                <h1 className='text-8xl font-bold mt-24'>Good <span className='text-amber-500'>food</span>, great memories</h1>
                <h1 className='text-4xl pt-5'>Enable diners to customize their booking by requesting a specific table location or view.</h1>
              </div>
              <div className="xl:col-span-2 md:col-span-5">
              <Image className='pt-28' src={Banner} alt='Banner'/>
              </div>
            </div>
        </div>
      </div>
      {/* Banner area end */}
      {/* Feature area start */}
      <div className="container mx-auto xl:px-28 md:px-26 sm:px-2 mx-10">
          <div class="grid xl:grid-cols-4  md:grid-cols-4 sm:grid-cols-1 gap-2 p-11 bg-inherit rounded-md shadow-2xl">
              <div className="flex xl:col-start-1 md:col-start-1 sm:col-start-1">
                <div>
                  <BsBoxSeam className='text-5xl mr-2 text-gray-500'/>
                </div>
                <div>
                  <h1>Discount</h1>
                  <p className='text-xs'>Every week new sales</p>
                </div>
              </div>
              <div className="flex xl:col-start-2 md:col-start-2 sm:col-start-1">
                <div>
                  <TbTruckDelivery className='text-5xl mr-2 text-gray-500'/>
                </div>
                <div>
                  <h1>Free Delivery</h1>
                  <p className='text-xs'>100% Free for all orders</p>
                </div>
              </div>
              <div className="flex xl:col-start-3 md:col-start-3 sm:col-start-1">
                <div>
                  <Ri24HoursLine className='text-5xl mr-2 text-gray-500'/>
                </div>
                <div>
                  <h1>Great Support 24/7</h1>
                  <p className='text-xs'>We care your experiences</p>
                </div>
              </div>
              <div className="flex xl:col-start-4 md:col-start-4 sm:col-start-1">
                <div>
                  <HiOutlineShieldCheck className='text-5xl mr-2 text-gray-500'/>
                </div>
                <div>
                  <h1 className=''>Secure Payment</h1>
                  <p className='text-xs'>100% Secure Payment Method</p>
                </div>
              </div>
            </div>
      </div>
      {/* Feature area end */}

      {/* Explore Top Restaurants area start */}
      <div className='container mx-auto mt-5'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-5xl'>Explore <span className='text-amber-500'>Top Restaurants</span></h1>
            <h1 className='text-xl'>Check your city Near by <br/>Restaurant</h1>
          </div>
          <div className='flex items-center'>
            <div>
              <h1 className='text-xl'>See All</h1>
            </div>
            <div>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div>
          <ExploreTopRestaurants/>
        </div>
      </div>
      {/* Explore Top Restaurants area end */}
    </div>
  );
}
