"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionViewport } from "@/lib/motion";

function KitchenFaucetMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="10.5" y="24.5" width="11" height="2.2" rx="1.1" fill="currentColor" opacity="0.85" />
      <path d="M15.2 24.5V13.2" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <path
        d="M15.2 13.2H21.2C24.2 13.2 25.8 14.8 25.8 17.2V19"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25.8 19V21.2" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" opacity="0.55" />
      <path d="M16.8 15.2V18.4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <circle cx="16.8" cy="19.6" r="1.05" fill="currentColor" />
      <path d="M13.2 11.2L15.2 13.2" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/**
 * Editorial chapter marker with a kitchen signature emblem.
 *
 *   PARTNERS  [faucet mark]                              01 / 10
 */
export function SectionChapter({
  index,
  total = 10,
  label,
  light = false,
  className = "",
}: {
  index: number;
  total?: number;
  label: string;
  light?: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`chapter-mark ${light ? "chapter-mark--light" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className="chapter-mark__label">{label}</span>
      <motion.span
        className="chapter-mark__kitchen-emblem"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -8 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
        viewport={motionViewport}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <span className="chapter-mark__kitchen-glow" />
        <KitchenFaucetMark />
      </motion.span>
      <span className="chapter-mark__spacer" />
      <span className="chapter-mark__num">
        {String(index).padStart(2, "0")}
        <span className="chapter-mark__total"> / {String(total).padStart(2, "0")}</span>
      </span>
    </motion.div>
  );
}
