"use client";

import { useEffect, useRef } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/primitives/cn";
import { NAV_ITEMS } from "./Navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      ref={menuRef}
      className={cn(
        "fixed inset-0 z-50 md:hidden flex flex-col bg-surface transition-all duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-end p-4">
        <button
          onClick={onClose}
          className="p-2 text-text-secondary hover:text-text-primary rounded-lg"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-6" aria-label="Mobile">
        {NAV_ITEMS.map((item, i) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <NextLink
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className={cn(
                "font-heading text-2xl font-semibold transition-colors",
                isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </NextLink>
          );
        })}
      </nav>
    </div>
  );
}
