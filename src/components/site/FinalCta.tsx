import { useReveal } from "@/hooks/use-reveal";

const options = [
  { t: "Book Consultation", d: "An hour, one-on-one with a senior designer.", a: "Reserve →" },
  { t: "Visit Showroom", d: "1.400m² of European kitchens in Utrecht.", a: "Plan visit →" },
  { t: "Contact Expert", d: "A direct line to our design atelier.", a: "Get in touch →" },
];

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-ivory py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule" />
              <span className="eyebrow text-muted-foreground">Begin</span>
            </div>
            <h2 className="editorial-h text-5xl text-ink md:text-8xl">
              Your kitchen
              <br />
              <span className="italic">begins here.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-5">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Three ways to start. No commitment, no obligation — only a conversation
              about how you live.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink bg-ink md:grid-cols-3">
          {options.map((o, i) => (
            <a
              key={o.t}
              href="#"
              className="group relative flex flex-col justify-between bg-ivory p-8 transition-colors duration-700 hover:bg-ink hover:text-ivory md:p-12"
            >
              <div>
                <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                <h3 className="editorial-h mt-6 text-3xl md:text-4xl">{o.t}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground transition-colors duration-700 group-hover:text-ivory/70">
                  {o.d}
                </p>
              </div>
              <span className="mt-16 text-xs uppercase tracking-[0.22em]">{o.a}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
