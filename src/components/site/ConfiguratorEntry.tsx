import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp, motionViewport, staggerHeader } from "@/lib/motion";

const steps = [
  { n: "01", t: "Choose Brand", d: "Select from Europe's finest kitchen manufacturers" },
  { n: "02", t: "Choose Style", d: "Define your architectural aesthetic" },
  { n: "03", t: "Configure", d: "Personalise every material and finish" },
  { n: "04", t: "Moodboard", d: "Receive your bespoke design proposal" },
  { n: "05", t: "Consult", d: "Meet your dedicated design consultant" },
] as const;

export function ConfiguratorEntry() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="configurator" className="bg-[#111111] py-20 text-white md:py-32">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-12 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between"
        >
          <div className="max-w-[42rem]">
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mb-3 text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]"
            >
              Route-Based Configurator
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[#F7F5F2]"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
            >
              The configurator now opens as a dedicated design journey.
            </motion.h2>
          </div>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[34rem] text-[1rem] font-light leading-[1.7] text-[rgba(247,245,242,0.65)]"
          >
            Start from brand selection, continue into style, configure your materials, review your
            moodboard, and finish with a consultation request in a separate premium page flow.
          </motion.p>
        </motion.div>

        <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-5 md:p-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="grid gap-4 md:grid-cols-5">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#B08D57] bg-[#111111] text-[0.625rem] tracking-[0.1em] text-[#B08D57]">
                    {step.n}
                  </div>
                  <h3
                    className="text-[1.0625rem] text-[#F7F5F2]"
                    style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                  >
                    {step.t}
                  </h3>
                  <p className="mt-2 text-[0.75rem] leading-[1.6] text-[rgba(247,245,242,0.5)]">
                    {step.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-between border border-[rgba(176,141,87,0.24)] bg-[rgba(176,141,87,0.05)] p-5">
              <div>
                <p className="mb-2 text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]">
                  Start the full flow
                </p>
                <h3
                  className="text-[1.75rem] leading-[1.2] text-[#F7F5F2]"
                  style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                >
                  Open the GitHub-style configurator pages.
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.7] text-[rgba(247,245,242,0.7)]">
                  The homepage now introduces the journey. The full selection, moodboard, and
                  consultation experience lives in dedicated pages.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/brands"
                  className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 border border-[#B08D57] bg-[#B08D57] px-6 text-[0.8125rem] uppercase tracking-[0.15em] text-[#F7F5F2] no-underline transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]"
                >
                  Start Your Design
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
