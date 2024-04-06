"use client";

import store from "@/store/store";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function LandingPage(): React.ReactNode {
    const Store = store();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            gsap.to(".mainHeading", { y: -scrollY * 0.7, ease: "power4.out" });
            gsap.to(".subHeading", { y: -scrollY * 0.4, ease: "power4.out" });
            gsap.to(".button", { y: -scrollY * 0.4, ease: "power4.out" });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <div className={`w-full bg-[#000515] h-[90vh] flex flex-col justify-center items-center select-none p-[1rem] ${Store.calSans}`}>
            <div className="overflow-hidden">
                <h1 className="mainHeading text-[#42B6E3] text-[4rem] lg:text-[8rem]">
                    bitstobytes
                </h1>
            </div>
            <div className="text-[#F2F2F2] text-[2rem] lg:text-[5rem] text-center lg:leading-[5.2rem]">
                <div className="overflow-hidden">
                    <h1 className="subHeading">harnessing the power of</h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className="subHeading">
                        <span
                            className={`text-[#42B6E3] font-CalSans lg:text-[6rem] ${Store.creamCakeFont}`}
                        >
                            technology
                        </span>{" "}
                        and{" "}
                        <span
                            className={`text-[#42B6E3] font-CalSans lg:text-[6rem] ${Store.creamCakeFont}`}
                        >
                            education
                        </span>
                    </h1>
                </div>
            </div>
            <button className="bg-[#42B6E3] lg:py-[1.2rem] lg:px-[1.5rem] py-[0.9rem] px-[1rem] rounded-[2.5rem] mt-[3rem] button">
                <span
                    className={`text-[#F2F2F2] lg:text-[1.5rem] font-bold text-[1rem]  ${Store.poppins}`}
                >
                    Become a Member
                </span>
            </button>
        </div>
    );
}
