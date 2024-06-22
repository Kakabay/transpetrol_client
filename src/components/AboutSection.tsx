import Button from './Button';
import Container from './Container';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  return (
    <div className="section-mb">
      <Container>
        <div className="flex xl:flex-row flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[30px] max-w-[790px] w-full">
            <SectionTitle title="О КОМПАНИИ" position="left" />

            <div className="flex flex-col gap-[16px]">
              <p className="p">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
              </p>
              <p className="p">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
              </p>
            </div>

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
