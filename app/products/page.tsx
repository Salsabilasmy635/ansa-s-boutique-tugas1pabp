"use client";

import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
  async function getProducts() {
    const categories = [
      "womens-dresses",
      "womens-shoes",
      "womens-bags",
      "womens-jewellery",
      "mens-shirts",
      "mens-pants",
    ];

    const responses = await Promise.all(
      categories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}`, {
          cache: "no-store",
        }).then((res) => res.json())
      )
    );

    const allProducts = responses.flatMap(
      (data) => data.products
    );

    setProducts(allProducts);
  }

  getProducts();
}, []);

  return (
    <main className="min-h-[100vh] bg-[#f8f4ef] pt-28 pb-20 px-10">
      <h1 className="text-4xl font-serif text-center mb-10 text-[#5c4033]">
        Ansa's OOTD Collection
      </h1>

      <ProductList products={products} />
    </main>
  );
}