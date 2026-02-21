import PricingCard from "@/components/PricingCards/PricingCard";

const pricingCardsList = [
  {
    title: "finalReduction",
    keyTitle: "sale",
    desc: "upTo20Off",
    keyPrice: "onlyFrom",
    price: "270.00",
    image: "/images/pricing-card-1.webp",
  },
  {
    title: "weekendSale",
    keyTitle: "fine",
    desc: "smartSpeaker",
    keyPrice: "startingAt",
    price: "185.00",
    image: "/images/pricing-card-2.webp",
  },
];

const PricingCards = () => {
  return (
    <div className="p-2.5">
      <div className="container mx-auto mt-6 md:mt-12.5 flex flex-col gap-4 md:flex-row">
        {pricingCardsList.map((item, idx) => (
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
