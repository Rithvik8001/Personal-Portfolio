"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const OpacityTransitionWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.25,
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default OpacityTransitionWrapper;
