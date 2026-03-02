"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/primitives/cn";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Stories", href: "/adventure" },
  { label: "Gear", href: "/gear" },
  { label: "Species", href: "/food" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden md:flex items-center gap-1", className)} aria-label="Main">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <NextLink
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-2 rounded-lg font-heading text-sm font-medium transition-colors",
              isActive
                ? "text-text-primary bg-surface-raised"
                : "text-text-secondary hover:text-text-primary hover:bg-surface-raised"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </NextLink>
        );
      })}
    </nav>
  );
}
