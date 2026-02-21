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
          title="groceriesTitle"
        />
      ) : category === "sports" ? (
        <CategoryCarousel
          category="sports-accessories"
          arrayOfImages={sportsList}
          title="sportsTitle"
        />
      ) : (
        <CategoryFashion title={category} categoriesArray={categoryArray} />
      )}
    </>
  );
};

export default CategoryPage;
