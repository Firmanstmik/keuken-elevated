"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Grid3x3,
  Layers,
  Sparkles,
  ShieldCheck,
  Factory,
  Clock,
  Award,
  ArrowDown,
  ArrowUpRight,
  Phone,
  Check,
  Heart,
  Shield,
  FileText,
} from "lucide-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { kc } from "@/lib/kc-data";
import type { BrandPageData } from "@/lib/brand-pages/types";

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
  shield: Shield,
  award: Award,
  heart: Heart,
} as const;

const statIcons = {
  factory: Factory,
  shield: ShieldCheck,
  clock: Clock,
  award: Award,
} as const;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`brand-eyebrow ${light ? "brand-eyebrow--light" : ""}`}>
      <span className="brand-eyebrow__line" aria-hidden="true" />
      {children}
    </span>
  );
}

function TitleParts({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after?: string;
}) {
  return (
    <>
      {before}
      <em className="italic text-[var(--green)]">{highlight}</em>
      {after ?? ""}
    </>
  );
}

export function BrandPage({ data, logoSrc }: { data: BrandPageData; logoSrc?: string }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const logo = logoSrc ?? data.logo;

  return (
    <div className="brand-page">
      <section ref={heroRef} className="brand-page-hero relative min-h-[96vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        >
          <img
            src={data.hero.image}
            alt={`${data.name} keuken in showroom Utrecht`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.5)_46%,rgba(10,20,12,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(5,10,6,0.55)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="brand-page-hero__content site-container relative z-[2] flex min-h-[96vh] flex-col justify-end pb-24 pt-36 md:pb-28 md:pt-44">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : heroStagger}
            className="max-w-[54rem]"
          >
            {(logo || data.legacyName || data.country) && (
              <motion.div variants={reduceMotion ? undefined : fadeUp} className="mb-10 flex items-center gap-5">
                {logo && (
                  <div className="brand-page-hero__logo-wrap">
                    <img
                      src={logo}
                      alt={`${data.name} logo`}
                      className="h-8 w-auto max-w-[140px] object-contain md:h-9"
                    />
                  </div>
                )}
                {(data.legacyName || data.country) && (
                  <>
                    <span className="hidden h-9 w-px bg-[rgba(255,255,255,0.18)] sm:block" />
                    <span className="hidden flex-col gap-0.5 sm:flex">
                      <span className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[rgba(255,255,255,0.85)]">
                        {data.legacyName ?? data.name}
                      </span>
                      <span className="text-[0.62rem] font-light uppercase tracking-[0.22em] text-[rgba(255,255,255,0.45)]">
                        {data.country}
                        {data.founded ? ` · sinds ${data.founded}` : ""}
                      </span>
                    </span>
                  </>
                )}
              </motion.div>
            )}

            <motion.div variants={reduceMotion ? undefined : fadeUp}>
              <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 font-serif text-[clamp(3rem,6.6vw,5.2rem)] leading-[0.98] tracking-[-0.025em] text-white"
            >
              {data.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-7 max-w-[36rem] text-[1.08rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.78)]"
            >
              {data.hero.subtitle}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <PremiumPillButton href={data.hero.cta.primaryHref} size="lg">
                {data.hero.cta.primary}
              </PremiumPillButton>
              <PremiumPillButton href={data.hero.cta.secondaryHref} variant="ghost" size="lg">
                {data.hero.cta.secondary}
              </PremiumPillButton>
            </motion.div>

            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-14">
              <div className="brand-page-hero__badge-strip">
                {data.hero.badges.map((badge, index) => (
                  <div key={badge.label} className="brand-page-hero__badge">
                    {index > 0 && <span className="brand-page-hero__badge-divider" aria-hidden="true" />}
                    <span className="brand-page-hero__badge-value">{badge.value}</span>
                    <span className="brand-page-hero__badge-label">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

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
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>{data.intro.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-[clamp(2.1rem,3.8vw,3.1rem)] leading-[1.1] tracking-[-0.015em] text-[var(--secondary)]">
                <TitleParts
                  before={data.intro.titleBefore}
                  highlight={data.intro.titleHighlight}
                  after={data.intro.titleAfter}
                />
              </h2>

              <p className="mt-8 border-l-2 border-[var(--green)] pl-6 font-serif text-[1.2rem] leading-[1.65] text-[var(--secondary)] opacity-[0.88]">
                {data.intro.paragraphs[0]}
              </p>

              <div className="mt-6 space-y-5">
                {data.intro.paragraphs.slice(1).map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 28)}
                    className="text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-[var(--text-soft)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex items-stretch border-t border-[rgba(139,197,64,0.16)] pt-7">
                {data.intro.signature.map((item, index) => (
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
                  src={data.intro.image}
                  alt={`${data.name} keuken detail`}
                  className="brand-page-intro__image"
                />
                <div className="brand-page-intro__glow" aria-hidden="true" />
              </div>

              <div className="brand-page-intro__roundel" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="brand-page-intro__roundel-svg">
                  <defs>
                    <path
                      id={`intro-roundel-path-${data.id}`}
                      d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text className="brand-page-intro__roundel-text">
                    <textPath href={`#intro-roundel-path-${data.id}`}>{data.intro.roundel}</textPath>
                  </text>
                </svg>
                <span className="brand-page-intro__roundel-center">
                  <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>

              <div className="brand-page-intro__caption">
                <span className="brand-page-intro__caption-tag">{data.intro.caption.tag}</span>
                <span className="brand-page-intro__caption-title">{data.intro.caption.title}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <Eyebrow>{data.pillars.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.12] tracking-[-0.015em] text-[var(--secondary)]">
                <TitleParts
                  before={data.pillars.titleBefore}
                  highlight={data.pillars.titleHighlight}
                  after={data.pillars.titleAfter}
                />
              </h2>
            </div>
            <p className="max-w-[21rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
              {data.pillars.lead}
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {data.pillars.items.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon];
              const photo = pillar.image ?? data.gallery.items[index]?.src ?? data.hero.image;
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
                    <img src={photo} alt={pillar.title} loading="lazy" className="brand-pillar-card__photo" />
                    <span className="brand-pillar-card__num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="brand-pillar-card__body">
                    <div className="brand-pillar-card__icon">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
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

      {data.series && (
        <section id="series" className="section-shell">
          <div className="site-container">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
            >
              <div className="max-w-[36rem]">
                <Eyebrow>{data.series.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] tracking-[-0.015em] text-[var(--secondary)]">
                  <TitleParts
                    before={data.series.titleBefore}
                    highlight={data.series.titleHighlight}
                  />
                </h2>
              </div>
              <p className="max-w-[22rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                {data.series.lead}
              </p>
            </motion.div>

            <div className="brand-series__grid">
              {data.series.items.map((item, index) => {
                const card = (
                  <>
                    <img src={item.image} alt={item.name} loading="lazy" className="brand-series__image" />
                    <div className="brand-series__overlay" />
                    <div className="brand-series__meta">
                      {item.tag && <span className="brand-series__tag">{item.tag}</span>}
                      <h3 className="brand-series__name">{item.name}</h3>
                      {item.href && (
                        <span className="brand-series__cta">
                          Bekijk serie
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                      )}
                    </div>
                  </>
                );

                const className = `brand-series__card group ${item.featured ? "brand-series__card--featured" : ""}`;

                return (
                  <motion.div
                    key={item.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={motionViewport}
                    transition={{ duration: 0.65, delay: Math.min(index, 8) * 0.05, ease: luxuryEase }}
                    className={className}
                  >
                    {item.href ? (
                      <a href={item.href} className="brand-series__link">
                        {card}
                      </a>
                    ) : (
                      <div className="brand-series__link">{card}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {data.catalogs && data.catalogs.length > 0 && (
        <section className="section-shell !pt-0">
          <div className="site-container">
            <div className="brand-catalogs">
              <div className="brand-catalogs__head">
                <Eyebrow>Catalogi</Eyebrow>
                <h3 className="mt-4 font-serif text-[1.55rem] text-[var(--secondary)]">
                  Officiële {data.name} <em className="italic text-[var(--green)]">catalogi</em>
                </h3>
              </div>
              <div className="brand-catalogs__list">
                {data.catalogs.map((catalog) => (
                  <a
                    key={catalog.href}
                    href={catalog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-catalogs__item"
                  >
                    <FileText className="h-4 w-4 text-[var(--green)]" strokeWidth={1.6} />
                    <span>
                      <span className="brand-catalogs__title">{catalog.title}</span>
                      {catalog.subtitle && (
                        <span className="brand-catalogs__subtitle">{catalog.subtitle}</span>
                      )}
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-50" strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-shell">
        <div className="site-container">
          <div className="brand-partnership">
            <span className="brand-partnership__ghost" aria-hidden="true">
              {data.partnership.ghost}
            </span>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="brand-partnership__copy relative z-[1]"
            >
              <Eyebrow light>{data.partnership.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] tracking-[-0.015em] text-white">
                {data.partnership.titleBefore}
                <em className="italic text-[var(--green-highlight)]">{data.partnership.titleHighlight}</em>
                {data.partnership.titleAfter ?? ""}
              </h2>
              <p className="mt-7 text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.72)]">
                {data.partnership.body}
              </p>
              <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {data.partnership.highlights.map((item) => (
                  <li key={item} className="brand-partnership__highlight">
                    <span className="brand-partnership__check">
                      <Check className="h-3 w-3" strokeWidth={2.4} />
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
                {data.partnership.stats.map((stat) => {
                  const Icon = statIcons[stat.icon];
                  return (
                    <div key={stat.label} className="brand-stat-cell">
                      <Icon
                        className="h-[1.15rem] w-[1.15rem] text-[var(--green-highlight)]"
                        strokeWidth={1.5}
                      />
                      <span className="brand-stat-cell__value">{stat.value}</span>
                      <span className="brand-stat-cell__label">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 flex items-center gap-2.5 text-[0.78rem] font-light tracking-[0.02em] text-[rgba(255,255,255,0.48)]">
                <span className="h-px w-8 bg-[rgba(168,217,90,0.4)]" aria-hidden="true" />
                {data.partnership.note}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              <Eyebrow>{data.gallery.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,3.6vw,2.95rem)] leading-[1.08] tracking-[-0.015em] text-[var(--secondary)]">
                <TitleParts
                  before={data.gallery.titleBefore}
                  highlight={data.gallery.titleHighlight}
                />
              </h2>
            </div>
            <div className="flex items-end gap-6 md:gap-8">
              <p className="max-w-[19rem] text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                {data.gallery.lead}
              </p>
              <div className="hidden shrink-0 flex-col items-end border-l border-[rgba(139,197,64,0.2)] pl-6 md:flex">
                <span className="font-serif text-[2.6rem] italic leading-none text-[var(--green)]">
                  {String(data.gallery.items.length).padStart(2, "0")}
                </span>
                <span className="mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  Opstellingen
                </span>
              </div>
            </div>
          </motion.div>

          <div className="brand-gallery">
            {data.gallery.items.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.8, delay: index * 0.1, ease: luxuryEase }}
                className={`brand-gallery__item brand-gallery__item--${item.span} group`}
              >
                <img src={item.src} alt={item.title} loading="lazy" className="brand-gallery__image" />
                <span className="brand-gallery__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <figcaption className="brand-gallery__caption">
                  <span className="brand-gallery__tag">{item.tag}</span>
                  <span className="brand-gallery__title">{item.title}</span>
                </figcaption>
                <span className="brand-gallery__arrow" aria-hidden="true">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
                </span>
              </motion.figure>
            ))}

            <motion.a
              href={data.gallery.cta.href}
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
                  {data.gallery.cta.titleBefore}{" "}
                  <em className="italic text-[var(--green-highlight)]">{data.gallery.cta.titleHighlight}</em>
                </h3>
                <p className="mt-3 max-w-[16rem] text-[0.88rem] font-light leading-[1.65] text-[rgba(255,255,255,0.62)]">
                  {data.gallery.cta.body}
                </p>
              </div>
              <div className="relative z-[1] flex items-center justify-between">
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.55)]">
                  {data.gallery.cta.label}
                </span>
                <span className="brand-gallery__cta-arrow">
                  <ArrowUpRight className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

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
            <Eyebrow light>{data.custom.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
              {data.custom.titleBefore}{" "}
              <em className="italic text-[var(--green-highlight)]">{data.custom.titleHighlight}</em>
              {data.custom.titleAfter ? ` ${data.custom.titleAfter}` : ""}
            </h2>
            <p className="mt-7 max-w-[42rem] text-[1.05rem] font-light leading-[1.8] tracking-[0.01em] text-[rgba(255,255,255,0.78)]">
              {data.custom.body}
            </p>
            <p className="mt-4 max-w-[42rem] text-[0.98rem] font-light leading-[1.75] text-[rgba(255,255,255,0.58)]">
              {data.custom.secondary}
            </p>
            <div className="mt-10">
              <PremiumPillButton href="/configure" size="lg">
                Start uw ontwerp
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>

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
                {data.faq.titleBefore}{" "}
                <em className="italic text-[var(--green)]">{data.faq.titleHighlight}</em>
              </h2>
              <p className="mt-6 text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
                Staat uw antwoord er niet bij? Wij helpen u graag persoonlijk verder.
              </p>

              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">
                  ?
                </span>
                <div className="relative z-[1] flex items-center gap-4">
                  <span className="brand-faq__contact-icon">
                    <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
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
                    strokeWidth={1.8}
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
                {data.faq.items.map((item, index) => (
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

          <div className={`grid gap-5 ${data.advisors.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {data.advisors.map((advisor, index) => (
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
                    strokeWidth={1.8}
                  />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
              <Eyebrow light>{data.showroomCta.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.08] tracking-[-0.02em] text-white">
                {data.showroomCta.titleBefore}{" "}
                <em className="italic text-[var(--green-highlight)]">{data.showroomCta.titleHighlight}</em>
                {data.showroomCta.titleAfter ? ` ${data.showroomCta.titleAfter}` : ""}
              </h2>
              <p className="mt-5 text-[1.02rem] font-light leading-[1.75] text-[rgba(255,255,255,0.78)]">
                {data.showroomCta.subtitle}
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
              <PremiumPillButton href={data.showroomCta.href} size="xl">
                {data.showroomCta.button}
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
