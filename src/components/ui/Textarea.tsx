import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    const describedBy = error
      ? `${inputId}-error`
      : helperText
      ? `${inputId}-help`
      : undefined;
    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-sm font-medium text-ink">
          {label}
          {props.required && <span className="text-error ms-0.5">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={4}
          className={cn(
            "w-full px-4 py-3 bg-stone-100 border border-edge rounded-[var(--radius-sm)]",
            "text-ink placeholder:text-text-secondary/50",
            "transition-all duration-200 resize-y min-h-[120px]",
            "focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20",
            "disabled:bg-stone-200/60 disabled:text-ink-muted disabled:cursor-not-allowed disabled:opacity-70",
            error && "border-error focus:border-error focus:ring-error/20",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...props}
        />
        {error ? (
          <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-help`} className="text-xs text-ink-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
