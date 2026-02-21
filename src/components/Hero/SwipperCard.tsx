import Image from "next/image";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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

        <Link
          href={`/products/category/${category.toLowerCase()}`}
          className="mx-auto max-w-50 xl:w-60 rounded-md py-2 px-4 bg-neutral-200 text-main-color font-medium text-sm ring-1 ring-neutral-300 hover:ring-2 focus:ring-2 transition-all duration-300"
        >
          {t("ButtonContent")}
        </Link>
      </div>
      <Image
        src={image}
        alt={category}
        width={500}
        height={500}
        priority
        fetchPriority="high"
        aria-label="All About Fasion"
      />
    </div>
  );
};

export default SwipperCard;
