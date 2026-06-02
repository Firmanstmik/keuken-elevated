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

// ─── Motion config ────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: luxuryEase },
  },
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
  // ── Refs & state ──────────────────────────────
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  // ── Scroll parallax for image ─────────────────
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [14, -14]);

  // ── 3D tilt motion values ─────────────────────
  const rawRotX = useMotionValue(0);
  const rawRotY = useMotionValue(0);
  const springCfg = { stiffness: 130, damping: 22, mass: 0.6 };
  const rotX = useSpring(rawRotX, springCfg);
  const rotY = useSpring(rawRotY, springCfg);

  // ── Hover lift ────────────────────────────────
  const rawY = useMotionValue(0);
  const liftY = useSpring(rawY, { stiffness: 160, damping: 24 });

  // ── Shadow spring ─────────────────────────────
  const rawShadow = useMotionValue(
    "0 8px 32px -16px rgba(0,0,0,0.6)"
  );

  // ── Mouse handlers ────────────────────────────
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
      "0 28px 64px -24px rgba(0,0,0,0.8), 0 0 48px -12px rgba(197,160,89,0.15)"
    );
  }, [reduceMotion, rawY, rawShadow]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion) return;
    setSpot((s) => ({ ...s, visible: false }));
    rawRotX.set(0);
    rawRotY.set(0);
    rawY.set(0);
    rawShadow.set(
      "0 8px 32px -16px rgba(0,0,0,0.6)"
    );
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
        className="group relative h-full cursor-pointer overflow-hidden border border-white/[0.06] hover:border-[rgba(197,160,89,0.25)] transition-colors duration-700"
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
        {/* ── Parallax image ──────────────────── */}
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          style={reduceMotion ? undefined : { y: imageParallax }}
          className={[
            "absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover will-change-transform",
            "transition-[transform,filter,brightness] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.05] group-hover:brightness-[1.06] group-hover:saturate-[1.04]",
          ].join(" ")}
        />

        {/* ── Base gradient scrim ─────────────── */}
        <div
          className="absolute inset-0 transition-[background] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.86) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-[800ms] group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.44) 58%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        {/* ── Cursor spotlight ────────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            borderRadius: "inherit",
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(300px circle at ${spot.x}px ${spot.y}px, rgba(180,140,70,0.13), transparent 58%)`,
          }}
        />

        {/* ── Gold top hairline ───────────────── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 bg-gradient-to-r from-[rgba(201,164,106,0)] via-[rgba(201,164,106,0.9)] to-[rgba(201,164,106,0)] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        />

        {/* ── Bottom gold ambient ─────────────── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 65% 32% at 50% 100%, rgba(201,164,106,0.16), transparent 65%)",
          }}
        />

        {/* ── Link wrapper ────────────────────── */}
        <a
          href={item.href}
          aria-label={`${item.collectionTitle}: ${item.luxuryDescription}`}
          className="absolute inset-0 z-30 flex flex-col justify-end p-7 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,164,106,0.8)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1722]"
          style={{ borderRadius: "inherit" }}
        >
          {/* Collection tag */}
          <p
            className="mb-2.5 text-[0.6rem] font-light tracking-[0.32em] text-[rgba(201,164,106,0.65)] transition-colors duration-500 group-hover:text-[rgba(201,164,106,0.9)]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {item.collectionTitle}
          </p>

          {/* Title — slides up gently */}
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

          {/* Description — fades in on hover */}
          <p
            className={[
              "overflow-hidden font-light leading-[1.7] text-[rgba(255,255,255,0.0)]",
              "transition-[max-height,opacity,margin,color] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "[max-height:0px]",
              "group-hover:mt-3 group-hover:text-[rgba(255,255,255,0.62)] group-hover:[max-height:72px]",
              isFeatured ? "text-[0.9rem]" : "text-[0.82rem]",
            ].join(" ")}
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {item.luxuryDescription}
          </p>

          {/* CTA — slides in from below */}
          <span
            className={[
              "mt-3 inline-flex translate-y-3 items-center gap-2 opacity-0",
              "text-[0.7rem] font-light tracking-[0.2em] text-[rgba(201,164,106,0.0)]",
              "transition-[transform,opacity,gap,color] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:translate-y-0 group-hover:gap-[10px] group-hover:text-[rgba(201,164,106,0.88)] group-hover:opacity-100",
            ].join(" ")}
            style={{ fontFamily: "'Jost', sans-serif" }}
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
      className="relative overflow-hidden bg-[#17191C] py-[80px] text-white md:py-[120px]"
    >
      {/* ── Layered Luxury Architectural Atmosphere ──────────────────────── */}
      {/* Dark accents (#111315) Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, #111315 100%)",
        }}
      />

      {/* Secondary Volumetric Architectural Glow (#1E2023) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[120%] w-[90%] rounded-full blur-[140px] opacity-45"
        style={{
          background: "radial-gradient(circle at 30% 30%, #1E2023 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20%] -bottom-[20%] h-[120%] w-[90%] rounded-full blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle at 70% 70%, #1E2023 0%, transparent 70%)",
        }}
      />

      {/* Subtle Radial Lighting behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, #1E2023 0%, transparent 75%)",
        }}
      />

      {/* Soft Gold Ambient Glow (Muted Gold: rgba(200, 169, 107, 0.04)) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[20%] top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, rgba(200, 169, 107, 0.7) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] bottom-[20%] h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full blur-[200px] opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, rgba(200, 169, 107, 0.6) 0%, transparent 70%)",
        }}
      />

      {/* Material Depth: Ultra subtle grain texture (Opacity: 3.5%) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='fine-grain'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23fine-grain)'/></svg>")`,
        }}
      />

      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.15)] to-transparent"
      />
      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.08)] to-transparent"
      />

      <div className="site-container relative">

        {/* ── Section header ──────────────────────── */}
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
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(200,169,107,0.55)]" />
              <span
                className="text-[0.6rem] font-light tracking-[0.32em] text-[#C8A96B]"
                style={{ fontFamily: "'Jost', sans-serif" }}
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
              <em className="italic text-[#C8A96B]">al uw wensen</em>
            </motion.h2>

            {/* Sub */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-4 max-w-[32rem] text-[0.92rem] font-light leading-[1.82] text-[rgba(255,255,255,0.75)]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Van verfijnd design tot modern en budgetvriendelijk: ontdek stijlen
              die passen bij uw ruimte en manier van leven.
            </motion.p>
          </div>

          {/* CBW badge */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src={kc.cbwLogo}
              alt="CBW erkend"
              className="h-12 w-auto opacity-55 md:h-14"
              loading="lazy"
            />
            <span
              className="text-[0.68rem] font-light text-[rgba(255,255,255,0.26)]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Vertrouwen<br />
              sinds {kc.founded}
            </span>
          </motion.div>
        </motion.div>

        {/* ── Glass stats bar ──────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : fadeUp}
          className="mb-8 border border-white/[0.06] bg-[#1E2023]/30 backdrop-blur-md px-6 py-5 md:px-10"
          style={{ borderRadius: "16px" }}
        >
          <ul className="grid grid-cols-3 divide-x divide-[rgba(255,255,255,0.07)]">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="px-4 text-center first:pl-0 last:pr-0 sm:px-6 md:px-8"
              >
                <p className="font-serif text-[clamp(1.55rem,2.6vw,2.1rem)] font-light leading-none tracking-[-0.03em] text-white">
                  <CountUpValue value={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="mt-1.5 text-[0.6rem] font-light uppercase tracking-[0.18em] text-[rgba(255,255,255,0.34)]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Luxury card grid ─────────────────────── */}
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
