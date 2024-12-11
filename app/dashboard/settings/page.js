'use client'


import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import Image from 'next/image'
import user from '@/public/assets/profile/user.png';

export default function page() {
    const [open, setOpen] = useState(false);

    // handel toggle
    const toggle = () =>{
        setOpen(!open)
    }
  return (
    <div className='pb-10'>
        <div className='bg-slate-100 p-2 rounded-md'>
            <h1 className='mb-5'>Account Settings</h1>
            <div className='grid xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 gap-2'>
                <div className=''>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="text" className="block text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="text"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Phone Number
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="text"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        </div>

                        <div>
                        <button
                            type="submit"
                            className="flex justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save Changes
                        </button>
                        </div>
                    </form>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <Image src={user} alt=''/>
                        <button className='px-3 py-1 mt-4 ml-5 bg-white border-2 text-sm border-amber-500 text-amber-600 rounded-full'>Chose Image</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-slate-100 mt-10 p-2 rounded-md'>
            <h1 className='mb-5'>Change Password</h1>
            <div className=''>
            <form>
                <div className="relative">
                    <div className="my-3">
                        <input type={(open === false)? 'password': 'text'} placeholder='Current Password'
                            className='h-12 w-full shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
                    </div>
                    <div className="text-2xl absolute top-4 right-5">
                        {
                            (open === false)? <FaRegEye onClick={toggle}/>:
                            <FaRegEyeSlash onClick={toggle}/>
                        } 
                    </div>
                </div>
                <div className="relative">
                    <div className="my-3">
                        <input type={(open === false)? 'password': 'text'} placeholder='new password'
                            className='h-12 w-full shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
                    </div>
                    <div className="text-2xl absolute top-4 right-5">
                        {
                            (open === false)? <FaRegEye onClick={toggle}/>:
                            <FaRegEyeSlash onClick={toggle}/>
                        } 
                    </div>
                </div>
                            <div className="relative">
                                <div className="my-3">
                                    <input type={(open === false)? 'password': 'text'} placeholder='Confirm password'
                                    className='h-12 w-full shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
                                </div>
                                <div className="text-2xl absolute top-4 right-5">
                                    {
                                        (open === false)? <FaRegEye onClick={toggle}/>:
                                        <FaRegEyeSlash onClick={toggle}/>
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className=" text-white bg-amber-700 py-2 px-2 rounded-full">Change Password</button>
                            </div>
                </form>
            </div>
        </div>
    </div>
  )
}
