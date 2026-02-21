import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface PromotionalCardProbs {
  category: string;
  title: string;
  subTitle: string;
  isSale: boolean;
  desc: string;
  image: string;
}

const PromotionalCard = ({
  category,
  title,
  subTitle,
  isSale,
  desc,
  image,
}: PromotionalCardProbs) => {
  const t = useTranslations("PromotionalCards");
  const locale = useLocale();
  return (
    <div
      className="text-light dark:text-dark bg-card dark:bg-card py-4 px-6 rounded-md flex-1 
      md:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-32px)/3)] flex items-center justify-around overflow-hidden
      transition-transform duration-300 hover:-translate-y-3 relative group"
    >
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-0 h-0.5 bg-main-color dark:bg-neutral-500 rounded-b-md group-hover:w-full transition-all duration-500" />

      <div className="whitespace-nowrap font-medium">
        <p className="uppercase font-bold">{t(title)}</p>

        <p className="my-1">{t(subTitle)}</p>

        {isSale ? (
          <p className="text-[#e94560]">{t(desc)}</p>
        ) : (
          <span className="block">{t(desc)}</span>
        )}

        <Link
          href={`/products/category/${category}`}
          className="flex items-center gap-0.5 text-sm mt-5 w-fit"
        >
          {t("shopNow")}
          {locale === "ar" ? (
            <ArrowLeft size={14} className="animate-pulse" />
          ) : (
            <ArrowRight size={14} className="animate-pulse" />
          )}
        </Link>
      </div>

      <Image alt="image" src={image} width={140} height={140} />
    </div>
  );
};

export default PromotionalCard;
