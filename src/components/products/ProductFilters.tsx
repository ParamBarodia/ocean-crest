"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/constants/products";

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleFilter = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleFilter(cat.slug)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer",
            activeCategory === cat.slug
              ? "bg-primary text-white border-primary"
              : "bg-white text-ink-muted border-edge hover:border-gold hover:text-primary"
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
