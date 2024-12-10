import Image from 'next/image'
import ItemsBanner from '@/public/assets/items/banner.png';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';
import { BsCupHot } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { PiFan } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { GiNoodles } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import ItemsProduct from "@/app/components/itemsProduct/itemsProduct";


export default function page() {
  return (
    <div className='container mx-auto mt-5'>
        <div>
            <Image src={ItemsBanner}  alt='Item banner'/>
        </div>
        <div>
            <h1 className='text-3xl '><span className='text-green-500'>Villagio</span> Restaurant & Bar</h1>
        </div>
        <div className='flex'>
            <CiLocationOn  className="mr-1 mt-1 text-2xl text-green-500"/>
            <p>360 San Lorenzo Avenue, Suite <br/>
            1430 Coral Gables, FL 33146-1865 |</p>
        </div>
        <div className='flex items-center'>
            
            <FaStar className="mr-1 text-3xl text-amber-500"/>
            <FaStar className="mr-1 text-3xl text-amber-500"/>
            <FaStar className="mr-1 text-3xl text-amber-500"/>
            <FaStar className="mr-1 text-3xl text-amber-500"/>
            <FaStar className="mr-2 text-3xl text-zinc-400"/>
            <span className='text-3xl'>4.3</span>
        </div>

        <div className='flex justify-between mt-5'>
            <h1 className='text-3xl'>Items🔥</h1>
            <Link href="/allItems" className='bg-green-300 py-2 px-4 text-green-500 rounded-full'>See all</Link>
        </div>

        <div class="grid xl:grid-cols-12  md:grid-cols-6 sm:grid-cols-4 gap-2 mt-5">
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <BsCupHot className='text-3xl ml-5'/>
                <p className='text-xs'>Milk</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <BsCupHot className='text-3xl ml-5'/>
                <p className='text-xs'>Milk</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <BsCupHot className='text-3xl ml-5'/>
                <p className='text-xs'>Milk</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <IoShirtOutline className='text-3xl ml-5'/>
                <p className='text-xs'>T Shirt</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <LuDessert className='text-3xl ml-5'/>
                <p className='text-xs'>Dessert</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <PiFan className='text-3xl ml-5'/>
                <p className='text-xs'>Toy</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <IoBookOutline className='text-3xl ml-5'/>
                <p className='text-xs'>Book</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <LuDessert className='text-3xl ml-5'/>
                <p className='text-xs'>Dessert</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <GiNoodles className='text-3xl ml-5'/>
                <p className='text-xs'>Noodles</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <BsCupHot className='text-3xl ml-5'/>
                <p className='text-xs'>Milk</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <GiNoodles className='text-3xl ml-5'/>
                <p className='text-xs'>Noodles</p>
              </div>
              <div className="p-4 bg-inherit rounded-lg shadow-2xl text-center">
                <FaBowlRice className='text-3xl ml-5'/>
                <p className='text-xs'>Rice</p>
              </div>
            </div>

            <div>
                <ItemsProduct/>
            </div>
    </div>
  )
}
