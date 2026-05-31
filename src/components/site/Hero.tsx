import { kc } from "@/lib/kc-data";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink text-ivory grain">
      <div className="absolute inset-0">
        <img
          src={kc.hero.main}
          alt="Leicht Japandi designkeuken in showroom Keuken-Centrum Utrecht"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/35 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-transparent" />
      </div>

      {/* Side meta */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] text-ivory/55 lg:block">
        Utrecht · Sinds {kc.founded} · CBW Erkend
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right text-[10px] uppercase tracking-[0.4em] text-ivory/55 lg:block">
        Leicht · Nobilia · Zampieri · Cucinesse · AI Küchen
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 pt-32 md:px-12 md:pb-28">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4 opacity-0 animate-[fade-in_1s_ease-out_0.3s_forwards]">
            <span className="luxe-rule bg-gold" />
            <span className="eyebrow text-ivory/85">Premium Keukenatelier · Utrecht</span>
          </div>

          <h1 className="editorial-h text-ivory text-[clamp(3rem,8.8vw,9rem)] opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
            De weg naar uw
            <br />
            <span className="italic text-gold">Droomkeuken.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-ivory/85 md:text-lg opacity-0 animate-[fade-in_1.2s_ease-out_0.9s_forwards]">
            Sinds {kc.founded} brengen wij in Utrecht de fijnste Europese keuken­merken
            samen onder één dak. Persoonlijk advies, 3D-ontwerp en vakkundige installatie —
            voor elk budget een keuken die blijft.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 opacity-0 animate-[fade-in_1.2s_ease-out_1.1s_forwards]">
            <a href="#showroom" className="btn-gold">
              Plan Showroom Bezoek
              <span aria-hidden>→</span>
            </a>
            <a href="#collections" className="btn-ghost text-ivory">
              Bekijk Collectie
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-ivory/15 pt-8 sm:grid-cols-4 opacity-0 animate-[fade-in_1.4s_ease-out_1.4s_forwards]">
          {[
            { k: "01", t: "5 Topmerken", d: "Leicht · Nobilia · Zampieri" },
            { k: "02", t: "A-Apparatuur", d: "Gaggenau · BORA · Quooker" },
            { k: "03", t: "Op Maat", d: "Volledig 3D-ontwerp" },
            { k: "04", t: "CBW Erkend", d: `Sinds ${kc.founded}` },
          ].map((i) => (
            <div key={i.k} className="flex items-start gap-3">
              <span className="font-serif text-2xl italic text-gold">{i.k}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ivory">{i.t}</p>
                <p className="mt-1 text-[11px] text-ivory/55">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory/80 to-transparent" />
      </div>
    </section>
  );
}
