"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const steps = ["cart", "details", "payment", "review"];

const CheckoutStepper = () => {
  const pathname = usePathname();

  const currentIndex = steps.findIndex((step) => pathname === "/" + step);

  const progress = (currentIndex / (steps.length - 1)) * 100;

  const t = useTranslations("checkoutSteps");

  return (
    <div className="relative container mx-auto flex justify-around sm:justify-center items-center gap-4 sm:gap-7 md:gap-10 xl:gap-16 my-6 sm:my-8 md:my-12.5 text-light dark:text-dark w-fit overflow-hidden">
      {/* Background Line */}
      <div className="absolute top-1/2 -translate-y-1/2 start-0 w-full h-1 bg-card rounded" />

      {/* Active Line */}
      <div
        className="absolute top-1/2 -translate-y-1/2 start-0 h-1 bg-[#4CAF50] rounded transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      {steps.map((item, idx) => (
        <Link
          key={item}
          href={`/${item}`}
          className={`z-50 transition-colors duration-300 capitalize rounded-full text-sm lg:text-lg
                      py-1 px-1.5 sm:px-8 text-center
                      ${currentIndex >= idx ? "bg-[#4CAF50] text-white" : "bg-card"}
                    `}
        >
          <span className="text-sm">{idx + 1}. </span>
          <span>{t(item)}</span>
        </Link>
      ))}
    </div>
  );
};

export default CheckoutStepper;
