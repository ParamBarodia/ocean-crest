"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Dynamically load 3D scene (client-only, no SSR)
const SpiceJar = dynamic(
  () => import("@/components/three/SpiceJar").then((m) => m.SpiceJar),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    ),
  }
);

const productNames = [
  "Dehydrated Garlic Powder",
  "Onion Powder",
  "Turmeric",
  "Ginger",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=80"
          alt="Premium Indian commodities"
          fill
          className="object-cover animate-ken-burns"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <motion.h1
                className="font-[family-name:var(--font-display)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="block text-5xl sm:text-6xl lg:text-[80px] font-light text-white/95 leading-[0.95]"
                >
                  Ocean Crest
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="block text-5xl sm:text-6xl lg:text-[80px] font-bold text-gradient-copper leading-[0.95]"
                >
                  Exports
                </motion.span>
              </motion.h1>

              {/* Gold line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left mt-6"
              >
                <div className="gold-line-left" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-4 text-[12px] font-medium tracking-[0.25em] uppercase text-gold"
              >
                Your Verified Partner for Indian Commodities
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-6 text-base text-white/60 leading-relaxed max-w-md font-light"
              >
                A specialized export brand under{" "}
                <span className="text-white/80 font-medium">Sheth &amp; Bhatt&apos;s LLP</span>,
                dedicated to the global distribution of high-quality Indian
                products with verified supply and lab-tested quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link href="/products">
                  <Button size="lg">
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 text-white hover:bg-white/10 hover:text-white"
                  >
                    About Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Interactive 3D spice jar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative hidden lg:block h-[560px]"
            >
              {/* 3D Canvas container */}
              <div className="relative h-full">
                <SpiceJar spiceColor="#C5923A" rotationSpeed={0.15} />
              </div>

              {/* Decorative gold accent corners */}
              <div className="absolute -bottom-3 -right-3 w-32 h-32 border-r-2 border-b-2 border-gold/60 rounded-br-[var(--radius-xl)] pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-32 h-32 border-l-2 border-t-2 border-gold/30 rounded-tl-[var(--radius-xl)] pointer-events-none" />

              {/* Hint badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 pointer-events-none">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60">
                  Premium Quality · Lab Tested
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-white/10 py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...productNames, ...productNames, ...productNames, ...productNames].map((name, i) => (
            <span key={i} className="flex items-center mx-8">
              <span className="text-[11px] tracking-widest uppercase text-white/30 font-medium">
                {name}
              </span>
              <span className="ml-8 w-1 h-1 rounded-full bg-gold/50" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll line indicator — uses scaleY for compositor-only animation */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-10 origin-top bg-gradient-to-b from-gold/60 to-transparent"
      />
    </section>
  );
}
