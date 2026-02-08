import Image from "next/image";

interface ProductDescriptionProbs {
  description: string;
  title: string;
  category: string;
  stock: string;
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: string;
  barcode: string;
  qrCode: string;
  tags: string[];
}
const ProductDescription = ({
  title,
  description,
  category,
  stock,
  sku,
  warrantyInformation,
  shippingInformation,
  availabilityStatus,
  returnPolicy,
  minimumOrderQuantity,
  barcode,
  qrCode,
  tags,
}: ProductDescriptionProbs) => {
  return (
    <div className="text-[15px] md:text-[16px] text-light dark:text-dark font-medium flex flex-col gap-2.5">
      <p>
        <span className="font-bold text-[#777]">Product Name:</span> {title}
      </p>

      <p className="capitalize">
        <span className="font-bold text-[#777]">Product Category:</span>{" "}
        {category}
      </p>

      <p className="md:max-w-2/3 xl:max-w-1/2 leading-relaxed">
        <span className="font-bold text-[#777]">About Product:</span>{" "}
        {description}
      </p>

      <p>
        <span className="font-bold text-[#777]">Pieces In Stock:</span> {stock}
      </p>

      <p>
        <span className="font-bold text-[#777]">Product Sku:</span> {sku}
      </p>

      <p>
        <span className="font-bold text-[#777]">Warranty Information:</span>{" "}
        {warrantyInformation}
      </p>

      <p>
        <span className="font-bold text-[#777]">shipping Information:</span>{" "}
        {shippingInformation}
      </p>

      <p>
        <span className="font-bold text-[#777]">Availability Status:</span>{" "}
        {availabilityStatus}
      </p>

      <p>
        <span className="font-bold text-[#777]">Return Policy:</span>{" "}
        {returnPolicy}
      </p>

      <p>
        <span className="font-bold text-[#777]">Minimum Order Quantity:</span>{" "}
        {minimumOrderQuantity}
      </p>

      <p>
        <span className="font-bold text-[#777]">Barcode:</span> {barcode}
      </p>

      <p>
        <span className="font-bold text-[#777] block mb-2">QrCode:</span>{" "}
        <Image alt="product" src={qrCode} width={232} height={232} />
      </p>

      <div className="flex items-center gap-2 mt-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-card dark:bg-card text-light dark:text-dark rounded-2xl py-2 px-4 capitalize"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
