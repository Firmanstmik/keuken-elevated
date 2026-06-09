"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";
import matMarbleImg from "@/assets/mat-marble.jpg";

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxe = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: luxe } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.06 } },
};

const revealCard = {
  hidden: { opacity: 0, y: 18, scale: 0.988 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: luxe } },
};

const revealRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.90, ease: luxe } },
};

// ─── Award icon ──────────────────────────────────────────────────────────────

function AwardIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Showroom() {
  const reduceMotion = useReducedMotion();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on large image
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const largeImgParallax = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <section
      id="showroom"
      className="relative overflow-hidden py-20 text-[#F7F4EE] selection:bg-[#31C7D4]/20 md:py-28"
    >
      {/* ── Layered background ── */}

      {/* 1. Deep navy-charcoal base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(158deg, #0E2030 0%, #0B1C29 42%, #060D13 100%)" }}
      />

      {/* 2. Central architectural teal bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[38%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.11), transparent 62%)" }}
      />

      {/* 3. Top-left directional spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[22%] -top-[22%] h-[85vh] w-[85vh] rounded-full blur-[200px] opacity-50"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.16), transparent 60%)" }}
      />

      {/* 4. Bottom-right ambient fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[18%] -right-[14%] h-[60vh] w-[60vh] rounded-full blur-[160px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.10), transparent 65%)" }}
      />

      {/* 5. Edge vignette — depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 38%, rgba(4,8,12,0.72) 100%)" }}
      />

      {/* 6. Fine grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.028] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* 7. Top hairline — teal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.32), transparent)" }}
      />

      {/* 8. Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Section header ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : stagger}
          className="relative mb-12 md:mb-16"
        >
          {/* Ambient headline glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -top-8 h-[240px] w-[560px] blur-[120px]"
            style={{ background: "radial-gradient(ellipse, rgba(49,199,212,0.18), transparent 65%)", opacity: 0.55 }}
          />

          {/* Eyebrow */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(49,199,212,0.58)]" />
            <span
              className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#31C7D4]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Showroom · Zonnebaan 8 · Utrecht
            </span>
          </motion.div>

          {/* Primary heading — dominant brand name */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="font-serif text-[clamp(2.8rem,5.5vw,4.2rem)] font-light leading-[1.06] tracking-[-0.030em] text-[#F7F4EE]"
          >
            Keuken-Centrum{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(128deg, #31C7D4 0%, #66DCE6 50%, #23B9C4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Utrecht
            </em>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-3 text-[1.0rem] font-light leading-[1.75] tracking-[0.005em] text-[rgba(247,244,238,0.46)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ervaar materialen, kleuren en afwerkingen — waar vakmanschap zichtbaar wordt.
          </motion.p>

          {/* Brand positioning tagline */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 flex items-center gap-3"
          >
            <span className="h-px w-5 bg-[rgba(49,199,212,0.35)]" />
            <span
              className="text-[0.62rem] font-light tracking-[0.22em] text-[rgba(49,199,212,0.55)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Deutsche precisie · Italiaanse elegantie
            </span>
          </motion.div>
        </motion.div>

        {/* ── Content grid ── */}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_360px]">

          {/* ─ Left: Editorial gallery ─ */}
          <div ref={galleryRef} className="grid grid-cols-[1fr_160px] gap-3">

            {/* Large featured image */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : revealCard}
              className="group relative overflow-hidden"
              style={{ borderRadius: "22px", border: "1px solid rgba(49,199,212,0.10)" }}
            >
              <motion.img
                src={kc.showroomImg}
                alt="Showroom Keuken-Centrum Utrecht — Zonnebaan 8"
                loading="lazy"
                style={reduceMotion ? undefined : { y: largeImgParallax }}
                className="h-[120%] w-full -translate-y-[10%] object-cover will-change-transform transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.030] group-hover:brightness-[1.05]"
              />

              {/* Depth vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 52%, rgba(6,13,18,0.45) 100%)" }}
              />

              {/* Top glass reflection */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
              />

              {/* Hover inner teal border ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 1px rgba(49,199,212,0.22) inset" }}
              />

              {/* ── Floating trust badge ── */}
              <motion.div
                className="absolute bottom-5 left-5 z-20"
                animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
              >
                <div
                  className="flex items-center gap-3 rounded-[14px] px-4 py-3"
                  style={{
                    background: "rgba(11,30,44,0.82)",
                    border: "1px solid rgba(49,199,212,0.22)",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.04) inset",
                  }}
                >
                  {/* Icon ring */}
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#31C7D4]"
                    style={{
                      background: "rgba(49,199,212,0.10)",
                      border: "1px solid rgba(49,199,212,0.30)",
                    }}
                  >
                    <AwardIcon />
                  </div>

                  <div>
                    <p
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#31C7D4]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      45+ Jaar Vakmanschap
                    </p>
                    <p
                      className="mt-0.5 text-[0.55rem] font-light tracking-[0.12em] text-[rgba(247,244,238,0.42)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Keuken expertise · Depuis 1978
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Accent images — stacked */}
            <div className="flex flex-col gap-3">

              {/* Accent 1 — craftsmanship detail */}
              <motion.div
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={motionViewport}
                variants={reduceMotion ? undefined : {
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.15, ease: luxe } },
                }}
                className="group relative flex-1 overflow-hidden"
                style={{ borderRadius: "16px", border: "1px solid rgba(49,199,212,0.08)" }}
              >
                <img
                  src={craftsmanshipImg}
                  alt="Ambachtelijk vakmanschap"
                  loading="lazy"
                  className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.060] group-hover:brightness-[1.06]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(160deg, transparent 55%, rgba(6,13,18,0.55) 100%)" }}
                />
                {/* Hover teal ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: "0 0 0 1px rgba(49,199,212,0.28) inset" }}
                />
                {/* Label */}
                <p
                  className="absolute bottom-3 left-3 text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-[rgba(247,244,238,0.52)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Vakmanschap
                </p>
              </motion.div>

              {/* Accent 2 — material close-up */}
              <motion.div
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={motionViewport}
                variants={reduceMotion ? undefined : {
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.26, ease: luxe } },
                }}
                className="group relative flex-1 overflow-hidden"
                style={{ borderRadius: "16px", border: "1px solid rgba(49,199,212,0.08)" }}
              >
                <img
                  src={matMarbleImg}
                  alt="Premium materialen"
                  loading="lazy"
                  className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.060] group-hover:brightness-[1.06]"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(160deg, transparent 55%, rgba(6,13,18,0.55) 100%)" }}
                />
                {/* Hover teal ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: "0 0 0 1px rgba(49,199,212,0.28) inset" }}
                />
                {/* Label */}
                <p
                  className="absolute bottom-3 left-3 text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-[rgba(247,244,238,0.52)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Premium Materialen
                </p>
              </motion.div>

            </div>
          </div>

          {/* ─ Right: Luxury info panel ─ */}
          <motion.aside
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : revealRight}
            className="flex flex-col rounded-[22px] px-6 py-7"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(49,199,212,0.09)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 20px 56px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.03) inset",
            }}
          >
            {/* Brand positioning */}
            <div className="mb-5 pb-5" style={{ borderBottom: "1px solid rgba(49,199,212,0.07)" }}>
              <p
                className="text-[0.52rem] font-semibold uppercase tracking-[0.30em] text-[rgba(49,199,212,0.50)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Exclusieve Showroom · Utrecht
              </p>
              <p
                className="mt-2 font-serif text-[1.15rem] font-light leading-[1.4] tracking-[-0.01em] text-[rgba(247,244,238,0.82)]"
              >
                Uw droomkeuken begint{" "}
                <em className="italic text-[#31C7D4]">hier.</em>
              </p>
              <p
                className="mt-2 text-[0.78rem] font-light leading-[1.75] text-[rgba(247,244,238,0.38)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Bezoek onze showroom en ervaar wat online nooit volledig zichtbaar is: materiaalgevoel, afwerkingsdetails en de rust van een goed ontworpen keuken.
              </p>
            </div>

            {/* Address */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="flex items-start gap-3 pb-5"
              style={{ borderBottom: "1px solid rgba(49,199,212,0.07)" }}
            >
              <House className="mt-0.5 h-4 w-4 shrink-0 text-[rgba(49,199,212,0.62)]" />
              <div>
                <p
                  className="text-[0.88rem] font-medium text-[rgba(247,244,238,0.82)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {kc.contact.address}
                </p>
                <p
                  className="mt-0.5 text-[0.74rem] font-light text-[rgba(247,244,238,0.36)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {kc.contact.postal} · Utrecht
                </p>
              </div>
            </motion.div>

            {/* Opening hours */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="py-5"
              style={{ borderBottom: "1px solid rgba(49,199,212,0.07)" }}
            >
              {kc.contact.hours.map((row) => (
                <div
                  key={row.d}
                  className="flex items-center justify-between gap-4 py-[5px]"
                >
                  <span
                    className="text-[0.74rem] font-light text-[rgba(247,244,238,0.34)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {row.d}
                  </span>
                  <span
                    className={[
                      "tabular-nums text-[0.76rem] font-light",
                      row.h === "Gesloten"
                        ? "text-[rgba(247,244,238,0.20)]"
                        : "text-[rgba(247,244,238,0.68)]",
                    ].join(" ")}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {row.h}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Contact links */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="space-y-3 py-5"
              style={{ borderBottom: "1px solid rgba(49,199,212,0.07)" }}
            >
              <a
                href={kc.contact.phoneHref}
                className="flex items-center gap-3 text-[0.82rem] font-light text-[rgba(247,244,238,0.52)] transition-colors duration-300 hover:text-[rgba(247,244,238,0.88)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[rgba(49,199,212,0.55)]" />
                {kc.contact.phone}
              </a>
              <a
                href={`mailto:${kc.contact.email}`}
                className="flex items-center gap-3 text-[0.82rem] font-light text-[rgba(247,244,238,0.52)] transition-colors duration-300 hover:text-[rgba(247,244,238,0.88)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[rgba(49,199,212,0.55)]" />
                {kc.contact.email}
              </a>
            </motion.div>

            {/* "Seit 1978" micro-label */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="my-4 flex items-center gap-3"
            >
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, rgba(49,199,212,0.22), transparent)" }}
              />
              <span
                className="text-[0.52rem] font-light uppercase tracking-[0.24em] text-[rgba(49,199,212,0.42)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Vakmanschap · Seit 1978
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.22))" }}
              />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="flex flex-col gap-3"
            >
              {/* Primary — teal with shine sweep */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[12px] px-6 py-[0.78rem] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(49,199,212,0.32)]"
                style={{
                  background: "linear-gradient(135deg, #2FC5D0 0%, #23B9C4 55%, #1DAAB5 100%)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span className="relative z-10">Plan Afspraak</span>
                <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
                {/* Shine sweep */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/24 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-full"
                />
              </a>

              {/* Secondary — premium outline */}
              <a
                href={kc.contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-[12px] border px-6 py-[0.78rem] text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-[transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px]"
                style={{
                  borderColor: "rgba(49,199,212,0.28)",
                  color: "rgba(247,244,238,0.62)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(49,199,212,0.62)";
                  el.style.color = "#66DCE6";
                  el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.30)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(49,199,212,0.28)";
                  el.style.color = "rgba(247,244,238,0.62)";
                  el.style.boxShadow = "none";
                }}
              >
                Route Beschrijving
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </a>
            </motion.div>

          </motion.aside>
        </div>
      </div>
    </section>
  );
}
