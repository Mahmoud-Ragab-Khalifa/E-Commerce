import AdvantageCard from "@/components/Advantages/AdvantageCard";

import { useTranslations } from "next-intl";

import {
  AlarmClock,
  BadgeDollarSign,
  BanknoteArrowUp,
  TruckElectric,
} from "lucide-react";

const icons = [TruckElectric, BadgeDollarSign, AlarmClock, BanknoteArrowUp];

interface Advantage {
  title: string;
  description: string;
}

const Advantages = () => {
  const t = useTranslations();

  const advantages = t.raw("advantages") as Advantage[];

  return (
    <div className="p-2.5">
      <div
        className="container mx-auto mt-6 md:mt-12.5 bg-card dark:bg-card rounded-md text-light dark:text-dark 
        p-6 flex flex-col gap-7.5 sm:flex-row flex-wrap transition-all duration-300"
      >
        {advantages.map((item, idx) => (
          <AdvantageCard
            key={idx}
            icon={icons[idx]}
            title={item.title}
            description={item.description}
            isBorderStartTablet={idx % 2 === 0 ? true : false}
            isBorderStartDesktop={idx !== advantages.length - 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
