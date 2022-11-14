import create from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: { name: "", role: "", authenticated: false },
      setUser: (user) => set({ user: user }),
    }),
    {
      name: "authStorage",
      getStorage: () => sessionStorage,
    }
  )
);
