import { Link } from "react-router-dom";
import { menuItems } from "../lib/database/Menu.data";
import Container from "./Container";
import { LangMenu } from "./LangMenu";
import { useZusBurger } from "../zustand/useZusBurger";
import { Burger } from "./Burger";
import clsx from "clsx";
import { useZusLang } from "../zustand/useZusLang";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const activeLang = useZusLang((state) => state.activeLang.id);
  const burgerOpen = useZusBurger((state) => state.burgerOpen);
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  return (
    <>
      <header className={clsx("shadow-lg bg-white", {})}>
        <Container>
          <div className="flex w-full justify-between items-center py-[20px]">
            <div className="w-[240px] lg:w-[350px] h-full">
              <img src="/logo.svg" alt="logo" />
            </div>

            <div
              onClick={() => setBurgerOpen(!burgerOpen)}
              className="lg:hidden size-8 flex flex-col gap-2 items-center justify-center cursor-pointer"
            >
              <motion.div
                initial={{ rotateY: 0 }}
                animate={burgerOpen ? { translateY: 10, rotate: 45 } : {}}
                className="w-6 h-[2px] bg-black"
              />
              <motion.div
                initial={{ opacity: 1 }}
                animate={burgerOpen ? { opacity: 0 } : {}}
                className="w-6 h-[2px] bg-black"
              />
              <motion.div
                initial={{ rotateY: 0 }}
                animate={burgerOpen ? { translateY: -10, rotate: -45 } : {}}
                className="w-6 h-[2px] bg-black"
              />
            </div>

            <div className="hidden lg:flex items-center gap-[40px]">
              <nav className="flex items-center gap-[40px]">
                {menuItems.map((item, index) => (
                  <motion.div className="">
                    <Link to={item.path} className="relative">
                      <div
                        className="text-[20px] text-black transition-all"
                        key={index}
                      >
                        {(activeLang === "en" && item.titleEn) ||
                          (activeLang === "ru" && item.title)}
                      </div>

                      {/* <motion.div
                        initial={{
                          scaleX: 0,
                          transformOrigin: "bottom right",
                        }}
                        animate={
                          isHovered
                            ? {
                                scaleX: 1,
                                transformOrigin: "bottom left",
                              }
                            : {
                                scaleX: 0,
                                transformOrigin: "bottom right",
                              }
                        }
                        className="absolute left-0 bottom-0 w-full border-t-2 border-black h-0"
                      /> */}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <LangMenu />
            </div>
          </div>
        </Container>

        <AnimatePresence>{burgerOpen && <Burger />}</AnimatePresence>
      </header>
    </>
  );
};

export default Header;
