import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Offers() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="aanbiedingen" className="bg-surface py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule bg-gold" />
            <span className="eyebrow text-muted-light">Aanbiedingen</span>
          </div>
          <h2 className="editorial-h text-5xl text-ivory md:text-6xl">
            Showroomkeukens
            <br />
            <span className="italic text-gold">tot 50% korting.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-light">
            Het hele jaar door spectaculaire aanbiedingen op complete keukens, showroom­modellen
            en inbouw­apparatuur van topmerken zoals Leicht, Nobilia, AI Küchen en Zampieri.
            Volledig uitgerust met Miele, Siemens, AEG, ATAG, Smeg of Bosch en vaak direct uit voorraad.
          </p>
          <div className="mt-10">
            <a href="#contact" className="btn-gold">Bekijk Aanbiedingen →</a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
            <Stat n="50%" l="Korting tot" />
            <Stat n="A-merk" l="Apparatuur" />
            <Stat n="Direct" l="Leverbaar" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="image-zoom relative aspect-[5/6] overflow-hidden bg-ink">
            <img src={kc.aanbiedingenImg} alt="Showroomkeukens aanbiedingen Keuken-Centrum Utrecht" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute left-6 top-6 border border-ivory/30 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ivory backdrop-blur">
              Direct voordeel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="bg-surface p-5">
      <p className="font-serif text-2xl italic text-gold">{n}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-light">{l}</p>
    </div>
  );
}
