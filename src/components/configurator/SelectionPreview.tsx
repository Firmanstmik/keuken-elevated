import { motion } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";

type PreviewDetail = {
  label: string;
  value: string;
  color?: string;
};

type SelectionPreviewProps = {
  overline: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  accentColor?: string;
  details: PreviewDetail[];
  selections?: PreviewDetail[];
  ctaLabel?: string;
  onContinue?: () => void;
  footerNote?: string;
};

export function SelectionPreview({
  overline,
  title,
  description,
  image,
  imageAlt,
  accentColor = "#B08D57",
  details,
  selections,
  ctaLabel,
  onContinue,
  footerNote,
}: SelectionPreviewProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 overflow-hidden rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,245,242,0.94))] shadow-[0_24px_70px_-46px_rgba(17,17,17,0.18)] md:mt-10"
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]">
        <div className="relative min-h-[280px] overflow-hidden md:min-h-[340px]">
          {image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                aria-label={imageAlt ?? title}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.06)_0%,rgba(10,10,10,0.18)_32%,rgba(10,10,10,0.48)_100%)]" />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${accentColor}22 0%, rgba(247,245,242,0.96) 55%, rgba(255,255,255,0.98) 100%)`,
              }}
            />
          )}

          <div
            className="absolute left-5 top-5 h-14 w-14 rounded-full blur-2xl"
            style={{ backgroundColor: accentColor, opacity: 0.45 }}
          />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.12)_22%,rgba(10,10,10,0.6)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <div className="max-w-[28rem]">
              <p className="mb-3 block text-[0.68rem] uppercase tracking-[0.28em] text-[#D1AF78]">
                {overline}
              </p>
              <h2
                className="max-w-[13rem] text-[clamp(1.18rem,3.3vw,2rem)] leading-[1.04] tracking-[-0.026em] text-[#F7F5F2] sm:max-w-[14rem] md:max-w-[15rem] lg:max-w-[13rem]"
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 md:p-7">
          <div>
            <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.24em] text-[#B08D57]">
              Ontwerpvoorstel
            </p>
            <h3
              className="text-[1.75rem] leading-[1.15] text-[#111111]"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
            >
              {title}
            </h3>
            <p className="mt-3 max-w-[34rem] text-[0.95rem] leading-[1.75] text-[#666666]">
              {description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {details.map((detail) => (
                <div
                  key={`${detail.label}-${detail.value}`}
                  className="rounded-[16px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.7)] px-4 py-3"
                >
                  <p className="mb-1 block text-[0.65rem] uppercase tracking-[0.18em] text-[#B08D57]">
                    {detail.label}
                  </p>
                  <div className="flex items-center gap-2">
                    {detail.color ? (
                      <span
                        className="h-3 w-3 shrink-0 rounded-full border border-[rgba(17,17,17,0.12)]"
                        style={{ backgroundColor: detail.color }}
                      />
                    ) : null}
                    <p
                      className="text-[1rem] leading-[1.45] text-[#111111]"
                      style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {selections?.length ? (
              <div className="mt-6 border-t border-[rgba(17,17,17,0.08)] pt-5">
                <p className="mb-3 block text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]">
                  Samengestelde materialen
                </p>
                <div className="grid gap-2">
                  {selections.map((selection) => (
                    <div
                      key={`${selection.label}-${selection.value}`}
                      className="flex items-center justify-between gap-3 rounded-[14px] border border-[rgba(17,17,17,0.07)] bg-[rgba(255,255,255,0.78)] px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="mb-0.5 block text-[0.62rem] uppercase tracking-[0.18em] text-[#B08D57]">
                          {selection.label}
                        </p>
                        <p className="truncate text-[0.92rem] leading-[1.45] text-[#111111]">
                          {selection.value}
                        </p>
                      </div>
                      {selection.color ? (
                        <span
                          className="h-4 w-4 shrink-0 rounded-full border border-[rgba(17,17,17,0.12)]"
                          style={{ backgroundColor: selection.color }}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {(ctaLabel || footerNote) && (
            <div className="mt-7 flex flex-col gap-3 border-t border-[rgba(17,17,17,0.08)] pt-5">
              {ctaLabel && onContinue ? (
                <button type="button" onClick={onContinue} className="btn-primary self-start">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : null}
              {footerNote ? (
                <p className="text-[0.85rem] leading-[1.7] text-[#777777]">{footerNote}</p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
