import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-stone">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-gold/15 font-[family-name:var(--font-display)]">
          404
        </div>
        <h1 className="mt-4 text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
          Page Not Found
        </h1>
        <p className="mt-3 text-ink-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline">Browse Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
