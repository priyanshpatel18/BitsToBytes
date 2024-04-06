"use client"

import logo from "@/assets/logo.png";
import menuBar from "@/assets/menuBar.png";
import close from "@/assets/close.png"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import gsap from "gsap";

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

  useEffect(() => {
    gsap.fromTo(".logo", {
      x: "-100%",
    }, {
      x: 0,
      delay: 0
    })

    gsap.fromTo(".link", {
      x: "100%",
    }, {
      x: 0,
      delay: 0
    })
  }, [])

  const [showMenuBar, setShowMenuBar] = React.useState(false);
  function handleMenuBar() {
    setShowMenuBar(!showMenuBar);
  }

  return (
    <nav className='navBar bg-[#F2F2F2] h-[10vh] px-[3rem] py-[1.1rem] flex justify-between items-center sticky top-0 z-10'>
      <Link href="/" className='flex justify-center items-center overflow-hidden'>
        <Image
          src={logo}
          alt='logo'
          className='logo w-full h-[2.5rem]'
        />
      </Link>
      <div className="hidden lg:flex lg:items-center gap-[3rem]">
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className='relative text-[#000515] capitalize text-[1.5rem] font-medium navLink overflow-hidden'
            >
              <div className="link">{link.name}</div>
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
