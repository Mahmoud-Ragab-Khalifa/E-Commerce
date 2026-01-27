import SaleBox from "@/components/Hero/SaleBox";

import { useTranslations } from "next-intl";

const saleBoxData = [
  {
    title: "SaleBoxOne.title",
    offer: "SaleBoxOne.offer",
    src: "/images/shoes.webp",
  },
  {
    title: "SaleBoxTwo.title",
    offer: "SaleBoxTwo.offer",
    src: "/images/airpods.webp",
  },
];

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="p-2.5">
      <div className="container mx-auto flex flex-col gap-4 xl:flex-row">
        <div className="slider flex-1 bg-accent dark:bg-accent/30 min-h-64 rounded-md p-4">
          Slider
        </div>
        <div className="flex flex-col gap-4 md:flex-row xl:flex-col">
          {saleBoxData.map((item, idx) => (
            <SaleBox
              key={idx}
              title={t(item.title)}
              offer={t(item.offer)}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
