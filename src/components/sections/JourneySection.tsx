import Image from "next/image";
import { MapPin, FlaskConical, FileCheck, Package, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Sourced Locally",
    description:
      "Direct relationships with local producers across India, ensuring full visibility into origin and quality.",
  },
  {
    num: "02",
    icon: FlaskConical,
    title: "Lab Tested",
    description:
      "Comprehensive analysis in accredited laboratories to verify purity, safety, and international compliance.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Customized Compliance",
    description:
      "Tailored testing protocols based on client demand or destination country regulations for seamless customs clearance.",
  },
  {
    num: "04",
    icon: Package,
    title: "Strategic Packaging",
    description:
      "Industrial-grade, export-specific packaging to preserve product integrity during long-haul transit.",
  },
  {
    num: "05",
    icon: Truck,
    title: "Verified Delivery",
    description:
      "Every shipment backed by a reliable supply chain and dedicated support to ensure on-time arrival.",
  },
];

export function JourneySection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
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
              The Verified Supply
            </h2>
            <p className="mt-4 text-sm text-white/50 max-w-xl mx-auto">
              We eliminate uncertainty in cross-border trade through direct
              sourcing and mandatory laboratory verification for every shipment.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Horizontal connecting line — desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0" />

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-4 lg:gap-x-6"
            staggerDelay={0.12}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.num}>
                  <div className="relative text-center px-2">
                    {/* Faded background number */}
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[100px] lg:text-[130px] font-bold text-white/[0.04] font-[family-name:var(--font-display)] leading-none select-none pointer-events-none">
                      {step.num}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-[100px] h-[100px] mx-auto rounded-full border border-gold/25 flex items-center justify-center bg-primary">
                      <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white font-[family-name:var(--font-display)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-white/45 leading-relaxed">
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
