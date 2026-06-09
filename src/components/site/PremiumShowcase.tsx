"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import keukenVid1 from "@/assets/keuken_vid1.webm";
import keukenVid2 from "@/assets/keuken_vid2.webm";
import keukenVid3 from "@/assets/keuken_vid3.webm";
import keukenVid4 from "@/assets/keuken_vid4.webm";
import { motionViewport } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "A-merken inbouwapparatuur",
  "werkbladen",
  "keukenkranen",
  "keukenaccessoires",
] as const;

const progressItems = ["01", "02", "03", "04"] as const;

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: luxuryEase },
  },
};

const labelReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: luxuryEase } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.9, ease: luxuryEase } },
};

const paragraphReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: luxuryEase },
  }),
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.7, ease: luxuryEase } },
};

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const headingLines = ["Keuken-Centrum", "Utrecht"] as const;

// ─── Glass Badge ─────────────────────────────────────────────────────────────

type BadgeProps = {
  number: string;
  label: string;
  sub?: string;
  delay?: number;
  reduceMotion: boolean | null;
  floatDir?: 1 | -1;
};

function GlassBadge({ number, label, sub, delay = 0, reduceMotion, floatDir = 1 }: BadgeProps) {
  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, floatDir * 6, 0] }}
      transition={{ duration: 6 + delay, ease: "easeInOut", repeat: Infinity, delay }}
    >
      <div
        className="flex items-center gap-3 rounded-[14px] px-4 py-3"
        style={{
          background: "rgba(11,30,44,0.82)",
          border: "1px solid rgba(49,199,212,0.22)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}
      >
        <span
          className="font-serif text-[1.55rem] font-light leading-none tracking-[-0.025em] text-[#31C7D4]"
          style={{ textShadow: "0 0 22px rgba(49,199,212,0.45)" }}
        >
          {number}
        </span>
        <div>
          <p
            className="text-[0.60rem] font-semibold uppercase tracking-[0.20em] text-[rgba(247,244,238,0.82)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {label}
          </p>
          {sub && (
            <p
              className="mt-0.5 text-[0.50rem] font-light tracking-[0.14em] text-[rgba(49,199,212,0.52)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {sub}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Corner frames — teal ─────────────────────────────────────────────────────

function CornerFrames() {
  return (
    <>
      <div className="pointer-events-none absolute -right-[1px] -top-[1px] z-20">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M64 0 L64 48 Q64 64 48 64 L0 64"
            stroke="rgba(49,199,212,0.52)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="60" cy="4" r="2" fill="rgba(49,199,212,0.72)" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-[1px] -left-[1px] z-20">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M0 64 L0 16 Q0 0 16 0 L64 0"
            stroke="rgba(49,199,212,0.52)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="4" cy="60" r="2" fill="rgba(49,199,212,0.72)" />
        </svg>
      </div>
    </>
  );
}

// ─── Water / ambient ripple — teal ───────────────────────────────────────────

function WaterEffect() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[35%] overflow-hidden opacity-[0.18]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
        <defs>
          <linearGradient id="water-grad-teal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(49,199,212,0)" />
            <stop offset="100%" stopColor="rgba(49,199,212,0.28)" />
          </linearGradient>
        </defs>
        <path fill="url(#water-grad-teal)"
          d="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z;M0,48L40,42.7C80,37,160,27,240,32C320,37,400,59,480,64C560,69,640,59,720,48C800,37,880,27,960,32C1040,37,1120,53,1160,61.3L1200,69L1200,120L0,120Z;M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z"
          />
        </path>
        <path fill="rgba(49,199,212,0.07)"
          d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z">
          <animate attributeName="d" dur="11s" repeatCount="indefinite"
            values="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z;M0,56L40,50.7C80,45,160,35,240,37.3C320,40,400,56,480,64C560,72,640,72,720,64C800,56,880,40,960,37.3C1040,35,1120,45,1160,50.7L1200,56L1200,120L0,120Z;M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z"
          />
        </path>
      </svg>
    </div>
  );
}

// ─── Small Video with hover state ────────────────────────────────────────────

function SmallVideo({ src, reduceMotion }: { src: string; reduceMotion: boolean | null }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 cursor-pointer overflow-hidden rounded-[14px]"
      style={{
        border: hovered ? "1px solid rgba(49,199,212,0.38)" : "1px solid rgba(255,255,255,0.05)",
        opacity: hovered ? 1 : 0.68,
        boxShadow: hovered ? "0 0 24px rgba(49,199,212,0.18)" : "none",
        transition: "opacity 550ms ease, border-color 500ms ease, box-shadow 500ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: hovered && !reduceMotion ? "scale(1.055)" : "scale(1)",
          transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Base scrim */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,30,44,0.02)_0%,rgba(11,30,44,0.45)_100%)]" />

      {/* Hover overlay: "Bekijk showroom →" */}
      <div className="pointer-events-none absolute inset-0 flex items-end p-3">
        <div
          className="flex items-center gap-[5px]"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            className="text-[0.52rem] font-semibold uppercase tracking-[0.20em] text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bekijk showroom
          </span>
          <ArrowRight className="h-2.5 w-2.5 text-[#31C7D4]" />
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function PremiumShowcase() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mainHovered, setMainHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={sectionRef}
      id="premium-showcase"
      className="relative w-full overflow-hidden bg-[#0B1E2C] py-20 text-white md:py-32"
    >
      {/* ── Background layers ── */}

      {/* 1. Subtle gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(11,30,44,0) 0%, rgba(6,13,19,0.25) 100%)" }}
      />

      {/* 2. Breathing central teal bloom — 25s cycle */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.14), transparent 62%)" }}
        animate={reduceMotion ? undefined : { opacity: [0.55, 0.90, 0.55] }}
        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
      />

      {/* 3. Top-left directional spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[22%] -top-[20%] h-[80vh] w-[80vh] rounded-full blur-[180px]"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.15), transparent 60%)" }}
        animate={reduceMotion ? undefined : { opacity: [0.40, 0.65, 0.40] }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity, delay: 5 }}
      />

      {/* 4. Bottom-right ambient fill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[20%] -right-[15%] h-[60vh] w-[60vh] rounded-full blur-[160px] opacity-35"
        style={{ background: "radial-gradient(circle, rgba(49,199,212,0.10), transparent 65%)" }}
      />

      {/* 5. Edge vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 72% 22%, rgba(49,199,212,0.04), transparent 58%)" }}
      />

      {/* 6. Fine grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='64' height='64' filter='url(%23n)' opacity='0.4'/></svg>")`,
        }}
      />

      {/* 7. Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.28), transparent)" }}
      />

      {/* 8. Bottom hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.10), transparent)" }}
      />

      <div className="site-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-10 xl:gap-14">

          {/* ─ Left: Gallery column ─ */}
          <div className="relative mx-auto mt-6 w-full max-w-[540px] lg:ml-6 lg:mt-0 lg:max-w-[620px] xl:max-w-[720px]">

            {/* ── Vertical progress indicator (xl only) ── */}
            <div className="absolute -left-12 top-0 z-30 hidden h-full xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-0">
              {progressItems.map((num, i) => (
                <div key={num} className="flex flex-col items-center">
                  <div
                    className="flex h-8 w-8 items-center justify-center"
                    style={{
                      color: i === 0 ? "#31C7D4" : "rgba(255,255,255,0.20)",
                      textShadow: i === 0 ? "0 0 14px rgba(49,199,212,0.65)" : "none",
                      transition: "color 500ms ease",
                    }}
                  >
                    <span
                      className="text-[0.48rem] font-semibold tracking-[0.20em]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {num}
                    </span>
                  </div>
                  {i < progressItems.length - 1 && (
                    <div
                      className="w-px"
                      style={{
                        height: "36px",
                        background: i === 0
                          ? "linear-gradient(to bottom, rgba(49,199,212,0.55), rgba(49,199,212,0.10))"
                          : "rgba(255,255,255,0.06)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* ── Gallery card with parallax ── */}
            <motion.div
              style={reduceMotion ? undefined : { y: imageY }}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : imageReveal}
              className="relative"
            >
              {/* ── Floating badges ── */}

              {/* Badge 1 — top-left */}
              <div className="absolute -left-3 -top-5 z-20 hidden sm:block">
                <GlassBadge number="45+" label="Jaar Ervaring" sub="Premium vakmanschap" delay={0} reduceMotion={reduceMotion} floatDir={-1} />
              </div>

              {/* Badge 2 — bottom-right */}
              <div className="absolute -bottom-5 -right-3 z-20 hidden sm:block">
                <GlassBadge number="1000+" label="Materiaalcombinaties" sub="Curated collectie" delay={1.8} reduceMotion={reduceMotion} floatDir={1} />
              </div>

              {/* Badge 3 — bottom-left */}
              <div className="absolute -bottom-5 left-[30%] z-20 hidden lg:block">
                <GlassBadge number="1978" label="Opgericht" sub="Seit 1978 · Utrecht" delay={3.2} reduceMotion={reduceMotion} floatDir={-1} />
              </div>

              {/* ── Main gallery card ── */}
              <div
                className="relative flex flex-col gap-3 rounded-[24px] p-2 backdrop-blur-xl sm:flex-row"
                style={{
                  border: "1px solid rgba(49,199,212,0.12)",
                  background: "rgba(11,30,44,0.30)",
                  boxShadow: "0 32px 80px -24px rgba(0,0,0,0.72), 0 0 0 1px rgba(255,255,255,0.03) inset",
                }}
              >
                {/* ── Large featured video — always "active" ── */}
                <div
                  className="group/main relative w-full cursor-pointer overflow-hidden rounded-[18px] bg-black/40 sm:w-[65%]"
                  style={{
                    border: "1px solid rgba(49,199,212,0.42)",
                    boxShadow: "0 0 28px rgba(49,199,212,0.16), 0 0 0 1px rgba(49,199,212,0.07) inset",
                  }}
                  onMouseEnter={() => setMainHovered(true)}
                  onMouseLeave={() => setMainHovered(false)}
                >
                  <CornerFrames />
                  <video
                    src={keukenVid1}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-auto w-full max-h-[85vh] object-cover"
                    style={{
                      transform: mainHovered && !reduceMotion ? "scale(1.030)" : "scale(1)",
                      transition: "transform 800ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,30,44,0.02)_0%,rgba(11,30,44,0.26)_100%)]" />
                  <WaterEffect />

                  {/* Active badge: "Showroom Live" */}
                  <div className="pointer-events-none absolute left-4 top-4 z-20">
                    <div
                      className="flex items-center gap-2 rounded-full px-3 py-1.5"
                      style={{
                        background: "rgba(11,30,44,0.75)",
                        border: "1px solid rgba(49,199,212,0.30)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <span
                        className="h-[5px] w-[5px] rounded-full bg-[#31C7D4]"
                        style={{ boxShadow: "0 0 6px rgba(49,199,212,0.80)" }}
                      />
                      <span
                        className="text-[0.44rem] font-semibold uppercase tracking-[0.24em] text-[rgba(49,199,212,0.85)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Showroom Utrecht
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-end p-5">
                    <div
                      className="flex items-center gap-2"
                      style={{
                        opacity: mainHovered ? 1 : 0,
                        transform: mainHovered ? "translateY(0)" : "translateY(10px)",
                        transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <span
                        className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-white"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Bekijk showroom
                      </span>
                      <ArrowRight className="h-3 w-3 text-[#31C7D4]" />
                    </div>
                  </div>
                </div>

                {/* ── Accent videos ── */}
                <div className="flex w-full flex-row gap-3 sm:w-[35%] sm:flex-col sm:min-h-[480px]">
                  <SmallVideo src={keukenVid3} reduceMotion={reduceMotion} />
                  <SmallVideo src={keukenVid4} reduceMotion={reduceMotion} />
                  <SmallVideo src={keukenVid2} reduceMotion={reduceMotion} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─ Right: Content column ─ */}
          <motion.div
            style={reduceMotion ? undefined : { y: contentY }}
            className="lg:pl-2 xl:pl-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : labelReveal}
              className="mb-4"
            >
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-[60px]"
                style={{ background: "linear-gradient(90deg, rgba(49,199,212,0.65), transparent)" }}
              />
              <p
                className="text-[0.6rem] font-semibold uppercase tracking-[0.30em] text-[#31C7D4]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sinds 1978 · Utrecht Showroom
              </p>
            </motion.div>

            {/* Heading: "Keuken-Centrum" white / "Utrecht" teal gradient */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : headingContainer}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 top-0 h-20 w-48 blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(49,199,212,0.10), transparent 70%)" }}
              />
              <h2 className="relative font-serif text-[clamp(2.15rem,3.6vw,3rem)] leading-[1.06] tracking-[-0.022em] text-white">
                {headingLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden py-[0.06em]">
                    <motion.span
                      variants={reduceMotion ? undefined : lineReveal}
                      className="block"
                      style={
                        i === 1
                          ? {
                              background: "linear-gradient(128deg, #31C7D4 0%, #66DCE6 50%, #23B9C4 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : undefined
                      }
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h2>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p
              custom={0.45}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-5 max-w-[520px] text-[1rem] font-light leading-[1.78] tracking-[0.01em] text-[rgba(255,255,255,0.60)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              De talloze keukenopstellingen in onze showroom geven u genoeg inspiratie.
              Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed
              assortiment aan. Voor elk budget hebben we een droomkeuken.
            </motion.p>

            {/* Paragraph 2 — teal highlights */}
            <motion.p
              custom={0.52}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-5 max-w-[520px] text-[1rem] font-light leading-[1.78] tracking-[0.01em] text-[rgba(255,255,255,0.60)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Het heeft onze voorkeur om geheel naar wens van de klant een complete keuken te
              leveren. Van{" "}
              {highlights.map((item, index) => (
                <span key={item}>
                  <span
                    className="font-medium"
                    style={{ color: "#31C7D4" }}
                  >
                    {item}
                  </span>
                  {index < highlights.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              tot aan verlichting. Alles wat met keukens te maken heeft, is bij Keuken-Centrum
              in Utrecht verkrijgbaar.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : ctaReveal}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary — teal filled with shine sweep */}
              <a
                href="#showroom"
                className="group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-[16px] px-6 text-[0.8125rem] font-normal uppercase tracking-[0.14em] text-white"
                style={{
                  background: "linear-gradient(135deg, #2FC5D0 0%, #23B9C4 55%, #1DAAB5 100%)",
                  fontFamily: "var(--font-body)",
                  transition: "transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 28px rgba(49,199,212,0.32)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <span className="relative z-10">Plan showroombezoek</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
                {/* Shine sweep */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/24 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-full"
                />
              </a>

              {/* Secondary — teal outline */}
              <a
                href="#brands"
                className="group inline-flex h-11 items-center justify-center rounded-[18px] border px-6 text-[0.8125rem] font-normal uppercase tracking-[0.14em]"
                style={{
                  borderColor: "rgba(49,199,212,0.28)",
                  color: "rgba(247,244,238,0.62)",
                  fontFamily: "var(--font-body)",
                  transition: "transform 500ms ease, border-color 500ms ease, color 500ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.borderColor = "rgba(49,199,212,0.62)";
                  el.style.color = "#66DCE6";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(49,199,212,0.28)";
                  el.style.color = "rgba(247,244,238,0.62)";
                }}
              >
                Bekijk merken
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
