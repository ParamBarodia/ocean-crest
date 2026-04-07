import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { JourneySection } from "@/components/sections/JourneySection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CertificateStrip } from "@/components/sections/CertificateStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductShowcase />
      <JourneySection />
      <WhyChooseUs />
      <CertificateStrip />
      <Testimonials />
      <CTABanner />
    </>
  );
}
