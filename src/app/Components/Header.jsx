import React from 'react'
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai'
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
    return (
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <Image src='logo.svg' height={50} width={50} alt='no image'/>
                <MenuItem title='home' address="/" Icon={AiFillHome} /> 
                <MenuItem title='about' address="/about" Icon={BsFillInfoCircleFill} />
            </div>
            <div className='flex items-center gap-3'>
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='py-1 px-2 text-gray-800 hover:text-blue-500 ease-in ease-out sm:inline'>Pricing</span>
                    {/*<span className='text-xl hidden sm:inline'>Clone</span>*/}
                </Link>
            </div>
      </div>
  )
}
export default Header