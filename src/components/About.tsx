"use client";

import demoAbout from "@/assets/demoAbout.avif";
import store from "@/store/store";
import "aos/dist/aos.css";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function About(): React.ReactNode {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        gsap.to(".aboutHeading", { y: rect.top * 0.2, duration: 0.3 });
        gsap.to(".aboutContent", { y: rect.top * 0.1, duration: 0.3 });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full bg-[#42B6E3] flex flex-col items-center py-[2rem] lg:py-[4rem] lg:gap-[2rem]"
    >
      <div className="overflow-hidden">
        <h1
          className={`aboutHeading text-transparent text-[4rem] lg:text-[10rem] ${
            store.getState().calSans
          } uppercase leading-[4rem] lg:leading-[11rem] tracking-[1rem] lg:tracking-[2rem] text-stroke-dark lg:flex lg:gap-[2.5rem]`}
        >
          about <span className="hidden lg:block">us</span>
        </h1>
      </div>
      <div className="overflow-hidden flex w-[100%] items-center justify-center">
        <div className="aboutContent flex flex-col lg:flex-row w-[90%] gap-[2rem] items-center justify-between overflow-hidden">
          <div className="text-center w-full lg:w-[50%] px-[2rem]">
            <h2 className={`text-[2rem] ${store.getState().calSans}`}>
              What is bitstobytes?
            </h2>
            <p
              className={`text-[1rem] lg:text-[1.7rem] ${
                store.getState().poppins
              }`}
            >
              Being a programming club, we assure pretty much everything you ask
              for! From inspiring events and workshops to captivating lectures
              and talks, as well as iconic hackathons and coding contests well
              known for encouraging innovation and pushing limits. Our community
              of like-minded individuals is always willing to lend a helping
              hand in any way we can.
            </p>
          </div>
          <div className="wi-full lg:w-[50%]">
            <Image src={demoAbout} alt="aboutImage" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
