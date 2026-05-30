import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", t: "Consultation", d: "An hour in our Utrecht atelier. We listen to your home, your rituals, your light." },
  { n: "02", t: "Design", d: "3D plans, material moodboards and a fixed quotation — presented in a single dossier." },
  { n: "03", t: "Production", d: "Built in Germany and the Netherlands by our partner ateliers. Eight weeks, on average." },
  { n: "04", t: "Installation", d: "A single master installer, one kitchen at a time. Delivered turn-key." },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ink py-24 text-ivory md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule bg-gold" />
            <span className="eyebrow text-ivory/70">The Process</span>
          </div>
          <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
            Four chapters from <span className="italic text-gold">first sketch</span> to first dinner.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-px border border-ivory/10 bg-ivory/10 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="group relative bg-ink p-8 transition-colors duration-700 hover:bg-ink/60 md:p-10">
              <div className="mb-10 flex items-baseline justify-between">
                <span className="font-serif text-5xl italic text-gold md:text-6xl">{s.n}</span>
                <span className="h-px w-10 bg-ivory/30 transition-all duration-700 group-hover:w-16 group-hover:bg-gold" />
              </div>
              <h3 className="font-serif text-2xl text-ivory md:text-3xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory/65">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
