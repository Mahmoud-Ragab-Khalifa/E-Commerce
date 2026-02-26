import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const ProductInfoTitle = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="mt-3 flex items-start gap-1 md:gap-2">
      <span className="font-bold text-[#0aa2b5] whitespace-nowrap">
        {title}
      </span>
      <span
        className={`${geist.className} font-medium text-light dark:text-dark capitalize max-w-65 md:max-w-125`}
      >
        {desc}
      </span>
    </div>
  );
};

export default ProductInfoTitle;
