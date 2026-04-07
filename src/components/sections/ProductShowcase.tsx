"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const featured = [
  { name: "Turmeric Powder", slug: "turmeric-powder", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80", tag: "Bestseller", color: "from-amber-900/60 to-amber-950/80" },
  { name: "Black Pepper", slug: "black-pepper", image: "https://images.unsplash.com/photo-1599909631715-43e0d09e7744?w=600&q=80", tag: "Premium", color: "from-stone-900/60 to-stone-950/80" },
  { name: "Green Cardamom", slug: "cardamom", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&q=80", tag: "Aromatic", color: "from-emerald-900/60 to-emerald-950/80" },
  { name: "Garlic Powder", slug: "garlic-powder", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=600&q=80", tag: "Popular", color: "from-stone-800/60 to-stone-900/80" },
  { name: "Cumin Seeds", slug: "cumin-seeds", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80", tag: "Essential", color: "from-yellow-900/60 to-yellow-950/80" },
  { name: "Red Chilli", slug: "red-chilli-powder", image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80", tag: "Fiery", color: "from-red-900/60 to-red-950/80" },
];

export function ProductShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              Our Collection
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-semibold text-primary font-[family-name:var(--font-display)]">
              Premium Exports
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 lg:mt-0 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-muted transition-colors cursor-pointer"
          >
            View All Products <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {featured.map((product, i) => {
            // First item spans 2 rows, third item spans 2 cols on desktop
            const spanClass = i === 0
              ? "row-span-2"
              : i === 2
              ? "lg:col-span-2"
              : "";

            return (
              <ScrollReveal key={product.slug} delay={i * 0.08}>
                <Link href={`/products/${product.slug}`} className={`group block h-full ${spanClass}`}>
                  <div className="relative h-full rounded-[var(--radius-lg)] overflow-hidden cursor-pointer">
                    {/* Image with scale on hover */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                      unoptimized
                    />
                    {/* Gradient overlay -- lighter on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} transition-opacity duration-300 group-hover:opacity-80`} />

                    {/* Tag -- slides in from above on hover */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] tracking-[0.2em] uppercase font-medium px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/80 border border-white/10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {product.tag}
                      </span>
                    </div>

                    {/* Arrow -- fades in on hover */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content -- slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg lg:text-xl font-semibold text-white font-[family-name:var(--font-display)]">
                        {product.name}
                      </h3>
                      <span className="text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Product →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
