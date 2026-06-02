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
import {
  ArrowRight,
} from "@/components/ui/icons";
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
    accentSoft: "rgba(61,154,66,0.16)",
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
    accentSoft: "rgba(110,154,105,0.14)",
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
  const primaryCtaVariants = reduceMotion
    ? undefined
    : ({
        rest: { y: 0, backgroundPosition: "0% 50%" },
        hover: {
          y: -1,
          backgroundPosition: "100% 50%",
          transition: { duration: motionDuration.premium, ease: motionEase.premium },
        },
      } as const);
  const ctaShineVariants = reduceMotion
    ? undefined
    : ({
        rest: { x: "-140%", opacity: 0 },
        hover: { x: "140%", opacity: 1, transition: { duration: 0.9, ease: motionEase.soft } },
      } as const);
  const ctaArrowVariants = reduceMotion
    ? undefined
    : ({
        rest: { x: 0 },
        hover: { x: 4, transition: { duration: motionDuration.normal, ease: motionEase.precise } },
      } as const);

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
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(200,169,107,0.12),transparent_24%),radial-gradient(circle_at_72%_68%,rgba(61,154,66,0.1),transparent_28%)]"
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
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#showroom"
                variants={primaryCtaVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileFocus="hover"
                className="brand-green-button group relative inline-flex h-[58px] items-center justify-center gap-3 rounded-[14px] px-8 text-[0.96rem] font-medium tracking-[-0.02em] text-white"
                style={{ backgroundSize: "180% 180%" }}
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[-34%] w-[34%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]"
                  variants={ctaShineVariants}
                />
                <span className="relative z-10">Plan Showroombezoek</span>
                <motion.span
                  className="relative z-10"
                  variants={ctaArrowVariants}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>

              <motion.a
                href="/brands"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileFocus={reduceMotion ? undefined : { y: -1 }}
                transition={{ duration: motionDuration.premium, ease: motionEase.premium }}
                className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-[12px] border border-[rgba(247,245,242,0.16)] bg-[rgba(23,25,28,0.36)] px-8 text-[0.96rem] font-medium tracking-[-0.02em] text-[#F7F5F2] shadow-[0_18px_46px_-36px_rgba(23,25,28,0.42)] backdrop-blur-xl hover:bg-[rgba(23,25,28,0.48)]"
              >
                <span>Start Configurator</span>
                <motion.span
                  className="relative"
                  whileHover={reduceMotion ? undefined : { x: 3 }}
                  transition={{ duration: motionDuration.normal, ease: motionEase.precise }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.82 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-[0.8rem] tracking-[0.12em] text-[var(--gold)]">★★★★★</span>
              <span className="text-sm font-medium tracking-[-0.02em] text-[#F7F5F2]">
                4.9 Google Reviews
              </span>
              <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(200,169,107,0),rgba(200,169,107,0.65),rgba(200,169,107,0))]" />
              <span className="text-[0.78rem] tracking-[0.12em] text-[rgba(247,245,242,0.5)]">
                Gecurateerde Duitse en Italiaanse keukens
              </span>
            </motion.div>
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(200,169,107,0.18),transparent_44%),radial-gradient(circle_at_78%_28%,rgba(61,154,66,0.14),transparent_42%)] opacity-0 transition-opacity duration-[2200ms] [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100" />
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

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDuration.luxury, ease: motionEase.premium, delay: 0.92 }}
          className="relative z-20 -mt-6 pb-10"
        >
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.44)] px-4 py-2.5 shadow-[0_18px_46px_-34px_rgba(23,25,28,0.22)] backdrop-blur-xl">
              <span className="text-[0.72rem] tracking-[0.26em] text-[var(--foreground)]/52">
                {activeSlide.brand}
              </span>
              <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(23,25,28,0),rgba(23,25,28,0.18),rgba(23,25,28,0))]" />
              <div className="flex items-center gap-2">
                {indicatorIds.map((id, index) => (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Toon slide ${id}`}
                    aria-pressed={index === activeIndex}
                    className="relative h-2 rounded-full bg-[rgba(23,25,28,0.12)]"
                    animate={{
                      width: index === activeIndex ? 28 : 10,
                      backgroundColor: index === activeIndex ? activeSlide.accent : "rgba(23,25,28,0.12)",
                    }}
                    transition={{ duration: 0.35, ease: motionEase.premium }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
