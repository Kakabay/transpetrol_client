import { Link } from "react-router-dom";
import { menuItems } from "../lib/database/Menu.data";
import Container from "./Container";
import { LangMenu } from "./LangMenu";
import { useZusBurger } from "../zustand/useZusBurger";
import { Burger } from "./Burger";
import clsx from "clsx";
import { useZusLang } from "../zustand/useZusLang";

const Header = () => {
  const activeLang = useZusLang((state) => state.activeLang.id);
  const burgerOpen = useZusBurger((state) => state.burgerOpen);
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  return (
    <>
      <header
        className={clsx("shadow-lg relative z-10", {
          "fixed top-0 left-0 right-0": burgerOpen,
        })}
      >
        <Burger />
        <Container>
          <div className="flex w-full justify-between items-center py-[20px]">
            <div className="w-[240px] lg:w-[350px] h-full">
              <img src="/logo.svg" alt="logo" />
            </div>

            <div
              onClick={() => setBurgerOpen(!burgerOpen)}
              className="lg:hidden size-8 flex flex-col gap-2 items-center justify-center cursor-pointer"
            >
              <div className={clsx("w-6 h-[2px] bg-black")}></div>
              <div className="w-6 h-[2px] bg-black"></div>
              <div className="w-6 h-[2px] bg-black"></div>
            </div>

            <div className="hidden lg:flex items-center gap-[40px]">
              <nav className="flex items-center gap-[40px]">
                {menuItems.map((item, index) => (
                  <Link
                    to={item.path}
                    className="text-[20px] text-black"
                    key={index}
                  >
                    {(activeLang === "en" && item.titleEn) ||
                      (activeLang === "ru" && item.title)}
                  </Link>
                ))}
              </nav>
              <LangMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
