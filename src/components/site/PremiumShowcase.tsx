"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import keukenVid1 from "@/assets/keuken_vid1.webm";
import keukenVid2 from "@/assets/keuken_vid2.webm";
import { motionViewport } from "@/lib/motion";

const highlights = [
  "A-merken inbouwapparatuur",
  "werkbladen",
  "keukenkranen",
  "keukenaccessoires",
] as const;

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

const labelReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0, ease: luxuryEase },
  },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.7, ease: luxuryEase },
  },
};

const headingLines = ["Keuken-Centrum", "Utrecht"] as const;

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

/** Architectural corner frame SVG — top-right and bottom-left */
function CornerFrames() {
  return (
    <>
      {/* Top-right corner */}
      <div className="absolute -top-[1px] -right-[1px] z-20 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M64 0 L64 48 Q64 64 48 64 L0 64"
            stroke="rgba(200,169,107,0.55)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Corner dot */}
          <circle cx="60" cy="4" r="2" fill="rgba(200,169,107,0.7)" />
        </svg>
      </div>
      {/* Bottom-left corner */}
      <div className="absolute -bottom-[1px] -left-[1px] z-20 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M0 64 L0 16 Q0 0 16 0 L64 0"
            stroke="rgba(200,169,107,0.55)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="4" cy="60" r="2" fill="rgba(200,169,107,0.7)" />
        </svg>
      </div>
    </>
  );
}

/** Animated water/ripple SVG overlay */
function WaterEffect() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[40%] overflow-hidden opacity-[0.25]">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <defs>
          <linearGradient id="water-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(200,169,107,0)" />
            <stop offset="100%" stopColor="rgba(200,169,107,0.25)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#water-grad)"
          d="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z;
              M0,48L40,42.7C80,37,160,27,240,32C320,37,400,59,480,64C560,69,640,59,720,48C800,37,880,27,960,32C1040,37,1120,53,1160,61.3L1200,69L1200,120L0,120Z;
              M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,56C560,48,640,32,720,32C800,32,880,48,960,53.3C1040,59,1120,53,1160,50.7L1200,48L1200,120L0,120Z
            "
          />
        </path>
        <path
          fill="rgba(200,169,107,0.08)"
          d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z;
              M0,56L40,50.7C80,45,160,35,240,37.3C320,40,400,56,480,64C560,72,640,72,720,64C800,56,880,40,960,37.3C1040,35,1120,45,1160,50.7L1200,56L1200,120L0,120Z;
              M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,58.7C560,64,640,64,720,58.7C800,53,880,43,960,42.7C1040,43,1120,53,1160,58.7L1200,64L1200,120L0,120Z
            "
          />
        </path>
      </svg>
    </div>
  );
}

export function PremiumShowcase() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative w-full overflow-hidden bg-[#17191C] py-20 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_28%,rgba(17,19,21,0.35)_100%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-[18%] h-[min(42vw,420px)] w-[min(42vw,420px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.14),transparent_68%)] opacity-[0.03]"
        animate={reduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, 16, -8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "linear" }
        }
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_22%,rgba(200,169,107,0.04),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.032] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2264%22 height=%2264%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')]"
      />

      <div className="site-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-10 xl:gap-14">
          <motion.div
            style={reduceMotion ? undefined : { y: imageY }}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : imageReveal}
            className="relative"
          >
            <div className="group relative">
              {/* Main video card with corner frames */}
              <div className="relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] shadow-[0_28px_64px_-44px_rgba(17,19,21,0.72)]">
                <CornerFrames />
                <video
                  src={keukenVid1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,28,0.02)_0%,rgba(23,25,28,0.22)_100%)]" />
                <WaterEffect />
              </div>

              {/* Accent video — floating bottom-right with corner frames */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={motionViewport}
                transition={
                  reduceMotion
                    ? undefined
                    : { delay: 0.35, duration: 1.1, ease: luxuryEase }
                }
                className="absolute -bottom-6 -right-2 hidden w-[38%] overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_56px_-40px_rgba(17,19,21,0.68)] md:block"
              >
                <CornerFrames />
                <video
                  src={keukenVid2}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,28,0.02)_0%,rgba(23,25,28,0.34)_100%)]" />
                <WaterEffect />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { y: contentY }}
            className="lg:pl-2 xl:pl-6"
          >
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : labelReveal}
              className="mb-4"
            >
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-[60px] bg-[rgba(200,169,107,0.6)]"
              />
              <p className="text-[0.68rem] font-normal uppercase tracking-[0.28em] text-[rgba(200,169,107,0.82)]">
                Premium modern kitchen experience
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : headingContainer}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 top-0 h-20 w-40 bg-[radial-gradient(circle,rgba(200,169,107,0.07),transparent_70%)] blur-2xl"
              />
              <h2 className="relative font-serif text-[clamp(2.15rem,3.6vw,3rem)] leading-[1.06] tracking-[-0.02em] text-white">
                {headingLines.map((line) => (
                  <span key={line} className="block overflow-hidden py-[0.06em]">
                    <motion.span
                      variants={reduceMotion ? undefined : lineReveal}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h2>
            </motion.div>

            <motion.p
              custom={0.45}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-5 max-w-[520px] text-[1rem] font-light leading-[1.75] tracking-[0.01em] text-[rgba(255,255,255,0.76)]"
            >
              De talloze keuken opstellingen in onze showroom geven u genoeg inspiratie.
              Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed
              assortiment aan. Voor elk budget hebben we een droomkeuken.
            </motion.p>

            <motion.p
              custom={0.52}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-5 max-w-[520px] text-[1rem] font-light leading-[1.75] tracking-[0.01em] text-[rgba(255,255,255,0.76)]"
            >
              Het is heeft onze voorkeur om geheel naar wens van de klant een complete keuken te
              leveren. Van{" "}
              {highlights.map((item, index) => (
                <span key={item}>
                  <span className="font-medium text-[rgba(200,169,107,0.88)]">{item}</span>
                  {index < highlights.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              tot aan verlichting. Alles wat met keukens te maken heeft, is bij Keuken-Centrum
              in Utrecht verkrijgbaar.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : ctaReveal}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                className={[
                  "brand-green-button group/btn h-11 min-h-11 rounded-[16px] px-6",
                  "text-[0.8125rem] font-normal uppercase tracking-[0.14em] text-[#F5F2EC]",
                  "transition-[transform,background-color,box-shadow] duration-[350ms] ease-out",
                  "hover:-translate-y-0.5",
                ].join(" ")}
              >
                <a href="#showroom">
                  Plan showroombezoek
                  <ArrowRight className="h-4 w-4 transition-transform duration-[350ms] ease-out group-hover/btn:translate-x-1.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className={[
                  "h-11 min-h-11 rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-transparent px-6",
                  "text-[0.8125rem] font-normal uppercase tracking-[0.14em] text-white",
                  "transition-[transform,border-color,background-color,color] duration-[350ms] ease-out",
                  "hover:-translate-y-0.5 hover:border-[rgba(200,169,107,0.55)] hover:bg-transparent hover:text-white",
                ].join(" ")}
              >
                <a href="#brands">Bekijk merken</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
