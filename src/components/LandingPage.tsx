"use client"

import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function LandingPage(): React.ReactNode {

  useEffect(() => {
    gsap.fromTo([".mainHeading", ".subHeading"], {
      y: "100%",
    }, {
      y: 0,
      delay: 0.2
    });

    gsap.fromTo(".button", {
      scale: 0
    }, {
      scale: 1,
      delay: 0.2,
      duration: 0.3
    });
  }, [])

  return (
    <div className="w-full bg-[#000515] h-[90vh] flex flex-col justify-center items-center select-none p-[1rem]">
      <div className="overflow-hidden">
        <h1 className='mainHeading text-[#42B6E3] font-cal-sans text-[5rem] lg:text-[8rem]'>bitstobytes</h1>
      </div>
      <div className="text-[#F2F2F2] text-[5rem] font-cal-sans text-center leading-[5.2rem]">
        <div className="overflow-hidden">
          <h1 className='subHeading'>harnessing the power of</h1>
        </div>
        <div className="overflow-hidden">
          <h1 className='subHeading'><span className='text-[#42B6E3]'>technology</span> and <span className='text-[#42B6E3]'>education</span></h1>
        </div>
      </div>
      <button className='bg-[#42B6E3] py-[1.2rem] px-[1.5rem] rounded-[2.5rem] mt-[3rem] button'>
        <span className='text-[#F2F2F2] text-[1.5rem] font-poppins font-bold'>Become a Member</span>
      </button>
    </div>
  )
}
