import { CartActions, CartState } from "@/lib/cart";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (product) => {
        set({
          items: [...get().items, { ...product, quantity: 1 }],
          totalItems: get().totalItems + 1,
          totalPrice: get().totalPrice + product.price,
        });
      },
    }),
    { name: "cartStorage" },
  ),
);
