import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.svg";
import { FiMenu, FiPlus } from "react-icons/fi";

function Navbar({ setOpen, open }) {
  return (
    <div className="lg:hidden sticky top-0 font-bricolage bg-black border-b h-[70px] flex items-center justify-between px-[20px]">
      <Image src={logo} alt="" className='w-10' />
      {open ? <FiPlus onClick={() => setOpen(!open)} className='text-white text-[35px] rotate-45' />
        : <FiMenu onClick={() => setOpen(!open)} className='text-white text-[30px]' />}

    </div>
  )
}

export default Navbar

