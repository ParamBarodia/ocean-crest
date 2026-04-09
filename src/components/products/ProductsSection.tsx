"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { categories, getProductsByCategory } from "@/lib/constants/products";

const productImages: Record<string, string> = {
  "dehydrated-garlic-powder": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=600&q=80",
  "onion-powder": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80",
  "turmeric": "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
  "ginger": "https://images.unsplash.com/photo-1615485736668-0f1d27f8d5df?w=600&q=80",
};

export function ProductsSection() {
  const [active, setActive] = useState("all");
  const filtered = getProductsByCategory(active);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer",
              active === cat.slug
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-ink-muted border-edge hover:border-gold hover:text-gold"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full"
              >
                <Card className="h-full">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={
                        productImages[product.slug] ||
                        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
                      }
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-colors duration-300" />
                  </div>
                  <CardContent>
                    <Badge variant="gold" className="mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-display)] group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                      View Details{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-ink-muted text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </>
  );
}
