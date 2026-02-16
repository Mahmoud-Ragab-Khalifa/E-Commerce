import { CartItem } from "./cart";

export const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return { totalItems, totalPrice };
};
