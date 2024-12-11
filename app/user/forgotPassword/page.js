'use client'

import users from '@/public/assets/user/users.png';
import Image from "next/image";
import Link from 'next/link';

export default function page() {
  return (
    <div>
        <div>
            <Image src={users} alt="Users"/>
        </div>
        <div className='container mx-auto my-5'>
            <div className='flex items-center justify-center mb-20'>
                <div className="bg-slate-100 p-5 shadow-2xl rounded-lg">
                    <h1 className='text-center text-3xl mb-6'>Forgot password</h1>
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
                            <div className="mt-5">
                                <Link href="/user/setNewPassword"><button type="submit" className="w-full text-white bg-amber-600 py-2 rounded-full">Submit</button></Link>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
