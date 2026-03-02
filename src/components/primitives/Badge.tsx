import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./cn";

type BadgeVariant = "default" | "forest" | "ember" | "creek" | "ridge";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-raised text-text-secondary border-border",
  forest: "bg-forest-500/15 text-forest-400 border-forest-500/25",
  ember: "bg-ember-500/15 text-ember-400 border-ember-500/25",
  creek: "bg-creek-500/15 text-creek-400 border-creek-500/25",
  ridge: "bg-ridge-500/15 text-ridge-400 border-ridge-500/25",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 font-heading text-xs font-medium transition-colors",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
