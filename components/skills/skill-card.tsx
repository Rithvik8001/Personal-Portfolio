import { Skill } from "@/constants/skills";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillCard = ({ name, description, type, icon, url }: Skill) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          delay: 0.25,
        },
      }}
    >
      <Link
        href={url}
        target="_blank"
        className="rounded-3xl p-4 flex gap-4 items-center border border-gray-200 transition-shadow cursor-pointer hover:card"
      >
        <div className="relative flex items-center justify-center w-12 shrink-0 aspect-square rounded-xl border border-gray-200 overflow-hidden">
          <Image
            src={icon}
            alt={name}
            className="h-8 w-8 aspect-square object-contain"
          />
        </div>
        <div>
          <p className="tracking-wider font-medium text-tertiary uppercase font-mono text-sm md:text-lg">
            {type}
          </p>
          <p className="font-medium text-sm md:text-lg sm:text-xl">{name}</p>
          <p className="text-sm md:text-lg sm:text-xl">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default SkillCard;
