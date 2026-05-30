import { useReveal } from "@/hooks/use-reveal";

const brands = ["Leicht", "Nobilia", "Ai Küchen", "Cucinesse", "Siemens", "Gaggenau", "Quooker", "BORA"];

export function Brands() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="border-y border-border bg-ivory py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule" />
              <span className="eyebrow text-muted-foreground">Atelier Partners</span>
            </div>
            <h2 className="editorial-h max-w-2xl text-4xl text-ink md:text-5xl">
              The finest names in <span className="italic">European</span> kitchen design.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Eight decades of combined craftsmanship from Germany, the Netherlands and Italy —
            curated in a single Utrecht atelier.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {brands.map((b) => (
            <div
              key={b}
              className="group flex h-32 items-center justify-center bg-ivory transition-colors duration-700 hover:bg-ink"
            >
              <span className="font-serif text-2xl text-ink/70 transition-colors duration-700 group-hover:text-ivory md:text-3xl">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
