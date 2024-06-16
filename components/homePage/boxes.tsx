import Head from 'next/head';
import Image from 'next/image';
import Ashwin from '@/public/ashwin.jpg'
import Sahil from '@/public/undraw_cloud_hosting_7xb1.svg'
import Shri from '@/public/undraw_web_devices_re_m8sc.svg'
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';


export default function Home() {
    return (
        <div className=''>
            <div className=' flex justify-center mt-20 mb-10 animate-from-right text-3xl font-serif font-medium'>🗲Register now🗲</div>
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <div className='hover:scale-110 transition duration-300'>
                        <div className='border-3 border-black dark:border-white hover:scale-110 h-[250px] w-80 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-left shadow-xl hover:shadow-gray-600'>
                            <div className=' font-bold'>Android Development</div>
                            <div className=' text-lg text-left ml-3 mb-3 mt-4 mr-3 animate-text-left '>
                            Craft captivating Android apps! Master Kotlin & Android Studio in this course to design, develop, and launch your app ideas.
                                </div>
                                <div className=' transition mt-[20px] animate-text-left'>
                                <Button color="secondary" variant="ghost" as={Link} href='/registration' className=' hover:shadow-purple-600 hover:bg-purple-500'>
                                    Explore More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hover:scale-110 transition duration-300'>
                    <div className='border-3 border-black dark:border-white hover:scale-110 h-[250px] w-80 font-serif text-center text-2xl rounded-lg transition duration-250 animate-appearance-in shadow-xl hover:shadow-gray-600'>
                        <div className='font-bold'>Cloud Computing</div>

                        <div className=' text-medium text-left mb-1 ml-3 mt-4 mr-3 transition animate-appearance-in'>
                            This course teaches you about cloud computing, which provides on-demand access to computing resources over the internet. It allows you to scale resources and work from anywhere, saving costs.</div>
                        <div className='  mt-[20px] animate-appearance-in'>
                            <Button color="secondary" variant="ghost" as={Link} href='/registration' className=' hover:shadow-purple-600 hover:bg-purple-500'>
                                Explore More
                            </Button>
                        </div>

                    </div>
                </div>

                <div className='hover:scale-110 transition duration-300'>
                    <div className=' border-3 border-black dark:border-white h-[250px] w-80 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-right shadow-xl hover:shadow-gray-600'>
                        <div className='font-bold '>ReactJS</div>

                        <div className=' text-medium text-left mb-1 ml-3 mr-3 mt-4 animate-text-right '>
                        Craft stunning websites! This course teaches HTML, CSS, and JavaScript - the building blocks you need to bring your web ideas to life. Unleash your inner developer and transform the web!
                            </div>
                       <div className='mt-[20px]'>
                        <Button color='secondary' variant='ghost' as={Link} href='/registration' className=' hover:shadow-purple-600 hover:bg-purple-500'>
                        Explore More
                        </Button>
                       </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
