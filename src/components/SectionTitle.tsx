import clsx from 'clsx';

const SectionTitle = ({ title, position }: { title: string; position: 'center' | 'left' }) => {
  return (
    <div
      className={clsx('flex flex-col gap-[15px]', {
        'items-center': position === 'center',
        'items-start': position === 'left',
      })}>
      <h2 className="md:text-[32px] text-[22px] font-black italic uppercase">{title}</h2>
      <div className="h-[5px] w-[80px] bg-[#FD4F00]" />
    </div>
  );
};

export default SectionTitle;
