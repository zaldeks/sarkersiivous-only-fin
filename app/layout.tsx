import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
