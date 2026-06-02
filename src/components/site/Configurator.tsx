import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check, House, Mail, Phone } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import { cn } from "@/lib/utils";
import { fadeUp, motionViewport, revealImage, staggerHeader, staggerList } from "@/lib/motion";

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
  { id: "brand", number: "01", label: "Brand", title: "Choose Your Brand" },
  { id: "style", number: "02", label: "Style", title: "Choose Your Style" },
  { id: "configure", number: "03", label: "Configure", title: "Configure Kitchen" },
  { id: "moodboard", number: "04", label: "Moodboard", title: "Review Proposal" },
  { id: "consultation", number: "05", label: "Consult", title: "Book Consultation" },
];

const brandVisuals: Record<string, string> = {
  leicht: kc.hero.main,
  nobilia: kc.hero.alt1,
  aikuchen: kc.hero.alt2,
  zampieri: kc.hero.alt3,
  cucinesse: kc.hero.alt4,
};

const styleKeywords: Record<string, string[]> = {
  design: ["Monolithisch", "Architectonisch", "Premium"],
  modern: ["Minimal", "Functioneel", "Licht"],
  landelijk: ["Warm", "Tijdloos", "Natuurlijk"],
  industrieel: ["Robuust", "Stoer", "Karakter"],
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

const hotspotPositions: Record<string, { x: string; y: string }> = {
  layouts: { x: "22%", y: "34%" },
  finishes: { x: "36%", y: "52%" },
  worktops: { x: "56%", y: "56%" },
  appliances: { x: "18%", y: "28%" },
  quooker: { x: "69%", y: "48%" },
  bora: { x: "50%", y: "52%" },
  budgets: { x: "76%", y: "20%" },
};

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

export function Configurator() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState<WizardStep>("brand");
  const [selectedBrand, setSelectedBrand] = useState<(typeof kc.kitchenBrands)[number] | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<(typeof kc.styles)[number] | null>(null);
  const [activeCategory, setActiveCategory] = useState("layouts");
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
        id: "layouts",
        label: "Layout",
        options: mapOptions(
          kc.config.layouts.map((item) => ({ id: item.id, label: item.label })),
          0,
        ),
      },
      {
        id: "finishes",
        label: "Front Finish",
        options: kc.config.finishes.map((item) => ({
          id: item.id,
          label: item.label,
          color: item.color,
        })),
      },
      {
        id: "worktops",
        label: "Worktop",
        options: mapOptions(kc.config.worktops, 2),
      },
      {
        id: "appliances",
        label: "Appliances",
        options: mapOptions(kc.config.appliances, 4),
      },
      {
        id: "quooker",
        label: "Quooker",
        options: mapOptions(kc.config.quooker, 1),
      },
      {
        id: "bora",
        label: "BORA",
        options: mapOptions(kc.config.bora, 5),
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
    (selectedStyle && selectedStyle.img) ||
    (selectedBrand && brandVisuals[selectedBrand.id]) ||
    kc.hero.main;
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
                <span className="eyebrow">Configurator Journey</span>
              </motion.div>
              <motion.h2 variants={reduceMotion ? undefined : fadeUp} className="heading-2">
                Configurator sekarang
                <br />
                mengikuti alur repo GitHub.
              </motion.h2>
            </div>
            <motion.p variants={reduceMotion ? undefined : fadeUp} className="body-md max-w-[30rem]">
              Pilih brand, tentukan stijl, konfigurasi detail utama, review moodboard, lalu kirim
              permintaan consultation. Flow ini dibuat agar terasa seperti experience di repo
              master, tetapi tetap memakai konten dan data Keuken-Centrum Utrecht.
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={motionViewport}
            variants={reduceMotion ? undefined : fadeUp}
            className="surface-card overflow-hidden"
          >
            <div className="border-b border-[var(--border)] px-5 py-5 md:px-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="caption-text text-[var(--accent)]">
                      Step {wizardSteps[currentStepIndex].number} of 05
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
                        Selecteer eerst het keukenmerk dat het best past bij uw woonwensen. Net als
                        in de GitHub configurator vormt dit de basis van alle volgende keuzes.
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
                        Stap twee volgt de repository-flow: kies de stijlrichting die uw keuken
                        architectonisch definieert, voordat u de materialen en apparatuur instelt.
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
                        const keywords = styleKeywords[style.id] ?? ["Premium", "Warm", "Refined"];

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
                              <p className="caption-text text-[var(--accent)]">Style Direction</p>
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
                    className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
                  >
                    <motion.div
                      variants={reduceMotion ? undefined : revealImage}
                      className="overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[var(--ink)] p-4 text-white shadow-[var(--shadow-dark)] md:p-5"
                    >
                      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
                        <div>
                          <p className="caption-text text-[rgba(247,245,242,0.44)]">Interactive Preview</p>
                          <p className="mt-2 font-serif text-[1.8rem] leading-none tracking-[-0.03em] text-white">
                            Configure & preview
                          </p>
                        </div>
                        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                          {configuredItems.length}/{configureCategories.length} selected
                        </p>
                      </div>

                      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px]">
                        <div className="relative overflow-hidden border border-white/8">
                          <img
                            src={previewImage}
                            alt="Configurator preview"
                            className="aspect-[1.18/1] h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04)_0%,rgba(17,17,17,0.52)_100%)]" />
                          {configureCategories.map((category) => {
                            const hotspot = hotspotPositions[category.id];
                            const selected = selections[category.id];
                            const active = activeCategory === category.id;

                            return (
                              <button
                                key={category.id}
                                type="button"
                                onClick={() => setActiveCategory(category.id)}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                style={{ left: hotspot.x, top: hotspot.y }}
                              >
                                <span
                                  className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border-2 backdrop-blur-md transition-all duration-300",
                                    active
                                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                                      : "border-white/65 bg-white/18 text-white",
                                  )}
                                >
                                  {selected?.color ? (
                                    <span
                                      className="h-2.5 w-2.5 rounded-full border border-white/70"
                                      style={{ backgroundColor: selected.color }}
                                    />
                                  ) : (
                                    <span className="h-2 w-2 rounded-full bg-white/80" />
                                  )}
                                </span>
                              </button>
                            );
                          })}
                          <div className="absolute inset-x-0 bottom-0 p-5">
                            <p className="caption-text text-white/58">
                              {selectedBrand?.name ?? "Brand"} · {selectedStyle?.t ?? "Style"}
                            </p>
                            <p className="mt-2 max-w-[18rem] font-serif text-[1.8rem] leading-none tracking-[-0.03em] text-white">
                              Een eerste keukenvoorstel
                              <br />
                              dat voorbereid aanvoelt.
                            </p>
                          </div>
                        </div>

                        <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
                          <p className="caption-text text-[rgba(247,245,242,0.44)]">Configuration</p>
                          <div className="mt-3 space-y-2">
                            {configureCategories.map((category) => {
                              const active = activeCategory === category.id;
                              const selected = selections[category.id];

                              return (
                                <button
                                  key={category.id}
                                  type="button"
                                  onClick={() => setActiveCategory(category.id)}
                                  className={cn(
                                    "flex w-full items-center justify-between border px-3 py-3 text-left transition-all duration-300",
                                    active
                                      ? "border-[rgba(176,141,87,0.42)] bg-[rgba(176,141,87,0.1)]"
                                      : "border-[rgba(255,255,255,0.08)] bg-transparent",
                                  )}
                                >
                                  <div>
                                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[rgba(247,245,242,0.44)]">
                                      {category.label}
                                    </p>
                                    <p className="mt-1 text-sm tracking-[-0.02em] text-white">
                                      {selected?.label ?? "Not selected"}
                                    </p>
                                  </div>
                                  {selected?.color ? (
                                    <span
                                      className="h-3 w-3 rounded-full border border-white/60"
                                      style={{ backgroundColor: selected.color }}
                                    />
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={reduceMotion ? undefined : fadeUp} className="surface-card p-5 md:p-6">
                      <div className="border-b border-[var(--border)] pb-4">
                        <p className="caption-text text-[var(--accent)]">{activeCategoryData.label}</p>
                        <h4 className="mt-2 font-serif text-[1.9rem] leading-none tracking-[-0.03em] text-[var(--foreground)]">
                          Selecteer uw voorkeur
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                          Deze stap volgt het hart van de GitHub configurator: u activeert een
                          categorie en kiest direct een concrete optie voor uw voorstel.
                        </p>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                                "border p-4 text-left transition-all duration-300",
                                active
                                  ? "border-[var(--accent)] bg-[rgba(176,141,87,0.08)]"
                                  : "border-[var(--border)] bg-white/60 hover:border-[var(--accent)]/60",
                              )}
                            >
                              <div
                                className="mb-3 h-12 w-full border border-[var(--border)]"
                                style={{ backgroundColor: option.color ?? "#E9E2D5" }}
                              />
                              <p className="text-sm tracking-[-0.02em] text-[var(--foreground)]">
                                {option.label}
                              </p>
                              {active ? (
                                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                                  Selected
                                </p>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-6 border-t border-[var(--border)] pt-5">
                        <p className="caption-text text-[var(--accent)]">Current summary</p>
                        <div className="mt-4 grid gap-3">
                          <SummaryRow label="Brand" value={selectedBrand?.name} />
                          <SummaryRow label="Style" value={selectedStyle?.t} />
                          {configuredItems.map((item) => (
                            <SummaryRow
                              key={item.id}
                              label={item.label}
                              value={selections[item.id]?.label}
                              color={selections[item.id]?.color}
                            />
                          ))}
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
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <p className="caption-text text-[var(--accent)]">Your design proposal</p>
                          <h4 className="mt-3 font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-white">
                            {selectedBrand?.name ?? "Premium"} Kitchen
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-white/76">
                            {selectedStyle?.t ?? "Style"} · {selectedBudget}
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
                        In de repository master volgt na configuratie een moodboard-overzicht. Hier
                        ziet u dezelfde stap vertaald naar uw huidige website: een compacte review
                        van merk, stijl, materialen en budget voordat u consultation aanvraagt.
                      </p>

                      <div className="mt-6 grid gap-3 border-t border-[var(--border)] pt-5">
                        <SummaryRow label="Brand" value={selectedBrand?.name} />
                        <SummaryRow label="Style" value={selectedStyle?.t} />
                        {configuredItems.map((item) => (
                          <SummaryRow
                            key={item.id}
                            label={item.label}
                            value={selections[item.id]?.label}
                            color={selections[item.id]?.color}
                          />
                        ))}
                      </div>

                      <div className="mt-6 border border-[rgba(176,141,87,0.24)] bg-[rgba(17,17,17,0.96)] px-5 py-5 text-white">
                        <p className="caption-text text-white/42">Estimated investment</p>
                        <p className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.03em] text-[var(--accent)]">
                          {selectedBudget}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/62">
                          Indicatieve range op basis van gekozen richting, afwerking en premium
                          apparatuur. Definitieve prijs volgt in de showroom.
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
                      <p className="caption-text text-[var(--accent)]">Consultation</p>
                      <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-white">
                        Persoonlijk vervolg in Utrecht.
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-white/72">
                        De laatste stap volgt direct op de moodboard review, net als in repo
                        master. Uw keuzes worden meegenomen naar een showroomgesprek met een
                        adviseur van Keuken-Centrum Utrecht.
                      </p>

                      <div className="mt-6 grid gap-px border border-white/8 bg-white/8">
                        <ContactRow icon={<House className="h-4 w-4" />} label="Showroom" value={`${kc.contact.address}, Utrecht`} />
                        <ContactRow icon={<Phone className="h-4 w-4" />} label="Telefoon" value={kc.contact.phone} />
                        <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail" value={kc.contact.email} />
                      </div>

                      <div className="mt-6 border-t border-white/8 pt-5">
                        <p className="caption-text text-white/42">Uw proposal</p>
                        <div className="mt-4 grid gap-3">
                          <SummaryRow dark label="Brand" value={selectedBrand?.name} />
                          <SummaryRow dark label="Style" value={selectedStyle?.t} />
                          <SummaryRow dark label="Budget" value={selectedBudget} />
                        </div>
                      </div>
                    </div>

                    <div className="surface-card p-5 md:p-6">
                      {!consultationSent ? (
                        <>
                          <p className="caption-text text-[var(--accent)]">Step 05 of 05</p>
                          <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                            Vraag uw consultation aan.
                          </h4>
                          <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                            Laat uw gegevens achter. Wij nemen contact op om uw configuratie en
                            showroombezoek verder af te stemmen.
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
                            />
                            <Input
                              type="email"
                              value={consultation.email}
                              onChange={(event) =>
                                setConsultation((current) => ({ ...current, email: event.target.value }))
                              }
                              placeholder="E-mailadres"
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
                                Uw gegevens worden uitsluitend gebruikt om uw showroomafspraak en
                                eerste keukenvoorstel voor te bereiden.
                              </p>
                              <Button type="submit" disabled={!consultationValid}>
                                Verstuur aanvraag
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
                          <p className="caption-text mt-6 text-[var(--accent)]">Consultation requested</p>
                          <h4 className="mt-3 font-serif text-[2rem] leading-none tracking-[-0.035em] text-[var(--foreground)]">
                            Bedankt, {consultation.name.split(" ")[0] || "u"}.
                          </h4>
                          <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[var(--text-soft)]">
                            Uw aanvraag is ontvangen. Een adviseur van Keuken-Centrum Utrecht neemt
                            contact op via {consultation.email} om uw configuratie en showroombezoek
                            verder te bespreken.
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
                      Continue to Style
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "style" ? (
                    <Button type="button" onClick={nextStep} disabled={!selectedStyle}>
                      Continue to Configure
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "configure" ? (
                    <Button type="button" onClick={nextStep}>
                      Generate Moodboard
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}

                  {step === "moodboard" ? (
                    <Button type="button" onClick={nextStep}>
                      Book Consultation
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
