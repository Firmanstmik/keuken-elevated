import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import type { ComponentType, SVGAttributes } from "react";
import {
  Award as IconsaxAward,
  Headphone as IconsaxHeadphone,
  House as IconsaxHouse,
  Maximize as IconsaxMaximize,
  Pause as IconsaxPause,
  Play as IconsaxPlay,
  Tag as IconsaxTag,
} from "@zethictech/iconsax-react";
import { ChevronDown } from "lucide-react";
import { motionDuration, motionEase } from "@/lib/motion";
import heroImg1 from "@/assets/hero_img1.webp";
import heroImg2 from "@/assets/hero_img2.webp";
import heroImg3 from "@/assets/hero_img3.webp";
import heroImg4 from "@/assets/hero_img4.webp";
import heroImg5 from "@/assets/hero_img5.webp";
import heroVideo from "@/assets/video_hero_section.webm";
import betonImg from "@/assets/beton-img.webp";
import boraImg from "@/assets/Bora-img.webp";
import marmerImg from "@/assets/marmer-img.webp";

const headlineLines: ReactNode[] = [
  "De Premium",
  "Keukenbestemming",
  <>
    van{" "}
    <span className="hero-accent">Utrecht.</span>
  </>,
];

function KitchenFaucetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="10.5" y="24.5" width="11" height="2.2" rx="1.1" fill="currentColor" opacity="0.85" />
      <path
        d="M15.2 24.5V13.2"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M15.2 13.2H21.2C24.2 13.2 25.8 14.8 25.8 17.2V19"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.8 19V21.2"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M16.8 15.2V18.4"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="16.8" cy="19.6" r="1.05" fill="currentColor" />
      <path
        d="M13.2 11.2L15.2 13.2"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function HeroPartnerBadge({
  activeSlide,
  activeIndex,
  indicatorIds,
  onSelect,
  reduceMotion,
}: {
  activeSlide: (typeof heroSlides)[number];
  activeIndex: number;
  indicatorIds: string[];
  onSelect: (index: number) => void;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.82 }}
      className="mt-6 flex justify-start"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.10)] px-2.5 py-1.5 shadow-[0_12px_32px_-28px_rgba(23,25,28,0.35)] backdrop-blur-xl">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeSlide.brand}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: motionEase.premium }}
            className="text-[0.62rem] tracking-[0.22em] text-[rgba(247,245,242,0.75)]"
          >
            {activeSlide.brand}
          </motion.span>
        </AnimatePresence>
        <span className="h-px w-6 bg-[linear-gradient(90deg,rgba(247,245,242,0),rgba(247,245,242,0.24),rgba(247,245,242,0))]" />
        <div className="flex items-center gap-1.5">
          {indicatorIds.map((id, index) => (
            <motion.button
              key={id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Toon slide ${id}`}
              aria-pressed={index === activeIndex}
              className="relative h-1.5 rounded-full bg-[rgba(247,245,242,0.12)]"
              animate={{
                width: index === activeIndex ? 20 : 8,
                backgroundColor: index === activeIndex ? activeSlide.accent : "rgba(247,245,242,0.12)",
              }}
              transition={{ duration: 0.35, ease: motionEase.premium }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function HeroScrollCue({ reduceMotion }: { reduceMotion: boolean | null }) {
  const scrollToNext = () => {
    const target = document.getElementById("brands");
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToNext}
      aria-label="Ontdek meer — scroll naar beneden"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.luxury, ease: motionEase.premium, delay: 1.1 }}
      className="hero-scroll-cue hero-scroll-cue--compact group absolute inset-x-0 bottom-6 z-30 mx-auto flex w-fit flex-col items-center gap-1.5 border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(139,197,64,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <motion.span
        className="text-[0.5rem] font-light uppercase tracking-[0.28em] text-[rgba(247,245,242,0.42)] transition-colors duration-500 group-hover:text-[rgba(247,245,242,0.72)]"
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.75, 0.4] }}
        transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        Ontdek meer
      </motion.span>

      <span className="relative flex flex-col items-center">
        <motion.span
          className="hero-scroll-cue-glow pointer-events-none absolute inset-0 rounded-full blur-lg"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { opacity: [0.1, 0.22, 0.1], scale: [0.92, 1.02, 0.92] }}
          transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.span
          className="hero-scroll-cue-frame relative flex items-center justify-center px-5 py-2.5 text-[#8BC540]"
          animate={reduceMotion ? undefined : { y: [0, -1.5, 0] }}
          transition={reduceMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <KitchenFaucetIcon className="h-5 w-5 transition-colors duration-500 group-hover:text-[#A8D95A]" />
        </motion.span>

        <span className="hero-scroll-track relative mt-0.5 h-6 w-px overflow-hidden">
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(139,197,64,0.5)_0%,rgba(139,197,64,0.06)_100%)]" />
          {!reduceMotion ? (
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#8BC540] shadow-[0_0_8px_rgba(139,197,64,0.45)]"
              animate={{ top: ["-10%", "110%"], opacity: [0, 1, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
        </span>

        <span className="relative -mt-0.5 flex flex-col items-center">
          {[0].map((i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="text-[rgba(247,245,242,0.32)] transition-colors duration-500 group-hover:text-[rgba(139,197,64,0.65)]"
              animate={reduceMotion ? undefined : { y: [0, 3, 0], opacity: [0.35, 0.7, 0.35] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 1.9, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <ChevronDown className="h-3 w-3" strokeWidth={1.5} />
            </motion.span>
          ))}
        </span>
      </span>
    </motion.button>
  );
}

const heroSlides = [
  {
    brand: "LEICHT",
    image: heroImg1,
    accent: "var(--gold)",
    accentSoft: "rgba(198,163,107,0.18)",
  },
  {
    brand: "NOBILIA",
    image: heroImg2,
    accent: "var(--green)",
    accentSoft: "rgba(139,197,64,0.14)",
  },
  {
    brand: "AI KÜCHEN",
    image: heroImg3,
    accent: "rgba(23,25,28,0.9)",
    accentSoft: "rgba(200,169,107,0.14)",
  },
  {
    brand: "ZAMPIERI",
    image: heroImg4,
    accent: "var(--green-soft)",
    accentSoft: "rgba(139,197,64,0.12)",
  },
  {
    brand: "CUCINESSE",
    image: heroImg5,
    accent: "var(--gold)",
    accentSoft: "rgba(198,163,107,0.18)",
  },
] as const;

type HeroIconProps = SVGAttributes<SVGSVGElement> & {
  size?: string | number;
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
};

function makeHeroIcon(
  Icon: ComponentType<HeroIconProps>,
  defaults?: Partial<Pick<HeroIconProps, "variant">>,
) {
  return function WrappedHeroIcon(props: HeroIconProps) {
    return <Icon size={24} variant="Linear" {...defaults} {...props} />;
  };
}

const HeroHouse = makeHeroIcon(IconsaxHouse);
const HeroAward = makeHeroIcon(IconsaxAward);
const HeroTag = makeHeroIcon(IconsaxTag);
const HeroHeadphone = makeHeroIcon(IconsaxHeadphone);
const HeroPlay = makeHeroIcon(IconsaxPlay);
const HeroPause = makeHeroIcon(IconsaxPause);
const HeroMaximize = makeHeroIcon(IconsaxMaximize);

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseToastTimeoutRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoPaused, setVideoPaused] = useState(false);
  const [showPauseToast, setShowPauseToast] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 70, damping: 18, mass: 0.6 });
  const parallaxY = useSpring(pointerY, { stiffness: 70, damping: 18, mass: 0.6 });
  const trustCardX = useTransform(parallaxX, (value) => value * 0.08);
  const trustCardY = useTransform(parallaxY, (value) => value * 0.08);
  const bgOffsetX = useTransform(parallaxX, (value) => value * 0.55);
  const bgOffsetY = useTransform(parallaxY, (value) => value * 0.55);
  const rotateY = useTransform(parallaxX, (value) => value * 0.14);
  const rotateX = useTransform(parallaxY, (value) => value * -0.14);
  const lightOffsetX = useTransform(parallaxX, (value) => value * 0.75);
  const lightOffsetY = useTransform(parallaxY, (value) => value * 0.75);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1.008, 1.04]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.72]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const handlePointerMove = (event: ReactMouseEvent<HTMLElement>) => {
    if (reduceMotion || !sectionRef.current) return;

    const bounds = sectionRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 20;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 20;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroSlides.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      setVideoPaused(true);
      return;
    }

    video
      .play()
      .then(() => setVideoPaused(false))
      .catch(() => setVideoPaused(true));
  }, [reduceMotion]);

  useEffect(() => {
    return () => {
      if (pauseToastTimeoutRef.current !== null) {
        window.clearTimeout(pauseToastTimeoutRef.current);
      }
    };
  }, []);

  const activeSlide = heroSlides[activeIndex];
  const indicatorIds = useMemo(() => heroSlides.map((slide) => slide.brand), []);

  const flashPauseToast = () => {
    setShowPauseToast(true);
    if (pauseToastTimeoutRef.current !== null) {
      window.clearTimeout(pauseToastTimeoutRef.current);
    }
    pauseToastTimeoutRef.current = window.setTimeout(() => {
      setShowPauseToast(false);
      pauseToastTimeoutRef.current = null;
    }, 1400);
  };

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setVideoPaused(false))
        .catch(() => setVideoPaused(true));
      return;
    }

    video.pause();
    setVideoPaused(true);
    flashPauseToast();
  };

  const requestVideoFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    const canFullscreen = "requestFullscreen" in video;
    if (!canFullscreen) return;

    (video as HTMLVideoElement & { requestFullscreen: () => Promise<void> })
      .requestFullscreen()
      .catch(() => undefined);
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      className="relative overflow-hidden border-b border-[rgba(200,169,107,0.15)] pt-32 md:pt-36"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.luxury, ease: motionEase.premium, delay: 0.35 }}
        className="absolute inset-0"
      >
        <motion.div
          style={{
            scale: heroScale,
            x: bgOffsetX,
            y: bgOffsetY,
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          className="absolute inset-0 will-change-transform"
        >
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.05] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "linear",
                  }
            }
            className="absolute inset-0"
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={activeSlide.brand}
                src={activeSlide.image}
                alt={`Premium keuken van ${activeSlide.brand}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
                width={1800}
                height={1200}
                loading="eager"
                fetchPriority="high"
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 1.03,
                        y: 8,
                      }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                }
                exit={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        scale: 1.01,
                        y: -6,
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 1.65,
                        ease: motionEase.premium,
                      }
                }
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,25,28,0.82)_0%,rgba(23,25,28,0.68)_20%,rgba(23,25,28,0.48)_36%,rgba(23,25,28,0.28)_52%,rgba(23,25,28,0.12)_66%,rgba(23,25,28,0)_80%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,28,0.28)_0%,rgba(23,25,28,0.14)_26%,rgba(23,25,28,0.22)_100%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            x: lightOffsetX,
            y: lightOffsetY,
            background: `radial-gradient(circle at 22% 28%, ${activeSlide.accentSoft}, transparent 30%)`,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(200,169,107,0.12),transparent_24%),radial-gradient(circle_at_72%_68%,rgba(139,197,64,0.08),transparent_28%)]"
          style={{ x: bgOffsetX, y: bgOffsetY }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[18rem] bg-[linear-gradient(180deg,rgba(23,25,28,0)_0%,rgba(23,25,28,0.06)_24%,rgba(23,25,28,0.28)_72%,rgba(23,25,28,0.42)_100%)]" />
      </motion.div>

      <div className="site-container relative z-10">
        <div className="grid min-h-[clamp(40rem,80vh,52rem)] items-center gap-12 pb-16 xl:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] xl:gap-14 xl:pb-20">
          <motion.div className="py-10 md:py-14" style={{ opacity: textOpacity, y: textY }}>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.05 }}
              className="section-label-row"
            >
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0.6 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: motionEase.precise, delay: 0.18 }}
                className="luxe-rule origin-left"
                style={{ background: `linear-gradient(90deg, ${activeSlide.accent}, rgba(201,164,106,0.08))` }}
              />
              <span className="eyebrow text-[rgba(247,245,242,0.64)]">SINDS 1978 • PREMIUM SHOWROOM UTRECHT</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              className="hero-display w-full max-w-[860px] pr-3 text-[#F7F5F2] md:pr-8"
            >
              {headlineLines.map((line, index) => (
                <span
                  key={index}
                  className={`block overflow-hidden pb-2 pr-4 last:pb-0 md:pr-6 ${
                    index === 1 ? "pb-[0.28em]" : ""
                  }`}
                >
                  <motion.span
                    custom={index}
                    variants={{
                      hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "112%" },
                      visible: (lineIndex: number) => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: motionDuration.premium,
                          ease: motionEase.premium,
                          delay: 0.22 + lineIndex * 0.12,
                        },
                      }),
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.52 }}
              className="mt-7 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[rgba(247,245,242,0.72)]"
            >
              Ontdek Duitse precisie en Italiaanse elegantie onder één dak. Persoonlijk showroomadvies,
              premium apparatuur en een doordachte configurator voor uw eerste ontwerpkeuze.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.68 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <PremiumPillButton
                href="#showroom"
                variant="blue"
                shape="rounded"
                size="xl"
                className="w-full sm:w-auto"
              >
                Plan Showroombezoek
              </PremiumPillButton>

              <PremiumPillButton
                href="/brands"
                variant="ghost"
                shape="rounded"
                size="xl"
                className="w-full sm:w-auto"
              >
                Start configurator
              </PremiumPillButton>
            </motion.div>

            <HeroPartnerBadge
              activeSlide={activeSlide}
              activeIndex={activeIndex}
              indicatorIds={indicatorIds}
              onSelect={setActiveIndex}
              reduceMotion={reduceMotion}
            />
          </motion.div>

          <div className="relative hidden min-h-[32rem] items-center justify-end lg:flex">
            <motion.aside
              aria-label="Videopreview van de showroom"
              initial={reduceMotion ? false : { opacity: 0, x: 18, y: 10 }}
              animate={
                reduceMotion
                  ? { opacity: 1, x: 0, y: 0 }
                  : {
                      opacity: 1,
                      x: 0,
                      y: [0, -4, 0],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.62 }
                  : {
                      opacity: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.62 },
                      x: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.62 },
                      y: { duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: motionEase.soft },
                    }
              }
              role="button"
              tabIndex={0}
              onClick={toggleVideoPlayback}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleVideoPlayback();
                }
              }}
              className="group relative w-full max-w-[880px] rounded-[28px] p-[1px] text-left text-white shadow-[0_40px_100px_-54px_rgba(23,25,28,0.72)] outline-none focus-visible:ring-2 focus-visible:ring-[rgba(200,169,107,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(23,25,28,0.2)] lux-border"
              style={{ x: trustCardX, y: trustCardY }}
            >
              <div className="relative z-10 overflow-hidden rounded-[27px] bg-[rgba(23,25,28,0.22)] backdrop-blur-2xl">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-[2200ms] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:saturate-[1.08] group-hover:contrast-[1.05] group-hover:brightness-[1.02]"
                  src={heroVideo}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  autoPlay={!reduceMotion}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,28,0.12)_0%,rgba(23,25,28,0.42)_64%,rgba(23,25,28,0.78)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(200,169,107,0.18),transparent_44%),radial-gradient(circle_at_78%_28%,rgba(139,197,64,0.10),transparent_42%)] opacity-0 transition-opacity duration-[2200ms] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100" />
                <div aria-hidden="true" className="pointer-events-none absolute -inset-x-14 top-[-30%] h-[58%] rotate-[12deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 blur-[1px] transition-[opacity,transform] duration-[2200ms] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-x-28" />

                <div className="relative aspect-[16/9]">
                  <div className="absolute left-4 top-4 right-4 flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(23,25,28,0.44)] px-3 py-2 shadow-[0_18px_46px_-34px_rgba(23,25,28,0.5)] backdrop-blur-xl">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] text-[var(--gold)]">
                      <HeroHouse className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-[0.68rem] tracking-[0.22em] text-white/70">SHOWROOM UTRECHT</span>
                  </div>

                  <div className="relative">
                    <AnimatePresence initial={false}>
                      {showPauseToast ? (
                        <motion.div
                           initial={{ opacity: 0, y: -8, scale: 0.96 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: -8, scale: 0.96 }}
                           transition={{ duration: 0.35, ease: motionEase.premium }}
                           className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(23,25,28,0.46)] px-3 py-2 text-[0.72rem] font-medium tracking-[-0.01em] text-white/90 shadow-[0_18px_46px_-34px_rgba(23,25,28,0.55)] backdrop-blur-xl"
                        >
                          <HeroPause className="h-4 w-4 text-white/90" />
                          <span>Pauze</span>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleVideoPlayback();
                      }}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(200,169,107,0.38)] bg-[rgba(23,25,28,0.44)] px-4 py-2 text-[0.78rem] font-medium tracking-[-0.01em] text-white/90 shadow-[0_18px_46px_-34px_rgba(23,25,28,0.55)] backdrop-blur-xl transition-colors duration-300 hover:bg-[rgba(23,25,28,0.58)]"
                      aria-label={videoPaused ? "Video afspelen" : "Video pauzeren"}
                    >
                      {videoPaused ? <HeroPlay className="h-4 w-4" /> : <HeroPause className="h-4 w-4" />}
                      <span>{videoPaused ? "Klik om af te spelen" : "Klik om te pauzeren"}</span>
                    </button>

                    <div className="relative opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div aria-hidden="true" className="absolute -inset-2 rounded-[18px] border border-[rgba(200,169,107,0.55)] shadow-[0_16px_44px_-28px_rgba(200,169,107,0.42)]" />
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          requestVideoFullscreen();
                        }}
                        className="relative inline-flex cursor-pointer items-center justify-center rounded-[16px] border border-white/10 bg-[rgba(23,25,28,0.5)] p-3 text-white/90 shadow-[0_18px_46px_-34px_rgba(23,25,28,0.55)] backdrop-blur-xl transition-colors duration-300 hover:bg-[rgba(23,25,28,0.64)]"
                        aria-label="Video vergroten"
                      >
                        <HeroMaximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 px-4 pb-4">
                  {[
                    { src: betonImg, alt: "Beton werkblad" },
                    { src: boraImg, alt: "BORA kookplaat" },
                    { src: marmerImg, alt: "Marmer werkblad" },
                  ].map((item) => (
                    <div
                      key={item.alt}
                      className="group/thumb relative overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(23,25,28,0.18)] shadow-[0_18px_46px_-34px_rgba(23,25,28,0.55)]"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[2400ms] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover/thumb:scale-[1.06]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,25,28,0.06)_0%,rgba(23,25,28,0.34)_100%)] opacity-90" />
                      <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-[rgba(200,169,107,0.9)] opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[rgba(200,169,107,0.9)] opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

      <HeroScrollCue reduceMotion={reduceMotion} />
    </section>
  );
}
