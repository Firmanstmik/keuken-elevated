import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

const gallery = [kc.hero.main, kc.hero.alt2, kc.hero.alt4, kc.hero.alt1, kc.hero.alt3, kc.aanbiedingenImg];

export function Showroom() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="showroom" ref={ref} className="reveal relative isolate overflow-hidden bg-ink">
      <div className="relative h-[85vh] min-h-[640px] w-full">
        <img src={kc.showroomImg} alt="Showroom Keuken-Centrum Utrecht — Zonnebaan 8" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 text-ivory md:px-12 md:pb-28">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-ivory/80">De Showroom</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
              Talloze opstellingen.
              <br />
              <span className="italic text-gold">Eén locatie.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/80">
              De talloze keuken­opstellingen in onze showroom geven u genoeg inspiratie.
              Doordat we met meerdere keuken­fabrikanten werken, bieden wij een groot en breed
              assortiment — voor elk budget een droomkeuken.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-gold">Plan Bezoek →</a>
              <a href={kc.contact.phoneHref} className="link-underline text-xs uppercase tracking-[0.22em] text-ivory/90">
                {kc.contact.address} · Utrecht
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="border-t border-white/5 bg-ink py-12">
        <div className="mx-auto mb-8 flex max-w-[1600px] items-end justify-between px-6 md:px-12">
          <div>
            <p className="eyebrow text-muted-light">Virtual Showroom</p>
            <h3 className="editorial-h mt-2 text-2xl text-ivory md:text-3xl italic">Een blik naar binnen</h3>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.22em] text-muted-light md:block">← Sleep / scroll →</p>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-6 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {gallery.map((src, i) => (
            <div key={i} className="image-zoom relative h-[60vh] min-h-[420px] w-[75vw] shrink-0 overflow-hidden md:w-[42vw] lg:w-[34vw]">
              <img src={src} alt={`Showroom impressie ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 font-serif text-sm italic text-ivory/80">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
