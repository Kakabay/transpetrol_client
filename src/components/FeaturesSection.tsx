import React from 'react';
import Container from './Container';
import FeatureCard from './FeatureCard';
import SectionTitle from './SectionTitle';

const features = [
  {
    img: '/features1.png',
    title: 'Торговля нефтью',
  },
  {
    img: '/features2.png',
    title: 'Торговля смазочными Материалами',
  },
  {
    img: '/features3.png',
    title: 'Торговля удобрениями',
  },
  {
    img: '/features4.png',
    title: 'Торговля Бензином',
  },
  {
    img: '/features5.png',
    title: 'Торговля дизельным Топливом',
  },
  {
    img: '/features6.png',
    title: 'Торговля авиационным Топливом',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-mb">
      <Container>
        <div className="flex flex-col justify-center items-center gap-[100px]">
          <SectionTitle title="Услуги" position="center" />
          <div className="grid w-full sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-[100px] content-between">
            {features.map((item, index) => (
              <FeatureCard img={item.img} title={item.title} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
