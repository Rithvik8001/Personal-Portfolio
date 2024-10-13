"use client";

import { useNavStore } from "@/zustand/store";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import skillMemoji from "@/assets/skills/skill_memoji.png";
import skillMemojiMobile from "@/assets/skills/skill_memoji_mobile.png";
import { techs, tools } from "@/constants/skills";
import SkillCard from "./skill-card";
import { easeOutExpo } from "@/constants/ease";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, {
    margin: "-50%",
  });
  const { setActiveSection } = useNavStore();
  const { width } = useWindowSize();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const headingParagraphRef = useRef(null);
  const headingParagraphInView = useInView(headingParagraphRef, {
    once: true,
  });
  const memojiRef = useRef(null);
  const memojiInView = useInView(memojiRef, { once: true });

  useEffect(() => {
    if (isInView) setActiveSection("skills");
  }, [isInView]);

  return (
    <motion.div
      id="skills"
      ref={skillsRef}
      layout
      className="pt-72 px-4 md:pt-48"
    >
      <div className="flex flex-col gap-4 relative md:w-max">
        <h1
          ref={headingRef}
          className="text-4xl font-medium py-1 tight md:text-6xl overflow-hidden"
        >
          <motion.span
            animate={{
              y: headingInView ? 0 : "100%",
              transition: {
                duration: 0.75,
                delay: 0.15,
                ease: easeOutExpo,
              },
            }}
            className="block"
          >
            My skills
          </motion.span>
        </h1>
        <motion.p
          ref={headingParagraphRef}
          animate={{
            opacity: headingParagraphInView ? 1 : 0,
            transition: {
              delay: 0.15,
            },
          }}
          className="tight text-tertiary text-lg sm:text-xl"
        >
          I can help you with...
        </motion.p>
        {width < 768 ? (
          <>
            <motion.div
              ref={memojiRef}
              animate={{
                opacity: memojiInView ? 1 : 0,
                scale: memojiInView ? 1 : 0.2,
                rotate: memojiInView ? 0 : 30,
                transition: {
                  delay: 0.5,
                  duration: 0.4,
                  type: "spring",
                },
              }}
              className="absolute w-full -top-48 left-0"
            >
              <Image
                src={skillMemojiMobile}
                alt="be the next"
                className="w-52"
              />
              <div className="absolute -top-12 left-40 w-1/2 font-mono text-xs bg-gray-100 px-4 py-2 rounded-full mt-4">
                Things I would love to work on and work with!
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              ref={memojiRef}
              animate={{
                opacity: memojiInView ? 1 : 0,
                scale: memojiInView ? 1 : 0.2,
                rotate: memojiInView ? 0 : 30,
                transition: {
                  delay: 0.5,
                  duration: 0.4,
                  type: "spring",
                },
              }}
              className="absolute -top-32 right-[-500px]"
            >
              <Image src={skillMemoji} alt="be the next" className="w-52" />
              <div className="font-mono text-xs bg-gray-100 px-4 py-2 rounded-full ml-28 mt-4">
                Things I would love to work on and work with!
              </div>
            </motion.div>
          </>
        )}
      </div>
      <div className="relative grid mt-4 md:mt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {techs.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {tools.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
