import { useMemo, useState } from "react";
import { kc } from "@/lib/kc-data";

type State = {
  brand: string;
  style: string;
  layout: string;
  finish: string;
  worktop: string;
  appliance: string;
  sink: string;
  quooker: string;
  bora: string;
  accessories: string[];
  budget: string;
};

const initial: State = {
  brand: kc.config.brands[0],
  style: kc.config.styles[0].id,
  layout: kc.config.layouts[0].id,
  finish: kc.config.finishes[0].id,
  worktop: kc.config.worktops[0],
  appliance: kc.config.appliances[0],
  sink: kc.config.sinks[0],
  quooker: kc.config.quooker[1],
  bora: kc.config.bora[1],
  accessories: ["LED-verlichting", "Soft-close lades"],
  budget: kc.config.budgets[1].id,
};

const previewByStyle: Record<string, string> = {
  design: kc.styles[0].img,
  modern: kc.styles[1].img,
  landelijk: kc.styles[2].img,
  industrieel: kc.styles[3].img,
};

const steps = [
  { id: "brand", title: "Merk" },
  { id: "style", title: "Stijl" },
  { id: "layout", title: "Opstelling" },
  { id: "finish", title: "Front" },
  { id: "worktop", title: "Werkblad" },
  { id: "appliance", title: "Apparatuur" },
  { id: "sink", title: "Spoelbak" },
  { id: "quooker", title: "Quooker" },
  { id: "bora", title: "BORA" },
  { id: "accessories", title: "Accessoires" },
  { id: "budget", title: "Budget" },
  { id: "summary", title: "Resultaat" },
] as const;

type StepId = (typeof steps)[number]["id"];

export function Configurator() {
  const [state, setState] = useState<State>(initial);
  const [active, setActive] = useState<StepId>("brand");

  const update = <K extends keyof State>(k: K, v: State[K]) => setState((s) => ({ ...s, [k]: v }));
  const toggleAcc = (a: string) =>
    setState((s) => ({
      ...s,
      accessories: s.accessories.includes(a) ? s.accessories.filter((x) => x !== a) : [...s.accessories, a],
    }));

  const finish = kc.config.finishes.find((f) => f.id === state.finish)!;
  const styleObj = kc.config.styles.find((s) => s.id === state.style)!;
  const layoutObj = kc.config.layouts.find((l) => l.id === state.layout)!;
  const budgetObj = kc.config.budgets.find((b) => b.id === state.budget)!;

  const summary = useMemo(
    () =>
      `${state.brand} · ${styleObj.label} · ${layoutObj.label} · ${finish.label} · ${state.worktop}`,
    [state, styleObj, layoutObj, finish],
  );

  const idx = steps.findIndex((s) => s.id === active);
  const next = () => setActive(steps[Math.min(idx + 1, steps.length - 1)].id);
  const prev = () => setActive(steps[Math.max(idx - 1, 0)].id);

  return (
    <section id="configurator" className="relative bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-muted-light">Configurator</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
              Stel uw <span className="italic text-gold">droomkeuken</span> samen.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-light">
            Een begeleid ritueel in elf stappen. Wij stellen op basis hiervan een
            persoonlijke moodboard en richtprijs samen voor uw eerste afspraak.
          </p>
        </div>

        {/* Step ribbon */}
        <div className="mb-px flex gap-px overflow-x-auto border-b border-white/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s, i) => {
            const isActive = s.id === active;
            const done = i < idx;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`group shrink-0 px-5 py-4 text-left transition-colors duration-300 ${
                  isActive ? "bg-surface" : "bg-ink hover:bg-surface/50"
                }`}
              >
                <span className={`block text-[10px] uppercase tracking-[0.22em] ${isActive || done ? "text-gold" : "text-muted-light/60"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`mt-1 block text-sm ${isActive ? "text-ivory" : "text-ivory/65"}`}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
          {/* Visual preview */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:col-span-3 lg:aspect-auto">
            <img
              key={state.style}
              src={previewByStyle[state.style]}
              alt={styleObj.label}
              className="h-full w-full object-cover transition-all duration-1000 ease-out animate-[fade-in_0.9s_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="eyebrow text-gold">Uw compositie</p>
              <p className="mt-2 font-serif text-2xl italic text-ivory md:text-3xl">{summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 border border-white/20 px-3 py-2">
                  <span
                    className="h-6 w-6 border border-white/30"
                    style={{ backgroundColor: finish.color }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.18em]">{finish.label}</span>
                </div>
                <div className="border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em]">{state.worktop}</div>
                <div className="border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em]">{layoutObj.label}</div>
                <div className="ml-auto text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-light">Indicatie</p>
                  <p className="font-serif text-xl italic text-gold">{budgetObj.label}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col bg-ink lg:col-span-2">
            <div className="flex-1 p-6 md:p-10">
              <div className="mb-8 flex items-baseline justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl italic text-gold">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-ivory/80">{steps[idx].title}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-light">{idx + 1} / {steps.length}</span>
              </div>

              {active === "brand" && (
                <Grid cols={2}>
                  {kc.config.brands.map((b) => (
                    <Choice key={b} active={state.brand === b} onClick={() => update("brand", b)}>{b}</Choice>
                  ))}
                </Grid>
              )}

              {active === "style" && (
                <Grid cols={2}>
                  {kc.config.styles.map((s) => (
                    <Choice key={s.id} active={state.style === s.id} onClick={() => update("style", s.id)} sub={s.hint}>
                      {s.label}
                    </Choice>
                  ))}
                </Grid>
              )}

              {active === "layout" && (
                <Grid cols={2}>
                  {kc.config.layouts.map((l) => (
                    <Choice key={l.id} active={state.layout === l.id} onClick={() => update("layout", l.id)}>{l.label}</Choice>
                  ))}
                </Grid>
              )}

              {active === "finish" && (
                <div className="grid grid-cols-3 gap-3">
                  {kc.config.finishes.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => update("finish", f.id)}
                      className={`group flex flex-col items-center gap-2 ${state.finish === f.id ? "" : "opacity-60 hover:opacity-100"}`}
                    >
                      <div
                        className={`aspect-square w-full border-2 transition-colors duration-300 ${
                          state.finish === f.id ? "border-gold" : "border-transparent"
                        }`}
                        style={{ backgroundColor: f.color }}
                      />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/80 text-center">{f.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {active === "worktop" && (
                <Grid cols={2}>
                  {kc.config.worktops.map((w) => {
                    const meta = kc.worktops.find((x) => x.name === w);
                    return (
                      <Choice key={w} active={state.worktop === w} onClick={() => update("worktop", w)} sub={meta?.description}>
                        {w}
                      </Choice>
                    );
                  })}
                </Grid>
              )}

              {active === "appliance" && (
                <Grid cols={1}>
                  {kc.config.appliances.map((a) => (
                    <Choice key={a} active={state.appliance === a} onClick={() => update("appliance", a)}>{a}</Choice>
                  ))}
                </Grid>
              )}

              {active === "sink" && (
                <Grid cols={1}>
                  {kc.config.sinks.map((s) => (
                    <Choice key={s} active={state.sink === s} onClick={() => update("sink", s)}>{s}</Choice>
                  ))}
                </Grid>
              )}

              {active === "quooker" && (
                <Grid cols={2}>
                  {kc.config.quooker.map((q) => (
                    <Choice key={q} active={state.quooker === q} onClick={() => update("quooker", q)}>{q}</Choice>
                  ))}
                </Grid>
              )}

              {active === "bora" && (
                <Grid cols={1}>
                  {kc.config.bora.map((b) => (
                    <Choice key={b} active={state.bora === b} onClick={() => update("bora", b)}>{b}</Choice>
                  ))}
                </Grid>
              )}

              {active === "accessories" && (
                <Grid cols={1}>
                  {kc.config.accessories.map((a) => (
                    <Choice key={a} active={state.accessories.includes(a)} onClick={() => toggleAcc(a)}>
                      <span className="flex items-center justify-between">
                        <span>{a}</span>
                        <span className="text-xs text-gold">{state.accessories.includes(a) ? "✓" : "+"}</span>
                      </span>
                    </Choice>
                  ))}
                </Grid>
              )}

              {active === "budget" && (
                <Grid cols={1}>
                  {kc.config.budgets.map((b) => (
                    <Choice key={b.id} active={state.budget === b.id} onClick={() => update("budget", b.id)}>{b.label}</Choice>
                  ))}
                </Grid>
              )}

              {active === "summary" && (
                <div className="space-y-3 text-sm">
                  <SummaryRow k="Merk" v={state.brand} />
                  <SummaryRow k="Stijl" v={styleObj.label} />
                  <SummaryRow k="Opstelling" v={layoutObj.label} />
                  <SummaryRow k="Front" v={finish.label} />
                  <SummaryRow k="Werkblad" v={state.worktop} />
                  <SummaryRow k="Apparatuur" v={state.appliance} />
                  <SummaryRow k="Spoelbak" v={state.sink} />
                  <SummaryRow k="Quooker" v={state.quooker} />
                  <SummaryRow k="BORA" v={state.bora} />
                  <SummaryRow k="Accessoires" v={state.accessories.join(", ") || "—"} />
                  <SummaryRow k="Budget" v={budgetObj.label} />
                </div>
              )}
            </div>

            {/* Nav */}
            <div className="flex flex-col gap-3 border-t border-white/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  disabled={idx === 0}
                  className="border border-white/20 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ivory/80 transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-ivory/80"
                >
                  ← Vorige
                </button>
                {idx < steps.length - 1 ? (
                  <button
                    onClick={next}
                    className="bg-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ivory"
                  >
                    Volgende →
                  </button>
                ) : (
                  <a href="#contact" className="bg-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ivory">
                    Reserveer Adviesgesprek →
                  </a>
                )}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-light">
                Stap {idx + 1} van {steps.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Grid({ cols, children }: { cols: 1 | 2 | 3; children: React.ReactNode }) {
  const c = cols === 1 ? "grid-cols-1" : cols === 2 ? "grid-cols-2" : "grid-cols-3";
  return <div className={`grid ${c} gap-3`}>{children}</div>;
}

function Choice({
  active,
  onClick,
  children,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`border px-4 py-4 text-left transition-all duration-300 ${
        active ? "border-gold bg-gold/5 text-ivory" : "border-white/15 text-ivory/80 hover:border-white/40 hover:text-ivory"
      }`}
    >
      <span className="block text-sm">{children}</span>
      {sub && <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-light">{sub}</span>}
    </button>
  );
}

function SummaryRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-2">
      <span className="text-[10px] uppercase tracking-[0.22em] text-muted-light">{k}</span>
      <span className="text-right font-serif text-base italic text-ivory">{v}</span>
    </div>
  );
}
