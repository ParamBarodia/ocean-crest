import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/lib/constants/certificates";

export function CertificateStrip() {
  return (
    <section className="py-16 lg:py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="shrink-0">
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
                Quality Assured
              </span>
              <h3 className="mt-2 text-xl font-semibold text-primary font-[family-name:var(--font-display)]">
                Internationally Certified
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {certificates.map((cert) => (
                <span
                  key={cert.id}
                  className="px-4 py-2 text-xs font-medium text-ink-muted border border-edge rounded-full hover:border-gold hover:text-gold transition-colors cursor-default"
                >
                  {cert.name}
                </span>
              ))}
            </div>

            <Link
              href="/certificates"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-muted transition-colors cursor-pointer"
            >
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
