"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { kc } from "@/lib/kc-data";
import {
  apparatuurOverview,
  type ApparatuurCategoryData,
} from "@/lib/apparatuur-pages/apparatuur";
import { BrandMarquee } from "@/components/site/apparatuur-pages/BrandMarquee";

const luxuryEase = motionEase.premium;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`brand-eyebrow ${light ? "brand-eyebrow--light" : ""}`}>
      <span className="brand-eyebrow__line" aria-hidden="true" />
      {children}
    </span>
  );
}

export function ApparatuurCategoryPage({ data }: { data: ApparatuurCategoryData }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  const related = apparatuurOverview.categories.filter((item) => item.id !== data.slug).slice(0, 3);

  return (
    <div className="brand-page">
      <section ref={heroRef} className="brand-page-hero relative min-h-[92vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        >
          <img
            src={data.hero.image}
            alt={`${data.name} Keuken-Centrum Utrecht`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.5)_46%,rgba(10,20,12,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(5,10,6,0.55)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[92vh] flex-col justify-end pb-24 pt-36 md:pb-28 md:pt-44">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[54rem]"
          >
            <div className="mb-6">
              <span className="app-crumb">
                <a href="/apparatuur">Apparatuur</a>
                <span className="app-crumb__sep" aria-hidden="true" />
                <span className="app-crumb__current">{data.name}</span>
              </span>
            </div>
            <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-white">
              {data.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </h1>
            <p className="mt-7 max-w-[40rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumPillButton href="/#consultation" size="lg">
                Meer informatie
              </PremiumPillButton>
              <PremiumPillButton href={kc.contact.phoneHref} variant="ghost" size="lg">
                Bel direct
              </PremiumPillButton>
            </div>
            <div className="mt-12">
              <div className="brand-page-hero__badge-strip">
                {data.hero.badges.map((badge, index) => (
                  <div key={badge.label} className="brand-page-hero__badge">
                    {index > 0 && <span className="brand-page-hero__badge-divider" aria-hidden="true" />}
                    <span className="brand-page-hero__badge-value">{badge.value}</span>
                    <span className="brand-page-hero__badge-label">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>{data.intro.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.12] tracking-[-0.015em] text-[var(--secondary)]">
                {data.intro.title}
              </h2>
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="space-y-5"
            >
              {data.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 36)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                  {paragraph}
                </p>
              ))}
              {data.brandsNote ? (
                <div className="app-note-card">
                  <span className="app-note-card__ghost" aria-hidden="true">&#10003;</span>
                  <p className="relative z-[1] pr-10 text-[0.92rem] font-medium leading-[1.7] text-[var(--secondary)]">
                    {data.brandsNote}
                  </p>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-[rgba(139,197,64,0.1)] bg-[linear-gradient(180deg,rgba(139,197,64,0.045)_0%,transparent_100%)]">
        <div className="site-container">
          <div className="mb-12 max-w-[40rem]">
            <Eyebrow>Typen & collecties</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] text-[var(--secondary)]">
              Kies het type dat bij <em className="italic text-[var(--green)]">uw keuken</em> past
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.types.map((type, index) => (
              <motion.article
                key={type.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.7, delay: index * 0.07, ease: luxuryEase }}
                className="app-type-card group"
              >
                <div className="app-type-card__media">
                  <img src={type.image} alt={type.title} loading="lazy" className="app-type-card__photo" />
                  <span className="app-type-card__frame" aria-hidden="true" />
                  <span className="app-type-card__num">{String(index + 1).padStart(2, "0")}</span>
                  <div className="app-type-card__caption">
                    <h3 className="app-type-card__title">{type.title}</h3>
                    <p className="app-type-card__body">{type.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {data.valueProps?.length ? (
        <section className="section-shell">
          <div className="site-container">
            <div className="mb-10">
              <Eyebrow>Waarom Keuken-Centrum</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
                Advies met <em className="italic text-[var(--green)]">diepgang</em>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {data.valueProps.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={motionViewport}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: luxuryEase }}
                  className={`keukens-value-card ${index === 1 ? "keukens-value-card--dark" : ""}`}
                >
                  <span className="keukens-value-card__num">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-serif text-[1.4rem] leading-[1.2]">{item.title}</h3>
                  <p className="mt-3.5 text-[0.95rem] font-light leading-[1.75] opacity-80">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-8">
            <Eyebrow>Topmerken</Eyebrow>
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ duration: 0.8, ease: luxuryEase }}
          >
            <BrandMarquee />
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Veelgestelde vragen</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.7rem)] text-[var(--secondary)]">
                Advies of hulp <em className="italic text-[var(--green)]">nodig?</em>
              </h2>
              <p className="mt-4 text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
                Twijfelt u nog over uw keuze? Bekijk de antwoorden hieronder of kom langs in de showroom.
              </p>
              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">
                  ?
                </span>
                <div className="relative z-[1] flex items-center gap-4">
                  <span className="brand-faq__contact-icon">
                    <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
                  </span>
                  <div>
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
                      Direct contact
                    </span>
                    <a href={kc.contact.phoneHref} className="mt-1 block font-serif text-[1.4rem] text-white">
                      {kc.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Accordion type="single" collapsible className="brand-faq">
              {data.faq.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`} className="brand-faq__item">
                  <AccordionTrigger className="brand-faq__trigger">
                    <span className="brand-faq__num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="brand-faq__content">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-10">
            <Eyebrow>Meer apparatuur</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
              Ook interessant
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.6, delay: index * 0.08, ease: luxuryEase }}
                className="app-related-card group"
              >
                <img src={item.image} alt={item.name} loading="lazy" className="app-related-card__image" />
                <div className="app-related-card__caption">
                  <div>
                    <h3 className="font-serif text-[1.3rem] leading-[1.15] text-white">{item.name}</h3>
                    <p className="mt-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[rgba(255,255,255,0.62)]">
                      {item.tagline}
                    </p>
                  </div>
                  <span className="app-related-card__arrow" aria-hidden="true">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[34rem]">
              <Eyebrow light>Showroom Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                {data.showroomCta.title}{" "}
                <em className="italic text-[var(--green-highlight)]">{data.showroomCta.highlight}</em>
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                {data.showroomCta.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PremiumPillButton href="/#consultation" size="xl">
                {data.showroomCta.primaryLabel}
              </PremiumPillButton>
              <PremiumPillButton href={kc.contact.phoneHref} variant="ghost" size="xl">
                {data.showroomCta.secondaryLabel}
              </PremiumPillButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
