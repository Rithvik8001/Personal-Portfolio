"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

const LenisWrapper = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;
