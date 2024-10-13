import { Project } from "@/constants/projects";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { easeOutExpo } from "@/constants/ease";
import ButtonLink from "../ui/button-link";

const AnimatedImage = motion.create(Image);

const ProjectCard = ({
  title,
  url,
  description,
  github,
  index,
  image,
}: Project & { index: number }) => {
  const number = index + 1 < 10 ? `0${index + 1}` : index + 1;
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowSize();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      ref={cardRef}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          delay: 0.25,
          ease: easeOutExpo,
          duration: 1,
        },
      }}
    >
      <LayoutGroup>
        <motion.div
          layout
          animate={{
            padding: isHovered ? 32 : 0,
            paddingLeft: isHovered ? (width < 768 ? 32 : 80) : 0,
            paddingRight: isHovered ? (width < 768 ? 32 : 80) : 0,
          }}
          style={{ borderRadius: 24 }}
          className="group overflow-hidden will-change-transform relative flex flex-col gap-8 items-center border border-gray-200 cursor-pointer transition-shadow hover:card"
        >
          <motion.div
            layout
            style={{ borderRadius: 24 }}
            animate={{
              borderRadius: isHovered ? 12 : 24,
            }}
            className="h-[200px] md:h-[400px] will-change-transform w-full relative overflow-hidden"
          >
            <motion.div
              layout
              style={{
                borderRadius: 24,
              }}
              animate={{
                borderRadius: isHovered ? 12 : 24,
              }}
              className="h-full will-change-transform relative w-full overflow-hidden"
            >
              <AnimatedImage
                layout
                src={image}
                alt={title}
                fill
                className="h-full w-full object-cover"
                animate={{
                  scale: isInView ? 1 : 1.1,
                  transition: {
                    delay: 0.25,
                    ease: easeOutExpo,
                    duration: 1,
                  },
                }}
              />
            </motion.div>
            <motion.div
              layout
              className="p-4 flex will-change-transform flex-col absolute h-1/2 left-0 bottom-0 w-full bg-gradient-to-b from-transparent to-black/50 opacity-100 md:p-8"
            >
              <motion.div
                layout
                className="mt-auto will-change-transform flex items-center gap-4"
              >
                <motion.h1
                  layout
                  className="opacity-50 font-mono text-white text-3xl font-medium md:text-5xl leading-[1.1] md:leading-[1.15]"
                >
                  {number}
                </motion.h1>
                <motion.h1
                  layout
                  className="font-medium text-white text-3xl md:text-5xl leading-[1.1] md:leading-[1.15]"
                >
                  {title}
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>
          <AnimatePresence mode="popLayout">
            {isHovered && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ willChange: "opacity" }}
                className="flex flex-col gap-4"
              >
                <p className="text-lg sm:text-xl">{description}</p>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <ButtonLink href={url}>Visit website</ButtonLink>
                  <ButtonLink href={github}>View GitHub</ButtonLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
};

export default ProjectCard;
