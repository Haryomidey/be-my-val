import React from 'react'
import { Link } from 'react-router-dom';
import { fileName } from '../../data/file_name';


import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MakeSelection = () => {
    return (
        <div className='pb-10'>
            <h1 className='text-5xl font-semibold'>Make Your Selection Below</h1>

            <ul className='mt-28 grid grid-cols-1 sm:grid-cols-3 gap-8'>
                {
                    fileName.map((file, index) => (
                        <li key={index} className='bg-[#1A2332] min-h-[220px] rounded-xl shadow-md p-5'>
                            <Link to='/connect'>
                                <div className='bg-[#1F2937] h-[65px] w-[65px] rounded-full flex items-center justify-center text-2xl text-[#60A5FA]'>{<file.icon />}</div>
                                <h2 className='mt-7 font-semibold text-xl'>{file.h2}</h2>
                                <p className='mt-5 text-[#9ca3af] text-sm'>{file.p}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className='mt-40 block sm:hidden w-full h-[1px] bg-[#888686]'></div>

            <div className='w-full mt-14 flex items-center justify-center sm:justify-between flex-wrap gap-y-10'>
                Copyright © 2024 Blockchain Amendment . All rights reserved.
            </div>
        </div>
    )
}

export default MakeSelection