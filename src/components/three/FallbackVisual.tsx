"use client";

export function FallbackVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.16 0.006 75) 0%, oklch(0.23 0.05 145) 40%, oklch(0.19 0.03 75) 70%, oklch(0.16 0.006 75) 100%)",
        }}
      />
      {/* Topo lines overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/textures/topo-lines.svg)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: "url(/textures/noise.svg)",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
