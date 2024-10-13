"use client";

import { useEffect, useRef } from "react";
import WorkExperience from "./work-experience";
import { LayoutGroup } from "framer-motion";
import { useNavStore } from "@/zustand/store";
import { experiences } from "@/constants/experiences";
import beTheNext from "@/assets/experience/be_the_next.png";
import beTheNextMobile from "@/assets/experience/be_the_next_mobile.png";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import { motion, useInView } from "framer-motion";
import { easeOutExpo } from "@/constants/ease";

const Experience = () => {
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, {
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
  const memojiInView = useInView(memojiRef);

  useEffect(() => {
    if (isInView) setActiveSection("experience");
  }, [isInView]);

  return (
    <div ref={experienceRef} id="experience">
      <div className="flex flex-col gap-8 pt-72 px-4 lg:pt-48">
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
              My experience
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
            Here's a timeline of my professional journey!
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
                  src={beTheNextMobile}
                  alt="be the next"
                  className="w-52"
                />
                <div className="absolute -top-12 left-40 w-1/2 font-mono text-xs bg-gray-100 px-4 py-2 rounded-full mt-4">
                  You could be the next in this list!
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
                className="absolute -top-28 right-[-425px]"
              >
                <Image src={beTheNext} alt="be the next" className="w-52" />
                <div className="font-mono text-xs bg-gray-100 px-4 py-2 rounded-full ml-28 mt-4">
                  You could be the next in this list!
                </div>
              </motion.div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <LayoutGroup>
            {experiences.map((experience) => (
              <WorkExperience key={experience.company} {...experience} />
            ))}
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

export default Experience;
