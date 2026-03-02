"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Season = "spring" | "summer" | "fall" | "winter";
type TimeOfDay = "dawn" | "morning" | "afternoon" | "dusk" | "night";

interface PersonalizationState {
  season: Season;
  timeOfDay: TimeOfDay;
  consentGiven: boolean;
  setConsent: (value: boolean) => void;
}

function getSeason(): Season {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  return "winter";
}

function getTimeOfDay(): TimeOfDay {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 20) return "dusk";
  return "night";
}

const PersonalizationContext = createContext<PersonalizationState>({
  season: "summer",
  timeOfDay: "morning",
  consentGiven: false,
  setConsent: () => {},
});

export function usePersonalization() {
  return useContext(PersonalizationContext);
}

export function PersonalizationProvider({ children }: { children: ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false);
  const [season, setSeason] = useState<Season>("summer");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("morning");

  useEffect(() => {
    const stored = localStorage.getItem("unhook-consent");
    if (stored === "true") setConsentGiven(true);
  }, []);

  useEffect(() => {
    if (!consentGiven) return;
    setSeason(getSeason());
    setTimeOfDay(getTimeOfDay());
  }, [consentGiven]);

  const setConsent = (value: boolean) => {
    setConsentGiven(value);
    localStorage.setItem("unhook-consent", String(value));
  };

  return (
    <PersonalizationContext.Provider
      value={{ season, timeOfDay, consentGiven, setConsent }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}
