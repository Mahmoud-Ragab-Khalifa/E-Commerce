import FilterList from "@/components/ProductsList/FilterList";
import ProductsCarousel from "@/components/ProductsList/ProductsCarousel";

const WomensFashion = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 mb-56 flex gap-4">
        <FilterList
          category="Women's Fashion"
          items={[
            "View All",
            "Bags",
            "Dresses",
            "Jewellery",
            "Shoes",
            "Watches",
            "Tops",
            "Skin Care",
            "Beauty",
          ]}
        />

        <div className="products-carousel overflow-hidden">
          <ProductsCarousel />
        </div>
      </div>
    </div>
  );
};

export default WomensFashion;
