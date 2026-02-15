"use client";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useLocale } from "next-intl";
import { useCartStore } from "@/store/cartStore";

const CartIcon = () => {
  const locale = useLocale();
  const totalCartItems = useCartStore((state) => state.totalItems);
  return (
    <Button variant={"ghost"} size={"icon"} className="relative">
      <ShoppingCart className="h-5! w-5!" />
      <span
        className={`absolute -top-1 ${locale === "ar" ? "left-0" : "-right-1"} w-5 h-5 rounded-full bg-main-color text-white`}
      >
        {totalCartItems}
      </span>
    </Button>
  );
};

export default CartIcon;
