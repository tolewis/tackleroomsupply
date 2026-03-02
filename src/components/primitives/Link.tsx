import { forwardRef, type AnchorHTMLAttributes } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { cn } from "./cn";

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps {
  variant?: "default" | "muted" | "nav";
  external?: boolean;
}

const variantStyles = {
  default:
    "text-accent hover:text-accent-hover underline underline-offset-4 decoration-accent/40 hover:decoration-accent",
  muted:
    "text-text-muted hover:text-text-secondary transition-colors",
  nav: "text-text-secondary hover:text-text-primary font-heading font-medium transition-colors",
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", external, ...props }, ref) => {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <NextLink
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...externalProps}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
