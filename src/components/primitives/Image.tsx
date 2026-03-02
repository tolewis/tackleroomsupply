"use client";

import { forwardRef, type ImgHTMLAttributes } from "react";
import ExportedImage from "next-image-export-optimizer";
import { cn } from "./cn";

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, ...props }, ref) => {
    return (
      <ExportedImage
        ref={ref}
        alt={alt}
        className={cn("rounded-lg", className)}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";
