import CategoryCard from "@/components/Categories/CategoryCard";

import { useTranslations } from "next-intl";

const categoriesData = [
  {
    category: "Toys",
    image: "/images/cat-1.png",
  },
  {
    category: "Sports",
    image: "/images/cat-2.png",
  },
  {
    category: "Gaming",
    image: "/images/cat-3.png",
  },
  {
    category: "Furniture",
    image: "/images/cat-4.png",
  },
  {
    category: "Fashion",
    image: "/images/cat-5.png",
  },
  {
    category: "Cameras",
    image: "/images/cat-6.png",
  },
];

const Categories = () => {
  const t = useTranslations("categoryItems");
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {categoriesData.map((item, idx) => (
          <CategoryCard
            key={idx}
            category={t(item.category)}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
