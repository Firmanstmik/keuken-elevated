"use client";
import { useState, useMemo, useRef, useEffect } from "react";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import showroomImg from "@/assets/showroom.jpg";
import matMarble from "@/assets/mat-marble.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp, motionViewport, staggerHeader, staggerList } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";
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
  front: "Front",
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

const valuePillars = [
  {
    title: "Premium Merken",
    description: "Alleen de meest toonaangevende keukenmerken van Europa",
  },
  {
    title: "Europees Vakmanschap",
    description: "Decennialange traditie van precisie en productie",
  },
  {
    title: "Persoonlijk Advies",
    description: "Voor elk project een eigen ontwerpadviseur",
  },
  {
    title: "Luxe Materialen",
    description: "Een zorgvuldig gekozen selectie van de mooiste oppervlakken",
  },
] as const;

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

function useCountUp(target: number, duration: number, started: boolean, decimals = 0): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, decimals]);
  return count;
}

export function WhyWithUsSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const pillars = [
    {
      id: "vakmanschap",
      number: "01",
      title: "Europees Vakmanschap",
      description: "Elk detail van uw keuken wordt met uiterste precisie en vakmanschap vervaardigd door onze Europese producenten.",
      image: craftsmanship,
      imageAlt: "Europees vakmanschap — precisie en kwaliteit",
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
      image: showroomImg,
      imageAlt: "Persoonlijke consultatie in de showroom",
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
      description: "Alleen geselecteerde premium materialen — van Carrara marmer tot gerookt eiken — worden gebruikt voor uw keuken.",
      image: matMarble,
      imageAlt: "Premium materialen — marmer en eiken afwerkingen",
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
      image: heroKitchen,
      imageAlt: "Premium installatie en service",
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

  const activePillar = hoveredCard ? pillars.find((p) => p.id === hoveredCard) ?? null : null;
  const displayImage = activePillar ? activePillar.image : heroKitchen;
  const displayAlt = activePillar ? activePillar.imageAlt : "Luxe designkeuken op maat";

  return (
    <section
      ref={sectionRef}
      id="why-with-us"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${matConcrete})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[rgba(253,252,249,0.94)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(35,185,196,0.04),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">

        {/* ── Header ── */}
        <div className="mb-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easing }}
            viewport={motionViewport}
            className="mb-4 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C8A96B]/60" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#C8A96B]"
              style={{ fontFamily: "var(--font-body)" }}>
              Onze belofte
            </span>
          </motion.div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easing, delay: 0.1 }}
              viewport={motionViewport}
              className="max-w-[650px] font-serif text-[clamp(2.4rem,5.5vw,3.6rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "#163847" }}
            >
              Waarom Kiest U{" "}
              <em className="italic" style={{ color: "#23B9C4" }}>Voor Ons?</em>
            </motion.h2>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easing, delay: 0.22 }}
              viewport={motionViewport}
              className="max-w-[420px] text-[0.925rem] font-light leading-[1.75] text-[#555555]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bij Keuken Centrum Utrecht combineren we Europees vakmanschap met
              modern design op maat. Wij geloven dat het ontwerpproces net zo
              verfijnd moet aanvoelen als het uiteindelijke resultaat.
            </motion.p>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-start">

          {/* ─── LEFT: Feature cards ─── */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#163847]"
                style={{ fontFamily: "var(--font-body)" }}>
                Wat Wij Bieden
              </span>
              <span className="h-px flex-1 max-w-[56px] bg-[#23B9C4]/30" />
            </div>

            <div className="flex flex-col gap-3.5">
              {pillars.map((pillar, i) => {
                const isActive = hoveredCard === pillar.id;
                return (
                  <motion.div
                    key={pillar.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, ease: easing, delay: i * 0.09 }}
                    viewport={motionViewport}
                    onMouseEnter={() => setHoveredCard(pillar.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative flex cursor-default items-start gap-5 overflow-hidden rounded-[22px] border bg-white px-6 py-5"
                    style={{
                      borderColor: isActive ? "rgba(35,185,196,0.30)" : "rgba(0,0,0,0.05)",
                      boxShadow: isActive
                        ? "0 20px 56px -16px rgba(35,185,196,0.16), 0 4px 16px -4px rgba(0,0,0,0.06)"
                        : "0 2px 16px -6px rgba(0,0,0,0.04)",
                      transform: isActive ? "translateY(-3px)" : "translateY(0)",
                      transition: "border-color 500ms, box-shadow 500ms, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {/* Large editorial background number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none font-serif font-bold leading-none tracking-tighter"
                      style={{
                        fontSize: "5.5rem",
                        color: "rgba(22,56,71,0.042)",
                        transition: "color 500ms",
                      }}
                    >
                      {pillar.number}
                    </span>

                    {/* Left accent bar */}
                    <div
                      className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full bg-[#23B9C4]"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleY(1)" : "scaleY(0.4)",
                        transition: "opacity 500ms, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                        transformOrigin: "center",
                      }}
                    />

                    {/* Icon — uses currentColor, NEVER disappears */}
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border text-[#23B9C4]"
                      style={{
                        borderColor: isActive ? "rgba(35,185,196,0.50)" : "rgba(35,185,196,0.18)",
                        backgroundColor: isActive ? "rgba(35,185,196,0.14)" : "rgba(35,185,196,0.07)",
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                        boxShadow: isActive ? "0 4px 18px rgba(35,185,196,0.22)" : "none",
                        transition: "border-color 500ms, background-color 500ms, transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms",
                      }}
                    >
                      {pillar.icon}
                    </div>

                    {/* Text */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <p
                        className="text-[0.95rem] font-semibold tracking-[-0.005em]"
                        style={{
                          color: isActive ? "#23B9C4" : "#163847",
                          transition: "color 500ms",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {pillar.title}
                      </p>
                      <p className="mt-1.5 text-[0.82rem] font-light leading-[1.65] text-[#666666]"
                        style={{ fontFamily: "var(--font-body)" }}>
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easing, delay: 0.45 }}
              viewport={motionViewport}
              className="mt-8"
            >
              <a
                href="/consultation"
                className="group relative inline-flex h-[54px] min-w-[240px] items-center justify-center gap-2.5 overflow-hidden rounded-[14px] bg-[#23B9C4] px-8 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_-8px_rgba(35,185,196,0.35)] transition-all duration-400 ease-out hover:bg-[#163847] hover:shadow-[0_16px_36px_-6px_rgba(22,56,71,0.40)] active:scale-[0.98]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Plan uw showroombezoek</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-out group-hover:translate-x-1" />
                <div aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-full" />
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT: Interactive image panel ─── */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Outer wrapper — no overflow-hidden so floaters can extend outside */}
              <div className="relative">

                {/* Main image frame */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: easing }}
                  viewport={motionViewport}
                  className="relative overflow-hidden rounded-[28px] border border-black/[0.06] shadow-[0_24px_64px_-20px_rgba(0,0,0,0.15)]"
                  style={{ aspectRatio: "4/5" }}
                >
                  {/* Crossfade images */}
                  <AnimatePresence mode="sync">
                    <motion.img
                      key={displayImage as string}
                      src={displayImage}
                      alt={displayAlt}
                      loading="eager"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.65, ease: easing }}
                    />
                  </AnimatePresence>

                  {/* Depth gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061B24]/78 via-[#061B24]/12 to-transparent" />

                  {/* Active label at bottom — changes on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <AnimatePresence mode="wait">
                      {activePillar ? (
                        <motion.div
                          key={activePillar.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.35, ease: easing }}
                        >
                          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.30em] text-[#C8A96B]"
                            style={{ fontFamily: "var(--font-body)" }}>
                            {activePillar.number} · Geselecteerd
                          </p>
                          <p className="mt-2 font-serif text-[1.5rem] font-light leading-tight text-white">
                            {activePillar.title}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default-label"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.35, ease: easing }}
                        >
                          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.30em] text-[#C8A96B]/60"
                            style={{ fontFamily: "var(--font-body)" }}>
                            Hover over een kenmerk
                          </p>
                          <p className="mt-2 font-serif text-[1.5rem] font-light leading-tight text-white/70">
                            Uw droomkeuken op maat
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* ── Premium circular experience badge ── */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.72 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: easing, delay: 0.35 }}
                  viewport={motionViewport}
                  className="absolute -right-9 -top-9 z-20"
                >
                  {/* Subtle float loop */}
                  <motion.div
                    animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
                  >
                    {/* Outermost thin decorative ring */}
                    <div
                      style={{
                        width: 138,
                        height: 138,
                        borderRadius: "50%",
                        border: "1px solid rgba(200,169,107,0.38)",
                        padding: "6px",
                        boxShadow: [
                          "0 24px 64px rgba(0,0,0,0.13)",
                          "0 8px 24px rgba(0,0,0,0.08)",
                          "0 0 0 3px rgba(251,248,242,0.85)",
                        ].join(", "),
                      }}
                    >
                      {/* Inner content seal */}
                      <div
                        className="relative flex h-full w-full flex-col items-center justify-center rounded-full"
                        style={{
                          background: "linear-gradient(148deg, #FBF8F2 0%, #F4ECDA 55%, #EDE0C8 100%)",
                          border: "1px solid rgba(200,169,107,0.30)",
                          boxShadow: [
                            "inset 0 1px 0 rgba(255,255,255,0.92)",
                            "inset 0 -2px 8px rgba(180,130,60,0.06)",
                          ].join(", "),
                          overflow: "hidden",
                        }}
                      >
                        {/* Glass highlight arc — top */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute left-3 right-3 top-2.5 h-7 rounded-full"
                          style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, transparent 100%)",
                            opacity: 0.60,
                          }}
                        />

                        {/* Decorative hairline above number */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute left-1/2 top-[26px] h-px w-[38%] -translate-x-1/2"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(200,169,107,0.45), transparent)",
                          }}
                        />

                        {/* Main number */}
                        <span
                          className="relative font-serif text-[2.85rem] font-light leading-none tracking-tight"
                          style={{ color: "#163847" }}
                        >
                          15+
                        </span>

                        {/* Label */}
                        <span
                          className="relative mt-1.5 text-[0.44rem] font-semibold uppercase"
                          style={{
                            letterSpacing: "0.30em",
                            color: "#B08040",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          Jaar Ervaring
                        </span>

                        {/* Decorative hairline below label */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-[22px] left-1/2 h-px w-[38%] -translate-x-1/2"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(200,169,107,0.35), transparent)",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* ── Craftsmanship thumbnail + connector ── */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: easing, delay: 0.42 }}
                  viewport={motionViewport}
                  className="absolute -bottom-11 right-5 z-10 hidden sm:block"
                >
                  {/* Vertical connector line */}
                  <div className="absolute -top-6 left-1/2 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#23B9C4]/40 to-[#23B9C4]/15" />
                  {/* Small dot at top of line */}
                  <div className="absolute -top-7 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#23B9C4]/40" />

                  {/* Thumbnail */}
                  <div className="relative h-[84px] w-[110px] overflow-hidden rounded-[14px] border border-white shadow-[0_8px_28px_rgba(0,0,0,0.16)]">
                    <img
                      src={craftsmanship}
                      alt="Vakmanschap detail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="absolute bottom-2 left-2.5">
                      <p className="text-[0.46rem] font-semibold uppercase tracking-[0.18em] text-white/90"
                        style={{ fontFamily: "var(--font-body)" }}>
                        Vakmanschap
                      </p>
                    </div>
                  </div>
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
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeOpacity="0.55"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          exit={{ pathLength: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx={dotCX}
          cy={dotCY}
          r="1.5"
          fill="#D4AF37"
          fillOpacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 0.15, duration: 0.2 }}
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
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="block text-[8px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] mb-1">
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
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.90)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,107,0.05),transparent_45%)]"
      />
      <div className="site-container relative">
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
                Premium Configurator
              </span>
            </motion.div>

            {/* The Configurator Mockup Frame */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#C8A96B]/30 bg-[#111111] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col"
            >
              {/* Fake Header */}
              <div className="flex h-8 md:h-10 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
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
                                      ? "hotspotBreathe 3s ease-in-out infinite"
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
                                    isHovered || isActive ? "#D4AF37" : "rgba(212,175,55,0.85)"
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
                            className="text-[0.48rem] uppercase tracking-[0.13em] leading-none"
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
                    <p className="text-[0.48rem] uppercase tracking-[0.2em] text-[#B08D57] mb-0.5">Kies</p>
                    <p
                      className="text-[0.72rem] text-[#F7F5F2]"
                      style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
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
                      transition={{ duration: 0.22 }}
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
                                className="text-[0.54rem] font-normal tracking-[0.04em] leading-tight"
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
                                <p className="mt-0.5 text-[0.46rem] leading-[1.35] text-white/30">
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
                      className="flex h-7 w-full items-center justify-center rounded-[6px] bg-[#C8A96B] text-[0.52rem] font-medium uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-[#b59556]"
                    >
                      Volledig Ontwerp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-30 w-[260px] sm:w-[300px] rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-[rgba(9,9,9,0.95)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-[24px]"
            >
              <p className="text-[0.65rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#C8A96B]">
                Digitale Showroom
              </p>
              <p className="mt-2.5 text-[0.8rem] sm:text-[0.875rem] font-light leading-[1.65] text-zinc-300">
                Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.
              </p>
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
              className="mt-6 max-w-[34rem] text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[#111111]"
              style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 400 }}
            >
              Een showroom die naar u toe komt
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[#666666]"
            >
              Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm.
              Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog
              voordat u onze showroom bezoekt.
            </motion.p>
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 h-px w-full bg-[rgba(200,169,107,0.15)]"
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
                  <span className="text-[0.875rem] font-light leading-[1.65] text-[#555555]">
                    {item.label}
                  </span>
                </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-10">
              <Button
                asChild
                className="brand-green-button group relative min-h-[3.5rem] rounded-[16px] px-[2.5rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="/brands" className="flex items-center gap-2">
                  <span>Start uw ontwerp</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  
                  {/* Premium Shine Swipe Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>
              </Button>
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
