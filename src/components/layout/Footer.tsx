import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/lib/constants/navigation";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  { name: "Whole Spices", href: "/products?category=whole-spices" },
  { name: "Ground Spices", href: "/products?category=ground-spices" },
  { name: "Dehydrated Vegetables", href: "/products?category=dehydrated" },
  { name: "Seeds & Grains", href: "/products?category=seeds-grains" },
  { name: "Oils", href: "/products?category=oils" },
];

export function Footer() {
  return (
    <footer className="relative">
      {/* Gold line divider */}
      <div className="gold-line" />

      <div className="bg-primary text-white relative overflow-hidden">
        {/* Watermark */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] lg:text-[200px] font-bold text-white/[0.02] font-[family-name:var(--font-display)] tracking-wider select-none pointer-events-none whitespace-nowrap">
          OCEAN CREST
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span className="text-lg font-bold font-[family-name:var(--font-display)] tracking-wide">
                  OCEAN CREST
                </span>
                <span className="gold-line-left block mt-1" />
                <span className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">
                  Exports
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Delivering the finest Indian spices to the world. Quality, trust, and excellence in every shipment since establishment.
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-6">
                {Object.entries(companyInfo.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-gold/20 hover:text-gold transition-all cursor-pointer"
                    aria-label={name}
                  >
                    <span className="text-xs font-bold uppercase">{name[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors cursor-pointer">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Products</h3>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors cursor-pointer">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <p>{companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}, {companyInfo.address.country}</p>
                </div>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 shrink-0 text-gold" />
                  {companyInfo.phone}
                </a>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 shrink-0 text-gold" />
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Ocean Crest Exports. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/30">
              <Link href="/privacy" className="hover:text-gold/60 transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold/60 transition-colors cursor-pointer">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
