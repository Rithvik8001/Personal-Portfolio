"use client";

import rithvik from "@/assets/story/rithvik.jpeg";
import manchesterUnited from "@/assets/story/manchester_united.png";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavStore } from "@/zustand/store";
import ButtonLink from "../ui/button-link";

const Story = () => {
  const storyRef = useRef(null);
  const isInView = useInView(storyRef, {
    margin: "-50%",
  });
  const { setActiveSection } = useNavStore();
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img1InView = useInView(img1Ref, { once: true });
  const img2InView = useInView(img2Ref, { once: true });
  const parag1Ref = useRef(null);
  const parag2Ref = useRef(null);
  const parag3Ref = useRef(null);
  const parag4Ref = useRef(null);
  const parag1InView = useInView(parag1Ref, { once: true });
  const parag2InView = useInView(parag2Ref, { once: true });
  const parag3InView = useInView(parag3Ref, { once: true });
  const parag4InView = useInView(parag4Ref, { once: true });

  useEffect(() => {
    if (isInView) setActiveSection("story");
  }, [isInView]);

  return (
    <div
      id="story"
      ref={storyRef}
      className="relative pt-40 flex flex-col gap-16 px-4 sm:gap-20 xl:gap-32"
    >
      <div className="relative">
        <div className="sticky top-[40vh] flex justify-center min-w-min">
          <motion.div
            animate={{
              opacity: img1InView ? 1 : 0,
              scale: img1InView ? 1 : 0.3,
              rotate: -6,
              transition: {
                delay: 0.25,
              },
            }}
            whileHover={{
              scale: 1.2,
            }}
            ref={img1Ref}
            className="overflow-hidden relative left-4 -rotate-6 shrink-0 w-[160px] h-[200px] rounded-xl bg-tertiary shadow-xl sm:w-[200px] sm:h-[240px] md:w-[240px] md:h-[280px] lg:w-[300px] lg:h-[360px] xl:w-[400px] xl:h-[460px]"
          >
            <Image
              src={manchesterUnited}
              alt="manchester united"
              className="object-cover"
              fill
              blurDataURL={manchesterUnited.blurDataURL}
              placeholder="blur"
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: img2InView ? 1 : 0,
              scale: img2InView ? 1 : 0.3,
              rotate: 6,
              transition: {
                delay: 0.5,
              },
            }}
            whileHover={{
              scale: 1.2,
            }}
            ref={img2Ref}
            className="overflow-hidden relative rotate-6 bottom-12 right-4 shrink-0 w-[160px] h-[200px] rounded-xl bg-tertiary shadow-xl sm:w-[200px] sm:h-[240px] md:w-[240px] md:h-[280px] lg:w-[300px] lg:h-[360px] xl:w-[400px] xl:h-[460px]"
          >
            <Image
              src={rithvik}
              alt="rithvik"
              fill
              className="object-cover"
              blurDataURL={rithvik.blurDataURL}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <motion.p
          ref={parag1Ref}
          animate={{
            opacity: parag1InView ? 1 : 0,
            transition: {
              delay: 0.25,
              duration: 1,
            },
          }}
          className="text-lg sm:text-xl"
        >
          Hi, I'm Rithvik, a Computer Science graduate and self-taught web
          developer with a passion for building dynamic web applications. My
          journey began with the basics of HTML, CSS, and JavaScript, which laid
          a solid foundation for my frontend development skills. Over time, I've
          expanded my expertise to include modern frameworks like React, and I'm
          currently enhancing my knowledge with Next.js and Tailwind CSS. I'm
          always eager to solve complex problems and continually push myself to
          grow in the ever-evolving field of web development.
        </motion.p>
        <motion.p
          ref={parag2Ref}
          animate={{
            opacity: parag2InView ? 1 : 0,
            transition: {
              delay: 0.25,
              duration: 1,
            },
          }}
          className="text-lg sm:text-xl"
        >
          When I'm not coding, football plays a huge role in my life. I fell in
          love with the sport at 16, and supporting Manchester United—the
          biggest football club in England—has become a significant part of who
          I am. My love for the game drives my focus, determination, and
          passion—qualities that I carry into my work as a developer.
        </motion.p>
        <motion.p
          ref={parag3Ref}
          animate={{
            opacity: parag3InView ? 1 : 0,
            transition: {
              delay: 0.25,
              duration: 1,
            },
          }}
          className="text-lg sm:text-xl"
        >
          My goal is to apply my technical skills to create impactful web
          applications that address real-world challenges. I'm excited about
          collaborating with like-minded professionals, contributing to
          innovative projects, and continuously learning along the way.
        </motion.p>
        <motion.div
          ref={parag4Ref}
          animate={{
            opacity: parag4InView ? 1 : 0,
            transition: {
              delay: 0.25,
              duration: 1,
            },
          }}
          className="flex items-center gap-2"
        >
          <p className="text-lg sm:text-xl">You can view my resume </p>
          <ButtonLink href="/resume">here!</ButtonLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
