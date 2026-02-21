import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe8]">

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
          alt="Fashion Boutique"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative bg-white/90 p-10 text-center shadow-lg max-w-xl">
          <h1 className="text-5xl font-serif text-[#5c4033] mb-4">
            Ansa's Boutique
          </h1>

          <p className="text-gray-600 mb-6">
            Elegant Korean-style outfits for your everyday confidence.
          </p>

          <Link
            href="/products"
            className="bg-[#c8a27e] text-white px-6 py-3 hover:bg-[#b48d6b] transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

    </main>
  );
}
