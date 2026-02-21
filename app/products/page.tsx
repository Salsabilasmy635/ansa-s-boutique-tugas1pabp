"use client";

import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        "https://dummyjson.com/products/category/womens-dresses",
        { cache: "no-store" }
      );
      const data = await res.json();
      setProducts(data.products);
    }

    getProducts();
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-20 px-10">
      <h1 className="text-4xl font-serif text-center mb-10 text-[#5c4033]">
        Ansa's OOTD Collection
      </h1>

      <ProductList products={products} />
    </main>
  );
}