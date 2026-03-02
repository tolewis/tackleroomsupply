"use client";

import { useState, useEffect } from "react";

type RenderBackend = "webgpu" | "webgl2" | "none";

export function useWebGPUSupport(): RenderBackend {
  const [backend, setBackend] = useState<RenderBackend>("none");

  useEffect(() => {
    async function detect() {
      // Check WebGPU
      if ("gpu" in navigator) {
        try {
          const adapter = await (navigator as unknown as { gpu: { requestAdapter: () => Promise<unknown> } }).gpu.requestAdapter();
          if (adapter) {
            setBackend("webgpu");
            return;
          }
        } catch {
          // WebGPU not available
        }
      }

      // Check WebGL2
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2");
        if (gl) {
          setBackend("webgl2");
          return;
        }
      } catch {
        // WebGL2 not available
      }

      setBackend("none");
    }

    detect();
  }, []);

  return backend;
}
