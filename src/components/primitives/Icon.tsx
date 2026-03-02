import { forwardRef, type SVGAttributes } from "react";
import { cn } from "./cn";

interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
  label?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 24, label, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("shrink-0", className)}
        aria-hidden={!label}
        aria-label={label}
        role={label ? "img" : "presentation"}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";
