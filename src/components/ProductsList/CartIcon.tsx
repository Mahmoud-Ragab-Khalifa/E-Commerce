"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import MiniCart from "./MiniCart";

const CartIcon = () => {
  const totalCartItems = useCartStore((state) => state.totalItems);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="relative"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCart strokeWidth={3} />
        <span
          className={`absolute -top-1 rtl:left-0 ltr:-right-1 w-5 h-5 rounded-full bg-[#253853] text-white dark:bg-main-color text-xs flex items-center justify-center`}
        >
          {totalCartItems}
        </span>
      </Button>

      <MiniCart open={open} setOpen={setOpen} />
    </>
  );
};

export default CartIcon;
