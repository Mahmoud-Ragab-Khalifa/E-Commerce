import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { useTranslations, useLocale } from "next-intl";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface SaleBoxProps {
  category: string;
  title: string;
  offer: string;
  src: string;
}

const SaleBox = ({ category, title, offer, src }: SaleBoxProps) => {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div
      className={`text-light dark:text-dark box-1 flex-1 bg-card dark:bg-card flex items-center justify-between py-4 px-6 rounded-md overflow-hidden`}
    >
      <div className="flex flex-col gap-2">
        <span className="text-[14px]">{title}</span>
        <p className="w-37.5 max-w-40 leading-8 text-[24px] font-bold">
          {offer}
        </p>

        <Link
          href={`/products/category/${category}`}
          className="flex items-center gap-0.5 text-sm relative group py-0.5 w-fit"
        >
          <span className="absolute bottom-0 start-0 rounded-full w-0 h-0.5 group-hover:w-full bg-light dark:bg-dark transition-all duration-300"></span>
          {t("Explore Now")}
          {locale === "ar" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </Link>
      </div>
      <Image
        src={src}
        alt="sale-image"
        width={177}
        height={188}
        aria-label="Shooping all you need"
      />
    </div>
  );
};

export default SaleBox;
