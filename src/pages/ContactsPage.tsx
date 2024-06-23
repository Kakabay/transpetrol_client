import { useEffect } from "react";
import Container from "../components/Container";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import { contactsData } from "../lib/database/Contacts.data";
import { useZusBurger } from "../zustand/useZusBurger";

const ContactsPage = () => {
  const setBurgerOpen = useZusBurger((state) => state.setBurgerOpen);

  useEffect(() => {
    window.scroll(0, 0);
    setBurgerOpen(false);
  }, []);

  return (
    <div>
      <HeroSection img="/contactsPage/banner.png" mb />

      <Container>
        <section className="section-mb">
          <SectionTitle title="НАШИ КОНТАКТЫ" position="center" />

          <div className="flex justify-center gap-y-20 md:justify-between flex-wrap md:flex-nowrap items-start mt-[50px]">
            {contactsData.map((item, index) => (
              <div
                className="flex flex-col flex-[0_1_300px] gap-3 items-center text-center"
                key={index}
              >
                <img src={item.path} alt="" className="w-10 h-10 mb-6" />

                <h5 className="leading-[120%] text-[28px] font-bold">
                  {item.title}
                </h5>
                {item.text1 && item.text2 ? (
                  <>
                    <p className="leading-[120%] text-[20px]">{item.text1}</p>
                    <p className="leading-[120%] text-[20px]">{item.text2}</p>
                  </>
                ) : (
                  <a
                    href={`mailto:${item.text1}`}
                    target="_blank"
                    className="leading-[120%] text-[20px]"
                  >
                    {item.text1}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>

      <img
        src="/contactsPage/card.png"
        alt=""
        className="mx-auto h-[200px] md:h-[400px] object-cover"
      />
    </div>
  );
};

export default ContactsPage;
