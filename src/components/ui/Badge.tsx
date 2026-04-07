import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "gold" | "spice" | "teal";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-stone-100 text-ink-muted",
  gold: "bg-gold/10 text-gold",
  spice: "bg-spice/10 text-spice",
  teal: "bg-teal/10 text-teal",
};

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
