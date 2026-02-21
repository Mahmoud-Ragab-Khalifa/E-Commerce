import CategoryCarousel from "@/components/ProductsList/CategoryCarousel";
import CategoryFashion from "@/components/ProductsList/CategoryFashion";
import { CATEGORIES } from "@/lib/categories";
import { groceriesList, sportsList } from "@/lib/dataLists";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const categoryArray = CATEGORIES[category as keyof typeof CATEGORIES];

  return (
    <>
      {category === "food" ? (
        <CategoryCarousel
          category="groceries"
          arrayOfImages={groceriesList}
          title="All The Foods You Need"
        />
      ) : category === "sports" ? (
        <CategoryCarousel
          category="sports-accessories"
          arrayOfImages={sportsList}
          title="Sports Accessories"
        />
      ) : (
        <CategoryFashion title={category} categoriesArray={categoryArray} />
      )}
    </>
  );
};

export default CategoryPage;
