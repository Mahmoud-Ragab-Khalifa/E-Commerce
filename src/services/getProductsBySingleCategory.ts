export const getProductsBySingleCategory = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    {
      next: { revalidate: 86400 }, //24 hours
    },
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  return data.products;
};
