"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  Setting4 as TuneIcon,
  ColorSwatch as PaletteOutlinedIcon,
  Headphone as SupportAgentIcon,
  Setting2,
  Heart,
  Diamonds,
  People,
  ArrowRight2,
} from "@zethictech/iconsax-react";
import matOak from "@/assets/mat-oak.jpg";
import matConcrete from "@/assets/mat-concrete.jpg";
import whyVakmanschap from "@/assets/why/why-vakmanschap.webp";
import whyPersoonlijk from "@/assets/why/why-persoonlijk.webp";
import whyMaterialen from "@/assets/why/why-materialen.webp";
import whyService from "@/assets/why/why-service.webp";
import brandsDarkBg from "@/assets/brands/brands-dark-bg.webp";
import logoKeuken from "@/assets/logo-keuken-1-1.webp";
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
    description:
      "Elk detail van uw keuken wordt met uiterste precisie en vakmanschap vervaardigd door onze Europese producenten.",
    image: whyVakmanschap,
    imageAlt: "Europees vakmanschap met precisie en kwaliteit",
    accent: "Precisie",
    icon: <Setting2 size={20} variant="Linear" />,
  },
  {
    id: "persoonlijk",
    number: "02",
    title: "Persoonlijke Aanpak",
    description:
      "Onze adviseurs luisteren naar uw wensen en vertalen deze naar een uniek keukenontwerp dat perfect aansluit bij uw woning.",
    image: whyPersoonlijk,
    imageAlt: "Persoonlijke consultatie in de showroom",
    accent: "Begeleiding",
    icon: <Heart size={20} variant="Linear" />,
  },
  {
    id: "materialen",
    number: "03",
    title: "Luxe & Duurzame Materialen",
    description:
      "Voor uw keuken gebruiken we alleen geselecteerde premium materialen, van Carrara marmer tot gerookt eiken.",
    image: whyMaterialen,
    imageAlt: "Premium materialen met marmer en eiken afwerkingen",
    accent: "Afwerking",
    icon: <Diamonds size={20} variant="Linear" />,
  },
  {
    id: "service",
    number: "04",
    title: "Premium Service & Montage",
    description:
      "Van 3D-ontwerp tot vakkundige montage bij u thuis: wij begeleiden en ontzorgen u volledig door het gehele proces.",
    image: whyService,
    imageAlt: "Vakkundig gemonteerde keuken bij de klant thuis",
    accent: "Ontzorging",
    icon: <People size={20} variant="Linear" />,
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
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "rgba(248,246,242,0.87)",
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
            <span className="kitchen-eyebrow-mark" aria-hidden="true" />
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
                      transition:
                        "border-color 450ms, box-shadow 450ms, background 450ms, transform 450ms cubic-bezier(0.22,1,0.36,1)",
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
                                borderColor: isActive
                                  ? "rgba(139,197,64,0.45)"
                                  : "rgba(139,197,64,0.16)",
                                backgroundColor: isActive
                                  ? "rgba(139,197,64,0.12)"
                                  : "rgba(139,197,64,0.05)",
                                transform: isActive ? "scale(1.05)" : "scale(1)",
                                transition:
                                  "border-color 450ms, background-color 450ms, transform 450ms",
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
              <PremiumPillButton href="/consultation" variant="blue" shape="rounded" size="xl">
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
                    background: "linear-gradient(150deg, #FCFAF5 0%, #F1E9D8 52%, #E7DAC0 100%)",
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
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-white/45"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-white/45"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-white/30"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/30"
                    />

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
  if (viewportSize.width < 768) {
    return null;
  }

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
      offsetX = viewportSize.width - margin - (hx + halfW);
    }
  } else if (placement === "left" || placement === "right") {
    const halfH = 45;
    if (hy - halfH < margin) {
      offsetY = margin - (hy - halfH);
    } else if (hy + halfH > viewportSize.height - margin) {
      offsetY = viewportSize.height - margin - (hy + halfH);
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

  const dotCX =
    placement === "top" || placement === "bottom"
      ? offsetX
      : placement === "left"
        ? -cardOffset
        : cardOffset;
  const dotCY =
    placement === "left" || placement === "right"
      ? offsetY
      : placement === "top"
        ? -cardOffset
        : cardOffset;

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

      <div className="absolute pointer-events-none" style={cardStyle}>
        <motion.div
          className="pointer-events-auto bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-3.5 py-2.5 text-left"
          style={{ width: cardWidth }}
          initial={{
            opacity: 0,
            y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
            x: placement === "left" ? 8 : placement === "right" ? -8 : 0,
          }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
            x: placement === "left" ? 8 : placement === "right" ? -8 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="mb-1 block text-[10px] font-semibold tracking-[0.08em] text-[#C8A96B]">
              Configuratie
            </span>
            <h4 className="font-serif text-[12px] font-semibold leading-snug tracking-[-0.01em] text-white">
              {title}
            </h4>
            <div className="h-px w-full bg-[rgba(212,175,55,0.1)] my-1.5" />
            <p className="text-[10px] leading-[1.5] text-zinc-400 normal-case">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ShowroomJourneySection() {
  const reduceMotion = useReducedMotion();
  const [activeHotspot, setActiveHotspot] = useState<number>(0);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [viewportSize, setViewportSize] = useState({ width: 600, height: 450 });
  const mockupViewportRef = useRef<HTMLDivElement | null>(null);
  const mobileViewportRef = useRef<HTMLDivElement | null>(null);

  const [selections, setSelections] = useState<
    Record<string, { id: string; color: string; name: string }>
  >({
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
    const viewport = mockupViewportRef.current ?? mobileViewportRef.current;
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
  const activeMobileCategoryData = activeMobileCategory
    ? masterCategories.find((c) => c.id === activeMobileCategory) ?? null
    : null;
  const completedCount = hotspotsData.filter((hotspot) => selections[hotspot.id]?.id).length;
  const journeyProgress = completedCount / hotspotsData.length;

  const selectMobileCategory = (categoryId: string, hotspotIndex: number) => {
    setActiveHotspot(hotspotIndex);
    setActiveMobileCategory((current) => (current === categoryId ? null : categoryId));
    setHoveredCategory(null);
  };

  return (
    <section
      className="journey-premium-scene section-shell relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0F0A 0%, #12140E 52%, #0C0E09 100%)" }}
    >
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
      <div
        aria-hidden="true"
        className="journey-premium-scene__grain pointer-events-none absolute inset-0 opacity-[0.035]"
      />
      <div className="journey-premium-scene__container site-container relative max-w-7xl">
        <SectionChapter
          index={4}
          label="Digitale beleving"
          light
          className="chapter-mark--sentence hidden lg:flex"
        />
        <div className="journey-premium-grid grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-6">
          <div className="journey-premium-stage relative order-1">
            <div className="journey-configure-mobile lg:hidden">
              <div className="journey-configure-mobile__progress" aria-hidden="true">
                <motion.div
                  className="h-full bg-[#8BC540]"
                  animate={{ scaleX: journeyProgress }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left center" }}
                />
              </div>

              <header className="journey-configure-mobile__header">
                <p className="text-[0.68rem] tracking-[0.04em] text-[rgba(247,245,242,0.5)]">
                  Digitale beleving
                </p>
                <img src={logoKeuken} alt="KeukenCentrum.nl" className="h-6 w-auto" />
                <p className="text-[0.68rem] tracking-[0.04em] text-[rgba(247,245,242,0.5)]">
                  Preview
                </p>
              </header>

              <div
                ref={mobileViewportRef}
                className="configure-image-stage journey-configure-mobile__stage relative overflow-hidden bg-[#0A0A0A]"
              >
                <img
                  src={klassiekBase}
                  alt="Klassieke keuken configurator"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" />

                <div className="absolute left-3 top-3 rounded-[10px] border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.78)] px-2.5 py-1.5 backdrop-blur-[8px]">
                  <p className="block text-[0.6rem] tracking-[0.06em] text-[#8BC540]">
                    Digitale showroom
                  </p>
                  <p className="text-[0.625rem] text-[rgba(247,245,242,0.6)]">
                    {completedCount}/{hotspotsData.length} opties samengesteld
                  </p>
                </div>

                <div className="absolute inset-0">
                  {hotspotsData.map((h, i) => {
                    const isActive = activeMobileCategory === h.id || activeHotspot === i;
                    const selectedOption = selections[h.id];

                    return (
                      <div
                        key={h.id}
                        className={`absolute ${isActive ? "z-30" : "z-20"}`}
                        style={{ left: h.x, top: h.y }}
                        data-hotspot="true"
                      >
                        <button
                          type="button"
                          onClick={() => selectMobileCategory(h.id, i)}
                          className="configure-hotspot absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full"
                          aria-label={`Configureer ${h.label}`}
                        >
                          <div className="relative flex h-8 w-8 items-center justify-center">
                            <span
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: "rgba(212,175,55,0.10)",
                                filter: "blur(8px)",
                                boxShadow: isActive
                                  ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                                  : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                              }}
                            />
                            <span
                              className="absolute rounded-full"
                              style={{
                                width: 18,
                                height: 18,
                                border: `2px solid ${isActive ? "#8BC540" : "rgba(212,175,55,0.85)"}`,
                                backgroundColor: isActive
                                  ? "rgba(139,197,64,0.12)"
                                  : "rgba(0,0,0,0.45)",
                              }}
                            />
                            <span
                              className="relative z-10 rounded-full"
                              style={{
                                width: 6,
                                height: 6,
                                backgroundColor: selectedOption?.color ?? "#FFFFFF",
                                border: selectedOption?.color
                                  ? "1px solid rgba(255,255,255,0.6)"
                                  : "none",
                              }}
                            />
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="configure-sidebar journey-configure-mobile__sidebar flex flex-col bg-[#0F0F0F]">
                <div className="configure-category-rail flex gap-2 overflow-x-auto border-b border-[rgba(255,255,255,0.05)] p-3">
                  {hotspotsData.map((h, i) => {
                    const selected = selections[h.id];
                    const active = activeMobileCategory === h.id;
                    return (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => selectMobileCategory(h.id, i)}
                        className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[13px] border px-3 py-2 normal-case transition-all duration-300"
                        style={{
                          borderColor: active
                            ? "#8BC540"
                            : selected
                              ? "rgba(139,197,64,0.4)"
                              : "rgba(255,255,255,0.1)",
                          backgroundColor: active ? "rgba(139,197,64,0.1)" : "transparent",
                        }}
                      >
                        {selected ? (
                          <span
                            className="h-2 w-2 rounded-full border border-[rgba(255,255,255,0.3)]"
                            style={{ backgroundColor: selected.color }}
                          />
                        ) : null}
                        <span
                          className="text-[0.68rem] tracking-[0.02em]"
                          style={{
                            color: active
                              ? "#8BC540"
                              : selected
                                ? "rgba(247,245,242,0.7)"
                                : "rgba(247,245,242,0.35)",
                          }}
                        >
                          {h.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div
                  className={`configure-options-panel flex-1 p-3 ${
                    activeMobileCategoryData ? "configure-options-panel--open" : ""
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {activeMobileCategoryData ? (
                      <motion.div
                        key={activeMobileCategoryData.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="mb-0.5 block text-[0.6rem] tracking-[0.04em] text-[#8BC540]">
                              Kies
                            </p>
                            <h3
                              className="text-[1.15rem] text-[#F7F5F2]"
                              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                            >
                              {activeMobileCategoryData.label}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveMobileCategory(null)}
                            className="min-h-11 rounded-xl px-3 text-sm normal-case text-[rgba(247,245,242,0.55)]"
                          >
                            Sluiten
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          {activeMobileCategoryData.options.slice(0, 4).map((option, index) => {
                            const selected =
                              selections[activeMobileCategoryData.id]?.id === option.id;
                            return (
                              <motion.button
                                key={option.id}
                                type="button"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() =>
                                  setSelections((prev) => ({
                                    ...prev,
                                    [activeMobileCategoryData.id]: {
                                      id: option.id,
                                      color: option.color,
                                      name: option.name,
                                    },
                                  }))
                                }
                                className="min-h-[118px] cursor-pointer rounded-[14px] p-2.5 text-left normal-case transition-all duration-300 active:scale-[0.98]"
                                style={{
                                  border: `1px solid ${selected ? "#8BC540" : "rgba(255,255,255,0.07)"}`,
                                  backgroundColor: selected
                                    ? "rgba(139,197,64,0.08)"
                                    : "rgba(255,255,255,0.02)",
                                }}
                              >
                                <div
                                  className="mb-1.5 h-12 w-full border border-[rgba(255,255,255,0.1)]"
                                  style={{ backgroundColor: option.color }}
                                />
                                <p
                                  className="mb-0.5 text-[0.7rem] font-normal tracking-[0.05em]"
                                  style={{
                                    color: selected ? "#8BC540" : "rgba(247,245,242,0.75)",
                                  }}
                                >
                                  {option.name}
                                </p>
                                {option.description ? (
                                  <p className="text-[0.6rem] leading-[1.4] text-[rgba(247,245,242,0.3)]">
                                    {option.description}
                                  </p>
                                ) : null}
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>

              <div className="journey-configure-mobile__action">
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <div className="min-w-0 flex-1 px-1">
                    <p className="truncate text-[0.62rem] font-medium text-[#6b9539]">Voortgang</p>
                    <p
                      className="truncate text-[0.95rem] leading-tight text-[#F7F5F2]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {completedCount} van {hotspotsData.length} keuzes
                    </p>
                  </div>
                  <Link
                    to="/configure"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[15px] border border-[#8BC540] bg-[#79af37] px-4 text-[0.76rem] font-semibold text-white shadow-[0_12px_26px_-16px_rgba(66,105,27,0.9)]"
                  >
                    <span className="max-w-[8.2rem] truncate">Start configurator</span>
                    <ArrowRight2 size={16} variant="Linear" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
            {/* The Badge — desktop only */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={motionViewport}
              className="absolute -top-2 left-4 z-20 hidden sm:left-6 md:-top-3 md:left-8 lg:block"
            >
              <span className="journey-premium-badge inline-flex items-center gap-2 rounded-full border border-[#C8A96B]/35 bg-[rgba(17,17,17,0.88)] px-4 py-1.5 text-[0.6rem] font-medium tracking-[0.1em] text-[#D8BE87] shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BC540] shadow-[0_0_8px_rgba(139,197,64,0.8)]" />
                Premium configurator
              </span>
            </motion.div>

            <div className="journey-premium-mockup-shell journey-mobile-app-shell rounded-[20px] p-0 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)] lg:rounded-[30px] lg:p-[1px] lg:bg-[linear-gradient(135deg,rgba(200,169,107,0.45),rgba(139,197,64,0.12),rgba(200,169,107,0.22))] lg:shadow-[0_40px_90px_-24px_rgba(0,0,0,0.65)]">
            {/* The Configurator Mockup Frame */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="home-configurator-preview relative flex w-full max-w-full flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0E0F0D] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] aspect-auto lg:max-h-none lg:rounded-[29px] lg:aspect-[4/3]"
            >
              {/* Fake Header — desktop only */}
              <div className="home-configurator-topbar hidden h-8 shrink-0 items-center justify-between border-b border-white/10 px-4 lg:flex md:h-10">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="text-[0.62rem] tracking-[0.08em] text-white/40 md:text-[0.6rem]">
                  Keuken Centrum
                </div>
                <div className="w-8" />
              </div>

              {/* Fake Body */}
              <div className="home-configurator-body flex flex-1 min-h-0 flex-col overflow-hidden lg:flex-row">
                {/* Image Area */}
                <div
                  ref={mockupViewportRef}
                  className="home-configurator-viewport relative w-full flex-none overflow-hidden bg-[#0A0A0A] lg:aspect-auto lg:flex-1"
                >
                  <span className="absolute left-3 top-3 z-20 hidden items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[0.55rem] font-medium tracking-[0.08em] text-[#D8BE87] backdrop-blur-md lg:hidden">
                    <span className="h-1 w-1 rounded-full bg-[#8BC540]" />
                    Configurator
                  </span>
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
                <div className="home-configurator-sidebar flex w-full shrink-0 flex-col overflow-hidden border-t border-white/[0.06] bg-[linear-gradient(180deg,#141614_0%,#0b0d0b_100%)] lg:w-[36%] lg:border-l lg:border-t-0 xl:w-[34%]">
                  <div className="home-configurator-tabs-wrap relative">
                  {/* Category tab strip */}
                  <div className="home-configurator-tabs flex gap-2 overflow-x-auto border-b border-white/[0.06] bg-transparent px-3.5 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:gap-1 lg:overflow-visible lg:border-white/[0.07] lg:bg-white/[0.018] lg:p-2.5 lg:px-4 lg:py-3 [&::-webkit-scrollbar]:hidden">
                    {hotspotsData.map((h, i) => {
                      const sel = selections[h.id];
                      const isTabActive = activeHotspot === i;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => setActiveHotspot(i)}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 normal-case transition-all duration-300 min-h-[36px] lg:min-h-0 lg:rounded-[8px] lg:px-2.5 lg:py-2"
                          style={{
                            borderColor: isTabActive
                              ? "#B08D57"
                              : sel
                                ? "rgba(176,141,87,0.35)"
                                : "rgba(255,255,255,0.08)",
                            backgroundColor: isTabActive
                              ? "rgba(176,141,87,0.13)"
                              : "rgba(255,255,255,0.015)",
                          }}
                        >
                          {sel && (
                            <span
                              className="h-1.5 w-1.5 rounded-full border border-white/25 shrink-0"
                              style={{ backgroundColor: sel.color }}
                            />
                          )}
                          <span
                            className="text-[0.72rem] leading-none tracking-[0.02em] lg:text-[0.64rem] lg:tracking-[0.04em]"
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
                  </div>

                  {/* Active category header */}
                  <div className="home-configurator-panel-head border-b border-white/[0.05] px-3.5 pb-2 pt-0.5 lg:px-3 lg:pb-2.5 lg:pt-3">
                    <p className="mb-0.5 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-[#C8A96B]/90 lg:mb-1 lg:text-[0.62rem]">
                      Configureer
                    </p>
                    <p
                      className="text-[0.88rem] font-medium leading-tight tracking-[-0.01em] text-[#F7F5F2] lg:text-[0.82rem] lg:font-normal"
                      style={{ fontFamily: "var(--font-display)" }}
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
                      className="home-configurator-options flex-1 overflow-y-auto p-0 lg:p-2"
                    >
                      <div className="home-configurator-options-grid grid grid-cols-2 gap-2 p-4 lg:grid lg:grid-cols-2 lg:gap-1.5 lg:p-0">
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
                              className={`home-configurator-option cursor-pointer rounded-[12px] p-2.5 text-left normal-case transition-all duration-300 hover:-translate-y-px hover:border-[#C8A96B]/45 hover:bg-white/[0.045] min-h-0 lg:min-h-0 lg:p-1.5 lg:rounded-[9px]${isSelected ? " is-selected" : ""}`}
                              style={{
                                border: `1px solid ${
                                  isSelected ? "#B08D57" : "rgba(255,255,255,0.07)"
                                }`,
                                backgroundColor: isSelected
                                  ? "rgba(176,141,87,0.12)"
                                  : "rgba(255,255,255,0.025)",
                                boxShadow: isSelected
                                  ? "0 10px 22px -15px rgba(200,169,107,0.75), inset 0 1px 0 rgba(255,255,255,0.05)"
                                  : "inset 0 1px 0 rgba(255,255,255,0.025)",
                              }}
                            >
                              {/* Color block */}
                              <div
                                className="home-configurator-option__swatch mb-2 h-12 w-full rounded-[8px] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] lg:mb-1.5 lg:h-8 lg:rounded-[6px]"
                                style={{ backgroundColor: option.color }}
                              />
                              {/* Name */}
                              <p
                                className="text-[0.65rem] font-medium leading-tight tracking-[-0.005em]"
                                style={{
                                  color: isSelected ? "#D8BE87" : "rgba(247,245,242,0.86)",
                                }}
                              >
                                {option.name}
                              </p>
                              {/* Description */}
                              {option.description && (
                                <p className="home-configurator-option__desc mt-1 text-[0.58rem] leading-[1.35] tracking-[-0.005em] text-white/42 lg:text-[0.55rem]">
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
                  <div className="home-configurator-footer border-t border-white/[0.06] bg-black/20 px-4 py-3 lg:p-2">
                    <a
                      href="/brands"
                      className="flex min-h-[44px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#D8BE87,#B8924E)] text-[0.68rem] font-semibold tracking-[0.02em] text-[#17140d] shadow-[0_10px_24px_-14px_rgba(200,169,107,0.8)] transition-all hover:-translate-y-px hover:brightness-105 lg:h-8 lg:min-h-0 lg:rounded-[8px] lg:text-[0.62rem]"
                    >
                      Volledig ontwerp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>

            {/* Caption bar — sits below the mockup so it never covers it */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="journey-premium-caption mt-5 hidden items-start gap-4 rounded-[18px] border border-[rgba(200,169,107,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-4 backdrop-blur-xl sm:flex sm:items-center sm:px-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(200,169,107,0.45)] bg-[rgba(200,169,107,0.12)] shadow-[0_0_24px_rgba(200,169,107,0.12)]">
                <TuneIcon sx={{ fontSize: 18, color: "#C8A96B" }} />
              </span>
              <div className="min-w-0">
                <p className="text-[0.62rem] font-semibold tracking-[0.1em] text-[#D8BE87]">
                  Digitale Showroom
                </p>
                <p className="mt-1 text-[0.84rem] font-light leading-[1.6] text-[rgba(245,242,236,0.76)] sm:text-[0.8rem]">
                  Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.
                </p>
              </div>
            </motion.div>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="journey-premium-copy hidden lg:block lg:order-2 lg:pl-10"
          >
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[0.72rem] tracking-[0.08em] text-[#C8A96B]"
            >
              De beleving
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-[34rem] text-[clamp(2rem,7vw,3rem)] leading-[1.12] tracking-[-0.02em] text-[#F5F2EC] sm:mt-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Een showroom die naar u toe komt
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-[500px] text-[1rem] font-light leading-[1.65] tracking-[0.01em] text-[rgba(245,242,236,0.72)] sm:mt-6 sm:text-[1.125rem] sm:leading-[1.6]"
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
              className="mt-5 hidden flex-col gap-3 sm:mt-6 sm:flex sm:gap-5"
            >
              {experienceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={reduceMotion ? undefined : fadeUp}
                    className="journey-premium-feature flex items-center gap-3.5 rounded-[14px] border border-white/[0.07] bg-[rgba(255,255,255,0.03)] px-3.5 py-3 backdrop-blur-sm sm:border-transparent sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(200,169,107,0.22)] bg-[rgba(200,169,107,0.08)] text-[#C8A96B] sm:h-8 sm:w-8 sm:rounded-none sm:border-0 sm:bg-transparent">
                      <Icon size={18} color="#C8A96B" variant="Linear" />
                    </span>
                    <span className="text-[0.9rem] font-light leading-[1.55] text-[rgba(245,242,236,0.8)] sm:text-[0.875rem] sm:leading-[1.65] sm:text-[rgba(245,242,236,0.72)]">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-6 sm:mt-10">
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
