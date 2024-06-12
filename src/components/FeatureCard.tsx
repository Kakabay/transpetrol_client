const FeatureCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="flex flex-col w-full items-center gap-[30px] ">
      <div className="w-[100px] h-[100px]">
        <img src={img} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-center uppercase text-[18px] font-semibold max-w-[370px]">{title}</h3>{' '}
    </div>
  );
};

export default FeatureCard;
