import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function FlowActionBar({
  overline,
  title,
  subtitle,
  backLabel = "Terug",
  onBack,
  continueLabel,
  onContinue,
  continueDisabled = false,
  dark = false
}) {
  const isLight = !dark;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 16 },
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      className: `fixed inset-x-0 bottom-0 z-[140] border-t backdrop-blur-xl ${isLight ? "border-[rgba(17,17,17,0.08)] bg-[rgba(247,245,242,0.94)] shadow-[0_-24px_60px_-40px_rgba(17,17,17,0.18)]" : "border-[rgba(247,245,242,0.08)] bg-[rgba(10,10,10,0.88)] shadow-[0_-24px_60px_-40px_rgba(0,0,0,0.55)]"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex w-[min(calc(100%-1rem),1536px)] flex-col gap-4 px-1 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:w-[min(calc(100%-6rem),1536px)] md:flex-row md:items-center md:justify-between md:gap-6 md:px-0 md:py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 block text-[0.62rem] uppercase tracking-[0.24em] text-[#B08D57] md:text-[0.6875rem]", children: overline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-[1.18rem] leading-[1.08] md:truncate md:text-[1.75rem] ${isLight ? "text-[#111111]" : "text-[#F7F5F2]"}`,
              style: { fontFamily: '"Playfair Display", serif', fontWeight: 400 },
              children: title
            }
          ),
          subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 max-w-[38rem] text-[0.8rem] leading-[1.6] md:text-[0.85rem] md:leading-[1.65] ${isLight ? "text-[#666666]" : "text-[rgba(247,245,242,0.56)]"}`, children: subtitle }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end", children: [
          onBack ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onBack,
              className: `inline-flex min-h-[48px] w-full items-center justify-center rounded-[14px] border px-4 text-[0.68rem] tracking-[0.16em] transition-colors duration-300 sm:w-auto sm:min-h-[52px] sm:px-5 sm:text-[0.75rem] sm:tracking-[0.18em] ${isLight ? "border-[rgba(17,17,17,0.12)] bg-transparent text-[#111111] hover:border-[rgba(17,17,17,0.24)] hover:bg-[rgba(255,255,255,0.8)]" : "border-[rgba(247,245,242,0.16)] bg-transparent text-[#F7F5F2] hover:border-[rgba(247,245,242,0.3)] hover:bg-[rgba(255,255,255,0.06)]"}`,
              style: { textTransform: "uppercase" },
              children: backLabel
            }
          ) : null,
          continueLabel && onContinue ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onContinue,
              disabled: continueDisabled,
              className: `inline-flex min-h-[50px] w-full items-center justify-center rounded-[14px] border px-4 text-[0.68rem] tracking-[0.16em] transition-all duration-300 sm:w-auto sm:min-h-[52px] sm:px-6 sm:text-[0.75rem] sm:tracking-[0.18em] ${isLight ? "border-[#111111] bg-[#111111] text-[#F7F5F2] hover:bg-[#1B1B1B]" : "border-[#B08D57] bg-[#B08D57] text-[#F7F5F2] hover:border-[#8A6D3A] hover:bg-[#8A6D3A]"} disabled:cursor-not-allowed disabled:opacity-45`,
              style: { textTransform: "uppercase" },
              children: continueLabel
            }
          ) : null
        ] })
      ] })
    }
  );
}
export {
  FlowActionBar as F
};
