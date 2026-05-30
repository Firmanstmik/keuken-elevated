import { useReveal } from "@/hooks/use-reveal";

const quotes = [
  {
    q: "It is the first kitchen that feels like part of the architecture, not a piece of furniture placed inside it.",
    a: "Familie Van der Linden",
    p: "Architect · Amsterdam",
  },
  {
    q: "The level of detail in the design dossier was something we expected from a Milanese studio, not a Dutch showroom.",
    a: "M. & J. Bakker",
    p: "Utrecht",
  },
  {
    q: "Eight years on, it still closes with the same weight as the day it was installed.",
    a: "Sander Hoekstra",
    p: "Eigenaar villa · 't Gooi",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-stone-warm py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule" />
            <span className="eyebrow text-muted-foreground">Words from clients</span>
          </div>
          <h2 className="editorial-h text-5xl text-ink md:text-6xl">
            Quiet luxury,
            <br />
            <span className="italic">spoken plainly.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.a} className="flex flex-col justify-between bg-ivory p-8 md:p-10">
              <blockquote className="font-serif text-xl italic leading-snug text-ink md:text-2xl">
                <span className="text-gold">“</span>
                {q.q}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-10">
                <div className="luxe-rule mb-3" />
                <p className="text-sm uppercase tracking-[0.18em] text-ink">{q.a}</p>
                <p className="mt-1 text-xs text-muted-foreground">{q.p}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
