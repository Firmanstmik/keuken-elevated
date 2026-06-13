"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { motionViewport } from "@/lib/motion";
import logoKeuken from "@/assets/keukencentrum_logo_transparent_medium_centered_stripe.png";
import showroomImg from "@/assets/showroom.jpg";

// Correct showroom location URL (derived from Maps embed coordinates)
const SHOWROOM_MAPS_URL =
  "https://www.google.com/maps/place/Keuken-centrum.nl/@52.1187967,5.0434307,17z";

// ─── Motion variants ──────────────────────────────────────────────────────────

const luxe = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: luxe } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75, ease: luxe } },
};

const stagger = (delay = 0.11) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: delay, delayChildren: 0.06 } },
});

// ─── Icons ───────────────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.1rem] w-[1.1rem]">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.1rem] w-[1.1rem]">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[1.1rem] w-[1.1rem]">
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

function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={`${className} flex-shrink-0`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

// ─── Trust bar ───────────────────────────────────────────────────────────────

const trustStats = [
  { value: "1978", label: "Opgericht" },
  { value: "4.9★", label: "Google Reviews" },
  { value: "150+", label: "Projecten" },
  { value: "45+", label: "Jaar ervaring" },
] as const;

function TrustBar({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={reduceMotion ? undefined : stagger(0.1)}
      className="relative border-b border-white/[0.06]"
    >
      {/* Fine top edge — teal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(49,199,212,0.28), transparent)" }}
      />

      <div className="mx-auto grid max-w-[90rem] grid-cols-2 gap-0 px-6 py-11 md:grid-cols-4 lg:px-12">
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={reduceMotion ? undefined : fadeUp}
            className={[
              "flex flex-col items-center justify-center py-4 text-center",
              i < 3 ? "border-r border-white/[0.07]" : "",
              i >= 2 ? "border-t border-white/[0.07] md:border-t-0" : "",
            ].join(" ")}
          >
            <span className="font-serif text-[2rem] font-light leading-none tracking-[-0.03em] text-[#F5F2EC]">
              {stat.value}
            </span>
            <span
              className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[rgba(255,255,255,0.55)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Social icons ─────────────────────────────────────────────────────────────

type SocialLink = { href: string; label: string; icon: React.ReactNode; handle: string };

function SocialRow({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map(({ href, label, icon, handle }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex w-fit items-center gap-3"
        >
          {/* Icon box */}
          <span
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(35,185,196,0.20)] bg-[rgba(35,185,196,0.06)] text-[rgba(35,185,196,0.75)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[3px] group-hover:scale-[1.06] group-hover:border-[rgba(35,185,196,0.52)] group-hover:bg-[rgba(35,185,196,0.14)] group-hover:text-[#4FD6D9]"
            style={{ boxShadow: "0 0 0 0 rgba(35,185,196,0)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 20px -8px rgba(35,185,196,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 0 0 rgba(35,185,196,0)";
            }}
          >
            {icon}
          </span>
          {/* Label */}
          <span
            className="text-[0.8rem] font-light text-[rgba(255,255,255,0.80)] transition-colors duration-400 group-hover:text-[#4FD6D9]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {handle}
          </span>
        </a>
      ))}
    </div>
  );
}

// ─── Showroom card ────────────────────────────────────────────────────────────

function ShowroomCard() {
  return (
    <a
      href={SHOWROOM_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mt-7 block overflow-hidden rounded-[18px] border border-[rgba(35,185,196,0.22)] shadow-[0_18px_50px_-26px_rgba(8,33,44,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(49,199,212,0.35)] hover:shadow-[0_30px_70px_-28px_rgba(8,33,44,0.8),0_0_30px_-10px_rgba(49,199,212,0.25)]"
    >
      {/* Photo */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={showroomImg as unknown as string}
          alt="Keuken Centrum showroom Utrecht"
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {/* Luxury gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,33,44,0.15) 0%, rgba(8,33,44,0.62) 65%, rgba(8,33,44,0.92) 100%)",
          }}
        />
        {/* Teal inner glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 40px rgba(49,199,212,0.10)" }}
        />
        {/* Badge — teal */}
        <div className="absolute left-4 top-4">
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(8,33,44,0.72)",
              border: "1px solid rgba(49,199,212,0.32)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#31C7D4]"
              style={{ boxShadow: "0 0 6px rgba(49,199,212,0.65)" }}
            />
            <span
              className="text-[9px] font-medium uppercase tracking-[0.22em] text-[rgba(49,199,212,0.85)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium Showroom
            </span>
          </div>
        </div>
        {/* Bottom text over image */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
          <p className="font-serif text-[1.1rem] font-light leading-tight text-[#F5F2EC]">
            Keuken Centrum Utrecht
          </p>
          <div className="mt-1 flex items-center gap-1.5 text-[rgba(245,242,236,0.55)]">
            <MapPinIcon className="h-3 w-3" />
            <span className="text-[0.72rem] font-light" style={{ fontFamily: "var(--font-body)" }}>
              {kc.contact.address}, {kc.contact.postal}
            </span>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div
        className="flex divide-x divide-white/[0.07] bg-[rgba(8,28,38,0.96)]"
        style={{ border: "1px solid rgba(35,185,196,0.10)", borderTop: "none" }}
      >
        <span
          className="flex flex-1 items-center justify-center gap-2 py-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[rgba(245,242,236,0.60)] transition-colors duration-400 group-hover:text-[#4FD6D9]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Bekijk showroom
        </span>
        <span
          className="flex flex-1 items-center justify-center gap-2 py-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[rgba(245,242,236,0.60)] transition-colors duration-400 group-hover:text-[#4FD6D9]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          Route plannen
        </span>
      </div>
    </a>
  );
}

// ─── Nav link ─────────────────────────────────────────────────────────────────

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2.5 text-[0.88rem] font-light text-white transition-all duration-500 hover:text-[#4FD6D9]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="h-px w-2.5 bg-[rgba(35,185,196,0.5)] transition-all duration-500 group-hover:w-5 group-hover:bg-[#23B9C4]" />
        <span className="relative transition-transform duration-500 group-hover:translate-x-0.5">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#4FD6D9] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
        </span>
      </a>
    </li>
  );
}

// ─── Column title ─────────────────────────────────────────────────────────────

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h4
        className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[#31C7D4]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </h4>
      <div className="mt-2 h-px w-8 bg-gradient-to-r from-[rgba(49,199,212,0.55)] to-transparent" />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function Footer() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      href: "https://www.facebook.com/keukencentrumutrecht",
      label: "Facebook",
      icon: <FacebookIcon />,
      handle: "Facebook",
    },
    {
      href: "https://www.instagram.com/keukencentrum_utrecht/",
      label: "Instagram",
      icon: <InstagramIcon />,
      handle: "@keukencentrum_utrecht",
    },
    {
      href: `mailto:${kc.contact.email}`,
      label: "E-mail",
      icon: <EmailIcon />,
      handle: kc.contact.email,
    },
  ];

  return (
    <footer
      className="relative overflow-hidden text-[#F5F2EC] selection:bg-[#23B9C4]/20"
      style={{
        background: [
          "radial-gradient(ellipse at 25% top, rgba(49,199,212,0.14) 0%, transparent 42%)",
          "radial-gradient(ellipse at 75% top, rgba(35,185,196,0.08) 0%, transparent 38%)",
          "radial-gradient(circle at bottom center, rgba(35,185,196,0.09) 0%, transparent 50%)",
          "linear-gradient(180deg, #08212C 0%, #0B2C39 50%, #061B24 100%)",
        ].join(", "),
      }}
    >
      {/* Ambient depth light — mid-section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #23B9C4, transparent 65%)" }}
      />

      {/* ── Trust bar ───────────────────────────────── */}
      <TrustBar reduceMotion={reduceMotion} />

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-12">

        {/* ── SECTION 1 — Hero CTA ─────────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : stagger(0.13)}
          className="flex flex-col items-center pb-20 pt-24 text-center md:pb-24 md:pt-28"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mb-7 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[rgba(49,199,212,0.55)]" />
            <span
              className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[#31C7D4]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Persoonlijk ontwerptraject
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[rgba(49,199,212,0.55)]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={reduceMotion ? undefined : fadeUp}
            className="max-w-[30rem] font-serif text-[clamp(2rem,4.2vw,3.2rem)] font-light leading-[1.1] tracking-[-0.03em] text-[#F5F2EC]"
          >
            Klaar voor een keuken die echt bij uw{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(128deg, #31C7D4 0%, #66DCE6 48%, #23B9C4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              woning past?
            </em>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-5 max-w-[34rem] text-[0.95rem] font-light leading-[1.85] text-[rgba(255,255,255,0.80)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bezoek de showroom of start eerst online. Rustig, verfijnd en volledig
            in lijn met onze premium keukenbeleving.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/brands"
              className="group inline-flex items-center justify-center gap-3 rounded-[14px] px-9 py-[1.05rem] text-[0.73rem] font-medium uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_0_36px_rgba(35,185,196,0.38)]"
              style={{
                background: "linear-gradient(135deg, #23B9C4 0%, #3DCFD9 50%, #23B9C4 100%)",
                backgroundSize: "200% 100%",
                fontFamily: "var(--font-body)",
              }}
            >
              Start Configurator
              <ArrowRight className="h-[0.95rem] w-[0.95rem] transition-transform duration-500 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-[14px] border px-9 py-[1.05rem] text-[0.73rem] font-medium uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-500 hover:-translate-y-[2px] hover:bg-[rgba(35,185,196,0.08)]"
              style={{
                borderColor: "rgba(35,185,196,0.30)",
                color: "#4FD6D9",
                fontFamily: "var(--font-body)",
              }}
            >
              Plan Showroombezoek
            </a>
          </motion.div>
        </motion.div>

        {/* Teal divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(49,199,212,0.16)] to-transparent" />

        {/* ── SECTION 2 — Information grid ─────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : stagger(0.12)}
          className="grid grid-cols-1 gap-12 pb-16 pt-20 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.4fr] lg:gap-10 xl:gap-14"
        >

          {/* ── Col 1: Brand identity ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            {/* Logo */}
            <img
              src={logoKeuken as unknown as string}
              alt="Keuken Centrum"
              className="mb-4 h-auto w-[min(19rem,100%)]"
              width={343}
              height={56}
            />

            {/* Tagline — teal */}
            <p
              className="mb-7 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[rgba(49,199,212,0.45)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Duitse precisie · Italiaanse elegantie
            </p>

            <p
              className="mb-9 max-w-[18rem] text-[0.88rem] font-light leading-[1.9] text-[rgba(255,255,255,0.80)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Verfijnde Europese designkeukens, exclusieve materialen en
              compromisloze kwaliteit sinds {kc.founded}.
            </p>

            {/* Social label — teal */}
            <p
              className="mb-4 text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-[rgba(49,199,212,0.38)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Volg ons
            </p>

            <SocialRow links={socialLinks} />
          </motion.div>

          {/* ── Col 2: Collecties ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <ColTitle>Collecties</ColTitle>
            <ul className="space-y-[1.1rem]">
              <FooterLink href="#">Moderne Keukens</FooterLink>
              <FooterLink href="#">Landelijke Keukens</FooterLink>
              <FooterLink href="#">Klassieke Keukens</FooterLink>
              <FooterLink href="#">Industriële Keukens</FooterLink>
            </ul>

            <div className="mt-10">
              <ColTitle>Digitaal Ontwerp</ColTitle>
              <ul className="space-y-[1.1rem]">
                <FooterLink href="/brands">Kies uw stijl</FooterLink>
                <FooterLink href="/brands">Ontdek materialen</FooterLink>
                <FooterLink href="/brands">Creëer moodboard</FooterLink>
                <FooterLink href="/brands">Vraag advies aan</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* ── Col 3: Over ons ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <ColTitle>Over Keuken Centrum</ColTitle>
            <ul className="space-y-[1.1rem]">
              <FooterLink href="#">Ons verhaal</FooterLink>
              <FooterLink href="#">Onze merken</FooterLink>
              <FooterLink href="#">Projecten</FooterLink>
              <FooterLink href="#">Showroom</FooterLink>
              <FooterLink href="#">Blog &amp; Inspiratie</FooterLink>
            </ul>

            <div className="mt-10">
              <ColTitle>Klantenservice</ColTitle>
              <ul className="space-y-[1.1rem]">
                <FooterLink href="#">Afspraak maken</FooterLink>
                <FooterLink href="#">Offerte aanvragen</FooterLink>
                <FooterLink href="#">Veelgestelde vragen</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* ── Col 4: Contact + Showroom card ── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp}>
            <ColTitle>Contact &amp; Showroom</ColTitle>

            {/* Address */}
            <div className="mb-5 flex items-start gap-3 text-[rgba(255,255,255,0.90)]">
              <span className="mt-[3px] text-[#23B9C4]">
                <MapPinIcon />
              </span>
              <div
                className="text-[0.88rem] font-light leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="block text-white">{kc.contact.address}</span>
                <span className="block">{kc.contact.postal}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 flex items-center gap-3 text-[rgba(255,255,255,0.90)]">
              <span className="text-[#23B9C4]">
                <PhoneIcon />
              </span>
              <a
                href={kc.contact.phoneHref}
                className="text-[0.88rem] font-light transition-colors duration-400 hover:text-[#4FD6D9]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {kc.contact.phone}
              </a>
            </div>

            {/* Opening hours */}
            <div className="space-y-2 border-t border-[rgba(35,185,196,0.14)] pt-5">
              {kc.contact.hours.map((h) => (
                <div
                  key={h.d}
                  className="flex items-baseline justify-between gap-4 text-[0.78rem]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="text-[rgba(255,255,255,0.70)]">{h.d}</span>
                  <span
                    className={
                      h.h === "Gesloten"
                        ? "text-[rgba(255,255,255,0.45)]"
                        : "tabular-nums text-[rgba(255,255,255,0.90)]"
                    }
                  >
                    {h.h}
                  </span>
                </div>
              ))}
            </div>

            {/* Premium showroom card */}
            <ShowroomCard />
          </motion.div>

        </motion.div>

        {/* Teal divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(49,199,212,0.10)] to-transparent" />

        {/* ── SECTION 3 — Bottom bar ───────────────── */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10px" }}
          variants={reduceMotion ? undefined : fadeIn}
          className="flex flex-col items-center gap-6 pb-8 pt-7 md:flex-row md:justify-between"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {/* Copyright */}
          <p className="text-[0.68rem] tracking-[0.10em] text-[rgba(255,255,255,0.50)]">
            © {year} {kc.brandName}. Alle rechten voorbehouden.
          </p>

          {/* Luxury statement — center */}
          <p className="order-first text-center text-[0.62rem] font-light uppercase tracking-[0.32em] text-[rgba(255,255,255,0.40)] md:order-none">
            Ontworpen voor generaties
          </p>

          {/* Legal links with separators */}
          <div className="flex flex-wrap items-center justify-center gap-y-1">
            {["Privacybeleid", "Cookiebeleid", "Algemene Voorwaarden"].map((lbl, i) => (
              <span key={lbl} className="flex items-center">
                {i > 0 && (
                  <span
                    className="mx-3.5 inline-block h-[10px] w-px bg-[rgba(255,255,255,0.12)]"
                    aria-hidden="true"
                  />
                )}
                <a
                  href="#"
                  className="text-[0.68rem] tracking-[0.08em] text-[rgba(255,255,255,0.50)] transition-colors duration-400 hover:text-[#4FD6D9]"
                >
                  {lbl}
                </a>
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom edge teal accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(35,185,196,0.28), transparent)" }}
      />
    </footer>
  );
}
