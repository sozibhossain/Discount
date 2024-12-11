import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

export default function page() {
  return (
    <div className='my-10'>
        <div>
            <div className='bg-slate-100 p-2 rounded-md'>
                <div className=''>
                    <h1 className='text-sm'>Order History</h1>
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
                        <td className='text-slate-500 text-xs p-2'>#130</td>
                        <td className='text-slate-500 text-xs p-2'>22 Oct, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$250.00 (4 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
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
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#492</td>
                        <td className='text-slate-500 text-xs p-2'>22 Oct, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$345.00 (7 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
                        <td className='text-end text-amber-500 text-xs p-2'><Link href="/dashboard/orderDetails"><button>View Details</button></Link></td>
                    </tr>
                    <tr>
                        <td className='text-slate-500 text-xs p-2'>#492</td>
                        <td className='text-slate-500 text-xs p-2'>22 Oct, 2020</td>
                        <td className='text-slate-500 text-xs p-2'>$345.00 (7 Products)</td>
                        <td className='text-slate-500 text-xs p-2'>Completed</td>
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
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                Previous
                </a>
                <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon aria-hidden="true" className="size-5" />
                    </a>
                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                    <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    1
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    2
                    </a>
                    <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                    3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                    </span>
                    <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                    8
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    9
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    10
                    </a>
                    <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon aria-hidden="true" className="size-5" />
                    </a>
                </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
