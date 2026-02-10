export const fetchProductsByCategories = async (categories: string[]) => {
  const responses = await Promise.all(
    categories.map((category) =>
      fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
        res.json(),
      ),
    ),
  );

  return responses.flatMap((res) => res.products);
};
