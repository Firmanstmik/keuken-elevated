import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Craft() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="craft" className="bg-ink py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="image-zoom relative aspect-[5/6] overflow-hidden bg-surface">
            <img
              src={kc.boraImg}
              alt="BORA kookplaatafzuiging — afzuiging naar beneden"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="eyebrow text-gold">Het BORA Principe</p>
                <p className="mt-2 font-serif text-3xl italic text-ivory md:text-4xl">Afzuiging naar beneden.</p>
              </div>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-ivory/60 md:block">
                X Pure · Pure · Classic · Professional
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule" />
            <span className="eyebrow text-muted-light">Apparatuur · Vakmanschap</span>
          </div>
          <h2 className="editorial-h text-4xl text-ivory md:text-6xl">
            Alles voor de
            <br />
            <span className="italic text-gold">complete</span> keuken.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-light">
            Van A-merken inbouwapparatuur tot werkbladen, kranen, accessoires en verlichting —
            bij Keuken-Centrum Utrecht is alles wat met keukens te maken heeft verkrijgbaar.
            BORA laat kookdampen niet eerst opstijgen, maar zuigt ze meteen weg waar ze ontstaan.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {kc.services.map((p) => (
              <div key={p.t} className="bg-ink p-6">
                <p className="font-serif text-xl text-gold italic">{p.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-light">{p.d}</p>
              </div>
            ))}
          </div>

          {/* Worktops */}
          <div className="mt-12">
            <p className="eyebrow mb-4 text-muted-light">De mooiste keukenbladen</p>
            <div className="flex flex-wrap gap-2">
              {kc.worktops.map((w) => (
                <span key={w.id} className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ivory/85">
                  {w.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
