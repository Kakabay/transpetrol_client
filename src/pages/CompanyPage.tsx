import { useEffect } from "react";
import Container from "../components/Container";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import { useZusBurger } from "../zustand/useZusBurger";
import { useTranslate } from "../utils/useTranslate";
import { aboutDataEn, aboutDataRu } from "../lib/database/About.data";

const CompanyPage = () => {
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  useEffect(() => {
    window.scroll(0, 0);
    setBurgerOpen(false);
  }, []);

  return (
    <div>
      <HeroSection mb img="/company/banner.png" />

      <Container>
        <section className="section-mb">
          <SectionTitle
            title={useTranslate("About company", "О КОМПАНИИ")}
            position="left"
          />

          <div
            className="p flex pt-10 flex-col gap-6"
            dangerouslySetInnerHTML={{
              __html: useTranslate(aboutDataEn, aboutDataRu),
            }}
          />
        </section>
      </Container>

      <section className="w-full h-full">
        <img src="/map.jpg" alt="" className="max-h-full w-full" />
      </section>
    </div>
  );
};

export default CompanyPage;
