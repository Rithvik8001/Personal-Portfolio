"use client";

import Link from "next/link";
import memoji1 from "@/assets/connect/memoji1_arrow.png";
import memoji2 from "@/assets/connect/memoji2_arrow.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavStore } from "@/zustand/store";
import { easeInOutExpo, easeOutExpo } from "@/constants/ease";
import ButtonLink from "../ui/button-link";

const AnimatedLink = motion.create(Link);

const Connect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const connectRef = useRef(null);
  const isInView = useInView(connectRef, {
    margin: "-50%",
  });
  const { setActiveSection } = useNavStore();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingParagraphRef = useRef<HTMLParagraphElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const headingParagraphInView = useInView(headingParagraphRef, {
    once: true,
  });
  const emailRef = useRef<HTMLAnchorElement>(null);
  const emailInView = useInView(emailRef, { once: true });

  useEffect(() => {
    if (isInView) setActiveSection("connect");
  }, [isInView]);

  return (
    <motion.div
      layout
      ref={connectRef}
      id="connect"
      className="px-4 pt-24 pb-12"
    >
      <div className="flex flex-col gap-4">
        <motion.h1
          ref={headingRef}
          animate={{
            opacity: headingInView ? 1 : 0,
            transition: {
              delay: 0.25,
            },
          }}
          className="text-4xl font-medium md:text-6xl leading-[1.1] md:leading-[1.15]"
        >
          Let's create you something great!
        </motion.h1>
        <motion.p
          ref={headingParagraphRef}
          animate={{
            opacity: headingParagraphInView ? 1 : 0,
            transition: {
              delay: 0.25,
            },
          }}
          className="text-tertiary text-lg sm:text-xl"
        >
          I'm always open to new opportunities and collaborations. You can reach
          me through my socials below!
        </motion.p>
        <motion.div
          animate={{
            opacity: headingParagraphInView ? 1 : 0,
          }}
          className="grid grid-cols-2 mt-8"
        >
          <ButtonLink href="https://linkedin.com">LinkedIn</ButtonLink>
          <ButtonLink href="https://github.com">GitHub</ButtonLink>
        </motion.div>
      </div>
      <motion.div
        className="h-[1px] w-full bg-border mt-6"
        animate={{
          width: headingParagraphInView ? "100%" : 0,
          transition: {
            ease: easeInOutExpo,
            duration: 1.2,
            delay: 0.5,
          },
        }}
      />
      <div className="flex flex-col gap-10 mt-16">
        <motion.a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="mailto:rithvik.utd@outlook.com"
          className="block mr-auto"
          animate={{
            scale: emailInView ? (isHovered ? 1.3 : 1) : 0.3,
            x: emailInView ? (isHovered ? 40 : 0) : 40,
            rotate: emailInView ? (isHovered ? 20 : 0) : 20,
            opacity: emailInView ? (isHovered ? 1 : 0.5) : 0,
          }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <Image src={memoji1} alt="memoji" className="w-40 md:w-60" />
        </motion.a>
        <div className="relative mx-auto">
          <AnimatedLink
            ref={emailRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
              "block text-xl sm:text-3xl overflow-hidden text-center font-mono font-medium text-tertiary transition-colors hover:text-primary md:text-5xl",
              isHovered && "text-primary"
            )}
            href="mailto:rithvik.utd@outlook.com"
          >
            <motion.span
              animate={{
                y: emailInView ? 0 : "100%",
                transition: {
                  duration: 0.75,
                  ease: easeOutExpo,
                  delay: 0.25,
                },
              }}
              className="block translate-y-full"
            >
              rithvik.utd@outlook.com
            </motion.span>
          </AnimatedLink>
          <motion.div
            animate={{
              width: isHovered ? "100%" : "0%",
              opacity: isHovered ? 1 : 0.5,
            }}
            className="absolute h-1 -bottom-2 lg:-bottom-3 bg-foreground"
          ></motion.div>
        </div>
        <motion.a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="mailto:rithvik.utd@outlook.com"
          animate={{
            scale: emailInView ? (isHovered ? 1.3 : 1) : 0.3,
            x: emailInView ? (isHovered ? -40 : 0) : -40,
            rotate: emailInView ? (isHovered ? 20 : 0) : 20,
            opacity: emailInView ? (isHovered ? 1 : 0.5) : 0,
          }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
          className="block ml-auto lg:mt-8"
        >
          <Image src={memoji2} alt="memoji" className="w-40 md:w-60" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Connect;
