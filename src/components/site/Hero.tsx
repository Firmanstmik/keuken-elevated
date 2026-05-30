import heroImg from "@/assets/hero-kitchen.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Architectural premium kitchen in deep navy and marble"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Side meta */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] text-ivory/60 lg:block">
        Keuken-Centrum · Utrecht · Sinds 1978
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right text-[10px] uppercase tracking-[0.4em] text-ivory/60 lg:block">
        Premium European Kitchen Atelier
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 pt-32 md:px-12 md:pb-28">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4 opacity-0 animate-[fade-in_1s_ease-out_0.3s_forwards]">
            <span className="luxe-rule bg-gold" />
            <span className="eyebrow text-ivory/80">Architectural Kitchen Atelier</span>
          </div>

          <h1 className="editorial-h text-ivory text-[clamp(3rem,8.5vw,8.5rem)] opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
            Designed Around
            <br />
            <span className="italic text-gold">Modern Living.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-ivory/80 md:text-lg opacity-0 animate-[fade-in_1.2s_ease-out_0.9s_forwards]">
            Premium Dutch kitchens, crafted with European precision and a timeless
            sense of architectural design. Conceived in Utrecht, made for a lifetime.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 opacity-0 animate-[fade-in_1.2s_ease-out_1.1s_forwards]">
            <a href="#configurator" className="btn-primary-light">
              Start Your Kitchen Journey
              <span aria-hidden>→</span>
            </a>
            <a href="#showroom" className="btn-ghost text-ivory">
              Visit Our Showroom
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-ivory/15 pt-8 sm:grid-cols-3 opacity-0 animate-[fade-in_1.4s_ease-out_1.4s_forwards]">
          {[
            { k: "01", t: "Premium Brands", d: "Leicht · Nobilia · Gaggenau" },
            { k: "02", t: "German Precision", d: "Engineered to the millimeter" },
            { k: "03", t: "Custom Design", d: "Tailor-made for your home" },
          ].map((i) => (
            <div key={i.k} className="flex items-start gap-4">
              <span className="font-serif text-2xl text-gold">{i.k}</span>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-ivory">{i.t}</p>
                <p className="mt-1 text-xs text-ivory/60">{i.d}</p>
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
