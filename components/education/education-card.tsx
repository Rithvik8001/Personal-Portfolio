import { Education } from "@/constants/education";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const EducationCard = ({ degree, institution, from, to, cgpa }: Education) => {
  const educationCardRef = useRef(null);
  const isInView = useInView(educationCardRef, { once: true });

  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          delay: 0.25,
        },
      }}
      ref={educationCardRef}
      className="flex justify-between"
    >
      <div>
        <p className="font-medium tight text-sm md:text-lg sm:text-xl">
          {degree}
        </p>
        <p className="text-tertiary tight text-sm md:text-lg sm:text-xl">
          {institution}
        </p>
        <p className="text-tertiary tight text-sm md:text-lg sm:text-xl">
          CGPA: {cgpa}
        </p>
      </div>
      <p className="tight text-tertiary text-sm md:text-lg sm:text-xl">
        {from} - {to}
      </p>
    </motion.div>
  );
};

export default EducationCard;
