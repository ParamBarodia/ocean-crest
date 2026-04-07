"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { companyInfo } from "@/lib/constants/navigation";

const products = [
  "Turmeric", "Black Pepper", "Cardamom", "Cumin Seeds", "Cinnamon",
  "Garlic Powder", "Red Chilli", "Fennel Seeds", "Sesame Seeds", "Coriander",
];

const stats = [
  { label: "Countries", value: companyInfo.stats.countries, suffix: "+" },
  { label: "Products", value: companyInfo.stats.products, suffix: "+" },
  { label: "Years", value: companyInfo.stats.years, suffix: "+" },
  { label: "Clients", value: companyInfo.stats.clients, suffix: "+" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&q=80"
          alt="Premium Indian spices"
          fill
          className="object-cover animate-ken-burns"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-primary/80" />
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
                  Est. 2010 — India
                </span>
              </motion.div>

              <motion.h1
                className="mt-6 font-[family-name:var(--font-display)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="block text-5xl sm:text-6xl lg:text-[80px] font-light text-white/90 leading-[0.95]"
                >
                  Ocean
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                  className="block text-5xl sm:text-6xl lg:text-[80px] font-bold text-gradient-copper leading-[0.95]"
                >
                  Crest
                </motion.span>
              </motion.h1>

              {/* Copper line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left mt-6"
              >
                <div className="gold-line-left" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-4 text-[11px] font-medium tracking-[0.25em] uppercase text-white/40"
              >
                Premium Spice Exports from India
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-6 text-base text-white/50 leading-relaxed max-w-md font-light"
              >
                From India&apos;s finest growing regions to markets across 25+ countries —
                quality-certified spices, grains, and dehydrated products for businesses worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link href="/products">
                  <Button size="lg">
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Abstract decorative composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative hidden lg:block h-[500px]"
            >
              {/* Floating abstract shapes — CSS animations instead of Framer Motion */}
              <div className="absolute top-8 right-8 w-64 h-80 rounded-[var(--radius-xl)] bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 animate-float" />
              <div className="absolute top-24 right-32 w-56 h-72 rounded-[var(--radius-xl)] bg-gradient-to-br from-depth-light/20 to-depth/10 border border-white/5 backdrop-blur-sm animate-float-delay" />
              <div className="absolute top-40 right-16 w-48 h-48 rounded-[var(--radius-xl)] bg-gradient-to-br from-teal/15 to-teal/5 border border-teal/10 animate-float-slow" />

              {/* Stats overlaid on shapes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="absolute bottom-0 left-0 right-0 glass rounded-[var(--radius-lg)] p-6"
              >
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-gold font-[family-name:var(--font-display)]">
                        <CounterAnimation target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] tracking-wider uppercase text-white/40 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 lg:hidden px-6 pb-8"
      >
        <div className="glass rounded-[var(--radius-lg)] p-5">
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold text-gold font-[family-name:var(--font-display)]">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] tracking-wider uppercase text-white/40 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-white/5 py-4 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...products, ...products].map((name, i) => (
            <span key={i} className="flex items-center mx-6">
              <span className="text-[11px] tracking-widest uppercase text-white/20 font-medium">{name}</span>
              <span className="ml-6 w-1 h-1 rounded-full bg-gold/40" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll line indicator */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gold/50 to-transparent"
      />
    </section>
  );
}
