import Image from 'next/image'
import user from '@/public/assets/profile/user.png';
import Link from 'next/link';

export default function page() {
  return (
    <div>
        <div className='grid xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 gap-2'>
            <div className='flex items-center justify-center bg-slate-100 p-2 rounded-md'>
                <div>
                    <Image src={user} alt='User'/>
                    <h1>Dianne Russell</h1>
                    <p className='text-slate-500 ml-6 text-xs'>Customer</p>
                    <button className='text-amber-500 ml-5'>Edit Profile</button>
                </div>
            </div>
            <div className='bg-slate-100 p-6  rounded-md'>
                <p className='text-slate-500 text-xs mb-2 pt-3'>Billing Address</p>
                <h1 className='mb-3'>Dainne Russell</h1>
                <p className='text-slate-500 text-xs mb-2'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className='text-slate-500 text-xs mb-2'>dainne.ressell@gmail.com</p>
                <p className='text-slate-500 text-xs mb-3'>(671) 555-0110</p>
                <button className='text-amber-500 mb-2'>Edit Address</button>
            </div>
        </div>
        <div className='my-10'>
            <div className='bg-slate-100 p-2 rounded-md'>
                <div className='flex justify-between'>
                    <h1 className='text-sm'>Recet Order History</h1>
                    <Link href="/dashboard/orderHistory"><button className='text-amber-500'>View All</button></Link>
                </div>
                <table className='w-full'>
                    <tr>
                        <th className='text-start text-slate-500 text-xs p-2'>Order ID</th>
                        <th className='text-start text-slate-500 text-xs p-2'>Date</th>
                        <th className='text-start text-slate-500 text-xs p-2'>Total</th>
                        <th className='text-start text-slate-500 text-xs p-2'>Status</th>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#738</td>
                        <td className='text-slate-500 text-xs p-2'>8 Sep, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$135.00 (5 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Processing</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#703</td>
                        <td className='text-slate-500 text-xs p-2'>24 May, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$25.00 (1 Product)</td>
                        <td className='text-slate-500 text-xs p-2'>on the way</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#130</td>
                        <td className='text-slate-500 text-xs p-2'>22 Oct, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$250.00 (4 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#561</td>
                        <td className='text-slate-500 text-xs p-2'>21 Sep, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$35.00 (1 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#536</td>
                        <td className='text-slate-500 text-xs p-2'>1 Feb, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$578.00 (13 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Cancelled</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#492</td>
                        <td className='text-slate-500 text-xs p-2'>22 Oct, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$345.00 (7 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}
