import React from 'react'
import Boxes from '@/components/homePage/boxes'
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";

const page = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className=' h-12 border-3 rounded-2xl border-black dark:border-white animate-from-left flex items-center justify-center text-3xl w-[350px]  '> Registration Form  </div>
            </div>
            <div className=' animate-from-top'>
                <div className=' flex items-center mt-10 justify-center mb-5 text-3xl' >Personal Information</div>

                <div className='border-2 w-full dark:border-white border-black'></div>

                <div className=' hover:scale-110 transition delay-200'>
                    <div className=' hover:border-3 border-4 border-blue-600  mt-10 hover:shadow-blue-600 h-60 rounded-xl hover:shadow-lg transition delay-200 '>

                        <div className=' ml-10 animate-from-top mt-6  transition '>
                            <Input
                                type="First Name"
                                label="First Name"
                                variant="bordered"
                                defaultValue=""
                                className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                            // width={}
                            />
                            <div className=' ml-[660px]  relative bottom-14 animate-from-top transition '>
                                <Input
                                    className='w-[480px] border-3 rounded-2xl border-black dark:border-white'
                                    type="Last Name"
                                    label="Last Name"
                                    variant="bordered"
                                    defaultValue=""

                                />
                            </div>

                        </div>

                        <div className=' ml-10 animate-from-top transition '>
                            <Input
                                type="email"
                                label="Email"
                                variant="bordered"
                                defaultValue=""
                                className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                            />
                            <div className=' ml-[660px] relative bottom-14 animate-from-top transition '>
                                <Input
                                    type="Phone Number"
                                    label="Contact Number (Active WhatsApp)"
                                    variant="bordered"
                                    defaultValue=""
                                    className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                                />
                            </div>

                        </div>

                       



                    </div>
                </div>

                <div className=' flex items-center mt-16 justify-center mb-5 text-3xl' >College/University Information</div>
                <div className='border-2 w-full dark:border-white border-black'></div>
                <div className=' hover:scale-110 transition delay-200'>
                    <div className=' hover:border-3 border-4 border-green-600  mt-10 hover:shadow-green-600 h-60 rounded-xl hover:shadow-lg transition delay-200 '>

                        <div className=' ml-10 animate-from-top mt-6  transition '>
                            <div className=' relative left-[38px] animate-from-top mt-10  transition '>
                                <Dropdown>
                                    <DropdownTrigger className='w-[480px] border-3 h-[57px] rounded-2xl border-black dark:border-white'>
                                        <Button
                                            variant="bordered"
                                        >
                                            Course Name
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="BTech">BTech</DropdownItem>
                                        <DropdownItem key="BCA">BCA</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                                <div className=' ml-[660px]  relative bottom-14 animate-from-top transition '>
                                    <Input
                                        className='w-[480px] border-3 rounded-2xl border-black dark:border-white'
                                        type="Registration Number"
                                        label="Registration Number"
                                        variant="bordered"
                                        defaultValue=""

                                    />
                                </div>

                            </div>

                            <div className=' ml-10 animate-from-top transition '>
                                <Input
                                    type="Year"
                                    label="Year"
                                    variant="bordered"
                                    defaultValue=""
                                    className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                                />
                                <div className=' ml-[660px] relative bottom-14 animate-from-top transition '>
                                    <Input
                                        type="Semester"
                                        label="Semester"
                                        variant="bordered"
                                        defaultValue=""
                                        className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                                    />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>

                <div className=' flex items-center mt-16 justify-center mb-3 text-3xl' >Your Courses with Us</div>
                <div className='border-2 w-full mt-8 dark:border-white border-black'></div>

                <div className=' hover:scale-110 transition delay-200'>
                    <div className=' hover:border-3 border-4 border-purple-600 mt-10 hover:shadow-purple-600 h-44 rounded-xl hover:shadow-lg transition delay-200'></div>
                    <div className=' left-[38px] animate-from-top mt-10  transition '>
                    <div className=' ml-[600px] relative  bottom-[190px] mt-20 right-[500px] animate-from-top transition '>
                            <Input
                                type="Number of Courses You want"
                                label="Number of Courses you'd like to have"
                                variant="bordered"
                                defaultValue=""
                                className="w-[480px] border-3 rounded-2xl border-black dark:border-white"
                            />
                        </div>
                                <Dropdown>
                                    <DropdownTrigger className='w-[480px] border-3 left-[660px] bottom-[250px] h-[57px] rounded-2xl border-black dark:border-white'>
                                        <Button
                                            variant="bordered"
                                        >
                                            Our Courses
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="App dev">App Development</DropdownItem>
                                        <DropdownItem key="Cloud">Cloud Computing</DropdownItem>
                                        <DropdownItem key="Web Dev">Web Development</DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                        

                    </div>

                </div>


            </div>
            <div className='flex items-center justify-center relative bottom-[180px]'>
                <Button color='secondary' variant='ghost' className='text-2xl'>
                    Register
                </Button>
            </div>

        </div>

    )
}

export default page