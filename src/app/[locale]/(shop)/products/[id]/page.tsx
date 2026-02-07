import ProductDetails from "@/components/ProductsList/ProductDetails";

const getProduct = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
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
    </div>
  );
};

export default ProductDetailsPage;
