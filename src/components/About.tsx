"use client"

import demoAbout from "@/assets/demoAbout.avif"
import store from '@/store/store'
import "aos/dist/aos.css"
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function About(): React.ReactNode {

  useEffect(() => {

    function handleScroll() {

    }
  }, [])

  return (
    <div className="h-screen w-full bg-[#42B6E3] flex flex-col items-center py-[4rem]">
      <div>
        <h1 className={`aboutHeading text-transparent text-[10rem] ${store.getState().calSans} uppercase tracking-widest stroke-2 text-stroke-dark`}>about us</h1>
      </div>
      <div className='flex w-[90%] gap-[2rem] items-center justify-between overflow-hidden'>
        <div className='text-center w-[50%] px-[2rem]'>
          <h2 className={`text-[2rem] ${store.getState().calSans}`}>What is bitstobytes?</h2>
          <p className='text-[1.7rem]'>
            Being a programming club,
            we assure pretty much everything you ask for!
            From inspiring events and workshops to captivating lectures and talks,
            as well as iconic hackathons and coding contests well known for encouraging innovation and pushing limits.
            Our community of like-minded individuals is always willing to lend a helping hand in any way we can.
          </p>
        </div>
        <div className='w-[50%]'>
          <Image
            src={demoAbout}
            alt='aboutImage'
            className=''
          />
        </div>
      </div>
    </div>
  )
}
