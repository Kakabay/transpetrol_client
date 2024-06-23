import { motion } from "framer-motion";
import { menuItems } from "../lib/database/Menu.data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Container from "./Container";
import { useZusBurger } from "../zustand/useZusBurger";

export const Burger = () => {
  const burgerOpen = useZusBurger((state) => state.burgerOpen);

  useEffect(() => {
    const wrapper = document.querySelector(".main");

    wrapper?.classList.add("overflow-hidden");

    return () => wrapper?.classList.remove("overflow-hidden");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={burgerOpen ? { opacity: 1, x: "0%" } : {}}
      className="burger fixed top-[81px] left-0 w-screen h-[calc(100dvh-52px)] px-4 py-20 flex flex-col gap-6 z-50 bg-white"
    >
      <Container>
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <Link to={item.path} className="text-[30px] font-bold">
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};
