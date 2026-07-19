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
import { SectionChapter } from "@/components/site/SectionChapter";
import designImg from "@/assets/Eén plaats voor al uw wensen/Design_keukens.webp";
import priceImg from "@/assets/Eén plaats voor al uw wensen/Keukens_voor_elke_prijs.webp";
import modernImg from "@/assets/Eén plaats voor al uw wensen/Modern_keukens.webp";
import brandsDarkBg from "@/assets/brands/brands-dark-bg.webp";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const collections = [
  {
    id: "design",
    number: "01",
    featured: true,
    collectionTitle: "Design Collectie",
    luxuryDescription:
      "Architecturale keukens met verfijnde materialen en tijdloze verhoudingen.",
    title: "Design Keukens",
    image: designImg,
    href: "/keukens",
  },
  {
    id: "modern",
    number: "02",
    featured: false,
    collectionTitle: "Modern Wonen",
    luxuryDescription:
      "Hedendaags wonen met slanke lijnen, warme texturen en intelligente indeling.",
    title: "Moderne Keukens",
    image: modernImg,
    href: "/#collections",
  },
  {
    id: "budget",
    number: "03",
    featured: false,
    collectionTitle: "Slim Budget",
    luxuryDescription:
      "Topkwaliteit en persoonlijk advies voor elk budget, zonder compromis.",
    title: "Keukens voor elke prijs",
    image: priceImg,
    href: "#consultation",
  },
] as const;

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
  const rawShadow = useMotionValue("0 18px 50px -24px rgba(0,0,0,0.82)");

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
      "0 36px 80px -28px rgba(0,0,0,0.92), 0 0 44px -16px rgba(200,169,107,0.20)"
    );
  }, [reduceMotion, rawY, rawShadow]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion) return;
    setSpot((s) => ({ ...s, visible: false }));
    rawRotX.set(0);
    rawRotY.set(0);
    rawY.set(0);
    rawShadow.set("0 18px 50px -24px rgba(0,0,0,0.82)");
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
        className="group relative h-full cursor-pointer overflow-hidden border border-[rgba(200,169,107,0.18)] bg-[#11130d] transition-colors duration-700 hover:border-[rgba(200,169,107,0.52)]"
        style={{
          borderRadius: "28px",
          y: reduceMotion ? 0 : liftY,
          rotateX: reduceMotion ? 0 : rotX,
          rotateY: reduceMotion ? 0 : rotY,
          transformStyle: "preserve-3d",
          boxShadow: rawShadow as unknown as string,
          minHeight: isFeatured ? "440px" : "210px",
          willChange: "transform",
        }}
      >
        {/* Architectural inner frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 z-20 rounded-[20px] border border-white/[0.08] transition-all duration-700 group-hover:inset-2.5 group-hover:border-[rgba(216,190,135,0.32)]"
        >
          <span className="absolute -left-px -top-px h-8 w-8 rounded-tl-[20px] border-l border-t border-[rgba(216,190,135,0.72)] transition-all duration-700 group-hover:h-11 group-hover:w-11" />
          <span className="absolute -bottom-px -right-px h-8 w-8 rounded-br-[20px] border-b border-r border-[rgba(216,190,135,0.72)] transition-all duration-700 group-hover:h-11 group-hover:w-11" />
        </div>

        {/* ── Parallax image ── */}
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          draggable={false}
          style={reduceMotion ? undefined : { y: imageParallax }}
          className={[
            "absolute inset-0 h-[120%] w-full -translate-y-[10%] object-cover will-change-transform",
            "saturate-[0.88] transition-[transform,filter] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:scale-[1.045] group-hover:brightness-[1.08] group-hover:saturate-100",
          ].join(" ")}
        />

        {/* ── Base gradient scrim ── */}
        <div
          className="absolute inset-0 transition-[background] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,10,6,0.08) 0%, rgba(8,10,6,0.30) 42%, rgba(8,10,6,0.94) 100%)",
          }}
        />
        {/* Hover scrim — slightly lighter, reveals more image */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-[700ms] group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,10,6,0.02) 0%, rgba(8,10,6,0.22) 44%, rgba(8,10,6,0.88) 100%)",
          }}
        />

        {/* ── Cursor spotlight — champagne ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            borderRadius: "inherit",
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(300px circle at ${spot.x}px ${spot.y}px, rgba(200,169,107,0.14), transparent 60%)`,
          }}
        />

        {/* ── Top hairline — champagne sweep ── */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-px origin-left scale-x-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(200,169,107,0), rgba(200,169,107,0.9), rgba(200,169,107,0))",
          }}
        />

        {/* ── Bottom brand-green ambient ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 65% 30% at 50% 100%, rgba(139,197,64,0.13), transparent 68%)",
          }}
        />

        {/* ── Link wrapper ── */}
        <a
          href={item.href}
          aria-label={`${item.collectionTitle}: ${item.luxuryDescription}`}
          className="absolute inset-0 z-30 flex flex-col justify-end p-6 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(200,169,107,0.8)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0F0A] md:p-8"
          style={{ borderRadius: "inherit" }}
        >
          <span
            aria-hidden="true"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/15 font-serif text-[0.7rem] italic text-white/65 backdrop-blur-md transition-colors duration-500 group-hover:border-[rgba(200,169,107,0.38)] group-hover:text-[#D8BE87] md:right-7 md:top-7"
          >
            {item.number}
          </span>

          {/* Collection tag */}
          <p
            className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[rgba(200,169,107,0.78)] transition-colors duration-500 group-hover:text-[#D8BE87]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.featured ? "Signature collectie" : "Ontdek de collectie"}
          </p>

          {/* Title */}
          <p
            className={[
              "font-serif leading-[1.06] tracking-[-0.025em] text-[#F5F2EC]",
              isFeatured
                ? "text-[clamp(1.55rem,2.4vw,2.1rem)]"
                : "text-[clamp(1.25rem,1.7vw,1.55rem)]",
              "transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1",
            ].join(" ")}
          >
            {item.title}
          </p>

          {/* Description — reveals on hover */}
          <p
            className={[
              "mt-3 max-w-[31rem] overflow-hidden font-light leading-[1.65] text-[rgba(245,242,236,0.64)]",
              "[max-height:72px] transition-colors duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:text-[rgba(245,242,236,0.86)]",
              isFeatured ? "text-[0.9rem]" : "text-[0.82rem]",
            ].join(" ")}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.luxuryDescription}
          </p>

          {/* Premium CTA pill — swipe in on card hover */}
          <span
            className={[
              "experience-card__cta-wrap",
              isFeatured ? "experience-card__cta-wrap--featured" : "experience-card__cta-wrap--compact",
            ].join(" ")}
          >
            <span className="experience-card__cta">
              <span className="experience-card__cta-label">Verken collectie</span>
              <span className="experience-card__cta-badge" aria-hidden="true">
                <ArrowRight className="experience-card__cta-icon" />
              </span>
            </span>
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
      className="section-shell relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #0D0F0A 0%, #12140E 52%, #0C0E09 100%)" }}
    >
      {/* ── Background layers ── */}

      {/* 1. Cinematic showroom image — shared visual language with digital journey */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${brandsDarkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 48%",
          opacity: 0.54,
        }}
      />

      {/* 2. Deep olive veil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,11,7,0.88) 0%, rgba(10,12,8,0.76) 44%, rgba(8,10,6,0.92) 100%)",
        }}
      />

      {/* 3. Visible architectural kitchen layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden md:w-[72%]"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.58) 38%, #000 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.58) 38%, #000 100%)",
        }}
      >
        <img
          src={modernImg}
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.2] saturate-[0.62]"
          loading="lazy"
        />
      </div>

      {/* 4. Brand green and champagne ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 42% at 13% 8%, rgba(139,197,64,0.10), transparent 62%), radial-gradient(52% 42% at 88% 80%, rgba(200,169,107,0.09), transparent 66%)",
        }}
      />

      {/* 5. Edge vignette — architectural depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{ background: "radial-gradient(circle at 50% 44%, transparent 48%, rgba(7,8,5,0.82) 100%)" }}
      />

      {/* 6. Fine grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23g)'/></svg>")`,
        }}
      />

      {/* 7. Top hairline — champagne */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,107,0.32), transparent)" }}
      />
      {/* 8. Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,107,0.16), transparent)" }}
      />

      <div className="site-container relative max-w-7xl">
        <SectionChapter index={5} label="Inspiratie" light />

        {/* ── Section header ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start"
        >
          <div className="max-w-[46rem]">
            {/* Eyebrow */}
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="kitchen-eyebrow-mark" aria-hidden="true" />
              <span
                className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#C8A96B]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Keukeninspiratie
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="font-serif text-[clamp(2.7rem,4.7vw,4rem)] font-light leading-[1.04] tracking-[-0.035em] text-[#F5F2EC]"
            >
              Eén plaats voor{" "}
              <em
                className="text-[#D8BE87]"
                style={{
                  fontStyle: "italic",
                }}
              >
                al uw wensen
              </em>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[38rem] text-[1.02rem] font-light leading-[1.78] tracking-[0.005em] text-[rgba(245,242,236,0.68)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Van architecturaal design tot slimme luxe: ontdek een keukenwereld
              die zorgvuldig wordt afgestemd op uw ruimte, smaak en manier van leven.
            </motion.p>
          </div>

          {/* Right: editorial trust panel */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="relative overflow-hidden rounded-[24px] border border-[rgba(200,169,107,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(200,169,107,0.025))] p-6 backdrop-blur-xl"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 60px -42px rgba(0,0,0,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[rgba(139,197,64,0.09)] blur-3xl"
            />
            <div className="relative">
              <div className="mb-4">
                <span
                  className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#C8A96B]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Persoonlijk samengesteld
                </span>
              </div>
              <p className="max-w-[21rem] font-serif text-[1.28rem] font-light leading-[1.42] tracking-[-0.015em] text-[#F5F2EC]">
                Een keuken die klopt in uitstraling, materiaal en dagelijks gebruik.
              </p>
              <span
                className="mt-3 block max-w-[20rem] text-[0.78rem] font-light leading-[1.65] text-[rgba(245,242,236,0.48)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ontdek combinaties die onze ontwerpers dagelijks in de showroom samenstellen.
              </span>
            </div>

            <div className="relative mt-6 flex items-center justify-between gap-5 border-t border-[rgba(200,169,107,0.14)] pt-4">
              <div className="flex items-center gap-3">
                <img
                  src={kc.cbwLogo}
                  alt="CBW erkend"
                  className="h-9 w-auto opacity-60 grayscale"
                  loading="lazy"
                />
                <span
                  className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[rgba(245,242,236,0.42)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Vertrouwd sinds {kc.founded}
                </span>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(139,197,64,0.32)] bg-[rgba(139,197,64,0.08)]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#8BC540]"
                  style={{ boxShadow: "0 0 8px rgba(139,197,64,0.8)" }}
                />
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Luxury card grid ── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[245px_295px]"
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
