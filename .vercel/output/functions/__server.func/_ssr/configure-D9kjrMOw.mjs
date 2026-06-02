import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { F as FlowActionBar } from "./FlowActionBar-B7zqwiBn.mjs";
import { e as masterBudgetRanges, f as masterCategories, m as masterBrands, j as masterStyles, A as ArrowLeft, l as logoKeuken, h as masterHotspotPositions, d as Circle, S as Search, a as ArrowRight } from "./master-config-data-Dym2j9sf.mjs";
import { u as useConfigurator } from "./router-DMLCtDoQ.mjs";
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
function ConfigurePage() {
  const navigate = useNavigate();
  const {
    config,
    setBudget,
    setSelection
  } = useConfigurator();
  const [activeCategory, setActiveCategory] = reactExports.useState(null);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 top-0 z-[1300] h-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-[#B08D57]", animate: {
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `flex min-h-screen flex-col pt-[62px] md:h-[calc(100vh-62px)] md:flex-row ${completedCount > 0 ? "pb-28 md:pb-32" : ""}`, children: [
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
            backgroundImage: "url(/configurator-kitchen.webp)"
          } }),
          masterHotspotPositions.map((hotspot) => {
            const selected = config.selections[hotspot.id];
            const active = activeCategory === hotspot.id;
            const fullCategory = masterCategories.find((c) => c.id === hotspot.id);
            const fullOption = selected ? fullCategory?.options.find((o) => o.id === selected.id) : null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", "data-hotspot": "true", onClick: () => setActiveCategory(active ? null : hotspot.id), className: "group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10", style: {
              left: hotspot.x,
              top: hotspot.y
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
                scale: 1.15
              }, whileTap: {
                scale: 0.9
              }, animate: active ? {
                scale: [1, 1.1, 1]
              } : {
                scale: 1
              }, transition: {
                repeat: active ? Infinity : 0,
                duration: 2
              }, className: "relative flex h-9 w-9 items-center justify-center rounded-full border-2 backdrop-blur-[8px] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)]", style: {
                backgroundColor: active ? "#B08D57" : selected ? "rgba(176,141,87,0.9)" : "rgba(247,245,242,0.25)",
                borderColor: active || selected ? "#B08D57" : "rgba(247,245,242,0.6)",
                boxShadow: active ? "0 0 24px rgba(176,141,87,0.6), 0 0 0 1px rgba(255,255,255,0.2) inset" : "0 4px 16px rgba(0,0,0,0.3)"
              }, children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full border border-[rgba(255,255,255,0.8)] shadow-sm", style: {
                backgroundColor: selected.color
              } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2.5 w-2.5 text-[rgba(247,245,242,0.9)]" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 flex w-[180px] flex-col items-center rounded-[16px] border border-white/10 bg-[rgba(15,15,15,0.85)] p-3.5 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 text-[0.55rem] font-medium uppercase tracking-[0.25em] text-[#C8A96B]", children: hotspot.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.9rem] text-[#F7F5F2] font-medium tracking-[0.01em] mb-1.5 text-center leading-tight normal-case", children: selected ? selected.name : "Selecteer optie" }),
                fullOption?.description ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.65rem] text-[rgba(247,245,242,0.6)] leading-[1.5] text-center whitespace-normal normal-case", children: fullOption.description }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[0.65rem] text-[rgba(247,245,242,0.5)] leading-[1.5] text-center whitespace-normal normal-case", children: [
                  "Klik om de mogelijkheden voor uw ",
                  hotspot.label.toLowerCase(),
                  " te ontdekken."
                ] })
              ] })
            ] }, hotspot.id);
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 right-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => updateZoom(zoomLevel - 0.2), className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#B08D57] hover:bg-[rgba(176,141,87,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "-" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => updateZoom(zoomLevel + 0.2), className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#B08D57] hover:bg-[rgba(176,141,87,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "+" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: resetZoomView, className: "inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(247,245,242,0.15)] bg-[rgba(17,17,17,0.72)] text-[#F7F5F2] backdrop-blur-[8px] transition-colors duration-300 hover:border-[#B08D57] hover:bg-[rgba(176,141,87,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" }) })
        ] }),
        zoomedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-5 left-5 rounded-[12px] border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.72)] px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[rgba(247,245,242,0.6)] backdrop-blur-[8px]", children: "Sleep om details te bekijken, klik om uit te zoomen" }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-5 top-5 border border-[rgba(247,245,242,0.1)] bg-[rgba(17,17,17,0.75)] px-2.5 py-1.5 backdrop-blur-[8px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "block text-[0.6rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Stap 03 van 05" }),
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
            borderColor: active ? "#B08D57" : selected ? "rgba(176,141,87,0.4)" : "rgba(255,255,255,0.1)",
            backgroundColor: active ? "rgba(176,141,87,0.1)" : "transparent"
          }, children: [
            selected ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full border border-[rgba(255,255,255,0.3)]", style: {
              backgroundColor: selected.color
            } }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] uppercase tracking-[0.15em]", style: {
              color: active ? "#B08D57" : selected ? "rgba(247,245,242,0.7)" : "rgba(247,245,242,0.35)"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 block text-[0.6rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Kies" }),
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
              border: `1px solid ${selected ? "#B08D57" : "rgba(255,255,255,0.07)"}`,
              backgroundColor: selected ? "rgba(176,141,87,0.08)" : "rgba(255,255,255,0.02)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 h-12 w-full border border-[rgba(255,255,255,0.1)]", style: {
                backgroundColor: option.color
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 text-[0.7rem] font-normal tracking-[0.05em]", style: {
                color: selected ? "#B08D57" : "rgba(247,245,242,0.75)"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Uw configuratie" }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.75rem] text-[#B08D57]", style: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400
            }, children: config.budget ?? budget })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
            to: "/moodboard"
          }), className: "inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-[14px] border border-[#B08D57] bg-[#B08D57] px-4 text-[0.7rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]", children: [
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
