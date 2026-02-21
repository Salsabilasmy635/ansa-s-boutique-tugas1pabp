import { WishlistProvider } from "./context/WishlistContent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANSA'S BOUTIQUE",
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

          
          <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

            <h1 className="text-xl sm:text-2xl font-serif tracking-wide text-center text-black">
              ANSA'S BOUTIQUE
            </h1>

            <div className="flex gap-6 text-sm flex-wrap justify-center">
              <a href="/" className="hover:text-[#c8a27e] transition text-black">
                Home
              </a>
              <a href="/products" className="hover:text-[#c8a27e] transition text-black">
                Collection
              </a>
              <a href="/wishlist" className="hover:text-[#c8a27e] transition text-black">
                Wishlist
              </a>
            </div>

          </nav>

          
          <main className="pt-28 min-h-screen">
            {children}
          </main>

          
          <footer className="text-center py-10 text-sm text-gray-500">
            © 2026 ANSA'S BOUTIQUE. Styled by Anggi ✨
          </footer>

        </WishlistProvider>

      </body>
    </html>
  );
}