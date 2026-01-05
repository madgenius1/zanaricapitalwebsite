import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const siteName = "Zanari Capital";
const baseUrl = "https://zanaricapital.com";


export const metadata: Metadata = {
  title: "Zanari Capital | Invest in Kenyan Stocks",
  description: "Invest and Trade Stock in Kenya and the Diaspora",
  keywords: [
    "Invest in Kenyan Stocks",
    "Investment Mobile App ",
    "Stock Trading Platform",
  ],

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
