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
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { SectionChapter } from "@/components/site/SectionChapter";
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

const stats = [
  { number: "45+", label: "Jaar ervaring", sub: "Premium vakmanschap" },
  { number: "1978", label: "Opgericht", sub: "Showroom Utrecht" },
  { number: "1000+", label: "Combinaties", sub: "Materiaal & afwerking" },
] as const;

// ─── Motion ──────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: luxuryEase },
  },
};

const labelReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: luxuryEase } },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.85, ease: luxuryEase } },
};

const paragraphReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: luxuryEase },
  }),
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.55, ease: luxuryEase } },
};

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const headingLines = ["Keuken-Centrum", "Utrecht"] as const;

// ─── Small Video ─────────────────────────────────────────────────────────────

function SmallVideo({ src, reduceMotion }: { src: string; reduceMotion: boolean | null }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 cursor-pointer overflow-hidden rounded-[14px]"
      style={{
        border: hovered ? "1px solid rgba(139,197,64,0.4)" : "1px solid rgba(23,25,28,0.08)",
        opacity: hovered ? 1 : 0.88,
        boxShadow: hovered
          ? "0 12px 32px -16px rgba(47,82,24,0.22)"
          : "0 6px 20px -12px rgba(23,25,28,0.12)",
        transition: "opacity 450ms ease, border-color 450ms ease, box-shadow 450ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: hovered && !reduceMotion ? "scale(1.05)" : "scale(1)",
          transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,22,12,0.45)] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 flex items-end p-3">
        <div
          className="flex items-center gap-1.5"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bekijk
          </span>
          <ArrowRight className="h-2.5 w-2.5 text-[#A8D95A]" />
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

  const imageY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      ref={sectionRef}
      id="premium-showcase"
      className="section-shell relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDFCF9 0%, #FFFFFF 48%, #FBFAF6 100%)",
      }}
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 18% 20%, rgba(139,197,64,0.06), transparent 62%), radial-gradient(50% 40% at 88% 75%, rgba(200,169,107,0.05), transparent 65%)",
        }}
      />

      <div className="site-container relative max-w-7xl">
        <SectionChapter index={5} label="Showroom" />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">

          {/* ─ Left: Gallery ─ */}
          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none">
            <motion.div
              style={reduceMotion ? undefined : { y: imageY }}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : imageReveal}
              className="relative"
            >
              {/* Video gallery — no overlapping badges */}
              <div
                className="relative flex flex-col gap-3 rounded-[22px] border border-[rgba(23,25,28,0.07)] bg-white p-2 shadow-[0_28px_70px_-28px_rgba(23,25,28,0.18)] sm:flex-row"
              >
                {/* Main video */}
                <div
                  className="group/main relative w-full cursor-pointer overflow-hidden rounded-[16px] bg-[#111] sm:w-[64%]"
                  style={{
                    border: "1px solid rgba(23,25,28,0.08)",
                    boxShadow: "0 16px 40px -20px rgba(18,22,12,0.35)",
                  }}
                  onMouseEnter={() => setMainHovered(true)}
                  onMouseLeave={() => setMainHovered(false)}
                >
                  <video
                    src={keukenVid1}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-auto w-full max-h-[min(62vh,520px)] object-cover"
                    style={{
                      transform: mainHovered && !reduceMotion ? "scale(1.03)" : "scale(1)",
                      transition: "transform 800ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(12,16,10,0.55)] via-transparent to-transparent" />

                  {/* Live chip — compact, inside corner only */}
                  <div className="pointer-events-none absolute left-3.5 top-3.5 z-10">
                    <div
                      className="flex items-center gap-2 rounded-[8px] px-2.5 py-1.5"
                      style={{
                        background: "rgba(12,16,10,0.72)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <span
                        className="h-[5px] w-[5px] rounded-full bg-[#8BC540]"
                        style={{ boxShadow: "0 0 6px rgba(139,197,64,0.7)" }}
                      />
                      <span
                        className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/90"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Live · Utrecht
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-end p-4">
                    <div
                      className="flex items-center gap-2"
                      style={{
                        opacity: mainHovered ? 1 : 0,
                        transform: mainHovered ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 450ms ease, transform 450ms cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <span
                        className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Bekijk showroom
                      </span>
                      <ArrowRight className="h-3 w-3 text-[#A8D95A]" />
                    </div>
                  </div>
                </div>

                {/* Accent videos */}
                <div className="flex w-full flex-row gap-2.5 sm:w-[36%] sm:flex-col sm:min-h-[320px]">
                  <SmallVideo src={keukenVid3} reduceMotion={reduceMotion} />
                  <SmallVideo src={keukenVid4} reduceMotion={reduceMotion} />
                  <SmallVideo src={keukenVid2} reduceMotion={reduceMotion} />
                </div>
              </div>

              {/* Stats row — below gallery, never covers video */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: luxuryEase }}
                viewport={motionViewport}
                className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[14px] border border-[rgba(23,25,28,0.07)] bg-white/90 px-3 py-3.5 text-center shadow-[0_10px_28px_-18px_rgba(23,25,28,0.14)] sm:px-4 sm:py-4 sm:text-left"
                  >
                    <p
                      className="font-serif text-[1.35rem] font-light leading-none tracking-[-0.02em] text-[#2F5218] sm:text-[1.5rem]"
                    >
                      {stat.number}
                    </p>
                    <p
                      className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#3E6317]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="mt-0.5 hidden text-[0.68rem] font-light text-[#7A7A7A] sm:block"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ─ Right: Content ─ */}
          <motion.div
            style={reduceMotion ? undefined : { y: contentY }}
            className="lg:pl-2 xl:pl-4"
          >
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : labelReveal}
              className="mb-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10"
                  style={{ background: "linear-gradient(90deg, rgba(200,169,107,0.55), transparent)" }}
                />
                <p
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8A7348]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Sinds 1978 · Utrecht Showroom
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : headingContainer}
            >
              <h2 className="font-serif text-[clamp(2.35rem,3.9vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-[#1E2013]">
                {headingLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden py-[0.04em]">
                    <motion.span
                      variants={reduceMotion ? undefined : lineReveal}
                      className="block"
                      style={
                        i === 1
                          ? {
                              background: "linear-gradient(128deg, #689A2E 0%, #8BC540 55%, #73A832 100%)",
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

            <motion.p
              custom={0.35}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-6 max-w-[32rem] text-[1.02rem] font-light leading-[1.75] tracking-[0.01em] text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              De talloze keukenopstellingen in onze showroom geven u genoeg inspiratie.
              Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed
              assortiment aan. Zo is er voor elk budget een droomkeuken.
            </motion.p>

            <motion.p
              custom={0.45}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : paragraphReveal}
              className="mt-4 max-w-[32rem] text-[1.02rem] font-light leading-[1.75] tracking-[0.01em] text-[#5A5A5A]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Van{" "}
              {highlights.map((item, index) => (
                <span key={item}>
                  <span className="font-medium text-[#3E6317]">{item}</span>
                  {index < highlights.length - 1 ? ", " : ""}
                </span>
              ))}{" "}
              tot verlichting: alles wat met keukens te maken heeft, is bij ons verkrijgbaar.
            </motion.p>

            {/* CTA — primary solid + secondary text link */}
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : ctaReveal}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <PremiumPillButton
                href="/consultation"
                variant="blue"
                shape="rounded"
                size="lg"
              >
                Plan showroombezoek
              </PremiumPillButton>

              <a
                href="/#brands"
                className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.04em] text-[#2F5218] transition-colors duration-300 hover:text-[#8BC540]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Bekijk merken
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
