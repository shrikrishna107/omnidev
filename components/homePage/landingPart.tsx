import React from 'react'
import Image from 'next/image';
import Promo from '@/public/undraw_tutorial_video_re_wepc.svg';
import Link from 'next/link';


const landingPart = () => {
    return (
        <div>
            <div className='relative'>
                <div className="border-3 hover:scale-110 border-black dark:border-white py-20 mb-5 text-5xl font-serif text-right animate-appearance-in transition duration-250 rounded-3xl bg-purple-600 text-white shadow-xl hover:shadow-gray-600 ">
                    <div className=' border-2 border-purple-600 max-w-[600px] absolute left-10 animate-from-left'>
                        <Image src={Promo} alt='Promo' height={500} width={500} className=''></Image>
                    </div>
                    <div className=' mr-[300px] animate-from-left font-medium'>
                        OmniDev
                    </div>
                    <div className=' text-sm mr-52 mt-2'>
                        -The only Course Kit you'll need
                    </div>
                    <div className=' animate-from-left text-lg w-[300px] text-center ml-[750px] mt-5'>
                        Forget colleges! This course is your app development, cloud computing, and ReactJS bootcamp!  Build feature-rich Android apps, conquer cloud storage and scalability, and design UIs that wow - all in one action-packed program.  Become a tech triple threat and watch your career skyrocket!
                    </div>
                </div>
            </div>
        </div>
    )
}


export default landingPart
