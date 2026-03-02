"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
} from "react";
import { cn } from "./cn";

interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose: () => void;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, open, onClose, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDialogElement>(null);
    const dialogRef = (ref as React.RefObject<HTMLDialogElement>) || internalRef;

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      },
      [onClose]
    );

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (open) {
        dialog.showModal();
        document.addEventListener("keydown", handleKeyDown);
      } else {
        dialog.close();
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open, dialogRef, handleKeyDown]);

    return (
      <dialog
        ref={dialogRef}
        className={cn(
          "backdrop:bg-stone-950/80 open:animate-in open:fade-in bg-surface-raised border border-border rounded-xl p-6 max-w-lg w-full text-text-primary",
          className
        )}
        {...props}
      >
        {children}
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";
