import React from 'react';
import HeroSection from './HeroSection';
import SectionTitle from './SectionTitle';

const MapSection = () => {
  return (
    <section className="mt-[150px] flex flex-col gap-[50px]">
      <SectionTitle title="НАШИ ПРЕДСТАВИТЕЛЬСТВА" position="center" />
      <HeroSection img="/map.jpg" />
    </section>
  );
};

export default MapSection;
