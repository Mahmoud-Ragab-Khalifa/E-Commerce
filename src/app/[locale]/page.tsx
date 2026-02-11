import Hero from "@/sections/Hero";
import Advantages from "@/sections/Advantages";
import Categories from "@/sections/Categories ";
import BlackFridaySale from "@/sections/BlackFridaySale";
import ProductsList from "@/sections/ProductsList";
import PromotionalCards from "@/sections/PromotionalCards";
import CategoryFashion from "@/sections/CategoryFashion";
import PricingCards from "@/sections/PricingCards";

import { WOMEN_CATEGORIES } from "@/lib/categories";

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
    </>
  );
};

export default Home;
