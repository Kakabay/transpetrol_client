import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import MapSection from "../components/MapSection";
import PartnersSection from "../components/PartnersSection";
import { ContactsSection } from "../components/ContactsSection";
import { useEffect } from "react";
import { useZusBurger } from "../zustand/useZusBurger";

const HomePage = () => {
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  useEffect(() => {
    window.scroll(0, 0);
    setBurgerOpen(false);
  }, []);

  return (
    <div className="main">
      <HeroSection img="/3.png" mb />
      <AboutSection />
      <FeaturesSection />
      <MapSection />
      <PartnersSection />
      <ContactsSection />
    </div>
  );
};

export default HomePage;
