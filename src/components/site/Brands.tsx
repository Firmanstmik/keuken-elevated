import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, motionEase, motionViewport, staggerHeader } from "@/lib/motion";
import { CountUpValue } from "@/components/site/CountUpValue";
import leichtLogo from "@/assets/Leicht_Logo.webp";
import boraLogo from "@/assets/Bora_Logo.webp";
import mieleLogo from "@/assets/Miele_Logo.webp";
import quookerLogo from "@/assets/Quooker_Logo.webp";
import gaggenauLogo from "@/assets/Gaggenau_Logo.webp";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";
import cucinesseLogo from "@/assets/Cucinesse_Logo.webp";
import nobiliaLogo from "@/assets/Nobilia_Logo.webp";

type Brand = { name: string; logo: string; tag: string };

const leichtBrand: Brand = { name: "Leicht", logo: leichtLogo, tag: "Architectural German design" };
const boraBrand: Brand = { name: "Bora", logo: boraLogo, tag: "Revolutionary cooking" };
const mieleBrand: Brand = { name: "Miele", logo: mieleLogo, tag: "Immer besser" };
const quookerBrand: Brand = { name: "Quooker", logo: quookerLogo, tag: "The boiling water tap" };
const gaggenauBrand: Brand = { name: "Gaggenau", logo: gaggenauLogo, tag: "The difference is Gaggenau" };
const aiKuchenBrand: Brand = { name: "AI Küchen", logo: aiKuchenLogo, tag: "German quality craftsmanship" };
const zampieriBrand: Brand = { name: "Zampieri", logo: zampieriLogo, tag: "Italian luxury design" };
const cucinesseBrand: Brand = { name: "Cucinesse", logo: cucinesseLogo, tag: "Italian tailor-made kitchens" };
const nobiliaBrand: Brand = { name: "Nobilia", logo: nobiliaLogo, tag: "Made in Germany" };

type Align = "left" | "right";

type ConstellationCard = {
  brand: Brand;
  /** Absolute position + width + stacking, Tailwind classes. */
  className: string;
  rotate: number;
  /** Right-column cards align their logo outward so the hero never covers it. */
  align?: Align;
  featured?: boolean;
  /** Background depth layer — softer & dimmer. */
  dim?: boolean;
  float: { range: number; duration: number; delay: number };
};

/**
 * A curated brand constellation — fixed positions, intentional spacing, three
 * depth layers. Overlaps are kept under ~20% and always fall on a card's empty
 * (non-logo) edge, so every partner logo reads immediately.
 *
 *   Top:     Zampieri · (Gaggenau accent) · Bora
 *   Middle:  AI Küchen ·   LEICHT   · Nobilia
 *   Bottom:  Quooker · Cucinesse · Miele
 */
const constellation: ConstellationCard[] = [
  // ── Background layer ────────────────────────────────
  {
    brand: gaggenauBrand,
    className: "left-[34%] top-[6px] w-[30%]",
    rotate: -2,
    dim: true,
    float: { range: 6, duration: 8, delay: 0.5 },
  },
  // ── Middle layer — secondary partners ───────────────
  {
    brand: zampieriBrand,
    className: "left-[3%] top-[10px] w-[32%]",
    rotate: -4,
    float: { range: 5, duration: 7.2, delay: 1.1 },
  },
  {
    brand: boraBrand,
    className: "right-[3%] top-[14px] w-[32%]",
    rotate: 4,
    align: "right",
    float: { range: 5, duration: 7.8, delay: 0.3 },
  },
  {
    brand: aiKuchenBrand,
    className: "left-[3%] top-[132px] w-[32%]",
    rotate: -3,
    float: { range: 4, duration: 6.6, delay: 1.4 },
  },
  {
    brand: nobiliaBrand,
    className: "right-[3%] top-[138px] w-[32%]",
    rotate: 3,
    align: "right",
    float: { range: 4, duration: 6.9, delay: 0.7 },
  },
  {
    brand: quookerBrand,
    className: "left-[3%] top-[254px] w-[32%]",
    rotate: 3,
    float: { range: 5, duration: 7.4, delay: 0.2 },
  },
  {
    brand: cucinesseBrand,
    className: "left-[29%] top-[312px] w-[32%]",
    rotate: -3,
    float: { range: 4, duration: 6.8, delay: 1.0 },
  },
  {
    brand: mieleBrand,
    className: "right-[3%] top-[260px] w-[32%]",
    rotate: -4,
    align: "right",
    float: { range: 5, duration: 7.6, delay: 0.6 },
  },
  // ── Front layer — hero (slightly smaller, low z so cards stay hoverable) ──
  {
    brand: leichtBrand,
    className: "left-1/2 top-[120px] w-[44%]",
    rotate: 0,
    featured: true,
    float: { range: 3, duration: 6, delay: 0 },
  },
];

/** Full roster for the mobile slider (every brand present, no card hidden). */
const allBrands: Brand[] = [
  leichtBrand,
  zampieriBrand,
  boraBrand,
  aiKuchenBrand,
  nobiliaBrand,
  quookerBrand,
  cucinesseBrand,
  mieleBrand,
  gaggenauBrand,
];

const cardEase = "cubic-bezier(0.22,1,0.36,1)";

function PremiumLabel() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(35,185,196,0.22)] bg-[rgba(35,185,196,0.07)] px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[#1A9AA4]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_0_3px_rgba(35,185,196,0.16)]" />
      Premium Partner
    </span>
  );
}

/** A single partner card — shared between the desktop constellation and mobile slider. */
function CardBody({
  brand,
  featured = false,
  align = "left",
  dim = false,
}: {
  brand: Brand;
  featured?: boolean;
  align?: Align;
  dim?: boolean;
}) {
  if (featured) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[28px] border border-black/[0.05] bg-white px-8 py-8 text-center shadow-[0_28px_74px_-34px_rgba(23,25,28,0.38)] transition-[transform,box-shadow] duration-[450ms] ease-[var(--card-ease)] group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_44px_96px_-30px_rgba(23,25,28,0.46)]">
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          draggable={false}
          className="h-14 w-auto max-w-[170px] object-contain transition-transform duration-[400ms] ease-[var(--card-ease)] group-hover:scale-[1.08]"
        />
        <div className="font-serif text-[1.35rem] leading-none tracking-[-0.01em] text-[var(--secondary)]">
          {brand.name}
        </div>
        <PremiumLabel />
      </div>
    );
  }

  const alignCls = align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div
      className={`flex h-full w-full scale-[0.97] flex-col justify-between gap-5 rounded-[28px] border border-black/[0.04] bg-white px-6 py-6 saturate-[0.82] shadow-[0_12px_40px_-34px_rgba(23,25,28,0.2)] transition-[transform,box-shadow,opacity,filter] duration-[450ms] ease-[var(--card-ease)] group-hover:-translate-y-3 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100 group-hover:shadow-[0_46px_96px_-30px_rgba(23,25,28,0.46)] ${alignCls} ${
        dim ? "opacity-[0.78]" : "opacity-[0.92]"
      }`}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        loading="lazy"
        draggable={false}
        className={`h-9 w-auto max-w-[130px] object-contain opacity-[0.9] transition-[transform,opacity] duration-[450ms] ease-[var(--card-ease)] group-hover:scale-[1.08] group-hover:opacity-100 ${
          align === "right" ? "ml-auto" : ""
        }`}
      />
      <div>
        {/* Discovery effect — names dim, taglines nearly hidden + blurred until hover. */}
        <div className="font-serif text-[1.15rem] leading-none tracking-[-0.01em] text-[var(--secondary)] opacity-[0.45] transition-opacity duration-[450ms] ease-[var(--card-ease)] group-hover:opacity-100">
          {brand.name}
        </div>
        <div className="mt-2 text-[0.78rem] font-light leading-snug text-[var(--text-soft)] opacity-[0.12] blur-[2px] transition-[opacity,filter] duration-[450ms] ease-[var(--card-ease)] group-hover:opacity-100 group-hover:blur-none">
          {brand.tag}
        </div>
      </div>
    </div>
  );
}

export function Brands() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="brands"
      className="section-shell border-b border-[rgba(35,185,196,0.12)]"
      style={{ ["--card-ease" as string]: cardEase }}
    >
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="grid grid-cols-1 items-center gap-12 xl:mx-auto xl:max-w-[1240px] xl:grid-cols-[0.9fr_1.1fr] xl:gap-6"
        >
          {/* ── Left: editorial copy (unchanged) ─────────── */}
          <div className="max-w-[34rem]">
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="block text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[var(--green)]"
            >
              Premium Partners
            </motion.p>

            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 font-serif text-[clamp(2.35rem,4vw,3.25rem)] leading-[1.12] tracking-[-0.01em] text-[var(--secondary)]"
            >
              Premium partners
              <br />
              onder{" "}
              <em className="italic" style={{ color: "var(--green)" }}>
                één dak.
              </em>
            </motion.h2>

            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[30rem] text-[1.0625rem] font-light leading-[1.65] tracking-[0.01em] text-[var(--text-soft)]"
            >
              Van Duitse precisie tot Italiaanse elegantie — wij verenigen alleen
              merken die passen bij een hoogwaardige showroom: architectonische
              keukens, verfijnde afwerkingen en apparatuur die vertrouwen uitstraalt.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-10 flex items-center gap-4"
            >
              <CountUpValue
                value={15}
                suffix="+"
                className="font-serif text-[clamp(2.75rem,5vw,3.5rem)] font-light leading-none tracking-[-0.02em] text-[var(--green)]"
              />
              <span className="h-10 w-px bg-[rgba(35,185,196,0.25)]" />
              <span className="max-w-[9rem] text-[0.8rem] font-medium uppercase leading-snug tracking-[0.14em] text-[var(--secondary)]">
                Premium keukenmerken
              </span>
            </motion.div>
          </div>

          {/* ── Right: brand constellation (desktop ≥ xl) ─── */}
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="relative hidden xl:block"
            style={{ perspective: "1500px" }}
          >
            <div className="relative mr-auto h-[472px] w-full max-w-[640px]">
              {constellation.map((card) => (
                <motion.div
                  key={card.brand.name}
                  className={`group absolute ${card.className} cursor-pointer ${
                    card.featured ? "z-[10]" : "z-[1] hover:z-[100]"
                  }`}
                  style={{ rotate: card.rotate }}
                  initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.94 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  viewport={motionViewport}
                  transition={{ duration: 0.7, ease: motionEase.premium }}
                >
                  {/* Inner layer carries the float so it composes with the hover lift. */}
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : { x: card.featured ? "-50%" : 0, y: [0, -card.float.range, 0] }
                    }
                    style={reduceMotion && card.featured ? { x: "-50%" } : undefined}
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            x: { duration: 0 },
                            y: {
                              duration: card.float.duration,
                              delay: card.float.delay,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          }
                    }
                    className="h-full w-full"
                  >
                    <CardBody
                      brand={card.brand}
                      featured={card.featured}
                      align={card.align}
                      dim={card.dim}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: horizontal premium slider (< xl) ──── */}
          <div className="-mx-6 xl:hidden">
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {allBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="group h-[230px] w-[78%] flex-none snap-center sm:w-[300px]"
                >
                  <CardBody brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
