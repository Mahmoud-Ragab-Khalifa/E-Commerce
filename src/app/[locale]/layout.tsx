// LOCALIZATION
import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";

// THEMING
import { ThemeProvider } from "@/components/ThemeProvider";

import type { Metadata } from "next";
import { Geist, Tajawal } from "next/font/google";
import "@/styles/globals.css";

// LAYOUT COMPONENTS
import TopLevelHeader from "@/layout/TopLevelHeader";

// FONTS
const geist = Geist({
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["500"],
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

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${locale === "ar" ? tajawal.className : geist.className}  antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopLevelHeader />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
