"use client";

import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
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
import { keukensOverview } from "@/lib/brand-pages/keukens-overview";

const luxuryEase = motionEase.premium;

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`brand-eyebrow ${light ? "brand-eyebrow--light" : ""}`}>
      <span className="brand-eyebrow__line" aria-hidden="true" />
      {children}
    </span>
  );
}

export function KeukensOverviewPage() {
  const reduceMotion = useReducedMotion();
  const data = keukensOverview;

  return (
    <div className="brand-page">
      <section className="brand-page-hero relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.hero.image} alt="Keukens Keuken-Centrum Utrecht" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.5)_46%,rgba(10,20,12,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[88vh] flex-col justify-end pb-24 pt-36">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[52rem]"
          >
            <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-white">
              {data.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </h1>
            <p className="mt-7 max-w-[36rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumPillButton href="/#consultation" size="lg">
                Plan showroombezoek
              </PremiumPillButton>
              <PremiumPillButton href="/keukens/leicht" variant="ghost" size="lg">
                Ontdek Leicht
              </PremiumPillButton>
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
              {data.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                  {p}
                </p>
              ))}
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
            className="mb-12"
          >
            <Eyebrow>Onze merken</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] text-[var(--secondary)]">
              De beste merken voor de <em className="italic text-[var(--green)]">beste prijs</em>
            </h2>
          </motion.div>

          <div className="keukens-brand-grid">
            {data.brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.7, delay: index * 0.08, ease: luxuryEase }}
              >
                <Link to={brand.href} className="keukens-brand-card group">
                  <div className="keukens-brand-card__media">
                    <img src={brand.image} alt={brand.name} loading="lazy" className="keukens-brand-card__image" />
                  </div>
                  <div className="keukens-brand-card__body">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--green)]">
                        {brand.country}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--text-soft)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--green)]" strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-3 font-serif text-[1.75rem] leading-none text-[var(--secondary)]">{brand.name}</h3>
                    <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
                      {brand.tagline}
                    </p>
                    <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                      {brand.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="brand-partnership">
            <span className="brand-partnership__ghost" aria-hidden="true">
              LEICHT
            </span>
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
              className="relative z-[1] col-span-full max-w-[48rem]"
            >
              <Eyebrow light>LEICHT Keukens</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.12] text-white">
                Ruimten van hoogste <em className="italic text-[var(--green-highlight)]">individualiteit</em>
              </h2>
              <p className="mt-6 text-[1rem] font-light leading-[1.8] text-[rgba(255,255,255,0.72)]">
                {data.leichtNote}
              </p>
              <div className="mt-8">
                <PremiumPillButton href="/keukens/leicht" size="lg">
                  Bekijk Leicht collectie
                </PremiumPillButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[rgba(139,197,64,0.1)]">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2">
            {data.valueProps.map((prop, index) => (
              <motion.article
                key={prop.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.65, delay: index * 0.1, ease: luxuryEase }}
                className={`keukens-value-card ${index === 1 ? "keukens-value-card--dark" : ""}`}
              >
                <span className="keukens-value-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-serif text-[1.85rem] leading-[1.15] tracking-[-0.01em]">
                  {prop.title}
                </h3>
                <p className="mt-5 text-[0.98rem] font-light leading-[1.75] opacity-80">{prop.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container max-w-[52rem]">
          <Eyebrow>Op maat</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(2rem,3.2vw,2.7rem)] text-[var(--secondary)]">
            Uw stijl. <em className="italic text-[var(--green)]">Onze oplossing.</em>
          </h2>
          <div className="mt-8 space-y-5">
            {data.customNote.map((p) => (
              <p key={p.slice(0, 30)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[rgba(139,197,64,0.1)]">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Veelgestelde vragen</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.7rem)] text-[var(--secondary)]">
                Alles over <em className="italic text-[var(--green)]">uw nieuwe keuken</em>
              </h2>
              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">?</span>
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

      <section className="section-shell bg-[rgba(139,197,64,0.03)]">
        <div className="site-container">
          <div className="mb-12">
            <Eyebrow>Uw adviseurs</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.6rem)] text-[var(--secondary)]">
              Kom in contact <em className="italic text-[var(--green)]">met ons team</em>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.advisors.map((advisor, index) => (
              <article key={advisor.email} className="brand-advisor-card group">
                <div className="flex items-start justify-between">
                  <span className="brand-advisor-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="brand-advisor-card__role">{advisor.role}</span>
                </div>
                <h3 className="mt-8 font-serif text-[2rem] leading-none text-[var(--secondary)]">{advisor.name}</h3>
                <p className="mt-5 text-[0.95rem] font-light leading-[1.75] text-[var(--text-soft)]">“{advisor.bio}”</p>
                <a href={`mailto:${advisor.email}`} className="brand-advisor-card__email">
                  {advisor.email}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
                </a>
              </article>
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
                Klaar voor uw <em className="italic text-[var(--green-highlight)]">droomkeuken</em>?
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                Boek een afspraak — wij helpen u graag verder van eerste idee tot professionele installatie.
              </p>
            </div>
            <PremiumPillButton href="/#consultation" size="xl">
              Boek een afspraak
            </PremiumPillButton>
          </div>
        </div>
      </section>
    </div>
  );
}
