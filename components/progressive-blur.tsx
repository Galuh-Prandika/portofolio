/**
 * Progressive blur strip pinned to the top of the viewport.
 * Replicates the effect from joyceis.online: 10 stacked layers, each with an
 * increasing `backdrop-filter: blur()` (0 → 2.25px, step 0.25px) and an
 * overlapping linear-gradient mask (step 100/11 ≈ 9.09%). The overlapping masks
 * + compounding backdrop-filters produce a smooth top-edge blur gradient.
 */
const LAYERS = 10;
const BLUR_STEP = 0.25; // px per layer → max 2.25px
const STEP = 100 / (LAYERS + 1); // 9.0909%

export function ProgressiveBlur() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-60 overflow-hidden"
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
