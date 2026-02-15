"use client";

import { useCartStore } from "@/store/cartStore";
import { Button } from "../ui/button";

const geist = Geist({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["500"],
});

import { useLocale, useTranslations } from "next-intl";
import { Geist, Tajawal } from "next/font/google";
import { CartItem } from "@/lib/cart";

const AddToCartButton = ({
  product,
}: {
  product: Omit<CartItem, "quantity">;
}) => {
  const t = useTranslations();
  const locale = useLocale();

  const addtoCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      onClick={() => addtoCart(product)}
      variant={"default"}
      className={`w-full mt-4 bg-light hover:bg-light/95 dark:bg-dark/80 dark:hover:bg-dark/90 
            ${locale === "ar" ? tajawal.className : geist.className}`}
    >
      {t("addToCart")}
    </Button>
  );
};

export default AddToCartButton;
