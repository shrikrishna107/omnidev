import Head from 'next/head';
import Image from 'next/image';
import Ashwin from '@/public/ashwin.jpg'
import Sahil from '@/public/undraw_cloud_hosting_7xb1.svg'
import Shri from '@/public/undraw_web_devices_re_m8sc.svg'
import { Button, ButtonGroup } from "@nextui-org/button";


export default function Home() {
    return (
        <div className=''>
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <div className='border-3 border-black dark:border-white h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-left shadow-xl hover:shadow-gray-600'>
                        <div className=' font-bold'>Android Development</div>
                        <div className=' text-lg text-left ml-3 mb-3 mt-4 mr-3 animate-text-left '>
                            Android development is all about creating apps for the world's most popular mobile operating system.  In this realm, you'll use Kotlin to build interactive apps and leverage Android Studio to bring your ideas to life.  Get ready to design user interfaces, understand core concepts, and integrate features users love!</div>
                        <div className=' hover:shadow-md hover:shadow-blue-600'>
                            <Button color="primary" variant="ghost">
                                Explore More
                            </Button>
                        </div>
                    </div>

                </div>

                <div className='border-3 border-black dark:border-white h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-appearance-in shadow-xl hover:shadow-gray-600'>
                    <div className='font-bold'>Cloud Computing</div>

                    <div className=' text-medium text-left mb-1 ml-3 mt-4 mr-3 animate-appearance-in'>

                        Dive into the world of cloud computing! This course unveils how to ditch bulky servers and expensive software. Instead, access computing power like storage, databases, and even applications – all on-demand over the internet.  This cloud magic allows you to scale resources up or down as needed, saving costs and enabling work from anywhere.  Get ready to explore the benefits of scalability, cost-efficiency, and ultimate accessibility – the hallmarks of cloud computing!</div>
                    <div className=' hover:shadow-md hover:shadow-blue-600 mb-2'>
                        <Button color="primary" variant="ghost">
                            Explore More
                        </Button>
                    </div>

                </div>

                <div className=' border-3 border-black dark:border-white h-96 w-80 mt-40 font-serif text-center text-2xl rounded-lg transition duration-250 animate-from-right shadow-xl hover:shadow-gray-600'>
                    <div className='font-bold '>ReactJS</div>

                    <div className=' text-medium text-left mb-[75px] ml-3 mr-3 mt-4 animate-text-right '>
                        Unleash your inner web developer! This course equips you with the essential tools to build websites you use every day.  Learn HTML, the structural foundation, CSS, the designer's toolkit for styling, and JavaScript, the wizard behind website interactivity. With this powerful trio, you'll be ready to transform your web ideas into reality!
                    </div>
                    <div className=' hover:shadow-md hover:shadow-blue-600 mt-16'>
                        <Button color="primary" variant="ghost">
                            Explore More
                        </Button>
                    </div>
                </div>

            </div>
        </div>

    );
}
