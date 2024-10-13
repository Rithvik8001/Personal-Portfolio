"use client";

import Education from "@/components/education/education";
import About from "@/components/story/story";
import Hero from "@/components/hero/hero";
import { LayoutGroup } from "framer-motion";
import dynamic from "next/dynamic";
import Projects from "@/components/projects/projects";
import Connect from "@/components/connect/connect";

const Experience = dynamic(() => import("@/components/experience/experience"), {
    ssr: false,
});
const Skills = dynamic(() => import("@/components/skills/skills"), {
    ssr: false,
});

const HomePage = () => {
    return (
        <LayoutGroup>
            <main className="p-2 xl:px-[13.5rem] 2xl:px-[16.5rem]">
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Connect />
            </main>
        </LayoutGroup>
    );
};

export default HomePage;
