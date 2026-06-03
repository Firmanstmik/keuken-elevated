"use client";
import { useState } from "react";

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
import { masterHotspotPositions, masterCategories } from "@/lib/master-config-data";

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
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const hotspotsData = masterHotspotPositions.map((h, index) => {
    const category = masterCategories.find((c) => c.id === h.id);
    const colors = category ? category.options.slice(0, 4).map((o) => o.color) : ["#ffffff", "#cccccc", "#999999", "#666666"];
    while (colors.length < 4) colors.push("#000000");
    return {
      ...h,
      delay: 0.6 + (index * 0.1),
      colors,
    };
  });

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
          <div className="relative">
            {/* The Badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={motionViewport}
              className="absolute -top-3 left-6 md:left-8 z-20"
            >
              <span className="rounded-full border border-[#C8A96B]/30 bg-[#111111] px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#C8A96B] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                Premium Configurator
              </span>
            </motion.div>

            {/* The Configurator Mockup Frame */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#C8A96B]/30 bg-[#111111] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col"
            >
              {/* Fake Header */}
              <div className="flex h-8 md:h-10 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                  Keuken Centrum
                </div>
                <div className="w-8" />
              </div>

              {/* Fake Body */}
              <div className="flex flex-1 overflow-hidden">
                {/* Image Area */}
                <div className="relative flex-1 bg-[#0A0A0A] overflow-hidden">
                  <img
                    src="/configurator-kitchen.webp"
                    alt="Configurator preview"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-lighten"
                    loading="lazy"
                  />
                  {/* Hotspots */}
                  <div className="absolute inset-0">
                    {hotspotsData.map((h, i) => {
                      const isActive = activeHotspot === i;
                      const isUp = parseFloat(h.y) > 40;

                      return (
                        <motion.button
                          key={i}
                          type="button"
                          onClick={() => setActiveHotspot(i)}
                          initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                          transition={{ delay: h.delay, duration: 0.5, ease: "easeOut" }}
                          viewport={motionViewport}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 group cursor-pointer ${
                            isActive ? "z-20" : "z-10"
                          }`}
                          style={{ left: h.x, top: h.y }}
                        >
                          {/* Multi-layer premium hotspot */}
                          <div
                            className="relative flex items-center justify-center"
                            style={{
                              width: 32,
                              height: 32,
                              transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                            }}
                          >
                            {/* Layer 4: Outer halo + white glow */}
                            <span
                              className="absolute inset-0 rounded-full pointer-events-none"
                              style={{
                                background: "rgba(212,175,55,0.10)",
                                filter: "blur(8px)",
                                boxShadow: isActive
                                  ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                                  : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                                animation: !isActive
                                  ? "hotspotBreathe 3s ease-in-out infinite"
                                  : "none",
                                transition: "box-shadow 0.2s ease",
                              }}
                            />

                            {/* Layer 3: Gold ring (18px) */}
                            <span
                              className="absolute rounded-full pointer-events-none"
                              style={{
                                width: 18,
                                height: 18,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                border: `2px solid ${isActive ? "#D4AF37" : "rgba(212,175,55,0.85)"}`,
                                backgroundColor: isActive
                                  ? "rgba(212,175,55,0.12)"
                                  : "rgba(0,0,0,0.45)",
                                backdropFilter: "blur(4px)",
                                transition: "all 0.2s ease",
                              }}
                            />

                            {/* Layer 2 + 1: Center dot (6px) */}
                            <span
                              className="relative z-10 rounded-full"
                              style={{
                                width: 6,
                                height: 6,
                                backgroundColor: isActive ? "#D4AF37" : "#FFFFFF",
                                border: isActive ? "1px solid rgba(255,255,255,0.6)" : "none",
                                boxShadow: "0 0 4px rgba(255,255,255,0.5)",
                                transition: "all 0.2s ease",
                              }}
                            />
                          </div>

                          {/* Tooltip */}
                          <div
                            className={`pointer-events-none absolute left-1/2 -translate-x-1/2 flex w-[180px] flex-col items-center rounded-[12px] border border-[rgba(212,175,55,0.18)] bg-[rgba(9,9,9,0.96)] p-3.5 backdrop-blur-[20px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              isUp ? "bottom-full mb-3" : "top-full mt-3"
                            } ${
                              isActive
                                ? "opacity-100 translate-y-0 scale-100"
                                : isUp
                                  ? "opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                                  : "opacity-0 -translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                            }`}
                          >
                            <span className="mb-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-[#C8A96B]">
                              {h.label}
                            </span>
                            <span className="text-[0.9rem] text-[#F7F5F2] font-semibold tracking-[0.01em] mb-1.5 text-center leading-tight normal-case">
                              Selecteer optie
                            </span>
                            <span className="text-[0.65rem] text-[rgba(247,245,242,0.5)] leading-[1.5] text-center whitespace-normal normal-case">
                              Klik om de mogelijkheden voor uw {h.label.toLowerCase()} te ontdekken.
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Fake Sidebar */}
                <div className="w-[32%] md:w-[28%] shrink-0 border-l border-white/10 bg-[#0F0F0F] p-3 flex flex-col gap-3">
                  <div className="space-y-2">
                    <div className="h-1.5 w-10 bg-white/20 rounded-full" />
                    <div className="h-3 w-16 bg-[#C8A96B] rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mt-2">
                    {(activeHotspot !== null ? hotspotsData[activeHotspot].colors : hotspotsData[0].colors).map((color, idx) => (
                      <div 
                        key={`${activeHotspot}-${idx}`}
                        className={`aspect-square rounded-md transition-colors duration-500 ${idx === 0 ? 'border border-[#C8A96B] shadow-[0_0_8px_rgba(200,169,107,0.3)]' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-white/10 space-y-2 hidden md:block">
                     <div className="flex justify-between items-center">
                       <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                       <div className="h-2 w-12 bg-white/40 rounded-full" />
                     </div>
                     <div className="h-8 w-full rounded-md bg-[#C8A96B] flex items-center justify-center">
                       <div className="h-1.5 w-16 bg-white/80 rounded-full" />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-30 w-[260px] sm:w-[300px] rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-[rgba(9,9,9,0.95)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-[24px]"
            >
              <p className="text-[0.65rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#C8A96B]">
                Digitale Showroom
              </p>
              <p className="mt-2.5 text-[0.8rem] sm:text-[0.875rem] font-light leading-[1.65] text-zinc-300">
                Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="lg:pl-10 mt-12 lg:mt-0"
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
