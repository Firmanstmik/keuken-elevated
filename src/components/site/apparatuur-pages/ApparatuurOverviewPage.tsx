"use client";

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
import { apparatuurOverview } from "@/lib/apparatuur-pages/apparatuur";
import { BrandMarquee } from "@/components/site/apparatuur-pages/BrandMarquee";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";

const luxuryEase = motionEase.premium;

export function ApparatuurOverviewPage() {
  const reduceMotion = useReducedMotion();
  const data = apparatuurOverview;

  return (
    <div className="brand-page">
      <section className="brand-page-hero relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.hero.image}
            alt="Keukenapparatuur Keuken-Centrum Utrecht"
            className="h-full w-full object-cover"
          />
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
              <PremiumPillButton href="/apparatuur/afzuigkappen" variant="ghost" size="lg">
                Bekijk afzuigkappen
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
          <div className="mb-12 max-w-[42rem]">
            <Eyebrow>Categorieën</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.1] text-[var(--secondary)]">
              Alles voor een <em className="italic text-[var(--green)]">complete</em> keuken
            </h2>
          </div>
          <div className="keukens-brand-grid">
            {data.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.7, delay: index * 0.06, ease: luxuryEase }}
                className="h-full"
              >
                <a href={category.href} className="app-cat-card group">
                  <div className="app-cat-card__media">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="app-cat-card__image"
                    />
                    <span className="app-cat-card__chip">{String(index + 1).padStart(2, "0")}</span>
                    <span className="app-cat-card__arrow" aria-hidden="true">
                      <ArrowUpRight className="h-4 w-4" variant="Linear" />
                    </span>
                  </div>
                  <div className="app-cat-card__body">
                    <span className="app-cat-card__tag">{category.tagline}</span>
                    <h3 className="mt-3 font-serif text-[1.65rem] leading-none text-[var(--secondary)]">
                      {category.name}
                    </h3>
                    <p className="mt-3.5 text-[0.95rem] font-light leading-[1.7] text-[var(--text-soft)]">
                      {category.description}
                    </p>
                  </div>
                  <span className="app-cat-card__line" aria-hidden="true" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="mb-10">
            <Eyebrow>Onze merken</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.5rem)] text-[var(--secondary)]">
              Vertrouwde <em className="italic text-[var(--green)]">topmerken</em>
            </h2>
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

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-3">
            {data.valueProps.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.65, delay: index * 0.1, ease: luxuryEase }}
                className={`keukens-value-card ${index === 1 ? "keukens-value-card--dark" : ""}`}
              >
                <span className="keukens-value-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-serif text-[1.45rem] leading-[1.2]">{item.title}</h3>
                <p className="mt-3.5 text-[0.95rem] font-light leading-[1.75] opacity-80">{item.body}</p>
              </motion.article>
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
                Alles over <em className="italic text-[var(--green)]">apparatuur</em>
              </h2>
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

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[34rem]">
              <Eyebrow light>Showroom Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                Ervaar <em className="italic text-[var(--green-highlight)]">topapparatuur</em> live
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                BORA, Quooker, Miele en meer. Vergelijk systemen naast elkaar met persoonlijk advies.
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
