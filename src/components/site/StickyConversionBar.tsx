import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight2 as IconsaxArrowRight,
  CalendarTick as IconsaxCalendar,
  Call as IconsaxCall,
  CloseCircle as IconsaxClose,
  Messages as IconsaxMessages,
} from "@zethictech/iconsax-react";
import { kc } from "@/lib/kc-data";

const revealThreshold = 280;
const whatsappHref =
  "https://wa.me/31302415122?text=Hallo%20Keuken-Centrum,%20ik%20heb%20een%20vraag%20over%20een%20showroombezoek.";

const actions = [
  {
    label: "Plan showroombezoek",
    mobileLabel: "Afspraak",
    meta: "Vrijblijvend advies in Utrecht",
    href: "/consultation",
    Icon: IconsaxCalendar,
    tone: "primary",
  },
  {
    label: "Bel een adviseur",
    mobileLabel: "Bellen",
    meta: kc.contact.phone,
    href: kc.contact.phoneHref,
    Icon: IconsaxCall,
    tone: "neutral",
  },
  {
    label: "WhatsApp",
    mobileLabel: "WhatsApp",
    meta: "Persoonlijk & snel antwoord",
    href: whatsappHref,
    Icon: IconsaxMessages,
    tone: "chat",
  },
] as const;

export function StickyConversionBar() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < revealThreshold) {
        setVisible(false);
      } else if (currentY > lastY + 7) {
        setVisible(true);
      } else if (currentY < lastY - 14) {
        setVisible(false);
      }
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.aside
            aria-label="Direct contact met Keuken-Centrum Utrecht"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.982 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-x-0 bottom-5 z-[80] hidden px-5 md:block"
          >
            <div className="pointer-events-auto relative mx-auto w-[min(880px,calc(100vw-2.5rem))]">
              <div className="absolute -top-3 left-6 z-20 inline-flex items-center gap-2 rounded-full border border-[rgba(200,169,107,0.26)] bg-[#11170f] px-3 py-1.5 text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-[#D8BE87] shadow-[0_10px_26px_-15px_rgba(0,0,0,0.8)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BC540] shadow-[0_0_8px_rgba(139,197,64,0.9)]" />
                KC Concierge
              </div>

              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Sluit contactbalk"
                className="group absolute -right-2 -top-4 z-30 grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-[#171b16] text-white/70 shadow-[0_12px_28px_-12px_rgba(0,0,0,0.85)] transition-all duration-300 hover:rotate-6 hover:border-[#C8A96B]/50 hover:text-[#D8BE87]"
              >
                <IconsaxClose size={20} variant="Linear" />
              </button>

              <div className="overflow-hidden rounded-[26px] border border-[rgba(200,169,107,0.3)] bg-[linear-gradient(145deg,rgba(17,22,15,0.97),rgba(8,13,10,0.97))] p-2 shadow-[0_34px_90px_-35px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.035)_inset] backdrop-blur-2xl">
                <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-[#D8BE87]/70 to-transparent" />
                <div className="grid grid-cols-3 gap-2">
                  {actions.map(({ label, meta, href, Icon, tone }) => {
                    const primary = tone === "primary";
                    const chat = tone === "chat";
                    return (
                      <a
                        key={label}
                        href={href}
                        className={`group relative flex min-h-[82px] items-center gap-3 overflow-hidden rounded-[18px] border px-4 transition-all duration-500 hover:-translate-y-0.5 ${primary
                          ? "border-[#A8D95A]/38 bg-[linear-gradient(135deg,#8BC540,#659B2C)] text-white shadow-[0_22px_42px_-24px_rgba(139,197,64,0.68)]"
                          : chat
                            ? "border-[#8BC540]/16 bg-[linear-gradient(145deg,rgba(139,197,64,0.095),rgba(255,255,255,0.025))] text-white"
                            : "border-white/[0.07] bg-white/[0.035] text-white"
                          }`}
                      >
                        <span className="absolute inset-0 translate-y-[102%] bg-[linear-gradient(180deg,#ffffff,#F1EFE7)] transition-transform duration-[580ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                        <span className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-[13px] border transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-[#192012]/10 group-hover:bg-[#192f0d] group-hover:text-white ${primary
                          ? "border-white/18 bg-white/12 text-white"
                          : chat
                            ? "border-[#8BC540]/24 bg-[#8BC540]/12 text-[#A8D95A]"
                            : "border-[#C8A96B]/18 bg-[#C8A96B]/08 text-[#D8BE87]"
                          }`}>
                          <Icon size={20} variant="Linear" />
                        </span>
                        <span className="relative z-10 min-w-0 flex-1 transition-colors duration-500 group-hover:text-[#192012]">
                          <span className="block text-[0.84rem] font-semibold tracking-[-0.015em]">{label}</span>
                          <span className={`mt-1 block truncate text-[0.66rem] ${primary ? "text-white/72" : "text-white/42"} transition-colors duration-500 group-hover:text-[#192012]/58`}>
                            {meta}
                          </span>
                        </span>
                        <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:translate-x-0.5 group-hover:border-[#192012]/10 group-hover:bg-[#192012]/06 group-hover:text-[#192012]">
                          <IconsaxArrowRight size={12} variant="Linear" />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.aside
            aria-label="Direct contact"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] px-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] md:hidden"
          >
            <div className="pointer-events-auto relative mx-auto max-w-[620px] rounded-[22px] border border-[rgba(200,169,107,0.3)] bg-[linear-gradient(145deg,rgba(17,22,15,0.97),rgba(8,13,10,0.97))] p-1.5 shadow-[0_28px_68px_-28px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Sluit contactbalk"
                className="absolute -right-1 -top-4 z-20 grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-[#171b16] text-white/70"
              >
                <IconsaxClose size={18} variant="Linear" />
              </button>
              <div className="grid grid-cols-3 gap-1.5">
                {actions.map(({ label, mobileLabel, href, Icon, tone }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`group flex min-h-[62px] flex-col items-center justify-center gap-1.5 rounded-[16px] border px-2 py-2 text-center transition-transform active:scale-[0.97] ${tone === "primary"
                      ? "border-[#A8D95A]/32 bg-[linear-gradient(135deg,#8BC540,#659B2C)] text-white"
                      : "border-white/[0.06] bg-white/[0.035] text-white/70"
                      }`}
                  >
                    <span className={`grid h-8 w-8 place-items-center rounded-[10px] ${tone === "primary" ? "bg-white/12 text-white" : tone === "chat" ? "bg-[#8BC540]/14 text-[#A8D95A]" : "bg-[#C8A96B]/10 text-[#D8BE87]"}`}>
                      <Icon size={17} variant="Linear" />
                    </span>
                    <span className="text-[0.54rem] font-semibold uppercase tracking-[0.11em]">{mobileLabel}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
