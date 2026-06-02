import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import logoKeuken from "@/assets/logo-keuken-1-1.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

/* ─── Social icon SVGs ─── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-[#F5F2EC] overflow-hidden selection:bg-[#C8A96B]/30"
      style={{
        background: "linear-gradient(135deg, #081524 0%, #0B1E33 45%, #0A2742 100%)",
      }}
    >
      {/* Subtle gold overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(200,169,107,0.07), transparent 42%), radial-gradient(circle at 85% 80%, rgba(200,169,107,0.04), transparent 35%)",
        }}
      />
      {/* Top divider line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,169,107,0.35) 50%, transparent 100%)",
        }}
      />

      <div className="site-container relative z-10">

        {/* ══════════════════════════════════════════
            SECTION 1 — PREMIUM CTA
            Full-width final statement, no overlap
        ══════════════════════════════════════════ */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col items-center pt-20 pb-18 text-center md:pt-28 md:pb-24"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8A96B]/60" />
            <span
              className="text-[0.62rem] uppercase tracking-[0.32em] text-[#C8A96B]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Persoonlijk ontwerptraject
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8A96B]/60" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[32rem] text-[clamp(2.1rem,4.5vw,3.4rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#F5F2EC]"
            style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}
          >
            Klaar voor een keuken die echt bij uw{" "}
            <em className="italic text-[#C8A96B]">woning past?</em>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 max-w-[36rem] text-[0.97rem] leading-[1.8] text-[rgba(245,242,236,0.62)]"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Bezoek de showroom of start eerst online. Rustig, verfijnd en volledig in lijn met
            onze premium keukenbeleving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* Primary — gold */}
            <a
              href="/brands"
              className="group inline-flex items-center justify-center gap-3 rounded-[14px] px-9 py-[1.05rem] text-[0.76rem] font-medium uppercase tracking-[0.18em] text-[#081524] transition-all duration-500 hover:brightness-110 hover:shadow-[0_0_32px_rgba(200,169,107,0.35)]"
              style={{
                background: "linear-gradient(135deg, #C8A96B 0%, #E2C98A 50%, #C8A96B 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              Start Configurator
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>

            {/* Secondary — ghost */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-[14px] border border-[rgba(245,242,236,0.18)] px-9 py-[1.05rem] text-[0.76rem] font-medium uppercase tracking-[0.18em] text-[#F5F2EC] backdrop-blur-sm transition-all duration-500 hover:border-[#C8A96B]/50 hover:bg-white/[0.05]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Plan Showroombezoek
            </a>
          </motion.div>
        </motion.div>

        {/* Gold separator */}
        <div className="mx-auto h-px max-w-[80rem] bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.2)] to-transparent" />

        {/* ══════════════════════════════════════════
            SECTION 2 — INFORMATION GRID
        ══════════════════════════════════════════ */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-12 pt-20 pb-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.5fr] lg:gap-10 xl:gap-14"
        >
          {/* ── Col 1: Brand ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <img
              src={logoKeuken}
              alt="Keuken Centrum logo"
              className="mb-7 h-auto w-[min(15rem,100%)]"
              width={343}
              height={56}
            />
            <p
              className="mb-8 text-[0.93rem] leading-[1.85] text-[rgba(245,242,236,0.52)] font-light max-w-[19rem]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Verfijnde Europese designkeukens, exclusieve materialen en
              compromisloze kwaliteit sinds {kc.founded}.
            </p>

            {/* ─ Social Media Links ─ */}
            <div className="flex flex-col gap-3">
              <p
                className="mb-1 text-[0.58rem] uppercase tracking-[0.28em] text-[#C8A96B]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Volg ons
              </p>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/keukencentrumutrecht"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex items-center gap-3.5 w-fit"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(200,169,107,0.18)] bg-[rgba(200,169,107,0.07)] text-[#C8A96B] transition-all duration-400 group-hover:border-[#C8A96B]/50 group-hover:bg-[rgba(200,169,107,0.16)] group-hover:scale-105">
                  <FacebookIcon />
                </span>
                <span
                  className="text-[0.82rem] text-[rgba(245,242,236,0.55)] transition-colors duration-400 group-hover:text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Facebook
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/keukencentrum_utrecht/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-3.5 w-fit"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(200,169,107,0.18)] bg-[rgba(200,169,107,0.07)] text-[#C8A96B] transition-all duration-400 group-hover:border-[#C8A96B]/50 group-hover:bg-[rgba(200,169,107,0.16)] group-hover:scale-105">
                  <InstagramIcon />
                </span>
                <span
                  className="text-[0.82rem] text-[rgba(245,242,236,0.55)] transition-colors duration-400 group-hover:text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  @keukencentrum_utrecht
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${kc.contact.email}`}
                aria-label="E-mail"
                className="group flex items-center gap-3.5 w-fit"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(200,169,107,0.18)] bg-[rgba(200,169,107,0.07)] text-[#C8A96B] transition-all duration-400 group-hover:border-[#C8A96B]/50 group-hover:bg-[rgba(200,169,107,0.16)] group-hover:scale-105">
                  <EmailIcon />
                </span>
                <span
                  className="text-[0.82rem] text-[rgba(245,242,236,0.55)] transition-colors duration-400 group-hover:text-[#C8A96B]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {kc.contact.email}
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── Col 2: Collections ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <h4
              className="mb-8 text-[0.62rem] uppercase tracking-[0.26em] text-[#C8A96B]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Collecties
            </h4>
            <ul className="space-y-4">
              {["Moderne Keukens", "Landelijke Keukens", "Klassieke Keukens", "Industriële Keukens"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2.5 text-[0.93rem] font-light text-[rgba(245,242,236,0.58)] transition-colors duration-500 hover:text-[#F5F2EC]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      <span className="h-px w-3 bg-[#C8A96B]/40 transition-all duration-500 group-hover:w-5 group-hover:bg-[#C8A96B]" />
                      <span className="transition-transform duration-500 group-hover:translate-x-0.5">{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* ── Col 3: Configurator Journey ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <h4
              className="mb-8 text-[0.62rem] uppercase tracking-[0.26em] text-[#C8A96B]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Digitaal Ontwerp
            </h4>
            <ul className="space-y-4">
              {["Kies uw stijl", "Ontdek materialen", "Creëer moodboard", "Vraag advies aan"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/brands"
                      className="group inline-flex items-center gap-2.5 text-[0.93rem] font-light text-[rgba(245,242,236,0.58)] transition-colors duration-500 hover:text-[#F5F2EC]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      <span className="h-px w-3 bg-[#C8A96B]/40 transition-all duration-500 group-hover:w-5 group-hover:bg-[#C8A96B]" />
                      <span className="transition-transform duration-500 group-hover:translate-x-0.5">{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* ── Col 4: Contact + Google Maps Card ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp} className="flex flex-col gap-6">
            <div>
              <h4
                className="mb-6 text-[0.62rem] uppercase tracking-[0.26em] text-[#C8A96B]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Contact & Showroom
              </h4>

              {/* Address */}
              <div className="mb-5 flex items-start gap-3 text-[rgba(245,242,236,0.55)]">
                <span className="mt-[2px] text-[#C8A96B]/70">
                  <MapPinIcon />
                </span>
                <div
                  className="text-[0.92rem] leading-[1.75] font-light"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  <span className="block text-[#F5F2EC]/80">{kc.contact.address}</span>
                  <span className="block">{kc.contact.postal}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-3 flex items-center gap-3 text-[rgba(245,242,236,0.55)]">
                <span className="text-[#C8A96B]/70">
                  <PhoneIcon />
                </span>
                <a
                  href={kc.contact.phoneHref}
                  className="text-[0.92rem] font-light transition-colors duration-400 hover:text-[#F5F2EC]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {kc.contact.phone}
                </a>
              </div>

              {/* Opening hours */}
              <div className="mt-5 space-y-1.5 border-t border-white/[0.07] pt-5">
                {kc.contact.hours.map((h) => (
                  <div
                    key={h.d}
                    className="flex justify-between gap-4 text-[0.8rem]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    <span className="text-[rgba(245,242,236,0.45)]">{h.d}</span>
                    <span
                      className={
                        h.h === "Gesloten"
                          ? "text-[rgba(245,242,236,0.3)]"
                          : "text-[rgba(245,242,236,0.72)]"
                      }
                    >
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─ Google Maps Card ─ */}
            <div className="overflow-hidden rounded-[16px] border border-[rgba(200,169,107,0.16)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              {/* Map label */}
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-[rgba(200,169,107,0.06)] px-4 py-2.5">
                <span className="text-[#C8A96B]/80">
                  <MapPinIcon />
                </span>
                <span
                  className="text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(245,242,236,0.55)]"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Showroom Locatie
                </span>
              </div>
              {/* Embedded map */}
              <div className="relative h-[180px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.828993890007!2d5.039449476548928!3d52.11924016582348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66fd134027c87%3A0x748bdbb89c24daea!2sKeuken-centrum.nl!5e0!3m2!1sid!2sid!4v1780390701810!5m2!1sid!2sid"
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keuken Centrum Utrecht showroom locatie"
                />
              </div>
              {/* Directions link */}
              <a
                href="https://www.google.com/maps/place/Keuken-centrum.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[rgba(200,169,107,0.07)] py-2.5 text-[0.68rem] uppercase tracking-[0.18em] text-[#C8A96B] transition-colors duration-400 hover:bg-[rgba(200,169,107,0.12)] hover:text-[#E2C98A]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Routebeschrijving
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Gold separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.15)] to-transparent" />

        {/* ══════════════════════════════════════════
            SECTION 3 — BOTTOM BAR
        ══════════════════════════════════════════ */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-5 py-7 text-[0.71rem] text-[rgba(245,242,236,0.28)] md:flex-row"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          <p>
            © {currentYear} {kc.brandName}. Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-[rgba(245,242,236,0.65)] transition-colors duration-400">
              Privacybeleid
            </a>
            <a href="#" className="hover:text-[rgba(245,242,236,0.65)] transition-colors duration-400">
              Cookiebeleid
            </a>
            <a href="#" className="hover:text-[rgba(245,242,236,0.65)] transition-colors duration-400">
              Algemene Voorwaarden
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
