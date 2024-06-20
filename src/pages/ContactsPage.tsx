import { useEffect } from 'react';
import Container from '../components/Container';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { contactsData } from '../lib/database/Contacts.data';

const ContactsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <HeroSection img="/contactsPage/banner.png" mb />

      <Container>
        <section className="section-mb">
          <SectionTitle title="НАШИ КОНТАКТЫ" position="center" />

          <div className="flex justify-between items-center mt-[50px]">
            {contactsData.map((item, index) => (
              <div
                className="flex flex-col flex-[0_0_20%] gap-3 items-center text-center"
                key={index}>
                <img src={item.path} alt="" className="w-10 h-10 mb-6" />

                <h5 className="leading-[120%] text-[28px] font-bold">{item.title}</h5>
                {item.text1 && item.text2 ? (
                  <>
                    <p className="leading-[120%] text-[20px]">{item.text1}</p>
                    <p className="leading-[120%] text-[20px]">{item.text2}</p>
                  </>
                ) : (
                  <a
                    href={`mailto:${item.text1}`}
                    target="_blank"
                    className="leading-[120%] text-[20px]">
                    {item.text1}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>

      <img src="/contactsPage/card.png" alt="" className="mx-auto" />
    </div>
  );
};

export default ContactsPage;
