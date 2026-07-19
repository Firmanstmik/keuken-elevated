"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Grid4 as Grid3x3,
  Layer as Layers,
  MagicStar as Sparkles,
  ShieldTick as ShieldCheck,
  Building4 as Factory,
  Clock,
  Award,
  ArrowDown2 as ArrowDown,
  Export as ArrowUpRight,
  Call as Phone,
  TickCircle as Check,
} from "@zethictech/iconsax-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { aiKuchenPage } from "@/lib/brand-pages/ai-kuchen";
import { kc } from "@/lib/kc-data";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";

const luxuryEase = motionEase.premium;

const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: luxuryEase },
  },
};

const pillarIcons = {
  sparkles: Sparkles,
  layers: Layers,
  grid: Grid3x3,
} as const;

export function AiKuchenPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div className="brand-page">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="brand-page-hero relative min-h-[96vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        >
          <img
            src={aiKuchenPage.hero.image}
            alt="AI Küchen keuken in showroom Utrecht"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.5)_46%,rgba(10,20,12,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
          {/* Fine vignette for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(5,10,6,0.55)]" />
        </motion.div>

        {/* Seamless fade into page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="brand-page-hero__content site-container relative z-[2] flex min-h-[96vh] flex-col justify-end pb-24 pt-36 md:pb-28 md:pt-44">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : heroStagger}
            className="max-w-[54rem]"
          >
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-10 flex items-center gap-5"
            >
              <div className="brand-page-hero__logo-wrap">
                <img
                  src={aiKuchenLogo}
                  alt="AI Küchen logo"
                  className="h-8 w-auto max-w-[140px] object-contain md:h-9"
                />
              </div>
              <span className="hidden h-9 w-px bg-[rgba(255,255,255,0.18)] sm:block" />
              <span className="hidden flex-col gap-0.5 sm:flex">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[rgba(255,255,255,0.85)]">
                  {aiKuchenPage.legacyName}
                </span>
                <span className="text-[0.62rem] font-light uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">
                  {aiKuchenPage.country} · sinds 1938
                </span>
              </span>
            </motion.div>

            <motion.div variants={reduceMotion ? undefined : fadeUp}>
              <Eyebrow light>{aiKuchenPage.hero.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 font-serif text-[clamp(3rem,6.6vw,5.2rem)] leading-[0.98] tracking-[-0.025em] text-white"
            >
              {aiKuchenPage.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">
                {aiKuchenPage.hero.highlight}
              </em>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-7 max-w-[36rem] text-[1.08rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.78)]"
            >
              {aiKuchenPage.hero.subtitle}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <PremiumPillButton href={aiKuchenPage.hero.cta.primaryHref} size="lg">
                {aiKuchenPage.hero.cta.primary}
              </PremiumPillButton>
              <PremiumPillButton
                href={aiKuchenPage.hero.cta.secondaryHref}
                variant="ghost"
                size="lg"
              >
                {aiKuchenPage.hero.cta.secondary}
              </PremiumPillButton>
            </motion.div>

            {/* Glass strip with dividers — one refined unit instead of loose boxes */}
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-14">
              <div className="brand-page-hero__badge-strip">
                {aiKuchenPage.hero.badges.map((badge, index) => (
                  <div key={badge.label} className="brand-page-hero__badge">
                    {index > 0 && (
                      <span className="brand-page-hero__badge-divider" aria-hidden="true" />
                    )}
                    <span className="brand-page-hero__badge-value">{badge.value}</span>
                    <span className="brand-page-hero__badge-label">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 right-8 z-[2] hidden md:block"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.22)] text-white/70"
          >
            <ArrowDown className="h-4 w-4" variant="Linear" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="section-shell">
        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>{aiKuchenPage.intro.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-[clamp(2.1rem,3.8vw,3.1rem)] leading-[1.1] tracking-[-0.015em] text-[var(--secondary)]">
                Moderne architectuur met <em className="italic text-[var(--green)]">innovatie</em>{" "}
                in elk detail
              </h2>

              {/* Lead paragraph — larger, editorial weight */}
              <p className="mt-8 border-l-2 border-[var(--green)] pl-6 font-serif text-[1.2rem] leading-[1.65] text-[#111111]">
                {aiKuchenPage.intro.paragraphs[0]}
              </p>

              <div className="mt-6 space-y-5">
                {aiKuchenPage.intro.paragraphs.slice(1).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-[var(--text-soft)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature row — divided editorial strip */}
              <div className="mt-10 flex items-stretch border-t border-[rgba(139,197,64,0.16)] pt-7">
                {[
                  { value: "100%", label: "Maatwerk" },
                  { value: "DE", label: "Productie" },
                  { value: "1978", label: "Partner sinds" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-1.5 ${
                      index === 0 ? "pr-8" : "border-l border-[rgba(139,197,64,0.18)] px-8"
                    }`}
                  >
                    <span className="font-serif text-[1.7rem] italic leading-none tracking-[-0.01em] text-[var(--green)]">
                      {item.value}
                    </span>
                    <span className="text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[var(--text-soft)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : imageReveal}
              className="brand-page-intro__frame"
            >
              <div className="brand-page-intro__image-wrap">
                <img
                  src={aiKuchenPage.intro.image}
                  alt="AI Küchen keuken detail"
                  className="brand-page-intro__image"
                />
                <div className="brand-page-intro__glow" aria-hidden="true" />
              </div>

              {/* Rotating heritage roundel */}
              <div className="brand-page-intro__roundel" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="brand-page-intro__roundel-svg">
                  <defs>
                    <path
                      id="intro-roundel-path"
                      d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text className="brand-page-intro__roundel-text">
                    <textPath href="#intro-roundel-path">
                      AI KÜCHEN · SINDS 1938 · DUITSE PRECISIE ·
                    </textPath>
                  </text>
                </svg>
                <span className="brand-page-intro__roundel-center">
                  <Sparkles className="h-4 w-4" variant="Linear" />
                </span>
              </div>

              {/* Floating caption card */}
              <div className="brand-page-intro__caption">
                <span className="brand-page-intro__caption-tag">Showroom Utrecht</span>
                <span className="brand-page-intro__caption-title">
                  Meerdere modellen live te ervaren
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────── */}
      <section className="section-shell border-y border-[rgba(139,197,64,0.1)] bg-[linear-gradient(180deg,rgba(139,197,64,0.045)_0%,transparent_100%)]">
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-[32rem]">
              <Eyebrow>Drie pijlers</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.12] tracking-[-0.015em] text-[var(--secondary)]">
                Kwaliteit, maatwerk en <em className="italic text-[var(--green)]">innovatie</em> in
                balans
              </h2>
            </div>
            <p className="max-w-[21rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
              Elke AI Küchen keuken wordt gebouwd op drie fundamenten die samen het verschil maken.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {aiKuchenPage.pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon];
              const photo = aiKuchenPage.gallery[index]?.src;
              return (
                <motion.article
                  key={pillar.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={motionViewport}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: luxuryEase }}
                  className="brand-pillar-card group"
                >
                  <div className="brand-pillar-card__media">
                    <img
                      src={photo}
                      alt={pillar.title}
                      loading="lazy"
                      className="brand-pillar-card__photo"
                    />
                    <span className="brand-pillar-card__num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="brand-pillar-card__body">
                    <div className="brand-pillar-card__icon">
                      <Icon className="h-5 w-5" variant="Linear" />
                    </div>
                    <h3 className="mt-5 font-serif text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-[var(--secondary)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3.5 text-[0.95rem] font-light leading-[1.75] text-[var(--text-soft)]">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="brand-pillar-card__line" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partnership / price ──────────────────────────────── */}
      <section className="section-shell">
        <div className="site-container">
          <div className="brand-partnership">
            <span className="brand-partnership__ghost" aria-hidden="true">
              Häcker
            </span>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="brand-partnership__copy relative z-[1]"
            >
              <Eyebrow light>{aiKuchenPage.partnership.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] tracking-[-0.015em] text-white">
                AI Küchen keukens voor de{" "}
                <em className="italic text-[var(--green-highlight)]">scherpste prijs</em>
              </h2>
              <p className="mt-7 text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.72)]">
                {aiKuchenPage.partnership.body}
              </p>
              <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {aiKuchenPage.partnership.highlights.map((item) => (
                  <li key={item} className="brand-partnership__highlight">
                    <span className="brand-partnership__check">
                      <Check className="h-3 w-3" variant="Bold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="relative z-[1]"
            >
              <div className="brand-partnership__stats">
                {[
                  { icon: Factory, label: "Directe fabriek", value: "Beste prijs" },
                  { icon: ShieldCheck, label: "CBW + 10 jaar", value: "Garantie" },
                  { icon: Clock, label: "Gemiddelde levertijd", value: "6 tot 8 weken" },
                  { icon: Award, label: "ISO 9001 gecertificeerd", value: "Kwaliteit" },
                ].map((stat) => (
                  <div key={stat.label} className="brand-stat-cell">
                    <stat.icon
                      className="h-[1.15rem] w-[1.15rem] text-[var(--green-highlight)]"
                      variant="Linear"
                    />
                    <span className="brand-stat-cell__value">{stat.value}</span>
                    <span className="brand-stat-cell__label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 flex items-center gap-2.5 text-[0.78rem] font-light tracking-[0.02em] text-[rgba(255,255,255,0.48)]">
                <span className="kitchen-eyebrow-mark" aria-hidden="true" />
                Al een offerte elders? Neem deze mee. Wij bieden vrijwel altijd beter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="section-shell border-t border-[rgba(139,197,64,0.1)]">
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <Eyebrow>Inspiratie</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,3.6vw,2.95rem)] leading-[1.08] tracking-[-0.015em] text-[var(--secondary)]">
                AI Küchen <em className="italic text-[var(--green)]">in beeld</em>
              </h2>
            </div>
            <div className="flex items-end gap-6 md:gap-8">
              <p className="max-w-[19rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                Officiële keukenopstellingen uit onze showroom. Elk ontwerp is volledig aanpasbaar.
              </p>
              <div className="hidden shrink-0 flex-col items-end border-l border-[rgba(139,197,64,0.2)] pl-6 md:flex">
                <span className="font-serif text-[2.6rem] italic leading-none text-[var(--green)]">
                  {String(aiKuchenPage.gallery.length).padStart(2, "0")}
                </span>
                <span className="mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  Opstellingen
                </span>
              </div>
            </div>
          </motion.div>

          <div className="brand-gallery">
            {aiKuchenPage.gallery.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.8, delay: index * 0.1, ease: luxuryEase }}
                className={`brand-gallery__item brand-gallery__item--${item.span} group`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="brand-gallery__image"
                />
                <span className="brand-gallery__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <figcaption className="brand-gallery__caption">
                  <span className="brand-gallery__tag">{item.tag}</span>
                  <span className="brand-gallery__title">{item.title}</span>
                </figcaption>
                <span className="brand-gallery__arrow" aria-hidden="true">
                  <ArrowUpRight className="h-4 w-4" variant="Linear" />
                </span>
              </motion.figure>
            ))}

            {/* Closing tile — invitation to the showroom */}
            <motion.a
              href="/#consultation"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
              className="brand-gallery__cta-tile group"
            >
              <span className="brand-gallery__cta-ghost" aria-hidden="true">
                Live
              </span>
              <div className="relative z-[1]">
                <Eyebrow light>Showroom Utrecht</Eyebrow>
                <h3 className="mt-4 font-serif text-[1.6rem] leading-[1.15] tracking-[-0.01em] text-white">
                  Liever <em className="italic text-[var(--green-highlight)]">in het echt</em>{" "}
                  ervaren?
                </h3>
                <p className="mt-3 max-w-[16rem] text-[0.88rem] font-light leading-[1.65] text-[rgba(255,255,255,0.62)]">
                  Meerdere AI Küchen opstellingen staan voor u klaar op de Zonnebaan.
                </p>
              </div>
              <div className="relative z-[1] flex items-center justify-between">
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.55)]">
                  Boek een afspraak
                </span>
                <span className="brand-gallery__cta-arrow">
                  <ArrowUpRight className="h-[1.1rem] w-[1.1rem]" variant="Linear" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Custom kitchens ──────────────────────────────────── */}
      <section className="brand-custom-band">
        <span className="brand-custom-band__ghost" aria-hidden="true">
          Maatwerk
        </span>
        <div className="site-container relative z-[1]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="brand-custom-band__inner"
          >
            <Eyebrow light>{aiKuchenPage.custom.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Écht <em className="italic text-[var(--green-highlight)]">alles</em> is mogelijk
            </h2>
            <p className="mt-7 max-w-[42rem] text-[1.05rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.78)]">
              {aiKuchenPage.custom.body}
            </p>
            <p className="mt-4 max-w-[42rem] text-[0.98rem] font-light leading-[1.75] text-[rgba(255,255,255,0.58)]">
              {aiKuchenPage.custom.secondary}
            </p>
            <div className="mt-10">
              <PremiumPillButton href="/configure" size="lg">
                Start uw ontwerp
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>Veelgestelde vragen</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.7rem)] leading-[1.12] tracking-[-0.015em] text-[var(--secondary)]">
                Alles wat u wilt weten over{" "}
                <em className="italic text-[var(--green)]">AI Küchen</em>
              </h2>
              <p className="mt-6 text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
                Staat uw antwoord er niet bij? Wij helpen u graag persoonlijk verder.
              </p>

              {/* Contact card — dark premium echo of the partnership panel */}
              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">
                  ?
                </span>
                <div className="relative z-[1] flex items-center gap-4">
                  <span className="brand-faq__contact-icon">
                    <Phone className="h-[1.05rem] w-[1.05rem]" variant="Linear" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
                      Direct contact
                    </span>
                    <a
                      href={kc.contact.phoneHref}
                      className="mt-1 font-serif text-[1.4rem] leading-none text-white transition-colors duration-300 hover:text-[var(--green-highlight)]"
                    >
                      {kc.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="relative z-[1] my-5 h-px bg-[rgba(255,255,255,0.12)]" />
                <a
                  href={`mailto:${kc.contact.email}`}
                  className="group relative z-[1] inline-flex items-center gap-2 text-[0.88rem] font-medium text-[var(--green-highlight)]"
                >
                  {kc.contact.email}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    variant="Linear"
                  />
                </a>
                <p className="relative z-[1] mt-4 text-[0.76rem] font-light tracking-[0.03em] text-[rgba(255,255,255,0.45)]">
                  Maandag tot vrijdag 09:00 tot 18:00 · Zaterdag 09:00 tot 17:00
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Accordion type="single" collapsible className="brand-faq">
                {aiKuchenPage.faq.map((item, index) => (
                  <AccordionItem key={item.q} value={`faq-${index}`} className="brand-faq__item">
                    <AccordionTrigger className="brand-faq__trigger">
                      <span className="brand-faq__num" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="brand-faq__content">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Advisors ─────────────────────────────────────────── */}
      <section className="section-shell border-t border-[rgba(139,197,64,0.1)] bg-[rgba(139,197,64,0.03)]">
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <Eyebrow>Uw adviseurs</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.6rem)] leading-[1.12] tracking-[-0.015em] text-[var(--secondary)]">
                Kom in contact <em className="italic text-[var(--green)]">met ons team</em>
              </h2>
            </div>
            <p className="max-w-[21rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
              Persoonlijk advies van mensen die hun vak verstaan. Loop binnen op de Zonnebaan.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {aiKuchenPage.advisors.map((advisor, index) => (
              <motion.article
                key={advisor.email}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.65, delay: index * 0.12, ease: luxuryEase }}
                className="brand-advisor-card group"
              >
                <div className="flex items-start justify-between">
                  <span className="brand-advisor-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="brand-advisor-card__role">{advisor.role}</span>
                </div>
                <h3 className="mt-8 font-serif text-[2.2rem] leading-none tracking-[-0.01em] text-[var(--secondary)]">
                  {advisor.name}
                </h3>
                <p className="mt-5 text-[0.96rem] font-light leading-[1.78] text-[var(--text-soft)]">
                  “{advisor.bio}”
                </p>
                <a href={`mailto:${advisor.email}`} className="brand-advisor-card__email">
                  {advisor.email}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    variant="Linear"
                  />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showroom CTA ─────────────────────────────────────── */}
      <section className="brand-showroom-cta">
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="brand-showroom-cta__inner"
          >
            <div className="max-w-[34rem]">
              <Eyebrow light>{aiKuchenPage.showroomCta.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.08] tracking-[-0.02em] text-white">
                AI Küchen <em className="italic text-[var(--green-highlight)]">in het echt</em>{" "}
                bekijken?
              </h2>
              <p className="mt-5 text-[1.02rem] font-light leading-[1.75] text-[rgba(255,255,255,0.78)]">
                {aiKuchenPage.showroomCta.subtitle}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.88rem] font-light tracking-[0.02em] text-[rgba(255,255,255,0.52)]">
                <span>
                  {kc.contact.address}, {kc.contact.postal}
                </span>
                <span className="hidden h-3 w-px bg-[rgba(255,255,255,0.25)] sm:block" />
                <span>{kc.contact.phone}</span>
              </p>
            </div>
            <div className="shrink-0">
              <PremiumPillButton href={aiKuchenPage.showroomCta.href} size="xl">
                {aiKuchenPage.showroomCta.button}
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
