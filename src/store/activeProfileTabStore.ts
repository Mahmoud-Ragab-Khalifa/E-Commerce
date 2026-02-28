import { create } from "zustand";

interface activeState {
  active: string;
  setActive: (tab: string) => void;
}

export const useActiveProfileTabStore = create<activeState>((set) => ({
  active: "profileInfo",
  setActive: (tab) => set({ active: tab }),
}));
