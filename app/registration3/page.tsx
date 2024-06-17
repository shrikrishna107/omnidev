import React from 'react'
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from 'next/link';
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";

const page = () => {
    return (
        <div>

            

            <div className=' flex items-center justify-center mb-5 text-3xl' >Your Courses with Us</div>
            <div className='border-2 w-full mt-10 dark:border-white border-black'></div>

            <div className=' hover:scale-110 transition delay-200'>
                <div className=' hover:border-3 border-4 border-black dark:border-white mt-10 hover:shadow-purple-600 h-60 rounded-xl hover:shadow-lg transition delay-200'></div>
                <div className=' ml-10 animate-from-top  transition '>
                    <Input
                        type="Year"
                        label="Year"
                        variant="bordered"
                        defaultValue=""
                        className="w-[480px] border-3 relative bottom-[85px] rounded-2xl border-black dark:border-white"
                    />
                    <div className=' ml-[660px] relative bottom-[145px] animate-from-top transition '>
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
    )
}

export default page