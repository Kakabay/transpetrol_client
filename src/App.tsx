import AboutSection from './components/AboutSection';
import Container from './components/Container';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import PartnersSection from './components/PartnersSection';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <>
      <Header />
      <HeroSection img="/3.png" />
      <AboutSection />
      <FeaturesSection />
      <MapSection />

      <PartnersSection />
    </>
  );
}

export default App;
