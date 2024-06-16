import React from 'react'
import Boxes from '@/components/homePage/boxes'
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';
import { RadioGroup, Radio } from "@nextui-org/radio";

const page = () => {
    return (
        <div>
            <div className=' flex items-center ml-[500px] justify-center relative bottom-[90px] border-3 hover:shadow-lg hover:bg-purple-600 rounded-2xl border-purple-600 h-12 w-52 mt-28 text-2xl text-purple-600 hover:text-white hover:shadow-purple-500 font-serif transition animate-from-top mb-12'>Registration</div>
            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="email"
                    label="Email"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="Name"
                    label="Name"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="Phone Number"
                    label="Phone Number"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[380px] bottom-20 mb-7 transition '>
                <RadioGroup
                    label="Select your favorite city"
                    orientation='horizontal'

                >
                    <Radio value="App Dev">Android Development</Radio>
                    <Radio value="Cloud">Cloud Computing</Radio>
                    <Radio value="Web Dev">Web Development</Radio>
                    
                </RadioGroup>
            </div>

            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="About Yourself"
                    label="About Yourself"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="Registration number in SRM University"
                    label="Registration number in SRM University"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[455px] bottom-20 mb-7 transition '>
                <Input
                    type="Course in College"
                    label="Course in College"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className='  animate-from-top relative ml-[455px] border-purple-600 bottom-20 mb-7 transition '>
                <Input
                    type="Year"
                    label="Year"
                    variant="bordered"
                    defaultValue=""
                    className="max-w-xs"
                />
            </div>

            <div className=' flex items-center justify-center animate-from-top relative bottom-20'>
                <Button color="secondary" variant="ghost" as={Link} href='/registration' className=' hover:shadow-purple-900 hover:bg-purple-500'>
                    Register
                </Button>
            </div>




        </div>
    )
}

export default page