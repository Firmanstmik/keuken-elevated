"use client";

import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import type { LeichtSeriesContent } from "@/lib/brand-pages/leicht-series";
import { leichtSeriesPages } from "@/lib/brand-pages/leicht-series";

const luxuryEase = motionEase.premium;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`brand-eyebrow ${light ? "brand-eyebrow--light" : ""}`}>
      <span className="brand-eyebrow__line" aria-hidden="true" />
      {children}
    </span>
  );
}

export function LeichtSeriesPage({ series }: { series: LeichtSeriesContent }) {
  const reduceMotion = useReducedMotion();
  const related = Object.values(leichtSeriesPages).filter((item) => item.id !== series.id);

  return (
    <div className="brand-page">
      <section className="brand-page-hero relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={series.heroImage} alt={series.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.9)_0%,rgba(10,20,12,0.48)_50%,rgba(10,20,12,0.72)_100%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[82vh] flex-col justify-end pb-20 pt-32">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[48rem]"
          >
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.55)]">
              <Link to="/keukens" className="hover:text-white">
                Keukens
              </Link>
              <span>/</span>
              <Link to="/keukens/leicht" className="hover:text-white">
                Leicht
              </Link>
              <span>/</span>
              <span className="text-[rgba(255,255,255,0.85)]">{series.name}</span>
            </nav>
            <Eyebrow light>Leicht serie</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1] tracking-[-0.02em] text-white">
              {series.name}
            </h1>
            <p className="mt-5 max-w-[32rem] text-[1.05rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
              {series.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PremiumPillButton href="/#consultation" size="lg">
                Plan showroombezoek
              </PremiumPillButton>
              <PremiumPillButton href="/keukens/leicht" variant="ghost" size="lg">
                Alle Leicht series
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Over deze serie</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
              Live in onze <em className="italic text-[var(--green)]">Utrecht</em> showroom
            </h2>
          </div>
          <div className="space-y-5">
            {series.description.map((p) => (
              <p key={p.slice(0, 28)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[rgba(139,197,64,0.1)]">
        <div className="site-container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Inspiratie</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
                {series.name} <em className="italic text-[var(--green)]">in beeld</em>
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {series.gallery.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.65, delay: index * 0.08, ease: luxuryEase }}
                className="brand-series__card overflow-hidden rounded-[1.4rem]"
              >
                <img src={item.src} alt={item.title} loading="lazy" className="brand-series__image min-h-[18rem]" />
                <div className="brand-series__overlay" />
                <figcaption className="brand-series__meta">
                  <span className="brand-series__name" style={{ fontSize: "1.25rem" }}>
                    {item.title}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-[1.8rem] text-[var(--secondary)]">Andere Leicht series</h2>
            <Link
              to="/keukens/leicht"
              className="inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[var(--green)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Terug naar Leicht
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                to="/keukens/leicht/$slug"
                params={{ slug: item.slug }}
                className="brand-series__card group"
              >
                <img src={item.heroImage} alt={item.name} className="brand-series__image min-h-[14rem]" loading="lazy" />
                <div className="brand-series__overlay" />
                <div className="brand-series__meta">
                  <h3 className="brand-series__name" style={{ fontSize: "1.2rem" }}>
                    {item.name}
                  </h3>
                  <span className="brand-series__cta">
                    Bekijk
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[34rem]">
              <Eyebrow light>Showroom</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.8vw,2.9rem)] text-white">
                {series.name} <em className="italic text-[var(--green-highlight)]">ervaren</em>?
              </h2>
              <p className="mt-4 text-[1rem] font-light text-[rgba(255,255,255,0.72)]">
                Kom langs in Utrecht of plan een adviesgesprek — wij ontwerpen deze serie volledig op maat.
              </p>
            </div>
            <PremiumPillButton href="/#consultation" size="xl">
              Boek een afspraak
            </PremiumPillButton>
          </div>
        </div>
      </section>
    </div>
  );
}
