import HeroSection from './HeroSection';
import SectionTitle from './SectionTitle';

const MapSection = () => {
  return (
    <section className="flex flex-col gap-[50px] section-mb">
      <SectionTitle title="НАШИ ПРЕДСТАВИТЕЛЬСТВА" position="center" />
      <HeroSection img="/map.jpg" />
    </section>
  );
};

export default MapSection;
