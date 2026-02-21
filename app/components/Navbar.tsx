"use client";

import { useWishlist } from "../context/WishlistContent";
import { useState } from "react";

export default function Navbar() {
  const { wishlist } = useWishlist();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      {/* 🔥 NAVBAR UTAMA */}
      <div className="flex justify-between items-center px-6 py-4">

        {/* TITLE */}
        <h1 className="text-xl font-serif text-black">
          Ansa's Boutique ✨
        </h1>

        {/* HAMBURGER */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden sm:flex gap-6 items-center">

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

      {/* 🔥 MENU MOBILE (TERPISAH DARI HEIGHT NAVBAR) */}
      {open && (
        <div className="sm:hidden bg-white border-t flex flex-col items-center gap-6 py-6 shadow-md text-black">

            <a href="/" onClick={() => setOpen(false)} className="hover:text-[#c8a27e]">
            Home
            </a>

            <a href="/products" onClick={() => setOpen(false)} className="hover:text-[#c8a27e]">
            Collection
            </a>

            <a href="/wishlist" onClick={() => setOpen(false)} className="hover:text-[#c8a27e]">
            Wishlist ({wishlist.length})
            </a>

        </div>
        )}

    </nav>
  );
}