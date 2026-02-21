import Navbar from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContent";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ansa'S BOUTIQUE",
  description: "Korean Boutique Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8f4ef] text-[#4b3a2f] font-serif">

        <WishlistProvider>
          <Navbar />

          <main className="pt-28 min-h-screen">
            {children}
          </main>

          <footer className="text-center py-10 text-sm text-gray-500">
            © 2026 Anggi Salsabila✨
          </footer>

        </WishlistProvider>

      </body>
    </html>
  );
}