import type { Metadata } from "next";
import { Open_Sans, Tajawal } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description:
    "A modern e-commerce application for browsing products and shopping online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${tajawal.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
