import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Eye, Heart, Leaf, Users, Globe, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { CTABanner } from "@/components/sections/CTABanner";
import { companyInfo } from "@/lib/constants/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ocean Crest — a leading Indian spice exporter with 15+ years of experience serving 25+ countries. Quality, trust, and excellence.",
};

const values = [
  { icon: ShieldCheck, title: "Quality First", description: "Every product undergoes rigorous quality checks before shipment, meeting international food safety standards." },
  { icon: Heart, title: "Integrity", description: "We build lasting relationships through honest dealings, transparent pricing, and consistent reliability." },
  { icon: Leaf, title: "Sustainability", description: "Committed to sustainable sourcing practices that benefit farmers, communities, and the environment." },
  { icon: Users, title: "Partnership", description: "We see every client as a long-term partner, offering dedicated support and custom solutions." },
];

const timeline = [
  { year: "2010", title: "Foundation", description: "Ocean Crest established with a mission to export India's finest spices to the world." },
  { year: "2013", title: "First Export Milestone", description: "Crossed 100 MT annual exports, expanding to 5 countries in the Middle East." },
  { year: "2016", title: "Quality Certifications", description: "Achieved ISO 22000, HACCP, and FDA registration — opening doors to European and American markets." },
  { year: "2019", title: "Facility Expansion", description: "New state-of-the-art processing facility with 500 MT monthly capacity." },
  { year: "2022", title: "Global Presence", description: "Exporting to 25+ countries with 100+ product varieties across multiple categories." },
  { year: "2025", title: "Innovation & Growth", description: "Launched organic product line and advanced quality testing laboratory." },
];

const stats = [
  { value: companyInfo.stats.countries, suffix: "+", label: "Countries Served" },
  { value: companyInfo.stats.products, suffix: "+", label: "Product Varieties" },
  { value: companyInfo.stats.years, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-32 lg:py-40">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-16 text-stone" viewBox="0 0 1440 64" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,48 1440,40 L1440,64 L0,64 Z" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">About Us</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
              The Story Behind <span className="text-gold">Ocean Crest</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              From humble beginnings to a globally recognized spice exporter — our journey is built on quality, integrity, and an unwavering commitment to excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-[var(--radius-lg)] p-8 lg:p-10 shadow-card h-full">
                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gold/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-2xl font-semibold text-primary font-[family-name:var(--font-display)]">Our Mission</h2>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  To source, process, and deliver the highest quality Indian spices and food products to global markets — empowering businesses with reliable supply, competitive pricing, and uncompromising food safety standards.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white rounded-[var(--radius-lg)] p-8 lg:p-10 shadow-card h-full">
                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gold/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h2 className="text-2xl font-semibold text-primary font-[family-name:var(--font-display)]">Our Vision</h2>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  To be a globally recognized, trusted partner in the food export industry — known for exceptional quality, sustainable practices, and the ability to connect India&apos;s agricultural richness with the world&apos;s culinary diversity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every product we export."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="bg-white rounded-[var(--radius-md)] p-6 shadow-card h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-display)]">{title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Milestones That Define Us"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-0.5" />

              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-6 mb-10 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white shadow-card -translate-x-1.5 lg:-translate-x-1.5 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}>
                      <span className="text-sm font-bold text-gold">{item.year}</span>
                      <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-display)]">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 lg:py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Facility"
            title="State-of-the-Art Infrastructure"
            subtitle="Modern processing facilities equipped with the latest technology for quality assurance and efficiency."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { title: "Processing Unit", desc: "500 MT monthly capacity with automated cleaning, sorting, and grinding systems.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80" },
              { title: "Quality Lab", desc: "In-house testing laboratory for moisture, purity, and contamination analysis.", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&q=80" },
              { title: "Packaging Center", desc: "Automated packaging lines for bulk, retail, and custom packaging solutions.", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&q=80" },
              { title: "Cold Storage", desc: "Temperature-controlled storage for maintaining freshness and extending shelf life.", image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=500&q=80" },
              { title: "Warehouse", desc: "10,000 sq ft warehouse with inventory management for quick order fulfillment.", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80" },
              { title: "Export Logistics", desc: "Dedicated export documentation and logistics team for seamless global shipping.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80" },
            ].map(({ title, desc, image }) => (
              <StaggerItem key={title}>
                <div className="group bg-white rounded-[var(--radius-md)] overflow-hidden shadow-card">
                  <div className="h-40 relative overflow-hidden">
                    <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" unoptimized />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-primary font-[family-name:var(--font-display)]">{title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
