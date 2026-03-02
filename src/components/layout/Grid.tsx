import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/components/primitives/cn";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const colStyles = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapStyles = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, gap = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid", colStyles[cols], gapStyles[gap], className)}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
