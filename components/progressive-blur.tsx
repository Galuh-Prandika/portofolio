"use client";

import { useEffect, useState } from "react";

/**
 * Progressive blur strip pinned to the top of the viewport.
 * Replicates the effect from joyceis.online: 10 stacked layers, each with an
 * increasing `backdrop-filter: blur()` (0 → 2.25px, step 0.25px) and an
 * overlapping linear-gradient mask (step 100/11 ≈ 9.09%).
 *
 * On mobile the strip fades in only once the user starts scrolling (so top
 * content stays sharp at rest). On desktop it is always active.
 */
const LAYERS = 10;
const BLUR_STEP = 0.25; // px per layer → max 2.25px
const STEP = 100 / (LAYERS + 1); // 9.0909%
const SCROLL_THRESHOLD = 8; // px scrolled before the blur activates on mobile

export function ProgressiveBlur() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 h-60 overflow-hidden transition-opacity duration-300 md:opacity-100 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      {Array.from({ length: LAYERS }).map((_, i) => {
        const gradient = `linear-gradient(0deg, rgba(0,0,0,0) ${i * STEP}%, rgb(0,0,0) ${(i + 1) * STEP}%, rgb(0,0,0) ${(i + 2) * STEP}%, rgba(0,0,0,0) ${(i + 3) * STEP}%)`;
        const blur = `blur(${i * BLUR_STEP}px)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: blur,
              WebkitBackdropFilter: blur,
              maskImage: gradient,
              WebkitMaskImage: gradient,
            }}
          />
        );
      })}
    </div>
  );
}
