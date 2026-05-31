import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Team() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="team" className="bg-ink py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <span className="luxe-rule bg-gold" />
              <span className="eyebrow text-muted-light">Het Team</span>
            </div>
            <h2 className="editorial-h text-5xl text-ivory md:text-6xl">
              Kom in contact
              <br />
              <span className="italic text-gold">met ons team.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-light">
            Persoonlijk advies van mensen die hun vak verstaan. Loop binnen op
            de Zonnebaan of stuur ons direct een bericht.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/8 bg-white/8 md:grid-cols-3">
          {kc.team.map((m, i) => (
            <article key={m.email} className="group bg-ink p-8 transition-colors duration-700 hover:bg-surface md:p-12">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-5xl italic text-gold md:text-6xl">{`0${i + 1}`}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-light">{m.role}</span>
              </div>
              <h3 className="mt-10 editorial-h text-4xl text-ivory md:text-5xl">{m.name}</h3>
              <p className="mt-6 text-sm leading-relaxed text-ivory/70">{m.bio}</p>
              <a href={`mailto:${m.email}`} className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.22em] text-gold">
                {m.email}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
