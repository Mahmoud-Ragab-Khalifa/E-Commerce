"use client";

import { Link, usePathname } from "@/i18n/navigation";

const steps = ["cart", "details", "payment", "review", ,];

const CheckoutLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname();

  const currentIndex = steps.findIndex((step) => pathname === "/" + step);

  const progress = (currentIndex / (steps.length - 1)) * 100;

  return (
    <>
      <div className="relative container mx-auto flex justify-around sm:justify-center items-center gap-4 sm:gap-7 md:gap-10 xl:gap-16 my-4 md:my-5 text-light dark:text-dark w-fit overflow-hidden">
        {/* Background Line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-gray-200 rounded" />

        {/* Active Line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-12 h-1 bg-[#4CAF50] rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        />

        {steps.map((item, idx) => (
          <Link
            key={item}
            href={`/${item}`}
            className={`z-50 capitalize rounded-full text-sm lg:text-lg py-1 px-3 md:px-8 
              ${currentIndex >= idx ? "bg-[#4CAF50]" : "bg-card"}`}
          >
            <span className="text-sm">1.</span>
            <span>{item}</span>
          </Link>
        ))}
      </div>

      {children}
    </>
  );
};

export default CheckoutLayout;
