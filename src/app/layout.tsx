import type { Metadata, Viewport } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";

import { shop } from "@/data/georgias";

import "./globals.css";

// Classical inscription capitals, close to the "GEORGIA'S" lettering on the logo and the truck.
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const title = `${shop.name} | Greek food truck and catering in Seattle`;

export const metadata: Metadata = {
  title,
  description: shop.description,
  // Demo build, shared only with Georgia's Greek: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: shop.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#142c44",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
