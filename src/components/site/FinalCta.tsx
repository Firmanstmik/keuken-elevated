import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-ink py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-muted-light">Wij helpen u graag verder</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-8xl">
              Boek een
              <br />
              <span className="italic text-gold">afspraak.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-5">
            <p className="max-w-sm text-base leading-relaxed text-muted-light">
              Drie manieren om te beginnen. Geen verplichting — alleen een gesprek
              over hoe u wilt wonen, koken en leven.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            { t: "Plan Showroom Bezoek", d: "Loop binnen op Zonnebaan 8 — koffie staat klaar.", a: "Maak afspraak →", href: "#contact-form" },
            { t: "Bel een adviseur", d: kc.contact.phone, a: "Bel direct →", href: kc.contact.phoneHref },
            { t: "Vraag offerte aan", d: "Al een offerte? Wij leveren vaak voordeliger.", a: "Stuur bericht →", href: `mailto:${kc.contact.email}` },
          ].map((o, i) => (
            <a
              key={o.t}
              href={o.href}
              className="group relative flex flex-col justify-between bg-ink p-8 transition-colors duration-700 hover:bg-surface md:p-12"
            >
              <div>
                <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                <h3 className="editorial-h mt-6 text-3xl text-ivory md:text-4xl">{o.t}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-light">{o.d}</p>
              </div>
              <span className="mt-16 text-xs uppercase tracking-[0.22em] text-gold">{o.a}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
