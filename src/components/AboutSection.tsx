import { aboutDataEn, aboutDataRu } from "../lib/database/About.data";
import { useTranslate } from "../utils/useTranslate";
import Button from "./Button";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <div className="section-mb">
      <Container>
        <div className="flex xl:flex-row flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[30px] max-w-[790px] w-full">
            <SectionTitle
              title={useTranslate("About company", "О КОМПАНИИ")}
              position="left"
            />

            <div
              className="p flex flex-col gap-6"
              dangerouslySetInnerHTML={{
                __html: useTranslate(aboutDataEn, aboutDataRu),
              }}
            />

            <div className="xl:hidden max-w-[800px] max-h-[506px]">
              <img src="/about.jpg" alt="" className="w-full h-full" />
            </div>
            <div className="xl:mx-0 mx-auto">
              <Button />
            </div>
          </div>
          <div className="hidden xl:block max-w-[800px] max-h-[506px]">
            <img src="/about.jpg" alt="" className="w-full h-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
