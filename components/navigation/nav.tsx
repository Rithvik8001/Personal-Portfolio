"use client";

import NavLink from "@/components/navigation/nav-link";
import Link from "next/link";
import Image from "next/image";
import memoji from "@/assets/memoji_bg.png";
import PulsatingButton from "../ui/pulsating-button";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/constants/ease";

const Nav = () => {
  const lenis = useLenis();

  return (
    <div className="fixed flex justify-center w-full p-4 z-20 xl:px-[14rem] 2xl:px-[17rem]">
      <motion.nav
        initial={{
          y: -150,
        }}
        animate={{
          y: 0,
          transition: {
            ease: easeOutExpo,
            duration: 0.75,
            delay: 0.25,
          },
        }}
        className="w-full flex justify-between items-center rounded-full border p-2 bg-white/75 backdrop-blur-xl"
      >
        <button
          onClick={() => {
            lenis?.scrollTo("top");
          }}
          className="flex items-center gap-2"
        >
          <Image
            src={memoji}
            alt="memoji"
            className="w-10 h-10 rounded-full"
            priority
          />
        </button>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <NavLink section="story" href="#story">
              Story
            </NavLink>
            <NavLink section="experience" href="#experience">
              Experience
            </NavLink>
            <NavLink section="education" href="#education">
              Education
            </NavLink>
            <NavLink section="skills" href="#skills">
              Skills
            </NavLink>
            <NavLink section="projects" href="#projects">
              Projects
            </NavLink>
            <NavLink section="connect" href="#connect">
              Connect
            </NavLink>
          </div>
          <Link href="mailto:rithvik.utd@outlook.com">
            <PulsatingButton
              className="bg-black rounded-full"
              pulseColor="#000000aa"
            >
              Hire me!
            </PulsatingButton>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Nav;
