import { forwardRef, type HTMLAttributes } from "react";

type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} className="sr-only" {...props}>
        {children}
      </span>
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";
