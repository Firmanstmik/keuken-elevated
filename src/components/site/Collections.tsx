import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Collections() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="collections" className="bg-surface py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule" />
              <span className="eyebrow text-muted-light">Keukenstijlen</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
              Écht <span className="italic text-gold">alles</span>
              <br />
              is mogelijk.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-light">
            Een uitdagende moderne design keuken, een robuuste industrielook, of de
            nostalgische intimiteit van een landelijk klassieke keuken. Bij Keuken-Centrum
            Utrecht koop je de keuken van je dromen voor een verrassend betaalbare prijs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {kc.styles.map((it, i) => (
            <article key={it.id} className={`group relative ${i % 2 === 1 ? "md:mt-24" : ""}`}>
              <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={it.img}
                  alt={it.t}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute left-6 top-6 font-serif text-3xl italic text-gold">{it.n}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="eyebrow text-ivory/80">Stijl 0{i + 1}</p>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="editorial-h text-2xl text-ivory md:text-3xl">{it.t}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-light">{it.d}</p>
                </div>
                <a href="#configurator" className="link-underline mt-2 shrink-0 text-xs uppercase tracking-[0.22em] text-gold">
                  Configureer →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
