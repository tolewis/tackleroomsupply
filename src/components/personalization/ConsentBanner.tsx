"use client";

import { useState, useEffect } from "react";
import { usePersonalization } from "./PersonalizationProvider";
import { Button } from "@/components/primitives/Button";

export function ConsentBanner() {
  const { consentGiven, setConsent } = usePersonalization();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("unhook-consent");
    if (stored === null) setDismissed(false);
  }, []);

  if (consentGiven || dismissed) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-border bg-surface-raised p-4 shadow-xl"
      role="dialog"
      aria-label="Personalization consent"
    >
      <p className="text-sm text-text-secondary mb-3">
        We use your local time and season to personalize the experience.
        No tracking. No cookies shared with third parties.
      </p>
      <div className="flex gap-2">
        <Button
          variant="primary"
          size="sm"
          onClick={() => setConsent(true)}
        >
          Sounds good
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setDismissed(true);
            localStorage.setItem("unhook-consent", "false");
          }}
        >
          No thanks
        </Button>
      </div>
    </div>
  );
}
