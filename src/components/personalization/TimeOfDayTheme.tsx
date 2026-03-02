"use client";

import { useEffect } from "react";
import { usePersonalization } from "./PersonalizationProvider";

const hueMap = {
  dawn: 30,
  morning: 80,
  afternoon: 145,
  dusk: 25,
  night: 250,
};

export function TimeOfDayTheme() {
  const { timeOfDay, consentGiven } = usePersonalization();

  useEffect(() => {
    if (!consentGiven) return;
    document.documentElement.style.setProperty(
      "--ambient-hue",
      String(hueMap[timeOfDay])
    );
  }, [timeOfDay, consentGiven]);

  return null;
}
