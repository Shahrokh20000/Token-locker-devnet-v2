/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image';
/* eslint-disable react/prop-types */



function CustomLink({ children, onClick, to, ...props }) {
  const router = useRouter();
  const match = router.pathname === (to !== "" ? to : "/dashboard");
  return (
    <Link
      onClick={onClick}
      className={`${match ? "bg-darkBlue" : ""
        }   w-full flex items-center rounded-[8px] p-[10px_20px] font-[500] `}
      href={to}
      {...props}
    >
      <div className='flex items-center space-x-[10px]'>
        <div className='h-[20px] w-[20px] border'></div>
        <p className='text-white font-inter  text-[16px]'>{children}</p>
      </div>
      {match && <div className="w-2 h-2  rounded-full ml-auto bg-[#0341BA]"></div>}
    </Link>
  );
}




function Sidebar({ open, setOpen }) {
  return (
    <div className={`${open ? "left-0" : "left-[-100%] lg:left-0"} bg-[#090909] fixed transition-all top-0 lg:relative min-w-[250px] max-w-[250px] border-r border-[#FFFFFF1A] h-screen p-[20px]`}>
      <div>
        <Image src={logo} className='h-[38px] w-[38px]' alt="" />
      </div>
      <div className='flex flex-col mt-[50px] space-y-[20px]'>
        {links.map((link, index) => (
          <CustomLink onClick={() => setOpen(!open)} to={link.href} key={index}>
            {link.name}
          </CustomLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Mint Tokens',
    href: '/dashboard/tokens'
  },
  {
    name: 'Burn',
    href: '/dashboard/burn'
  },
  {
    name: 'Multisender',
    href: '/dashboard/multisender'
  },
  // {
  //   name: 'Lock LP',
  //   href: '/dashboard/lock-lp'
  // }
]