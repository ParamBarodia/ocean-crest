import { cn } from "@/lib/utils";
import { forwardRef, type SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, id, options, placeholder, ...props }, ref) => {
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
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 bg-stone-100 border border-edge rounded-[var(--radius-sm)]",
            "text-ink",
            "transition-all duration-200 appearance-none",
            "focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20",
            "disabled:bg-stone-200/60 disabled:text-ink-muted disabled:cursor-not-allowed disabled:opacity-70",
            "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234A5568%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
            error && "border-error",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";
export { Select };
