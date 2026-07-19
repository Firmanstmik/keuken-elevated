import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft2 as IconsaxArrowLeft,
  ArrowRight2 as IconsaxArrowRight,
  Award as IconsaxAward,
  Export as IconsaxExport,
  Location as IconsaxLocation,
} from "@zethictech/iconsax-react";
import { SectionChapter } from "@/components/site/SectionChapter";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { motionViewport } from "@/lib/motion";
import leichtLogo from "@/assets/Leicht_Logo.webp";
import boraLogo from "@/assets/Bora_Logo.webp";
import mieleLogo from "@/assets/Miele_Logo.webp";
import quookerLogo from "@/assets/Quooker_Logo.webp";
import gaggenauLogo from "@/assets/Gaggenau_Logo.webp";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";
import cucinesseLogo from "@/assets/Cucinesse_Logo_Official.png";
import nobiliaLogo from "@/assets/Nobilia_Logo.webp";
import leichtImage from "@/assets/brands/leicht-hero.webp";
import aiKuchenImage from "@/assets/brands/aikuchen-hero.webp";
import nobiliaImage from "@/assets/brands/nobilia-hero.webp";
import zampieriImage from "@/assets/brands/zampieri-hero.webp";
import cucinesseImage from "@/assets/brands/cucinesse-hero.webp";
import sceneBg from "@/assets/brands/brands-dark-bg.webp";

type FeaturedBrand = {
  name: string;
  logo: string;
  image: string;
  origin: string;
  since: string;
  href: string;
  eyebrow: string;
  description: string;
  signature: string;
};

const featuredBrands: FeaturedBrand[] = [
  {
    name: "Leicht",
    logo: leichtLogo,
    image: leichtImage,
    origin: "Duitsland",
    since: "Sinds 1928",
    href: "/keukens/leicht",
    eyebrow: "Hoofdpartner",
    description:
      "Architecturaal Duits design, gevormd door meer dan 90 jaar vakmanschap en compromisloze materiaalkeuze.",
    signature: "Bauhaus-erfgoed · Maatwerk",
  },
  {
    name: "AI Küchen",
    logo: aiKuchenLogo,
    image: aiKuchenImage,
    origin: "Duitsland",
    since: "Premium partner",
    href: "/keukens/ai-kuchen",
    eyebrow: "Duitse innovatie",
    description:
      "Moderne keukens met intelligente indelingen, sterke techniek en een persoonlijke uitstraling voor iedere ruimte.",
    signature: "Innovatief · Persoonlijk",
  },
  {
    name: "Nobilia",
    logo: nobiliaLogo,
    image: nobiliaImage,
    origin: "Duitsland",
    since: "Made in Germany",
    href: "/keukens/nobilia",
    eyebrow: "Europese marktleider",
    description:
      "Betrouwbare Duitse precisie, verrassend veel mogelijkheden en een afwerking die dagelijks comfort centraal stelt.",
    signature: "Veelzijdig · Betrouwbaar",
  },
  {
    name: "Zampieri",
    logo: zampieriLogo,
    image: zampieriImage,
    origin: "Italië",
    since: "Italiaans design",
    href: "/keukens/zampieri",
    eyebrow: "Sculpturale collectie",
    description:
      "Italiaanse finesse in haar puurste vorm: elegante volumes, rijke materialen en een uitgesproken architectonische rust.",
    signature: "Minimalistisch · Verfijnd",
  },
  {
    name: "Cucinesse",
    logo: cucinesseLogo,
    image: cucinesseImage,
    origin: "Italië",
    since: "Volledig op maat",
    href: "/keukens/cucinesse",
    eyebrow: "Italiaans maatwerk",
    description:
      "Warme Italiaanse sfeer en praktisch maatwerk komen samen in keukens die uitnodigen om dagelijks te leven.",
    signature: "Warm · Karaktervol",
  },
];

const marqueeBrands = [
  { name: "Leicht", logo: leichtLogo, description: "Architecturale Duitse keukens sinds 1928." },
  {
    name: "AI Küchen",
    logo: aiKuchenLogo,
    description: "Duitse innovatie met persoonlijk maatwerk.",
  },
  {
    name: "Nobilia",
    logo: nobiliaLogo,
    description: "Veelzijdige kwaliteit, volledig Made in Germany.",
  },
  {
    name: "Zampieri",
    logo: zampieriLogo,
    description: "Sculpturaal Italiaans design met karakter.",
  },
  {
    name: "Cucinesse",
    logo: cucinesseLogo,
    description: "Warme Italiaanse keukens, volledig op maat.",
  },
  { name: "Bora", logo: boraLogo, description: "Innovatieve kookveldafzuiging bij de bron." },
  {
    name: "Miele",
    logo: mieleLogo,
    description: "Premium apparatuur gebouwd voor jarenlang gebruik.",
  },
  {
    name: "Quooker",
    logo: quookerLogo,
    description: "Kokend, gekoeld en bruisend water uit één kraan.",
  },
  {
    name: "Gaggenau",
    logo: gaggenauLogo,
    description: "Professionele keukenapparatuur sinds 1683.",
  },
];

const AUTOPLAY_MS = 5600;
const luxuryEase = [0.22, 1, 0.36, 1] as const;

function logoTreatment(name: string) {
  if (name === "AI Küchen") {
    return { filter: "none" };
  }

  if (name === "Miele") {
    return {
      filter: "grayscale(1) brightness(0.55) contrast(16)",
      mixBlendMode: "screen" as const,
    };
  }

  return { filter: "brightness(0) invert(1)" };
}

function logoHoverTreatment(name: string) {
  const treatments = {
    Leicht: {
      glow: "rgba(160,166,160,0.28)",
      surface: "rgba(205,210,204,0.7)",
      border: "rgba(230,233,228,0.24)",
      filter: "drop-shadow(0 8px 11px rgba(0,0,0,0.72))",
    },
    Zampieri: {
      glow: "rgba(129,139,125,0.3)",
      surface: "rgba(190,197,188,0.7)",
      border: "rgba(221,225,218,0.22)",
      filter: "drop-shadow(0 8px 11px rgba(0,0,0,0.74))",
    },
    Cucinesse: {
      glow: "rgba(170,151,132,0.3)",
      surface: "rgba(204,193,181,0.72)",
      border: "rgba(232,223,213,0.22)",
      filter: "drop-shadow(0 8px 11px rgba(0,0,0,0.74))",
    },
    Bora: {
      glow: "rgba(100,126,143,0.34)",
      surface: "rgba(154,169,178,0.7)",
      border: "rgba(200,211,216,0.22)",
      filter: "drop-shadow(0 8px 12px rgba(5,12,17,0.78))",
    },
    Gaggenau: {
      glow: "rgba(187,163,118,0.3)",
      surface: "rgba(203,190,164,0.68)",
      border: "rgba(232,219,191,0.2)",
      filter: "drop-shadow(0 8px 11px rgba(0,0,0,0.76))",
    },
    Quooker: {
      glow: "rgba(213,45,36,0.24)",
      surface: "rgba(213,45,36,0.09)",
      border: "rgba(213,45,36,0.2)",
      filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.8)) drop-shadow(0 0 8px rgba(213,45,36,0.3))",
    },
    Nobilia: {
      glow: "rgba(227,6,19,0.24)",
      surface: "rgba(227,6,19,0.07)",
      border: "rgba(227,6,19,0.18)",
      filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.82)) drop-shadow(0 0 9px rgba(227,6,19,0.3))",
    },
    Miele: {
      glow: "rgba(212,33,42,0.24)",
      surface: "rgba(212,33,42,0.07)",
      border: "rgba(212,33,42,0.18)",
      filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.82)) drop-shadow(0 0 9px rgba(212,33,42,0.3))",
    },
    "AI Küchen": {
      glow: "rgba(145,182,192,0.24)",
      surface: "rgba(145,182,192,0.06)",
      border: "rgba(145,182,192,0.16)",
      filter:
        "drop-shadow(0 12px 16px rgba(0,0,0,0.82)) drop-shadow(0 0 8px rgba(145,182,192,0.3))",
    },
  } as const;

  return (
    treatments[name as keyof typeof treatments] ?? {
      glow: "rgba(139,197,64,0.16)",
      surface: "rgba(139,197,64,0.06)",
      border: "rgba(139,197,64,0.16)",
      filter: "drop-shadow(0 12px 16px rgba(0,0,0,0.78))",
    }
  );
}

function PartnerLogo({
  name,
  src,
  compact = false,
  decorative = false,
}: {
  name: string;
  src: string;
  compact?: boolean;
  decorative?: boolean;
}) {
  const hoverTreatment = logoHoverTreatment(name);

  return (
    <span className="relative inline-grid place-items-center">
      {compact && (
        <>
          <span
            className="pointer-events-none absolute -inset-x-5 -inset-y-4 rounded-[50%] opacity-0 blur-[15px] transition-opacity duration-500 group-hover/logo:opacity-100"
            style={{ backgroundColor: hoverTreatment.glow }}
          />
          <span
            className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-[14px] border opacity-0 shadow-[0_14px_28px_-18px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover/logo:opacity-100"
            style={{
              backgroundColor: hoverTreatment.surface,
              borderColor: hoverTreatment.border,
            }}
          />
        </>
      )}
      <img
        src={src}
        alt={decorative ? "" : `${name} logo`}
        loading={compact ? "lazy" : undefined}
        draggable={compact ? false : undefined}
        className={
          compact
            ? `relative z-10 w-auto object-contain opacity-70 transition-all duration-500 group-hover/logo:scale-[1.08] group-hover/logo:opacity-0 group-hover/logo:drop-shadow-[0_12px_16px_rgba(0,0,0,0.78)] ${name === "AI Küchen" ? "h-11 max-w-[64px] sm:h-12" : "h-7 max-w-[120px] sm:h-8"}`
            : name === "AI Küchen"
              ? "max-h-20 max-w-20 object-contain opacity-95"
              : "max-h-12 max-w-[170px] object-contain opacity-90"
        }
        style={logoTreatment(name)}
      />
      {compact && (
        <img
          src={src}
          alt=""
          loading="lazy"
          draggable={false}
          className={`absolute z-20 w-auto scale-90 object-contain opacity-0 transition-all duration-500 group-hover/logo:scale-[1.12] group-hover/logo:opacity-100 ${name === "AI Küchen" ? "h-11 max-w-[64px] sm:h-12" : "h-7 max-w-[120px] sm:h-8"}`}
          style={{ filter: hoverTreatment.filter }}
        />
      )}
    </span>
  );
}

export function Brands() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBrand = featuredBrands[activeIndex]!;

  const selectBrand = useCallback((index: number) => {
    setActiveIndex((index + featuredBrands.length) % featuredBrands.length);
  }, []);

  const nextBrand = useCallback(() => {
    setActiveIndex((index) => (index + 1) % featuredBrands.length);
  }, []);

  const previousBrand = useCallback(() => {
    setActiveIndex((index) => (index - 1 + featuredBrands.length) % featuredBrands.length);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(nextBrand, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex, nextBrand, reduceMotion]);

  return (
    <section id="brands" className="brands-scene section-shell relative overflow-hidden">
      <div
        className="brands-scene__photo"
        aria-hidden="true"
        style={{ backgroundImage: `url(${sceneBg})` }}
      />
      <div className="brands-scene__aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(139,197,64,0.07),transparent_36%),linear-gradient(180deg,rgba(6,9,6,0.28),rgba(5,7,5,0.68))]" />

      <div className="site-container relative z-10 max-w-7xl">
        <SectionChapter index={1} label="Partners" light />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="brands-carousel-grid mt-4 grid items-center gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-16"
        >
          <div className="relative mx-auto h-[470px] w-full max-w-[530px] sm:h-[560px]">
            {featuredBrands.map((brand, index) => {
              const offset = (index - activeIndex + featuredBrands.length) % featuredBrands.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrevious = offset === featuredBrands.length - 1;
              const stackPosition = isActive
                ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 50 }
                : isNext
                  ? { x: 44, y: 18, rotate: 5.5, scale: 0.945, opacity: 0.92, zIndex: 40 }
                  : isPrevious
                    ? { x: -44, y: 22, rotate: -5.5, scale: 0.94, opacity: 0.9, zIndex: 38 }
                    : offset === 2
                      ? { x: 60, y: 31, rotate: 7.5, scale: 0.9, opacity: 0.42, zIndex: 24 }
                      : { x: -60, y: 34, rotate: -7.5, scale: 0.895, opacity: 0.38, zIndex: 22 };

              return (
                <motion.article
                  key={brand.name}
                  aria-hidden={!isActive}
                  animate={stackPosition}
                  initial={false}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 74, damping: 18, mass: 0.9 }
                  }
                  className={`absolute inset-[2%_5%_2%_10%] overflow-hidden rounded-[32px] bg-[#10140e] ${
                    isActive
                      ? "border border-[rgba(200,169,107,0.25)] shadow-[0_48px_110px_-42px_rgba(0,0,0,0.98),0_0_0_1px_rgba(255,255,255,0.03)_inset]"
                      : "border border-white/[0.12] shadow-[0_36px_80px_-42px_rgba(0,0,0,0.88)]"
                  }`}
                >
                  <img
                    src={brand.image}
                    alt={isActive ? `${brand.name} keuken` : ""}
                    className={`absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 ${isActive ? "saturate-[0.92]" : "brightness-[0.84] saturate-[0.78]"}`}
                  />
                  <div
                    className={`absolute inset-0 ${
                      isActive
                        ? "bg-[linear-gradient(180deg,rgba(5,8,5,0.02)_0%,rgba(5,8,5,0.12)_45%,rgba(5,8,5,0.92)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(5,8,5,0.04),rgba(5,8,5,0.28))]"
                    }`}
                  />

                  {isActive && (
                    <>
                      <div className="pointer-events-none absolute inset-4 rounded-[23px] border border-white/[0.09]">
                        <span className="absolute -left-px -top-px h-12 w-12 rounded-tl-[23px] border-l border-t border-[#D8BE87]/70" />
                        <span className="absolute -bottom-px -right-px h-12 w-12 rounded-br-[23px] border-b border-r border-[#D8BE87]/70" />
                      </div>
                      <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8BC540] shadow-[0_0_9px_rgba(139,197,64,0.9)]" />
                        KC geselecteerd
                      </div>
                      <span className="absolute right-7 top-7 font-serif text-[0.72rem] italic text-white/55">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                        <p className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-[#D8BE87]">
                          {brand.signature}
                        </p>
                        <h3 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.03em] text-white">
                          {brand.name}
                        </h3>
                      </div>
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeBrand.name}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.62, ease: luxuryEase }}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(200,169,107,0.2)] bg-white/[0.035] px-3 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#D8BE87]">
                    <IconsaxAward size={13} variant="Linear" />
                    {activeBrand.eyebrow}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[0.52rem] uppercase tracking-[0.16em] text-white/42">
                    <IconsaxLocation size={12} variant="Linear" />
                    {activeBrand.origin}
                  </span>
                </div>

                <div className="mt-8 flex min-h-12 items-center">
                  <PartnerLogo name={activeBrand.name} src={activeBrand.logo} />
                </div>
                <p className="mt-3 text-[0.64rem] font-medium uppercase tracking-[0.24em] text-white/35">
                  {activeBrand.since}
                </p>
                <h2 className="mt-7 font-serif text-[clamp(2.5rem,5vw,4.4rem)] font-light leading-[0.98] tracking-[-0.045em] text-[#F5F2EC]">
                  Design dat <em className="italic text-[#D8BE87]">blijft.</em>
                </h2>
                <p className="mt-6 max-w-[35rem] text-[1rem] font-light leading-[1.8] text-white/62">
                  {activeBrand.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <PremiumPillButton href={activeBrand.href} variant="blue" size="lg">
                    Ontdek {activeBrand.name}
                  </PremiumPillButton>
                  <a
                    href={activeBrand.href}
                    className="group inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#D8BE87] transition-colors hover:text-white"
                  >
                    Bekijk collectie
                    <IconsaxExport
                      size={14}
                      variant="Linear"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 border-t border-white/[0.08] pt-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {featuredBrands.map((brand, index) => (
                    <button
                      key={brand.name}
                      type="button"
                      onClick={() => selectBrand(index)}
                      aria-label={`Toon ${brand.name}`}
                      aria-pressed={index === activeIndex}
                      className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${index === activeIndex ? "w-12 bg-white/12" : "w-2 bg-white/15 hover:bg-white/35"}`}
                    >
                      {index === activeIndex && (
                        <motion.span
                          key={`${activeBrand.name}-progress`}
                          className="absolute inset-y-0 left-0 origin-left rounded-full bg-[linear-gradient(90deg,#C8A96B,#8BC540)]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: reduceMotion ? 0 : AUTOPLAY_MS / 1000,
                            ease: "linear",
                          }}
                          style={{ width: "100%" }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="mr-2 font-serif text-[0.72rem] italic text-white/38">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(featuredBrands.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={previousBrand}
                    aria-label="Vorige partner"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/58 transition-all duration-300 hover:-translate-x-0.5 hover:border-[#C8A96B]/45 hover:bg-white/[0.06] hover:text-[#D8BE87]"
                  >
                    <IconsaxArrowLeft size={16} variant="Linear" />
                  </button>
                  <button
                    type="button"
                    onClick={nextBrand}
                    aria-label="Volgende partner"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/58 transition-all duration-300 hover:translate-x-0.5 hover:border-[#C8A96B]/45 hover:bg-white/[0.06] hover:text-[#D8BE87]"
                  >
                    <IconsaxArrowRight size={16} variant="Linear" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="brands-marquee relative z-30 mt-16 border-y border-white/[0.055] bg-black/10 py-5 backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="brands-marquee__track">
          {[...marqueeBrands, ...marqueeBrands].map((brand, index) => (
            <span key={`${brand.name}-${index}`} className="brands-marquee__item">
              <span className="group/logo relative z-10 inline-flex min-w-[125px] items-center justify-center py-2 transition-all duration-500 hover:z-30 hover:scale-[1.16] hover:drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)]">
                <span className="pointer-events-none absolute bottom-[calc(100%+0.7rem)] left-1/2 z-40 w-max max-w-[230px] -translate-x-1/2 translate-y-2 rounded-[14px] border border-[rgba(200,169,107,0.32)] bg-[rgba(13,17,11,0.98)] px-4 py-3 text-center opacity-0 shadow-[0_22px_52px_-18px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-400 group-hover/logo:translate-y-0 group-hover/logo:opacity-100">
                  <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[#D8BE87]">
                    {brand.name}
                  </span>
                  <span className="mt-1.5 block text-[0.68rem] font-light leading-[1.45] text-white/62">
                    {brand.description}
                  </span>
                  <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[rgba(200,169,107,0.22)] bg-[rgba(13,17,11,0.96)]" />
                </span>
                <PartnerLogo name={brand.name} src={brand.logo} compact decorative />
              </span>
              <span className="brands-marquee__dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
