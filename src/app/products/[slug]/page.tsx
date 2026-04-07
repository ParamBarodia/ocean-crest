import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { products, getProductBySlug } from "@/lib/constants/products";
import { companyInfo } from "@/lib/constants/navigation";
import { StructuredData, productSchema } from "@/components/seo/StructuredData";

const productImages: Record<string, string> = {
  "garlic-powder": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?w=600&q=80",
  "turmeric-powder": "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
  "red-chilli-powder": "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80",
  "black-pepper": "https://images.unsplash.com/photo-1599909631715-43e0d09e7744?w=600&q=80",
  "cardamom": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=600&q=80",
  "cumin-seeds": "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80",
  "coriander-seeds": "https://images.unsplash.com/photo-1599909631715-43e0d09e7744?w=600&q=80",
  "dehydrated-onion": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80",
  "sesame-seeds": "https://images.unsplash.com/photo-1508747703725-719777637510?w=600&q=80",
  "mustard-oil": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
  "cinnamon-sticks": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&q=80",
  "fennel-seeds": "https://images.unsplash.com/photo-1599909631715-43e0d09e7744?w=600&q=80",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    `Hello Ocean Crest! I'm interested in ${product.name}. Could you share pricing and availability?`
  )}`;

  return (
    <>
      <StructuredData data={productSchema(product)} />
      {/* Breadcrumb + Hero */}
      <section className="relative bg-primary pt-28 pb-16">
        <svg className="absolute bottom-0 left-0 w-full h-12 text-stone" viewBox="0 0 1440 48" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,36 1440,30 L1440,48 L0,48 Z" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 lg:py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="aspect-square rounded-[var(--radius-lg)] overflow-hidden shadow-card sticky top-24 relative group">
                <Image
                  src={productImages[product.slug] || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <Badge variant="gold" className="mb-3">{product.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-primary font-[family-name:var(--font-display)]">
                {product.name}
              </h1>
              <p className="mt-4 text-ink-muted leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-primary mb-4 font-[family-name:var(--font-display)]">Key Features</h2>
                <ul className="space-y-2.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/contact?product=${product.slug}`}>
                  <Button size="lg">
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Specifications */}
          <ScrollReveal className="mt-16">
            <h2 className="text-2xl font-semibold text-primary font-[family-name:var(--font-display)] mb-6">Specifications</h2>
            <div className="bg-white rounded-[var(--radius-md)] shadow-card overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], i) => (
                    <tr key={key} className={i % 2 === 0 ? "bg-stone-100/50" : "bg-white"}>
                      <td className="px-6 py-3.5 text-sm font-medium text-primary w-1/3">{key}</td>
                      <td className="px-6 py-3.5 text-sm text-ink-muted">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-semibold text-primary font-[family-name:var(--font-display)] mb-8">Related Products</h2>
              <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {related.map((rp) => (
                  <StaggerItem key={rp.slug}>
                    <Link href={`/products/${rp.slug}`} className="group block">
                      <Card>
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <Image
                            src={productImages[rp.slug] || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"}
                            alt={rp.name}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-colors duration-300" />
                        </div>
                        <CardContent>
                          <Badge variant="gold" className="mb-2">{rp.category}</Badge>
                          <h3 className="font-semibold text-primary font-[family-name:var(--font-display)] group-hover:text-gold transition-colors">{rp.name}</h3>
                          <p className="mt-1 text-sm text-ink-muted line-clamp-2">{rp.shortDescription}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
