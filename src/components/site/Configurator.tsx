import { useMemo, useState } from "react";
import modern from "@/assets/collection-modern.jpg";
import scandi from "@/assets/collection-scandi.jpg";
import warm from "@/assets/collection-warm.jpg";
import minimal from "@/assets/collection-minimal.jpg";
import marble from "@/assets/mat-marble.jpg";
import oak from "@/assets/mat-oak.jpg";
import quartz from "@/assets/mat-quartz.jpg";
import concrete from "@/assets/mat-concrete.jpg";

const styles = [
  { id: "modern", label: "Modern Dark", img: modern, hint: "Matte black · veined stone" },
  { id: "scandi", label: "Scandinavian", img: scandi, hint: "White oak · soft daylight" },
  { id: "warm", label: "Warm Oak", img: warm, hint: "Natural oak · brass" },
  { id: "luxury", label: "Luxury Stone", img: minimal, hint: "Sculptural · monolithic" },
];

const layouts = [
  { id: "island", label: "Island", svg: <rect x="20" y="38" width="60" height="24" /> },
  { id: "l", label: "L-Shape", svg: <><rect x="14" y="20" width="14" height="60"/><rect x="14" y="66" width="72" height="14"/></> },
  { id: "u", label: "U-Shape", svg: <><rect x="14" y="20" width="14" height="60"/><rect x="72" y="20" width="14" height="60"/><rect x="14" y="66" width="72" height="14"/></> },
];

const materials = [
  { id: "marble", label: "Marble", img: marble },
  { id: "oak", label: "Oak", img: oak },
  { id: "quartz", label: "Quartz", img: quartz },
  { id: "concrete", label: "Concrete", img: concrete },
];

export function Configurator() {
  const [style, setStyle] = useState(styles[0]);
  const [layout, setLayout] = useState(layouts[0]);
  const [material, setMaterial] = useState(materials[0]);

  const summary = useMemo(
    () => `${style.label} · ${layout.label} · ${material.label}`,
    [style, layout, material],
  );

  return (
    <section id="configurator" className="relative bg-ink py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-ivory/70">Signature Atelier</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
              Compose your <span className="italic text-gold">kitchen</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            A guided ritual, not a configurator. Three decisions — style, architecture, material —
            and a moodboard for your first appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-ivory/10 bg-ivory/10 lg:grid-cols-5">
          {/* Visual preview */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:col-span-3 lg:aspect-auto">
            <img
              key={style.id}
              src={style.img}
              alt={style.label}
              className="h-full w-full object-cover transition-all duration-1000 ease-out animate-[fade-in_0.9s_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

            {/* Material swatch overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-gold">Your composition</p>
                <p className="mt-2 font-serif text-2xl text-ivory md:text-3xl">{summary}</p>
              </div>
              <div className="relative h-24 w-24 overflow-hidden border border-ivory/30 shadow-luxe md:h-32 md:w-32">
                <img key={material.id} src={material.img} alt={material.label} className="h-full w-full object-cover animate-[fade-in_0.7s_ease-out]" />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col bg-ink lg:col-span-2">
            <Step
              n="01"
              title="Choose Style"
              content={
                <div className="grid grid-cols-2 gap-3">
                  {styles.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStyle(s)}
                      className={`group relative aspect-[4/3] overflow-hidden border text-left transition-all duration-500 ${
                        style.id === s.id ? "border-gold" : "border-ivory/15 hover:border-ivory/40"
                      }`}
                    >
                      <img src={s.img} alt={s.label} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 to-ink/10" />
                      <div className="relative flex h-full flex-col justify-end p-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-ivory">{s.label}</p>
                        <p className="mt-0.5 text-[10px] text-ivory/55">{s.hint}</p>
                      </div>
                    </button>
                  ))}
                </div>
              }
            />
            <Step
              n="02"
              title="Choose Layout"
              content={
                <div className="grid grid-cols-3 gap-3">
                  {layouts.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setLayout(l)}
                      className={`group flex aspect-square flex-col items-center justify-center gap-2 border transition-all duration-500 ${
                        layout.id === l.id ? "border-gold bg-ivory/[0.04]" : "border-ivory/15 hover:border-ivory/40"
                      }`}
                    >
                      <svg viewBox="0 0 100 100" className="h-14 w-14 fill-ivory/80">
                        {l.svg}
                      </svg>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/80">{l.label}</span>
                    </button>
                  ))}
                </div>
              }
            />
            <Step
              n="03"
              title="Choose Material"
              content={
                <div className="grid grid-cols-4 gap-3">
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMaterial(m)}
                      className={`group flex flex-col items-center gap-2 transition-all duration-500 ${
                        material.id === m.id ? "opacity-100" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`relative aspect-square w-full overflow-hidden border-2 transition-colors duration-500 ${
                          material.id === m.id ? "border-gold" : "border-transparent"
                        }`}
                      >
                        <img src={m.img} alt={m.label} className="h-full w-full object-cover" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/80">{m.label}</span>
                    </button>
                  ))}
                </div>
              }
              last
            />

            <div className="mt-auto flex flex-col gap-3 border-t border-ivory/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <p className="text-xs text-ivory/60">Save your composition · receive a personal moodboard.</p>
              <a href="#contact" className="btn-primary-light">
                Reserve Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, content, last }: { n: string; title: string; content: React.ReactNode; last?: boolean }) {
  return (
    <div className={`p-6 md:p-8 ${last ? "" : "border-b border-ivory/10"}`}>
      <div className="mb-5 flex items-baseline gap-4">
        <span className="font-serif text-2xl italic text-gold">{n}</span>
        <span className="text-xs uppercase tracking-[0.22em] text-ivory/80">{title}</span>
      </div>
      {content}
    </div>
  );
}
