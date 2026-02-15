export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
};

export type CartActions = {
  addToCart: (product: Omit<CartItem, "quantity">) => void;
};
