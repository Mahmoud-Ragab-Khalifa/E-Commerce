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
          arrayOfImages={groceriesList}
          title="groceriesTitle"
          limit={15}
          skip={27}
        />
      ) : category === "sports" ? (
        <CategoryCarousel
          arrayOfImages={sportsList}
          title="sportsTitle"
          limit={17}
          skip={136}
        />
      ) : (
        <CategoryFashion title={category} categoriesArray={categoryArray} />
      )}
    </>
  );
};

export default CategoryPage;
