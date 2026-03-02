import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/components/primitives/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingStyles = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24",
  xl: "py-24 sm:py-32",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(spacingStyles[spacing], className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
