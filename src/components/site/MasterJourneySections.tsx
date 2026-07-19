"use client";
import { useState, useMemo, useRef, useEffect } from "react";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import matOak from "@/assets/mat-oak.jpg";
import whyVakmanschap from "@/assets/why/why-vakmanschap.webp";
import whyPersoonlijk from "@/assets/why/why-persoonlijk.webp";
import whyMaterialen from "@/assets/why/why-materialen.webp";
import whyService from "@/assets/why/why-service.webp";
import brandsDarkBg from "@/assets/brands/brands-dark-bg.webp";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { SectionChapter } from "@/components/site/SectionChapter";
import { kc } from "@/lib/kc-data";
import { fadeUp, motionViewport, staggerHeader, staggerList } from "@/lib/motion";
import { masterCategories } from "@/lib/master-config-data";
import klassiekBase from "@/assets/configurator/klassiek-base.webp";
import klassiekHotspots from "@/data/hotspots/klassiek-hotspots.json";

// Map Dutch hotspot keys from the JSON to English category IDs & display labels
const hotspotKeyToCategoryId: Record<string, string> = {
  front: "front",
  werkblad: "worktop",
  spoelbak: "sink",
  apparatuur: "appliances",
  quooker: "quooker",
  bora: "bora",
  grepen: "handles",
  verlichting: "lighting",
};

const hotspotLabels: Record<string, string> = {
  front: "Frontpaneel",
  werkblad: "Werkblad",
  spoelbak: "Spoelbak",
  apparatuur: "Apparatuur",
  quooker: "Quooker",
  bora: "BORA",
  grepen: "Grepen",
  verlichting: "Verlichting",
};

function transformHotspots(json: Record<string, { x: string; y: string }>) {
  return Object.entries(json).map(([key, coords]) => ({
    id: hotspotKeyToCategoryId[key] || key,
    label: hotspotLabels[key] || key,
    x: coords.x,
    y: coords.y,
  }));
}

const klassiekHotspotPositions = transformHotspots(klassiekHotspots);

// Update to match live Google My Business review count
const GOOGLE_REVIEWS_COUNT = 150;

// Kept in sync with the "45+ jaar" claim used across Experience, Footer,
// Testimonials, PremiumShowcase and ConsultationSection.
const YEARS_OF_EXPERIENCE = "45+";

const experienceItems = [
  {
    icon: TuneIcon,
    label: "Interactieve materiaalconfigurator",
  },
  {
    icon: PaletteOutlinedIcon,
    label: "Persoonlijke moodboard generatie",
  },
  {
    icon: SupportAgentIcon,
    label: "Persoonlijke ontwerpconsultatie",
  },
] as const;

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Accessible green scale. #8BC540 is decorative only — at 2.1:1 on white it
// must never carry text.
const GREEN_DEEP = "#2F5218"; // headings / seal — 8.8:1 on the cream backdrop
const GREEN_INK = "#43701F"; // small accent text — 5.7:1 on the cream backdrop
const GREEN_BRIGHT = "#8BC540"; // bars, glows, tints, borders

const pillars = [
    {
      id: "vakmanschap",
      number: "01",
      title: "Europees Vakmanschap",
      description: "Elk detail van uw keuken wordt met uiterste precisie en vakmanschap vervaardigd door onze Europese producenten.",
      image: whyVakmanschap,
      imageAlt: "Europees vakmanschap met precisie en kwaliteit",
      accent: "Precisie",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: "persoonlijk",
      number: "02",
      title: "Persoonlijke Aanpak",
      description: "Onze adviseurs luisteren naar uw wensen en vertalen deze naar een uniek keukenontwerp dat perfect aansluit bij uw woning.",
      image: whyPersoonlijk,
      imageAlt: "Persoonlijke consultatie in de showroom",
      accent: "Begeleiding",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: "materialen",
      number: "03",
      title: "Luxe & Duurzame Materialen",
      description: "Voor uw keuken gebruiken we alleen geselecteerde premium materialen, van Carrara marmer tot gerookt eiken.",
      image: whyMaterialen,
      imageAlt: "Premium materialen met marmer en eiken afwerkingen",
      accent: "Afwerking",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      ),
    },
    {
      id: "service",
      number: "04",
      title: "Premium Service & Montage",
      description: "Van 3D-ontwerp tot vakkundige montage bij u thuis: wij begeleiden en ontzorgen u volledig door het gehele proces.",
      image: whyService,
      imageAlt: "Vakkundig gemonteerde keuken bij de klant thuis",
      accent: "Ontzorging",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
] as const;

const materialSwatches = [
  { label: "Carrara", image: whyMaterialen },
  { label: "Gerookt eiken", image: matOak },
  { label: "Showroom", image: whyService },
] as const;

export function WhyWithUsSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // `hoveredId` previews on pointer, `pinnedId` survives pointer-out and is what
  // click, tap and keyboard focus set — so the panel works without a mouse.
  const [pinnedId, setPinnedId] = useState<string>(pillars[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeId = hoveredId ?? pinnedId;
  const activePillar = pillars.find((p) => p.id === activeId) ?? pillars[0];
  const activeIndex = pillars.findIndex((p) => p.id === activeId);

  // Warm the cache before the section lands, otherwise the first hover on each
  // card shows a load flash instead of a crossfade.
  const nearViewport = useInView(sectionRef, { once: true, margin: "400px" });
  useEffect(() => {
    if (!nearViewport) return;
    for (const pillar of pillars) {
      const img = new Image();
      img.src = pillar.image;
    }
  }, [nearViewport]);

  return (
    <section
      ref={sectionRef}
      id="why-with-us"
      className="why-scene section-shell relative overflow-hidden"
    >
      {/* Atmospheric layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${whyService})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 0.14,
          filter: "blur(2px) saturate(0.75) brightness(0.95)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(252,251,248,0.97) 0%, rgba(246,243,236,0.92) 48%, rgba(250,248,244,0.97) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 12% 20%, rgba(139,197,64,0.08), transparent 60%), radial-gradient(55% 45% at 88% 70%, rgba(200,169,107,0.07), transparent 65%)",
        }}
      />

      <div className="site-container relative max-w-7xl">
        <SectionChapter index={2} label="Waarom wij" />

        {/* ── Header ── */}
        <div className="mb-12 xl:mb-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easing }}
            viewport={motionViewport}
            className="mb-5 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[rgba(200,169,107,0.55)]" />
            <span
              className="text-[0.68rem] font-semibold uppercase tracking-[0.26em]"
              style={{ fontFamily: "var(--font-body)", color: "#8A7348" }}
            >
              Onze belofte
            </span>
          </motion.div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.08 }}
            viewport={motionViewport}
            className="max-w-[640px] font-serif text-[clamp(2.35rem,3.9vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.02em]"
            style={{ color: GREEN_DEEP }}
          >
            Waarom Kiest U{" "}
            <em className="italic" style={{ color: GREEN_INK }}>
              Voor Ons?
            </em>
          </motion.h2>
        </div>

        {/* ── MAIN STAGE ── */}
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16 lg:items-start">

          {/* ─── LEFT: Feature cards ─── */}
          <div>
            <p
              className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8A8A8A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Wat wij bieden
            </p>

            <div className="flex flex-col gap-3">
              {pillars.map((pillar, i) => {
                const isActive = activeId === pillar.id;
                return (
                  <motion.button
                    key={pillar.id}
                    type="button"
                    aria-pressed={isActive}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, ease: easing, delay: i * 0.08 }}
                    viewport={motionViewport}
                    onMouseEnter={() => setHoveredId(pillar.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setPinnedId(pillar.id)}
                    onClick={() => setPinnedId(pillar.id)}
                    className="group relative flex w-full flex-col overflow-hidden rounded-[20px] border text-left normal-case outline-none focus-visible:ring-2 focus-visible:ring-[rgba(139,197,64,0.7)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFCF9]"
                    style={{
                      textTransform: "none",
                      letterSpacing: "normal",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      borderColor: isActive ? "rgba(139,197,64,0.35)" : "rgba(23,25,28,0.06)",
                      background: isActive
                        ? "linear-gradient(135deg, #FFFFFF 0%, #F7FAF1 100%)"
                        : "rgba(255,255,255,0.78)",
                      boxShadow: isActive
                        ? "0 22px 50px -20px rgba(47,82,24,0.18), 0 0 0 1px rgba(139,197,64,0.08)"
                        : "0 8px 28px -18px rgba(23,25,28,0.1)",
                      transform: isActive ? "translateY(-2px)" : "translateY(0)",
                      transition: "border-color 450ms, box-shadow 450ms, background 450ms, transform 450ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    <span className="flex w-full">
                      {/* Mini preview strip */}
                      <span
                        aria-hidden="true"
                        className="relative hidden w-[72px] shrink-0 overflow-hidden sm:block"
                        style={{
                          opacity: isActive ? 1 : 0.55,
                          transition: "opacity 450ms",
                        }}
                      >
                        <img
                          src={pillar.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                          draggable={false}
                        />
                        <span
                          className="absolute inset-0"
                          style={{
                            background: isActive
                              ? "linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.15))"
                              : "rgba(47,82,24,0.18)",
                          }}
                        />
                      </span>

                      <span className="relative flex min-w-0 flex-1 items-start gap-4 px-5 py-5">
                        {/* Number + accent bar */}
                        <span className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                          <span
                            className="font-serif text-[0.95rem] font-light leading-none tracking-tight"
                            style={{ color: isActive ? GREEN_INK : "rgba(47,82,24,0.35)" }}
                          >
                            {pillar.number}
                          </span>
                          <span
                            className="w-[2px] rounded-full"
                            style={{
                              height: isActive ? 28 : 14,
                              backgroundColor: GREEN_BRIGHT,
                              opacity: isActive ? 1 : 0.25,
                              transition: "height 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms",
                            }}
                          />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2.5">
                            <span
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border"
                              style={{
                                color: GREEN_INK,
                                borderColor: isActive ? "rgba(139,197,64,0.45)" : "rgba(139,197,64,0.16)",
                                backgroundColor: isActive ? "rgba(139,197,64,0.12)" : "rgba(139,197,64,0.05)",
                                transform: isActive ? "scale(1.05)" : "scale(1)",
                                transition: "border-color 450ms, background-color 450ms, transform 450ms",
                              }}
                            >
                              {pillar.icon}
                            </span>
                            <span className="min-w-0">
                              <span
                                className="block text-[0.72rem] font-medium uppercase tracking-[0.16em]"
                                style={{
                                  color: isActive ? "#8A7348" : "rgba(138,115,72,0.55)",
                                  fontFamily: "var(--font-body)",
                                  transition: "color 450ms",
                                }}
                              >
                                {pillar.accent}
                              </span>
                              <span
                                className="mt-0.5 block text-[0.98rem] font-semibold tracking-[-0.01em]"
                                style={{ color: GREEN_DEEP, fontFamily: "var(--font-heading)" }}
                              >
                                {pillar.title}
                              </span>
                            </span>
                          </span>
                          <span
                            className="mt-2.5 block text-[0.82rem] font-light leading-[1.65] text-[#666666]"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {pillar.description}
                          </span>
                        </span>
                      </span>
                    </span>

                    {/* Mobile inline image */}
                    <motion.span
                      aria-hidden="true"
                      className="relative z-10 block w-full overflow-hidden lg:hidden"
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easing }}
                    >
                      <span className="block px-4 pb-4">
                        <img
                          src={pillar.image}
                          alt=""
                          loading="lazy"
                          draggable={false}
                          className="h-[180px] w-full rounded-[14px] object-cover"
                        />
                      </span>
                    </motion.span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA + proof */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easing, delay: 0.4 }}
              viewport={motionViewport}
              className="mt-8"
            >
              <PremiumPillButton
                href="/consultation"
                variant="blue"
                shape="rounded"
                size="xl"
              >
                Plan uw showroombezoek
              </PremiumPillButton>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <img
                  src={kc.cbwLogo}
                  alt="CBW erkend"
                  className="h-9 w-auto opacity-45"
                  loading="lazy"
                />
                <span aria-hidden="true" className="h-4 w-px bg-black/10" />
                <span
                  className="text-[0.72rem] font-light text-[#555555]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="font-semibold" style={{ color: GREEN_INK }}>
                    {GOOGLE_REVIEWS_COUNT}+
                  </span>{" "}
                  Google reviews
                </span>
                <span aria-hidden="true" className="h-4 w-px bg-black/10" />
                <span
                  className="text-[0.72rem] font-light text-[#555555]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Showroom in Utrecht sinds{" "}
                  <span className="font-semibold" style={{ color: GREEN_INK }}>
                    {kc.founded}
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Cinematic image stage ─── */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative">
                {/* Soft glow behind frame */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-[36px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 40%, rgba(139,197,64,0.14), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.75, ease: easing }}
                  viewport={motionViewport}
                  className="relative rounded-[26px] p-[9px]"
                  style={{
                    background:
                      "linear-gradient(150deg, #FCFAF5 0%, #F1E9D8 52%, #E7DAC0 100%)",
                    boxShadow:
                      "0 40px 90px -30px rgba(18,22,12,0.5), 0 0 0 1px rgba(200,169,107,0.35), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  {/* Inner gold hairline frame */}
                  <div
                    className="relative overflow-hidden rounded-[18px]"
                    style={{
                      aspectRatio: "10/9",
                      boxShadow: "inset 0 0 0 1px rgba(200,169,107,0.45)",
                    }}
                  >
                    <AnimatePresence mode="sync">
                      <motion.img
                        key={activePillar.id}
                        src={activePillar.image}
                        alt={activePillar.imageAlt}
                        loading="lazy"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.75, ease: easing }}
                      />
                    </AnimatePresence>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(12,16,10,0.85)] via-[rgba(12,16,10,0.15)] to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(139,197,64,0.1)] via-transparent to-transparent" />

                    {/* Corner accents — editorial gallery frame */}
                    <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-white/45" />
                    <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-white/45" />
                    <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/30" />
                    <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/30" />

                    {/* Top meta */}
                    <div className="absolute left-5 top-5 right-5 flex items-start justify-between">
                      <span
                        className="rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {activePillar.accent}
                      </span>
                      <span className="font-serif text-[0.95rem] font-light tracking-tight text-white/70">
                        {activePillar.number}
                        <span className="text-white/35"> / 0{pillars.length}</span>
                      </span>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute inset-x-0 bottom-0 p-6 xl:p-7">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activePillar.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.45, ease: easing }}
                        >
                          <p
                            className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#D8BE8A]"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Kenmerk {activeIndex + 1}
                          </p>
                          <p className="mt-2 max-w-[18rem] font-serif text-[1.5rem] font-light leading-tight text-white">
                            {activePillar.title}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      <div aria-hidden="true" className="mt-5 flex gap-1.5">
                        {pillars.map((pillar) => (
                          <span
                            key={pillar.id}
                            className="h-[2.5px] flex-1 overflow-hidden rounded-full bg-white/20"
                          >
                            <span
                              className="block h-full origin-left rounded-full"
                              style={{
                                background: "linear-gradient(90deg, #A8D95A, #8BC540)",
                                transform: activeId === pillar.id ? "scaleX(1)" : "scaleX(0)",
                                transition: "transform 550ms cubic-bezier(0.22,1,0.36,1)",
                              }}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Experience seal */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.78 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: easing, delay: 0.28 }}
                  viewport={motionViewport}
                  className="absolute -right-6 -top-7 z-20 xl:-right-8 xl:-top-9"
                >
                  <motion.div
                    animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                    transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                  >
                    <div
                      className="relative flex h-[118px] w-[118px] flex-col items-center justify-center rounded-full xl:h-[128px] xl:w-[128px]"
                      style={{
                        background:
                          "linear-gradient(148deg, #FBF8F2 0%, #F3EBDA 52%, #E8D9BE 100%)",
                        border: "1px solid rgba(200,169,107,0.4)",
                        boxShadow:
                          "0 22px 50px rgba(0,0,0,0.16), 0 0 0 4px rgba(252,251,248,0.9), inset 0 1px 0 rgba(255,255,255,0.9)",
                      }}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-[7px] rounded-full border border-[rgba(200,169,107,0.28)]"
                      />
                      <span
                        className="relative font-serif text-[2.55rem] font-light leading-none tracking-tight xl:text-[2.75rem]"
                        style={{ color: GREEN_DEEP }}
                      >
                        {YEARS_OF_EXPERIENCE}
                      </span>
                      <span
                        className="relative mt-1.5 text-[0.58rem] font-semibold uppercase"
                        style={{
                          letterSpacing: "0.28em",
                          color: GREEN_INK,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Jaar Ervaring
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Material swatches */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: easing, delay: 0.35 }}
                  viewport={motionViewport}
                  className="mt-5 flex gap-3"
                >
                  {materialSwatches.map((swatch) => (
                    <div
                      key={swatch.label}
                      className="group/swatch relative flex-1 overflow-hidden rounded-[14px] border border-black/[0.06] shadow-[0_10px_28px_-16px_rgba(0,0,0,0.25)]"
                      style={{ aspectRatio: "5/3.2" }}
                    >
                      <img
                        src={swatch.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/swatch:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <p
                        className="absolute bottom-2.5 left-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {swatch.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function HotspotTooltip({
  active,
  x,
  y,
  title,
  description,
  viewportSize,
}: {
  active: boolean;
  x: string;
  y: string;
  title: string;
  description: string;
  viewportSize: { width: number; height: number };
}) {
  const px = parseFloat(x);
  const py = parseFloat(y);

  const hx = (px / 100) * viewportSize.width;
  const hy = (py / 100) * viewportSize.height;

  const placement = useMemo(() => {
    const top = py;
    const bottom = 100 - py;
    const left = px;
    const right = 100 - px;

    let dir: "top" | "bottom" | "left" | "right" = "top";
    let max = top;

    if (bottom > max) {
      max = bottom;
      dir = "bottom";
    }
    if (left > max) {
      max = left;
      dir = "left";
    }
    if (right > max) {
      max = right;
      dir = "right";
    }

    return dir;
  }, [px, py]);

  const cardWidth = 195;
  const margin = 12;
  const cardOffset = 36;
  const mid = 20;

  let cardStyle: React.CSSProperties = {};
  let pathD = "";
  let offsetX = 0;
  let offsetY = 0;

  if (placement === "top" || placement === "bottom") {
    const halfW = cardWidth / 2;
    if (hx - halfW < margin) {
      offsetX = margin - (hx - halfW);
    } else if (hx + halfW > viewportSize.width - margin) {
      offsetX = (viewportSize.width - margin) - (hx + halfW);
    }
  } else if (placement === "left" || placement === "right") {
    const halfH = 45;
    if (hy - halfH < margin) {
      offsetY = margin - (hy - halfH);
    } else if (hy + halfH > viewportSize.height - margin) {
      offsetY = (viewportSize.height - margin) - (hy + halfH);
    }
  }

  if (placement === "top") {
    cardStyle = {
      bottom: `${cardOffset}px`,
      left: "0px",
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`,
    };
    const R = Math.min(6, Math.abs(offsetX) / 2);
    if (R < 1) {
      pathD = `M 0 0 V -${cardOffset}`;
    } else {
      const dir = offsetX > 0 ? 1 : -1;
      pathD = `M 0 0 V -${mid - R} Q 0 -${mid} ${dir * R} -${mid} H ${offsetX - dir * R} Q ${offsetX} -${mid} ${offsetX} ${-mid - R} V -${cardOffset}`;
    }
  } else if (placement === "bottom") {
    cardStyle = {
      top: `${cardOffset}px`,
      left: "0px",
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`,
    };
    const R = Math.min(6, Math.abs(offsetX) / 2);
    if (R < 1) {
      pathD = `M 0 0 V ${cardOffset}`;
    } else {
      const dir = offsetX > 0 ? 1 : -1;
      pathD = `M 0 0 V ${mid - R} Q 0 ${mid} ${dir * R} ${mid} H ${offsetX - dir * R} Q ${offsetX} ${mid} ${offsetX} ${mid + R} V ${cardOffset}`;
    }
  } else if (placement === "left") {
    cardStyle = {
      right: `${cardOffset}px`,
      top: "0px",
      transform: `translate(0px, calc(-50% + ${offsetY}px))`,
    };
    const R = Math.min(6, Math.abs(offsetY) / 2);
    if (R < 1) {
      pathD = `M 0 0 H -${cardOffset}`;
    } else {
      const dir = offsetY > 0 ? 1 : -1;
      pathD = `M 0 0 H -${mid - R} Q -${mid} 0 -${mid} ${dir * R} V ${offsetY - dir * R} Q -${mid} ${offsetY} ${-mid - R} ${offsetY} H -${cardOffset}`;
    }
  } else if (placement === "right") {
    cardStyle = {
      left: `${cardOffset}px`,
      top: "0px",
      transform: `translate(0px, calc(-50% + ${offsetY}px))`,
    };
    const R = Math.min(6, Math.abs(offsetY) / 2);
    if (R < 1) {
      pathD = `M 0 0 H ${cardOffset}`;
    } else {
      const dir = offsetY > 0 ? 1 : -1;
      pathD = `M 0 0 H ${mid - R} Q ${mid} 0 ${mid} ${dir * R} V ${offsetY - dir * R} Q ${mid} ${offsetY} ${mid + R} ${offsetY} H ${cardOffset}`;
    }
  }

  const dotCX = placement === "top" || placement === "bottom" ? offsetX : (placement === "left" ? -cardOffset : cardOffset);
  const dotCY = placement === "left" || placement === "right" ? offsetY : (placement === "top" ? -cardOffset : cardOffset);

  return (
    <div className="absolute pointer-events-none z-50" style={{ left: 0, top: 0 }}>
      <svg
        className="absolute pointer-events-none overflow-visible"
        style={{ left: 0, top: 0, width: 0, height: 0, overflow: "visible" }}
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="#C8A96B"
          strokeWidth="1.2"
          strokeOpacity="0.55"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          exit={{ pathLength: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx={dotCX}
          cy={dotCY}
          r="1.5"
          fill="#C8A96B"
          fillOpacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={cardStyle}
      >
        <motion.div
          className="pointer-events-auto bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-3.5 py-2.5 text-left"
          style={{ width: cardWidth }}
          initial={{ opacity: 0, y: placement === "top" ? 8 : (placement === "bottom" ? -8 : 0), x: placement === "left" ? 8 : (placement === "right" ? -8 : 0) }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: placement === "top" ? 8 : (placement === "bottom" ? -8 : 0), x: placement === "left" ? 8 : (placement === "right" ? -8 : 0) }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C8A96B] mb-1">
              CONFIGURATIE
            </span>
            <h4 className="font-serif text-[12px] font-semibold leading-snug text-white tracking-[-0.01em] uppercase">
              {title}
            </h4>
            <div className="h-px w-full bg-[rgba(212,175,55,0.1)] my-1.5" />
            <p className="text-[10px] leading-[1.5] text-zinc-400 normal-case">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ShowroomJourneySection() {
  const reduceMotion = useReducedMotion();
  const [activeHotspot, setActiveHotspot] = useState<number>(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [viewportSize, setViewportSize] = useState({ width: 600, height: 450 });
  const mockupViewportRef = useRef<HTMLDivElement | null>(null);

  const [selections, setSelections] = useState<Record<string, { id: string; color: string; name: string }>>({
    front: { id: "cashmere", color: "#C4B49A", name: "Cashmere" },
    worktop: { id: "marble-white", color: "#F2EFE8", name: "Wit marmer" },
    sink: { id: "sink-stainless", color: "#C8C8C8", name: "RVS" },
    appliances: { id: "miele", color: "#F0F0F0", name: "Miele" },
    quooker: { id: "quooker-gold", color: "#B08D57", name: "Goud" },
    bora: { id: "bora-pro", color: "#D0D0D0", name: "BORA Pro" },
    handles: { id: "handle-none", color: "#E0E0E0", name: "Greeploos" },
    lighting: { id: "light-recessed", color: "#F5F0E8", name: "Inbouw led" },
  });

  const hotspotsData = klassiekHotspotPositions.map((h, index) => ({
    ...h,
    delay: 0.6 + index * 0.1,
  }));

  useEffect(() => {
    const viewport = mockupViewportRef.current;
    if (!viewport) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setViewportSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, []);

  const activeHotspotId = hotspotsData[activeHotspot].id;
  const currentCategory = masterCategories.find((c) => c.id === activeHotspotId);

  return (
    <section className="section-shell relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0D0F0A 0%, #12140E 52%, #0C0E09 100%)" }}>
      {/* Cinematic showroom backdrop — in harmony with the partner section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${brandsDarkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,15,10,0.9) 0%, rgba(13,15,10,0.7) 45%, rgba(12,14,9,0.92) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 20% 15%, rgba(139,197,64,0.08), transparent 60%), radial-gradient(55% 45% at 85% 80%, rgba(200,169,107,0.07), transparent 65%)",
        }}
      />
      <div className="site-container relative max-w-7xl">
        <SectionChapter index={4} label="Digitale beleving" light />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <div className="relative">
            {/* The Badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={motionViewport}
              className="absolute -top-3 left-6 md:left-8 z-20"
            >
              <span className="rounded-full border border-[#C8A96B]/30 bg-[#111111] px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#C8A96B] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                Premium configurator
              </span>
            </motion.div>

            {/* The Configurator Mockup Frame */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:rounded-[28px] border border-[#C8A96B]/30 bg-[#111111] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col"
            >
              {/* Fake Header */}
              <div className="flex h-8 md:h-10 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="text-[0.62rem] md:text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                  Keuken Centrum
                </div>
                <div className="w-8" />
              </div>

              {/* Fake Body */}
              <div className="flex flex-1 overflow-hidden">
                {/* Image Area */}
                <div ref={mockupViewportRef} className="relative flex-1 bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={klassiekBase}
                    alt="Klassieke keuken configurator"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  {/* Hotspots */}
                  <div className="absolute inset-0">
                    {hotspotsData.map((h, i) => {
                      const isActive = activeHotspot === i;
                      const isHovered = hoveredCategory === h.id;
                      const anyHovered = hoveredCategory !== null;
                      const visible = isHovered || isActive;

                      const selectedOption = selections[h.id];
                      const fullCategory = masterCategories.find((c) => c.id === h.id);
                      const fullOption = selectedOption
                        ? fullCategory?.options.find((o) => o.id === selectedOption.id)
                        : null;

                      return (
                        <div
                          key={h.id}
                          className={`absolute ${isActive || isHovered ? "z-30" : "z-10"}`}
                          style={{ left: h.x, top: h.y }}
                          data-hotspot="true"
                          onMouseEnter={() => setHoveredCategory(h.id)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <button
                            type="button"
                            onClick={() => setActiveHotspot(i)}
                            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                              transition: "opacity 0.3s ease",
                              opacity: anyHovered && !isHovered ? 0.3 : 1,
                            }}
                            aria-label={`Configureer ${h.label}`}
                          >
                            {/* Multi-layer premium hotspot – identical to configure.tsx */}
                            <div
                              className="relative flex items-center justify-center"
                              style={{
                                width: 32,
                                height: 32,
                                transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                                transform: isHovered ? "scale(1.25)" : "scale(1)",
                              }}
                            >
                              {/* Layer 4: Outer halo */}
                              <span
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                  background: "rgba(212,175,55,0.10)",
                                  filter: "blur(8px)",
                                  boxShadow:
                                    isHovered || isActive
                                      ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                                      : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                                  animation:
                                    !isHovered && !isActive
                                      ? "hotspotBreathe 4.5s ease-in-out infinite"
                                      : "none",
                                  transition: "box-shadow 0.2s ease",
                                }}
                              />

                              {/* Layer 3: Gold ring */}
                              <span
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                  width: 18,
                                  height: 18,
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  border: `2px solid ${
                                    isHovered || isActive ? "#C8A96B" : "rgba(212,175,55,0.85)"
                                  }`,
                                  backgroundColor:
                                    isHovered || isActive
                                      ? "rgba(212,175,55,0.12)"
                                      : "rgba(0,0,0,0.45)",
                                  backdropFilter: "blur(4px)",
                                  transition: "all 0.2s ease",
                                }}
                              />

                              {/* Layer 1+2: Center dot – color reflects selection */}
                              <span
                                className="relative z-10 rounded-full"
                                style={{
                                  width: 6,
                                  height: 6,
                                  backgroundColor: selectedOption?.color ?? "#FFFFFF",
                                  border: selectedOption?.color
                                    ? "1px solid rgba(255,255,255,0.6)"
                                    : "none",
                                  boxShadow: "0 0 4px rgba(255,255,255,0.5)",
                                  transition: "all 0.2s ease",
                                }}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {visible && (
                              <HotspotTooltip
                                active={true}
                                x={h.x}
                                y={h.y}
                                title={h.label}
                                description={
                                  fullOption
                                    ? fullOption.description || fullOption.name
                                    : `Klik om de mogelijkheden voor uw ${h.label.toLowerCase()} te ontdekken.`
                                }
                                viewportSize={viewportSize}
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Sidebar – mirrors configure.tsx layout */}
                <div className="w-[32%] md:w-[28%] shrink-0 border-l border-white/10 bg-[#0F0F0F] flex flex-col overflow-hidden">

                  {/* Category tab strip */}
                  <div className="flex flex-wrap gap-[3px] border-b border-white/[0.06] p-2">
                    {hotspotsData.map((h, i) => {
                      const sel = selections[h.id];
                      const isTabActive = activeHotspot === i;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => setActiveHotspot(i)}
                          className="inline-flex items-center gap-1 border px-1.5 py-1 transition-all duration-300"
                          style={{
                            borderColor: isTabActive
                              ? "#B08D57"
                              : sel
                              ? "rgba(176,141,87,0.35)"
                              : "rgba(255,255,255,0.08)",
                            backgroundColor: isTabActive
                              ? "rgba(176,141,87,0.1)"
                              : "transparent",
                          }}
                        >
                          {sel && (
                            <span
                              className="h-1.5 w-1.5 rounded-full border border-white/25 shrink-0"
                              style={{ backgroundColor: sel.color }}
                            />
                          )}
                          <span
                            className="text-[0.64rem] uppercase tracking-[0.13em] leading-none"
                            style={{
                              color: isTabActive
                                ? "#B08D57"
                                : sel
                                ? "rgba(247,245,242,0.65)"
                                : "rgba(247,245,242,0.3)",
                            }}
                          >
                            {h.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active category header */}
                  <div className="px-3 pt-2.5 pb-1.5">
                    <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#B08D57] mb-0.5">Kies</p>
                    <p
                      className="text-[0.72rem] text-[#F7F5F2]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {currentCategory?.label ?? hotspotsData[activeHotspot].label}
                    </p>
                  </div>

                  {/* Options grid – color block + name + description */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHotspotId}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="flex-1 overflow-y-auto px-2 pb-2"
                    >
                      <div className="grid grid-cols-2 gap-[5px]">
                        {currentCategory?.options.slice(0, 4).map((option, idx) => {
                          const isSelected = selections[activeHotspotId]?.id === option.id;
                          return (
                            <motion.button
                              key={option.id}
                              type="button"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.04 }}
                              onClick={() =>
                                setSelections((prev) => ({
                                  ...prev,
                                  [activeHotspotId]: {
                                    id: option.id,
                                    color: option.color,
                                    name: option.name,
                                  },
                                }))
                              }
                              className="cursor-pointer p-1.5 text-left transition-all duration-300"
                              style={{
                                border: `1px solid ${
                                  isSelected ? "#B08D57" : "rgba(255,255,255,0.07)"
                                }`,
                                backgroundColor: isSelected
                                  ? "rgba(176,141,87,0.08)"
                                  : "rgba(255,255,255,0.02)",
                              }}
                            >
                              {/* Color block */}
                              <div
                                className="mb-1 h-8 w-full border border-white/10"
                                style={{ backgroundColor: option.color }}
                              />
                              {/* Name */}
                              <p
                                className="text-[0.62rem] font-normal tracking-[0.04em] leading-tight"
                                style={{
                                  color: isSelected
                                    ? "#B08D57"
                                    : "rgba(247,245,242,0.75)",
                                }}
                              >
                                {option.name}
                              </p>
                              {/* Description */}
                              {option.description && (
                                <p className="mt-0.5 text-[0.62rem] leading-[1.35] text-white/30">
                                  {option.description}
                                </p>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Footer CTA */}
                  <div className="border-t border-white/[0.06] p-2 hidden md:block">
                    <a
                      href="/brands"
                      className="flex h-7 w-full items-center justify-center rounded-[6px] bg-[#C8A96B] text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-[#b59556]"
                    >
                      Volledig Ontwerp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caption bar — sits below the mockup so it never covers it */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="mt-5 flex items-center gap-4 rounded-[16px] border border-[rgba(200,169,107,0.2)] bg-[rgba(255,255,255,0.04)] px-5 py-4 backdrop-blur-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(200,169,107,0.4)] bg-[rgba(200,169,107,0.1)]">
                <TuneIcon sx={{ fontSize: 18, color: "#C8A96B" }} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#C8A96B]">
                  Digitale Showroom
                </p>
                <p className="mt-1 text-[0.8rem] font-light leading-[1.55] text-[rgba(245,242,236,0.7)]">
                  Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="lg:pl-10 mt-12 lg:mt-0"
          >
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[0.72rem] uppercase tracking-[0.25em] text-[#C8A96B]"
            >
              De beleving
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[34rem] text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[#F5F2EC]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Een showroom die naar u toe komt
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[rgba(245,242,236,0.68)]"
            >
              Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm.
              Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog
              voordat u onze showroom bezoekt.
            </motion.p>
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 h-px w-full bg-[rgba(200,169,107,0.22)]"
            />
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : staggerList}
              className="mt-6 flex flex-col gap-5"
            >
              {experienceItems.map((item) => {
                const Icon = item.icon;

                return (
                <motion.div
                  key={item.label}
                  variants={reduceMotion ? undefined : fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#C8A96B]">
                    <Icon sx={{ fontSize: 18, color: "#C8A96B" }} />
                  </span>
                  <span className="text-[0.875rem] font-light leading-[1.65] text-[rgba(245,242,236,0.72)]">
                    {item.label}
                  </span>
                </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-10">
              <PremiumPillButton href="/brands" variant="blue" size="md">
                Start uw ontwerp
              </PremiumPillButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MasterJourneySections() {
  return (
    <>
      <WhyWithUsSection />
      <ShowroomJourneySection />
    </>
  );
}
