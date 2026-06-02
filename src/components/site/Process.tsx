"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Shop, Brush2, Layer, Gallery, People, ArrowRight2 } from "iconsax-react";

const steps = [
  {
    n: "01",
    t: "Kies merk",
    d: "Selecteer uit de mooiste keukenmerken van Europa",
    Icon: Shop,
  },
  {
    n: "02",
    t: "Kies stijl",
    d: "Bepaal de architectonische uitstraling",
    Icon: Brush2,
  },
  {
    n: "03",
    t: "Samenstellen",
    d: "Personaliseer elk materiaal en iedere afwerking",
    Icon: Layer,
  },
  {
    n: "04",
    t: "Moodboard",
    d: "Ontvang uw persoonlijk ontwerpvoorstel",
    Icon: Gallery,
  },
  {
    n: "05",
    t: "Consultatie",
    d: "Bespreek alles met uw persoonlijke ontwerpadviseur",
    Icon: People,
  },
] as const;

const viewport = { once: true, margin: "-80px" };

const staggerHeader: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stepReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function progressPercent(index: number) {
  if (steps.length <= 1) return 0;
  return (index / (steps.length - 1)) * 100;
}

export function Process() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const timelineParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const highlightIndex = hoveredStep ?? activeStep;
  const fillPercent =
    highlightIndex !== null ? progressPercent(highlightIndex) : 0;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#17191C] py-24 text-white md:py-36"
    >
      {/* ── Layered Luxury Architectural Atmosphere ──────────────────────── */}
      {/* Dark accents (#111315) Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, #111315 100%)",
        }}
      />

      {/* Secondary Volumetric Architectural Glow (#1E2023) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[120%] w-[90%] rounded-full blur-[140px] opacity-45"
        style={{
          background: "radial-gradient(circle at 30% 30%, #1E2023 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20%] -bottom-[20%] h-[120%] w-[90%] rounded-full blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle at 70% 70%, #1E2023 0%, transparent 70%)",
        }}
      />

      {/* Subtle Radial Lighting behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, #1E2023 0%, transparent 75%)",
        }}
      />

      {/* Soft Gold Ambient Glow (Muted Gold: rgba(200, 169, 107, 0.04)) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(200, 169, 107, 0.7) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] bottom-[20%] h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full blur-[200px] opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, rgba(200, 169, 107, 0.6) 0%, transparent 70%)",
        }}
      />

      {/* Material Depth: Ultra subtle grain texture (Opacity: 3.5%) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='fine-grain'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23fine-grain)'/></svg>")`,
        }}
      />

      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.15)] to-transparent"
      />
      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-20 text-center md:mb-28"
        >
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-7 flex items-center justify-center gap-5"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[rgba(200,169,107,0.45)]" />
            <span
              style={{ fontFamily: "'Jost', sans-serif" }}
              className="text-[10px] font-light tracking-[0.32em] text-[#C8A96B]"
            >
              Het proces
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[rgba(200,169,107,0.45)]" />
          </motion.div>

          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="mx-auto max-w-[46rem] text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#F5F2EC]"
          >
            Van concept tot <em className="italic text-[#C8A96B]">creatie</em>
          </motion.h2>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="mx-auto mt-6 max-w-sm text-[13px] font-light leading-[1.9] text-[rgba(244,239,230,0.38)]"
          >
            Vijf zorgvuldig uitgedachte stappen naar uw droomkeuken
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          style={reduceMotion ? undefined : { y: timelineParallax }}
        >
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-8 hidden h-px overflow-hidden md:block"
          >
            <div className="absolute inset-0 bg-[rgba(201,168,76,0.12)]" />
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[rgba(201,168,76,0.18)] to-[rgba(201,168,76,0.55)] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${fillPercent}%` }}
            />
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:gap-0">
            {steps.map(({ n, t, d, Icon }, index) => {
              const isOn = highlightIndex === index;

              return (
                <motion.div
                  key={n}
                  custom={index}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={viewport}
                  variants={reduceMotion ? undefined : stepReveal}
                  className="w-full md:flex-1"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((prev) => (prev === index ? null : index))
                    }
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="group relative z-10 w-full cursor-pointer text-left normal-case tracking-normal md:px-4 md:text-center"
                    style={{ textTransform: "none", letterSpacing: "normal" }}
                  >
                    <div className="relative flex items-start gap-5 md:flex-col md:items-center">

                      {/* Node */}
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                        {/* Corner brackets */}
                        <span
                          className={[
                            "absolute left-0 top-0 h-3 w-3 border-l border-t transition-[border-color,opacity] duration-300",
                            isOn
                              ? "border-[rgba(201,168,76,0.72)] opacity-100"
                              : "border-[rgba(201,168,76,0.2)] opacity-60",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "absolute right-0 top-0 h-3 w-3 border-r border-t transition-[border-color,opacity] duration-300",
                            isOn
                              ? "border-[rgba(201,168,76,0.72)] opacity-100"
                              : "border-[rgba(201,168,76,0.2)] opacity-60",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "absolute bottom-0 left-0 h-3 w-3 border-b border-l transition-[border-color,opacity] duration-300",
                            isOn
                              ? "border-[rgba(201,168,76,0.72)] opacity-100"
                              : "border-[rgba(201,168,76,0.2)] opacity-60",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "absolute bottom-0 right-0 h-3 w-3 border-b border-r transition-[border-color,opacity] duration-300",
                            isOn
                              ? "border-[rgba(201,168,76,0.72)] opacity-100"
                              : "border-[rgba(201,168,76,0.2)] opacity-60",
                          ].join(" ")}
                        />

                        {/* Inner fill */}
                        <div
                          className={[
                            "absolute inset-[5px] transition-[background] duration-[400ms]",
                            isOn
                              ? "bg-[rgba(22,17,6,0.97)]"
                              : "bg-[rgba(12,10,3,0.82)]",
                          ].join(" ")}
                        />

                        {/* Number */}
                        <span
                          style={{ fontFamily: "'Jost', sans-serif" }}
                          className={[
                            "relative z-10 text-[11px] font-light tracking-[0.14em] text-[rgba(201,168,76,0.65)] transition-[opacity,transform] duration-200",
                            isOn ? "scale-75 opacity-0" : "scale-100 opacity-100",
                          ].join(" ")}
                        >
                          {n}
                        </span>

                        {/* Iconsax Icon */}
                        <span
                          className={[
                            "absolute inset-0 z-10 flex items-center justify-center transition-[opacity,transform] duration-[340ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                            isOn ? "scale-100 opacity-100" : "scale-50 opacity-0",
                          ].join(" ")}
                        >
                          <Icon
                            size={22}
                            color="#C9A84C"
                            variant="TwoTone"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      {/* Dot connector */}
                      <div className="hidden md:flex md:flex-col md:items-center">
                        <div
                          className={[
                            "mt-3 h-[5px] w-[5px] rounded-full transition-[background,box-shadow] duration-[350ms]",
                            isOn
                              ? "bg-[#C9A84C] shadow-[0_0_12px_rgba(201,168,76,0.45)]"
                              : "bg-[rgba(201,168,76,0.16)]",
                          ].join(" ")}
                        />
                      </div>

                      {/* Text */}
                      <div className="md:mt-6">
                        <h3
                          className={[
                            "font-serif text-[1.2rem] font-normal leading-[1.35] tracking-[-0.02em] transition-colors duration-[350ms]",
                            isOn ? "text-[#F4EFE6]" : "text-[rgba(244,239,230,0.62)]",
                          ].join(" ")}
                        >
                          {t}
                        </h3>
                        <p
                          className={[
                            "mt-2.5 max-w-[115px] text-[0.875rem] font-light leading-[1.75] tracking-[0.01em] transition-colors duration-[350ms] md:mx-auto",
                            isOn
                              ? "text-[rgba(244,239,230,0.55)]"
                              : "text-[rgba(244,239,230,0.3)]",
                          ].join(" ")}
                        >
                          {d}
                        </p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={
            reduceMotion
              ? undefined
              : { delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }
          className="mt-20 flex flex-col items-center gap-8 md:mt-28"
        >
          <span className="block h-8 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.28)] to-transparent" />

          <a
            href="/brands"
            style={{ fontFamily: "'Jost', sans-serif" }}
            className={[
              "group relative inline-flex h-[52px] items-center justify-center gap-3.5 overflow-hidden",
              "rounded-[14px] border border-[rgba(244,239,230,0.14)] bg-transparent px-11",
              "text-[11px] font-light tracking-[0.22em] text-[rgba(244,239,230,0.72)]",
              "transition-[border-color,background,color,transform,box-shadow] duration-[380ms] ease-out",
              "hover:-translate-y-0.5 hover:border-[rgba(201,168,76,0.42)] hover:bg-[rgba(201,168,76,0.04)]",
              "hover:text-[#F4EFE6] hover:shadow-[0_8px_32px_-12px_rgba(201,168,76,0.2)]",
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_at_50%_130%,rgba(201,168,76,0.09),transparent_55%)] opacity-0 transition-opacity duration-[380ms] group-hover:opacity-100"
            />
            <span className="relative">Begin uw traject</span>
            <ArrowRight2
              size={14}
              color="currentColor"
              className="relative transition-transform duration-[350ms] group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}