import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./cn";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  variant?: "primary" | "secondary" | "muted";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
}

const variantStyles = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
};

const sizeStyles = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { as: Tag = "p", variant = "primary", size = "base", className, ...props },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        className={cn(variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
