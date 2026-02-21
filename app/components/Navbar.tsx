"use client";

import { useWishlist } from "../context/WishlistContent";

export default function Navbar() {
  const { wishlist } = useWishlist();

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4">

      <div className="flex justify-between items-center">

        <h1 className="text-xl font-serif">
          ANSA'S BOUTIQUE
        </h1>

        <div className="flex gap-6">

          <a href="/">Home</a>
          <a href="/products">Collection</a>

          <a href="/wishlist" className="relative">
            Wishlist

            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 rounded-full">
              {wishlist.length}
            </span>

          </a>

        </div>

      </div>

    </nav>
  );
}