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
import { kc } from "@/lib/kc-data";
import { fadeUp, motionViewport, staggerHeader, staggerList } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const collections = [
  {
    id: "modern",
    title: "Modern",
    subtitle: "Strak · Minimalistisch · Tijdloos",
    description: "Slanke lijnen en functionele elegantie voor het hedendaagse leven.",
    image: kc.styles[1].img,
  },
  {
    id: "klassiek",
    title: "Klassiek",
    subtitle: "Elegant · Warm · Luxueus",
    description: "Tijdloze proporties en rijke materialen die generaties meegaan.",
    image: kc.styles[2].img,
  },
  {
    id: "landelijk",
    title: "Landelijk",
    subtitle: "Natuurlijk · Sfeervol · Authentiek",
    description: "Warme texturen en ambachtelijke details voor een thuis gevoel.",
    image: kc.styles[2].img,
  },
  {
    id: "industrieel",
    title: "Industrieel",
    subtitle: "Stoer · Robuust · Karaktervol",
    description: "Rauwe materialen en grafische vormen met een eigenzinnig karakter.",
    image: kc.styles[3].img,
  },
];

// ─── Motion ───────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const staggerCards: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

// ─── Luxury Card ──────────────────────────────────────────────────────────────

type CardProps = {
  collection: (typeof collections)[number];
  index: number;
  reduceMotion: boolean | null;
};

function LuxuryStyleCard({ collection, index, reduceMotion }: CardProps) {
  // ── Refs & state
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  // ── Scroll parallax
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [10, -10]);

  // ── 3D tilt
  const rawRotX = useMotionValue(0);
  const rawRotY = useMotionValue(0);
  const springCfg = { stiffness: 140, damping: 22, mass: 0.5 };
  const rotX = useSpring(rawRotX, springCfg);
  const rotY = useSpring(rawRotY, springCfg);

  // ── Lift
  const rawY = useMotionValue(0);
  const liftY = useSpring(rawY, { stiffness: 170, damping: 26 });

  // ── Shadow
  const rawShadow = useMotionValue(
    "0 6px 24px -12px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.05)"
  );

  // ── Handlers
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!wrapperRef.current || reduceMotion) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setSpot({ x, y, visible: true });
      rawRotX.set(((cy - y) / cy) * 2.5);
      rawRotY.set(((x - cx) / cx) * 2.5);
    },
    [reduceMotion, rawRotX, rawRotY]
  );

  const handleMouseEnter = useCallback(() => {
    if (reduceMotion) return;
    rawY.set(-12);
    rawShadow.set(
      "0 24px 56px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,164,106,0.2), 0 0 40px -14px rgba(201,164,106,0.10)"
    );
  }, [reduceMotion, rawY, rawShadow]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion) return;
    setSpot((s) => ({ ...s, visible: false }));
    rawRotX.set(0);
    rawRotY.set(0);
    rawY.set(0);
    rawShadow.set(
      "0 6px 24px -12px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.05)"
    );
  }, [reduceMotion, rawRotX, rawRotY, rawY, rawShadow]);

  return (
    <motion.div
      variants={reduceMotion ? undefined : fadeUp}
      ref={wrapperRef}
      className="h-full"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.article
        className="group relative h-full cursor-pointer overflow-hidden"
        style={{
          borderRadius: "32px",
          aspectRatio: "0.82 / 1",
          y: reduceMotion ? 0 : liftY,
          rotateX: reduceMotion ? 0 : rotX,
          rotateY: reduceMotion ? 0 : rotY,
          transformStyle: "preserve-3d",
          boxShadow: rawShadow as unknown as string,
          willChange: "transform",
        }}
      >
        {/* Parallax image */}
        <motion.img
          src={collection.image}
          alt={collection.title}
          loading="lazy"
          style={reduceMotion ? undefined : { y: imageY }}
          className={[
            "absolute inset-0 h-[118%] w-full -translate-y-[9%] object-cover will-change-transform",
            "transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.05] group-hover:brightness-[1.05] group-hover:saturate-[1.03]",
          ].join(" ")}
        />

        {/* Base scrim */}
        <div
          className="absolute inset-0 transition-[background] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,17,27,0.04) 0%, rgba(7,17,27,0.50) 62%, rgba(7,17,27,0.88) 100%)",
          }}
        />
        {/* Hover scrim lightening */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-[750ms] group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,17,27,0.0) 0%, rgba(7,17,27,0.38) 60%, rgba(7,17,27,0.80) 100%)",
          }}
        />

        {/* Cursor spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            borderRadius: "inherit",
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(180,140,70,0.14), transparent 55%)`,
          }}
        />

        {/* Gold top hairline */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 bg-gradient-to-r from-[rgba(201,164,106,0)] via-[rgba(201,164,106,0.88)] to-[rgba(201,164,106,0)] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        />

        {/* Gold ambient glow bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-[700ms] group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 68% 35% at 50% 100%, rgba(201,164,106,0.15), transparent 65%)",
          }}
        />

        {/* Step index */}
        <div className="absolute left-5 top-5 z-20">
          <span
            className="text-[0.58rem] font-light tracking-[0.28em] text-[rgba(255,255,255,0.32)] transition-colors duration-500 group-hover:text-[rgba(201,164,106,0.65)]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6">
          {/* Title — slides up */}
          <p className="font-serif text-[clamp(1.55rem,2vw,2rem)] leading-none tracking-[-0.02em] text-white transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
            {collection.title}
          </p>

          {/* Subtitle — colour shift */}
          <p
            className="mt-2 text-[0.63rem] font-light tracking-[0.2em] text-[rgba(255,255,255,0.45)] transition-colors duration-500 group-hover:text-[rgba(201,164,106,0.72)]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {collection.subtitle}
          </p>

          {/* Description — max-height reveal */}
          <p
            className={[
              "overflow-hidden font-light leading-[1.7] text-[rgba(255,255,255,0)]",
              "[max-height:0px]",
              "transition-[max-height,opacity,margin,color] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:mt-3 group-hover:text-[rgba(255,255,255,0.6)] group-hover:[max-height:68px]",
              "text-[0.82rem]",
            ].join(" ")}
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            {collection.description}
          </p>

          {/* CTA — fades + slides in */}
          <span
            className={[
              "mt-3 inline-flex translate-y-3 items-center gap-2 opacity-0",
              "text-[0.68rem] font-light tracking-[0.2em] text-[rgba(201,164,106,0)]",
              "transition-[transform,opacity,gap,color] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:translate-y-0 group-hover:gap-[10px] group-hover:text-[rgba(201,164,106,0.85)] group-hover:opacity-100",
            ].join(" ")}
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            <span className="uppercase">Ontdek stijl</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2" />
          </span>
        </div>
      </motion.article>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Collections() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="collections" className="overflow-hidden bg-[#F8F6F2] py-20 md:py-28">
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="section-header-split mb-12"
        >
          <div className="max-w-[34rem]">
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="section-label-row">
              <span className="luxe-rule" />
              <span className="eyebrow">Architecturale keukenstijlen</span>
            </motion.div>
            <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
              Ontdek uw{" "}
              <em className="italic text-[var(--accent)]">ontwerprichting</em>
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-5 max-w-[480px] text-[1rem] font-light leading-[1.75] tracking-[0.01em] text-[var(--text-soft)]"
            >
              Vier zorgvuldig samengestelde stijlwerelden — elk een unieke architectonische
              taal van materiaal, compositie en sfeer.
            </motion.p>
          </div>
          <motion.a
            variants={reduceMotion ? undefined : fadeUp}
            href="#showroom"
            className="link-underline self-start text-sm text-[var(--foreground)]/72 lg:self-end"
          >
            Alle keukens bekijken
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Luxury card grid */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {collections.map((collection, index) => (
            <LuxuryStyleCard
              key={collection.id}
              collection={collection}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
