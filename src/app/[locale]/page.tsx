import Hero from "@/sections/Hero";
import Advantages from "@/sections/Advantages";
import Categories from "@/sections/Categories ";
import BlackFridaySale from "@/sections/BlackFridaySale";
import ProductsList from "@/sections/ProductsList";
import PromotionalCards from "@/sections/PromotionalCards";
import PricingCards from "@/sections/PricingCards";
import Gift from "@/sections/Gift";

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

      <PricingCards />

      <ProductsList limit={5} skip={77} category="electronics" />

      <Gift />

      <ProductsList limit={5} skip={42} category="home" />
    </>
  );
};

export default Home;
