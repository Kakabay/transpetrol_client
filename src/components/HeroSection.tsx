const HeroSection = ({ img }: { img: string }) => {
  return (
    <div className="w-full h-[700px]">
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroSection;
