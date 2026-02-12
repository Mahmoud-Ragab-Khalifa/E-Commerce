export const getProductsByLimitAndSkip = async (
  limit: number,
  skip: number,
) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};
