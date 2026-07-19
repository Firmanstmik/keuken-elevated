"use client";

import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
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
import { worktopOverview } from "@/lib/worktop-pages/worktops";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";

const luxuryEase = motionEase.premium;

export function KeukenbladenOverviewPage() {
  const reduceMotion = useReducedMotion();
  const data = worktopOverview;

  return (
    <div className="brand-page">
      <section className="brand-page-hero relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.hero.image} alt="Keukenbladen Keuken-Centrum Utrecht" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.92)_0%,rgba(10,20,12,0.48)_46%,rgba(10,20,12,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[88vh] flex-col justify-end pb-24 pt-36">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[54rem]"
          >
            <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-white">
              {data.hero.title}
              <br />
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumPillButton href="/#consultation" size="lg">
                Plan showroombezoek
              </PremiumPillButton>
              <PremiumPillButton href="/keukenbladen/dekton" variant="ghost" size="lg">
                Ontdek Dekton
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
                <p key={paragraph.slice(0, 32)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-[rgba(139,197,64,0.1)] bg-[linear-gradient(180deg,rgba(139,197,64,0.045)_0%,transparent_100%)]">
        <div className="site-container">
          <div className="mb-12">
            <Eyebrow>Materialen</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] text-[var(--secondary)]">
              Werkbladen met <em className="italic text-[var(--green)]">prestatie</em> en uitstraling
            </h2>
          </div>
          <div className="keukens-brand-grid">
            {data.materials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.7, delay: index * 0.08, ease: luxuryEase }}
              >
                <Link to={material.href} className="keukens-brand-card group">
                  <div className="keukens-brand-card__media">
                    <img src={material.image} alt={material.name} loading="lazy" className="keukens-brand-card__image" />
                  </div>
                  <div className="keukens-brand-card__body">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--green)]">
                        {material.country}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--text-soft)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--green)]" variant="Linear" />
                    </div>
                    <h3 className="mt-3 font-serif text-[1.75rem] leading-none text-[var(--secondary)]">{material.name}</h3>
                    <p className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
                      {material.tagline}
                    </p>
                    <p className="mt-4 text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                      {material.description}
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
          <div className="mb-12">
            <Eyebrow>Stijlen</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.2vw,2.7rem)] text-[var(--secondary)]">
              Marmer, betonlook en <em className="italic text-[var(--green)]">keramiek</em>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.styles.map((style, index) => (
              <motion.article
                key={style.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.65, delay: index * 0.1, ease: luxuryEase }}
                className="brand-pillar-card group"
              >
                <div className="brand-pillar-card__media">
                  <img src={style.image} alt={style.title} loading="lazy" className="brand-pillar-card__photo" />
                  <span className="brand-pillar-card__num">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="brand-pillar-card__body">
                  <h3 className="font-serif text-[1.5rem] leading-[1.2] text-[var(--secondary)]">{style.title}</h3>
                  <p className="mt-3.5 text-[0.95rem] font-light leading-[1.75] text-[var(--text-soft)]">{style.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-custom-band">
        <span className="brand-custom-band__ghost" aria-hidden="true">Werkblad</span>
        <div className="site-container relative z-[1] max-w-[56rem]">
          <Eyebrow light>Op maat bladen</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
            Elk blad <em className="italic text-[var(--green-highlight)]">op maat</em>
          </h2>
          <div className="mt-7 space-y-4">
            {data.customNote.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="text-[1rem] font-light leading-[1.8] text-[rgba(255,255,255,0.72)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Veelgestelde vragen</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.1vw,2.7rem)] text-[var(--secondary)]">
                Alles over <em className="italic text-[var(--green)]">keukenbladen</em>
              </h2>
              <div className="brand-faq__contact-card">
                <span className="brand-faq__contact-ghost" aria-hidden="true">?</span>
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

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[34rem]">
              <Eyebrow light>Showroom Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                Kies uw <em className="italic text-[var(--green-highlight)]">perfecte werkblad</em>
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                Bekijk materialen, kleuren en afwerkingen in onze showroom. Wij helpen u graag met persoonlijk advies.
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
