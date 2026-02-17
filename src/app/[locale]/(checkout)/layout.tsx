import CheckoutStepper from "@/components/Checkout/CheckoutStepper";

const CheckoutLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <CheckoutStepper />

      {children}
    </>
  );
};

export default CheckoutLayout;
