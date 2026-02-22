"use client";

import { Link } from "@/i18n/navigation";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import TotalComponent from "@/components/Checkout/TotalComponent";

const Payment = () => {
  const [selected, setSelected] = useState("credit-card");

  const t = useTranslations("checkoutPages");

  const locale = useLocale();

  const dir: "rtl" | "ltr" = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="p-2.5">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-start gap-4">
        <div className="flex-2 flex flex-col gap-6">
          <div className="rounded-md bg-card text-light dark:text-dark px-5">
            <RadioGroup
              dir={dir}
              defaultValue={selected}
              onValueChange={setSelected}
              className="p-0! m-0! gap-0!"
            >
              <div className="flex flex-col gap-4 border-b py-6 lg:py-8">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="cursor-pointer">
                    {t("creditCard")}
                  </Label>
                </div>

                {selected === "credit-card" && (
                  <div className="flex flex-col gap-4 animate-fade-in-small">
                    <div className="inputs flex flex-wrap gap-5 mt-4 justify-between">
                      {["cardNumber", "expDate", "nameOnCard", "zipCode"].map(
                        (item) => (
                          <input
                            key={item.toLowerCase().replace(" ", "-")}
                            aria-label={`Enter ${item}`}
                            placeholder={t(item)}
                            type="text"
                            name={item.toLowerCase().replace(" ", "-")}
                            className="basis-full lg:basis-[calc((100%-20px)/2)] rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
                          />
                        ),
                      )}
                    </div>

                    <Button variant={"outline"} size={"lg"} className="w-fit">
                      {t("submit")}
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4 border-b py-6 lg:py-8">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="cursor-pointer">
                    {t("paypal")}
                  </Label>
                </div>

                {selected === "paypal" && (
                  <div className="flex items-center gap-3 mt-4 animate-fade-in-small">
                    <input
                      aria-label="Enter Voucher Code"
                      placeholder={t("voucher")}
                      type="text"
                      name="voucher"
                      id="voucher"
                      className="flex-1 rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
                    />

                    <Button variant={"outline"} className="w-15">
                      {t("apply")}
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4 py-6 lg:py-8">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="cursor-pointer">
                    {t("cash")}
                  </Label>
                </div>

                {selected === "cash" && null}
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-light dark:text-dark">
            <Link
              href={"/details"}
              className="flex-1 ring ring-main-color dark:ring-neutral-600 rounded-md py-2 px-3 text-center hover:ring-2"
            >
              {t("backToCheckout")}
            </Link>
            <Link
              href={"/review"}
              className="flex-1 ring ring-main-color dark:ring-[#253853] rounded-md py-2 px-3 text-center bg-main-color dark:bg-[#253853] text-white dark:text-dark hover:ring-2"
            >
              {t("review")}
            </Link>
          </div>
        </div>

        <div className="flex-1 rounded-md bg-card text-light dark:text-dark p-5 pb-6">
          <TotalComponent />
        </div>
      </div>
    </div>
  );
};

export default Payment;
