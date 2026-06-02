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
      className="relative overflow-hidden bg-[#F8F6F2] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2264%22 height=%2264%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]"
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
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="relative overflow-hidden"
          >
            <div className="group relative aspect-[4/3] overflow-hidden">
              <img
                src="/showroom-preview.webp"
                alt="Showroom impressie"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 border border-[rgba(200,169,107,0.15)] bg-[#F8F6F2]/92 px-5 py-4 backdrop-blur-[10px]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#C8A96B]">
                  Showroom
                </p>
                <p className="mt-1 text-sm font-normal text-[#111111]">
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
                className="min-h-[3.5rem] border-[#6D8F69] bg-[#6D8F69] px-[2.5rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] shadow-none hover:bg-[#5D7C59] hover:text-[#F5F2EC] hover:border-[#5D7C59]"
              >
                <a href="/brands">
                  Start uw ontwerp
                  <ArrowRight className="h-4 w-4" />
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
