import { create } from "zustand";

type NavState = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const useNavStore = create<NavState>((set) => ({
  activeSection: "",
  setActiveSection: (section) => set({ activeSection: section }),
}));
