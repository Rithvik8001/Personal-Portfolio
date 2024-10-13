"use client";

import { education } from "@/constants/education";
import EducationCard from "./education-card";
import { useNavStore } from "@/zustand/store";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { easeOutExpo } from "@/constants/ease";

const Education = () => {
  const educationRef = useRef(null);
  const isInView = useInView(educationRef, {
    margin: "-50%",
  });
  const { setActiveSection } = useNavStore();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  useEffect(() => {
    if (isInView) setActiveSection("education");
  }, [isInView]);

  return (
    <motion.div layout id="education" ref={educationRef} className="px-4 pt-24">
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
          Education
        </motion.span>
      </h1>
      <div className="flex flex-col gap-4 mt-12">
        {education.map((item) => (
          <EducationCard key={item.degree} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
