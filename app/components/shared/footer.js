import Image from 'next/image';
import Logo from '@/public/assets/logo/Group.png';
import QRC from '@/public/assets/footer/qrc.png';
import Link from 'next/link';

export default function footer() {
  return (
    <div className='bg-gray-900'>
        <div className='container mx-auto py-16'>
            <div class="grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                <div>
                    <div>
                        <Image className='w-56 h-14' src={Logo} alt='Logo'/>
                    </div>
                    <p className='text-slate-300 text-xs pt-2'>Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.</p>
                </div>
                <div>
                    <h4 className='text-slate-300 pb-2'>Account</h4>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>My Account</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Login / Register</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Cart</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Wishlist</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Shop</Link>
                    </div>
                </div>
                <div>
                    <h4 className='text-slate-300 pb-2'>Quick Link</h4>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Terms Of Use</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>FAQ</Link>
                    </div>
                    <div>
                        <Link href='#' className='text-slate-300 text-xs'>Contact</Link>
                    </div>
                </div>
                <div>
                    <h4 className='text-slate-300 pb-2'>Support</h4>
                    <h4 className='text-slate-300'>exclusive@gmail.com</h4>
                    <h4 className='text-slate-300'>+88015-88888-9999</h4>
                </div>
                <div>
                    <h4 className='text-slate-300 pb-4'>Support</h4>
                    <div>
                        <Image className='w-56 h-14' src={QRC} alt='Logo'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
