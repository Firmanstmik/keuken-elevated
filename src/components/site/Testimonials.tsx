"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { motionViewport } from "@/lib/motion";

const supportingReviews = [
  {
    text: "Na online zoeken kwamen we hier uit. Er werd actief meegedacht en tekeningen zijn slim aangepast voor meer werkruimte. Goede communicatie en vriendelijke monteurs.",
    rating: 5,
    author: "Familie Keizer",
    project: "Zampieri Keukenontwerp",
    location: "Zeist",
    date: "Februari 2025",
  },
  {
    text: "Als aannemer kom ik hier vaker. Altijd snel en goed geholpen. De service is persoonlijk en de materiaalkennis maakt het extra prettig.",
    rating: 5,
    author: "Bouwbedrijf Vreeburg",
    project: "Moderne Loft Keuken",
    location: "Nieuwegein",
    date: "Januari 2025",
  },
  {
    text: "Alles is netjes geplaatst en strak afgewerkt. Dank voor het professionele advies, het meedenken en het keurige montagewerk. Super service.",
    rating: 5,
    author: "Dhr. & Mevr. Jaspers",
    project: "BORA Kookeiland",
    location: "Houten",
    date: "December 2024",
  },
  {
    text: "Mijn keuken is geplaatst en ik ben nog steeds super blij. Ook heel tevreden met de service. Zeker een aanrader voor wie topkwaliteit zoekt.",
    rating: 5,
    author: "Mevr. de Jong",
    project: "AI Küchen Concept",
    location: "Utrecht",
    date: "November 2024",
  },
  {
    text: "Een complete premium keuken aangeschaft. Uitstekende hulp met ontwerpen en samenstellen. Vakkundig gemonteerd en erg tevreden.",
    rating: 5,
    author: "Familie Hesselink",
    project: "Molteni Keukenontwerp",
    location: "Bilthoven",
    date: "Oktober 2024",
  },
];

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: luxuryEase } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

const featuredReveal = {
  hidden: { opacity: 0, scale: 0.98, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, ease: luxuryEase, delay: 0.15 },
  },
};

const staggerCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth < 768 ? 320 : 440;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#06111D] py-24 text-[#F7F5F2] md:py-36"
    >
      {/* ── Layered Architectural Atmosphere ──────────────────────── */}
      {/* Dark accents (#071827) Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 35%, #071827 100%)",
        }}
      />

      {/* Volumetric Showroom Glows (#081C2F) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] top-[-10%] h-[100%] w-[80%] rounded-full blur-[140px] opacity-35"
        style={{
          background: "radial-gradient(circle, #081C2F 0%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20%] bottom-[-10%] h-[100%] w-[80%] rounded-full blur-[140px] opacity-35"
        style={{
          background: "radial-gradient(circle, #081C2F 0%, transparent 80%)",
        }}
      />

      {/* Soft, focused vertical light beam in center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[50%] -translate-x-1/2 opacity-25"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, #081C2F 0%, transparent 100%)",
        }}
      />

      {/* Material Grain Texture (Opacity: 3%) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='showroom-fine'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23showroom-fine)'/></svg>")`,
        }}
      />

      {/* Hairline dividers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,165,100,0.15)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,165,100,0.1)] to-transparent"
      />

      <div className="site-container relative">
        {/* ── Premium Trust Metrics (Elegant Micro Stats) ──────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : sectionReveal}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/[0.06] pb-10 text-white/50"
        >
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.62rem] font-light uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Google Rating
            </span>
            <span className="font-serif text-[1.3rem] font-light tracking-tight text-white">
              4.9 / 5.0 Stars
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.62rem] font-light uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Vakmanschap
            </span>
            <span className="font-serif text-[1.3rem] font-light tracking-tight text-white">
              45+ Jaar Ervaring
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.62rem] font-light uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Ontwerpvrijheid
            </span>
            <span className="font-serif text-[1.3rem] font-light tracking-tight text-white">
              1000+ Combinaties
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-[0.62rem] font-light uppercase tracking-[0.24em]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Realisaties
            </span>
            <span className="font-serif text-[1.3rem] font-light tracking-tight text-white">
              Duizenden Projecten
            </span>
          </div>
        </motion.div>

        {/* ── Section Header ──────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14"
        >
          <div className="max-w-[36rem]">
            {/* Eyebrow */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C8A96B]/50" />
              <span
                className="text-[0.6rem] font-light tracking-[0.32em] text-[#C8A96B] uppercase"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Google Beoordelingen
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] font-light leading-[1.12] tracking-[-0.022em] text-[#F7F5F2]"
            >
              Ervaringen van klanten <br />
              <em className="italic text-[#C8A96B] font-serif font-light">uit Utrecht en omstreken</em>
            </motion.h2>
          </div>

          {/* Supporting & Google Review Info */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[34rem] flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8"
          >
            <p
              className="flex-1 text-[0.95rem] font-light leading-[1.75] text-[#F7F5F2]/70"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Eerlijke begeleiding, doordachte ontwerpen en zorgvuldige plaatsing komen steeds terug in
              de beoordelingen van onze premium projecten.
            </p>

            {/* Google Rating Badge */}
            <div className="shrink-0 flex flex-col gap-1 border-l border-white/10 pl-6 sm:py-1">
              <div className="flex items-center gap-1 text-[0.9rem] text-[#C8A96B]">
                <span className="tracking-[0.06em]">★★★★★</span>
                <span className="font-normal text-white text-[0.8rem] ml-1">4.9 / 5.0</span>
              </div>
              <span
                className="text-[0.62rem] font-light tracking-[0.16em] uppercase text-white/50"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                127+ beoordelingen
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Featured centerpiece review ──────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : featuredReveal}
          className="mb-14"
        >
          <article className="relative overflow-hidden rounded-[24px] bg-[#F8F6F2] p-8 md:p-12 text-[#081321] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.4)] border border-[#C8A96B]/15 group/featured">
            {/* Elegant top hairline */}
            <div className="absolute inset-x-0 top-0 h-[4px] bg-[#C8A96B]" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="max-w-[44rem] flex flex-col gap-6">
                <div className="flex items-center gap-1">
                  <span className="text-[#C8A96B] text-[1.1rem]">★★★★★</span>
                  <span
                    className="text-[0.68rem] tracking-[0.16em] uppercase text-[#081321]/45 ml-2"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    Google • Verified Review
                  </span>
                </div>
                <blockquote className="font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] font-light leading-[1.46] tracking-[-0.015em] text-[#081321]">
                  “We hebben een prachtige LEICHT keuken gekocht. Topkwaliteit, strak design en een
                  hoogwaardige afwerking. De service was persoonlijk en professioneel van begin tot eind.”
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#C8A96B]/50" />
                  <cite className="not-italic font-serif text-[1.1rem] font-light text-[#081321]">
                    Familie Van Deurzen
                  </cite>
                </div>
              </div>
              <div className="shrink-0 flex flex-col gap-1 border-l border-[#081321]/10 pl-6 py-1">
                <span
                  className="text-[0.62rem] font-light uppercase tracking-[0.2em] text-[#081321]/50"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Project
                </span>
                <span className="font-serif text-[1.1rem] font-light text-[#081321] tracking-tight">
                  LEICHT Kitchen Project
                </span>
                <span
                  className="text-[0.75rem] font-light text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Utrecht
                </span>
                <span
                  className="text-[0.68rem] font-light text-[#081321]/30 mt-3"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Maart 2025
                </span>
              </div>
            </div>
          </article>
        </motion.div>

        {/* ── Supporting reviews horizontal carousel ──────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="relative"
        >
          <div
            ref={carouselRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 no-scrollbar"
          >
            {supportingReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={reduceMotion ? undefined : fadeUp}
                className={[
                  "snap-start shrink-0 w-[300px] sm:w-[380px] md:w-[410px] rounded-[24px] bg-[#F8F6F2] p-7 md:p-8 text-[#081321] border border-[#C8A96B]/15",
                  "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between min-h-[300px] group/card",
                  "hover:-translate-y-2 hover:border-[#C8A96B]/40 hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.35)]",
                ].join(" ")}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C8A96B] text-[0.8rem]">★★★★★</span>
                    <span
                      className="text-[0.62rem] font-light uppercase tracking-[0.16em] text-[#081321]/40"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      Google • Verified
                    </span>
                  </div>
                  <blockquote className="font-serif text-[1.05rem] font-light leading-[1.62] text-[#081321] min-h-[105px]">
                    “{review.text}”
                  </blockquote>
                </div>

                <div className="border-t border-[#081321]/10 pt-5 mt-5 flex justify-between items-end">
                  <div>
                    <cite className="not-italic font-serif text-[0.98rem] font-light text-[#081321]">
                      {review.author}
                    </cite>
                    <div
                      className="text-[0.68rem] font-light text-[#081321]/50 mt-0.5"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {review.project}
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-[0.7rem] font-normal text-[#C8A96B]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {review.location}
                    </span>
                    <div
                      className="text-[0.62rem] font-light text-[#081321]/30 mt-0.5"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {review.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Carousel navigation controls ──────────────────────── */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : navFadeInVariant}
            className="flex justify-end gap-3 mt-8"
          >
            <button
              onClick={() => scroll("left")}
              aria-label="Vorige beoordelingen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/30 text-[#C8A96B] transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/5 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Volgende beoordelingen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/30 text-[#C8A96B] transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#C8A96B]/5 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Fade in navigation buttons variant
const navFadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5, ease: luxuryEase } },
};
