import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { fadeUp, motionEase, motionViewport, staggerHeader } from "@/lib/motion";
import leichtLogo from "@/assets/Leicht_Logo.webp";
import boraLogo from "@/assets/Bora_Logo.webp";
import siemensLogo from "@/assets/Siemens_Logo.webp";
import mieleLogo from "@/assets/Miele_Logo.webp";
import quookerLogo from "@/assets/Quooker_Logo.webp";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";
import cucinesseLogo from "@/assets/Cucinesse_Logo.webp";
import arrowIcon from "@/assets/icon_arrow.webp";

const brandLogos = [
  { name: "LEICHT", logo: leichtLogo, hint: "Architectural German Design" },
  { name: "BORA", logo: boraLogo, hint: "Revolutionary Cooking Technology" },
  { name: "SIEMENS", logo: siemensLogo, hint: "Intelligence For Your Home" },
  { name: "MIELE", logo: mieleLogo, hint: "Immer besser" },
  { name: "QUOOKER", logo: quookerLogo, hint: "The Boiling Water Tap" },
  { name: "AI KÜCHEN", logo: aiKuchenLogo, hint: "German Quality Craftsmanship" },
  { name: "ZAMPIERI", logo: zampieriLogo, hint: "Italian Luxury Kitchen Design" },
  { name: "CUCINESSE", logo: cucinesseLogo, hint: "Italian Tailor Made Kitchens" },
] as const;

export function Brands() {
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...brandLogos, ...brandLogos];
  const brandRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tooltipLeft = useMotionValue(0);
  const tooltipTop = useMotionValue(0);

  useEffect(() => {
    if (reduceMotion || hoveredIndex === null) return;

    let raf = 0;
    const update = () => {
      const el = brandRefs.current[hoveredIndex];
      if (el) {
        const rect = el.getBoundingClientRect();
        tooltipLeft.set(rect.left + rect.width / 2);
        tooltipTop.set(rect.bottom + 12);
      }
      raf = window.requestAnimationFrame(update);
    };

    update();
    return () => window.cancelAnimationFrame(raf);
  }, [hoveredIndex, reduceMotion, tooltipLeft, tooltipTop]);

  return (
    <section id="brands" className="section-shell pt-2 md:pt-4 !pb-8 md:!pb-10 border-b border-[rgba(200,169,107,0.15)]">
      <div className="site-container">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={motionViewport}
          variants={reduceMotion ? undefined : staggerHeader}
          className="overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(200,169,107,0.15)] bg-[#FAF8F4] px-6 py-7 text-[var(--foreground)] shadow-[0_20px_62px_-40px_rgba(23,25,28,0.1)] md:px-8 md:py-8"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[28rem]">
              <motion.p
                variants={reduceMotion ? undefined : fadeUp}
                className="block text-[0.6875rem] font-normal uppercase tracking-[0.25em] text-[#C8A96B]"
              >
                Premium partners onder één dak
              </motion.p>
              <motion.h2
                variants={reduceMotion ? undefined : fadeUp}
                className="mt-8 font-serif text-[clamp(2.35rem,3.9vw,3rem)] leading-[1.15] tracking-[-0.01em] text-[var(--secondary)]"
              >
                Duitse precisie en
                <br />
                Italiaanse elegantie.
              </motion.h2>
            </div>
            <motion.p
              variants={reduceMotion ? undefined : fadeUp}
              className="mt-6 max-w-[500px] text-[1.125rem] font-light leading-[1.6] tracking-[0.01em] text-[var(--text-soft)] md:mt-0"
            >
              Keuken-Centrum selecteert alleen merken die passen bij een hoogwaardige showroom:
              architectonische keukenmerken, verfijnde afwerkingen en apparatuur die vertrouwen
              uitstraalt vanaf het eerste contact.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-7 w-screen max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(90deg,#FAF8F4,rgba(250,248,244,0))]" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(270deg,#FAF8F4,rgba(250,248,244,0))]" />
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-12 px-10 py-6 will-change-transform"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 52,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }
            }
          >
            {marqueeItems.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial="rest"
                animate="rest"
                className="group relative flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex((current) => (current === index ? null : current))}
                ref={(el) => {
                  brandRefs.current[index] = el;
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 w-auto opacity-70 grayscale transition-[opacity,filter,transform] duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:translate-y-[-1px]"
                  loading="lazy"
                />
                <span className="sr-only">{brand.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {hoveredIndex !== null
        ? createPortal(
            <motion.div
              style={{ left: tooltipLeft, top: tooltipTop }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(6px)" }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.52, ease: motionEase.premium }}
              className="pointer-events-none fixed z-[200] -translate-x-1/2"
            >
              <div className="relative pt-10">
                <motion.div
                  aria-hidden="true"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.62, ease: motionEase.premium }}
                  className="absolute left-1/2 top-0 h-12 w-24 -translate-x-1/2 drop-shadow-[0_16px_26px_rgba(23,25,28,0.12)]"
                >
                  <motion.img
                    src={arrowIcon}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain"
                    draggable={false}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14, rotate: -8 }}
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : {
                            opacity: 1,
                            y: [14, 0],
                            rotate: [0, -2, 0],
                          }
                    }
                    transition={
                      reduceMotion ? undefined : { duration: 0.7, ease: motionEase.soft }
                    }
                  />
                </motion.div>

                <motion.div
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.56, ease: motionEase.premium, delay: 0.08 }}
                  className="flex items-center gap-2 rounded-full border border-[rgba(200,169,107,0.15)] bg-[rgba(250,248,244,0.98)] px-4 py-2.5 text-[0.78rem] font-medium tracking-[-0.01em] text-[var(--secondary)] shadow-[0_18px_40px_-28px_rgba(23,25,28,0.12)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_0_3px_rgba(61,154,66,0.12)]" />
                  <span>{marqueeItems[hoveredIndex].hint}</span>
                </motion.div>
              </div>
            </motion.div>,
            document.body,
          )
        : null}
    </section>
  );
}
