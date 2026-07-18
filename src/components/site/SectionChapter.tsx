"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionViewport } from "@/lib/motion";

/**
 * Editorial chapter marker — a Subsector-inspired detail that gives every
 * homepage section a numbered "chapter" with a hairline rule:
 *
 *   PARTNERS ————————————————————— 01 / 10
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
      <span className="chapter-mark__line" />
      <span className="chapter-mark__num">
        {String(index).padStart(2, "0")}
        <span className="chapter-mark__total"> / {String(total).padStart(2, "0")}</span>
      </span>
    </motion.div>
  );
}
