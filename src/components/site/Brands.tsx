import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, motionViewport, staggerHeader } from "@/lib/motion";
import { CountUpValue } from "@/components/site/CountUpValue";
import { SectionChapter } from "@/components/site/SectionChapter";
import leichtLogo from "@/assets/Leicht_Logo.webp";
import boraLogo from "@/assets/Bora_Logo.webp";
import mieleLogo from "@/assets/Miele_Logo.webp";
import quookerLogo from "@/assets/Quooker_Logo.webp";
import gaggenauLogo from "@/assets/Gaggenau_Logo.webp";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";
import cucinesseLogo from "@/assets/Cucinesse_Logo.webp";
import nobiliaLogo from "@/assets/Nobilia_Logo.webp";
import sceneBg from "@/assets/brands/brands-dark-bg.webp";

type Brand = {
  name: string;
  logo: string;
  tag: string;
  category: "Keukens" | "Apparatuur";
  origin: string;
  href?: string;
  /** Badge-style logos (solid colour block) keep their original colours. */
  badge?: boolean;
};

function logoClass(brand: Brand) {
  return brand.badge ? "brand-logo-badge" : "brand-logo-color";
}

const leichtBrand: Brand = {
  name: "Leicht",
  logo: leichtLogo,
  tag: "Architecturaal Duits design, al meer dan 90 jaar de maatstaf voor de premium keuken.",
  category: "Keukens",
  origin: "Duitsland",
  href: "/keukens/leicht",
};

const kitchenBrands: Brand[] = [
  {
    name: "AI Küchen",
    logo: aiKuchenLogo,
    tag: "Duits vakmanschap, op maat gemaakt.",
    category: "Keukens",
    origin: "Duitsland",
    href: "/keukens/ai-kuchen",
    badge: true,
  },
  {
    name: "Nobilia",
    logo: nobiliaLogo,
    tag: "Made in Germany, met precisie op schaal.",
    category: "Keukens",
    origin: "Duitsland",
    href: "/keukens/nobilia",
  },
  {
    name: "Zampieri",
    logo: zampieriLogo,
    tag: "Italiaans luxedesign met karakter.",
    category: "Keukens",
    origin: "Italië",
    href: "/keukens/zampieri",
  },
  {
    name: "Cucinesse",
    logo: cucinesseLogo,
    tag: "Italiaans, volledig op maat.",
    category: "Keukens",
    origin: "Italië",
    href: "/keukens/cucinesse",
  },
];

const applianceBrands: Brand[] = [
  { name: "Bora", logo: boraLogo, tag: "Revolutionair koken zonder afzuigkap.", category: "Apparatuur", origin: "Duitsland" },
  { name: "Miele", logo: mieleLogo, tag: "Immer besser, een leven lang.", category: "Apparatuur", origin: "Duitsland", badge: true },
  { name: "Quooker", logo: quookerLogo, tag: "De originele kokendwaterkraan.", category: "Apparatuur", origin: "Nederland" },
  { name: "Gaggenau", logo: gaggenauLogo, tag: "The difference is Gaggenau.", category: "Apparatuur", origin: "Duitsland" },
];

const allBrands: Brand[] = [leichtBrand, ...kitchenBrands, ...applianceBrands];

/** Wraps a row in a Link when the brand has its own page, else a plain div. */
function RowShell({
  brand,
  className,
  children,
}: {
  brand: Brand;
  className?: string;
  children: ReactNode;
}) {
  if (brand.href) {
    return (
      <Link to={brand.href} className={className} aria-label={`Ontdek ${brand.name}`}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

/** One line of the editorial brand index — reveals logo + tagline on hover. */
function IndexRow({
  brand,
  index,
  featured = false,
}: {
  brand: Brand;
  index: number;
  featured?: boolean;
}) {
  return (
    <RowShell
      brand={brand}
      className={`index-row ${featured ? "index-row--featured" : ""}`}
    >
      <span className="index-row__num">{String(index).padStart(2, "0")}</span>

      <div className="index-row__body">
        <div className="index-row__head">
          {featured && (
            <span className="index-row__badge">
              <span className="index-row__badge-dot" aria-hidden="true" />
              Hoofdpartner
            </span>
          )}
          <span className="index-row__name">{brand.name}</span>
        </div>
        <p className="index-row__tag">{brand.tag}</p>
      </div>

      <div className="index-row__aside">
        <span className="index-row__meta">
          {brand.category} · {brand.origin}
        </span>
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          draggable={false}
          className={`${logoClass(brand)} index-row__logo`}
        />
      </div>

      <span className="index-row__arrow" aria-hidden="true">
        →
      </span>
    </RowShell>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-left">
      <CountUpValue
        value={value}
        suffix={suffix}
        className="font-serif text-[clamp(1.9rem,3vw,2.4rem)] font-light leading-none tracking-[-0.02em] text-[var(--gold)]"
      />
      <div className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[rgba(245,242,236,0.55)]">
        {label}
      </div>
    </div>
  );
}

export function Brands() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="brands" className="brands-scene section-shell relative overflow-hidden">
      {/* Cinematic showroom backdrop + quiet ambient glow */}
      <div
        className="brands-scene__photo"
        aria-hidden="true"
        style={{ backgroundImage: `url(${sceneBg})` }}
      />
      <div className="brands-scene__aurora" aria-hidden="true" />

      <div className="site-container relative z-10 max-w-7xl">
        <SectionChapter index={1} label="Partners" light />

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mt-6 grid gap-x-16 gap-y-14 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]"
        >
          {/* ── LEFT: sticky editorial statement ─────────────── */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="xl:sticky xl:top-28 xl:self-start"
          >
            <p className="inline-flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-8 bg-[rgba(200,169,107,0.45)]" />
              Premium partners
            </p>

            <h2 className="mt-6 font-serif text-[clamp(2.35rem,3.6vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-[#F5F2EC]">
              De beste merken,
              <br />
              onder <em className="brands-headline-accent italic">één dak.</em>
            </h2>

            <p className="mt-6 max-w-[30rem] text-[1.02rem] font-light leading-[1.7] tracking-[0.01em] text-[rgba(245,242,236,0.68)]">
              Van Duitse precisie tot Italiaanse elegantie. Wij verenigen alleen merken
              die passen bij een hoogwaardige showroom: architectonische keukens,
              verfijnde afwerkingen en apparatuur die vertrouwen uitstraalt.
            </p>

            <div className="mt-10 flex items-center gap-8 sm:gap-12">
              <Stat value={15} suffix="+" label="Premium merken" />
              <span className="h-10 w-px bg-[rgba(255,255,255,0.12)]" />
              <Stat value={3} label="Designlanden" />
              <span className="h-10 w-px bg-[rgba(255,255,255,0.12)]" />
              <Stat value={1} label="Showroom Utrecht" />
            </div>
          </motion.div>

          {/* ── RIGHT: the brand index ───────────────────────── */}
          <motion.div variants={reduceMotion ? undefined : fadeUp} className="index-list">
            {allBrands.map((brand, i) => (
              <IndexRow key={brand.name} brand={brand} index={i + 1} featured={i === 0} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Ghost logo marquee — endless, edge-faded ─────── */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={motionViewport}
        transition={{ duration: 1, delay: 0.2 }}
        className="brands-marquee relative z-10 mt-16 xl:mt-24"
        aria-hidden="true"
      >
        <div className="brands-marquee__track">
          {[...allBrands, ...allBrands].map((brand, i) => (
            <span key={`${brand.name}-${i}`} className="brands-marquee__item">
              <img
                src={brand.logo}
                alt=""
                loading="lazy"
                draggable={false}
                className={`${logoClass(brand)} h-7 w-auto max-w-[120px] object-contain sm:h-8`}
              />
              <span className="brands-marquee__dot" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
