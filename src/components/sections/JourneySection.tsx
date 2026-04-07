import Image from "next/image";
import { Leaf, Ship, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    num: "01",
    icon: Leaf,
    title: "Sourced",
    description: "Direct from certified farms across India's premier spice-growing regions — Kerala, Gujarat, Rajasthan, Tamil Nadu.",
  },
  {
    num: "02",
    icon: Ship,
    title: "Shipped",
    description: "Processed in ISO-certified facilities, packed to international standards, and shipped via established trade routes.",
  },
  {
    num: "03",
    icon: Globe,
    title: "Delivered",
    description: "On-time delivery to 25+ countries with complete export documentation and quality guarantees.",
  },
];

export function JourneySection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=60"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-semibold text-white font-[family-name:var(--font-display)]">
              Farm to World
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0" />

          <StaggerChildren className="grid lg:grid-cols-3 gap-12 lg:gap-8" staggerDelay={0.15}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.num}>
                  <div className="relative text-center">
                    {/* Large faded number */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[140px] lg:text-[180px] font-bold text-white/[0.03] font-[family-name:var(--font-display)] leading-none select-none pointer-events-none">
                      {step.num}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-[120px] h-[120px] mx-auto rounded-full border border-gold/20 flex items-center justify-center bg-primary">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white font-[family-name:var(--font-display)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
