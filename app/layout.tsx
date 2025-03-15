import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarker Siivous",
  description: "Ammattimaista siivouspalvelua Helsingissä",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <head>
        <title>Sarker Siivous</title>
        <meta
          name="description"
          content="Ammattimaista siivouspalvelua Helsingissä"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
