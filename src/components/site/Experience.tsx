"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { CountUpValue } from "@/components/site/CountUpValue";
import designImg from "@/assets/Eén plaats voor al uw wensen/Design_keukens.webp";
import priceImg from "@/assets/Eén plaats voor al uw wensen/Keukens_voor_elke_prijs.webp";
import modernImg from "@/assets/Eén plaats voor al uw wensen/Modern_keukens.webp";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: 50, suffix: "+", label: "Keukenconcepten" },
  { value: 1000, suffix: "+", label: "Materiaalcombinaties" },
  { value: 45, suffix: "+", label: "Jaar ervaring" },
] as const;

const collections = [
  {
    id: "design",
    featured: true,
    collectionTitle: "Design Collection",
    luxuryDescription:
      "Architecturale keukens met verfijnde materialen en tijdloze verhoudingen.",
    title: "Design Keukens",
    image: designImg,
    href: "#showroom",
  },
  {
    id: "modern",
    featured: false,
    collectionTitle: "Modern Living",
    luxuryDescription:
      "Hedendaags wonen met slanke lijnen, warme texturen en intelligente indeling.",
    title: "Moderne Keukens",
    image: modernImg,
    href: "#showroom",
  },
  {
    id: "budget",
    featured: false,
    collectionTitle: "Smart Budget",
    luxuryDescription:
      "Topkwaliteit en persoonlijk advies — voor elk budget, zonder compromis.",
    title: "Keukens voor elke prijs",
    image: priceImg,
    href: "#consultation",
  },
] as const;

// ─── Stat icons ───────────────────────────────────────────────────────────────

function LayersIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function SwatchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2a2 2 0 0 0-2 2v7H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h3l6 5v-5h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2h-3z" />
      <path d="M15 8h.01M15 12h.01" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

const statIcons = [<LayersIcon key="layers" />, <SwatchIcon key="swatch" />, <AwardIcon key="award" />];

// ─── Motion config ────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: luxuryEase } },
};

const staggerHeader: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: luxuryEase } },
};

const staggerCards: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// ─── Premium Card ─────────────────────────────────────────────────────────────

type CardProps = {
  item: (typeof collections)[number];
  reduceMotion: boolean | null;
};

function LuxuryCard({ item, reduceMotion }: CardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [14, -14]);

  // 3D tilt
  const rawRotX = useMotionValue(0);
  const rawRotY = useMotionValue(0);
  const springCfg = { stiffness: 130, damping: 22, mass: 0.6 };
  const rotX = useSpring(rawRotX, springCfg);
  const rotY = useSpring(rawRotY, springCfg);

  // Hover lift
  const rawY = useMotionValue(0);
  const liftY = useSpring(rawY, { stiffness: 160, damping: 24 });

  // Shadow spring
  const rawShadow = useMotionValue("0 8px 32px -16px rgba(0,0,0,0.65)");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!wrapperRef.current || reduceMotion) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setSpot({ x, y, visible: true });
      rawRotX.set(((cy - y) / cy) * 3);
      rawRotY.set(((x - cx) / cx) * 3);
    },
    [reduceMotion, rawRotX, rawRotY]
  );

  const handleMouseEnter = useCallback(() => {
    if (reduceMotion) return;
    rawY.set(-12);
    rawShadow.set(
      "0 28px 64px -24px rgba(0,0,0,0.82), 0 0 48px -12px rgba(49,199,212,0.14)"
    );
  }, [reduceMotion, rawY, rawShadow]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion) return;
    setSpot((s) => ({ ...s, visible: false }));
    rawRotX.set(0);
    rawRotY.set(0);
    rawY.set(0);
    rawShadow.set("0 8px 32px -16px rgba(0,0,0,0.65)");
  }, [reduceMotion, rawRotX, rawRotY, rawY, rawShadow]);

  const isFeatured = item.featured;

  return (
    <motion.div
      variants={revealVariants}
      ref={wrapperRef}
      className={isFeatured ? "h-full lg:row-span-2" : "h-full"}
      style={{ perspective: "900px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.article
        className="group relative h-full cursor-pointer overflow-hidden border border-white/[0.06] transition-colors duration-700 hover:border-[rgba(49,199,212,0.26)]"
        style={{
          borderRadius: "36px",
          y: reduceMotion ? 0 : liftY,
          rotateX: reduceMotion ? 0 : rotX,
          rotateY: reduceMotion ? 0 : rotY,
          transformStyle: "preserve-3d",
          boxShadow: rawShadow as unknown as string,
          minHeight: isFeatured ? "420px" : "196px",
          willChange: "transform",
        }}
      >
        {/* ── Parallax image ── */}
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          draggable={false}
          style={reduceMotion ? undefined : { y: imageParallax }}
          className={[
            "absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover will-change-transform",
            "transition-[transform,filter] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.042] group-hover:brightness-[1.04]",
          ].join(" ")}
        />

        {/* ── Base gradient scrim ── */}
        <div
          className="absolute inset-0 transition-[background] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.50) 58%, rgba(0,0,0,0.90) 100%)",
          }}
        />
        {/* Hover scrim — slightly lighter, reveals more image */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-[700ms] group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.42) 56%, rgba(0,0,0,0.80) 100%)",
          }}
        />

        {/* ── Cursor spotlight — teal ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            borderRadius: "inherit",
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, rgba(49,199,212,0.10), transparent 58%)`,
          }}
        />

        {/* ── Top hairline — teal sweep ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(49,199,212,0), rgba(49,199,212,0.88), rgba(49,199,212,0))",
          }}
        />

        {/* ── Bottom teal ambient ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 60% 28% at 50% 100%, rgba(49,199,212,0.11), transparent 65%)",
          }}
        />

        {/* ── Link wrapper ── */}
        <a
          href={item.href}
          aria-label={`${item.collectionTitle}: ${item.luxuryDescription}`}
          className="absolute inset-0 z-30 flex flex-col justify-end p-7 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(49,199,212,0.75)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1E2C]"
          style={{ borderRadius: "inherit" }}
        >
          {/* Collection tag */}
          <p
            className="mb-2.5 text-[0.6rem] font-light tracking-[0.32em] text-[rgba(49,199,212,0.58)] transition-colors duration-500 group-hover:text-[rgba(49,199,212,0.92)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.collectionTitle}
          </p>

          {/* Title */}
          <p
            className={[
              "font-serif leading-[1.08] tracking-[-0.025em] text-white",
              isFeatured
                ? "text-[clamp(1.55rem,2.4vw,2.1rem)]"
                : "text-[clamp(1.25rem,1.7vw,1.55rem)]",
              "transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1",
            ].join(" ")}
          >
            {item.collectionTitle}
          </p>

          {/* Description — reveals on hover */}
          <p
            className={[
              "overflow-hidden font-light leading-[1.7] text-[rgba(255,255,255,0.0)]",
              "transition-[max-height,opacity,margin,color] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "[max-height:0px]",
              "group-hover:mt-3 group-hover:text-[rgba(255,255,255,0.60)] group-hover:[max-height:72px]",
              isFeatured ? "text-[0.9rem]" : "text-[0.82rem]",
            ].join(" ")}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.luxuryDescription}
          </p>

          {/* CTA arrow */}
          <span
            className={[
              "mt-3 inline-flex translate-y-3 items-center gap-2 opacity-0",
              "text-[0.7rem] font-light tracking-[0.2em] text-[rgba(49,199,212,0)]",
              "transition-[transform,opacity,gap,color] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:translate-y-0 group-hover:gap-[10px] group-hover:text-[rgba(49,199,212,0.90)] group-hover:opacity-100",
            ].join(" ")}
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="uppercase">Verken collectie</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2" />
          </span>
        </a>
      </motion.article>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Experience() {
  const reduceMotion = useReducedMotion();
  const featured = collections.find((c) => c.featured)!;
  const supporting = collections.filter((c) => !c.featured);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0B1E2C] py-[80px] text-white md:py-[120px]"
    >
      {/* ── Background layers ── */}

      {/* 1. Central architectural teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[190px]"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.10), transparent 65%)" }}
      />

      {/* 2. Top-left directional spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[80vh] w-[80vh] rounded-full blur-[160px] opacity-55"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.12), transparent 60%)" }}
      />

      {/* 3. Bottom-right ambient fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[18%] -right-[15%] h-[55vh] w-[55vh] rounded-full blur-[140px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.08), transparent 65%)" }}
      />

      {/* 4. Edge vignette — architectural depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 42%, #040A0F 100%)" }}
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
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.22), transparent)" }}
      />
      {/* 7. Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.10), transparent)" }}
      />

      <div className="site-container relative">

        {/* ── Section header ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-[42rem]">
            {/* Eyebrow */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(49,199,212,0.55)]" />
              <span
                className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#31C7D4]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Keukeninspiratie
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] font-light leading-[1.08] tracking-[-0.022em] text-white"
            >
              Eén plaats voor{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(128deg, #31C7D4 0%, #66DCE6 48%, #23B9C4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                al uw wensen
              </em>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-[32rem] text-[0.92rem] font-light leading-[1.82] text-[rgba(255,255,255,0.48)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Van verfijnd design tot modern en budgetvriendelijk: ontdek stijlen
              die passen bij uw ruimte en manier van leven.
            </motion.p>
          </div>

          {/* Right: CBW + luxury pill */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="flex shrink-0 flex-col items-start gap-4 md:items-end"
          >
            {/* CBW badge */}
            <div className="flex items-center gap-3">
              <img
                src={kc.cbwLogo}
                alt="CBW erkend"
                className="h-12 w-auto opacity-40 md:h-14"
                loading="lazy"
              />
              <span
                className="text-[0.68rem] font-light leading-snug text-[rgba(255,255,255,0.20)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Vertrouwen
                <br />
                sinds {kc.founded}
              </span>
            </div>

            {/* Luxury floating pill badge */}
            <div
              className="flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "rgba(49,199,212,0.22)",
                background: "rgba(49,199,212,0.05)",
              }}
            >
              <span
                className="h-[5px] w-[5px] rounded-full bg-[#31C7D4]"
                style={{ boxShadow: "0 0 6px rgba(49,199,212,0.65)" }}
              />
              <span
                className="text-[0.55rem] font-semibold uppercase tracking-[0.26em] text-[rgba(49,199,212,0.70)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Exclusieve Showroom · Utrecht
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : fadeUp}
          className="mb-8 rounded-[16px] border px-6 py-5 backdrop-blur-md md:px-10"
          style={{
            borderColor: "rgba(49,199,212,0.09)",
            background: "rgba(11,30,44,0.55)",
          }}
        >
          <ul className="grid grid-cols-3 divide-x divide-[rgba(49,199,212,0.07)]">
            {stats.map((stat, i) => (
              <li
                key={stat.label}
                className="group cursor-default px-4 text-center first:pl-0 last:pr-0 sm:px-6 md:px-8"
              >
                {/* Icon */}
                <div className="mb-2 flex justify-center text-[rgba(49,199,212,0.36)] transition-colors duration-400 group-hover:text-[#31C7D4]">
                  {statIcons[i]}
                </div>

                {/* Number */}
                <p className="font-serif text-[clamp(1.55rem,2.6vw,2.1rem)] font-light leading-none tracking-[-0.03em] text-white transition-colors duration-400 group-hover:text-[#31C7D4]">
                  <CountUpValue value={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <p
                  className="mt-1.5 text-[0.6rem] font-light uppercase tracking-[0.18em] text-[rgba(255,255,255,0.28)] transition-colors duration-400 group-hover:text-[rgba(247,244,238,0.52)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </p>

                {/* Teal underline — reveals on hover */}
                <div className="mx-auto mt-3 h-px w-8 origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, transparent, #31C7D4, transparent)" }}
                />
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Luxury card grid ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[240px_240px]"
        >
          {/* Featured — spans 2 rows */}
          <div className="lg:col-span-7 lg:row-span-2">
            <LuxuryCard item={featured} reduceMotion={reduceMotion} />
          </div>

          {/* Supporting */}
          {supporting.map((item) => (
            <div key={item.id} className="lg:col-span-5">
              <LuxuryCard item={item} reduceMotion={reduceMotion} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
