import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", t: "Kennismaking", d: "Welkom met een kopje koffie in onze Utrechtse showroom. Wij luisteren naar uw woonwensen, ruimte en ritueel." },
  { n: "02", t: "3D-Ontwerp", d: "Met onze 3D-software visualiseren we werkblad, fronten en apparatuur — exact zoals het bij u thuis gaat staan." },
  { n: "03", t: "Productie", d: "Vervaardigd in Duitsland, Italië en Nederland door onze partnerateliers. Gemiddeld acht weken." },
  { n: "04", t: "Installatie", d: "Onze ervaren monteurs plaatsen uw keuken snel en vakkundig. Turn-key opgeleverd." },
];

export function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-surface py-24 text-ivory md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule bg-gold" />
            <span className="eyebrow text-ivory/70">Het Traject</span>
          </div>
          <h2 className="editorial-h text-5xl text-ivory md:text-7xl">
            Van eerste schets tot <span className="italic text-gold">eerste diner</span>.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-px border border-white/8 bg-white/8 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="group relative bg-surface p-8 transition-colors duration-700 hover:bg-ink md:p-10">
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
