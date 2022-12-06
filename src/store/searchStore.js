import create from "zustand";
import { devtools } from "zustand/middleware";

export const useDevStore = create(
  devtools((set, get) => ({
    search: "",
    setSearch: (search) => {
      set({ search: search });
    },
  }))
);
