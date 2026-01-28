import Image from "next/image";

import { Link } from "@/i18n/navigation";

import { useTranslations, useLocale } from "next-intl";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface SaleBoxProps {
  title: string;
  offer: string;
  src: string;
}

const SaleBox = ({ title, offer, src }: SaleBoxProps) => {
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
          href="/cart"
          className="flex items-center gap-1 max-w-fit transition-colors duration-1000 hover:border-b border-accent-foreground"
        >
          <span className="text-[12px]">{t("Explore Now")}</span>
          {locale === "ar" ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
        </Link>
      </div>
      <Image src={src} alt="sale-image" width={177} height={188} />
    </div>
  );
};

export default SaleBox;
