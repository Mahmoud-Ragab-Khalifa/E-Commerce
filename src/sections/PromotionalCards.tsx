import PromotionalCard from "@/components/PromotionalCards/PromotionalCard";

const promotionalCardsList = [
  {
    category: "sports",
    title: "newArrivals",
    subTitle: "sportsAccessoriesSale",
    desc: "upTo15",
    isSale: true,
    image: "/images/promotional-card-1.webp",
  },
  {
    category: "women",
    title: "bestSeller",
    subTitle: "trendingWomen",
    desc: "sunglasses",
    isSale: false,
    image: "/images/promotional-card-2.webp",
  },
  {
    category: "women",
    title: "newArrivals",
    subTitle: "latestBag",
    desc: "collection",
    isSale: false,
    image: "/images/promotional-card-3.webp",
  },
];

const PromotionalCards = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4 md:flex-row flex-wrap">
        {promotionalCardsList.map((item, idx) => (
          <PromotionalCard
            key={idx}
            category={item.category}
            title={item.title}
            subTitle={item.subTitle}
            isSale={item.isSale}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalCards;
