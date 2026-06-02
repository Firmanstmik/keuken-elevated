import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Tag, X } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";

const revealThreshold = 300;
const whatsappHref =
  "https://wa.me/31302415122?text=Hallo%20Keuken-Centrum,%20ik%20heb%20een%20vraag%20over%20een%20showroombezoek.";

type ActionItem = {
  label: string;
  meta: string;
  href: string;
  Icon: typeof Phone;
  primary?: boolean;
  accent?: "green";
};

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.11 4.89A9.89 9.89 0 0 0 3.42 16.85L2 22l5.27-1.38a9.89 9.89 0 0 0 4.72 1.2h.01c5.46 0 9.91-4.44 9.91-9.9a9.84 9.84 0 0 0-2.8-7.03Zm-7.1 15.25h-.01a8.24 8.24 0 0 1-4.2-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.21 8.21 0 0 1 1.27-10.24 8.2 8.2 0 0 1 13.99 5.88 8.23 8.23 0 0 1-8.26 8.22Zm4.52-6.14c-.25-.12-1.49-.73-1.72-.82-.23-.08-.4-.12-.57.13-.17.24-.66.81-.81.97-.15.17-.3.18-.55.06-.25-.13-1.07-.39-2.03-1.24a7.66 7.66 0 0 1-1.4-1.74c-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.21-.51-.42-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.13.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.49-.08 1.49-.61 1.7-1.19.21-.58.21-1.09.15-1.19-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function StickyConversionBar() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const actions = useMemo<ActionItem[]>(
    () => [
      {
        label: "Plan showroombezoek",
        meta: "Afspraak in Utrecht",
        href: "#showroom",
        Icon: Tag,
        primary: true,
      },
      { label: "Bel adviseur", meta: kc.contact.phone, href: kc.contact.phoneHref, Icon: Phone },
      {
        label: "WhatsApp",
        meta: "Snel antwoord",
        href: whatsappHref,
        Icon: Mail,
        accent: "green",
      },
    ],
    [],
  );

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < revealThreshold) {
        setVisible(false);
      } else if (currentY > lastY + 8) {
        setVisible(true);
      } else if (currentY < lastY - 12) {
        setVisible(false);
      }

      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  const animateProps = reduceMotion
    ? { opacity: visible ? 1 : 0 }
    : { opacity: visible ? 1 : 0, y: visible ? 0 : 24, scale: visible ? 1 : 0.988 };

  return (
    <AnimatePresence>
      {visible ? (
        <>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.988 }}
            animate={animateProps}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.988 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-x-0 bottom-4 z-[80] hidden px-5 lg:block"
          >
            <div className="mx-auto max-w-[1440px]">
              <div className="pointer-events-auto relative mx-auto w-[min(52vw,720px)]">
                <button
                  type="button"
                  onClick={() => setDismissed(true)}
                  aria-label="Sluit sticky conversiebalk"
                  className="lux-x absolute right-2 top-[-11px] z-20 flex h-7 w-7 items-center justify-center text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>

                <div className="lux-border rounded-[22px] p-[1px] shadow-[0_34px_90px_-42px_rgba(5,11,20,0.78)]">
                  <div className="relative overflow-hidden rounded-[21px] bg-[linear-gradient(145deg,rgba(6,14,25,0.96),rgba(8,18,31,0.9))] p-2 backdrop-blur-2xl">
                  <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,rgba(201,164,106,0),rgba(201,164,106,0.72),rgba(201,164,106,0))]" />
                  <div className="absolute left-[18%] top-[-80%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(61,154,66,0.1),transparent_60%)]" />
                  <div className="absolute right-[18%] top-[-86%] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(201,164,106,0.1),transparent_58%)]" />

                  <div className="grid grid-cols-3 gap-1.5 rounded-[16px] border border-[rgba(7,17,27,0.08)] bg-[linear-gradient(180deg,rgba(252,250,246,0.985),rgba(246,242,235,0.985))] p-1.5 text-[var(--foreground)] shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_20px_44px_-38px_rgba(7,17,27,0.24)]">
                    {actions.map(({ label, meta, href, Icon, primary, accent }) =>
                      primary ? (
                        <a
                          key={label}
                          href={href}
                          className="group relative flex items-center gap-3 overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#06101a,#0c1826)] px-4 py-3 text-white shadow-[0_26px_48px_-30px_rgba(7,17,27,0.66)]"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,164,106,0.2),transparent_54%)] opacity-90" />
                          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(201,164,106,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-[var(--gold)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="relative min-w-0">
                            <p className="text-[0.88rem] font-semibold tracking-[-0.024em]">{label}</p>
                            <p className="mt-0.5 text-[0.7rem] text-white/70">{meta}</p>
                          </div>
                        </a>
                      ) : (
                        <a
                          key={label}
                          href={href}
                          className="group relative flex items-center gap-3 rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,240,232,0.92))] px-4 py-3 shadow-[0_18px_32px_-28px_rgba(7,17,27,0.22)] transition-transform duration-400 ease-[var(--ease-premium)] hover:-translate-y-[1px]"
                        >
                          {accent === "green" ? (
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,var(--green-highlight),var(--green))] text-white shadow-[0_18px_32px_-26px_rgba(61,154,66,0.42)]">
                              <WhatsAppMark className="h-4.5 w-4.5" />
                            </span>
                          ) : (
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(7,17,27,0.06)] bg-white text-[var(--green)] shadow-[0_16px_28px_-26px_rgba(7,17,27,0.18)]">
                              <Icon className="h-4 w-4" />
                            </span>
                          )}
                          <div className="min-w-0">
                            <p className="text-[0.88rem] font-semibold tracking-[-0.022em] text-[var(--foreground)]">{label}</p>
                            <p className="truncate text-[0.7rem] text-[var(--text-soft)]">{meta}</p>
                          </div>
                        </a>
                      ),
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] px-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] lg:hidden"
          >
            <div className="pointer-events-auto mx-auto max-w-[620px]">
              <div className="lux-border rounded-[18px] p-[1px] shadow-[0_30px_70px_-38px_rgba(5,11,20,0.76)]">
                <div className="relative overflow-hidden rounded-[17px] bg-[linear-gradient(145deg,rgba(6,14,25,0.96),rgba(8,18,31,0.9))] p-2 backdrop-blur-2xl">
                  <div className="absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,rgba(201,164,106,0),rgba(201,164,106,0.7),rgba(201,164,106,0))]" />
                  <div className="relative rounded-[14px] bg-[linear-gradient(180deg,rgba(252,250,246,0.99),rgba(246,242,235,0.99))] p-1">
                    <button
                      type="button"
                      onClick={() => setDismissed(true)}
                      aria-label="Sluit mobiele conversiebalk"
                      className="lux-x absolute right-2 top-2 flex h-6 w-6 items-center justify-center text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>

                    <div className="grid grid-cols-3 gap-1.5 pt-3">
                      {actions.map(({ label, meta, href, Icon, primary, accent }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={`${label} · ${meta}`}
                          title={label}
                          className={`group flex min-h-[46px] items-center justify-center rounded-[12px] px-2 py-2 text-center transition-transform duration-400 ease-[var(--ease-premium)] active:translate-y-[1px] ${
                            primary
                              ? "bg-[linear-gradient(135deg,#06101a,#0c1826)] text-white shadow-[0_22px_44px_-30px_rgba(7,17,27,0.64)]"
                              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,240,232,0.94))] text-[var(--foreground)] shadow-[0_14px_26px_-22px_rgba(7,17,27,0.18)]"
                          }`}
                        >
                          {accent === "green" ? (
                            <span className="flex h-8 w-8 items-center justify-center rounded-[11px] bg-[linear-gradient(180deg,var(--green-highlight),var(--green))] text-white shadow-[0_14px_24px_-20px_rgba(61,154,66,0.42)]">
                              <WhatsAppMark className="h-4.5 w-4.5" />
                            </span>
                          ) : (
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-[11px] ${
                                primary
                                  ? "bg-[rgba(255,255,255,0.04)] text-[var(--gold)]"
                                  : "bg-[rgba(12,24,36,0.06)] text-[var(--secondary)]"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
