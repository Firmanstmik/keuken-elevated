import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import logoKeuken from "@/assets/logo-keuken-1-1.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative luxury-navy-surface text-[#F5F2EC] overflow-hidden pt-0 pb-8 selection:bg-[#C8A96B]/30">
      <div className="site-container relative z-10">

        {/* PREMIUM CTA AREA */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mx-auto flex max-w-[64rem] -translate-y-8 flex-col items-center rounded-[28px] border border-[rgba(200,169,107,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,246,242,0.96))] px-6 py-10 text-center shadow-[0_40px_110px_-52px_rgba(8,21,36,0.42)] sm:px-10 md:-translate-y-12 md:px-14 md:py-12"
        >
          <motion.div
            variants={reduceMotion ? undefined : fadeUpVariant}
            className="inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.26em] text-[#C8A96B]"
          >
            <span className="h-px w-8 bg-[rgba(200,169,107,0.35)]" />
            Persoonlijk ontwerptraject
            <span className="h-px w-8 bg-[rgba(200,169,107,0.35)]" />
          </motion.div>
          <motion.h2
            variants={reduceMotion ? undefined : fadeUpVariant}
            className="mt-5 max-w-[26rem] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#081524]"
            style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Klaar voor een keuken die echt bij uw woning past?
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : fadeUpVariant}
            className="mt-4 max-w-[34rem] text-[0.98rem] leading-[1.8] text-[rgba(8,21,36,0.68)]"
          >
            Bezoek de showroom of start eerst online. Rustig, verfijnd en volledig in lijn met
            onze premium keukenbeleving.
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : fadeUpVariant} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="min-h-[3.4rem] rounded-[16px] px-8 text-[0.78rem] tracking-[0.16em]"
            >
              <a href="/brands">
                Start Configurator
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-[3.4rem] rounded-[16px] border-[rgba(8,21,36,0.14)] bg-white/70 px-8 text-[0.78rem] tracking-[0.16em] text-[#081524] hover:bg-white hover:text-[#081524]"
            >
              <a href="#contact">Plan Showroombezoek</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* TRUST BAR */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="-mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-[rgba(245,242,236,0.08)] pb-10 text-[0.68rem] sm:text-xs uppercase tracking-[0.2em] text-[#C8A96B]"
        >
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>45+ jaar ervaring</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>1000+ combinaties</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>Europese premium merken</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>Persoonlijke showroom begeleiding</motion.span>
        </motion.div>

        {/* INFORMATION GRID */}
        <motion.div 
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-12 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"
        >
          {/* Brand */}
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant}>
            <img
              src={logoKeuken}
              alt="Keuken Centrum logo"
              className="mb-8 h-auto w-[min(17rem,100%)]"
              width={343}
              height={56}
            />
            <p className="text-[0.95rem] leading-[1.8] text-[rgba(245,242,236,0.55)] font-light max-w-[20rem]">
              Verfijnde Europese designkeukens, exclusieve materialen en compromisloze kwaliteit sinds {kc.founded}.
            </p>
          </motion.div>

          {/* Collections */}
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant}>
            <h4 className="text-[0.68rem] uppercase tracking-[0.2em] text-[#C8A96B] mb-8">Collecties</h4>
            <ul className="space-y-4">
              {['Moderne Keukens', 'Landelijke Keukens', 'Klassieke Keukens', 'Industriële Keukens'].map((item) => (
                <li key={item}>
                  <a href="#" className="group inline-flex items-center text-[0.95rem] font-light text-[rgba(245,242,236,0.65)] hover:text-[#F5F2EC] transition-colors duration-500">
                    <span className="relative transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Configurator Journey */}
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant}>
            <h4 className="text-[0.68rem] uppercase tracking-[0.2em] text-[#C8A96B] mb-8">Digitaal Ontwerp</h4>
            <ul className="space-y-4">
              {['Kies uw stijl', 'Ontdek materialen', 'Creëer moodboard', 'Vraag advies aan'].map((item) => (
                <li key={item}>
                  <a href="/brands" className="group inline-flex items-center text-[0.95rem] font-light text-[rgba(245,242,236,0.65)] hover:text-[#F5F2EC] transition-colors duration-500">
                    <span className="relative transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant}>
            <h4 className="text-[0.68rem] uppercase tracking-[0.2em] text-[#C8A96B] mb-8">Contact & Showroom</h4>
            <div className="text-[0.95rem] leading-[1.8] text-[rgba(245,242,236,0.55)] font-light space-y-4">
              <p>
                {kc.contact.address}<br />
                {kc.contact.postal} Utrecht
              </p>
              <p>
                <a href={kc.contact.phoneHref} className="hover:text-[#F5F2EC] transition-colors duration-500">{kc.contact.phone}</a><br />
                <a href={`mailto:${kc.contact.email}`} className="hover:text-[#F5F2EC] transition-colors duration-500">{kc.contact.email}</a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div 
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={fadeUpVariant}
          className="mt-6 pt-8 border-t border-[rgba(245,242,236,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 text-[0.72rem] text-[rgba(245,242,236,0.35)] font-light tracking-wide"
        >
          <p>© {currentYear} {kc.brandName}. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-[#F5F2EC] transition-colors duration-500">Privacybeleid</a>
            <a href="#" className="hover:text-[#F5F2EC] transition-colors duration-500">Cookiebeleid</a>
            <a href="#" className="hover:text-[#F5F2EC] transition-colors duration-500">Algemene Voorwaarden</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
