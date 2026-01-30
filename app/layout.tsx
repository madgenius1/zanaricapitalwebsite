import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const siteName = "Zanari Capital";
const baseUrl = "https://zanaricapital.com";


export const metadata: Metadata = {
  title: "Zanari Capital | Invest in and Trade Kenyan Stocks",
  description: "Buy and Sell Kenyan Stocks, ETFs, Derivatives, and Invest in the Kenyan Capital Markets",
  keywords: [
    "Invest in Kenyan Stocks",
    "Investment Mobile App ",
    "Buy and sell Kenyan stocks and equity",
    "Stock Trading Platform",
    "Invest in NSE",
    "Buy and sell shares in Kenya",
    "Best stock trading app in Kenya",
    "NSE mobile app"
  ],
  openGraph: {
    title: `${siteName}`,
    description:
      "Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
    url: baseUrl,
    siteName: siteName,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Zanari - Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
