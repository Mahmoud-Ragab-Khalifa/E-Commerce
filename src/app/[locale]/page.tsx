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

import { groceriesList, sportsList } from "@/lib/dataLists";

const Home = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Categories />
      <BlackFridaySale />

      <ProductsList limit={7} skip={0} category="women" />

      <PromotionalCards />

      <ProductsList limit={7} skip={82} category="men" />

      {/* <CategoryFashion
        title="Women's Fashion"
        categoriesArray={WOMEN_CATEGORIES}
      /> */}

      <PricingCards />

      <ProductsList limit={5} skip={77} category="electronics" />

      {/* <CategoryFashion
        title="Men's Fashion"
        categoriesArray={MENS_CATEGORIES}
      /> */}

      <Gift />

      <ProductsList limit={5} skip={42} category="home" />

      {/* <CategoryFashion title="Electronics" categoriesArray={ELECTRONICS} /> */}

      {/* <CategoryCarousel
        category="groceries"
        arrayOfImages={groceriesList}
        title="All The Foods You Need"
      /> */}

      {/* <CategoryFashion title="Home" categoriesArray={HOME} /> */}

      {/* <CategoryFashion title="Automotive" categoriesArray={AUTOMOTIVE} /> */}

      {/* <CategoryCarousel
        category="sports-accessories"
        arrayOfImages={sportsList}
        title="Sports Accessories"
      /> */}
    </>
  );
};

export default Home;
