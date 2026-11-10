/**
 * Animation presets matching the reference site's framer-motion config.
 *
 * Reference behaviour worth knowing:
 * - Scroll reveals use `viewport: { once: false }`, so they replay every time
 *   an element re-enters the screen (and reset when it leaves).
 * - Transitions only set `duration` (and sometimes `delay`), so framer's
 *   default tween easing applies ("easeInOut") unless `ease` is given.
 */
import type { TargetAndTransition, Transition } from "framer-motion";

type From = { x?: number; y?: number; scale?: number; rotate?: number; opacity?: number };

/** Resting values each property returns to, unless overridden with `to`. */
const rest = { x: 0, y: 0, scale: 1, rotate: 0 } as const;

/**
 * Scroll-triggered reveal: animates `from` → resting values (plus opacity 0 → 1)
 * whenever the element enters the viewport.
 */
export function inView(
  from: From,
  transition: Transition,
  to: Partial<Record<keyof typeof rest, number>> = {},
) {
  const target: TargetAndTransition = { opacity: 1 };
  for (const key of Object.keys(from) as (keyof From)[]) {
    if (key === "opacity") continue;
    target[key] = to[key as keyof typeof rest] ?? rest[key as keyof typeof rest];
  }
  return {
    initial: { opacity: 0, ...from },
    whileInView: target,
    viewport: { once: false },
    transition,
  };
}

/** On-mount entrance (used in the hero, which is visible on load). */
export function onMount(from: From, transition: Transition) {
  const target: TargetAndTransition = { opacity: 1 };
  for (const key of Object.keys(from) as (keyof From)[]) {
    if (key === "opacity") continue;
    target[key] = rest[key as keyof typeof rest];
  }
  return { initial: { opacity: 0, ...from }, animate: target, transition };
}
