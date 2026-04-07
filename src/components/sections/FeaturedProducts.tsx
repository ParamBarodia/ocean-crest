import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { products } from "@/lib/constants/products";

export function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-shell">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Our Products"
            title="Finest Export-Grade Products"
            subtitle="Carefully sourced and processed to meet the highest international quality standards."
            align="left"
            className="mb-0"
          />
          <Link
            href="/products"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-ocean-light font-medium hover:text-ocean-deep transition-colors shrink-0"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {featured.map((product) => (
            <StaggerItem key={product.slug}>
              <Link href={`/products/${product.slug}`} className="group block h-full">
                <Card className="h-full">
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-sand-light to-shell relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary/30">
                      <span className="text-4xl">🌿</span>
                    </div>
                    <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/10 transition-colors duration-300" />
                  </div>
                  <CardContent>
                    <Badge variant="gold" className="mb-2">{product.category}</Badge>
                    <h3 className="text-lg font-semibold text-primary font-[family-name:var(--font-display)] group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
