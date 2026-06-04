"use client";
import { useState, useMemo, useRef, useEffect } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DiamondIcon from "@mui/icons-material/Diamond";
import HandymanIcon from "@mui/icons-material/Handyman";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp, motionViewport, staggerHeader, staggerList } from "@/lib/motion";
import matConcrete from "@/assets/mat-concrete.jpg";
import { masterCategories } from "@/lib/master-config-data";
import klassiekBase from "@/assets/configurator/klassiek-base.webp";
import klassiekHotspots from "@/data/hotspots/klassiek-hotspots.json";

// Map Dutch hotspot keys from the JSON to English category IDs & display labels
const hotspotKeyToCategoryId: Record<string, string> = {
  front: "front",
  werkblad: "worktop",
  spoelbak: "sink",
  apparatuur: "appliances",
  quooker: "quooker",
  bora: "bora",
  grepen: "handles",
  verlichting: "lighting",
};

const hotspotLabels: Record<string, string> = {
  front: "Front",
  werkblad: "Werkblad",
  spoelbak: "Spoelbak",
  apparatuur: "Apparatuur",
  quooker: "Quooker",
  bora: "BORA",
  grepen: "Grepen",
  verlichting: "Verlichting",
};

function transformHotspots(json: Record<string, { x: string; y: string }>) {
  return Object.entries(json).map(([key, coords]) => ({
    id: hotspotKeyToCategoryId[key] || key,
    label: hotspotLabels[key] || key,
    x: coords.x,
    y: coords.y,
  }));
}

const klassiekHotspotPositions = transformHotspots(klassiekHotspots);

const pillarMotion =
  "duration-[500ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";

const valuePillars = [
  {
    title: "Premium Merken",
    description: "Alleen de meest toonaangevende keukenmerken van Europa",
    icon: WorkspacePremiumIcon,
  },
  {
    title: "Europees Vakmanschap",
    description: "Decennialange traditie van precisie en productie",
    icon: HandymanIcon,
  },
  {
    title: "Persoonlijk Advies",
    description: "Voor elk project een eigen ontwerpadviseur",
    icon: SupportAgentIcon,
  },
  {
    title: "Luxe Materialen",
    description: "Een zorgvuldig gekozen selectie van de mooiste oppervlakken",
    icon: DiamondIcon,
  },
] as const;

const experienceItems = [
  {
    icon: TuneIcon,
    label: "Interactieve materiaalconfigurator",
  },
  {
    icon: PaletteOutlinedIcon,
    label: "Persoonlijke moodboard generatie",
  },
  {
    icon: SupportAgentIcon,
    label: "Persoonlijke ontwerpconsultatie",
  },
] as const;

export function WhyWithUsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-with-us"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Luxury white overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(248,246,242,0.88)]"
      />
      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,169,107,0.06),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(200,169,107,0.04),transparent_40%)]"
      />

      <div className="site-container relative">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="mx-auto mb-20 max-w-[54rem] text-center md:mb-28"
        >
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            className="mx-auto mb-6 flex flex-col items-center gap-5"
          >
            <span
              aria-hidden="true"
              className="block h-px w-14 bg-[linear-gradient(90deg,transparent,rgba(200,169,107,0.55),transparent)]"
            />
            <span className="eyebrow">Onze belofte</span>
          </motion.div>

          <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
            Waarom samenstellen met ons
          </motion.h2>

          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            className="body-lg mx-auto mt-7 max-w-[32rem] font-light text-[var(--text-soft)]"
          >
            Wij geloven dat keukenontwerp net zo verfijnd moet aanvoelen als het eindresultaat.
          </motion.p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerList}
          className="mx-auto grid max-w-[1180px] gap-y-14 sm:grid-cols-2 sm:gap-x-10 md:gap-x-12 lg:grid-cols-4 lg:gap-x-14 xl:gap-x-16"
        >
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                variants={reduceMotion ? undefined : fadeUp}
                className={[
                  "group relative px-4 text-center sm:px-6 lg:px-8",
                  pillarMotion,
                  "transition-transform hover:-translate-y-1 focus-within:-translate-y-1",
                  index % 2 === 1 ? "sm:border-l sm:border-[rgba(200,169,107,0.15)]" : "",
                  index > 0 ? "lg:border-l lg:border-[rgba(200,169,107,0.15)]" : "",
                ].join(" ")}
              >
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute inset-x-4 top-1/2 -z-10 h-28 -translate-y-1/2 rounded-full",
                    "bg-[radial-gradient(circle,rgba(200,169,107,0.14)_0%,transparent_72%)] opacity-0",
                    pillarMotion,
                    "transition-opacity group-hover:opacity-100 group-focus-within:opacity-100",
                  ].join(" ")}
                />

                <div className="mx-auto mb-7 flex justify-center">
                  <span
                    className={[
                      "inline-flex h-14 w-14 items-center justify-center text-[#C8A96B]",
                      pillarMotion,
                      "transition-transform group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5",
                    ].join(" ")}
                  >
                    <Icon sx={{ fontSize: 28, color: "#C8A96B" }} />
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="mx-auto mb-5 block h-px w-8 bg-[rgba(200,169,107,0.45)]"
                />

                <h3 className="font-serif text-[1.2rem] leading-[1.35] tracking-[-0.02em] text-[var(--foreground)] transition-colors duration-500 group-hover:text-[#0a0a0a] group-focus-within:text-[#0a0a0a]">
                  {pillar.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[15.5rem] text-[0.875rem] font-light leading-[1.75] tracking-[0.01em] text-[#666666] transition-colors duration-500 group-hover:text-[#4a4a4a] group-focus-within:text-[#4a4a4a]">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


function HotspotTooltip({
  active,
  x,
  y,
  title,
  description,
  viewportSize,
}: {
  active: boolean;
  x: string;
  y: string;
  title: string;
  description: string;
  viewportSize: { width: number; height: number };
}) {
  const px = parseFloat(x);
  const py = parseFloat(y);

  const hx = (px / 100) * viewportSize.width;
  const hy = (py / 100) * viewportSize.height;

  const placement = useMemo(() => {
    const top = py;
    const bottom = 100 - py;
    const left = px;
    const right = 100 - px;

    let dir: "top" | "bottom" | "left" | "right" = "top";
    let max = top;

    if (bottom > max) {
      max = bottom;
      dir = "bottom";
    }
    if (left > max) {
      max = left;
      dir = "left";
    }
    if (right > max) {
      max = right;
      dir = "right";
    }

    return dir;
  }, [px, py]);

  const cardWidth = 195;
  const margin = 12;
  const cardOffset = 36;
  const mid = 20;

  let cardStyle: React.CSSProperties = {};
  let pathD = "";
  let offsetX = 0;
  let offsetY = 0;

  if (placement === "top" || placement === "bottom") {
    const halfW = cardWidth / 2;
    if (hx - halfW < margin) {
      offsetX = margin - (hx - halfW);
    } else if (hx + halfW > viewportSize.width - margin) {
      offsetX = (viewportSize.width - margin) - (hx + halfW);
    }
  } else if (placement === "left" || placement === "right") {
    const halfH = 45;
    if (hy - halfH < margin) {
      offsetY = margin - (hy - halfH);
    } else if (hy + halfH > viewportSize.height - margin) {
      offsetY = (viewportSize.height - margin) - (hy + halfH);
    }
  }

  if (placement === "top") {
    cardStyle = {
      bottom: `${cardOffset}px`,
      left: "0px",
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`,
    };
    const R = Math.min(6, Math.abs(offsetX) / 2);
    if (R < 1) {
      pathD = `M 0 0 V -${cardOffset}`;
    } else {
      const dir = offsetX > 0 ? 1 : -1;
      pathD = `M 0 0 V -${mid - R} Q 0 -${mid} ${dir * R} -${mid} H ${offsetX - dir * R} Q ${offsetX} -${mid} ${offsetX} ${-mid - R} V -${cardOffset}`;
    }
  } else if (placement === "bottom") {
    cardStyle = {
      top: `${cardOffset}px`,
      left: "0px",
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`,
    };
    const R = Math.min(6, Math.abs(offsetX) / 2);
    if (R < 1) {
      pathD = `M 0 0 V ${cardOffset}`;
    } else {
      const dir = offsetX > 0 ? 1 : -1;
      pathD = `M 0 0 V ${mid - R} Q 0 ${mid} ${dir * R} ${mid} H ${offsetX - dir * R} Q ${offsetX} ${mid} ${offsetX} ${mid + R} V ${cardOffset}`;
    }
  } else if (placement === "left") {
    cardStyle = {
      right: `${cardOffset}px`,
      top: "0px",
      transform: `translate(0px, calc(-50% + ${offsetY}px))`,
    };
    const R = Math.min(6, Math.abs(offsetY) / 2);
    if (R < 1) {
      pathD = `M 0 0 H -${cardOffset}`;
    } else {
      const dir = offsetY > 0 ? 1 : -1;
      pathD = `M 0 0 H -${mid - R} Q -${mid} 0 -${mid} ${dir * R} V ${offsetY - dir * R} Q -${mid} ${offsetY} ${-mid - R} ${offsetY} H -${cardOffset}`;
    }
  } else if (placement === "right") {
    cardStyle = {
      left: `${cardOffset}px`,
      top: "0px",
      transform: `translate(0px, calc(-50% + ${offsetY}px))`,
    };
    const R = Math.min(6, Math.abs(offsetY) / 2);
    if (R < 1) {
      pathD = `M 0 0 H ${cardOffset}`;
    } else {
      const dir = offsetY > 0 ? 1 : -1;
      pathD = `M 0 0 H ${mid - R} Q ${mid} 0 ${mid} ${dir * R} V ${offsetY - dir * R} Q ${mid} ${offsetY} ${mid + R} ${offsetY} H ${cardOffset}`;
    }
  }

  const dotCX = placement === "top" || placement === "bottom" ? offsetX : (placement === "left" ? -cardOffset : cardOffset);
  const dotCY = placement === "left" || placement === "right" ? offsetY : (placement === "top" ? -cardOffset : cardOffset);

  return (
    <div className="absolute pointer-events-none z-50" style={{ left: 0, top: 0 }}>
      <svg
        className="absolute pointer-events-none overflow-visible"
        style={{ left: 0, top: 0, width: 0, height: 0, overflow: "visible" }}
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          strokeOpacity="0.55"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          exit={{ pathLength: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx={dotCX}
          cy={dotCY}
          r="1.5"
          fill="#D4AF37"
          fillOpacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ delay: 0.15, duration: 0.2 }}
        />
      </svg>

      <div
        className="absolute pointer-events-none"
        style={cardStyle}
      >
        <motion.div
          className="pointer-events-auto bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-3.5 py-2.5 text-left"
          style={{ width: cardWidth }}
          initial={{ opacity: 0, y: placement === "top" ? 8 : (placement === "bottom" ? -8 : 0), x: placement === "left" ? 8 : (placement === "right" ? -8 : 0) }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: placement === "top" ? 8 : (placement === "bottom" ? -8 : 0), x: placement === "left" ? 8 : (placement === "right" ? -8 : 0) }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="block text-[8px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] mb-1">
              CONFIGURATIE
            </span>
            <h4 className="font-serif text-[12px] font-semibold leading-snug text-white tracking-[-0.01em] uppercase">
              {title}
            </h4>
            <div className="h-px w-full bg-[rgba(212,175,55,0.1)] my-1.5" />
            <p className="text-[10px] leading-[1.5] text-zinc-400 normal-case">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ShowroomJourneySection() {
  const reduceMotion = useReducedMotion();
  const [activeHotspot, setActiveHotspot] = useState<number>(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [viewportSize, setViewportSize] = useState({ width: 600, height: 450 });
  const mockupViewportRef = useRef<HTMLDivElement | null>(null);

  const [selections, setSelections] = useState<Record<string, { id: string; color: string; name: string }>>({
    front: { id: "cashmere", color: "#C4B49A", name: "Cashmere" },
    worktop: { id: "marble-white", color: "#F2EFE8", name: "Wit marmer" },
    sink: { id: "sink-stainless", color: "#C8C8C8", name: "RVS" },
    appliances: { id: "miele", color: "#F0F0F0", name: "Miele" },
    quooker: { id: "quooker-gold", color: "#B08D57", name: "Goud" },
    bora: { id: "bora-pro", color: "#D0D0D0", name: "BORA Pro" },
    handles: { id: "handle-none", color: "#E0E0E0", name: "Greeploos" },
    lighting: { id: "light-recessed", color: "#F5F0E8", name: "Inbouw led" },
  });

  const hotspotsData = klassiekHotspotPositions.map((h, index) => ({
    ...h,
    delay: 0.6 + index * 0.1,
  }));

  useEffect(() => {
    const viewport = mockupViewportRef.current;
    if (!viewport) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setViewportSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, []);

  const activeHotspotId = hotspotsData[activeHotspot].id;
  const currentCategory = masterCategories.find((c) => c.id === activeHotspotId);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Concrete texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${matConcrete})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.90)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,107,0.05),transparent_45%)]"
      />
      <div className="site-container relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center">
          <div className="relative">
            {/* The Badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={motionViewport}
              className="absolute -top-3 left-6 md:left-8 z-20"
            >
              <span className="rounded-full border border-[#C8A96B]/30 bg-[#111111] px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#C8A96B] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                Premium Configurator
              </span>
            </motion.div>

            {/* The Configurator Mockup Frame */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:rounded-[36px] border border-[#C8A96B]/30 bg-[#111111] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] flex flex-col"
            >
              {/* Fake Header */}
              <div className="flex h-8 md:h-10 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                  <div className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="text-[0.55rem] md:text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
                  Keuken Centrum
                </div>
                <div className="w-8" />
              </div>

              {/* Fake Body */}
              <div className="flex flex-1 overflow-hidden">
                {/* Image Area */}
                <div ref={mockupViewportRef} className="relative flex-1 bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={klassiekBase}
                    alt="Klassieke keuken configurator"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  {/* Hotspots */}
                  <div className="absolute inset-0">
                    {hotspotsData.map((h, i) => {
                      const isActive = activeHotspot === i;
                      const isHovered = hoveredCategory === h.id;
                      const anyHovered = hoveredCategory !== null;
                      const visible = isHovered || isActive;

                      const selectedOption = selections[h.id];
                      const fullCategory = masterCategories.find((c) => c.id === h.id);
                      const fullOption = selectedOption
                        ? fullCategory?.options.find((o) => o.id === selectedOption.id)
                        : null;

                      return (
                        <div
                          key={h.id}
                          className={`absolute ${isActive || isHovered ? "z-30" : "z-10"}`}
                          style={{ left: h.x, top: h.y }}
                          data-hotspot="true"
                          onMouseEnter={() => setHoveredCategory(h.id)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <button
                            type="button"
                            onClick={() => setActiveHotspot(i)}
                            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                              transition: "opacity 0.3s ease",
                              opacity: anyHovered && !isHovered ? 0.3 : 1,
                            }}
                            aria-label={`Configureer ${h.label}`}
                          >
                            {/* Multi-layer premium hotspot – identical to configure.tsx */}
                            <div
                              className="relative flex items-center justify-center"
                              style={{
                                width: 32,
                                height: 32,
                                transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                                transform: isHovered ? "scale(1.25)" : "scale(1)",
                              }}
                            >
                              {/* Layer 4: Outer halo */}
                              <span
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                  background: "rgba(212,175,55,0.10)",
                                  filter: "blur(8px)",
                                  boxShadow:
                                    isHovered || isActive
                                      ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                                      : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                                  animation:
                                    !isHovered && !isActive
                                      ? "hotspotBreathe 3s ease-in-out infinite"
                                      : "none",
                                  transition: "box-shadow 0.2s ease",
                                }}
                              />

                              {/* Layer 3: Gold ring */}
                              <span
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                  width: 18,
                                  height: 18,
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  border: `2px solid ${
                                    isHovered || isActive ? "#D4AF37" : "rgba(212,175,55,0.85)"
                                  }`,
                                  backgroundColor:
                                    isHovered || isActive
                                      ? "rgba(212,175,55,0.12)"
                                      : "rgba(0,0,0,0.45)",
                                  backdropFilter: "blur(4px)",
                                  transition: "all 0.2s ease",
                                }}
                              />

                              {/* Layer 1+2: Center dot – color reflects selection */}
                              <span
                                className="relative z-10 rounded-full"
                                style={{
                                  width: 6,
                                  height: 6,
                                  backgroundColor: selectedOption?.color ?? "#FFFFFF",
                                  border: selectedOption?.color
                                    ? "1px solid rgba(255,255,255,0.6)"
                                    : "none",
                                  boxShadow: "0 0 4px rgba(255,255,255,0.5)",
                                  transition: "all 0.2s ease",
                                }}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {visible && (
                              <HotspotTooltip
                                active={true}
                                x={h.x}
                                y={h.y}
                                title={h.label}
                                description={
                                  fullOption
                                    ? fullOption.description || fullOption.name
                                    : `Klik om de mogelijkheden voor uw ${h.label.toLowerCase()} te ontdekken.`
                                }
                                viewportSize={viewportSize}
                              />
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Sidebar – mirrors configure.tsx layout */}
                <div className="w-[32%] md:w-[28%] shrink-0 border-l border-white/10 bg-[#0F0F0F] flex flex-col overflow-hidden">

                  {/* Category tab strip */}
                  <div className="flex flex-wrap gap-[3px] border-b border-white/[0.06] p-2">
                    {hotspotsData.map((h, i) => {
                      const sel = selections[h.id];
                      const isTabActive = activeHotspot === i;
                      return (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => setActiveHotspot(i)}
                          className="inline-flex items-center gap-1 border px-1.5 py-1 transition-all duration-300"
                          style={{
                            borderColor: isTabActive
                              ? "#B08D57"
                              : sel
                              ? "rgba(176,141,87,0.35)"
                              : "rgba(255,255,255,0.08)",
                            backgroundColor: isTabActive
                              ? "rgba(176,141,87,0.1)"
                              : "transparent",
                          }}
                        >
                          {sel && (
                            <span
                              className="h-1.5 w-1.5 rounded-full border border-white/25 shrink-0"
                              style={{ backgroundColor: sel.color }}
                            />
                          )}
                          <span
                            className="text-[0.48rem] uppercase tracking-[0.13em] leading-none"
                            style={{
                              color: isTabActive
                                ? "#B08D57"
                                : sel
                                ? "rgba(247,245,242,0.65)"
                                : "rgba(247,245,242,0.3)",
                            }}
                          >
                            {h.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active category header */}
                  <div className="px-3 pt-2.5 pb-1.5">
                    <p className="text-[0.48rem] uppercase tracking-[0.2em] text-[#B08D57] mb-0.5">Kies</p>
                    <p
                      className="text-[0.72rem] text-[#F7F5F2]"
                      style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                    >
                      {currentCategory?.label ?? hotspotsData[activeHotspot].label}
                    </p>
                  </div>

                  {/* Options grid – color block + name + description */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHotspotId}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="flex-1 overflow-y-auto px-2 pb-2"
                    >
                      <div className="grid grid-cols-2 gap-[5px]">
                        {currentCategory?.options.slice(0, 4).map((option, idx) => {
                          const isSelected = selections[activeHotspotId]?.id === option.id;
                          return (
                            <motion.button
                              key={option.id}
                              type="button"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.04 }}
                              onClick={() =>
                                setSelections((prev) => ({
                                  ...prev,
                                  [activeHotspotId]: {
                                    id: option.id,
                                    color: option.color,
                                    name: option.name,
                                  },
                                }))
                              }
                              className="cursor-pointer p-1.5 text-left transition-all duration-300"
                              style={{
                                border: `1px solid ${
                                  isSelected ? "#B08D57" : "rgba(255,255,255,0.07)"
                                }`,
                                backgroundColor: isSelected
                                  ? "rgba(176,141,87,0.08)"
                                  : "rgba(255,255,255,0.02)",
                              }}
                            >
                              {/* Color block */}
                              <div
                                className="mb-1 h-8 w-full border border-white/10"
                                style={{ backgroundColor: option.color }}
                              />
                              {/* Name */}
                              <p
                                className="text-[0.54rem] font-normal tracking-[0.04em] leading-tight"
                                style={{
                                  color: isSelected
                                    ? "#B08D57"
                                    : "rgba(247,245,242,0.75)",
                                }}
                              >
                                {option.name}
                              </p>
                              {/* Description */}
                              {option.description && (
                                <p className="mt-0.5 text-[0.46rem] leading-[1.35] text-white/30">
                                  {option.description}
                                </p>
                              )}
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Footer CTA */}
                  <div className="border-t border-white/[0.06] p-2 hidden md:block">
                    <a
                      href="/brands"
                      className="flex h-7 w-full items-center justify-center rounded-[6px] bg-[#C8A96B] text-[0.52rem] font-medium uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-[#b59556]"
                    >
                      Volledig Ontwerp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={motionViewport}
              className="absolute -bottom-6 -left-2 sm:-left-6 z-30 w-[260px] sm:w-[300px] rounded-[18px] border border-[rgba(212,175,55,0.18)] bg-[rgba(9,9,9,0.95)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-[24px]"
            >
              <p className="text-[0.65rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#C8A96B]">
                Digitale Showroom
              </p>
              <p className="mt-2.5 text-[0.8rem] sm:text-[0.875rem] font-light leading-[1.65] text-zinc-300">
                Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="lg:pl-10 mt-12 lg:mt-0"
          >
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="text-[0.72rem] uppercase tracking-[0.25em] text-[#C8A96B]"
            >
              De beleving
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[34rem] text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[#111111]"
              style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 400 }}
            >
              Een showroom die naar u toe komt
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[#666666]"
            >
              Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm.
              Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog
              voordat u onze showroom bezoekt.
            </motion.p>
            <motion.div
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 h-px w-full bg-[rgba(200,169,107,0.15)]"
            />
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={motionViewport}
              variants={reduceMotion ? undefined : staggerList}
              className="mt-6 flex flex-col gap-5"
            >
              {experienceItems.map((item) => {
                const Icon = item.icon;

                return (
                <motion.div
                  key={item.label}
                  variants={reduceMotion ? undefined : fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#C8A96B]">
                    <Icon sx={{ fontSize: 18, color: "#C8A96B" }} />
                  </span>
                  <span className="text-[0.875rem] font-light leading-[1.65] text-[#555555]">
                    {item.label}
                  </span>
                </motion.div>
                );
              })}
            </motion.div>
            <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-10">
              <Button
                asChild
                className="brand-green-button group relative min-h-[3.5rem] rounded-[16px] px-[2.5rem] text-[0.8125rem] font-normal uppercase tracking-[0.15em] text-[#F5F2EC] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href="/brands" className="flex items-center gap-2">
                  <span>Start uw ontwerp</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  
                  {/* Premium Shine Swipe Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MasterJourneySections() {
  return (
    <>
      <WhyWithUsSection />
      <ShowroomJourneySection />
    </>
  );
}
