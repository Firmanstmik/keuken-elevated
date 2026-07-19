"use client";

import { motion, useReducedMotion } from "framer-motion";
import { House, Mail, Phone } from "@/components/ui/icons";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { SectionChapter } from "@/components/site/SectionChapter";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";

const actions = [
  {
    title: "Plan showroombezoek",
    description:
      "Bezoek onze showroom in Utrecht en bespreek uw keukenwensen met een specialist die met u meedenkt.",
    href: "#showroom",
    cta: "Maak afspraak",
    Icon: House,
  },
  {
    title: "Bel direct met een adviseur",
    description: kc.contact.phone,
    href: kc.contact.phoneHref,
    cta: "Bel nu",
    Icon: Phone,
  },
  {
    title: "Vraag een voorstel aan",
    description:
      "Deel uw wensen of bestaande offerte en ontvang een zorgvuldig voorbereid voorstel.",
    href: `mailto:${kc.contact.email}`,
    cta: "Stuur e-mail",
    Icon: Mail,
  },
];

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase },
  },
};

const staggerHeader = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function FinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden text-[#111111]"
    >
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[rgba(248,246,242,0.87)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(139,197,64,0.05),transparent_45%)]" />

      <div className="site-container relative max-w-7xl">
        <SectionChapter index={8} label="Start ontwerp" />
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-20 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-7 flex items-center justify-center gap-5"
          >
            <span className="kitchen-eyebrow-mark" aria-hidden="true" />
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[var(--green-soft)]">
              Begin uw reis
            </span>
          </motion.div>

          {/* Display heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto max-w-[52rem] font-serif text-[clamp(2.35rem,3.9vw,3.25rem)] font-light leading-[1.12] tracking-[-0.02em]"
            style={{ color: "#2F5218" }}
          >
            Klaar voor uw <em className="italic font-light font-serif" style={{ color: "#8BC540" }}>droomkeuken?</em>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mt-6 max-w-[36rem] text-[1.02rem] font-light leading-[1.7] text-[var(--text-soft)]"
          >
            Van eerste inspiratie tot installatie: wij begeleiden u persoonlijk naar een keuken
            die klopt in stijl, functie en afwerking.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <PremiumPillButton href="/brands" variant="blue" size="md">
              Start configurator
            </PremiumPillButton>
            <PremiumPillButton href="#consultation" variant="ghost-light" size="md">
              Boek consultatie
            </PremiumPillButton>
          </motion.div>
        </motion.div>

        {/* Action cards */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="grid gap-6 md:grid-cols-3"
        >
          {actions.map(({ title, description, href, cta, Icon }) => (
            <motion.div
              key={title}
              variants={reduceMotion ? undefined : fadeUp}
              className={[
                "group relative overflow-hidden rounded-[24px] border border-[rgba(139,197,64,0.15)] bg-[#FAF8F4]/95 p-8",
                "flex flex-col justify-between min-h-[290px] shadow-[0_8px_30px_rgba(23,25,28,0.015)]",
                "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-2 hover:bg-[#FAF8F4] hover:shadow-[0_24px_56px_-20px_rgba(139,197,64,0.12)]",
              ].join(" ")}
            >
              {/* Brand teal top hairline animates on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#8BC540] to-[#A8D95A] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <div className="relative">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#8BC540]/15 bg-[rgba(139,197,64,0.05)] text-[#8BC540] transition-all duration-500 group-hover:border-[#8BC540]/35 group-hover:bg-[rgba(139,197,64,0.10)] group-hover:scale-105">
                  <Icon className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[8deg]" />
                </div>

                <h3
                  className="font-serif text-[1.4rem] font-light leading-[1.22] tracking-[-0.02em] text-[#111111]"
                >
                  {title}
                </h3>

                <p className="mt-3 text-[0.875rem] font-light leading-[1.7] text-[var(--text-soft)]">
                  {description}
                </p>
              </div>

              <div className="relative pt-6">
                <PremiumPillButton href={href} variant="blue" size="sm">
                  {cta}
                </PremiumPillButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer-like bottom bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={motionViewport}
          transition={reduceMotion ? undefined : { delay: 0.4, duration: 0.8, ease: luxuryEase }}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(139,197,64,0.18)] pt-8"
        >
          <p className="text-[0.72rem] font-light tracking-[0.12em] text-[var(--text-soft)]">
            Premium showroom Utrecht · Persoonlijk advies sinds {kc.founded}
          </p>
          <PremiumPillButton href="#brands" variant="ghost-light" size="sm">
            Bekijk onze merken
          </PremiumPillButton>
        </motion.div>
      </div>
    </section>
  );
}
