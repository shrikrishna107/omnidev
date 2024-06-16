import Head from 'next/head';
import Image from 'next/image';
import Ashwin from '@/public/ashwin.jpg'
import Sahil from '@/public/undraw_cloud_hosting_7xb1.svg'
import Shri from '@/public/undraw_web_devices_re_m8sc.svg'

export default function Home() {
    return (
        <div className=''>
            <div className='flex items-center justify-center gap-10'>
                <div className='border-2 h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-left shadow-xl hover:shadow-gray-600'>
                    Android Development
                    <div className="image-container rounded-lg" style={{ position: 'relative', opacity: 0.5}}>
                        <Image
                            src={Ashwin}
                            alt="Ashwin"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL='{Ashwin}'
                            
                        />
                        <div className='mt-80 right-0 mr-8 font-serif text-xs text-black font-black absolute top-1'>-with Ashwin</div>
                    </div>

                    {/* <div className='mt-10 text-right mr-5 font-serif text-xs'>-with Ashwin</div> */}
                </div>

                <div className='border-2 h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-appearance-in shadow-xl hover:shadow-gray-600'>
                    Cloud Computing

                    <div className="image-container" style={{ position: 'relative', opacity:0.5 }}>
                        <Image
                            src={Sahil}
                            alt="Sahil"
                            layout="fill"
                            objectFit="cover"
                        />

                        <div className='mt-80 right-0 mr-8 font-serif text-xs text-black font-black absolute top-1'>-with Sahil</div>
                    </div>

                    {/* <div className='mt-10 text-right mr-5 font-serif text-xs'>-with Sahil</div> */}
                </div>

                <div className='border-2 h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-right shadow-xl hover:shadow-gray-600'>
                    ReactJS

                    <div className="image-container" style={{ position: 'relative', opacity: 0.5}} >
                        <Image
                            src={Shri}
                            alt="Shri"
                            layout="fill"
                            objectFit="cover"
                        />

                        <div className='mt-80 right-0 mr-8 font-serif text-xs text-black font-black absolute top-1'>-with Shri</div>
                        
                    </div>

                </div>
            </div>

        </div>

    );
}
