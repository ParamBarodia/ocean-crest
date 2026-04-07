"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left: Image/Visual */}
        <div className="relative bg-primary overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Spice landscape"
            fill
            className="object-cover animate-ken-burns"
            unoptimized
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-[120px] lg:text-[180px] font-bold text-white/[0.08] font-[family-name:var(--font-display)] leading-none select-none">
                15+
              </span>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 -mt-4">Years of Excellence</p>
            </div>
          </div>
          {/* Copper accent line */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>

        {/* Right: Content */}
        <div className="flex items-center bg-warm-white px-8 lg:px-16 xl:px-24 py-16 lg:py-0">
          <div className="max-w-lg">
            <ScrollReveal>
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
                Our Story
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-primary font-[family-name:var(--font-display)] leading-tight">
                Where the Ocean Meets<br />
                the Spice Trail
              </h2>
              <div className="gold-line-left mt-6" />
              <p className="mt-6 text-ink-muted leading-relaxed">
                Ocean Crest bridges India&apos;s ancient spice heritage with modern global
                commerce. From the cardamom hills of Kerala to the chilli fields of
                Guntur, we source directly from certified farms — ensuring every
                shipment carries the authentic essence of Indian spices.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed">
                With state-of-the-art processing, international certifications, and a
                network spanning 25+ countries, we&apos;re your trusted partner in
                premium food exports.
              </p>
              <Link href="/about" className="inline-block mt-8">
                <Button variant="secondary">
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
