import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  displayName: string;
  email: string;
}

interface AuthState {
  user: User | null;

  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
