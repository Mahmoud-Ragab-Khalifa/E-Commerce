"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartState, CartActions, CartItem } from "@/lib/cart";
import { calculateTotals } from "@/lib/cartUtils";

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (product) => {
        const existing = get().items.find((item) => item.id === product.id);

        let updatedItems: CartItem[];

        if (existing) {
          updatedItems = get().items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        } else {
          updatedItems = [...get().items, { ...product, quantity: 1 }];
        }

        const totals = calculateTotals(updatedItems);

        set({
          items: updatedItems,
          ...totals,
        });
      },

      removeFromCart: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);

        const totals = calculateTotals(updatedItems);

        set({
          items: updatedItems,
          ...totals,
        });
      },

      increase: (id) => {
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );

        const totals = calculateTotals(updatedItems);

        set({
          items: updatedItems,
          ...totals,
        });
      },

      decrease: (id) => {
        const updatedItems = get()
          .items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0);

        const totals = calculateTotals(updatedItems);

        set({
          items: updatedItems,
          ...totals,
        });
      },

      clearCart: () =>
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
