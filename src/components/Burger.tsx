import { motion } from "framer-motion";
import { menuItems } from "../lib/database/Menu.data";
import { Link } from "react-router-dom";
import Container from "./Container";
import { useEffect, useState } from "react";
import { langData } from "./LangMenu";
import { useZusLang } from "../zustand/useZusLang";
import { useZusBurger } from "../zustand/useZusBurger";

export const Burger = () => {
  const setActiveLang = useZusLang((state) => state.setActiveLang);
  const activeLang = useZusLang((state) => state.activeLang.id);
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="burger fixed overflow-y-auto h-screen left-0 w-screen px-4 py-12 flex flex-col gap-6 z-[150] bg-white"
    >
      <Container>
        <div className="flex flex-col gap-6">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-[30px] font-bold hover:text-black/80 transition-all"
            >
              {(activeLang === "en" && item.titleEn) ||
                (activeLang === "ru" && item.title)}
            </Link>
          ))}

          <hr />

          <div className="flex items-center gap-10 mb-10">
            {langData.map((item) => (
              <div
                onClick={() => {
                  setActiveLang(item);
                  setBurgerOpen(false);
                }}
                className="text-[26px] cursor-pointer"
              >
                {item.view}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
