import { useZusLang } from "../zustand/useZusLang";

export const useTranslate = (en: string, ru: string) => {
  const activelang = useZusLang((state) => state.activeLang);

  return (
    (activelang.id === "en" && en) || ((activelang.id === "ru" && ru) as string)
  );
};
