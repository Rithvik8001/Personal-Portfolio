import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import sync, { cancelSync, Process } from "framesync";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useAnimationLoop = (callback: Process) => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};
