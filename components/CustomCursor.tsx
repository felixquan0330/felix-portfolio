"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !canvasRef.current) return;
    initialized.current = true;

    import("webgl-fluid").then((webglFluidModule) => {
      const webglFluid = webglFluidModule.default;
      webglFluid(canvasRef.current!, {
        TRANSPARENT: true,
        IMMEDIATE: false,
        TRIGGER: "hover",
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2,
        VELOCITY_DISSIPATION: 1,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 4,
        CURL: 4,
        SPLAT_RADIUS: 0.9,
        SPLAT_FORCE: 5500,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 3,
        PAUSED: false,
        BACK_COLOR: { r: 10, g: 10, b: 10 },
        BLOOM: false,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: false,
        SUNRAYS_RESOLUTION: 64,
        SUNRAYS_WEIGHT: 0.5,
      });
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}