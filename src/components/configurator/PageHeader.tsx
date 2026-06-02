"use client";

import { motion } from "framer-motion";

export function PageHeader({
  overline,
  title,
  subtitle,
  light = false,
}: {
  overline?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 text-center md:mb-20">
      {overline ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-[0.62rem] uppercase tracking-[0.24em] text-[#B08D57] md:text-[0.6875rem]"
        >
          {overline}
        </motion.p>
      ) : null}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-[680px] text-[clamp(2rem,9vw,3rem)] leading-[1.12] tracking-[-0.02em] md:leading-[1.15] md:tracking-[-0.01em]"
        style={{
          fontFamily: '"Playfair Display", "Georgia", serif',
          fontWeight: 400,
          color: light ? "#F7F5F2" : "#111111",
        }}
      >
        {title}
      </motion.h1>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-3 max-w-[560px] text-[0.98rem] font-light leading-[1.65] md:text-[1.125rem] md:leading-[1.6]"
          style={{ color: light ? "rgba(247,245,242,0.7)" : "#666666" }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
