"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Shop, Brush2, Layer, Gallery, People } from "iconsax-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { SectionChapter } from "@/components/site/SectionChapter";

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-80px" };

const staggerHeader: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: luxuryEase } },
};

const stepReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.80, delay: i * 0.09, ease: luxuryEase },
  }),
};

// ─── Component ───────────────────────────────────────────────────────────────

export function Process() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeCount, setActiveCount] = useState(0);

  // Single scroll tracker for both parallax and step activation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the whole timeline group
  const timelineParallax = useTransform(scrollYProgress, [0, 1], [10, -10]);

  // Scroll-driven activation: map section's [0.18 → 0.72] to [0 → steps.length]
  useEffect(() => {
    if (reduceMotion) {
      setActiveCount(steps.length);
      return;
    }
    return scrollYProgress.on("change", (v) => {
      const normalized = Math.max(0, Math.min(1, (v - 0.18) / 0.54));
      setActiveCount(Math.round(normalized * steps.length));
    });
  }, [scrollYProgress, reduceMotion]);

  // Progress line fill width (0–100%)
  const linePercent =
    activeCount <= 1
      ? 0
      : ((activeCount - 1) / (steps.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-shell relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #0D0F0A 0%, #12140E 50%, #0C0E09 100%)" }}
    >
      {/* ── Background layers ── */}

      {/* 1. Central architectural brand-green bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[220px]"
        style={{ background: "radial-gradient(circle, rgba(139,197,64,0.11), transparent 62%)" }}
      />

      {/* 2. Top-left directional spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[22%] h-[85vh] w-[85vh] rounded-full blur-[170px] opacity-50"
        style={{ background: "radial-gradient(circle, rgba(139,197,64,0.14), transparent 58%)" }}
      />

      {/* 3. Bottom-right ambient fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[18%] -right-[14%] h-[60vh] w-[60vh] rounded-full blur-[150px] opacity-35"
        style={{ background: "radial-gradient(circle, rgba(139,197,64,0.10), transparent 65%)" }}
      />

      {/* 4. Warm-black edge vignette — depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 42%, #070805 100%)" }}
      />

      {/* 5. Fine grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23g)'/></svg>")`,
        }}
      />

      {/* 6. Top hairline — teal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,197,64,0.26), transparent)" }}
      />

      {/* 7. Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,197,64,0.10), transparent)" }}
      />

      <div className="site-container relative max-w-6xl">
        <SectionChapter index={7} label="Proces" light />

        {/* ── Section header ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-20 text-center md:mb-28"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-7 flex items-center justify-center gap-5"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[rgba(139,197,64,0.45)]" />
            <span
              className="text-[10px] font-light tracking-[0.32em] text-[#A8D95A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Het proces
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[rgba(139,197,64,0.45)]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto max-w-[46rem] font-serif text-[clamp(2.35rem,3.9vw,3.25rem)] font-light leading-[1.12] tracking-[-0.02em] text-[#F7F4EE]"
          >
            Van concept tot{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(128deg, #A8D95A 0%, #C5E88A 48%, #8BC540 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              creatie
            </em>
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mt-6 max-w-sm text-[13px] font-light leading-[1.9] text-[rgba(247,244,238,0.38)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vijf zorgvuldig uitgedachte stappen naar uw droomkeuken
          </motion.p>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          className="relative"
          style={reduceMotion ? undefined : { y: timelineParallax }}
        >
          {/* ── Animated progress line (desktop only) ── */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 hidden overflow-visible md:block"
            style={{ top: "32px" }}
          >
            {/* Track */}
            <div
              className="h-px w-full"
              style={{ background: "rgba(139,197,64,0.10)" }}
            />

            {/* Animated fill */}
            <div
              className="absolute left-0 top-0 h-px"
              style={{
                width: `${linePercent}%`,
                background: "linear-gradient(90deg, rgba(139,197,64,0.45), rgba(197,232,138,0.90))",
                transition: "width 700ms cubic-bezier(0.22,1,0.36,1)",
              }}
            />

            {/* Glowing leading dot */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `calc(${linePercent}% - 5px)`,
                height: "10px",
                width: "10px",
                transform: "translateY(-50%)",
                borderRadius: "9999px",
                background: "#A8D95A",
                boxShadow: "0 0 14px rgba(139,197,64,0.90), 0 0 28px rgba(139,197,64,0.50)",
                opacity: linePercent > 0 ? 1 : 0,
                transition: "left 700ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease",
              }}
            />
          </div>

          {/* ── Steps ── */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-0">
            {steps.map(({ n, t, d, Icon }, index) => {
              const isScrollActive = index < activeCount;
              const isHovered = hoveredStep === index;
              const isOn = isScrollActive || isHovered;

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
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className="group relative z-10 w-full cursor-default text-left normal-case tracking-normal md:px-4 md:text-center"
                  >
                    <div className="relative flex items-start gap-5 md:flex-col md:items-center">

                      {/* ── Glass Node ── */}
                      <div
                        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: isOn
                            ? "rgba(139,197,64,0.09)"
                            : "rgba(17,19,13,0.72)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: isOn
                            ? "rgba(139,197,64,0.55)"
                            : "rgba(139,197,64,0.13)",
                          backdropFilter: "blur(12px)",
                          transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
                          transform:
                            isHovered && !reduceMotion
                              ? "translateY(-4px) scale(1.05)"
                              : "translateY(0) scale(1)",
                        }}
                      >
                        {/* Glow ring — fades in on active */}
                        <div
                          className="pointer-events-none absolute inset-0 rounded-full"
                          style={{
                            boxShadow: "0 0 22px rgba(139,197,64,0.32), 0 0 0 5px rgba(139,197,64,0.07), 0 8px 32px rgba(0,0,0,0.30)",
                            opacity: isOn ? 1 : 0,
                            transition: "opacity 500ms ease",
                          }}
                        />

                        {/* Step number — tiny label inside top */}
                        <span
                          className="pointer-events-none absolute left-1/2 top-[9px] -translate-x-1/2"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.55rem",
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            color: isOn
                              ? "rgba(139,197,64,0.78)"
                              : "rgba(139,197,64,0.30)",
                            transition: "color 500ms ease",
                          }}
                        >
                          {n}
                        </span>

                        {/* Icon */}
                        <div
                          style={{
                            opacity: isOn ? 1 : 0.32,
                            transform:
                              isHovered && !reduceMotion ? "scale(1.10)" : "scale(1)",
                            transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                          }}
                        >
                          <Icon
                            size={20}
                            color={isOn ? "#A8D95A" : "rgba(139,197,64,0.55)"}
                            variant="TwoTone"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {/* ── Connector dot (desktop) ── */}
                      <div className="hidden md:flex md:flex-col md:items-center">
                        <div
                          className="mt-3"
                          style={{
                            height: "5px",
                            width: "5px",
                            borderRadius: "9999px",
                            background: isScrollActive ? "#A8D95A" : "rgba(139,197,64,0.16)",
                            boxShadow: isScrollActive
                              ? "0 0 10px rgba(139,197,64,0.58)"
                              : "none",
                            transition: "all 500ms ease",
                          }}
                        />
                      </div>

                      {/* ── Text ── */}
                      <div
                        className="md:mt-6"
                        style={{
                          transform:
                            isHovered && !reduceMotion
                              ? "translateY(-2px)"
                              : "translateY(0)",
                          transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
                        }}
                      >
                        <h3
                          className="font-serif text-[1.2rem] font-normal leading-[1.35] tracking-[-0.02em]"
                          style={{
                            color: isOn ? "#F7F4EE" : "rgba(247,244,238,0.52)",
                            transition: "color 500ms ease",
                          }}
                        >
                          {t}
                        </h3>
                        <p
                          className="mt-2.5 max-w-[115px] text-[0.875rem] font-light leading-[1.75] tracking-[0.01em] md:mx-auto"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: isOn
                              ? "rgba(247,244,238,0.52)"
                              : "rgba(247,244,238,0.24)",
                            transition: "color 500ms ease",
                          }}
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

        {/* ── CTA ── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={
            reduceMotion
              ? undefined
              : { delay: 0.6, duration: 0.7, ease: luxuryEase }
          }
          className="mt-20 flex flex-col items-center gap-8 md:mt-28"
        >
          {/* Vertical connector line */}
          <span
            className="block h-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(139,197,64,0.32), transparent)",
            }}
          />

          <PremiumPillButton
            href="/brands"
            variant="blue"
            shape="rounded"
            size="xl"
          >
            Begin uw ontwerptraject
          </PremiumPillButton>
        </motion.div>

      </div>
    </section>
  );
}
