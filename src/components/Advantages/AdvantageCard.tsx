interface AdvantageCardProbs {
  icon: React.ElementType;
  title: string;
  description: string;
  isBorderStartTablet: boolean;
  isBorderStartDesktop: boolean;
}

const AdvantageCard = ({
  icon: Icon,
  title,
  description,
  isBorderStartTablet,
  isBorderStartDesktop,
}: AdvantageCardProbs) => {
  return (
    <div
      className={`basis-full sm:basis-[calc(50%-15px)] lg:basis-[calc(25%-90px)] flex-1 flex gap-4 items-center justify-start sm:justify-center ${isBorderStartTablet && "sm:border-e"} ${isBorderStartDesktop && "lg:border-e"} border-light/15 dark:border-dark/5`}
    >
      <Icon size={45} className="dark:text-[#253853]" />
      <div className="flex flex-col">
        <span className="font-medium text-[17px] dark:text-neutral-200">
          {title}
        </span>
        <span className="text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </span>
      </div>
    </div>
  );
};

export default AdvantageCard;
