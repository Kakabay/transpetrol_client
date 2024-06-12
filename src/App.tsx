import AboutSection from './components/AboutSection';
import { ContactsSection } from './components/ContactsSection';
import FeaturesSection from './components/FeaturesSection';
import { Footer } from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import PartnersSection from './components/PartnersSection';

function App() {
  return (
    <>
      <Header />

      <HeroSection img="/3.png" />
      <AboutSection />
      <FeaturesSection />
      <MapSection />
      <PartnersSection />
      <ContactsSection />

      <Footer />
    </>
  );
}

export default App;
