import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { cn } from "@/lib/utils";
import { fadeUp, motionViewport, revealImage, staggerHeader, staggerList } from "@/lib/motion";

// Import base configurator webp images
import modernBase from "@/assets/configurator/modern-base.webp";
import klassiekBase from "@/assets/configurator/klassiek-base.webp";
import landelijkBase from "@/assets/configurator/landelijk-base.webp";
import industrieelBase from "@/assets/configurator/industrieel-base.webp";

// Import style-specific hotspot JSON configurations
import modernHotspots from "@/data/hotspots/modern-hotspots.json";
import klassiekHotspots from "@/data/hotspots/klassiek-hotspots.json";
import landelijkHotspots from "@/data/hotspots/landelijk-hotspots.json";
import industrieelHotspots from "@/data/hotspots/industrieel-hotspots.json";

type WizardStep = "brand" | "style" | "configure" | "moodboard" | "consultation";

type ConfigSelection = {
  id: string;
  label: string;
  color?: string;
};

type ConsultationForm = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const wizardSteps: Array<{ id: WizardStep; number: string; label: string; title: string }> = [
  { id: "brand", number: "01", label: "Merk", title: "Kies uw merk" },
  { id: "style", number: "02", label: "Stijl", title: "Kies uw stijl" },
  { id: "configure", number: "03", label: "Configuratie", title: "Configureer uw keuken" },
  { id: "moodboard", number: "04", label: "Voorstel", title: "Uw ontwerpvoorstel" },
  { id: "consultation", number: "05", label: "Advies", title: "Plan uw adviesgesprek" },
];

const brandVisuals: Record<string, string> = {
  leicht: kc.hero.main,
  nobilia: kc.hero.alt1,
  aikuchen: kc.hero.alt2,
  zampieri: kc.hero.alt3,
  cucinesse: kc.hero.alt4,
};

const styleBases: Record<string, string> = {
  modern: modernBase,
  klassiek: klassiekBase,
  landelijk: landelijkBase,
  industrieel: industrieelBase,
};

const categoryIdToHotspotKey: Record<string, string> = {
  finishes: "front",
  worktops: "werkblad",
  sinks: "spoelbak",
  appliances: "apparatuur",
  quooker: "quooker",
  bora: "bora",
  grepen: "grepen",
  verlichting: "verlichting",
};

const hotspotsMap: Record<string, Record<string, { x: string; y: string }>> = {
  modern: modernHotspots,
  klassiek: klassiekHotspots,
  landelijk: landelijkHotspots,
  industrieel: industrieelHotspots,
};

const styleKeywords: Record<string, string[]> = {
  modern: ["Minimalistisch", "Strak", "Architectonisch"],
  klassiek: ["Elegant", "Sfeervol", "Tijdloos"],
  landelijk: ["Warm", "Karaktervol", "Natuurlijk"],
  industrieel: ["Stoer", "Robuust", "Urban"],
};

const styleProposalTitles: Record<string, string> = {
  modern: "Uw Modern Droomkeuken",
  klassiek: "Uw Klassieke Droomkeuken",
  landelijk: "Uw Landelijke Droomkeuken",
  industrieel: "Uw Industriële Droomkeuken",
};

const swatchPalette = [
  "#F1EEE8",
  "#1A1A1A",
  "#B08A5C",
  "#33373B",
  "#C9BFA8",
  "#8E8B82",
  "#D9D3C7",
  "#4F7A4D",
] as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mapOptions(items: Array<string | { id: string; label: string; color?: string }>, paletteOffset = 0) {
  return items.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: slugify(item),
        label: item,
        color: swatchPalette[(paletteOffset + index) % swatchPalette.length],
      };
    }

    return {
      id: item.id,
      label: item.label,
      color: item.color ?? swatchPalette[(paletteOffset + index) % swatchPalette.length],
    };
  });
}

// Smart placement: pick the direction with most viewport room
function getPlacement(px: number, py: number): "top" | "bottom" | "left" | "right" {
  if (px > 65) return "left";
  if (px < 35) return "right";
  if (py < 40) return "bottom";
  return "top";
}

function HotspotTooltip({
  x,
  y,
  title,
  description,
  visible,
  dotSize,
}: {
  x: string;
  y: string;
  title: string;
  description: string;
  visible: boolean;
  dotSize: number;
}) {
  const px = parseFloat(x);
  const py = parseFloat(y);
  const placement = useMemo(() => getPlacement(px, py), [px, py]);

  // Geometry constants (px)
  const DOT_R = dotSize / 2;      // dynamic visual radius of dot
  const STEM = 22;                 // straight stem from dot edge
  const CARD_W = 210;
  const cardOffset = DOT_R + STEM + 4;

  // Build curved "gagang pintu" SVG path
  // Origin (0,0) = hotspot center
  let pathD = "";
  let attachX = 0;
  let attachY = 0;

  if (placement === "right") {
    const x1 = DOT_R; const x2 = DOT_R + STEM;
    pathD = `M ${x1} 0 L ${x2} 0`;
    attachX = x2; attachY = 0;
  } else if (placement === "left") {
    const x1 = -DOT_R; const x2 = -(DOT_R + STEM);
    pathD = `M ${x1} 0 L ${x2} 0`;
    attachX = x2; attachY = 0;
  } else if (placement === "bottom") {
    const y1 = DOT_R; const y2 = DOT_R + STEM;
    pathD = `M 0 ${y1} L 0 ${y2}`;
    attachX = 0; attachY = y2;
  } else {
    // top
    const y1 = -DOT_R; const y2 = -(DOT_R + STEM);
    pathD = `M 0 ${y1} L 0 ${y2}`;
    attachX = 0; attachY = y2;
  }

  // Card position relative to wrapper (0,0) = hotspot center
  const cardStyles: Record<string, { style: React.CSSProperties; tr: string }> = {
    right:  { style: { left: cardOffset, top: 0 },    tr: "-translate-y-1/2" },
    left:   { style: { right: cardOffset, top: 0 },   tr: "-translate-y-1/2" },
    top:    { style: { bottom: cardOffset, left: 0 },  tr: "-translate-x-1/2" },
    bottom: { style: { top: cardOffset, left: 0 },     tr: "-translate-x-1/2" },
  };
  const { style: cardStyle, tr: cardTr } = cardStyles[placement];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute pointer-events-none z-50"
          style={{ left: 0, top: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
        >
          {/* SVG connector — zero-size at hotspot center, overflow:visible */}
          <svg
            aria-hidden="true"
            className="absolute pointer-events-none"
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
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Anchor dot at card attachment point */}
            <motion.circle
              cx={attachX}
              cy={attachY}
              r="1.5"
              fill="#D4AF37"
              fillOpacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ delay: 0.14, duration: 0.18 }}
            />
          </svg>

          {/* Compact tooltip card */}
          <motion.div
            className={`absolute pointer-events-none ${cardTr}`}
            style={{ ...cardStyle, width: CARD_W }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[rgba(9,9,9,0.96)] border border-[rgba(212,175,55,0.18)] rounded-[12px] shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-[20px] px-4 py-3">
              <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37] mb-1.5">
                CONFIGURATIE
              </span>
              <h4 className="font-serif text-[13px] font-semibold leading-snug text-white tracking-[-0.01em] uppercase">
                {title}
              </h4>
              <div className="h-px w-full bg-[rgba(212,175,55,0.1)] my-2" />
              <p className="text-[11px] leading-[1.6] text-zinc-400">
                {description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Configurator() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState<WizardStep>("brand");
  const [selectedBrand, setSelectedBrand] = useState<(typeof kc.kitchenBrands)[number] | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<(typeof kc.styles)[number] | null>(null);
  const [activeCategory, setActiveCategory] = useState("finishes");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
        return;
      }
      const handleTouch = () => {
        setIsTouch(true);
        window.removeEventListener("touchstart", handleTouch);
      };
      window.addEventListener("touchstart", handleTouch, { passive: true });
      return () => window.removeEventListener("touchstart", handleTouch);
    }
  }, []);

  const [consultationSent, setConsultationSent] = useState(false);
  const [consultation, setConsultation] = useState<ConsultationForm>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [selections, setSelections] = useState<Record<string, ConfigSelection>>({});

  const configureCategories = useMemo(
    () => [
      {
        id: "finishes",
        label: "Front",
        options: kc.config.finishes.map((item) => ({
          id: item.id,
          label: item.label,
          color: item.color,
        })),
      },
      {
        id: "worktops",
        label: "Werkblad",
        options: mapOptions(kc.config.worktops, 2),
      },
      {
        id: "sinks",
        label: "Spoelbak",
        options: mapOptions(kc.config.sinks, 3),
      },
      {
        id: "appliances",
        label: "Apparatuur",
        options: mapOptions(kc.config.appliances, 4),
      },
      {
        id: "quooker",
        label: "Quooker",
        options: mapOptions(kc.config.quooker, 1),
      },
      {
        id: "bora",
        label: "Bora",
        options: mapOptions(kc.config.bora, 5),
      },
      {
        id: "grepen",
        label: "Grepen",
        options: mapOptions(kc.config.grepen, 6),
      },
      {
        id: "verlichting",
        label: "Verlichting",
        options: mapOptions(kc.config.verlichting, 7),
      },
      {
        id: "budgets",
        label: "Budget",
        options: kc.config.budgets.map((item, index) => ({
          id: item.id,
          label: item.label,
          color: swatchPalette[index % swatchPalette.length],
        })),
      },
    ],
    [],
  );

  const activeCategoryData =
    configureCategories.find((category) => category.id === activeCategory) ?? configureCategories[0];

  const configuredItems = configureCategories.filter((category) => selections[category.id]);
  const selectedBudget = selections.budgets?.label ?? kc.config.budgets[1].label;
  const currentStepIndex = wizardSteps.findIndex((item) => item.id === step);
  const progressWidth = `${((currentStepIndex + 1) / wizardSteps.length) * 100}%`;

  const previewImage =
    (selectedStyle && styleBases[selectedStyle.id]) ||
    (selectedBrand && brandVisuals[selectedBrand.id]) ||
    kc.hero.main;

  const hotspotData = useMemo(() => {
    if (!selectedStyle) return {};
    return hotspotsMap[selectedStyle.id] || {};
  }, [selectedStyle]);

  const consultationValid = consultation.name.trim() && consultation.email.trim();

  const canOpenStep = (target: WizardStep) => {
    if (target === "brand") return true;
    if (target === "style") return Boolean(selectedBrand);
    if (target === "configure") return Boolean(selectedBrand && selectedStyle);
    if (target === "moodboard") return Boolean(selectedBrand && selectedStyle);
    if (target === "consultation") return Boolean(selectedBrand && selectedStyle);
    return false;
  };

  const nextStep = () => {
    if (step === "brand" && selectedBrand) setStep("style");
    if (step === "style" && selectedStyle) setStep("configure");
    if (step === "configure") setStep("moodboard");
    if (step === "moodboard") setStep("consultation");
  };

  const prevStep = () => {
    if (step === "style") setStep("brand");
    if (step === "configure") setStep("style");
    if (step === "moodboard") setStep("configure");
    if (step === "consultation") setStep("moodboard");
  };

  return (
    <section id="configurator" className="section-shell">
      <div className="site-container">
        <div className="grid gap-10">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : staggerHeader}
            className="section-header-split"
          >
            <div className="max-w-[38rem]">
              <motion.div variants={reduceMotion ? undefined : fadeUp} className="section-label-row">
                <span className="luxe-rule" />
                <span className="eyebrow">Ontwerp Journey</span>
              </motion.div>
              <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
                Configureer uw
                <br />
                droomkeuken.
              </motion.h2>
            </div>
            <motion.p variants={reduceMotion ? undefined : fadeUp} className="body-md max-w-[30rem]">
              Kies uw favoriete premium keukenmerk, selecteer de architectonische stijlrichting die bij uw woning past en configureer de materialen, apparatuur en verlichting tot in detail.
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="surface-card rounded-xl"
          >
            <div className="border-b border-[var(--border)] px-5 py-5 md:px-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="caption-text text-[var(--accent)]">
                      Stap {wizardSteps[currentStepIndex].number} van 05
                    </p>
                    <h3 className="mt-2 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                      {wizardSteps[currentStepIndex].title}
                    </h3>
                  </div>
                  <div className="hidden min-w-[220px] lg:block">
                    <div className="h-1.5 w-full bg-[rgba(17,17,17,0.08)]">
                      <div
                        className="h-full bg-[var(--accent)] transition-[width] duration-500 ease-[var(--ease-premium)]"
                        style={{ width: progressWidth }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-5">
                  {wizardSteps.map((item, index) => {
                    const active = item.id === step;
                    const completed = index < currentStepIndex;
                    const clickable = canOpenStep(item.id);

                    return (
                      <button
                        key={item.id}
                        type="button"
                        disabled={!clickable}
                        onClick={() => {
                          if (clickable) setStep(item.id);
                        }}
                        className={cn(
                          "flex items-center gap-3 border px-3 py-3 text-left transition-all duration-300",
                          active
                            ? "border-[var(--accent)] bg-[rgba(176,141,87,0.08)]"
                            : "border-[var(--border)] bg-white/50",
                          clickable ? "cursor-pointer hover:border-[var(--accent)]" : "cursor-not-allowed opacity-55",
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex h-8 w-8 items-center justify-center border text-[0.68rem] uppercase tracking-[0.18em]",
                            active || completed
                              ? "border-[var(--accent)] text-[var(--accent)]"
                              : "border-[var(--border)] text-[var(--text-muted)]",
                          )}
                        >
                          {completed ? <Check className="h-4 w-4" /> : item.number}
                        </span>
                        <div className="min-w-0">
                          <p className="caption-text text-[var(--text-muted)]">{item.label}</p>
                          <p className="mt-1 text-sm tracking-[-0.02em] text-[var(--foreground)]">
                            {item.title}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="px-5 py-6 md:px-8 md:py-8">
              <AnimatePresence mode="wait">
                {step === "brand" ? (
                  <motion.div
                    key="brand"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-6"
                  >
                    <div className="max-w-[34rem]">
                      <p className="body-md">
                        Selecteer eerst het keukenmerk dat het best past bij uw woonwensen. Dit vormt het fundament voor de verdere samenstelling van uw droomkeuken.
                      </p>
                    </div>

                    <motion.div
                      initial={reduceMotion ? false : "hidden"}
                      animate="visible"
                      variants={reduceMotion ? undefined : staggerList}
                      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
                    >
                      {kc.kitchenBrands.map((brand) => {
                        const active = selectedBrand?.id === brand.id;
                        const image = brandVisuals[brand.id] ?? kc.hero.main;

                        return (
                          <motion.button
                            key={brand.id}
                            type="button"
                            variants={reduceMotion ? undefined : fadeUp}
                            onClick={() => setSelectedBrand(brand)}
                            className={cn(
                              "group relative overflow-hidden border text-left transition-all duration-300",
                              active
                                ? "border-[var(--accent)] shadow-[0_20px_56px_-36px_rgba(176,141,87,0.28)]"
                                : "border-[var(--border)] hover:border-[var(--accent)]/60",
                            )}
                          >
                            <img
                              src={image}
                              alt={brand.name}
                              className="aspect-[0.95/1] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.12)_0%,rgba(17,17,17,0.72)_100%)]" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                              <p className="caption-text text-[var(--accent)]">{brand.country}</p>
                              <h4 className="mt-3 font-serif text-[1.7rem] leading-none tracking-[-0.03em] text-white">
                                {brand.name}
                              </h4>
                              <p className="mt-3 text-sm leading-7 text-white/78">{brand.story}</p>
                            </div>
                            {active ? (
                              <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white">
                                <Check className="h-4 w-4" />
                              </span>
                            ) : null}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                ) : null}

                {step === "style" ? (
                  <motion.div
                    key="style"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-6"
                  >
                    <div className="max-w-[34rem]">
                      <p className="body-md">
                        Hieronder vindt u de vier ontwerpstijlen die wij aanbieden. Van strak minimalistisch tot warm en karaktervol: iedere stijl vormt de basis voor uw persoonlijke keukenontwerp.
                      </p>
                    </div>

                    <motion.div
                      initial={reduceMotion ? false : "hidden"}
                      animate="visible"
                      variants={reduceMotion ? undefined : staggerList}
                      className="grid gap-4 lg:grid-cols-2"
                    >
                      {kc.styles.map((style) => {
                        const active = selectedStyle?.id === style.id;
                        const keywords = styleKeywords[style.id] ?? ["Premium", "Warm", "Verfijnd"];

                        return (
                          <motion.button
                            key={style.id}
                            type="button"
                            variants={reduceMotion ? undefined : fadeUp}
                            onClick={() => setSelectedStyle(style)}
                            className={cn(
                              "group relative overflow-hidden border text-left transition-all duration-300",
                              active
                                ? "border-[var(--accent)] shadow-[0_20px_56px_-36px_rgba(176,141,87,0.28)]"
                                : "border-[var(--border)] hover:border-[var(--accent)]/60",
                            )}
                          >
                            <img
                              src={style.img}
                              alt={style.t}
                              className="aspect-[1.3/1] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08)_0%,rgba(17,17,17,0.76)_100%)]" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                              <p className="caption-text text-[var(--accent)]">Stijlrichting</p>
                              <h4 className="mt-3 font-serif text-[1.9rem] leading-none tracking-[-0.03em] text-white">
                                {style.t}
                              </h4>
                              <p className="mt-3 max-w-[30rem] text-sm leading-7 text-white/78">
                                {style.d}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {keywords.map((keyword) => (
                                  <span
                                    key={keyword}
                                    className="border border-white/16 bg-white/8 px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.16em] text-white/72"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {active ? (
                              <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white">
                                <Check className="h-4 w-4" />
                              </span>
                            ) : null}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                ) : null}

                {step === "configure" ? (
                  <motion.div
                    key="configure"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start"
                  >
                    {/* Left Column: Interactive Base Configurator */}
                    <motion.div
                      variants={reduceMotion ? undefined : revealImage}
                      className="overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[var(--ink)] p-4 text-white shadow-[var(--shadow-dark)] md:p-5"
                    >
                      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
                        <div>
                          <p className="caption-text text-[rgba(247,245,242,0.44)]">Interactieve Preview</p>
                          <p className="mt-2 font-serif text-[1.8rem] leading-none tracking-[-0.03em] text-white">
                            Configureer & preview
                          </p>
                        </div>
                        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          {configuredItems.length}/{configureCategories.length} geselecteerd
                        </p>
                      </div>

                      <div className="mt-4 grid gap-4">
                        <div className="relative overflow-hidden border border-white/8">
                          <img
                            src={previewImage}
                            alt="Configurator preview"
                            className="aspect-[1.38/1] h-full w-full object-cover transition-all duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02)_0%,rgba(17,17,17,0.45)_100%)]" />

                          {/* Premium minimal hotspots — hover shows tooltip, click activates category panel */}
                          {configureCategories.map((category) => {
                            const hotspotKey = categoryIdToHotspotKey[category.id];
                            const hotspot = hotspotKey ? hotspotData[hotspotKey] : null;
                            if (!hotspot) return null;

                            const selected = selections[category.id];
                            const isActive = activeCategory === category.id;
                            const isHovered = hoveredCategory === category.id;
                            const anyHovered = hoveredCategory !== null;

                            // Dot size: 18 default → 22 hover → 24 active
                            const dotSize = isActive ? 24 : isHovered ? 22 : 18;

                            return (
                              <div
                                key={category.id}
                                className="absolute z-20"
                                style={{ left: hotspot.x, top: hotspot.y }}
                                onMouseEnter={() => setHoveredCategory(category.id)}
                                onMouseLeave={() => setHoveredCategory(null)}
                              >
                                {/* Hotspot button — centered on coordinate */}
                                <button
                                  type="button"
                                  onClick={() => setActiveCategory(category.id)}
                                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                  style={{
                                    transition: "opacity 0.3s ease",
                                    opacity: anyHovered && !isHovered ? 0.3 : 1,
                                  }}
                                  aria-label={`Configureer ${category.label}`}
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
                                        boxShadow: isHovered || isActive
                                          ? "0 0 20px rgba(212,175,55,0.35), 0 0 36px rgba(255,255,255,0.12)"
                                          : "0 0 12px rgba(255,255,255,0.18), 0 0 24px rgba(212,175,55,0.20)",
                                        animation: !isHovered && !isActive
                                          ? "hotspotBreathe 3s ease-in-out infinite"
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
                                        border: `2px solid ${isHovered || isActive ? "#D4AF37" : "rgba(212,175,55,0.85)"}`,
                                        backgroundColor: isHovered || isActive
                                          ? "rgba(212,175,55,0.12)"
                                          : "rgba(0,0,0,0.45)",
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

                                {/* Smart-positioned hover tooltip */}
                                <HotspotTooltip
                                  x={hotspot.x}
                                  y={hotspot.y}
                                  title={category.label}
                                  description={selected?.label ?? "Klik om uw voorkeur te bepalen."}
                                  visible={isHovered || (isActive && isTouch)}
                                  dotSize={18}
                                />
                              </div>
                            );
                          })}

                          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 to-transparent">
                            <p className="caption-text text-white/60">
                              {selectedBrand?.name ?? "Merk"} · {selectedStyle?.t ?? "Stijl"}
                            </p>
                            <p className="mt-2 max-w-[20rem] font-serif text-[1.8rem] leading-none tracking-[-0.03em] text-white">
                              Uw persoonlijke stijl,
                              <br />
                              tot in detail verfijnd.
                            </p>
                          </div>
                        </div>

                        {/* Category selector strip */}
                        <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-2">
                          <div className="flex flex-wrap gap-1.5">
                            {configureCategories.map((category) => {
                              const active = activeCategory === category.id;
                              const selected = selections[category.id];

                              return (
                                <button
                                  key={category.id}
                                  type="button"
                                  onClick={() => setActiveCategory(category.id)}
                                  className={cn(
                                    "flex items-center gap-2 px-3.5 py-2 text-xs transition-all duration-300 border",
                                    active
                                      ? "border-[rgba(176,141,87,0.4)] bg-[rgba(176,141,87,0.15)] text-white"
                                      : "border-transparent text-white/65 hover:text-white hover:bg-white/5"
                                  )}
                                >
                                  <span>{category.label}</span>
                                  {selected?.color ? (
                                    <span
                                      className="h-2 w-2 rounded-full border border-white/40"
                                      style={{ backgroundColor: selected.color }}
                                    />
                                  ) : selected ? (
                                    <Check className="h-3 w-3 text-[var(--accent)]" />
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Column: Option selection & Sticky Summary */}
                    <motion.div
                      variants={reduceMotion ? undefined : fadeUp}
                      className="surface-card p-5 md:p-6 xl:sticky xl:top-8 xl:self-start transition-all"
                    >
                      <div className="border-b border-[var(--border)] pb-4">
                        <p className="caption-text text-[var(--accent)]">{activeCategoryData.label}</p>
                        <h4 className="mt-2 font-serif text-[1.9rem] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                          Selecteer uw voorkeur
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                          Kies uit onze speciaal geselecteerde premium opties om de uitstraling van uw keuken te bepalen.
                        </p>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2 max-h-[300px] overflow-y-auto pr-1">
                        {activeCategoryData.options.map((option) => {
                          const active = selections[activeCategoryData.id]?.id === option.id;

                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() =>
                                setSelections((current) => ({
                                  ...current,
                                  [activeCategoryData.id]: option,
                                }))
                              }
                              className={cn(
                                "border p-4 text-left transition-all duration-300 rounded-sm relative overflow-hidden",
                                active
                                  ? "border-[var(--accent)] bg-[rgba(176,141,87,0.08)]"
                                  : "border-[var(--border)] bg-white/60 hover:border-[var(--accent)]/60",
                              )}
                            >
                              <div
                                className="mb-3 h-10 w-full border border-[var(--border)] rounded-sm"
                                style={{ backgroundColor: option.color ?? "#E9E2D5" }}
                              />
                              <p className="text-sm font-medium tracking-[-0.02em] text-[var(--foreground)]">
                                {option.label}
                              </p>
                              {active ? (
                                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--accent)] font-semibold flex items-center gap-1">
                                  <Check className="h-3.5 w-3.5" /> Geselecteerd
                                </p>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>

                      {/* Summary Section */}
                      <div className="mt-6 border-t border-[var(--border)] pt-5">
                        <p className="caption-text text-[var(--accent)]">Actueel overzicht</p>
                        <div className="mt-4 grid gap-3 max-h-[220px] overflow-y-auto pr-1">
                          <SummaryRow label="Merk" value={selectedBrand?.name} />
                          <SummaryRow label="Stijl" value={selectedStyle?.t} />
                          {configureCategories.map((category) => {
                            if (category.id === "budgets") return null; // We display budget separately or at the bottom
                            const sel = selections[category.id];
                            return (
                              <SummaryRow
                                key={category.id}
                                label={category.label}
                                value={sel?.label}
                                color={sel?.color}
                              />
                            );
                          })}
                          <SummaryRow label="Budget" value={selections.budgets?.label} />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : null}

                {step === "moodboard" ? (
                  <motion.div
                    key="moodboard"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-5 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
                  >
                    <div className="overflow-hidden border border-[var(--border)] bg-[var(--ink)] text-white shadow-[var(--shadow-dark)]">
                      <div className="relative">
                        <img
                          src={previewImage}
                          alt="Moodboard preview"
                          className="aspect-[1.3/1] h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08)_0%,rgba(17,17,17,0.68)_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <p className="caption-text text-[var(--accent)]">Uw persoonlijk keukenontwerp</p>
                          <h4 className="mt-3 font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-white">
                            {selectedStyle ? styleProposalTitles[selectedStyle.id] : "Uw Droomkeuken"}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-white/76">
                            {selectedBrand?.name ?? "Premium"} · {selectedStyle?.t ?? "Stijl"} · {selectedBudget}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="surface-card p-5 md:p-6">
                      <p className="caption-text text-[var(--accent)]">Moodboard Summary</p>
                      <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                        Review uw keuzes.
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                        Hieronder vindt u een overzicht van de geselecteerde materialen, merken en apparatuur. Dit overzicht vormt het startpunt voor uw showroombezoek.
                      </p>

                      <div className="mt-6 grid gap-3 border-t border-[var(--border)] pt-5 max-h-[300px] overflow-y-auto pr-1">
                        <SummaryRow label="Merk" value={selectedBrand?.name} />
                        <SummaryRow label="Stijl" value={selectedStyle?.t} />
                        {configureCategories.map((category) => {
                          if (category.id === "budgets") return null;
                          const sel = selections[category.id];
                          return (
                            <SummaryRow
                              key={category.id}
                              label={category.label}
                              value={sel?.label}
                              color={sel?.color}
                            />
                          );
                        })}
                      </div>

                      <div className="mt-6 border border-[rgba(176,141,87,0.24)] bg-[rgba(17,17,17,0.96)] px-5 py-5 text-white">
                        <p className="caption-text text-white/42">Geschatte investering</p>
                        <p className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.03em] text-[var(--accent)]">
                          {selectedBudget}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/62">
                          Indicatieve range op basis van gekozen richting, afwerking en premium apparatuur. De definitieve offerte stellen we samen op in de showroom.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                {step === "consultation" ? (
                  <motion.div
                    key="consultation"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="grid gap-5 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
                  >
                    <div className="overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[var(--ink)] px-5 py-6 text-white shadow-[var(--shadow-dark)] md:px-6">
                      <p className="caption-text text-[var(--accent)]">Showroomafspraak</p>
                      <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-white">
                        Persoonlijk vervolg in Utrecht.
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-white/72">
                        Uw keuzes worden meegenomen naar een adviesgesprek in onze showroom. Samen met een adviseur van Keuken-Centrum Utrecht verfijnen we het ontwerp.
                      </p>

                      <div className="mt-6 grid gap-px border border-white/8 bg-white/8">
                        <ContactRow icon={<House className="h-4 w-4" />} label="Showroom" value={`${kc.contact.address}, Utrecht`} />
                        <ContactRow icon={<Phone className="h-4 w-4" />} label="Telefoon" value={kc.contact.phone} />
                        <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail" value={kc.contact.email} />
                      </div>

                      <div className="mt-6 border-t border-white/8 pt-5">
                        <p className="caption-text text-white/42">Uw voorstel</p>
                        <div className="mt-4 grid gap-3">
                          <SummaryRow dark label="Merk" value={selectedBrand?.name} />
                          <SummaryRow dark label="Stijl" value={selectedStyle?.t} />
                          <SummaryRow dark label="Budget" value={selectedBudget} />
                        </div>
                      </div>
                    </div>

                    <div className="surface-card p-5 md:p-6">
                      {!consultationSent ? (
                        <>
                          <p className="caption-text text-[var(--accent)]">Stap 05 van 05</p>
                          <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                            Vraag uw showroomadvies aan.
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                            Laat uw gegevens achter. Wij nemen direct contact op om uw configuratie en showroombezoek af te stemmen.
                          </p>

                          <form
                            className="mt-6 grid gap-4"
                            onSubmit={(event) => {
                              event.preventDefault();
                              if (!consultationValid) return;
                              setConsultationSent(true);
                            }}
                          >
                            <Input
                              value={consultation.name}
                              onChange={(event) =>
                                setConsultation((current) => ({ ...current, name: event.target.value }))
                              }
                              placeholder="Volledige naam"
                              required
                            />
                            <Input
                              type="email"
                              value={consultation.email}
                              onChange={(event) =>
                                setConsultation((current) => ({ ...current, email: event.target.value }))
                              }
                              placeholder="E-mailadres"
                              required
                            />
                            <Input
                              type="tel"
                              value={consultation.phone}
                              onChange={(event) =>
                                setConsultation((current) => ({ ...current, phone: event.target.value }))
                              }
                              placeholder="Telefoonnummer"
                            />
                            <Textarea
                              value={consultation.notes}
                              onChange={(event) =>
                                setConsultation((current) => ({ ...current, notes: event.target.value }))
                              }
                              placeholder="Vertel iets over uw woning, planning of gewenste stijlrichting."
                            />
                            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                              <p className="max-w-[26rem] text-sm leading-7 text-[var(--text-soft)]">
                                Uw gegevens worden uitsluitend gebruikt om uw showroomafspraak en eerste keukenvoorstel voor te bereiden.
                              </p>
                              <Button type="submit" disabled={!consultationValid}>
                                Plan adviesgesprek
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        </>
                      ) : (
                        <div className="flex min-h-[420px] flex-col items-start justify-center">
                          <span className="inline-flex h-16 w-16 items-center justify-center border border-[var(--accent)] bg-[rgba(176,141,87,0.08)] text-[var(--accent)]">
                            <Check className="h-7 w-7" />
                          </span>
                          <p className="caption-text mt-6 text-[var(--accent)]">Adviesgesprek aangevraagd</p>
                          <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                            Bedankt, {consultation.name.split(" ")[0] || "u"}.
                          </h4>
                          <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[var(--text-soft)]">
                            Uw aanvraag is ontvangen. Een adviseur van Keuken-Centrum Utrecht neemt contact op via {consultation.email} of uw telefoonnummer om uw configuratie en showroombezoek in te plannen.
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Button asChild>
                              <a href="#showroom">
                                Bekijk showroom
                                <ArrowRight className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button asChild variant="outline">
                              <a href={kc.contact.phoneHref}>Bel direct</a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  {step !== "brand" ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="h-4 w-4" />
                      Vorige stap
                    </Button>
                  ) : null}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {step === "brand" ? (
                    <Button type="button" onClick={nextStep} disabled={!selectedBrand}>
                      Kies uw stijl
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "style" ? (
                    <Button type="button" onClick={nextStep} disabled={!selectedStyle}>
                      Configureer keuken
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "configure" ? (
                    <Button type="button" onClick={nextStep}>
                      Bekijk voorstel
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "moodboard" ? (
                    <Button type="button" onClick={nextStep}>
                      Plan adviesgesprek
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
  label,
  value,
  color,
  dark = false,
}: {
  label: string;
  value?: string;
  color?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className={cn("caption-text", dark ? "text-white/42" : "text-[var(--text-muted)]")}>
        {label}
      </span>
      <span
        className={cn(
          "flex items-center gap-2 text-right",
          dark ? "text-white/78" : "text-[var(--foreground)]/84",
        )}
      >
        {color ? (
          <span
            className={cn(
              "h-3 w-3 border",
              dark ? "border-white/28" : "border-[var(--border)]",
            )}
            style={{ backgroundColor: color }}
          />
        ) : null}
        <span>{value ?? "-"}</span>
      </span>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.02)] px-4 py-4">
      <span className="text-[var(--accent)]">{icon}</span>
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/44">{label}</p>
        <p className="mt-1 text-sm text-white">{value}</p>
      </div>
    </div>
  );
}
