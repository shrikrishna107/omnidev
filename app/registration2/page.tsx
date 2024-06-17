import React from 'react'
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";

const page = () => {
    return (
        <div>
            <div className=' flex items-center mt-10 justify-center mb-5 text-3xl' >College/University Information</div>
            <div className=' hover:scale-110 transition delay-200'>
                <div className=' hover:border-3 border-4 border-black dark:border-white mt-10 hover:shadow-purple-600 h-60 rounded-xl hover:shadow-lg transition delay-200 '>

                    <div className=' ml-10 animate-from-top mt-6  transition '>
                        <div className=' ml-10  animate-from-top mt-10  transition '>
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

                        <div>
                            <Button color='secondary' variant='ghost'>
                                Next Page
                            </Button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default page