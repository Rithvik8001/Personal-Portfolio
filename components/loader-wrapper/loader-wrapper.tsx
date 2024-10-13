"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import Loader from "./loader";
import { AnimatePresence } from "framer-motion";

const LoaderWrapper = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoaded ? (
        <Fragment key="children">{children}</Fragment>
      ) : (
        <Loader key="loader" />
      )}
    </AnimatePresence>
  );
};

export default LoaderWrapper;
