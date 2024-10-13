import { motion } from "framer-motion";
import { RainbowButton } from "../ui/rainbow-button";

type RandomFactProps = {
  position: { x: number; y: number };
  fact: string;
};

const RandomFact = ({ position, fact }: RandomFactProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        x: position.x,
        y: position.y - 40,
        opacity: 1,
        transition: {
          opacity: {
            delay: 0.5,
          },
          ease: [0.16, 1, 0.3, 1],
          x: {
            duration: 0.25,
          },
          y: {
            duration: 0.25,
          },
        },
      }}
      exit={{ opacity: 0 }}
      className="pointer-events-none absolute top-0 left-0 z-10"
    >
      <RainbowButton className="font-mono rounded-full">{fact}</RainbowButton>
    </motion.div>
  );
};

export default RandomFact;
