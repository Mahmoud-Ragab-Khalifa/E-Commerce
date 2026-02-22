"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import AddressComponent from "@/components/Checkout/AddressComponent";
import TotalComponent from "@/components/Checkout/TotalComponent";

const Details = () => {
  const [isSameAddress, setIsSameAddress] = useState(false);

  const t = useTranslations("checkoutPages");

  return (
    <div className="p-2.5">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-start gap-4">
        <div className="flex-2 flex flex-col gap-6">
          <div className="rounded-md bg-card text-light dark:text-dark p-5 pb-6">
            <p className="font-bold">{t("shippingaddress")}</p>

            <AddressComponent />
          </div>

          <div className="rounded-md bg-card text-light dark:text-dark p-5 pb-6">
            <p className="font-bold">{t("billingAddress")}</p>

            <FieldGroup className="w-56 mt-3">
              <Field orientation="horizontal">
                <Checkbox
                  id="same-as-shipping-address"
                  name="same-as-shipping-address"
                  checked={isSameAddress}
                  onCheckedChange={() => setIsSameAddress(!isSameAddress)}
                />
                <FieldLabel htmlFor="same-as-shipping-address">
                  {t("same")}
                </FieldLabel>
              </Field>
            </FieldGroup>

            {!isSameAddress && <AddressComponent />}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-light dark:text-dark">
            <Link
              href={"/cart"}
              className="flex-1 ring ring-main-color dark:ring-neutral-600 rounded-md py-2 px-3 text-center hover:ring-2"
            >
              {t("cart")}
            </Link>
            <Link
              href={"/payment"}
              className="flex-1 ring ring-main-color dark:ring-[#253853] rounded-md py-2 px-3 text-center bg-main-color dark:bg-[#253853] text-white dark:text-dark hover:ring-2"
            >
              {t("payment")}
            </Link>
          </div>
        </div>

        <div className="flex-1 rounded-md bg-card text-light dark:text-dark p-5 pb-6">
          <TotalComponent />

          <div className="flex items-center gap-2 mt-6">
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
        </div>
      </div>
    </div>
  );
};

export default Details;
