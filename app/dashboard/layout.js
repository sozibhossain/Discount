import Image from 'next/image'
import profile from '@/public/assets/profile/banner.png';
import DashboardSideBar from '../components/dashboardSideBar/dashboardSideBar';

export default function layout({ children }) {
  return (
    <div>
        <div>
            <Image src={profile} alt=''/>
        </div>
        <div className='flex container mx-auto mt-5'>
            <div className='w-1/4 mr-10'><DashboardSideBar/></div>
            <div className='w-3/4'>{ children }</div>
        </div>
        
    </div>
  )
}
