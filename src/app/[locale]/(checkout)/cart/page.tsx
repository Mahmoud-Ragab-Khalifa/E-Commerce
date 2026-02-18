"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  const {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    increase,
    decrease,
  } = useCartStore();
  return (
    <div className="px-2.5">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        <div className="flex-2 flex flex-col gap-4">
          {items.map(({ id, image, title, price, quantity }) => (
            <div
              key={id}
              className="bg-card py-2.5 md:p-1 xl:p-4  flex flex-col sm:flex-row items-center justify-around rounded-md"
            >
              <div className="flex gap-4 items-center justify-around w-full md:max-w-62.5">
                <Link
                  href={`/products/${id}`}
                  aria-label="Show Product Details"
                >
                  <Image alt={title} src={image} width={100} height={100} />
                </Link>
                <div className="flex flex-col gap-1 w-37.5 whitespace-nowrap overflow-hidden text-ellipsis">
                  <p>{title}</p>
                  <span>${price}</span>
                </div>
              </div>

              <div className="flex items-center justify-around w-full">
                <div className="flex items-center border text-xs rounded-full overflow-hidden">
                  <button
                    className="w-8 h-6 md:h-8 flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-700/30 transition-colors duration-300 cursor-pointer"
                    onClick={() => increase(id)}
                  >
                    +
                  </button>
                  <span className="px-2">{quantity}</span>
                  <button
                    className="w-8 h-6 md:h-8 flex items-center justify-center hover:bg-neutral-200 hover:dark:bg-neutral-700/30 transition-colors duration-300 cursor-pointer"
                    onClick={() => decrease(id)}
                  >
                    -
                  </button>
                </div>

                <div>${(quantity * price).toFixed(2)}</div>

                <Button
                  aria-label="Delete Product"
                  className="hover:bg-destructive/50!"
                  size={"icon-sm"}
                  variant={"ghost"}
                  onClick={() => removeFromCart(id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}

          <Button
            size={"lg"}
            variant={"destructive"}
            className="ml-auto"
            onClick={clearCart}
          >
            <Trash2 />
            Clear Cart
          </Button>
        </div>
        <div className="bg-red-700 flex-1">Check out data</div>
      </div>
    </div>
  );
};

export default Cart;
