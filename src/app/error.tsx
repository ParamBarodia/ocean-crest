"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-stone">
      <div className="text-center px-6">
        <div className="text-6xl font-bold text-gold/15 font-[family-name:var(--font-display)]">
          Error
        </div>
        <h1 className="mt-4 text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
          Something went wrong
        </h1>
        <p className="mt-3 text-ink-muted max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="mt-8">
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </section>
  );
}
