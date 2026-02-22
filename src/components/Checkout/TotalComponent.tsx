import { useCartStore } from "@/store/cartStore";
import { useTranslations } from "next-intl";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const TotalComponent = () => {
  const { totalPrice } = useCartStore();

  const t = useTranslations("checkoutPages");
  return (
    <>
      <div className="flex items-center justify-between">
        <span>{t("subtotal")}:</span>
        <span className={geist.className}>${totalPrice.toFixed(2)}</span>
      </div>

      {["shipping", "tax", "discount"].map((item) => (
        <div key={item} className="flex items-center justify-between mt-3">
          <span>{t(item)}:</span>
          <span>-</span>
        </div>
      ))}

      <div
        className={`${geist.className} font-bold text-2xl mt-4 pt-5 border-t text-end`}
      >
        ${totalPrice.toFixed(2)}
      </div>
    </>
  );
};

export default TotalComponent;
