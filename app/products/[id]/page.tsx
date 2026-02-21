"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="p-10">Loading...</p>
        </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f4ef] flex items-center justify-center p-10">
    <div className="bg-white shadow-lg max-w-4xl grid md:grid-cols-2 gap-10 p-8">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-96 object-cover"
      />

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-serif mb-4">
          {product.title}
        </h1>

        <p className="text-xl text-[#c8a27e] mb-4">
          ${product.price}
        </p>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <button className="bg-[#c8a27e] text-white px-6 py-3 hover:bg-[#b48d6b] transition">
          Add to Cart
        </button>
      </div>

    </div>
  </main>
  );
}