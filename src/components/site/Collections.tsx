"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    descriptor: "Architectural · Minimal · Timeless",
    description: "Slanke lijnen en functionele elegantie voor het hedendaagse leven.",
    image: kc.styles[1].img,
  },
  {
    id: "klassiek",
    title: "Klassiek Elegance",
    number: "02",
    collectionLabel: "KLASSIEK COLLECTION",
    descriptor: "Warm · Elegant · Refined",
    description: "Tijdloze proporties en rijke materialen die generaties meegaan.",
    image: kc.styles[2].img,
  },
  {
    id: "landelijk",
    title: "Landelijk Heritage",
    number: "03",
    collectionLabel: "LANDELIJK COLLECTION",
    descriptor: "Natural · Authentic · Inviting",
    description: "Warme texturen en ambachtelijke details voor een thuis gevoel.",
    image: kc.styles[2].img,
  },
  {
    id: "industrieel",
    title: "Industrieel Studio",
    number: "04",
    collectionLabel: "INDUSTRIEEL COLLECTION",
    descriptor: "Bold · Characterful · Contemporary",
    description: "Rauwe materialen en grafische vormen met een eigenzinnig karakter.",
    image: kc.styles[3].img,
  },
] as const;

// ─── Card ─────────────────────────────────────────────────────────────────────

type CollectionItem = (typeof collections)[number];

function GalleryCard({ item }: { item: CollectionItem }) {
  return (
    <article
      className={[
        "group relative h-full w-full cursor-default select-none overflow-hidden",
        "rounded-[22px] bg-[#0A0C0F]",
        "border border-[rgba(255,255,255,0.06)]",
        "shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)]",
        "transition-[border-color,box-shadow] duration-500 ease-out",
        "hover:border-[rgba(35,185,196,0.22)]",
        "hover:shadow-[0_24px_64px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(35,185,196,0.08)]",
      ].join(" ")}
      draggable={false}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />

      {/* Top vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

      {/* Bottom vignette — lightens on hover for editorial reveal */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black/92 via-black/52 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      {/* TOP LABEL */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
        <div>
          <span className="block font-serif text-[1.35rem] font-light leading-none tracking-tight text-white/90">
            {item.number}
          </span>
          <span className="mt-1 block text-[0.48rem] font-medium uppercase tracking-[0.18em] text-white/30">
            {item.collectionLabel}
          </span>
        </div>
        <span
          className="text-[0.52rem] font-semibold uppercase tracking-[0.24em] text-[rgba(200,169,107,0.70)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Curated
        </span>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-6 text-left">
        {/* Title — lifts 2px on hover */}
        <p className="font-serif text-[1.55rem] font-light leading-tight tracking-[-0.01em] text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
          {item.title}
        </p>

        {/* Descriptor */}
        <p
          className="mt-2 text-[0.58rem] font-light uppercase tracking-[0.20em] text-[rgba(200,169,107,0.80)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.descriptor}
        </p>

        {/* Description — unfolds on hover */}
        <p
          className="overflow-hidden text-[rgba(255,255,255,0)] opacity-0 [max-height:0px] font-light leading-[1.65] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-3 group-hover:text-[rgba(255,255,255,0.58)] group-hover:opacity-100 group-hover:[max-height:52px] text-[0.77rem]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.description}
        </p>

        {/* CTA arrow — slides in */}
        <span
          className="mt-3 inline-flex translate-y-2 items-center gap-2 text-[0.62rem] font-light uppercase tracking-[0.18em] text-[rgba(35,185,196,0)] opacity-0 transition-[transform,opacity,color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:text-[rgba(35,185,196,0.82)] group-hover:opacity-100"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>Ontdek stijl</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1.5" />
        </span>
      </div>
    </article>
  );
}

// ─── Scroll Gallery ───────────────────────────────────────────────────────────

const SPEED = 26; // px/s — slow, premium
const CARD_W_PX = 300;
const CARD_H_PX = 410;
const CARD_GAP_PX = 20;

function InfiniteGallery({ reduceMotion }: { reduceMotion: boolean | null }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(0);
  const pausedUntil = useRef(0);
  const drag = useRef({ active: false, startX: 0, startOffset: 0, moved: false });

  // Triple the set so the seam is always far from the viewport
  const items = [...collections, ...collections, ...collections];

  useEffect(() => {
    if (reduceMotion) return;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05); // cap delta to avoid jump after tab switch
      last = now;

      const track = trackRef.current;
      if (!track) { rafRef.current = requestAnimationFrame(tick); return; }

      const totalW = track.scrollWidth;
      const oneSetW = totalW / 3; // 3 repetitions

      if (!drag.current.active && now > pausedUntil.current) {
        offsetRef.current += SPEED * dt;
      }

      // Wrap to first set
      if (oneSetW > 0) {
        offsetRef.current = ((offsetRef.current % oneSetW) + oneSetW) % oneSetW;
      }

      track.style.transform = `translateX(${-offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduceMotion]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { active: true, startX: e.clientX, startOffset: offsetRef.current, moved: false };
    wrapRef.current?.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    offsetRef.current = drag.current.startOffset - dx;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    pausedUntil.current = performance.now() + 1200;
    wrapRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative mt-16">
      {/* Edge fades — mask-image approach so they adapt to any background */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 md:w-52"
        style={{ background: "linear-gradient(to right, #F8F6F2 0%, rgba(248,246,242,0) 100%)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 md:w-52"
        style={{ background: "linear-gradient(to left, #F8F6F2 0%, rgba(248,246,242,0) 100%)" }}
      />

      <div
        ref={wrapRef}
        className="overflow-hidden py-6"
        style={{
          cursor: drag.current.active ? "grabbing" : "grab",
          touchAction: "pan-y",
          userSelect: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => { pausedUntil.current = Infinity; }}
        onMouseLeave={() => { pausedUntil.current = 0; }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${CARD_GAP_PX}px`, paddingLeft: "32px", paddingRight: "32px" }}
        >
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="shrink-0"
              style={{ width: `${CARD_W_PX}px`, height: `${CARD_H_PX}px` }}
            >
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Collections() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="collections" className="relative overflow-hidden py-20 md:py-28">
      {/* Concrete texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${matConcrete})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[rgba(248,246,242,0.88)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(35,185,196,0.04),transparent_50%)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="site-container">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="section-header-split"
          >
            <div className="max-w-[38rem]">
              <div className="section-label-row">
                <span className="luxe-rule" />
                <span className="eyebrow text-[#C8A96B]">Onze Collecties</span>
              </div>
              <h2 className="heading-2 mt-4">
                Ontdek uw <em className="italic" style={{ color: "#23B9C4" }}>Droomkeuken</em>
              </h2>
              <p className="mt-5 max-w-[480px] text-[1.05rem] font-light leading-[1.75] tracking-[0.01em] text-[#5A5A5A]">
                Vier zorgvuldig samengestelde stijlwerelden — elk een unieke architectonische
                taal van materiaal, compositie en sfeer.
              </p>
            </div>
            <a
              href="#showroom"
              className="link-underline self-start text-sm text-[#111111]/60 lg:self-end"
            >
              Alle keukens bekijken
              <ArrowRight className="ml-1 inline-block h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Infinite gallery — full viewport width */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <InfiniteGallery reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}
