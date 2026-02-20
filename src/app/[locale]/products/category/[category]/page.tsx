import CategoryFashion from "@/components/ProductsList/CategoryFashion";
import { CATEGORIES } from "@/lib/categories";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const categoryArray = CATEGORIES[category as keyof typeof CATEGORIES] || [];

  return <CategoryFashion title={category} categoriesArray={categoryArray} />;
};

export default CategoryPage;
