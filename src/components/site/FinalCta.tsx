"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";

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
      className="relative overflow-hidden bg-[#F8F6F2] py-24 text-[#111111] md:py-36"
    >
      {/* ── Soft Gold Showroom Ambient Glow (Warm, Editorial) ──────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[50%] top-0 h-[450px] w-[80%] -translate-x-1/2 rounded-full blur-[140px] opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, rgba(197, 160, 89, 0.8) 0%, transparent 80%)",
        }}
      />

      {/* ── Material Depth: Architectural Fine Plaster / Paper Texture (Opacity: 2%) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23paper-grain)'/></svg>")`,
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative">
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
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8A96B]/40" />
            <span
              className="text-[10px] font-normal tracking-[0.32em] text-[#C8A96B] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Begin uw reis
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8A96B]/40" />
          </motion.div>

          {/* Display heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto max-w-[52rem] font-serif text-[clamp(2.4rem,4.2vw,3.6rem)] font-light leading-[1.08] tracking-[-0.03em] text-[#111111]"
          >
            Klaar voor uw <em className="italic text-[#C8A96B] font-light font-serif">droomkeuken?</em>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mt-6 max-w-[36rem] text-[1.02rem] font-light leading-[1.82] text-[#5A5A5A]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Van eerste inspiratie tot installatie: wij begeleiden u persoonlijk naar een keuken
            die klopt in stijl, functie en afwerking.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/brands"
              className={[
                "group relative inline-flex h-[54px] items-center justify-center gap-3.5 overflow-hidden rounded-full bg-[#6D8F69] px-10",
                "text-[11px] font-normal tracking-[0.22em] text-[#F8F6F2] uppercase",
                "transition-[transform,box-shadow,background-color] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-[3px] hover:bg-[#5D7C59] hover:shadow-[0_12px_32px_-12px_rgba(109,143,105,0.5)] active:scale-[0.98]",
              ].join(" ")}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              <span className="relative">Start configurator</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
            </a>
            <a
              href="#consultation"
              className={[
                "group relative inline-flex h-[54px] items-center justify-center gap-3.5 overflow-hidden rounded-full border border-[rgba(200,169,107,0.15)] bg-transparent px-10",
                "text-[11px] font-normal tracking-[0.22em] text-[#5A5A5A] uppercase",
                "transition-[border-color,background-color,color,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-[3px] hover:border-[rgba(200,169,107,0.4)] hover:bg-[#17191C]/5 hover:text-[#111111] active:scale-[0.98]",
              ].join(" ")}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              <span className="relative">Boek consultatie</span>
            </a>
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
            <motion.a
              key={title}
              variants={reduceMotion ? undefined : fadeUp}
              href={href}
              className={[
                "group relative overflow-hidden rounded-[24px] border border-[rgba(200,169,107,0.15)] bg-[#FAF8F4]/95 p-8",
                "flex flex-col justify-between min-h-[290px] shadow-[0_8px_30px_rgba(23,25,28,0.015)]",
                "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "hover:-translate-y-2 hover:bg-[#FAF8F4] hover:shadow-[0_24px_56px_-20px_rgba(23,25,28,0.08)]",
              ].join(" ")}
            >
              {/* Luxury gold top hairline animates on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#C8A96B] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <div className="relative">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/15 bg-[#C8A96B]/5 text-[#C8A96B] transition-all duration-500 group-hover:border-[#C8A96B]/40 group-hover:bg-[#C8A96B]/10 group-hover:scale-105">
                  <Icon className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[8deg]" />
                </div>

                <h3
                  className="font-serif text-[1.4rem] font-light leading-[1.22] tracking-[-0.02em] text-[#111111]"
                >
                  {title}
                </h3>

                <p
                  className="mt-3 text-[0.875rem] font-light leading-[1.75] text-[#5A5A5A]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {description}
                </p>
              </div>

              <div className="relative pt-6">
                <span
                  className="inline-flex items-center gap-2 text-[0.72rem] font-normal tracking-[0.16em] text-[#C8A96B] transition-[gap] duration-300 group-hover:gap-3"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  <span className="uppercase">{cta}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer-like bottom bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={motionViewport}
          transition={reduceMotion ? undefined : { delay: 0.4, duration: 0.8, ease: luxuryEase }}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(200,169,107,0.15)] pt-8"
        >
          <p
            className="text-[0.72rem] font-light tracking-[0.12em] text-[#5A5A5A]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Premium showroom Utrecht · Persoonlijk advies sinds {kc.founded}
          </p>
          <a
            href="#brands"
            className="group/footer-link flex items-center gap-2 text-[0.75rem] font-normal tracking-[0.16em] text-[#5A5A5A] transition-colors duration-300 hover:text-[#C8A96B]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            <span className="uppercase">Bekijk onze merken</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/footer-link:translate-x-1.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
