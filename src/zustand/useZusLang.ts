import { create } from "zustand";

type ActiveLangType = {
  view: string;
  id: string;
};

type LangStore = {
  langOpen: boolean;
  activeLang: ActiveLangType;

  setLangOpen: (value: boolean) => void;
  setActiveLang: (item: ActiveLangType) => void;
};

export const useZusLang = create<LangStore>((set) => ({
  langOpen: false,
  activeLang: {
    view: "Русский",
    id: "ru",
  },

  setLangOpen(value) {
    set((state) => ({ langOpen: (state.langOpen = value) }));
  },
  setActiveLang(item) {
    set((state) => ({ activeLang: (state.activeLang = item) }));
  },
}));
