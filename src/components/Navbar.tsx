"use client"

import logo from "@/assets/logo.png";
import menuBar from "@/assets/menuBar.png";
import close from "@/assets/close.png"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar(): React.ReactNode {
  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "events",
      path: "/events"
    },
    {
      name: "teams",
      path: "/teams"
    },
    {
      name: "resources",
      path: "/resources",
    },
    {
      name: "Connect with us",
      path: "/connect",
    }
  ]

  const [showMenuBar, setShowMenuBar] = React.useState(false);

  function handleMenuBar() {
    setShowMenuBar(!showMenuBar);
  }

  return (
    <nav className='bg-[#F2F2F2] h-[10vh] p-[1rem] lg:px-[3rem] lg:py-[1.1rem] flex justify-between items-center'>
      <Link href="/" className='flex justify-center items-center sm:h-[2.5rem]'>
        <Image
          src={logo}
          alt='logo'
          className='w-full h-full'
        />
      </Link>
      <div className="hidden lg:flex lg:items-center lg:gap-[3rem]">
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className='relative text-[#000515] capitalize text-[1.5rem] font-medium navLink'
            >
              <span>{link.name}</span>
            </Link>
          )
        })}
      </div>
      <button className="lg:hidden w-[2rem] h-[2rem]">
        <Image
          src={showMenuBar ? close : menuBar}
          alt='menuBar'
          className="w-full h-full"
          onClick={handleMenuBar}
        />
      </button>
    </nav>
  )
}
