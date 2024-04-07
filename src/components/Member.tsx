"use client";
import store from "@/store/store";
import Image, { StaticImageData } from "next/image";
import React from "react";
import demoMember from "../assets/demoMember.png";
import demoFaculty from "../assets/demoFaculty.jpg";
import Link from "next/link";

import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github.png";
import twitter from "@/assets/twitter.png";
import HoverCard from "@darenft/react-3d-hover-card";

import "@darenft/react-3d-hover-card/dist/style.css";

interface TeamMember {
    image: StaticImageData;
    name: string;
    position: string;
    insta: string;
    linkedin: string;
    github: string;
    twitter: string;
}

export default function Member(): React.ReactNode {
    const team: TeamMember[] = [
        {
            image: demoMember,
            name: "GEC BHAVNAGAR",
            position: "President",
            insta: "https://www.instagram.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            twitter: "https://www.twitter.com",
        },
        {
            image: demoMember,
            name: "GEC BHAVNAGAR",
            position: "Vice President",
            insta: "https://www.instagram.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            twitter: "https://www.twitter.com",
        },
        {
            image: demoMember,
            name: "GEC BHAVNAGAR",
            position: "PR Lead",
            insta: "https://www.instagram.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            twitter: "https://www.twitter.com",
        },
    ];

    const committee = [
        {
            image: demoFaculty,
            name: "GEC BHAVNAGAR",
            position: "Principal, GEC, Bhavnagar",
        },
        {
            image: demoFaculty,
            name: "GEC BHAVNAGAR",
            position: "HoD, Department of Computer Engineering, GEC, Bhavnagar",
        },
        {
            image: demoFaculty,
            name: "GEC BHAVNAGAR",
            position:
                "Assistant Professor, Department of Computer Engineering, GEC, Bhavnagar",
        },
    ];

    return (
        <div className="w-full min-h-[100vh] bg-[#F2F2F2] flex flex-col items-center py-[4rem]">
            <h1
                className={`text-transparent text-[5rem] lg:text-[10rem] leading-[9rem] ${
                    store.getState().calSans
                } uppercase tracking-[1rem] lg:tracking-[2rem] text-stroke-dark lg:flex lg:gap-[2.5rem] `}
            >
                <span className="hidden lg:block">our</span> team
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-0 lg:justify-evenly w-[90%] lg:mb-[2rem]">
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="border-2 border-[#000515] rounded-lg bg-gradient-to-b from-[#CCC] to-[#F2F2F2] lg:w-[25%] relative lg:hover:shadow-[5px_5px_0_#000515]"
                    >
                        <Image
                            src={member.image}
                            alt="teamMember"
                            className="rounded-lg "
                        />
                        <div className="absolute bg-[#42B6E3] bottom-[1rem] left-[50%] transform translate-x-[-50%] w-[90%] rounded-[5rem] border-2 border-[#000515]">
                            <div
                                className={`flex flex-col items-center p-[1rem] gap-[0.5rem]`}
                            >
                                <span
                                    className={`text-[1.2rem] lg:text-[1.5rem] lg:leading-[1.5rem] leading-[1.2rem]  ${
                                        store.getState().calSans
                                    }`}
                                >
                                    {member.name}
                                </span>
                                <span
                                    className={` ${
                                        store.getState().poppins
                                    } text-[1rem] leading-[1rem] lg:text-[1.3rem] lg:leading-[1.3rem]`}
                                >
                                    {member.position}
                                </span>
                                <div className="flex gap-[1rem]">
                                    <Link href={member.insta}>
                                        <Image
                                            src={instagram}
                                            alt="insta"
                                            className="w-[1.2rem] lg:w-[1.5rem]"
                                        />
                                    </Link>
                                    <Link href={member.github}>
                                        <Image
                                            src={github}
                                            alt="insta"
                                            className="w-[1.2rem] lg:w-[1.5rem]"
                                        />
                                    </Link>
                                    <Link href={member.linkedin}>
                                        <Image
                                            src={linkedin}
                                            alt="insta"
                                            className="w-[1.2rem] lg:w-[1.5rem]"
                                        />
                                    </Link>
                                    <Link href={member.twitter}>
                                        <Image
                                            src={twitter}
                                            alt="insta"
                                            className="w-[1.2rem] lg:w-[1.5rem]"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <HoverCard scaleFactor={1.4}>
                <button className="bg-[#42B6E3] lg:py-[1.2rem] lg:px-[1.5rem] py-[0.9rem] px-[1rem] rounded-[2.5rem] my-[3rem]">
                    <span
                        className={`text-[#000515] lg:text-[1.5rem] font-bold text-[1rem] ${
                            store.getState().poppins
                        }`}
                    >
                        Meet our Team
                    </span>
                </button>
            </HoverCard>

            <h1
                className={`text-transparent text-[5rem] lg:text-[10rem] leading-[7rem] lg:leading-[11rem] ${
                    store.getState().calSans
                } uppercase tracking-[1rem] lg:tracking-[2rem] text-stroke-dark lg:flex lg:gap-[2.5rem]`}
            >
                <span className="hidden lg:block ">committee</span>
                <span className="block lg:hidden">board</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-[90%] gap-[2rem]">
                {committee.map((member, index) => (
                    <div
                        key={index}
                        className="border-2 border-[#000515] rounded-[2rem]  lg:w-[25%] lg:hover:shadow-[5px_5px_0_#000515]"
                    >
                        <Image
                            src={member.image}
                            alt="commitee"
                            className="rounded-t-[2rem] w-[100%]"
                        />
                        <div className="p-[1rem] w-[100%] flex flex-col items-center text-center gap-[1rem]">
                            <span
                                className={` ${
                                    store.getState().calSans
                                } text-[1.3rem] leading-[1.3rem]`}
                            >
                                {member.name}
                            </span>
                            <span
                                className={` ${
                                    store.getState().poppins
                                } text-[1.1rem] leading-[1.1rem]`}
                            >
                                {member.position}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
