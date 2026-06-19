"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { PremiumPillButton } from "@/components/ui/premium-pill-button";
import { kc } from "@/lib/kc-data";
import { fadeUp, motionViewport } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const collections = [
  {
    id: "modern",
    title: "Modern Wonen",
    number: "01",
    collectionLabel: "MODERNE COLLECTIE",
    descriptor: "Architecturaal · Minimaal · Tijdloos",
    description: "Slanke lijnen en functionele elegantie voor het hedendaagse leven.",
    image: kc.styles[1].img,
  },
  {
    id: "klassiek",
    title: "Klassieke Elegantie",
    number: "02",
    collectionLabel: "KLASSIEKE COLLECTIE",
    descriptor: "Warm · Elegant · Verfijnd",
    description: "Tijdloze proporties en rijke materialen die generaties meegaan.",
    image: kc.styles[2].img,
  },
  {
    id: "landelijk",
    title: "Landelijk Erfgoed",
    number: "03",
    collectionLabel: "LANDELIJKE COLLECTIE",
    descriptor: "Natuurlijk · Authentiek · Uitnodigend",
    description: "Warme texturen en ambachtelijke details voor een thuis gevoel.",
    image: kc.styles[2].img,
  },
  {
    id: "industrieel",
    title: "Industrieel Atelier",
    number: "04",
    collectionLabel: "INDUSTRIËLE COLLECTIE",
    descriptor: "Krachtig · Karaktervol · Hedendaags",
    description: "Rauwe materialen en grafische vormen met een eigenzinnig karakter.",
    image: kc.styles[3].img,
  },
] as const;

// ─── Card ─────────────────────────────────────────────────────────────────────

type CollectionItem = (typeof collections)[number];

function GalleryCard({ item }: { item: CollectionItem }) {
  return (
    <article className="collection-gallery-card group" draggable={false}>
      <div className="collection-gallery-card__media">
        <img src={item.image} alt={item.title} loading="lazy" draggable={false} />
        <div className="collection-gallery-card__media-fade" aria-hidden="true" />
        <div className="collection-gallery-card__media-hover-fade" aria-hidden="true" />
        <div className="collection-gallery-card__shine" aria-hidden="true" />

        <div className="collection-gallery-card__badges">
          <div>
            <span className="collection-gallery-card__number">{item.number}</span>
            <span
              className="mt-1.5 block text-[0.46rem] font-medium uppercase tracking-[0.18em] text-white/35"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.collectionLabel}
            </span>
          </div>
          <span className="collection-gallery-card__tag">Geselecteerd</span>
        </div>
      </div>

      <div className="collection-gallery-card__body">
        <h3 className="collection-gallery-card__title">{item.title}</h3>
        <p className="collection-gallery-card__descriptor">{item.descriptor}</p>
        <p className="collection-gallery-card__description">{item.description}</p>
        <div className="collection-gallery-card__rule" aria-hidden="true" />
      </div>

      <div className="collection-gallery-card__cta-wrap">
        <a href="#showroom" className="collection-gallery-card__cta">
          <span>Ontdek stijl</span>
          <span className="collection-gallery-card__cta-badge" aria-hidden="true">
            <ArrowRight className="collection-gallery-card__cta-icon" />
          </span>
        </a>
      </div>
    </article>
  );
}

// ─── Scroll Gallery ───────────────────────────────────────────────────────────

const SPEED = 26; // px/s — slow, premium
const CARD_W_PX = 300;
const CARD_H_PX = 472;
const CARD_GAP_PX = 24;

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
    <div className="relative mt-16 pb-8">
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
        className="overflow-x-hidden overflow-y-visible py-8 pb-14"
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
              className="shrink-0 pt-2 pb-8"
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
            className="max-w-[38rem]"
          >
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
            <PremiumPillButton
              href="#showroom"
              variant="blue"
              size="sm"
              className="mt-7 w-fit"
            >
              Alle keukens bekijken
            </PremiumPillButton>
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
