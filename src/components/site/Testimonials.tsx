"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Location, TickCircle } from "iconsax-react";
import { motionViewport } from "@/lib/motion";
import collectionMinimal from "@/assets/collection-minimal.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionWarm from "@/assets/collection-warm.jpg";
import showroomImage from "@/assets/showroom.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const testimonialsData = [
  {
    image: collectionMinimal,
    quote:
      "We wilden geen standaard keuken, maar een ruimte die rust, precisie en luxe uitstraalt. Het ontwerp voelde vanaf de eerste presentatie architectonisch doordacht, en de uitvoering was even zorgvuldig.",
    client: "Familie Van Deurzen",
    project: "LEICHT Residence Project",
    location: "Utrecht",
    year: "2025",
    brand: "LEICHT",
    tags: ["LEICHT", "Maatwerk", "Modern"],
  },
  {
    image: collectionWarm,
    quote:
      "Vanaf het eerste moodboard tot de plaatsing was alles coherent. Materialen, belijning en apparatuur sloten precies aan op de architectuur van onze woning.",
    client: "Mevr. de Jong",
    project: "Nobilia Family Loft",
    location: "Bilthoven",
    year: "2024",
    brand: "NOBILIA",
    tags: ["NOBILIA", "Warm Minimal", "Greeploos"],
  },
  {
    image: collectionModern,
    quote:
      "De begeleiding voelde internationaal en volwassen. Geen verkoopdruk, maar een ontwerpgesprek op niveau met veel aandacht voor verhoudingen en afwerking.",
    client: "Bouwbedrijf Vreeburg",
    project: "Zampieri Loft Line",
    location: "Nieuwegein",
    year: "2025",
    brand: "ZAMPIERI",
    tags: ["ZAMPIERI", "Loft", "Stone Finish"],
  },
  {
    image: heroKitchen,
    quote:
      "De keuken voelt alsof hij altijd onderdeel van het huis is geweest. Juist die vanzelfsprekende luxe en het dagelijkse gebruiksgemak maken dit project bijzonder.",
    client: "Dhr. & Mevr. Jaspers",
    project: "Cucinesse Courtyard Kitchen",
    location: "Houten",
    year: "2024",
    brand: "CUCINESSE",
    tags: ["CUCINESSE", "Courtyard", "Soft Oak"],
  },
  {
    image: collectionMinimal,
    quote:
      "Er is slim meegedacht over licht, routing en werkruimte. Het eindresultaat oogt stil en luxe, maar werkt dagelijks ook gewoon perfect.",
    client: "Familie Keizer",
    project: "Leicht Garden Villa",
    location: "Zeist",
    year: "2025",
    brand: "LEICHT",
    tags: ["LEICHT", "Villa", "Natural Stone"],
  },
  {
    image: showroomImage,
    quote:
      "De verfijning zit in de details: voeglijnen, materiaalovergangen en de rust van het totaalbeeld. Dat zie je niet vaak zo consequent uitgevoerd.",
    client: "Familie Hesselink",
    project: "Premium Atelier Kitchen",
    location: "Amersfoort",
    year: "2025",
    brand: "NOBILIA",
    tags: ["NOBILIA", "Atelier", "Monolith"],
  },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: luxuryEase } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: luxuryEase } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

// ─── Stars ───────────────────────────────────────────────────────────────────

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className="fill-[#C8A96B] text-[#C8A96B]"
        />
      ))}
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────────────

type CardData = (typeof testimonialsData)[number];

function TestimonialCard({ story }: { story: CardData }) {
  const initials = toInitials(story.client);
  const badge = story.brand + "  ·  " + story.project;

  return (
    <article
      className="group relative mb-5 overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(35,185,196,0.20)] select-none"
      style={{
        boxShadow: "0 1px 0 rgba(255,255,255,0.04) inset, 0 18px 50px -22px rgba(0,0,0,0.6)",
      }}
    >
      {/* Hover glow — subtle teal, not gaming */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          boxShadow: "0 0 0 1px rgba(35,185,196,0.14) inset, 0 28px 60px -30px rgba(35,185,196,0.18)",
        }}
      />

      {/* Row 1: Stars + Image */}
      <div className="flex items-start justify-between gap-4">
        <Stars />
        <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10">
          <img
            src={story.image as unknown as string}
            alt={story.project}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Brand badge */}
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#C8A96B]/25 bg-[#C8A96B]/[0.07] px-2.5 py-1">
        <span className="h-1 w-1 rounded-full bg-[#C8A96B]" />
        <span
          className="text-[10px] font-medium uppercase tracking-[0.16em]"
          style={{ color: "#D4B07A", fontFamily: "var(--font-body)" }}
        >
          {badge}
        </span>
      </div>

      {/* Quote */}
      <p className="mt-4 min-h-[108px] font-serif text-[17px] font-light leading-relaxed text-white/82">
        <Quote className="-mt-1 mr-1 inline h-3.5 w-3.5 text-[#C8A96B]/60" />
        {story.quote}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold tracking-wider text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {initials}
          </div>
          <div>
            <div className="text-[13px] font-medium text-white" style={{ fontFamily: "var(--font-body)" }}>
              {story.client}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-white/45" style={{ fontFamily: "var(--font-body)" }}>
              <Location size={12} variant="Linear" />
              {story.location} · {story.year}
            </div>
          </div>
        </div>
        <TickCircle size={20} variant="Bold" className="shrink-0 text-[#23B9C4]" />
      </div>
    </article>
  );
}

// ─── Scrolling Column ─────────────────────────────────────────────────────────

function Column({ stories, direction }: { stories: readonly CardData[]; direction: "up" | "down" }) {
  const doubled = [...stories, ...stories];
  return (
    <div
      className="relative h-[760px] overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}
    >
      <div className={direction === "up" ? "animate-kc-scroll-up" : "animate-kc-scroll-down"}>
        {doubled.map((story, i) => (
          <TestimonialCard key={`${story.client}-${i}`} story={story} />
        ))}
      </div>
    </div>
  );
}

// ─── Rating Ring ─────────────────────────────────────────────────────────────

function RatingRing() {
  const r = 88;
  const circumference = 2 * Math.PI * r;
  const filledRatio = 0.98;
  return (
    <div className="relative mx-auto mt-7 h-56 w-56">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <defs>
          <linearGradient id="kc-arc-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1DDA6" />
            <stop offset="100%" stopColor="#B8924A" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#kc-arc-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - filledRatio)}
          className="animate-kc-dash"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-serif text-7xl font-light tracking-tight text-white">4.9</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.3em]" style={{ color: "#DCBE82", fontFamily: "var(--font-body)" }}>
          van 5.0
        </div>
        <div className="mt-3">
          <Stars size={12} />
        </div>
      </div>
    </div>
  );
}

// ─── Center Showcase ──────────────────────────────────────────────────────────

function CenterShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Soft showroom radial light — luxury, not gaming */}
      <div
        className="pointer-events-none absolute -inset-20 -z-10 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 28%, rgba(35,185,196,0.22), transparent 65%), radial-gradient(45% 40% at 50% 78%, rgba(8,36,48,0.65), transparent 70%)",
        }}
      />
      {/* Secondary soft teal bloom */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 opacity-40 blur-2xl"
        style={{
          background: "radial-gradient(60% 55% at 50% 35%, rgba(35,185,196,0.14), transparent 70%)",
        }}
      />

      <div className="animate-kc-float">
        {/* Premium border wrapper */}
        <div
          className="relative rounded-[34px] p-[1.5px]"
          style={{
            background:
              "linear-gradient(160deg, rgba(220,190,130,0.85) 0%, rgba(180,140,70,0.25) 35%, rgba(255,255,255,0.55) 60%, rgba(180,140,70,0.65) 100%)",
            boxShadow:
              "0 60px 120px -30px rgba(4,14,28,0.80), 0 24px 48px -16px rgba(0,0,0,0.45), 0 0 0 1px rgba(35,185,196,0.08)",
          }}
        >
          {/* Dual-tone card: dark teal top → cream bottom */}
          <div
            className="relative overflow-hidden rounded-[33px]"
            style={{
              background:
                "linear-gradient(180deg, #082430 0%, #0E3443 48%, #FFFFFF 48.2%, #F4F9FA 100%)",
            }}
          >
            {/* ── TOP: dark half ── */}
            <div className="relative px-8 pt-8 pb-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "radial-gradient(70% 60% at 50% 0%, rgba(255,255,255,0.09), transparent 70%)",
                }}
              />
              {/* Google Verified badge */}
              <div className="relative flex justify-center">
                <div
                  className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(220,190,130,0.30)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#DCBE82" }} />
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.22em]"
                    style={{ color: "#E8D6A8", fontFamily: "var(--font-body)" }}
                  >
                    Google Reviews · Verified
                  </span>
                </div>
              </div>
              <RatingRing />
            </div>

            {/* Gold seam */}
            <div
              className="pointer-events-none relative h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(184,146,74,0.6), transparent)" }}
            />

            {/* ── BOTTOM: cream half ── */}
            <div className="relative px-8 pt-7 pb-8">
              <div className="space-y-2.5">
                {(
                  [
                    { value: "127+", label: "Beoordelingen" },
                    { value: "45+", label: "Jaar Vakmanschap" },
                    { value: "98%", label: "Aanbevolen" },
                  ] as const
                ).map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl px-5 py-4"
                    style={{
                      background: "rgba(247,242,232,0.72)",
                      border: "1px solid rgba(184,146,74,0.16)",
                    }}
                  >
                    <span
                      className="text-[11px] uppercase tracking-[0.22em]"
                      style={{ color: "#6a5224", fontFamily: "var(--font-body)" }}
                    >
                      {stat.label}
                    </span>
                    <span className="font-serif text-3xl font-light" style={{ color: "#0B1B3A" }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Google Reviews badge */}
              <div
                className="mt-5 flex items-center justify-between rounded-2xl px-4 py-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(184,146,74,0.18)",
                  boxShadow: "0 8px 20px -10px rgba(11,27,58,0.14)",
                }}
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"
                    />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: "#0B1B3A", fontFamily: "var(--font-body)" }}>
                    Google Reviews
                  </span>
                </div>
                <Stars size={13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Marquee ───────────────────────────────────────────────────────────

function DraggableMarqueeRow({
  items,
  animClass,
  reduceMotion,
}: {
  items: readonly CardData[];
  animClass: string;
  reduceMotion: boolean | null;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartLeft.current = rowRef.current.scrollLeft;
    rowRef.current.setPointerCapture(e.pointerId);
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !rowRef.current) return;
    rowRef.current.scrollLeft = scrollStartLeft.current - (e.clientX - dragStartX.current);
  };
  const onPointerUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      ref={rowRef}
      className="relative w-full overflow-x-auto scrollbar-hide"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        ref={trackRef}
        className={`flex gap-5 w-max px-3 ${reduceMotion ? "" : animClass}`}
      >
        {[...items, ...items].map((story, idx) => (
          <div key={`${story.client}-${idx}`} className="w-[320px] sm:w-[370px] shrink-0">
            <TestimonialCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  const leftStories = [
    testimonialsData[0],
    testimonialsData[1],
    testimonialsData[2],
  ] as const;

  const rightStories = [
    testimonialsData[3],
    testimonialsData[4],
    testimonialsData[5],
  ] as const;

  const row2Data = [
    testimonialsData[3],
    testimonialsData[4],
    testimonialsData[5],
    testimonialsData[0],
    testimonialsData[1],
    testimonialsData[2],
  ] as const;

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-white/[0.06]"
      style={{ background: "linear-gradient(180deg, #082430 0%, #0E3443 50%, #082430 100%)" }}
    >
      {/* CSS for mobile marquee + scrollbar hide */}
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-ltr { animation: marquee-ltr 48s linear infinite; }
        .animate-marquee-rtl { animation: marquee-rtl 54s linear infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Central ambient teal glow — luxury showroom quality */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(35,185,196,0.22), transparent 62%)" }}
      />
      {/* Subtle top edge light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(35,185,196,0.20)] to-transparent"
      />
      {/* Bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent"
      />

      {/* ── Section header ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-0">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : sectionReveal}
        >
          <motion.div
            variants={reduceMotion ? undefined : stagger}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Eyebrow */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-2 flex items-center justify-center gap-4"
            >
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8A96B]/60" />
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"
                  />
                </svg>
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/65"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Google Beoordelingen
                </span>
              </div>
              <span aria-hidden="true" className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8A96B]/60" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl"
            >
              Ervaringen van klanten
              <br />
              <em className="italic text-[#C8A96B]">uit Utrecht en omgeving</em>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Persoonlijk ontwerpadvies, Duitse precisie en Italiaanse elegantie
              — samengebracht in een installatie die generaties meegaat.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Triptych columns ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_4fr_3fr]">

          {/* Left column — scroll up */}
          <div className="hidden lg:block">
            <Column stories={leftStories} direction="up" />
          </div>

          {/* Center showcase */}
          <div className="flex items-center justify-center">
            <CenterShowcase />
          </div>

          {/* Right column — scroll down */}
          <div className="hidden lg:block">
            <Column stories={rightStories} direction="down" />
          </div>

          {/* Mobile marquee rows */}
          <div className="flex flex-col gap-6 lg:hidden">
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-[#082430] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-[#082430] to-transparent" />
              <DraggableMarqueeRow items={testimonialsData} animClass="animate-marquee-rtl" reduceMotion={reduceMotion} />
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-[#082430] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-[#082430] to-transparent" />
              <DraggableMarqueeRow items={row2Data} animClass="animate-marquee-ltr" reduceMotion={reduceMotion} />
            </div>
          </div>

        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={motionViewport}
        variants={reduceMotion ? undefined : fadeUp}
        className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-6"
      >
        <div className="flex flex-col items-center gap-7 text-center">
          {/* Ornamental rule */}
          <div className="flex items-center gap-5" aria-hidden="true">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#C8A96B]/30" />
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path d="M5 0L6.18 3.82L10 5L6.18 6.18L5 10L3.82 6.18L0 5L3.82 3.82Z" fill="#C8A96B" opacity="0.40" />
            </svg>
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#C8A96B]/30" />
          </div>

          <p className="max-w-xs font-serif text-[1.2rem] font-light leading-relaxed text-white/45">
            Ontdek wat dit voor uw woning betekent.
          </p>

          <a href="/consultation" className="group inline-flex items-center gap-3 transition-all duration-500">
            <span
              className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#C8A96B] transition-opacity duration-300 group-hover:opacity-55"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Maak kennis met ons team
            </span>
            <svg
              className="h-3 w-3 text-[#C8A96B] opacity-65 transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
