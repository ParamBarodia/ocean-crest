"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const featured = [
  {
    name: "Dehydrated Garlic Powder",
    slug: "dehydrated-garlic-powder",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=700&q=80",
    tag: "Dehydrated",
    color: "from-stone-900/70 to-stone-950/85",
  },
  {
    name: "Onion Powder",
    slug: "onion-powder",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=700&q=80",
    tag: "Dehydrated",
    color: "from-amber-900/70 to-amber-950/85",
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=700&q=80",
    tag: "Spice",
    color: "from-yellow-900/70 to-yellow-950/85",
  },
  {
    name: "Ginger",
    slug: "ginger",
    image: "https://images.unsplash.com/photo-1615485736668-0f1d27f8d5df?w=700&q=80",
    tag: "Spice",
    color: "from-amber-800/70 to-amber-900/85",
  },
];

export function ProductShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-28 lg:py-36 bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              {t.nav.products}
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-semibold text-primary font-[family-name:var(--font-display)]">
              {t.nav.products}
            </h2>
            <div className="gold-line-left mt-4" />
          </div>
          <Link
            href="/products"
            className="mt-4 lg:mt-0 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-muted transition-colors cursor-pointer"
          >
            {t.common.viewAll} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clean 2x2 grid for 4 products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {featured.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.08}>
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full"
              >
                <div className="relative h-[320px] lg:h-[380px] rounded-[var(--radius-lg)] overflow-hidden cursor-pointer shadow-border shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    unoptimized
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.color} transition-opacity duration-300 group-hover:opacity-80`}
                  />

                  <div className="absolute top-5 left-5 z-10">
                    <span className="text-[9px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 rounded-full bg-gold/90 backdrop-blur-sm text-white border border-gold/30">
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 z-10 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-gold">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white font-[family-name:var(--font-display)]">
                      {product.name}
                    </h3>
                    <span className="inline-block mt-1 text-xs text-white/70 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      {t.common.viewDetails} →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
