"use client";

import { useState } from "react";
import NextLink from "next/link";
import { cn } from "@/components/primitives/cn";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-border-subtle bg-surface/80 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NextLink
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          >
            TackleRoom
            <span className="text-accent"> Supply</span>
          </NextLink>

          <Navigation />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-colors md:hidden"
              aria-label="Open menu"
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
