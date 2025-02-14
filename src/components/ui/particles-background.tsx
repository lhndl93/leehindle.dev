"use client";

import { useEffect, useCallback } from "react";
import { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

declare global {
  interface Window {
    tsParticles: Engine;
  }
}

export function ParticlesBackground() {
  const initParticles = useCallback(async () => {
    if (typeof window !== 'undefined') {
      await loadSlim(window.tsParticles);

      await window.tsParticles.load({
        id: "tsparticles",
        options: {
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.1,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  return (
    <div id="tsparticles" className="fixed inset-0 -z-10 animate-fade-in" />
  );
} 