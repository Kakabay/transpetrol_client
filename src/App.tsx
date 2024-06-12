import AboutSection from './components/AboutSection';
import Container from './components/Container';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <>
      <Header />
      <HeroSection img="/1.png" />
      <AboutSection />
      <FeaturesSection />
    </>
  );
}

export default App;
