"use client";

/**
 * framer-motion elements re-exported from a client module so server
 * components can use them with plain (serialisable) animation props.
 * Each section passes the exact values used on the reference site.
 */
import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export const MotionDiv = motion.div;
export const MotionA = motion.a;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH3 = motion.h3;
export const MotionLi = motion.li;

/** Respect the OS "reduce motion" setting: keeps fades, drops movement. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
