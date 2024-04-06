import store from '@/store/store'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import demoMember from "../assets/demoMember.png"
import Link from 'next/link'

import instagram from "@/assets/instagram.png"
import linkedin from "@/assets/linkedin.png"
import github from "@/assets/github.png"
import twitter from "@/assets/twitter.png"

interface TeamMember {
  image: StaticImageData,
  name: string,
  position: string,
  insta: string,
  linkedin: string,
  github: string,
  twitter: string,
}

export default function Member(): React.ReactNode {
  const data: TeamMember[] = [
    {
      image: demoMember,
      name: "Patel Priyansh",
      position: "President",
      insta: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
      twitter: "https://www.twitter.com",
    },
    {
      image: demoMember,
      name: "Patel Priyansh",
      position: "Vice President",
      insta: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
      twitter: "https://www.twitter.com",
    },
    {
      image: demoMember,
      name: "Patel Priyansh",
      position: "PR Lead",
      insta: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
      github: "https://www.github.com",
      twitter: "https://www.twitter.com",
    },
  ]

  return (
    <div className="w-full min-h-[100vh] bg-[#F2F2F2] flex flex-col items-center py-[4rem]">
      <h1 className={`text-transparent text-[10rem] ${store.getState().calSans} uppercase tracking-widest text-stroke-dark`}>our team</h1>
      <div className='flex justify-evenly w-[90%]'>
        {data.map((member, index) => (
          <div key={index} className='border-2 border-[#000515] rounded-lg bg-gradient-to-b from-[#CCC] to-[#F2F2F2] w-[25%] relative'>
            <Image
              src={member.image}
              alt='teamMember'
              className='rounded-lg w-[100%]'
            />
            <div className="absolute bg-[#42B6E3] bottom-[1rem] left-[50%] translate-x-[-50%] w-[90%] rounded-[5rem] border-2 border-[#000515]">
              <div className={`flex flex-col items-center p-[1rem] gap-[]`}>
                <span className={`text-[1.5rem] leading-[1.5rem]  ${store.getState().calSans}`}>{member.name}</span>
                <span className={` ${store.getState().poppins} text-[1.3rem] leading-[1.3rem]`}>{member.position}</span>
                <div className='flex gap-[1rem]'>
                  <Link href={member.insta}>
                    <Image src={instagram} alt='insta' className='w-[1.5rem]' />
                  </Link>
                  <Link href={member.github}>
                    <Image src={github} alt='insta' className='w-[1.5rem]' />
                  </Link>
                  <Link href={member.linkedin}>
                    <Image src={linkedin} alt='insta' className='w-[1.5rem]' />
                  </Link>
                  <Link href={member.twitter}>
                    <Image src={twitter} alt='insta' className='w-[1.5rem]' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
