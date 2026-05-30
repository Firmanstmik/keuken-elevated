import modern from "@/assets/collection-modern.jpg";
import scandi from "@/assets/collection-scandi.jpg";
import warm from "@/assets/collection-warm.jpg";
import minimal from "@/assets/collection-minimal.jpg";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { n: "I", t: "Modern Kitchens", d: "Dark matte cabinetry, dramatic stone, integrated technology.", img: modern },
  { n: "II", t: "Architectural Kitchens", d: "Structural lines, full-height storage, museum-grade detailing.", img: minimal },
  { n: "III", t: "Warm Living Kitchens", d: "Natural oak, soft stone, brass — the heart of the home.", img: warm },
  { n: "IV", t: "Minimal Kitchens", d: "Pure surfaces, hidden function, Scandinavian serenity.", img: scandi },
];

export function Collections() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="collections" className="bg-stone-warm py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule" />
              <span className="eyebrow text-muted-foreground">Collections</span>
            </div>
            <h2 className="editorial-h text-5xl text-ink md:text-7xl">
              Four <span className="italic">design</span>
              <br />
              philosophies.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every Keuken-Centrum kitchen begins with a point of view. Choose the
            philosophy that resonates — we tailor every detail from there.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {items.map((it, i) => (
            <article
              key={it.t}
              className={`group relative ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={it.img}
                  alt={it.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                />
                <div className="absolute left-6 top-6 font-serif text-3xl italic text-ivory mix-blend-difference">
                  {it.n}
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="editorial-h text-2xl text-ink md:text-3xl">{it.t}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
                <a href="#configurator" className="link-underline mt-2 shrink-0 text-xs uppercase tracking-[0.22em] text-ink">
                  Explore →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
