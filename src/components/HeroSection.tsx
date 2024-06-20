import clsx from 'clsx';

const HeroSection = ({ img, mb }: { img: string; mb?: boolean }) => {
  return (
    <div
      className={clsx('w-full h-full mx-auto', {
        'section-mb': mb,
      })}>
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroSection;
