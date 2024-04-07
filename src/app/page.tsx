"use client";

import React, { useEffect } from "react";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import gsap from "gsap";
import Member from "@/components/Member";

export default function Home(): React.ReactNode {
    useEffect(() => {
        // Landing Page Animation
        gsap.fromTo(
            [".mainHeading", ".subHeading"],
            { y: "100%" },
            {
                y: 0,
                delay: 0.2,
            }
        );

        gsap.fromTo(
            ".button",
            { scale: 0 },
            {
                scale: 1,
                delay: 0.2,
                duration: 0.3,
            }
        );
    }, []);

    return (
        <main>
            <LandingPage />
            <About />
            <Member />
        </main>
    );
}
