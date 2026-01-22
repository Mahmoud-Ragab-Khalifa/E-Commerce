import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";

import { ThemeProvider } from "@/components/ThemeProvider";

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
  const locale = useLocale();
  console.log(locale);
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${openSans.className} ${tajawal.className} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
