export const metadata = {
  title: {
    default: "Market",
    template: "Market | %s",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
