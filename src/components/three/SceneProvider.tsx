"use client";

import { Suspense, lazy, type ReactNode } from "react";
import { useWebGPUSupport } from "./use-webgpu-support";
import { useReducedMotion } from "./use-reduced-motion";
import { FallbackVisual } from "./FallbackVisual";

const HeroTerrain = lazy(() =>
  import("./HeroTerrain").then((m) => ({ default: m.HeroTerrain }))
);

interface SceneProviderProps {
  fallback?: ReactNode;
  className?: string;
}

export function SceneProvider({ fallback, className }: SceneProviderProps) {
  const backend = useWebGPUSupport();
  const reducedMotion = useReducedMotion();

  // No 3D support or reduced motion → CSS fallback
  if (backend === "none" || reducedMotion) {
    return (
      <div className={className}>
        {fallback || <FallbackVisual />}
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={fallback || <FallbackVisual />}>
        <HeroTerrain />
      </Suspense>
    </div>
  );
}
