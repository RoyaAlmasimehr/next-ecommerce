import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto, Yantramanav } from "@next/font/google";

export const metadata: Metadata = {
  title: "Kouch Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

const yantramanav = Yantramanav({
  weight: ["700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yantramanav.className} ${roboto.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
