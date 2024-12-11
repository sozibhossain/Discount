import Link from 'next/link'
import { MdDashboard } from "react-icons/md";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";



export default function dashboardSideBar() {
  return (
    <div className='bg-slate-100 p-2 rounded-md'>
        <h1>Navigation</h1>
        <div>
            <div className='flex items-center  mt-5 mb-2'>
                <MdDashboard  className='mr-2'/>
                <Link href="/dashboard" className='text-slate-500'>Dashboard</Link>
            </div>
            <div className='flex items-center  mt-5 mb-2'>
                <BiLogoSpringBoot  className='mr-2'/>
                <Link href="/dashboard/orderHistory" className='text-slate-500'>Order History</Link>
            </div>
            <div className='flex items-center  mt-5 mb-2'>
                <IoBagHandleOutline  className='mr-2'/>
                <Link href="/Dashboard" className='text-slate-500'>Shopping Cart</Link>
            </div>
            <div className='flex items-center  mt-5 mb-2'>
                <CiSettings  className='mr-2'/>
                <Link href="/dashboard/settings" className='text-slate-500'>Settings</Link>
            </div>
            <div className='flex items-center  mt-5 mb-2'>
                <IoLogOutOutline  className='mr-2'/>
                <Link href="/Dashboard" className='text-slate-500'>Log-out</Link>
            </div>
        </div>
    </div>
  )
}
