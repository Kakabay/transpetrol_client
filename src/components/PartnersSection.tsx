import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { v4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const partners = [
  "/partner1.jpg",
  "/partner2.jpg",
  "/partner3.jpg",
  "/partner4.jpg",
  "/partner5.jpg",
  "/partner6.jpg",
  "/partner1.jpg",
  "/partner2.jpg",
  "/partner3.jpg",
  "/partner4.jpg",
  "/partner5.jpg",
  "/partner6.jpg",
];

const PartnersSection = () => {
  return (
    <section className="section-mb">
      <Container>
        <div className="flex flex-col w-full gap-[50px]">
          <SectionTitle title="Партнеры" position="center" />
          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            slidesPerGroup={3}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              300: { slidesPerView: 2, slidesPerGroup: 2 },
            }}
            className="h-[220px] md:h-[230px] flex items-center w-full gap-10"
          >
            {partners.map((item) => (
              <SwiperSlide key={v4()}>
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
