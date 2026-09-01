import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FlowActionBar } from "@/components/configurator/FlowActionBar";
import { ArrowLeft, ArrowRight, Circle, Search } from "@/components/ui/icons";
import { useConfigurator } from "@/context/configurator-context";
import logoKeuken from "@/assets/logo-keuken-centrum-transparent.png";
import {
  masterBrands,
  masterCategories,
  masterHotspotPositions,
  masterStyles,
} from "@/lib/master-config-data";

// Import base configurator images for each style
import modernBase from "@/assets/configurator/modern-base.webp";
import klassiekBase from "@/assets/configurator/klassiek-base.webp";
import landelijkBase from "@/assets/configurator/landelijk-base.webp";
import industrieelBase from "@/assets/configurator/industrieel-base.webp";

// Import style-specific hotspot JSON configurations
import modernHotspots from "@/data/hotspots/modern-hotspots.json";
import klassiekHotspots from "@/data/hotspots/klassiek-hotspots.json";
import landelijkHotspots from "@/data/hotspots/landelijk-hotspots.json";
import industrieelHotspots from "@/data/hotspots/industrieel-hotspots.json";

const configuratorImages = {
  modern: modernBase,
  klassiek: klassiekBase,
  landelijk: landelijkBase,
  industrieel: industrieelBase,
};

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
  front: "Frontpaneel",
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

const hotspotMap = {
  modern: transformHotspots(modernHotspots),
  klassiek: transformHotspots(klassiekHotspots),
  landelijk: transformHotspots(landelijkHotspots),
  industrieel: transformHotspots(industrieelHotspots),
};

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

  // Hotspot pixel coordinates relative to the image viewport
  const hx = (px / 100) * viewportSize.width;
  const hy = (py / 100) * viewportSize.height;

  const placement = useMemo(() => {
    // Distances to edges
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

  // Small compact card layout (210px width)
  const cardWidth = 210;
  const margin = 12;
  const cardOffset = 40;
  const mid = 24;

  let cardStyle: React.CSSProperties = {};
  let pathD = "";
  let offsetX = 0;
  let offsetY = 0;

  if (placement === "top" || placement === "bottom") {
    const halfW = cardWidth / 2;
    if (hx - halfW < margin) {
      offsetX = margin - (hx - halfW);
    } else if (hx + halfW > viewportSize.width - margin) {
      offsetX = viewportSize.width - margin - (hx + halfW);
    }
  } else if (placement === "left" || placement === "right") {
    const halfH = 50; // estimated half height of 100px card
    if (hy - halfH < margin) {
      offsetY = margin - (hy - halfH);
    } else if (hy + halfH > viewportSize.height - margin) {
      offsetY = viewportSize.height - margin - (hy + halfH);
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

  // Draw end-dot coordinates
  const dotCX =
    placement === "top" || placement === "bottom"
      ? offsetX
      : placement === "left"
        ? -cardOffset
        : cardOffset;
  const dotCY =
    placement === "left" || placement === "right"
      ? offsetY
      : placement === "top"
        ? -cardOffset
        : cardOffset;

  return (
    <div className="absolute pointer-events-none z-50" style={{ left: 0, top: 0 }}>
      {/* SVG Connector Line */}
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
        {/* Dynamic anchor dot at card attachment point */}
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

      {/* Floating Card Wrapper */}
      <div className="absolute pointer-events-none" style={cardStyle}>
        <motion.div
          className="pointer-events-auto bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-4 py-3 text-left"
          style={{ width: cardWidth }}
          initial={{
            opacity: 0,
            y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
            x: placement === "left" ? 8 : placement === "right" ? -8 : 0,
          }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
            x: placement === "left" ? 8 : placement === "right" ? -8 : 0,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col">
            <span className="mb-1.5 block text-[9px] font-semibold tracking-[0.06em] text-[#D4AF37]">
              CONFIGURATIE
            </span>
            <h4 className="font-serif text-[13px] font-semibold leading-snug tracking-[-0.01em] text-white">
              {title}
            </h4>
            <div className="h-px w-full bg-[rgba(212,175,55,0.1)] my-2" />
            <p className="text-[11px] leading-[1.6] text-zinc-400 normal-case">{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/configure")({
  component: ConfigurePage,
});

function ConfigurePage() {
  const navigate = useNavigate();
  const { config, setSelection } = useConfigurator();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 1000, height: 600 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const imageViewportRef = useRef<HTMLDivElement | null>(null);
  const hasDraggedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
      }
      const handleTouch = () => {
        setIsTouch(true);
        window.removeEventListener("touchstart", handleTouch);
      };
      window.addEventListener("touchstart", handleTouch, { passive: true });
      return () => window.removeEventListener("touchstart", handleTouch);
    }
  }, []);

  useEffect(() => {
    const viewport = imageViewportRef.current;
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

  useEffect(() => {
    if (!config.brand) navigate({ to: "/brands" });
    else if (!config.style) navigate({ to: "/style" });
  }, [config.brand, config.style, navigate]);

  const activeCategoryData = masterCategories.find((item) => item.id === activeCategory) ?? null;
  const completedCount = Object.keys(config.selections).length;
  const totalCategories = masterCategories.length;
  const selectedBrand = useMemo(
    () => masterBrands.find((item) => item.id === config.brand) ?? null,
    [config.brand],
  );
  const selectedStyle = useMemo(
    () => masterStyles.find((item) => item.id === config.style) ?? null,
    [config.style],
  );

  const selectedStyleKey = selectedStyle?.id ?? "";

  const activeImage =
    (selectedStyleKey
      ? configuratorImages[selectedStyleKey.toLowerCase() as keyof typeof configuratorImages]
      : null) ?? modernBase;

  const activeHotspots =
    (selectedStyleKey
      ? hotspotMap[selectedStyleKey.toLowerCase() as keyof typeof hotspotMap]
      : null) ?? hotspotMap.modern;

  const zoomedIn = zoomLevel > 1.001;

  function clampPan(nextX: number, nextY: number, scale = zoomLevel) {
    const viewport = imageViewportRef.current;
    if (!viewport || scale <= 1) {
      return { x: 0, y: 0 };
    }

    const maxX = (viewport.clientWidth * scale - viewport.clientWidth) / 2;
    const maxY = (viewport.clientHeight * scale - viewport.clientHeight) / 2;

    return {
      x: Math.min(Math.max(nextX, -maxX), maxX),
      y: Math.min(Math.max(nextY, -maxY), maxY),
    };
  }

  function updateZoom(nextScale: number) {
    const clampedScale = Math.min(Math.max(nextScale, 1), 2.6);
    setZoomLevel(clampedScale);
    setPanOffset((current) => clampPan(current.x, current.y, clampedScale));
  }

  function resetZoomView() {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }

  function zoomToPointer(clientX: number, clientY: number, nextScale: number) {
    const viewport = imageViewportRef.current;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const offsetX = clientX - rect.left - rect.width / 2;
    const offsetY = clientY - rect.top - rect.height / 2;
    const clampedScale = Math.min(Math.max(nextScale, 1), 2.6);
    const nextPan = clampPan(
      -offsetX * (clampedScale - 1),
      -offsetY * (clampedScale - 1),
      clampedScale,
    );

    setZoomLevel(clampedScale);
    setPanOffset(nextPan);
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="fixed inset-x-0 top-0 z-[1300] h-0.5">
        <motion.div
          className="h-full bg-[#8BC540]"
          animate={{ scaleX: completedCount / totalCategories }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left center" }}
        />
      </div>

      <header className="configure-app-header fixed inset-x-0 top-0 z-[1200] flex h-[60px] items-center justify-between border-b border-[rgba(139,197,64,0.16)] bg-[#111411] px-3 shadow-[0_12px_34px_-24px_rgba(0,0,0,0.9)] md:px-5">
        <button
          type="button"
          onClick={() => navigate({ to: "/style" })}
          className="inline-flex min-w-0 items-center gap-1 px-1.5 py-0.5 text-[0.72rem] tracking-[0.03em] text-[rgba(247,245,242,0.68)] transition-colors duration-300 hover:text-[#F7F5F2]"
        >
          <ArrowLeft className="h-[14px] w-[14px]" />
          Terug
        </button>

        <div className="flex items-center">
          <img src={logoKeuken} alt="KeukenCentrum.nl" className="h-6 w-auto md:h-7" />
        </div>

        <p className="text-[0.68rem] tracking-[0.04em] text-[rgba(247,245,242,0.5)]">
          Samenstellen
        </p>
      </header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`configure-layout flex min-h-screen flex-col pt-[62px] md:h-[calc(100vh-62px)] md:flex-row ${
          completedCount > 0 ? "pb-28 md:pb-32" : ""
        }`}
      >
        <div
          ref={imageViewportRef}
          className="configure-image-stage sticky top-[60px] z-20 h-[36svh] min-h-[260px] max-h-[380px] flex-none overflow-hidden bg-[#0A0A0A] md:static md:h-[calc(100vh-62px)] md:max-h-none md:basis-[68%]"
          onWheel={(event) => {
            event.preventDefault();
            const nextZoom = zoomLevel + (event.deltaY < 0 ? 0.14 : -0.14);
            updateZoom(nextZoom);
          }}
          onPointerMove={(event) => {
            if (!isDragging || zoomLevel <= 1) return;
            hasDraggedRef.current = true;
            const nextX = panStartRef.current.x + (event.clientX - dragStartRef.current.x);
            const nextY = panStartRef.current.y + (event.clientY - dragStartRef.current.y);
            setPanOffset(clampPan(nextX, nextY));
          }}
          onPointerUp={(event) => {
            const target = event.target as HTMLElement;
            if (target.closest("[data-hotspot='true']")) {
              setIsDragging(false);
              return;
            }

            if (zoomedIn && !hasDraggedRef.current) {
              resetZoomView();
            }

            setIsDragging(false);
          }}
          onPointerCancel={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
        >
          <motion.div
            animate={{ scale: zoomLevel, x: panOffset.x, y: panOffset.y }}
            transition={{ duration: isDragging ? 0.02 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full touch-none"
            style={{ cursor: isDragging ? "grabbing" : zoomedIn ? "zoom-out" : "zoom-in" }}
            onPointerDown={(event) => {
              const target = event.target as HTMLElement;
              if (target.closest("[data-hotspot='true']")) return;
              hasDraggedRef.current = false;
              dragStartRef.current = { x: event.clientX, y: event.clientY };
              panStartRef.current = panOffset;
              if (zoomLevel <= 1 && !isTouch) {
                zoomToPointer(event.clientX, event.clientY, 1.6);
                return;
              }

              setIsDragging(true);
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${activeImage})` }}
            />

            {activeHotspots.map((hotspot, index) => {
              const selected = config.selections[hotspot.id];
              const active = activeCategory === hotspot.id;
              const isHovered = hoveredCategory === hotspot.id;
              const anyHovered = hoveredCategory !== null;
              const visible = isHovered && !isTouch;

              // Dot size: 18 default → 22 hover → 24 active
              const dotSize = active ? 24 : isHovered ? 22 : 18;

              const fullCategory = masterCategories.find((c) => c.id === hotspot.id);
              const fullOption = selected
                ? fullCategory?.options.find((o) => o.id === selected.id)
                : null;

              return (
                <motion.div
                  key={hotspot.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.22 + index * 0.08,
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className={`absolute ${active || isHovered ? "z-30" : "z-20"}`}
                  style={{ left: hotspot.x, top: hotspot.y }}
                  data-hotspot="true"
                  onMouseEnter={() => setHoveredCategory(hotspot.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    type="button"
                    onClick={() => setActiveCategory(active ? null : hotspot.id)}
                    className="configure-hotspot absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full"
                    style={{
                      transition: "opacity 0.3s ease",
                      opacity: anyHovered && !isHovered ? 0.3 : 1,
                    }}
                    aria-label={`Configureer ${hotspot.label}`}
                  >
                    {/* Multi-layer premium hotspot */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: 32,
                        height: 32,
                        transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                        transform: isHovered ? "scale(1.25)" : "scale(1)",
                      }}
                    >
                      {/* Layer 4: Outer halo + white glow */}
                      <span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: "rgba(212,175,55,0.10)",
                          filter: "blur(8px)",
                          boxShadow:
                            isHovered || active
                              ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                              : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                          animation:
                            !isHovered && !active
                              ? "hotspotBreathe 4.5s ease-in-out infinite"
                              : "none",
                          transition: "box-shadow 0.2s ease",
                        }}
                      />

                      {/* Layer 3: Gold ring (18px) */}
                      <span
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          width: 18,
                          height: 18,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          border: `2px solid ${isHovered || active ? "#D4AF37" : "rgba(212,175,55,0.85)"}`,
                          backgroundColor:
                            isHovered || active ? "rgba(212,175,55,0.12)" : "rgba(0,0,0,0.45)",
                          backdropFilter: "blur(4px)",
                          transition: "all 0.2s ease",
                        }}
                      />

                      {/* Layer 2 + 1: Center dot (6px) */}
                      <span
                        className="relative z-10 rounded-full"
                        style={{
                          width: 6,
                          height: 6,
                          backgroundColor: selected?.color ?? "#FFFFFF",
                          border: selected?.color ? "1px solid rgba(255,255,255,0.6)" : "none",
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
                        x={hotspot.x}
                        y={hotspot.y}
                        title={hotspot.label}
                        description={
                          selected
                            ? fullOption?.description || selected.name
                            : `Klik om de mogelijkheden voor uw ${hotspot.label.toLowerCase()} te ontdekken.`
                        }
                        viewportSize={viewportSize}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" />

          <div className="configure-zoom-controls absolute bottom-3 right-3 flex items-center gap-2 md:bottom-5 md:right-5">
            <button
              type="button"
              onClick={() => updateZoom(zoomLevel - 0.2)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[13px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.82)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#8BC540] hover:bg-[rgba(139,197,64,0.3)]"
              aria-label="Uitzoomen"
            >
              <span className="text-lg leading-none">-</span>
            </button>
            <button
              type="button"
              onClick={() => updateZoom(zoomLevel + 0.2)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[13px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.82)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#8BC540] hover:bg-[rgba(139,197,64,0.3)]"
              aria-label="Inzoomen"
            >
              <span className="text-lg leading-none">+</span>
            </button>
            <button
              type="button"
              onClick={resetZoomView}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[13px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.82)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#8BC540] hover:bg-[rgba(139,197,64,0.3)]"
              aria-label="Zoom herstellen"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {zoomedIn ? (
            <div className="pointer-events-none absolute bottom-3 left-3 hidden rounded-[12px] border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.72)] px-3 py-2 text-[0.65rem] tracking-[0.04em] text-[rgba(247,245,242,0.6)] backdrop-blur-[8px] md:block">
              Sleep om details te bekijken, klik om uit te zoomen
            </div>
          ) : null}

          <div className="absolute left-3 top-3 rounded-[10px] border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.78)] px-2.5 py-1.5 backdrop-blur-[8px] md:left-5 md:top-5">
            <p className="block text-[0.6rem] tracking-[0.06em] text-[#8BC540]">Stap 03 van 05</p>
            <p className="text-[0.625rem] text-[rgba(247,245,242,0.6)]">
              {completedCount}/{totalCategories} opties samengesteld
            </p>
          </div>
        </div>

        <div className="configure-sidebar flex flex-1 flex-col overflow-y-auto border-l border-[rgba(255,255,255,0.05)] bg-[#0F0F0F] md:min-h-[calc(100vh-62px)]">
          <div className="configure-category-rail flex gap-2 overflow-x-auto border-b border-[rgba(255,255,255,0.05)] p-3">
            {masterCategories.map((category) => {
              const selected = config.selections[category.id];
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(active ? null : category.id)}
                  className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[13px] border px-3 py-2 normal-case transition-all duration-300"
                  style={{
                    borderColor: active
                      ? "#8BC540"
                      : selected
                        ? "rgba(139,197,64,0.4)"
                        : "rgba(255,255,255,0.1)",
                    backgroundColor: active ? "rgba(139,197,64,0.1)" : "transparent",
                  }}
                >
                  {selected ? (
                    <span
                      className="h-2 w-2 rounded-full border border-[rgba(255,255,255,0.3)]"
                      style={{ backgroundColor: selected.color }}
                    />
                  ) : null}
                  <span
                    className="text-[0.68rem] tracking-[0.02em]"
                    style={{
                      color: active
                        ? "#8BC540"
                        : selected
                          ? "rgba(247,245,242,0.7)"
                          : "rgba(247,245,242,0.35)",
                    }}
                  >
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className={`configure-options-panel flex-1 p-3 ${
              activeCategoryData ? "configure-options-panel--open" : ""
            }`}
          >
            <AnimatePresence mode="wait">
              {activeCategoryData ? (
                <motion.div
                  key={activeCategoryData.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="mb-0.5 block text-[0.6rem] tracking-[0.04em] text-[#8BC540]">
                        Kies
                      </p>
                      <h2
                        className="text-[1.25rem] text-[#F7F5F2]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                      >
                        {activeCategoryData.label}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(null)}
                      className="min-h-11 rounded-xl px-3 text-sm normal-case text-[rgba(247,245,242,0.55)] transition-colors duration-300 hover:text-[#F7F5F2]"
                    >
                      Sluiten
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {activeCategoryData.options.map((option, index) => {
                      const selected = config.selections[activeCategoryData.id]?.id === option.id;
                      return (
                        <motion.button
                          key={option.id}
                          type="button"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            setSelection(
                              activeCategoryData.id,
                              option.id,
                              option.name,
                              option.color,
                            );
                          }}
                          className="min-h-[118px] cursor-pointer rounded-[14px] p-2.5 text-left normal-case transition-all duration-300 active:scale-[0.98]"
                          style={{
                            border: `1px solid ${selected ? "#8BC540" : "rgba(255,255,255,0.07)"}`,
                            backgroundColor: selected
                              ? "rgba(139,197,64,0.08)"
                              : "rgba(255,255,255,0.02)",
                          }}
                        >
                          <div
                            className="mb-1.5 h-12 w-full border border-[rgba(255,255,255,0.1)]"
                            style={{ backgroundColor: option.color }}
                          />
                          <p
                            className="mb-0.5 text-[0.7rem] font-normal tracking-[0.05em]"
                            style={{ color: selected ? "#8BC540" : "rgba(247,245,242,0.75)" }}
                          >
                            {option.name}
                          </p>
                          {option.description ? (
                            <p className="text-[0.6rem] leading-[1.4] text-[rgba(247,245,242,0.3)]">
                              {option.description}
                            </p>
                          ) : null}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6 text-center"
                >
                  <p className="mb-2 block text-[0.6875rem] tracking-[0.04em] text-[rgba(247,245,242,0.25)]">
                    Configuratie
                  </p>
                  <p
                    className="text-[1rem] text-[rgba(247,245,242,0.4)]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Klik op een hotspot of categorie om uw keuken samen te stellen
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="configure-summary border-t border-[rgba(255,255,255,0.05)] bg-[#111111] p-3">
            <p className="mb-2 block text-[0.6rem] tracking-[0.04em] text-[#8BC540]">
              Uw configuratie
            </p>

            <div className="mb-3 flex flex-col gap-1">
              {[
                { label: "Merk", value: selectedBrand?.name },
                { label: "Stijl", value: selectedStyle?.name },
                ...Object.entries(config.selections).map(([categoryId, selection]) => ({
                  label:
                    masterCategories.find((item) => item.id === categoryId)?.label ?? categoryId,
                  value: selection.name,
                  color: selection.color,
                })),
              ].map((item) =>
                item.value ? (
                  <div key={item.label} className="flex items-center justify-between gap-3">
                    <p className="text-[0.6rem] tracking-[0.03em] text-[rgba(247,245,242,0.35)]">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-1">
                      {"color" in item && item.color ? (
                        <span
                          className="h-2.5 w-2.5 border border-[rgba(255,255,255,0.2)]"
                          style={{ backgroundColor: item.color }}
                        />
                      ) : null}
                      <span className="text-[0.7rem] text-[rgba(247,245,242,0.7)]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ) : null,
              )}
            </div>

            <button
              type="button"
              onClick={() => navigate({ to: "/moodboard" })}
              className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-[14px] border border-[#8BC540] bg-[#8BC540] px-4 text-[0.75rem] tracking-[0.03em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#2F5218] hover:bg-[#2F5218]"
            >
              Moodboard genereren
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {completedCount > 0 ? (
          <FlowActionBar
            overline="Voortgang"
            title={`${completedCount} van ${totalCategories} keuzes samengesteld`}
            subtitle={`${selectedBrand?.name ?? "Merk"} met ${selectedStyle?.name ?? "stijl"} is klaar om verder te gaan`}
            backLabel="Terug"
            onBack={() => navigate({ to: "/style" })}
            continueLabel="Verder naar moodboard"
            onContinue={() => navigate({ to: "/moodboard" })}
            dark
          />
        ) : null}
      </AnimatePresence>
    </main>
  );
}
