import store from '@/store/store'
import Image from 'next/image'
import React from 'react'

import atTheRate from "@/assets/atTheRate.png"
import location from "@/assets/location.png"
import phone from "@/assets/phone.png"

import facebook from "@/assets/facebook-dark.png"
import github from "@/assets/github-dark.png"
import instagram from "@/assets/instagram-dark.png"
import linkedin from "@/assets/linkedin-dark.png"
import p from "@/assets/p.jpg"
import twitter from "@/assets/twitter-dark.png"
import youtube from "@/assets/youtube-dark.png"

import v from "@/assets/v.jpg"
import Link from 'next/link'

export default function Footer(): React.ReactNode {
  const socialIcons = [
    { src: instagram, href: "https://www.instagram.com/bits.to.bytes/" },
    { src: linkedin, href: "https://linkedin.com/company/bitstobytes-gecbvn" },
    { src: github, href: "https://github.com/Bits-to-Bytes" },
    { src: twitter, href: "https://twitter.com/BitstobytesGec" },
    { src: youtube, href: "https://www.youtube.com/@BitstoBytes" },
    { src: facebook, href: "https://www.facebook.com/bitstobytesgecbvn" },
  ]

  return (
    <footer className='bg-[#000515] pt-[5rem] w-full flex flex-col items-center text-[#F2F2F2]'>
      <div className='px-[3rem] lg:px-0 w-full flex flex-col lg:flex-row gap-[2rem] lg:gap-0'>
        <div className='lg:px-[3rem] flex flex-col gap-[1rem]'>
          <h1 className={`text-[#42B6E3] text-[3.5rem] ${store.getState().calSans}`}>bitstobytes</h1>
          <div className="flex gap-[1rem]">
            <Image src={location} alt='location' className='w-[1.5rem] h-[1.5rem] mt-[2px]' />
            <span className='text-[1.2rem] lg:w-[50%] '>Government Engineering College, Bhavnagar, Nr. Sir BPTI Campus, Vidhyanagar, Bhavnagar, Gujarat 364002, India</span>
          </div>
          <div className="flex gap-[1rem]">
            <Image src={atTheRate} alt='location' className='w-[1.5rem] h-[1.5rem] mt-[2px]' />
            <span className='text-[1.2rem] lg:w-[50%] '>bitstobytesgecbvn@gmail.com</span>
          </div>
          <div className="flex gap-[1rem]">
            <Image src={phone} alt='location' className='w-[1.5rem] h-[1.5rem] mt-[2px]' />
            <span className='text-[1.2rem] lg:w-[50%]'>+91 278 252 5354</span>
          </div>
        </div>
        <div className='flex flex-col gap-[1rem]'>
          <h1 className={`text-[#42B6E3] text-[3.5rem] ${store.getState().calSans}`}>Follow us @</h1>
          <div className="grid grid-cols-3 gap-[2rem] lg:gap-[4rem]">
            {socialIcons.map((icon, index) => (
              <Link key={index} href={icon.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Image src={icon.src} alt="socialIcon" className='w-[2.5rem] h-[2.5rem]' />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='px-[3rem] lg:px-0 py-[3rem] w-full flex flex-col items-center'>
        <h1 className={`text-[#42B6E3] text-[1.5rem] lg:text-[2.5rem] ${store.getState().calSans}`}>Designed and Developed by:</h1>
        <div className="flex items-center gap-[10rem]">
          <Link href={`https://www.linkedin.com/in/priyansh-patel-1570b0251/`} target='_blank' className="flex flex-col items-center gap-[1rem] my-[1rem]">
            <Image src={p} alt='patel' className='lg:w-[10rem] lg:h-[10rem] rounded-full' />
            <span className={`text-[1rem] lg:text-[1.5rem] text-[#42B6E3] ${store.getState().calSans}`}>Priyansh Patel</span>
          </Link>
          <Link href={`https://www.linkedin.com/in/vaidik-bhesaniya-17863821b/`} target='_blank' className="flex flex-col items-center gap-[1rem]">
            <Image src={v} alt='patel' className='lg:w-[10rem] lg:h-[10rem] rounded-full' />
            <span className={`text-[1rem] lg:text-[1.5rem] text-[#42B6E3] ${store.getState().calSans}`}>Vaidik Bhesaniya</span>
          </Link>
        </div>
        <span className={`${store.getState().poppins} text-[1rem]`}>Copyright @ 2024 All rights reserved | bitstobytes</span>
      </div>
    </footer>
  )
}
