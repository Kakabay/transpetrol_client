import { create } from "zustand";

type BurgerStore = {
  burgerOpen: boolean;
  setBurgerOpen: (value: boolean) => void;
};

export const useZusBurger = create<BurgerStore>((set) => ({
  burgerOpen: false,
  setBurgerOpen: (value) =>
    set((state) => ({ burgerOpen: (state.burgerOpen = value) })),
}));
