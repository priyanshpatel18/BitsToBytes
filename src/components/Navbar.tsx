"use client";

import logo from "@/assets/logo.png";
import menuBar from "@/assets/menuBar.png";
import close from "@/assets/close.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import store from "@/store/store";

export default function Navbar(): React.ReactNode {
    const Store = store();

    const [isopen, setisopen] = useState(false);
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "events",
            path: "/events",
        },
        {
            name: "teams",
            path: "/teams",
        },
        {
            name: "resources",
            path: "/resources",
        },
        {
            name: "Connect with us",
            path: "/connect",
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            ".logo",
            {
                x: "-100%",
            },
            {
                x: 0,
                delay: 0,
            }
        );

        gsap.fromTo(
            ".link",
            {
                x: "100%",
            },
            {
                x: 0,
                delay: 0,
            }
        );
        if (isopen) {
            gsap.fromTo(
                ".link",
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: {
                        amount: 0.6,
                        axis: "x",
                        ease: "power3.inOut",
                        from: "center",
                    },
                    delay: 0.5,
                }
            );
        }
    }, [isopen]);

    const [showMenuBar, setShowMenuBar] = React.useState(false);
    function handleMenuBar() {
        setShowMenuBar(!showMenuBar);
    }
    const handleanimate = () => {
        // if (isopen) {
        //     gsap.fromTo(
        //         ".Nav",
        //         {
        //             x: "100vw",
        //             duration: 1,
        //         },
        //         {
        //             x: "0",
        //             ease: "power3.inOut",
        //         }
        //     );
        // } else {
        //     gsap.fromTo(
        //         ".Nav",
        //         { x: "0", ease: "power3.inOut" },
        //         {
        //             x: "100vw",
        //             duration: 1,
        //         }
        //     );
        // }
    };
    return (
        <>
            <nav className="navBar bg-[#F2F2F2] h-[10vh] px-[3rem] py-[1.1rem] flex justify-between items-center sticky top-0 z-[100]">
                <Link
                    href="/"
                    className="flex justify-center items-center overflow-hidden"
                >
                    <Image
                        src={logo}
                        alt="logo"
                        className="logo w-full h-[2.5rem]"
                    />
                </Link>
                <div className="hidden lg:flex lg:items-center gap-[3rem]">
                    {navLinks.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className="relative text-[#000515] capitalize text-[1.5rem] font-medium navLink overflow-hidden"
                            >
                                <div className="link">{link.name}</div>
                            </Link>
                        );
                    })}
                </div>
                <button className="lg:hidden w-[2rem] h-[2rem]">
                    <Image
                        src={showMenuBar ? close : menuBar}
                        alt="menuBar"
                        className="w-full h-full"
                        onClick={() => {
                            handleMenuBar();
                            setisopen(!isopen);
                            handleanimate();
                        }}
                    />
                </button>
            </nav>
            <div
                className={`Nav fixed z-[50] lg:hidden w-full h-[90vh] bg-[#F2F2F2] text-[#000515] transition-all ease-in-out duration-500  ${
                    isopen ? "left-0" : "left-[100vw]"
                }`}
            >
                <ul className="w-full h-full flex flex-col justify-center text-[#000515]">
                    {navLinks.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className="relative text-[#000515] capitalize text-[2.5rem] px-4 font-medium  overflow-hidden"
                        >
                            <div className="link" onClick={() => {}}>
                                {link.name}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
