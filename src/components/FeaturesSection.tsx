import Container from "./Container";
import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";

const features = [
  {
    img: "/features1.png",
    title: "Базовая нефть",
  },
  {
    img: "/features2.png",
    title: "Смазочные материалы",
  },
  {
    img: "/features3.png",
    title: "Удобрения",
  },
  {
    img: "/features4.png",
    title: "Бензин",
  },
  {
    img: "/features5.png",
    title: "Дизельное топливо",
  },
  {
    img: "/features6.png",
    title: "Авиационное топливо",
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
