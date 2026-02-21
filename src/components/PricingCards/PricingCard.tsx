import Image from "next/image";

interface PricingCardProbs {
  title: string;
  keyTitle: string;
  desc: string;
  keyPrice: string;
  price: string;
  image: string;
}

const PricingCard = ({
  title,
  keyTitle,
  desc,
  keyPrice,
  price,
  image,
}: PricingCardProbs) => {
  return (
    <div className="group flex-1 py-4 px-6 bg-card text-light dark:text-dark rounded-md flex justify-around items-center overflow-hidden relative">
      <div className="whitespace-nowrap">
        <h2 className="font-bold xl:text-xl">{title}</h2>
        <p className="text-xl md:text-2xl xl:text-3xl mt-2 mb-5">
          <span className="border-b-2 border-b-main-color dark:border-b-[#253853] pb-2 pe-2">
            {keyTitle}
          </span>
          {desc}
        </p>
        <p>
          <span className="text-neutral-600 dark:text-neutral-300 pe-2">
            {keyPrice}
          </span>
          <span className="font-bold text-xl">${price}</span>
        </p>
      </div>

      <Image alt="img" src={image} width={200} height={200} />

      <div
        className="absolute left-0 top-0  w-0 h-full bg-main-color/5 dark:bg-white/5 transition-all duration-500
       group-hover:w-full"
      />
    </div>
  );
};

export default PricingCard;
