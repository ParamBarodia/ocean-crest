"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { companyInfo } from "@/lib/constants/navigation";

export function CTABanner() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hello Ocean Crest! I'd like to discuss a spice export inquiry."
  )}`;

  return (
    <section className="relative py-28 lg:py-36 bg-primary overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[120px] lg:text-[250px] font-bold text-white/[0.02] font-[family-name:var(--font-display)] whitespace-nowrap select-none">
          OCEAN CREST
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
            Start a Conversation
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
            Ready to Source<br />
            <span className="text-gradient-copper">Premium Spices?</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto font-light">
            Get competitive quotes for bulk orders. Our team responds within 24
            hours with customized pricing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Send Inquiry
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
