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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Open/close through the native dialog API. showModal() gives us the
  // modal scroll lock, Escape-to-close, focus management, and ::backdrop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Escape / history-back / closedby="any" close the dialog outside of our
  // prop; sync the parent state from the native "close" event.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handle = () => closeRef.current();
    dialog.addEventListener("close", handle);
    return () => dialog.removeEventListener("close", handle);
  }, []);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-label="Mobile navigation"
      className={cn(
        "fixed inset-0 z-50 md:hidden m-0 h-full w-full max-w-none border-0 p-0",
        "hidden open:flex flex-col bg-surface backdrop:bg-surface"
      )}
    >
      <div className="flex items-center justify-end p-4">
        <button
          onClick={() => dialogRef.current?.close()}
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
              autoFocus={i === 0}
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
    </dialog>
  );
}
