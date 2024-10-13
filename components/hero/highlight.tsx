import { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "@/assets/arrow.png";
import { AnimatePresence, motion } from "framer-motion";

const highlights = [
  "I love watching football, when I'm not coding",
  "Fun fact: I think I'm funny",
  "A Marvel fanatic!",
  "I love talking about sports and tech",
  "Steve Jobs admirer",
  "Manchester United fanboy",
];

const Highlight = () => {
  const [highlight, setHighlight] = useState(highlights[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % highlights.length;
      setHighlight(highlights[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 40, x: 55, rotate: 30 }}
        animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
        exit={{ opacity: 0, y: 40, x: 55, rotate: 30 }}
        key={highlight}
        className="absolute -top-28 -right-28 md:-right-72 md:-top-28 lg:-right-[400px] xl:-right-[580px] xl:-top-32"
      >
        <div className="relative flex items-center">
          <Image
            src={arrow}
            alt="arrow"
            className="w-28 xl:w-56 xl:rotate-[20deg]"
          />
          <p className="text-center w-48 md:w-72 mb-16 font-mono text-xs bg-gray-100 px-4 py-2 rounded-full mt-4 md:text-base xl:ml-8 xl:mb-8">
            {highlight}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Highlight;
