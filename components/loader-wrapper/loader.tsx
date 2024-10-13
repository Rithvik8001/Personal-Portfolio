"use client";

import { easeOutExpo } from "@/constants/ease";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
    "Hello!",
    "Namaste!",
    "Hola!",
    "Bonjour!",
    "Guten Tag!",
    "Ciao!",
];

const Loader = () => {
    const [greeting, setGreeting] = useState(
        greetings[Math.floor(Math.random() * greetings.length)]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(
                greetings[Math.floor(Math.random() * greetings.length)]
            );
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            className="h-screen w-full flex justify-center items-center"
        >
            <AnimatePresence mode="popLayout">
                <h1
                    key={greeting}
                    className="w-full text-center overflow-hidden"
                >
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            animate: { y: 0 },
                            exit: { y: "-100%" },
                        }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: easeOutExpo,
                        }}
                        className="block text-2xl md:text-4xl lg:text-6xl font-medium xl:text-7xl py-1 animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                    >
                        {greeting}
                    </motion.span>
                </h1>
            </AnimatePresence>
        </motion.div>
    );
};

export default Loader;
