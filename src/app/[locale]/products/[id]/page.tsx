import ProductDetails from "@/components/ProductsList/ProductDetails";
import ProductData from "@/components/ProductsList/ProductData";

const getProduct = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="p-2.5 lg:mt-7">
      <div className="container mx-auto rounded-md bg-card dark:bg-card p-4">
        <ProductDetails
          id={id}
          images={product.images}
          title={product.title}
          category={product.category}
          brand={product.brand}
          barcode={product.meta.barcode}
          price={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          warrantyInformation={product.warrantyInformation}
          availabilityStatus={product.availabilityStatus}
        />
      </div>

      <div className="container mx-auto mt-5 lg:mt-10">
        <ProductData
          title={product.title}
          description={product.description}
          category={product.category}
          stock={product.stock}
          sku={product.sku}
          warrantyInformation={product.warrantyInformation}
          shippingInformation={product.shippingInformation}
          availabilityStatus={product.availabilityStatus}
          returnPolicy={product.returnPolicy}
          minimumOrderQuantity={product.minimumOrderQuantity}
          barcode={product.meta.barcode}
          qrCode={product.meta.qrCode}
          tags={product.tags}
          reviews={product.reviews}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
