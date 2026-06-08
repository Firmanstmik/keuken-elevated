import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { fadeUp, motionViewport, revealImage, staggerHeader } from "@/lib/motion";

export function Showroom() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="showroom" className="section-shell">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mb-10 max-w-[26rem]"
        >
          <motion.div variants={reduceMotion ? undefined : fadeUp} className="section-label-row">
            <span className="luxe-rule" />
            <span className="eyebrow">Showroom Utrecht</span>
          </motion.div>
          <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
            Ervaar materialen,
            <br />
            kleuren en <em className="italic" style={{ color: "#23B9C4" }}>afwerkingen.</em>
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-6 text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[var(--text-soft)]"
          >
            Bezoek onze showroom aan de Zonnebaan en ervaar wat online nooit volledig zichtbaar is:
            materiaalgevoel, frontafwerkingen, werkbladdiktes en de rust van een goed ontworpen keuken.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_360px]">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : revealImage}
            className="surface-card overflow-hidden p-3"
          >
            <img
              src={kc.showroomImg}
              alt="Showroom van Keuken-Centrum Utrecht aan de Zonnebaan"
              className="aspect-[1.5/1] h-full w-full rounded-[calc(var(--radius-lg)-10px)] object-cover transition-[filter,transform] duration-[400ms] [transition-timing-function:var(--ease-premium)] hover:contrast-[1.04] hover:saturate-[1.02]"
              loading="lazy"
            />
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="surface-card px-6 py-6"
          >
            <div className="space-y-5">
              <motion.div variants={reduceMotion ? undefined : fadeUp} className="flex items-start gap-3">
                <House className="mt-1 h-5 w-5 shrink-0 text-[var(--green)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">{kc.contact.address}</p>
                  <p className="small-text mt-1">{kc.contact.postal} • Utrecht</p>
                </div>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : fadeUp} className="border-t border-[rgb(7,17,27,0.08)] pt-5">
                {kc.contact.hours.map((row) => (
                  <div key={row.d} className="flex items-center justify-between gap-4 py-1.5">
                    <span className="small-text">{row.d}</span>
                    <span className="text-sm text-[var(--foreground)]/78">{row.h}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : fadeUp} className="border-t border-[rgb(7,17,27,0.08)] pt-5">
                <a href={kc.contact.phoneHref} className="mb-3 flex items-center gap-3 text-sm text-[var(--foreground)]/78">
                  <Phone className="h-4 w-4 text-[var(--green)]" />
                  {kc.contact.phone}
                </a>
                <a href={`mailto:${kc.contact.email}`} className="flex items-center gap-3 text-sm text-[var(--foreground)]/78">
                  <Mail className="h-4 w-4 text-[var(--green)]" />
                  {kc.contact.email}
                </a>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : fadeUp} className="flex flex-wrap gap-3 pt-2">
                <a href="#contact" className="btn-primary">
                  Plan Afspraak
                </a>
                <a href={kc.contact.maps} className="btn-outline">
                  Route Beschrijving
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
