"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Export as ArrowUpRight, Call as Phone } from "@zethictech/iconsax-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { kc } from "@/lib/kc-data";
import { aanbiedingen } from "@/lib/aanbiedingen";
import { BrandMarquee } from "@/components/site/apparatuur-pages/BrandMarquee";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";

const luxuryEase = motionEase.premium;

export function AanbiedingenPage() {
  const reduceMotion = useReducedMotion();
  const data = aanbiedingen;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <div className="brand-page">
      <section ref={heroRef} className="brand-page-hero relative min-h-[92vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        >
          <img
            src={data.hero.image}
            alt="Showroomkeuken aanbiedingen Keuken-Centrum Utrecht"
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
            <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(2.7rem,6vw,4.6rem)] leading-[0.98] tracking-[-0.025em] text-white">
              {data.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </h1>
            <p className="mt-7 max-w-[40rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumPillButton href="/#consultation" size="lg">
                Kom langs in de showroom
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-[rgba(139,197,64,0.1)] bg-[linear-gradient(180deg,rgba(139,197,64,0.045)_0%,transparent_100%)]">
        <div className="site-container">
          <div className="mb-12 max-w-[42rem]">
            <Eyebrow>Showroomkeukens</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] text-[var(--secondary)]">
              Showroomkeukens tegen de <em className="italic text-[var(--green)]">beste prijs</em>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.7, delay: index * 0.08, ease: luxuryEase }}
                className="app-type-card group"
              >
                <div className="app-type-card__media">
                  <img src={benefit.image} alt={benefit.title} loading="lazy" className="app-type-card__photo" />
                  <span className="app-type-card__frame" aria-hidden="true" />
                  <span className="app-type-card__num">{String(index + 1).padStart(2, "0")}</span>
                  <div className="app-type-card__caption">
                    <h3 className="app-type-card__title">{benefit.title}</h3>
                    <p className="app-type-card__body">{benefit.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="brand-partnership"
          >
            <div>
              <Eyebrow light>{data.hacker.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.08] tracking-[-0.015em] text-white">
                {data.hacker.title}{" "}
                <em className="italic text-[var(--green-highlight)]">{data.hacker.highlight}</em>
              </h2>
              <div className="mt-6 space-y-4">
                {data.hacker.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-[0.98rem] font-light leading-[1.8] text-[rgba(255,255,255,0.75)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {data.hacker.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-[1.9rem] leading-none text-[var(--green-highlight)]">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.5)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <PremiumPillButton href="/keukens/ai-kuchen" variant="ghost" size="lg">
                  Ontdek AI Küchen / Häcker
                </PremiumPillButton>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.12)]">
              <img
                src={data.hacker.image}
                alt="Häcker showroomkeuken in de sale"
                loading="lazy"
                className="h-full min-h-[18rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,14,9,0.65)_100%)]" />
              <span className="absolute bottom-4 left-5 font-serif text-[0.95rem] italic text-[rgba(255,255,255,0.85)]">
                Häcker showroommodellen, nu in de sale
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-8">
            <Eyebrow>Wij werken met de volgende merken</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
              De beste merken voor de <em className="italic text-[var(--green)]">beste prijs</em>
            </h2>
            <p className="mt-4 max-w-[36rem] text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
              Ergens al een offerte gehad? Wij bieden vaak een betere prijs.
            </p>
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
                Alles over <em className="italic text-[var(--green)]">showroomkeukens</em>
              </h2>
              <p className="mt-4 text-[0.98rem] font-light leading-[1.75] text-[var(--text-soft)]">
                Staat je antwoord er niet bij? Neem contact met ons op.
              </p>
              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">
                  ?
                </span>
                <div className="relative z-[1] flex items-center gap-4">
                  <span className="brand-faq__contact-icon">
                    <Phone className="h-[1.05rem] w-[1.05rem]" variant="Linear" />
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
          <div className="mb-12">
            <Eyebrow>Kom in contact met ons team</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.2vw,2.7rem)] text-[var(--secondary)]">
              Persoonlijk advies, <em className="italic text-[var(--green)]">vrijblijvende offerte</em>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
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
                    variant="Linear"
                  />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[36rem]">
              <Eyebrow light>Showroom Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                {data.cta.title} <em className="italic text-[var(--green-highlight)]">{data.cta.highlight}</em>
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                {data.cta.body}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.88rem] font-light tracking-[0.02em] text-[rgba(255,255,255,0.52)]">
                <span>
                  {kc.contact.address}, {kc.contact.postal}
                </span>
                <span className="hidden h-3 w-px bg-[rgba(255,255,255,0.25)] sm:block" />
                <span>{kc.contact.phone}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PremiumPillButton href="/#consultation" size="xl">
                Boek een afspraak
              </PremiumPillButton>
              <PremiumPillButton href={kc.contact.phoneHref} variant="ghost" size="xl">
                Bel direct
              </PremiumPillButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
