import PromotionalCard from "@/components/PromotionalCards/PromotionalCard";

const promotionalCardsList = [
  {
    title: "New Arrivals",
    subTitle: "Sports Accessories Sale",
    isSale: true,
    desc: "Up To 15% Off",
    image: "/images/promotional-card-1.webp",
  },
  {
    title: "Best Seller",
    subTitle: "Trending Women",
    isSale: false,
    desc: "Sunglasses",
    image: "/images/promotional-card-2.webp",
  },
  {
    title: "New Arrivals",
    subTitle: "New Latest Bag",
    isSale: false,
    desc: "Collection",
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
