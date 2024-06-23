import { useZusLang } from "../zustand/useZusLang";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const langData = [
  {
    view: "Русский",
    id: "ru",
  },
  {
    view: "English",
    id: "en",
  },
];

export const LangMenu = () => {
  const activeLang = useZusLang((state) => state.activeLang);
  const setActiveLang = useZusLang((state) => state.setActiveLang);
  const langOpen = useZusLang((state) => state.langOpen);
  const setLangOpen = useZusLang((state) => state.setLangOpen);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div>
      <div
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-[5px] cursor-pointer"
      >
        <span className="text-[20px] text-black">{activeLang.view}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8.486"
          height="8.486"
          viewBox="0 0 8.486 8.486"
        >
          <path
            id="Dropdown"
            d="M.5,6A.5.5,0,0,1,0,5.5V.5a.5.5,0,1,1,1,0V5H5.5a.5.5,0,1,1,0,1Z"
            transform="translate(0 4.243) rotate(-45)"
          />
        </svg>
      </div>
      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -5,
            }}
            ref={langRef}
            className="flex absolute bg-white shadow-2xl gap-3 flex-col rounded-[3px]"
          >
            {langData
              .filter((item) => item.view !== activeLang.view)
              .map((lang) => (
                <motion.div
                  onClick={() => {
                    setActiveLang(lang);
                    setLangOpen(false);
                  }}
                  className={clsx(
                    "cursor-pointer p-3 hover:bg-white rounded-md",
                    {}
                  )}
                >
                  {lang.view}
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
