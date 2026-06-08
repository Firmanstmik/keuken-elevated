"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxe = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: luxe } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

const revealCard = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: luxe } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function Showroom() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="showroom"
      className="relative overflow-hidden py-20 text-[#F7F4EE] selection:bg-[#31C7D4]/20 md:py-28"
    >
      {/* ── Layered background ── */}

      {/* 1. Base: deep charcoal-midnight gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(158deg, #0E2030 0%, #0B1C29 42%, #060D13 100%)",
        }}
      />

      {/* 2. Atmospheric teal bloom — top-left (showroom spotlight) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[25%] -top-[25%] h-[90vh] w-[90vh] rounded-full blur-[200px]"
        style={{
          background: "radial-gradient(circle, rgba(49,199,212,0.18), transparent 60%)",
          opacity: 0.55,
        }}
      />

      {/* 3. Secondary glow — bottom-right (ambient fill) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[20%] -right-[15%] h-[65vh] w-[65vh] rounded-full blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(49,199,212,0.12), transparent 60%)",
          opacity: 0.50,
        }}
      />

      {/* 4. Edge vignette — pulls focus inward */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 38%, rgba(4,8,12,0.70) 100%)",
        }}
      />

      {/* 5. Subtle noise texture layer (repeating micro-grain) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* 6. Top hairline — teal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(49,199,212,0.30), transparent)",
        }}
      />

      {/* 7. Bottom hairline — white whisper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : stagger}
          className="relative mb-12 max-w-[30rem]"
        >
          {/* Soft teal ambient glow behind headline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-[260px] w-[480px] blur-[130px]"
            style={{
              background: "radial-gradient(ellipse, rgba(49,199,212,0.20), transparent 65%)",
              opacity: 0.60,
            }}
          />

          {/* Section label */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-6 flex items-center gap-4"
          >
            <span
              className="h-px w-8 bg-gradient-to-r from-transparent to-[#31C7D4]/55"
            />
            <span
              className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#31C7D4]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Showroom Utrecht
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="relative font-serif text-[clamp(2.2rem,4.5vw,3.2rem)] font-light leading-[1.08] tracking-[-0.025em] text-[#F7F4EE]"
          >
            Ervaar materialen,
            <br />
            kleuren en{" "}
            <em className="italic" style={{ color: "#31C7D4" }}>
              afwerkingen.
            </em>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-6 text-[1.02rem] font-light leading-[1.78] tracking-[0.01em] text-[rgba(247,244,238,0.48)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bezoek onze showroom aan de Zonnebaan en ervaar wat online nooit
            volledig zichtbaar is: materiaalgevoel, frontafwerkingen,
            werkbladdiktes en de rust van een goed ontworpen keuken.
          </motion.p>
        </motion.div>

        {/* ── Content grid ── */}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_360px]">

          {/* ─ Left: Showroom image ─ */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : revealCard}
            className="group relative overflow-hidden rounded-[22px]"
            style={{
              border: "1px solid rgba(49,199,212,0.10)",
              boxShadow: [
                "0 28px 72px rgba(0,0,0,0.45)",
                "0 0 0 1px rgba(255,255,255,0.025) inset",
              ].join(", "),
            }}
          >
            {/* Showroom photo */}
            <img
              src={kc.showroomImg}
              alt="Showroom Keuken-Centrum Utrecht, Zonnebaan 8"
              className="aspect-[1.5/1] h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.032]"
              loading="lazy"
            />

            {/* Depth vignette — corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(6,13,18,0.42) 100%)",
              }}
            />

            {/* Top glass-reflection highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
              }}
            />

            {/* Hover: inner teal border glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                boxShadow: "0 0 0 1px rgba(49,199,212,0.20) inset",
              }}
            />

            {/* Hover: shadow elevation */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
              }}
            />
          </motion.div>

          {/* ─ Right: Info card ─ */}
          <motion.aside
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : stagger}
            className="flex flex-col gap-0 rounded-[22px] px-6 py-6"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(49,199,212,0.09)",
              backdropFilter: "blur(14px)",
              boxShadow: [
                "0 20px 56px rgba(0,0,0,0.35)",
                "0 0 0 1px rgba(255,255,255,0.03) inset",
              ].join(", "),
            }}
          >
            {/* Address */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="flex items-start gap-3 pb-5"
            >
              <House className="mt-0.5 h-4 w-4 shrink-0 text-[rgba(49,199,212,0.65)]" />
              <div>
                <p
                  className="text-[0.9rem] font-medium text-[rgba(247,244,238,0.85)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {kc.contact.address}
                </p>
                <p
                  className="mt-0.5 text-[0.76rem] font-light text-[rgba(247,244,238,0.38)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {kc.contact.postal} · Utrecht
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="border-t border-white/[0.06] py-5"
            >
              {kc.contact.hours.map((row) => (
                <div
                  key={row.d}
                  className="flex items-center justify-between gap-4 py-1.5"
                >
                  <span
                    className="text-[0.76rem] font-light text-[rgba(247,244,238,0.36)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {row.d}
                  </span>
                  <span
                    className={[
                      "tabular-nums text-[0.78rem] font-light",
                      row.h === "Gesloten"
                        ? "text-[rgba(247,244,238,0.22)]"
                        : "text-[rgba(247,244,238,0.70)]",
                    ].join(" ")}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {row.h}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="space-y-3 border-t border-white/[0.06] py-5"
            >
              <a
                href={kc.contact.phoneHref}
                className="flex items-center gap-3 text-[0.82rem] font-light text-[rgba(247,244,238,0.55)] transition-colors duration-300 hover:text-[rgba(247,244,238,0.88)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[rgba(49,199,212,0.55)]" />
                {kc.contact.phone}
              </a>
              <a
                href={`mailto:${kc.contact.email}`}
                className="flex items-center gap-3 text-[0.82rem] font-light text-[rgba(247,244,238,0.55)] transition-colors duration-300 hover:text-[rgba(247,244,238,0.88)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[rgba(49,199,212,0.55)]" />
                {kc.contact.email}
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="flex flex-wrap gap-3 pt-1"
            >
              {/* Primary — teal with shine sweep */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[12px] px-6 py-[0.72rem] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(49,199,212,0.30)]"
                style={{
                  background:
                    "linear-gradient(135deg, #2FC5D0 0%, #23B9C4 55%, #1DAAB5 100%)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span className="relative z-10">Plan Afspraak</span>
                {/* Shine sweep */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/24 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-full"
                />
              </a>

              {/* Secondary — glass outline with border glow */}
              <a
                href={kc.contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[12px] border px-6 py-[0.72rem] text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
                style={{
                  borderColor: "rgba(49,199,212,0.28)",
                  color: "rgba(247,244,238,0.65)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(49,199,212,0.58)";
                  el.style.color = "#66DCE6";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(49,199,212,0.28)";
                  el.style.color = "rgba(247,244,238,0.65)";
                }}
              >
                Route Beschrijving
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
