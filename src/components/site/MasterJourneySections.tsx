"use client";

import { motion, useReducedMotion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import HandymanIcon from "@mui/icons-material/Handyman";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp, motionViewport, staggerHeader, staggerList } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";

const pillarMotion =
  "duration-[500ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";

const valuePillars = [
  {
    title: "Premium Merken",
    description: "Alleen de meest toonaangevende keukenmerken van Europa",
    icon: WorkspacePremiumIcon,
  },
  {
    title: "Europees Vakmanschap",
    description: "Decennialange traditie van precisie en productie",
    icon: HandymanIcon,
  },
  {
    title: "Persoonlijk Advies",
    description: "Voor elk project een eigen ontwerpadviseur",
    icon: SupportAgentIcon,
  },
  {
    title: "Luxe Materialen",
    description: "Een zorgvuldig gekozen selectie van de mooiste oppervlakken",
    icon: DiamondIcon,
  },
] as const;

const experienceItems = [
  {
    icon: TuneIcon,
    label: "Interactieve materiaalconfigurator",
  },
  {
    icon: PaletteOutlinedIcon,
    label: "Persoonlijke moodboard generatie",
  },
  {
    icon: SupportAgentIcon,
    label: "Persoonlijke ontwerpconsultatie",
  },
] as const;

export function WhyWithUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-with-us"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Luxury white overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(248,246,242,0.88)]"
      />
      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,169,107,0.06),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(200,169,107,0.04),transparent_40%)]"
      />

      <div className="site-container relative">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mx-auto mb-20 max-w-[54rem] text-center md:mb-28"
        >
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mb-6 flex flex-col items-center gap-5"
          >
            <span
              aria-hidden="true"
              className="block h-px w-14 bg-[linear-gradient(90deg,transparent,rgba(200,169,107,0.55),transparent)]"
            />
            <span className="eyebrow">Onze belofte</span>
          </motion.div>

          <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
            Waarom samenstellen met ons
          </motion.h2>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="body-lg mx-auto mt-7 max-w-[32rem] font-light text-[var(--text-soft)]"
          >
            Wij geloven dat keukenontwerp net zo verfijnd moet aanvoelen als het eindresultaat.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerList}
          className="mx-auto grid max-w-[1180px] gap-y-14 sm:grid-cols-2 sm:gap-x-10 md:gap-x-12 lg:grid-cols-4 lg:gap-x-14 xl:gap-x-16"
        >
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                variants={reduceMotion ? undefined : fadeUp}
                className={[
                  "group relative px-4 text-center sm:px-6 lg:px-8",
                  pillarMotion,
                  "transition-transform hover:-translate-y-1 focus-within:-translate-y-1",
                  index % 2 === 1 ? "sm:border-l sm:border-[rgba(200,169,107,0.15)]" : "",
                  index > 0 ? "lg:border-l lg:border-[rgba(200,169,107,0.15)]" : "",
                ].join(" ")}
              >
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute inset-x-4 top-1/2 -z-10 h-28 -translate-y-1/2 rounded-full",
                    "bg-[radial-gradient(circle,rgba(200,169,107,0.14)_0%,transparent_72%)] opacity-0",
                    pillarMotion,
                    "transition-opacity group-hover:opacity-100 group-focus-within:opacity-100",
                  ].join(" ")}
                />

                <div className="mx-auto mb-7 flex justify-center">
                  <span
                    className={[
                      "inline-flex h-14 w-14 items-center justify-center text-[#C8A96B]",
                      pillarMotion,
                      "transition-transform group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5",
                    ].join(" ")}
                  >
                    <Icon sx={{ fontSize: 28, color: "#C8A96B" }} />
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="mx-auto mb-5 block h-px w-8 bg-[rgba(200,169,107,0.45)]"
                />

                <h3 className="font-serif text-[1.2rem] leading-[1.35] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-500 group-hover:text-[#0a0a0a] group-focus-within:text-[#0a0a0a]">
                  {pillar.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[15.5rem] text-[0.875rem] font-light leading-[1.75] tracking-[0.01em] text-[#666666] transition-colors duration-500 group-hover:text-[#4a4a4a] group-focus-within:text-[#4a4a4a]">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function ShowroomJourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.90)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,107,0.05),transparent_45%)]"
      />
      <div className="site-container relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="relative"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] border border-[rgba(200,169,107,0.1)]">
              <img
                src="/showroom-preview.webp"
                alt="Showroom impressie"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 rounded-xl border border-[rgba(200,169,107,0.25)] bg-[#F8F6F2]/90 px-6 py-4.5 backdrop-blur-[8px] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#C8A96B] font-medium">
                  Showroom
                </p>
                <p className="mt-1.5 text-sm font-normal text-[#111111] tracking-[0.01em]">
                  Persoonlijke ontwerpervaring
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="lg:pl-10"
          >
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[0.72rem] uppercase tracking-[0.25em] text-[#C8A96B]"
            >
              De beleving
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[34rem] text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[#111111]"
              style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 400 }}
            >
              Een showroom die naar u toe komt
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[#666666]"
            >
              Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm.
              Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog
              voordat u onze showroom bezoekt.
            </motion.p>
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 h-px w-full bg-[rgba(200,169,107,0.15)]"
            />
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : staggerList}
              className="mt-6 flex flex-col gap-5"
            >
              {experienceItems.map((item) => {
                const Icon = item.icon;

                return (
                <motion.div
                  key={item.label}
                  variants={reduceMotion ? undefined : fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#C8A96B]">
                    <Icon sx={{ fontSize: 18, color: "#C8A96B" }} />
                  </span>
                  <span className="text-[0.875rem] font-light leading-[1.65] text-[#555555]">
                    {item.label}
                  </span>
                </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-10">
              <Button
                asChild
                className="brand-green-button group relative min-h-[3.5rem] rounded-[16px] px-[2.5rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="/brands" className="flex items-center gap-2">
                  <span>Start uw ontwerp</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  
                  {/* Premium Shine Swipe Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MasterJourneySections() {
  return (
    <>
      <WhyWithUsSection />
      <ShowroomJourneySection />
    </>
  );
}
