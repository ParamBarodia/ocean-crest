"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const regions = [
  { name: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar, Kuwait" },
  { name: "Southeast Asia", countries: "Malaysia, Singapore, Vietnam, Indonesia" },
  { name: "Europe", countries: "UK, Germany, Netherlands, France" },
  { name: "Africa", countries: "South Africa, Kenya, Nigeria, Egypt" },
  { name: "Americas", countries: "USA, Canada, Brazil" },
];

export function GlobalReach() {
  return (
    <section className="relative py-20 lg:py-28 bg-ocean-deep overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ocean-surface/30 rounded-full"
            style={{
              left: `${10 + (i * 4.2) % 80}%`,
              top: `${15 + (i * 7.3) % 70}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Presence"
          title="Trusted Across the Globe"
          subtitle="From the spice heartlands of India, we deliver premium products to businesses in over 25 countries across 5 continents."
          light
        />

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[var(--radius-md)] p-5 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-white font-semibold font-[family-name:var(--font-display)]">{region.name}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{region.countries}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
