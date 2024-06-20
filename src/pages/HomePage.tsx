import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import MapSection from '../components/MapSection';
import PartnersSection from '../components/PartnersSection';
import { ContactsSection } from '../components/ContactsSection';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
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
