"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote: "Ocean Crest has been our primary spice supplier for over 5 years. The quality is consistently excellent, and their team is incredibly responsive.",
    name: "Ahmed Al-Rashid",
    company: "Gulf Spice Trading LLC",
    country: "UAE",
  },
  {
    quote: "We switched to Ocean Crest for our turmeric and chilli sourcing. The difference in quality and competitive pricing has been remarkable.",
    name: "Sarah Mitchell",
    company: "European Food Imports GmbH",
    country: "Germany",
  },
  {
    quote: "What sets Ocean Crest apart is their attention to certifications and documentation. They make our import process completely seamless.",
    name: "James Rodriguez",
    company: "American Spice Distributors Inc.",
    country: "USA",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              Trusted Worldwide
            </span>

            {/* Large quote mark */}
            <div className="mt-8 text-[80px] lg:text-[120px] leading-none text-gold/10 font-[family-name:var(--font-display)] select-none">
              &ldquo;
            </div>

            {/* Quote */}
            <div className="min-h-[120px] flex items-center justify-center -mt-8">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl lg:text-2xl text-primary font-[family-name:var(--font-display)] italic leading-relaxed"
                >
                  {testimonials[current].quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Attribution */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <div className="font-semibold text-sm text-primary">
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-ink-muted mt-1">
                  {testimonials[current].company} &middot; {testimonials[current].country}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Minimal dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-edge"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
