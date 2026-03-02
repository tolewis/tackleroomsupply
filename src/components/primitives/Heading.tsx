import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "hero";
}

const sizeStyles = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  hero: "text-hero",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", size = "2xl", className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          "font-heading font-bold tracking-tight text-text-primary",
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";
