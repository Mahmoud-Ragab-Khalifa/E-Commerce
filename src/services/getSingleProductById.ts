export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

export async function getSingleProductById(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store", // عشان ميمسكش كاش في الديف
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
