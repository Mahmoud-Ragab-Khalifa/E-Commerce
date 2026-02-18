"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cartStore";
import { Trash2 } from "lucide-react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Cart = () => {
  const {
    items,
    totalItems,
    totalPrice,
    removeFromCart,
    clearCart,
    increase,
    decrease,
  } = useCartStore();

  const [isEmptyCart, setIsEmptyCart] = useState(false);

  return (
    <div className="px-2.5">
      {isEmptyCart || totalItems === 0 ? (
        <div className="min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-300px)] container mx-auto flex flex-col gap-4 items-center justify-center text-light dark:text-dark ">
          <Trash2
            size={50}
            className="p-4 bg-card rounded-md ring-2 ring-neutral-300 dark:ring-neutral-700"
          />
          <p className="font-medium text-2xl md:text-4xl">Your Cart Is Empty</p>
          <p className="text-center px-3 text-sm md:text-xl">{`Looks Like You Haven't Added Any Thing To Your Cart Yet`}</p>
          <Link
            href={"/"}
            className="py-2 px-4 rounded-md bg-main-color dark:bg-[#253853] mt-5 text-white"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-2 flex flex-col gap-4">
            {items.map(({ id, image, title, price, quantity }) => (
              <div
                key={id}
                className="bg-card py-2.5 md:p-1 xl:p-4  flex flex-col sm:flex-row items-center justify-around
              text-light dark:text-dark rounded-md"
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
              className="md:ml-auto"
              onClick={() => {
                clearCart();
                setIsEmptyCart(!isEmptyCart);
              }}
            >
              <Trash2 />
              Clear Cart
            </Button>
          </div>

          <div className="flex-1 bg-card p-5 text-light dark:text-dark rounded-md">
            <div className="flex items-center justify-between font-bold mb-2">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-col gap-4 lg:gap-5 py-4 lg:py-5 border-t border-b">
              <div className="flex gap-2 items-center">
                <p className="font-medium text-sm">Additional Comments</p>
                <span className="py-0.5 px-2 bg-neutral-400/50 text-xs rounded-full">
                  Note
                </span>
              </div>

              <textarea
                aria-label="Enter Your Comment"
                placeholder="Typing Here..."
                className="w-full rounded-md ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 block resize-none h-18.75 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
              />

              <div className="flex items-center gap-2">
                <input
                  aria-label="Enter Voucher Code"
                  placeholder="Voucher"
                  type="text"
                  name="voucher"
                  id="voucher"
                  className="flex-1 rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
                />

                <Button variant={"outline"} className="w-15">
                  Apply
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-5 pt-4 lg:pt-5">
              <p className="font-medium text-sm">Shipping Estimates</p>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="egypt">Egypt</SelectItem>
                    <SelectItem value="saudiArabia">Saudi Arabia</SelectItem>
                    <SelectItem value="yemen">Yemen</SelectItem>
                    <SelectItem value="tunisia">Tunisia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="alexandria">Alexandria</SelectItem>
                    <SelectItem value="cairo">Cairo</SelectItem>
                    <SelectItem value="giza">Giza</SelectItem>
                    <SelectItem value="aswan">Aswan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <input
                aria-label="Enter Zip Code"
                placeholder="Zip Code"
                type="text"
                name="zipCode"
                className="flex-1 rounded-md s top-0 left-0 ring focus:outline-none hover:ring-2 focus:ring-2 ring-neutral-700 placeholder:text-sm text-sm p-2 placeholder:text-neutral-500"
              />

              <Button variant={"outline"}>Calculate Shipping</Button>

              <Link
                href={"/details"}
                className="p-2 text-center w-full bg-[#4CAF50] text-black rounded-md"
              >
                Checkout Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
