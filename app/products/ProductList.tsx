"use client";

import { useWishlist } from "../context/WishlistContent";
import { Heart } from "lucide-react";
import Link from "next/link";


type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

export default function ProductList({
  products,
}: {
  products: Product[];
}) {
  const { addToWishlist, removeFromWishlist, isInWishlist, wishlist } =
    useWishlist();

  return (
    <>
      <p className="mb-6 text-sm">
        Wishlist Items: {wishlist.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="relative bg-white border border-[#e8d8c3] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-72 object-cover rounded-t-2xl"
            />

            <button
              onClick={() =>
                isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10"
            >
              <span className="text-red-500 text-xl">
                {isInWishlist(product.id) ? "❤️" : "🤍"}
              </span>
            </button>

            <div className="p-6 text-center">
              <h2 className="font-medium text-lg mb-2">
                {product.title}
              </h2>

              <p className="text-gray-500 mb-4">
                ${product.price}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="block mt-3 border border-[#c8a27e] text-[#c8a27e] px-6 py-2 hover:bg-[#c8a27e] hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}