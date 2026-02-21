"use client";

import { useWishlist } from "../context/WishlistContent";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  console.log(wishlist);
  return (
    <main className="min-h-[100dvh] bg-[#f8f4ef] px-10 pt-28 pb-20">
      <h1 className="text-3xl font-serif text-[#4b3a2f] opacity-100">
        Your Wishlist 
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">
          No items saved yet 
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          {wishlist.map((item: any) => (
            <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center gap-4"
            >
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded-lg"
              >
                Remove
              </button>

              <Image
                src={item.thumbnail}
                alt={item.title}
                width={150}
                height={200}
                className="w-48 h-48 object-contain rounded-xl bg-white p-3"
                />

              <h2 className="mt-4 text-lg font-semibold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}