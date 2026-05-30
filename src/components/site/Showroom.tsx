import showroom from "@/assets/showroom.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Showroom() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="showroom" ref={ref} className="reveal relative isolate overflow-hidden">
      <div className="relative h-[80vh] min-h-[640px] w-full">
        <img src={showroom} alt="Keuken-Centrum showroom in Utrecht" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 text-ivory md:px-12 md:pb-28">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-ivory/80">The Showroom</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
              1.400m² of <span className="italic text-gold">European</span> kitchen design.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/75">
              Twenty-four full kitchen installations under one roof in Utrecht.
              Open ovens, run the taps, test the drawers — experience materials
              the way they are meant to be felt.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary-light">Plan Your Visit →</a>
              <a href="#contact" className="link-underline text-xs uppercase tracking-[0.22em] text-ivory/90">
                Atoomweg 50 · Utrecht
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
