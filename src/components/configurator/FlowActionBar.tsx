import { motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "@zethictech/iconsax-react";

type FlowActionBarProps = {
  overline: string;
  title: string;
  subtitle?: string;
  backLabel?: string;
  onBack?: () => void;
  continueLabel?: string;
  onContinue?: () => void;
  continueDisabled?: boolean;
  dark?: boolean;
};

export function FlowActionBar({
  overline,
  title,
  subtitle,
  backLabel = "Terug",
  onBack,
  continueLabel,
  onContinue,
  continueDisabled = false,
  dark = false,
}: FlowActionBarProps) {
  const isLight = !dark;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`flow-action-bar fixed inset-x-0 bottom-0 z-[140] border-t backdrop-blur-xl ${
        isLight
          ? "border-[rgba(17,17,17,0.08)] bg-[rgba(247,245,242,0.94)] shadow-[0_-24px_60px_-40px_rgba(17,17,17,0.18)]"
          : "border-[rgba(247,245,242,0.08)] bg-[rgba(10,10,10,0.88)] shadow-[0_-24px_60px_-40px_rgba(0,0,0,0.55)]"
      }`}
    >
      <div className="mx-auto flex w-full items-center gap-2 px-3 pb-[calc(env(safe-area-inset-bottom)+0.65rem)] pt-2.5 md:hidden">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label={backLabel}
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-[15px] border ${
              isLight
                ? "border-black/10 bg-white/75 text-[#25281f]"
                : "border-white/10 bg-white/[0.06] text-white"
            }`}
          >
            <ArrowLeft2 size={20} variant="Linear" />
          </button>
        ) : null}

        <div className="min-w-0 flex-1 px-1">
          <p className="truncate text-[0.62rem] font-medium text-[#6b9539]">{overline}</p>
          <p
            className={`truncate text-[1rem] leading-tight ${
              isLight ? "text-[#111111]" : "text-[#F7F5F2]"
            }`}
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {title}
          </p>
        </div>

        {continueLabel && onContinue ? (
          <button
            type="button"
            onClick={onContinue}
            disabled={continueDisabled}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[15px] border border-[#8BC540] bg-[#79af37] px-4 text-[0.76rem] font-semibold text-white shadow-[0_12px_26px_-16px_rgba(66,105,27,0.9)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-45"
          >
            <span className="max-w-[8.2rem] truncate">{continueLabel}</span>
            <ArrowRight2 size={16} variant="Linear" />
          </button>
        ) : null}
      </div>

      <div className="mx-auto hidden w-[min(calc(100%-6rem),1536px)] items-center justify-between gap-6 py-5 md:flex">
        <div className="min-w-0">
          <p className="mb-1 block text-[0.62rem] uppercase tracking-[0.24em] text-[#8BC540] md:text-[0.6875rem]">
            {overline}
          </p>
          <p
            className={`text-[1.18rem] leading-[1.08] md:truncate md:text-[1.75rem] ${
              isLight ? "text-[#111111]" : "text-[#F7F5F2]"
            }`}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {title}
          </p>
          {subtitle ? (
            <p
              className={`mt-1 max-w-[38rem] text-[0.8rem] leading-[1.6] md:text-[0.85rem] md:leading-[1.65] ${isLight ? "text-[#666666]" : "text-[rgba(247,245,242,0.56)]"}`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-2">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-[14px] border px-4 text-[0.68rem] tracking-[0.16em] transition-colors duration-300 sm:w-auto sm:min-h-[52px] sm:px-5 sm:text-[0.75rem] sm:tracking-[0.18em] ${
                isLight
                  ? "border-[rgba(17,17,17,0.12)] bg-transparent text-[#111111] hover:border-[rgba(17,17,17,0.24)] hover:bg-[rgba(255,255,255,0.8)]"
                  : "border-[rgba(247,245,242,0.16)] bg-transparent text-[#F7F5F2] hover:border-[rgba(247,245,242,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
              }`}
              style={{ textTransform: "uppercase" }}
            >
              {backLabel}
            </button>
          ) : null}

          {continueLabel && onContinue ? (
            <button
              type="button"
              onClick={onContinue}
              disabled={continueDisabled}
              className={`inline-flex min-h-[50px] w-full items-center justify-center rounded-[14px] border px-4 text-[0.68rem] tracking-[0.16em] transition-all duration-300 sm:w-auto sm:min-h-[52px] sm:px-6 sm:text-[0.75rem] sm:tracking-[0.18em] ${
                isLight
                  ? "border-[#8BC540] bg-[#8BC540] text-white hover:bg-[#2F5218] hover:border-[#2F5218]"
                  : "border-[#8BC540] bg-[#8BC540] text-white hover:bg-[#2F5218] hover:border-[#2F5218]"
              } disabled:cursor-not-allowed disabled:opacity-45`}
              style={{ textTransform: "uppercase" }}
            >
              {continueLabel}
            </button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
