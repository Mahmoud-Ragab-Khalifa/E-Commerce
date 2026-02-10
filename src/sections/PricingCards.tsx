import PricingCard from "@/components/PricingCards/PricingCard";

const prisingCardsList = [
  {
    title: "Final Reduction",
    keyTitle: "Sale",
    desc: "Up To 20% OFF",
    keyPrice: "Only From",
    price: "270.00",
    image: "/images/pricing-card-1.webp",
  },
  {
    title: "Weekend Sale",
    keyTitle: "Fine",
    desc: "Smart Speaker",
    keyPrice: "Starting at",
    price: "185.00",
    image: "/images/pricing-card-2.webp",
  },
];

const PricingCards = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4 md:flex-row">
        {prisingCardsList.map((item, idx) => (
          <PricingCard
            key={idx}
            title={item.title}
            keyTitle={item.keyTitle}
            desc={item.desc}
            keyPrice={item.keyPrice}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
