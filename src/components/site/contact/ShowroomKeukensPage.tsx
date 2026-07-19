"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Export as ArrowUpRight,
  QuoteDown as Quote,
  MagicStar as Sparkles,
} from "@zethictech/iconsax-react";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { fadeUp, motionEase, motionViewport } from "@/lib/motion";
import { kc } from "@/lib/kc-data";
import { showroomKeukens } from "@/lib/showroom-keukens";
import { KitchenEyebrow as Eyebrow } from "@/components/site/KitchenEyebrow";

const luxuryEase = motionEase.premium;

export function ShowroomKeukensPage() {
  const reduceMotion = useReducedMotion();
  const data = showroomKeukens;
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <div className="brand-page">
      <section ref={heroRef} className="brand-page-hero relative min-h-[88vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: heroY, opacity: heroOpacity }}
        >
          <img src={data.hero.image} alt="Showroom Keuken-Centrum Utrecht" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(10,20,12,0.9)_0%,rgba(10,20,12,0.48)_48%,rgba(10,20,12,0.74)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_85%,rgba(139,197,64,0.16)_0%,transparent_52%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(5,10,6,0.55)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />

        <div className="site-container relative z-[2] flex min-h-[88vh] flex-col justify-end pb-24 pt-36 md:pb-28 md:pt-44">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[52rem]"
          >
            <Eyebrow light>{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.98] tracking-[-0.025em] text-white">
              {data.hero.title}{" "}
              <em className="italic text-[var(--green-highlight)]">{data.hero.highlight}</em>
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1.08rem] font-light leading-[1.8] text-[rgba(255,255,255,0.78)]">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumPillButton href="/consultation" size="lg">
                Plan showroombezoek
              </PremiumPillButton>
              <PremiumPillButton href={kc.contact.phoneHref} variant="ghost" size="lg">
                Bel {kc.contact.phone}
              </PremiumPillButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : fadeUp}
            >
              <Eyebrow>{data.intro.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-[var(--secondary)]">
                {data.intro.title}
                <br />
                <em className="italic text-[var(--green)]">{data.intro.highlight}</em>
              </h2>
              <div className="mt-6 space-y-4">
                {data.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-[1rem] font-light leading-[1.8] text-[var(--text-soft)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <PremiumPillButton href="/contact" size="lg">
                  Contact opnemen
                </PremiumPillButton>
              </div>
            </motion.div>

            <div className="showroom-mosaic">
              {data.gallery.slice(0, 5).map((item, index) => (
                <motion.figure
                  key={item.src}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={motionViewport}
                  transition={{ duration: 0.65, delay: index * 0.07, ease: luxuryEase }}
                  className={`showroom-mosaic__item showroom-mosaic__item--${index + 1}`}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption className="showroom-mosaic__caption">{item.label}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-10 max-w-[40rem]">
            <Eyebrow>In de showroom</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] text-[var(--secondary)]">
              Live te <em className="italic text-[var(--green)]">ervaren</em>
            </h2>
          </div>
          <div className="showroom-gallery-row">
            {data.gallery.slice(5).map((item, index) => (
              <motion.figure
                key={item.src}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.6, delay: index * 0.06, ease: luxuryEase }}
                className="showroom-gallery-row__item"
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-10 max-w-[36rem]">
            <Eyebrow>Onze services</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] text-[var(--secondary)]">
              Van A tot Z hulp bij het{" "}
              <em className="italic text-[var(--green)]">samenstellen</em> van uw keuken
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.6, delay: index * 0.07, ease: luxuryEase }}
                className="showroom-service-card group"
              >
                <div className="showroom-service-card__media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="showroom-service-card__body">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[1.35rem] text-[var(--secondary)]">{service.title}</h3>
                    <span className="showroom-service-card__arrow">
                      <ArrowUpRight className="h-4 w-4" variant="Linear" />
                    </span>
                  </div>
                  <p className="mt-2 text-[0.92rem] font-light leading-[1.7] text-[var(--text-soft)]">
                    {service.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-10 max-w-[34rem]">
            <Eyebrow>Waarom voor ons kiezen?</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] text-[var(--secondary)]">
              Vier redenen{" "}
              <em className="italic text-[var(--green)]">om langs te komen</em>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {data.reasons.map((reason, index) => (
              <motion.article
                key={reason.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.55, delay: index * 0.07, ease: luxuryEase }}
                className={`keukens-value-card ${index === 1 ? "keukens-value-card--dark" : ""}`}
              >
                <span className="keukens-value-card__num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-serif text-[1.35rem]">{reason.title}</h3>
                <p className="mt-3 text-[0.94rem] font-light leading-[1.7]">{reason.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="site-container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-[34rem]">
              <Eyebrow>Wat klanten vertellen</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2rem,3.4vw,2.8rem)] text-[var(--secondary)]">
                Ervaringen uit{" "}
                <em className="italic text-[var(--green)]">onze showroom</em>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(139,197,64,0.22)] bg-white/70 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--secondary)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--green)]" variant="Linear" />
              4,9 Google Reviews
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {data.testimonials.map((item, index) => (
              <motion.blockquote
                key={item.name}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ duration: 0.6, delay: index * 0.08, ease: luxuryEase }}
                className="showroom-quote"
              >
                <Quote className="showroom-quote__icon" variant="Linear" />
                <p className="showroom-quote__text">“{item.quote}”</p>
                <footer className="showroom-quote__name">{item.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-showroom-cta">
        <div className="site-container">
          <div className="brand-showroom-cta__inner">
            <div className="max-w-[36rem]">
              <Eyebrow light>Zonnebaan 8, Utrecht</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.1rem)] text-white">
                {data.cta.title} <em className="italic text-[var(--green-highlight)]">{data.cta.highlight}</em>
              </h2>
              <p className="mt-5 text-[1rem] font-light leading-[1.75] text-[rgba(255,255,255,0.75)]">
                {data.cta.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PremiumPillButton href={data.cta.primaryHref} size="xl">
                {data.cta.primaryLabel}
              </PremiumPillButton>
              <PremiumPillButton href={data.cta.secondaryHref} variant="ghost" size="xl">
                {data.cta.secondaryLabel}
              </PremiumPillButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
