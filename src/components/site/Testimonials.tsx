import { useReveal } from "@/hooks/use-reveal";
import { kc } from "@/lib/kc-data";

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-surface py-24 md:py-36">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="luxe-rule" />
            <span className="eyebrow text-muted-light">Reviews</span>
          </div>
          <h2 className="editorial-h text-5xl text-ivory md:text-6xl">
            Woorden van
            <br />
            <span className="italic text-gold">onze klanten.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/8 bg-white/8 md:grid-cols-3">
          {kc.reviews.map((q) => (
            <figure key={q.a} className="flex flex-col justify-between bg-surface p-8 md:p-10">
              <blockquote className="font-serif text-xl italic leading-snug text-ivory md:text-2xl">
                <span className="text-gold">“</span>
                {q.q}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-10">
                <div className="luxe-rule mb-3" />
                <p className="text-sm uppercase tracking-[0.18em] text-ivory">{q.a}</p>
                <p className="mt-1 text-xs text-muted-light">Geverifieerde Google review</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
