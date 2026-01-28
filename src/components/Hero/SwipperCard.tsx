import { Button } from "@/components/ui/button";

import Image from "next/image";

import { useTranslations } from "next-intl";

interface SwiperCardProps {
  category: string;
  image: string;
}

const SwipperCard = ({ category, image }: SwiperCardProps) => {
  const t = useTranslations("swiperData");

  return (
    <div className="card select-none overflow-hidden flex flex-col md:flex-row justify-between items-center">
      <div className="content text-center md:text-start flex-1 p-4 md:ps-16 xl:ps-24 text-light dark:text-dark min-w-80">
        <p className="text-[22px] md:text-[30px] whitespace-nowrap font-medium uppercase">
          {t("title")}
        </p>
        <h1 className="text-[40px] md:text-[60px] font-bold leading-none my-1 uppercase">
          {t(category)}
        </h1>
        <p className="text-[22px] md:text-[30px] whitespace-nowrap font-medium uppercase">
          {t.rich("Sale", {
            span: (shunk) => <span className="text-[#e94560]">{shunk}</span>,
          })}
        </p>
        <p className="text-[15px] mb-4 mt-2">{t("description")}</p>
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-light hover:bg-light/95 dark:bg-dark dark:hover:bg-dark/80"
        >
          {t("ButtonContent")}
        </Button>
      </div>
      <Image src={image} alt="man" width={500} height={500} />
    </div>
  );
};

export default SwipperCard;
