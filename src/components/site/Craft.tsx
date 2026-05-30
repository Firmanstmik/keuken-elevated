import craft from "@/assets/craftsmanship.jpg";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { t: "German Quality", d: "Engineered tolerances measured in tenths of a millimeter." },
  { t: "Premium Materials", d: "Solid oak, natural stone, hand-finished veneers." },
  { t: "Tailor-Made Design", d: "Every cabinet drawn to the contour of your home." },
  { t: "Expert Installation", d: "A single master installer from delivery to detail." },
];

export function Craft() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="craft" className="bg-ivory py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-stone-warm">
            <img src={craft} alt="Master craftsman finishing premium cabinetry" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule" />
            <span className="eyebrow text-muted-foreground">Craftsmanship</span>
          </div>
          <h2 className="editorial-h text-4xl text-ink md:text-6xl">
            A kitchen
            <br />
            <span className="italic">built to outlive</span>
            <br />
            the trend cycle.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Since 1978, Keuken-Centrum has stood for the quiet kind of luxury — the kind you
            feel only when a drawer closes with the right weight, or a stone seam disappears
            against the light.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.t} className="bg-ivory p-6">
                <p className="font-serif text-xl text-ink">{p.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
