import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  // ZMIEŃ: nazwa biura, tytuł i opis SEO
  title: "Biuro Rachunkowe | Księgowość dla JDG — 100% online",
  description:
    "Profesjonalna obsługa księgowa dla jednoosobowych działalności gospodarczych. Podatki, ZUS, dokumenty — sprawnie, terminowo i w 100% online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${dmSerif.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
