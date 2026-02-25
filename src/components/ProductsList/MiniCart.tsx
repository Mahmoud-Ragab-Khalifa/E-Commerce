"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import DeleteCartItem from "@/components/ProductsList/DeleteCartItem";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useLocale, useTranslations } from "next-intl";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const MiniCart = () => {
  const locale = useLocale();
  const dir: "right" | "left" = locale === "ar" ? "right" : "left";

  const t = useTranslations("miniCart");

  const { items, totalItems, increase, decrease } = useCartStore();

  return (
    <Drawer direction={dir}>
      <DrawerTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="relative"
          aria-label="Cart Icon"
        >
          <ShoppingCart strokeWidth={3} />
          <span
            className={`${geist.className} absolute -top-1 rtl:left-0 ltr:-right-1 w-5 h-5 rounded-full bg-[#253853] text-white dark:bg-main-color text-xs flex items-center justify-center`}
          >
            {totalItems}
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className={`z-200`}>
        <DrawerHeader className="flex flex-row! justify-between items-center">
          <DrawerTitle className="flex items-center gap-1">
            <DrawerDescription>{t("cart")}</DrawerDescription>
            <span className="text-xs">({totalItems})</span>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button
              variant="outline"
              size={"icon-sm"}
              autoFocus
              aria-label="Close The Mini Cart"
            >
              X
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div
          className={`${geist.className} no-scrollbar overflow-y-auto px-4`}
          dir="ltr"
        >
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <div
                className="flex items-center gap-1 bg-card text-sm p-3 rounded-sm overflow-hidden"
                key={item.id}
              >
                <DrawerClose asChild>
                  <Link href={`/products/${item.id}`} aria-label="Product Page">
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={75}
                      height={75}
                    />
                  </Link>
                </DrawerClose>
                <div className="flex-1">
                  <p className="whitespace-nowrap overflow-x-hidden text-ellipsis! w-36.25 md:w-60">
                    {item.title}
                  </p>
                  <span className="block mt-0.5 mb-3">${item.price}</span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border text-xs rounded-full overflow-hidden">
                      <button
                        className="w-8 h-6 md:h-8 flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-700/30 transition-colors duration-300 cursor-pointer"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        disabled={item.quantity === 1}
                        className="w-8 h-6 md:h-8 flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-700/30 transition-colors duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-no-drop disabled:hover:bg-transparent"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                    </div>

                    <DeleteCartItem itemId={item.id} title={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Link
              href={"/cart"}
              className="rounded-md w-full block py-2 px-4 bg-neutral-300 text-neutral-900 text-sm font-medium text-center ring-1 ring-neutral-400 transition-all duration-300 hover:ring-2"
            >
              {t("checkout")}
            </Link>
          </DrawerClose>

          <DrawerClose asChild>
            <Link
              href={"/cart"}
              className="rounded-md w-full block py-2 px-4 bg-neutral-800 text-neutral-50 text-sm font-medium text-center ring-1 ring-neutral-700 transition-all duration-300 hover:ring-2"
            >
              {t("view")}
            </Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MiniCart;
