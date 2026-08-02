"use client";

import { useEffect, useState } from "react";

/**
 * Floating "Back to top" pill, bottom-right. Appears once the user scrolls away
 * from the very top and fades out when back at the top. Click smooth-scrolls up.
 */
function smoothScrollToTop() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const start = window.scrollY;
  if (reduceMotion || start === 0) {
    window.scrollTo(0, 0);
    return;
  }

  // Duration scales with distance (clamped) so short/long scrolls feel even.
  const duration = Math.min(900, Math.max(450, start * 0.6));
  const startTime = performance.now();
  // easeInOutCubic — gentle start and finish, no snap.
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start * (1 - ease(t)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={smoothScrollToTop}
      className={`fixed bottom-4 right-4 z-50 flex h-10 items-center gap-1.5 rounded-full bg-[#0d0d0d] px-4 text-[12px] font-medium leading-none text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      Back to top
    </button>
  );
}
