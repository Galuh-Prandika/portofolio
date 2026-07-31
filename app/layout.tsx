import type { Metadata } from "next";
import { Caveat, Instrument_Serif, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

import { ProgressiveBlur } from "@/components/progressive-blur";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Galuh Prandika - Designer & Engineer",
  description:
    "Minimal portfolio for Galuh Prandika, a product designer working across web design, app design, product design, and Framer development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProgressiveBlur />
        {children}
      </body>
    </html>
  );
}
