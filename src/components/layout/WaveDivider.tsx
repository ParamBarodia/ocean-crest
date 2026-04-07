import { cn } from "@/lib/utils";

interface WaveDividerProps {
  variant?: "top" | "bottom";
  color?: string;
  className?: string;
}

export function WaveDivider({ variant = "top", color = "var(--color-stone)", className }: WaveDividerProps) {
  return (
    <svg
      className={cn("w-full h-10 md:h-16", variant === "top" && "rotate-180", className)}
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      fill={color}
    >
      <path d="M0,32 C240,56 480,8 720,32 C960,56 1200,8 1440,32 L1440,64 L0,64 Z" />
    </svg>
  );
}
