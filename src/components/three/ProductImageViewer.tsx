"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductViewer3D = dynamic(
  () =>
    import("@/components/three/ProductViewer3D").then((m) => m.ProductViewer3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    ),
  }
);

interface Props {
  slug: string;
  name: string;
  image: string;
}

export function ProductImageViewer({ slug, name, image }: Props) {
  const [view, setView] = useState<"image" | "3d">("image");

  return (
    <div className="aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-card sticky top-24 relative group bg-gradient-to-br from-stone to-stone-100">
      {/* 2D image view */}
      {view === "image" && (
        <>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </>
      )}

      {/* 3D interactive view */}
      {view === "3d" && (
        <div className="absolute inset-0">
          <ProductViewer3D productSlug={slug} className="w-full h-full" />
        </div>
      )}

      {/* Toggle buttons */}
      <div className="absolute top-4 right-4 z-10 flex bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-card border border-edge-light">
        <button
          onClick={() => setView("image")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer",
            view === "image"
              ? "bg-primary text-white"
              : "text-ink-muted hover:text-primary"
          )}
          aria-label="Show 2D image"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button
          onClick={() => setView("3d")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer",
            view === "3d"
              ? "bg-primary text-white"
              : "text-ink-muted hover:text-primary"
          )}
          aria-label="Show 3D view"
        >
          <Box className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">3D View</span>
        </button>
      </div>

      {/* Instructional hint for 3D */}
      {view === "3d" && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-card border border-edge-light pointer-events-none">
          <span className="text-[10px] font-medium tracking-wider uppercase text-ink-muted">
            Drag to rotate · Scroll to zoom
          </span>
        </div>
      )}
    </div>
  );
}
