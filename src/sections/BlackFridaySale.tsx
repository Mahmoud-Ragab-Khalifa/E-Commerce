import { Link } from "@/i18n/navigation";

import { useLocale, useTranslations } from "next-intl";

const BlackFridaySale = () => {
  const locale = useLocale();
  const t = useTranslations("blackFriday");

  return (
    <div className="p-2.5">
      <div className="container overflow-hidden mt-6 md:mt-12.5 mx-auto rounded-md bg-main-color dark:bg-[#253853] flex flex-col lg:flex-row relative lg:items-center">
        {/* Dashed Border */}
        <div className="absolute z-50 inset-2.5 border border-dashed border-neutral-100 rounded-md" />

        {/* Extra Spaces Works As Padding In Small Screens To end Text in End Point */}
        <div className="absolute z-30 lg:hidden w-8 h-16 bg-main-color dark:bg-[#253853] top-[50%] transform translate-y-[-50%] left-0" />
        <div className="absolute z-30 lg:hidden w-8 h-16 bg-main-color dark:bg-[#253853] top-[50%] transform translate-y-[-50%] right-0" />

        <div className="whitespace-nowrap z-10 uppercase text-center lg:p-6 xl:px-28 text-xl sm:text-[27px] text-[#00BCD4] font-bold pt-6">
          {t("title")}
        </div>

        <div className="overflow-hidden my-1 lg:m-0 z-20">
          <div
            className={`${locale === "ar" ? "marquee-ar" : "marquee-en"} flex whitespace-nowrap`}
          >
            {Array.from({ length: 2 }).map((_, idx) => (
              <span
                key={idx}
                className="mx-8 lg:mx-14 uppercase text-xl sm:text-[28px] italic text-neutral-200"
              >
                {t.rich("offer", {
                  span: (chunk) => <span className="font-bold">{chunk}</span>,
                })}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/products/category/electronics`}
          className="mb-6 lg:p-6 xl:pe-24 xl:ps-32 lg:m-0 z-50 w-fit mx-auto text-neutral-200 text-sm block whitespace-nowrap hover:underline transition-all duration-300"
        >
          {t("btn")}
        </Link>
      </div>
    </div>
  );
};

export default BlackFridaySale;
