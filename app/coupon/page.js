import '@/app/css/coupon.css';
import Image from 'next/image';
import Vector from '@/public/assets/coupon/vector.png'

export default function page() {
  return (
    <div className='container-area my-5'>
        <div className='bg-img'>
            <div className='vector'>
                <div className='flex'>
                    <div className='vector-1 '>
                        <h1 className='text-7xl'>Price</h1>
                        <span className='text-7xl text-orange-500'>$ 10.99</span>
                    </div>
                    <div className='vector-img '>
                        <Image src={Vector} alt='Vector images' className='vector-images'/>
                    </div>
                    <div className='vector-3 ml-16'>
                        <h1 className='text-6xl'>Single Discount</h1>
                        <p className='text-4xl text-slate-500'>Customer takes 6 discount</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-img'>
            <div className='vector'>
                <div className='flex'>
                    <div className='vector-1 '>
                        <h1 className='text-7xl'>Price</h1>
                        <span className='text-7xl text-orange-500'>$ 34.99</span>
                    </div>
                    <div className='vector-img '>
                        <Image src={Vector} alt='Vector images' className='vector-images'/>
                    </div>
                    <div className='vector-3 ml-16'>
                        <h1 className='text-6xl'>Unlimited Discount</h1>
                        <p className='text-4xl text-slate-500'>Customer get unlimited discount in one month</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
