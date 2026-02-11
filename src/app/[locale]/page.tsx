import Hero from "@/sections/Hero";
import Advantages from "@/sections/Advantages";
import Categories from "@/sections/Categories ";
import BlackFridaySale from "@/sections/BlackFridaySale";
import ProductsList from "@/sections/ProductsList";
import PromotionalCards from "@/sections/PromotionalCards";
import CategoryFashion from "@/components/ProductsList/CategoryFashion";
import PricingCards from "@/sections/PricingCards";
import Gift from "@/sections/Gift";
import CategoryCarousel from "@/components/ProductsList/CategoryCarousel";

import { groceriesList } from "@/lib/dataLists";

import {
  MENS_CATEGORIES,
  WOMEN_CATEGORIES,
  ELECTRONICS,
  HOME,
  AUTOMOTIVE,
} from "@/lib/categories";

const Home = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Categories />
      <BlackFridaySale />
      <ProductsList />
      <PromotionalCards />

      <CategoryFashion
        title="Women's Fashion"
        categoriesArray={WOMEN_CATEGORIES}
      />

      <PricingCards />

      <CategoryFashion
        title="Men's Fashion"
        categoriesArray={MENS_CATEGORIES}
      />

      <Gift />

      <CategoryFashion title="Electronics" categoriesArray={ELECTRONICS} />

      <CategoryCarousel
        category="groceries"
        arrayOfImages={groceriesList}
        title="All The Foods You Need"
      />

      <CategoryFashion title="Home" categoriesArray={HOME} />
      <CategoryFashion title="Automotive" categoriesArray={AUTOMOTIVE} />
    </>
  );
};

export default Home;
