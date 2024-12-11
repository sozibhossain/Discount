'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import users from '@/public/assets/user/users.png';

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
        
            <h1 className='text-center text-5xl mb-6'>Sign In</h1>

            <div className='flex items-center justify-center'>
                <form>
                    <div>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="email"
                        className="h-12 w-96 shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg"
                        />
                    </div>
                    <div className="relative">
                        <div className="my-3">
                            <input type={(open === false)? 'password': 'text'} placeholder='password'
                            className='h-12 w-96 shadow-indigo-500/40 pl-3 border-none shadow-2xl rounded-lg'/>
                        </div>
                        <div className="text-2xl absolute top-4 right-5">
                            {
                                (open === false)? <FaRegEye onClick={toggle}/>:
                                <FaRegEyeSlash onClick={toggle}/>
                            }
                            
                            
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <input type="checkbox" className="mr-2 text-slate-500"/>
                            <label  className="text-slate-500">Remember me</label>
                        </div>
                        <div>
                            <Link href="/user/forgotPassword" className="text-slate-500">Forget Password</Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="w-full text-white bg-amber-600 py-2 rounded-full">Login</button>
                    </div>
                </form>
            </div>
            <div className='flex items-center justify-center mt-3 mb-20'>
                <div className="flex">
                    <p className="text-slate-500 mr-2">Don’t have account?</p>
                    <Link href="/user/register">Create Account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
