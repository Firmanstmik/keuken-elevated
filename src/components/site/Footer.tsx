import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
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
    <footer className="relative bg-[#111315] text-[#F5F2EC] overflow-hidden pt-20 pb-8 selection:bg-[#C8A96B]/30">
      <div className="site-container relative z-10">
        
        {/* TRUST BAR */}
        <motion.div 
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-[rgba(245,242,236,0.08)] pb-10 text-[0.68rem] sm:text-xs uppercase tracking-[0.2em] text-[#C8A96B]"
        >
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>45+ jaar ervaring</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>1000+ combinaties</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>Europese premium merken</motion.span>
          <motion.span variants={reduceMotion ? undefined : fadeUpVariant}>Persoonlijke showroom begeleiding</motion.span>
        </motion.div>

        {/* PREMIUM CTA AREA */}
        <motion.div 
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="py-24 md:py-32 flex flex-col items-center text-center border-b border-[rgba(245,242,236,0.08)]"
        >
          <motion.h2 
            variants={reduceMotion ? undefined : fadeUpVariant}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.15] tracking-[-0.02em] max-w-[42rem]"
            style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Klaar om uw droomkeuken te realiseren?
          </motion.h2>
          
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant} className="mt-14 flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              className="group relative overflow-hidden min-h-[3.75rem] rounded-none border border-[#6D8F69] bg-[#6D8F69] px-[2.75rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] hover:bg-[#5D7C59] hover:border-[#5D7C59] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_40px_-10px_rgba(109,143,105,0.35)]"
            >
              <a href="/brands">
                Start Configurator
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group relative overflow-hidden min-h-[3.75rem] rounded-none border border-[rgba(245,242,236,0.25)] bg-transparent px-[2.75rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] hover:bg-[#F5F2EC] hover:text-[#111315] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <a href="#contact">
                Plan Showroombezoek
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* INFORMATION GRID */}
        <motion.div 
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pt-24 pb-16"
        >
          {/* Brand */}
          <motion.div variants={reduceMotion ? undefined : fadeUpVariant}>
            <h3 className="text-2xl font-serif tracking-tight mb-8">Keuken-Centrum Utrecht.</h3>
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
