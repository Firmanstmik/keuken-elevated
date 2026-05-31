import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Brands() {
  const ref = useReveal<HTMLDivElement>();
  const row = [...kc.kitchenBrands, ...kc.applianceBrands.filter(b => b.logo)];
  const marquee = [...row, ...row];

  return (
    <section id="brands" className="border-y border-white/5 bg-ink py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule" />
              <span className="eyebrow text-muted-light">Atelier Partners</span>
            </div>
            <h2 className="editorial-h max-w-2xl text-4xl text-ivory md:text-5xl">
              De beste merken voor de <span className="italic text-gold">beste prijs</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-light">
            Ergens al een offerte gehad? Wij bieden vaak een betere prijs.
            Vijf topkeukenfabrikanten en alle A-merken apparatuur onder één dak in Utrecht.
          </p>
        </div>
      </div>

      {/* Marquee logo wall */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />

        <div className="marquee gap-16 py-6">
          {marquee.map((b, i) => (
            <div
              key={`${b.id}-${i}`}
              className="flex h-24 w-48 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-700 hover:opacity-100 hover:grayscale-0"
            >
              {b.logo ? (
                <img src={b.logo} alt={b.name} className="max-h-12 max-w-[140px] object-contain brightness-0 invert" />
              ) : (
                <span className="font-serif text-2xl text-ivory/70">{b.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Brand grid with stories */}
      <div className="mx-auto mt-16 max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-5">
          {kc.kitchenBrands.map((b) => (
            <div key={b.id} className="group bg-ink p-8 transition-colors duration-700 hover:bg-surface">
              <div className="mb-6 flex h-12 items-start">
                {b.logo && <img src={b.logo} alt={b.name} className="max-h-10 max-w-[120px] object-contain brightness-0 invert opacity-80" />}
              </div>
              <p className="font-serif text-xl italic text-gold">{b.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-light">{b.country}</p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/65">{b.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
