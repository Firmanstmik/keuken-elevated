import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { F as FlowActionBar } from "./FlowActionBar-cZUVzyYV.mjs";
import { d as masterBudgetRanges, e as masterCategories, m as masterBrands, h as masterStyles, A as ArrowLeft, l as logoKeuken, S as Search, a as ArrowRight } from "./master-config-data-CQ2gS3IZ.mjs";
import { u as useConfigurator } from "./router-Bkz8D-FV.mjs";
import { i as industrieelBase, l as landelijkBase, m as modernBase } from "./industrieel-base-C_gCI_to.mjs";
import { k as klassiekBase } from "./klassiek-base-ByI9UL1v.mjs";
import { k as klassiekHotspots } from "./klassiek-hotspots-DmS3IOWJ.mjs";
import "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/mui__icons-material.mjs";
import "../_libs/mui__material.mjs";
import "../_libs/mui__utils.mjs";
import "../_libs/react-is.mjs";
import "../_libs/clsx.mjs";
import "../_libs/mui__system.mjs";
import "../_libs/mui__styled-engine.mjs";
import "../_libs/emotion__styled.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/emotion__react.mjs";
import "../_libs/emotion__cache.mjs";
import "../_libs/emotion__sheet.mjs";
import "../_libs/stylis.mjs";
import "../_libs/emotion__weak-memoize.mjs";
import "../_libs/emotion__memoize.mjs";
import "../_libs/hoist-non-react-statics.mjs";
import "../_libs/emotion__utils.mjs";
import "../_libs/emotion__serialize.mjs";
import "../_libs/emotion__hash.mjs";
import "../_libs/emotion__unitless.mjs";
import "../_libs/@emotion/use-insertion-effect-with-fallbacks+[...].mjs";
import "../_libs/emotion__is-prop-valid.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const front$2 = { "x": "50%", "y": "78%" };
const werkblad$2 = { "x": "58%", "y": "61%" };
const spoelbak$2 = { "x": "31%", "y": "59%" };
const apparatuur$2 = { "x": "20%", "y": "48%" };
const quooker$2 = { "x": "33%", "y": "50%" };
const bora$2 = { "x": "49%", "y": "54%" };
const grepen$2 = { "x": "83%", "y": "46%" };
const verlichting$2 = { "x": "50%", "y": "7%" };
const modernHotspots = {
  front: front$2,
  werkblad: werkblad$2,
  spoelbak: spoelbak$2,
  apparatuur: apparatuur$2,
  quooker: quooker$2,
  bora: bora$2,
  grepen: grepen$2,
  verlichting: verlichting$2
};
const front$1 = { "x": "67%", "y": "74%" };
const werkblad$1 = { "x": "60%", "y": "60%" };
const spoelbak$1 = { "x": "8%", "y": "58%" };
const apparatuur$1 = { "x": "88%", "y": "49%" };
const quooker$1 = { "x": "49%", "y": "52%" };
const bora$1 = { "x": "44%", "y": "53%" };
const grepen$1 = { "x": "67%", "y": "65%" };
const verlichting$1 = { "x": "51%", "y": "9%" };
const landelijkHotspots = {
  front: front$1,
  werkblad: werkblad$1,
  spoelbak: spoelbak$1,
  apparatuur: apparatuur$1,
  quooker: quooker$1,
  bora: bora$1,
  grepen: grepen$1,
  verlichting: verlichting$1
};
const front = { "x": "68%", "y": "75%" };
const werkblad = { "x": "63%", "y": "60%" };
const spoelbak = { "x": "57%", "y": "59%" };
const apparatuur = { "x": "32%", "y": "48%" };
const quooker = { "x": "58%", "y": "52%" };
const bora = { "x": "29%", "y": "59%" };
const grepen = { "x": "75%", "y": "47%" };
const verlichting = { "x": "47%", "y": "6.5%" };
const industrieelHotspots = {
  front,
  werkblad,
  spoelbak,
  apparatuur,
  quooker,
  bora,
  grepen,
  verlichting
};
const configuratorImages = {
  modern: modernBase,
  klassiek: klassiekBase,
  landelijk: landelijkBase,
  industrieel: industrieelBase
};
const hotspotKeyToCategoryId = {
  front: "front",
  werkblad: "worktop",
  spoelbak: "sink",
  apparatuur: "appliances",
  quooker: "quooker",
  bora: "bora",
  grepen: "handles",
  verlichting: "lighting"
};
const hotspotLabels = {
  front: "Front",
  werkblad: "Werkblad",
  spoelbak: "Spoelbak",
  apparatuur: "Apparatuur",
  quooker: "Quooker",
  bora: "BORA",
  grepen: "Grepen",
  verlichting: "Verlichting"
};
function transformHotspots(json) {
  return Object.entries(json).map(([key, coords]) => ({
    id: hotspotKeyToCategoryId[key] || key,
    label: hotspotLabels[key] || key,
    x: coords.x,
    y: coords.y
  }));
}
const hotspotMap = {
  modern: transformHotspots(modernHotspots),
  klassiek: transformHotspots(klassiekHotspots),
  landelijk: transformHotspots(landelijkHotspots),
  industrieel: transformHotspots(industrieelHotspots)
};
function HotspotTooltip({
  active,
  x,
  y,
  title,
  description,
  viewportSize
}) {
  const px = parseFloat(x);
  const py = parseFloat(y);
  const hx = px / 100 * viewportSize.width;
  const hy = py / 100 * viewportSize.height;
  const placement = reactExports.useMemo(() => {
    const top = py;
    const bottom = 100 - py;
    const left = px;
    const right = 100 - px;
    let dir = "top";
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
  const cardWidth = 210;
  const margin = 12;
  const cardOffset = 40;
  const mid = 24;
  let cardStyle = {};
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
    const halfH = 50;
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
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`
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
      transform: `translate(calc(-50% + ${offsetX}px), 0px)`
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
      transform: `translate(0px, calc(-50% + ${offsetY}px))`
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
      transform: `translate(0px, calc(-50% + ${offsetY}px))`
    };
    const R = Math.min(6, Math.abs(offsetY) / 2);
    if (R < 1) {
      pathD = `M 0 0 H ${cardOffset}`;
    } else {
      const dir = offsetY > 0 ? 1 : -1;
      pathD = `M 0 0 H ${mid - R} Q ${mid} 0 ${mid} ${dir * R} V ${offsetY - dir * R} Q ${mid} ${offsetY} ${mid + R} ${offsetY} H ${cardOffset}`;
    }
  }
  const dotCX = placement === "top" || placement === "bottom" ? offsetX : placement === "left" ? -cardOffset : cardOffset;
  const dotCY = placement === "left" || placement === "right" ? offsetY : placement === "top" ? -cardOffset : cardOffset;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute pointer-events-none z-50", style: {
    left: 0,
    top: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute pointer-events-none overflow-visible", style: {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      overflow: "visible"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.path, { d: pathD, fill: "none", stroke: "#D4AF37", strokeWidth: "1.2", strokeOpacity: "0.55", strokeLinecap: "round", initial: {
        pathLength: 0
      }, animate: {
        pathLength: 1
      }, exit: {
        pathLength: 0
      }, transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: dotCX, cy: dotCY, r: "1.5", fill: "#D4AF37", fillOpacity: "0.6", initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, exit: {
        scale: 0
      }, transition: {
        delay: 0.15,
        duration: 0.2
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute pointer-events-none", style: cardStyle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "pointer-events-auto bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-4 py-3 text-left", style: {
      width: cardWidth
    }, initial: {
      opacity: 0,
      y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
      x: placement === "left" ? 8 : placement === "right" ? -8 : 0
    }, animate: {
      opacity: 1,
      y: 0,
      x: 0
    }, exit: {
      opacity: 0,
      y: placement === "top" ? 8 : placement === "bottom" ? -8 : 0,
      x: placement === "left" ? 8 : placement === "right" ? -8 : 0
    }, transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1]
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] mb-1.5", children: "CONFIGURATIE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-[13px] font-semibold leading-snug text-white tracking-[-0.01em] uppercase", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-[rgba(212,175,55,0.1)] my-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-[1.6] text-zinc-400 normal-case", children: description })
    ] }) }) })
  ] });
}
function ConfigurePage() {
  const navigate = useNavigate();
  const {
    config,
    setBudget,
    setSelection
  } = useConfigurator();
  const [activeCategory, setActiveCategory] = reactExports.useState(null);
  const [hoveredCategory, setHoveredCategory] = reactExports.useState(null);
  const [isTouch, setIsTouch] = reactExports.useState(false);
  const [viewportSize, setViewportSize] = reactExports.useState({
    width: 1e3,
    height: 600
  });
  const [zoomLevel, setZoomLevel] = reactExports.useState(1);
  const [panOffset, setPanOffset] = reactExports.useState({
    x: 0,
    y: 0
  });
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const dragStartRef = reactExports.useRef({
    x: 0,
    y: 0
  });
  const panStartRef = reactExports.useRef({
    x: 0,
    y: 0
  });
  const imageViewportRef = reactExports.useRef(null);
  const hasDraggedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
      }
      const handleTouch = () => {
        setIsTouch(true);
        window.removeEventListener("touchstart", handleTouch);
      };
      window.addEventListener("touchstart", handleTouch, {
        passive: true
      });
      return () => window.removeEventListener("touchstart", handleTouch);
    }
  }, []);
  reactExports.useEffect(() => {
    const viewport = imageViewportRef.current;
    if (!viewport) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setViewportSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    resizeObserver.observe(viewport);
    return () => resizeObserver.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!config.brand) navigate({
      to: "/brands"
    });
    else if (!config.style) navigate({
      to: "/style"
    });
  }, [config.brand, config.style, navigate]);
  const budget = config.brand ? masterBudgetRanges[config.brand] ?? "€35,000 tot €85,000" : "€35,000 tot €85,000";
  const activeCategoryData = masterCategories.find((item) => item.id === activeCategory) ?? null;
  const completedCount = Object.keys(config.selections).length;
  const totalCategories = masterCategories.length;
  const selectedBrand = reactExports.useMemo(() => masterBrands.find((item) => item.id === config.brand) ?? null, [config.brand]);
  const selectedStyle = reactExports.useMemo(() => masterStyles.find((item) => item.id === config.style) ?? null, [config.style]);
  const selectedStyleKey = selectedStyle ? typeof selectedStyle === "string" ? selectedStyle : selectedStyle.id || selectedStyle.slug || selectedStyle.name || "" : "";
  const activeImage = (selectedStyleKey ? configuratorImages[selectedStyleKey.toLowerCase()] : null) ?? modernBase;
  const activeHotspots = (selectedStyleKey ? hotspotMap[selectedStyleKey.toLowerCase()] : null) ?? hotspotMap.modern;
  console.log("Selected Style:", selectedStyle);
  console.log("Active Image:", activeImage);
  const zoomedIn = zoomLevel > 1.001;
  function clampPan(nextX, nextY, scale = zoomLevel) {
    const viewport = imageViewportRef.current;
    if (!viewport || scale <= 1) {
      return {
        x: 0,
        y: 0
      };
    }
    const maxX = (viewport.clientWidth * scale - viewport.clientWidth) / 2;
    const maxY = (viewport.clientHeight * scale - viewport.clientHeight) / 2;
    return {
      x: Math.min(Math.max(nextX, -maxX), maxX),
      y: Math.min(Math.max(nextY, -maxY), maxY)
    };
  }
  function updateZoom(nextScale) {
    const clampedScale = Math.min(Math.max(nextScale, 1), 2.6);
    setZoomLevel(clampedScale);
    setPanOffset((current) => clampPan(current.x, current.y, clampedScale));
  }
  function resetZoomView() {
    setZoomLevel(1);
    setPanOffset({
      x: 0,
      y: 0
    });
    setIsDragging(false);
  }
  function zoomToPointer(clientX, clientY, nextScale) {
    const viewport = imageViewportRef.current;
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    const offsetX = clientX - rect.left - rect.width / 2;
    const offsetY = clientY - rect.top - rect.height / 2;
    const clampedScale = Math.min(Math.max(nextScale, 1), 2.6);
    const nextPan = clampPan(-offsetX * (clampedScale - 1), -offsetY * (clampedScale - 1), clampedScale);
    setZoomLevel(clampedScale);
    setPanOffset(nextPan);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#111111]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 top-0 z-[1300] h-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-[#23B9C4]", animate: {
      scaleX: completedCount / totalCategories
    }, transition: {
      duration: 0.4
    }, style: {
      transformOrigin: "left center"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-[1200] flex h-[60px] items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[rgba(17,17,17,0.95)] px-3 backdrop-blur-[12px] md:px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
        to: "/style"
      }), className: "inline-flex min-w-0 items-center gap-1 px-1.5 py-0.5 text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(247,245,242,0.5)] transition-colors duration-300 hover:text-[#F7F5F2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-[14px] w-[14px]" }),
        "Terug"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoKeuken, alt: "Keuken Centrum logo", className: "h-4 w-auto opacity-90 md:h-[18px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] uppercase tracking-[0.15em] text-[rgba(247,245,242,0.3)]", children: "Samenstellen" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.55,
      ease: "easeOut"
    }, className: `flex min-h-screen flex-col pt-[62px] md:h-[calc(100vh-62px)] md:flex-row ${completedCount > 0 ? "pb-28 md:pb-32" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: imageViewportRef, className: "relative min-h-[280px] flex-none overflow-hidden bg-[#0A0A0A] md:h-[calc(100vh-62px)] md:basis-[68%]", onWheel: (event) => {
        event.preventDefault();
        const nextZoom = zoomLevel + (event.deltaY < 0 ? 0.14 : -0.14);
        updateZoom(nextZoom);
      }, onPointerMove: (event) => {
        if (!isDragging || zoomLevel <= 1) return;
        hasDraggedRef.current = true;
        const nextX = panStartRef.current.x + (event.clientX - dragStartRef.current.x);
        const nextY = panStartRef.current.y + (event.clientY - dragStartRef.current.y);
        setPanOffset(clampPan(nextX, nextY));
      }, onPointerUp: (event) => {
        const target = event.target;
        if (target.closest("[data-hotspot='true']")) {
          setIsDragging(false);
          return;
        }
        if (zoomedIn && !hasDraggedRef.current) {
          resetZoomView();
        }
        setIsDragging(false);
      }, onPointerCancel: () => setIsDragging(false), onPointerLeave: () => setIsDragging(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
          scale: zoomLevel,
          x: panOffset.x,
          y: panOffset.y
        }, transition: {
          duration: isDragging ? 0.02 : 0.45,
          ease: [0.22, 1, 0.36, 1]
        }, className: "relative h-full w-full touch-none", style: {
          cursor: isDragging ? "grabbing" : zoomedIn ? "zoom-out" : "zoom-in"
        }, onPointerDown: (event) => {
          const target = event.target;
          if (target.closest("[data-hotspot='true']")) return;
          hasDraggedRef.current = false;
          dragStartRef.current = {
            x: event.clientX,
            y: event.clientY
          };
          panStartRef.current = panOffset;
          if (zoomLevel <= 1) {
            zoomToPointer(event.clientX, event.clientY, 1.6);
            return;
          }
          setIsDragging(true);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
            backgroundImage: `url(${activeImage})`
          } }),
          activeHotspots.map((hotspot, index) => {
            const selected = config.selections[hotspot.id];
            const active = activeCategory === hotspot.id;
            const isHovered = hoveredCategory === hotspot.id;
            const anyHovered = hoveredCategory !== null;
            const visible = isHovered || active && isTouch;
            const fullCategory = masterCategories.find((c) => c.id === hotspot.id);
            const fullOption = selected ? fullCategory?.options.find((o) => o.id === selected.id) : null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              scale: 0
            }, animate: {
              opacity: 1,
              scale: 1
            }, transition: {
              delay: 0.22 + index * 0.08,
              type: "spring",
              stiffness: 220,
              damping: 18
            }, className: `absolute ${active || isHovered ? "z-30" : "z-20"}`, style: {
              left: hotspot.x,
              top: hotspot.y
            }, "data-hotspot": "true", onMouseEnter: () => setHoveredCategory(hotspot.id), onMouseLeave: () => setHoveredCategory(null), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveCategory(active ? null : hotspot.id), className: "absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer", style: {
                transition: "opacity 0.3s ease",
                opacity: anyHovered && !isHovered ? 0.3 : 1
              }, "aria-label": `Configureer ${hotspot.label}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", style: {
                width: 32,
                height: 32,
                transition: "transform 0.2s cubic-bezier(.22,1,.36,1)",
                transform: isHovered ? "scale(1.25)" : "scale(1)"
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full pointer-events-none", style: {
                  background: "rgba(212,175,55,0.10)",
                  filter: "blur(8px)",
                  boxShadow: isHovered || active ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)" : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                  animation: !isHovered && !active ? "hotspotBreathe 3s ease-in-out infinite" : "none",
                  transition: "box-shadow 0.2s ease"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute rounded-full pointer-events-none", style: {
                  width: 18,
                  height: 18,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `2px solid ${isHovered || active ? "#D4AF37" : "rgba(212,175,55,0.85)"}`,
                  backgroundColor: isHovered || active ? "rgba(212,175,55,0.12)" : "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s ease"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 rounded-full", style: {
                  width: 6,
                  height: 6,
                  backgroundColor: selected?.color ?? "#FFFFFF",
                  border: selected?.color ? "1px solid rgba(255,255,255,0.6)" : "none",
                  boxShadow: "0 0 4px rgba(255,255,255,0.5)",
                  transition: "all 0.2s ease"
                } })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsx(HotspotTooltip, { active: true, x: hotspot.x, y: hotspot.y, title: hotspot.label, description: selected ? fullOption?.description || selected.name : `Klik om de mogelijkheden voor uw ${hotspot.label.toLowerCase()} te ontdekken.`, viewportSize }) })
            ] }, hotspot.id);
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 right-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => updateZoom(zoomLevel - 0.2), className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#23B9C4] hover:bg-[rgba(35,185,196,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "-" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => updateZoom(zoomLevel + 0.2), className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#23B9C4] hover:bg-[rgba(35,185,196,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "+" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: resetZoomView, className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#23B9C4] hover:bg-[rgba(35,185,196,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) })
        ] }),
        zoomedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-5 left-5 rounded-[12px] border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.72)] px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[rgba(247,245,242,0.6)] backdrop-blur-[8px]", children: "Sleep om details te bekijken, klik om uit te zoomen" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-5 top-5 border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.75)] px-2.5 py-1.5 backdrop-blur-[8px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "block text-[0.6rem] uppercase tracking-[0.2em] text-[#23B9C4]", children: "Stap 03 van 05" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[0.625rem] text-[rgba(247,245,242,0.6)]", children: [
            completedCount,
            "/",
            totalCategories,
            " opties samengesteld"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[calc(100vh-62px)] flex-1 flex-col overflow-y-auto border-l border-[rgba(255,255,255,0.05)] bg-[#0F0F0F]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-[rgba(255,255,255,0.05)] p-3", children: masterCategories.map((category) => {
          const selected = config.selections[category.id];
          const active = activeCategory === category.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActiveCategory(active ? null : category.id), className: "inline-flex items-center gap-2 border px-2 py-2 transition-all duration-300", style: {
            borderColor: active ? "#23B9C4" : selected ? "rgba(35,185,196,0.4)" : "rgba(255,255,255,0.1)",
            backgroundColor: active ? "rgba(35,185,196,0.1)" : "transparent"
          }, children: [
            selected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full border border-[rgba(255,255,255,0.3)]", style: {
              backgroundColor: selected.color
            } }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-[0.15em]", style: {
              color: active ? "#23B9C4" : selected ? "rgba(247,245,242,0.7)" : "rgba(247,245,242,0.35)"
            }, children: category.label })
          ] }, category.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: activeCategoryData ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -8
        }, transition: {
          duration: 0.3
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 block text-[0.6rem] uppercase tracking-[0.2em] text-[#23B9C4]", children: "Kies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[1.25rem] text-[#F7F5F2]", style: {
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400
              }, children: activeCategoryData.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveCategory(null), className: "text-[rgba(247,245,242,0.35)] transition-colors duration-300 hover:text-[#F7F5F2]", children: "Sluiten" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: activeCategoryData.options.map((option, index) => {
            const selected = config.selections[activeCategoryData.id]?.id === option.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", initial: {
              opacity: 0,
              scale: 0.95
            }, animate: {
              opacity: 1,
              scale: 1
            }, transition: {
              delay: index * 0.05
            }, onClick: () => {
              setSelection(activeCategoryData.id, option.id, option.name, option.color);
              if (config.brand) setBudget(budget);
            }, className: "cursor-pointer p-2 text-left transition-all duration-300", style: {
              border: `1px solid ${selected ? "#23B9C4" : "rgba(255,255,255,0.07)"}`,
              backgroundColor: selected ? "rgba(35,185,196,0.08)" : "rgba(255,255,255,0.02)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 h-12 w-full border border-[rgba(255,255,255,0.1)]", style: {
                backgroundColor: option.color
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 text-[0.7rem] font-normal tracking-[0.05em]", style: {
                color: selected ? "#23B9C4" : "rgba(247,245,242,0.75)"
              }, children: option.name }),
              option.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] leading-[1.4] text-[rgba(247,245,242,0.3)]", children: option.description }) : null
            ] }, option.id);
          }) })
        ] }, activeCategoryData.id) : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, className: "py-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[rgba(247,245,242,0.25)]", children: "Configuratie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[1rem] text-[rgba(247,245,242,0.4)]", style: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400
          }, children: "Klik op een hotspot of categorie om uw keuken samen te stellen" })
        ] }, "empty") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[rgba(255,255,255,0.05)] bg-[#111111] p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-[#23B9C4]", children: "Uw configuratie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex flex-col gap-1", children: [{
            label: "Merk",
            value: selectedBrand?.name
          }, {
            label: "Stijl",
            value: selectedStyle?.name
          }, ...Object.entries(config.selections).map(([categoryId, selection]) => ({
            label: masterCategories.find((item) => item.id === categoryId)?.label ?? categoryId,
            value: selection.name,
            color: selection.color
          }))].map((item) => item.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] uppercase tracking-[0.1em] text-[rgba(247,245,242,0.35)]", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              "color" in item && item.color ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 border border-[rgba(255,255,255,0.2)]", style: {
                backgroundColor: item.color
              } }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.7rem] text-[rgba(247,245,242,0.7)]", children: item.value })
            ] })
          ] }, item.label) : null) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 border-t border-[rgba(255,255,255,0.06)] pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6rem] uppercase tracking-[0.1em] text-[rgba(247,245,242,0.35)]", children: "Budgetindicatie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.75rem] text-[#23B9C4]", style: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400
            }, children: config.budget ?? budget })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
            to: "/moodboard"
          }), className: "inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-[14px] border border-[#23B9C4] bg-[#23B9C4] px-4 text-[0.7rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#163847] hover:bg-[#163847]", children: [
            "Moodboard genereren",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: completedCount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(FlowActionBar, { overline: "Voortgang", title: `${completedCount} van ${totalCategories} keuzes samengesteld`, subtitle: `${selectedBrand?.name ?? "Merk"} met ${selectedStyle?.name ?? "stijl"} is klaar om verder te gaan`, backLabel: "Terug", onBack: () => navigate({
      to: "/style"
    }), continueLabel: "Verder naar moodboard", onContinue: () => navigate({
      to: "/moodboard"
    }), dark: true }) : null })
  ] });
}
export {
  ConfigurePage as component
};
