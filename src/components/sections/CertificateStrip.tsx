import { ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { certificates } from "@/lib/constants/certificates";

export function CertificateStrip() {
  return (
    <section className="py-28 lg:py-36 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
                Quality Assured
              </span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-primary font-[family-name:var(--font-display)]">
                Our Certifications
              </h2>
              <div className="gold-line-left mt-4" />
            </div>
            <Link
              href="/certificates"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-muted transition-colors cursor-pointer"
            >
              View All Certificates <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3x3 grid — equal height cards via h-full + flex-col */}
        <StaggerChildren
          className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5"
          staggerDelay={0.05}
        >
          {certificates.map((cert) => (
            <StaggerItem key={cert.id}>
              <div className="group h-full flex flex-col items-center justify-center bg-warm-white rounded-[var(--radius-md)] p-5 lg:p-6 shadow-border hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 text-center cursor-default border border-edge-light hover:border-gold/30">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors shrink-0">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-[13px] font-semibold text-primary font-[family-name:var(--font-display)] leading-tight">
                  {cert.name}
                </h3>
                <p className="mt-1 text-[10px] text-ink-muted leading-tight">
                  {cert.issuingBody}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
