import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { F as FlowActionBar } from "./FlowActionBar-B7zqwiBn.mjs";
import { F as FlowNav } from "./FlowNav-D726xZkj.mjs";
import { P as PageHeader } from "./PageHeader-D3DEiDsb.mjs";
import { i as masterStyles, m as masterBrands, C as Check } from "./master-config-data-BZ9UlS_D.mjs";
import { u as useConfigurator } from "./router-ClnlMJnD.mjs";
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
import "./Nav-CK8htA75.mjs";
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zethictech__iconsax-react.mjs";
import "../_libs/mui__icons-material.mjs";
import "../_libs/mui__material.mjs";
import "../_libs/mui__utils.mjs";
import "../_libs/react-is.mjs";
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
function StylePage() {
  const navigate = useNavigate();
  const {
    config,
    setStyle
  } = useConfigurator();
  const [hovered, setHovered] = reactExports.useState(null);
  const selectedStyle = reactExports.useMemo(() => masterStyles.find((style) => style.id === config.style) ?? null, [config.style]);
  const selectedBrand = reactExports.useMemo(() => masterBrands.find((brand) => brand.id === config.brand) ?? null, [config.brand]);
  reactExports.useEffect(() => {
    if (!config.brand) {
      navigate({
        to: "/brands"
      });
    }
  }, [config.brand, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#F7F5F2]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlowNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.section, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.45,
      ease: "easeInOut"
    }, className: "pb-36 pt-24 md:pb-40 md:pt-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-[min(calc(100%-3rem),1536px)] md:w-[min(calc(100%-6rem),1536px)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { overline: "Stap 02 van 05", title: "Kies uw stijl", subtitle: "Bepaal de architectonische taal van uw keuken. Elke stijl biedt een eigen sfeer en beleving." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:gap-4 md:grid-cols-2", children: masterStyles.map((style, index) => {
        const selected = config.style === style.id;
        const isHovered = hovered === style.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", initial: {
          opacity: 0,
          y: 32
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: index * 0.1,
          duration: 0.6
        }, onClick: () => setStyle(style.id, style.name), onMouseEnter: () => setHovered(style.id), onMouseLeave: () => setHovered(null), className: "relative h-[320px] cursor-pointer overflow-hidden rounded-[18px] border text-left sm:h-[360px] md:h-[460px]", style: {
          borderColor: selected ? "#B08D57" : "rgba(0,0,0,0.08)",
          boxShadow: selected ? "0 0 0 1px #B08D57, 0 20px 60px rgba(176,141,87,0.15)" : isHovered ? "0 16px 48px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.04)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]", style: {
            backgroundImage: `url(${style.image})`,
            transform: isHovered ? "scale(1.06)" : "scale(1)",
            filter: isHovered ? "brightness(0.82)" : "brightness(0.92)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 transition-opacity duration-400", style: {
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
            opacity: isHovered ? 0.85 : 0.7
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6", animate: {
            y: isHovered ? -6 : 0
          }, transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1]
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 block text-[0.625rem] uppercase tracking-[0.2em] text-[#B08D57]", children: style.keywords[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0.5 text-[1.35rem] leading-[1.2] text-[#F7F5F2] sm:text-[1.5rem] md:text-[1.75rem]", style: {
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400
            }, children: style.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(247,245,242,0.65)]", children: style.keywords.join(", ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isHovered ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
              opacity: 0,
              y: 18,
              filter: "blur(10px)"
            }, animate: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }, exit: {
              opacity: 0,
              y: 10,
              filter: "blur(6px)"
            }, transition: {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1]
            }, className: "max-w-[32rem] text-[0.82rem] leading-[1.6] text-[rgba(247,245,242,0.75)] normal-case sm:text-[0.875rem]", style: {
              textTransform: "none",
              letterSpacing: "0.01em"
            }, children: style.description }) : null })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            scale: 0.6
          }, animate: {
            opacity: 1,
            scale: 1
          }, exit: {
            opacity: 0,
            scale: 0.6
          }, className: "absolute left-5 top-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center bg-[#B08D57] text-[#F7F5F2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-[18px] w-[18px]" }) }) }) : null })
        ] }, style.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowActionBar, { overline: "Geselecteerd", title: selectedStyle?.name ?? "Kies uw stijl", subtitle: selectedStyle ? `${selectedBrand?.name ?? "Merk"} met ${selectedStyle.name} is klaar voor stap 3` : "Kies eerst een stijl om door te gaan naar stap 3", backLabel: "Terug", onBack: () => selectedStyle ? setStyle("", "") : navigate({
      to: "/brands"
    }), continueLabel: "Verder naar stap 3", onContinue: () => navigate({
      to: "/configure"
    }), continueDisabled: !selectedStyle }) })
  ] });
}
export {
  StylePage as component
};
