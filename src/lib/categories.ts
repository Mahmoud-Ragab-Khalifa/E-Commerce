import {
  Motorbike,
  Laptop,
  Shirt,
  Handbag,
  Lamp,
  ChevronDown,
  Salad,
  LayoutGrid,
  Trophy,
} from "lucide-react";

export const CATEGORIES = {
  men: ["mens-shirts", "mens-shoes", "mens-watches"],

  women: [
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
    "sunglasses",
    "tops",
    "skin-care",
    "beauty",
  ],

  home: ["home-decoration", "furniture", "kitchen-accessories"],

  electronics: ["laptops", "tablets", "smartphones", "mobile-accessories"],

  automotive: ["vehicle", "motorcycle"],
};

export const categoriesList = [
  {
    category: "automotive",
    icon: Motorbike,
  },
  {
    category: "electronics",
    icon: Laptop,
  },
  {
    category: "men",
    icon: Shirt,
  },
  {
    category: "women",
    icon: Handbag,
  },
  {
    category: "home",
    icon: Lamp,
  },
  {
    category: "sports",
    icon: Trophy,
  },
  {
    category: "food",
    icon: Salad,
  },
];
