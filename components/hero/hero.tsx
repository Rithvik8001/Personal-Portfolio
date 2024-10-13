"use client";

import { Emoji } from "react-apple-emojis";
import { useWindowSize } from "usehooks-ts";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { useNavStore } from "@/zustand/store";
import Highlight from "./highlight";
import { easeOutExpo } from "@/constants/ease";

const Hero = () => {
  const { width } = useWindowSize();
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef);
  const { setActiveSection } = useNavStore();

  useEffect(() => {
    if (isInView) setActiveSection("hero");
  }, [isInView]);

  return (
    <div className="pb-2">
      <motion.div
        ref={heroRef}
        initial={{
          y: 200,
        }}
        animate={{
          y: 0,
          transition: {
            ease: easeOutExpo,
            duration: 0.75,
            delay: 0.25,
          },
        }}
        className="min-h-[700px] relative overflow-hidden card flex flex-col justify-center items-center gap-8 md:min-h-screen rounded-[2rem] border px-4 pb-0 pt-40 md:h-[700px] md:p-16 md:items-start xl:justify-end xl:pb-36"
      >
        <div className="flex flex-col gap-4">
          <div className="relative flex w-max">
            <span>
              <Emoji
                className="inline"
                name="waving-hand"
                width={width < 640 ? 18 : 20}
              />
            </span>{" "}
            <GradualSpacing
              className="tight text-left text-lg text-tertiary sm:text-xl md:text-2xl"
              text=" Yo, I'm Rithvik Pallamreddy"
            />
            <Highlight />
          </div>
          <h1 className="text-4xl font-medium tight max-w-[640px] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent md:text-6xl xl:max-w-[80%] leading-[1.1] md:leading-[1.15]">
            Passionate Frontend Developer, Who has an eye for design and a mind
            for development. I love building things and helping people.
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
