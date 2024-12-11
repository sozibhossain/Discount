'use client'


import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import users from '@/public/assets/user/users.png';
import Image from "next/image";

export default function page() {
    const [open, setOpen] = useState(false);

    // handel toggle
    const toggle = () =>{
        setOpen(!open)
    }
  return (
    <div>
        <div>
            <Image src={users} alt="Users"/>
        </div>
        <div className='container mx-auto my-5'>
            <div className='flex items-center justify-center mb-20'>
                <div className="bg-slate-100 p-5 shadow-2xl rounded-lg">
                    <h1 className='text-center text-3xl mb-6'>Set New Password</h1>

                    <div>
                        <form>
                            <div className="relative">
                                <div className="my-3">
                                    <input type={(open === false)? 'password': 'text'} placeholder='Enter new password'
                                    className='h-12 w-96 shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
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
                                    <input type={(open === false)? 'password': 'text'} placeholder='Confirm new password'
                                    className='h-12 w-96 shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
                                </div>
                                <div className="text-2xl absolute top-4 right-5">
                                    {
                                        (open === false)? <FaRegEye onClick={toggle}/>:
                                        <FaRegEyeSlash onClick={toggle}/>
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="w-full text-white bg-amber-600 py-2 rounded-full">Create Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
