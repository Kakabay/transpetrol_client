import Container from './Container';
import SectionTitle from './SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const partners = [
  '/partner1.jpg',
  '/partner2.jpg',
  '/partner3.jpg',
  '/partner4.jpg',
  '/partner5.jpg',
  '/partner6.jpg',
  '/partner1.jpg',
  '/partner2.jpg',
  '/partner3.jpg',
  '/partner4.jpg',
  '/partner5.jpg',
  '/partner6.jpg',
];

const PartnersSection = () => {
  return (
    <section className="mt-[150px]">
      <Container>
        <div className="flex flex-col w-full gap-[50px]">
          <SectionTitle title="Партнеры" position="center" />
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[230px] w-full">
            {partners.map((item) => (
              <SwiperSlide>
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;
