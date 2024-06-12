import AboutSection from './components/AboutSection';
import Container from './components/Container';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <>
      <Header />
      <HeroSection img="/1.png" />
      <AboutSection />
      <FeaturesSection />
      <MapSection />
      <section className="mt-[150px]">
        <Container>
          <div className="flex flex-col gap-[50px]">
            <SectionTitle title="Партнеры" position="center" />
          </div>
        </Container>
      </section>
    </>
  );
}

export default App;
