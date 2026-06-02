"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { fadeUp, motionViewport } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const collections = [
  {
    id: "modern",
    title: "Modern Living",
    number: "01",
    collectionLabel: "MODERN COLLECTION",
    descriptor: "Architectural • Minimal • Timeless",
    description: "Slanke lijnen en functionele elegantie voor het hedendaagse leven.",
    image: kc.styles[1].img,
  },
  {
    id: "klassiek",
    title: "Klassiek Elegance",
    number: "02",
    collectionLabel: "KLASSIEK COLLECTION",
    descriptor: "Warm • Elegant • Refined",
    description: "Tijdloze proporties en rijke materialen die generaties meegaan.",
    image: kc.styles[2].img,
  },
  {
    id: "landelijk",
    title: "Landelijk Heritage",
    number: "03",
    collectionLabel: "LANDELIJK COLLECTION",
    descriptor: "Natural • Authentic • Inviting",
    description: "Warme texturen en ambachtelijke details voor een thuis gevoel.",
    image: kc.styles[2].img,
  },
  {
    id: "industrieel",
    title: "Industrieel Studio",
    number: "04",
    collectionLabel: "INDUSTRIEEL COLLECTION",
    descriptor: "Bold • Characterful • Contemporary",
    description: "Rauwe materialen en grafische vormen met een eigenzinnig karakter.",
    image: kc.styles[3].img,
  },
];

// ─── Motion ───────────────────────────────────────────────────────────────────

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const staggerCards: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

// ─── Luxury Card ──────────────────────────────────────────────────────────────

type CardProps = {
  collection: (typeof collections)[number];
  index: number;
  reduceMotion: boolean | null;
};

function LuxuryStyleCard({ collection, index, reduceMotion }: CardProps) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : fadeUp}
      className="h-full"
    >
      <article
        className={[
          "group relative h-full cursor-pointer overflow-hidden",
          "bg-[#0A0C0F] p-[12px] text-left",
          "border border-[rgba(200,169,107,0.15)]",
          "rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
          "transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-[10px] hover:border-[rgba(200,169,107,0.45)]",
          "hover:shadow-[0_24px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(200,169,107,0.06)]"
        ].join(" ")}
        style={{
          aspectRatio: "0.82 / 1",
        }}
      >
        {/* Inner container to hold image and content */}
        <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#101216]">
          
          {/* Background Image */}
          <img
            src={collection.image}
            alt={collection.title}
            loading="lazy"
            className={[
              "absolute inset-0 h-full w-full object-cover",
              "transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:scale-[1.06]"
            ].join(" ")}
          />

          {/* Gradients for readability */}
          {/* Top Scrim */}
          <div
            className="absolute inset-x-0 top-0 h-[40%] pointer-events-none bg-gradient-to-b from-black/80 via-black/30 to-transparent"
          />
          {/* Bottom Scrim */}
          <div
            className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none bg-gradient-to-t from-black/95 via-black/55 to-transparent"
          />

          {/* TOP CONTENT: Number & Curated Label */}
          <div className="absolute inset-x-0 top-0 z-20 p-5 flex justify-between items-start">
            {/* Number system */}
            <div className="flex flex-col text-left">
              <span className="font-serif text-[1.5rem] font-light leading-none text-white/95 tracking-tight">
                {collection.number}
              </span>
              <span className="mt-1 text-[0.55rem] font-medium tracking-[0.15em] text-white/40 uppercase">
                {collection.collectionLabel}
              </span>
            </div>

            {/* Collection Editorial Label */}
            <span
              className="text-[0.6rem] font-semibold tracking-[0.25em] text-[rgba(200,169,107,0.95)] uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              CURATED STYLE
            </span>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col text-left">
            {/* Title — slides up slightly */}
            <p className="font-serif text-[clamp(1.5rem,2vw,1.85rem)] leading-tight tracking-[-0.01em] text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
              {collection.title}
            </p>

            {/* Secondary luxury descriptor line */}
            <p
              className="mt-2 text-[0.63rem] font-light tracking-[0.2em] text-[rgba(200,169,107,0.95)] transition-colors duration-500 uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {collection.descriptor}
            </p>

            {/* Description — reveals smoothly on hover */}
            <p
              className={[
                "overflow-hidden font-light leading-[1.6] text-[rgba(255,255,255,0)]",
                "[max-height:0px] opacity-0",
                "transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "group-hover:mt-3 group-hover:text-[rgba(255,255,255,0.65)] group-hover:[max-height:68px] group-hover:opacity-100",
                "text-[0.8rem]",
              ].join(" ")}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {collection.description}
            </p>

            {/* CTA — slides in */}
            <span
              className={[
                "mt-3 inline-flex translate-y-3 items-center gap-2 opacity-0",
                "text-[0.68rem] font-light tracking-[0.2em] text-[rgba(200,169,107,0)]",
                "transition-[transform,opacity,gap,color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "group-hover:translate-y-0 group-hover:gap-[10px] group-hover:text-[rgba(200,169,107,0.9)] group-hover:opacity-100",
              ].join(" ")}
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              <span className="uppercase">Ontdek stijl</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2" />
            </span>
          </div>

        </div>
      </article>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Collections() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="collections" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[rgba(248,246,242,0.87)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(200,169,107,0.05),transparent_50%)]" />
      <div className="site-container relative z-10">

        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={fadeUp}
          className="section-header-split mb-12"
        >
          <div className="max-w-[38rem]">
            <div className="section-label-row">
              <span className="luxe-rule" />
              <span className="eyebrow text-[#C8A96B]">Onze Collecties</span>
            </div>
            <h2 className="heading-2 mt-4 text-[#111111]">
              Ontdek uw <em className="italic text-[#C8A96B]">Droomkeuken</em>
            </h2>
            <p className="mt-5 max-w-[480px] text-[1.1rem] font-light leading-[1.75] tracking-[0.01em] text-[#5A5A5A]">
              Vier zorgvuldig samengestelde stijlwerelden — elk een unieke architectonische
              taal van materiaal, compositie en sfeer.
            </p>
          </div>
          <a
            href="#showroom"
            className="link-underline self-start text-sm text-[#111111]/72 lg:self-end"
          >
            Alle keukens bekijken
            <ArrowRight className="h-4 w-4 inline-block ml-1" />
          </a>
        </motion.div>

        {/* Luxury card grid */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerCards}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {collections.map((collection, index) => (
            <LuxuryStyleCard
              key={collection.id}
              collection={collection}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
