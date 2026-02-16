"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";

interface MiniCartProbs {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}

const MiniCart = ({ open, setOpen }: MiniCartProbs) => {
  const { items, totalItems, increase, decrease, removeFromCart } =
    useCartStore();
  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerContent className="z-1000">
        <DrawerHeader className="flex flex-row! justify-between items-center">
          <DrawerTitle className="flex items-center gap-1">
            <DrawerDescription>Your Cart</DrawerDescription>
            <span className="text-xs">({totalItems})</span>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="outline" size={"icon-sm"}>
              X
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="overflow-y-auto px-4 flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-1 bg-card text-sm p-3 rounded-sm overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.image}
                  width={75}
                  height={75}
                />
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
                        className="w-8 h-6 md:h-8 flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-700/30 transition-colors duration-300 cursor-pointer"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <Button
                      className="hover:bg-destructive/50!"
                      size={"icon-sm"}
                      variant={"ghost"}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <Button>Proceed To Checkout</Button>
          <Link href={"/cart"}>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setOpen(!open)}
            >
              View Cart
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MiniCart;
