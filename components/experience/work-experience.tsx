import { Experience } from "@/constants/experiences";
import { AnimatePresence, LayoutGroup, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const WorkExperience = ({
  company,
  companyImage,
  role,
  from,
  to,
  descriptions,
}: Experience) => {
  const [isToggled, setIsToggled] = useState(false);
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: true });

  return (
    <LayoutGroup>
      <motion.div
        ref={experienceRef}
        layout
        onClick={() => setIsToggled(!isToggled)}
        style={{ borderRadius: 24 }}
        animate={{
          opacity: isInView ? 1 : 0,
          transition: {
            delay: 0.25,
          },
        }}
        className={cn(
          "text-left cursor-pointer p-4 border border-transparent hover:border-gray-200 transition-shadow will-change-transform",
          isToggled && "border-gray-200 experience-card"
        )}
      >
        <motion.div layout className="flex items-center gap-4 justify-between">
          <Image
            src={companyImage}
            alt={company}
            className="h-10 w-10 aspect-square sm:h-20 sm:w-20 border rounded-xl shrink-0 object-cover"
          />
          <div className="flex-1">
            <div className="flex flex-1">
              <div className="w-full">
                <p className="text-sm font-medium tight md:text-lg sm:text-xl">
                  {company}
                </p>
                <p className="text-sm text-tertiary tight md:text-lg sm:text-xl">
                  {role}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-end justify-center">
                <p className="text-sm shrink-0 text-tertiary text-right tight md:text-lg sm:text-xl">
                  {from} - {to}
                </p>
                <motion.div
                  animate={{
                    opacity: isToggled ? 1 : 0.5,
                    rotate: isToggled ? 180 : 0,
                  }}
                >
                  <ChevronDown className="w-6 h-6 opacity-50 text-foreground transition-opacity" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isToggled && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: { delay: 0.25 },
              }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              className="pt-4 flex gap-4 md:pt-2"
            >
              <div className="hidden w-20 h-20 aspect-square md:block"></div>
              <ul className="flex flex-col gap-4">
                {descriptions.map((description) => (
                  <li key={description} className="tight text-lg sm:text-xl">
                    {description}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default WorkExperience;
