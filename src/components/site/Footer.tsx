import { kc } from "@/lib/kc-data";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/6 bg-[var(--ink)] text-white">
      <div className="site-container py-18 md:py-22">
        <div className="grid gap-12 border-b border-white/8 pb-12 md:grid-cols-[minmax(0,1.3fr)_0.8fr_0.8fr_0.9fr]">
          <div className="max-w-[30rem]">
            <p className="caption-text text-[rgba(255,255,255,0.54)]">De Premium Keukenbestemming van Utrecht</p>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.92] tracking-[-0.04em] text-white">
              Keuken-Centrum
              <br />
              Utrecht.
            </h2>
            <p className="mt-6 max-w-[28rem] text-base leading-8 text-[rgba(255,255,255,0.72)]">
              Duitse en Italiaanse designkeukens, verfijnde apparatuur en persoonlijk
              showroomadvies sinds {kc.founded}. Een gevestigde naam in Utrecht voor wie meer zoekt
              dan een standaard keukenwinkel.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img src={kc.cbwLogo} alt="CBW Erkend" className="h-10 w-auto brightness-0 invert opacity-75" />
              <p className="small-text max-w-[14rem] text-[rgba(255,255,255,0.56)]">
                Erkend vakmanschap en zorgvuldige begeleiding van ontwerp tot oplevering.
              </p>
            </div>
          </div>

          <div>
            <p className="caption-text text-[rgba(255,255,255,0.5)]">Bezoek Onze Showroom</p>
            <p className="mt-5 font-serif text-[1.85rem] leading-none tracking-[-0.03em] text-white">
              {kc.contact.address}
            </p>
            <p className="mt-2 text-sm leading-7 text-[rgba(255,255,255,0.72)]">{kc.contact.postal} · Utrecht</p>
            <div className="mt-5 space-y-2 text-sm text-[rgba(255,255,255,0.72)]">
              {kc.contact.hours.map((h) => (
                <div key={h.d} className="flex justify-between gap-4 border-b border-white/6 pb-2">
                  <span>{h.d}</span>
                  <span className="text-white/78">{h.h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="caption-text text-[rgba(255,255,255,0.5)]">Ontdek</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#brands" className="footer-link">Merken</a></li>
              <li><a href="/brands" className="footer-link">Configurator</a></li>
              <li><a href="#collections" className="footer-link">Collecties</a></li>
              <li><a href="#showroom" className="footer-link">Showroom</a></li>
              <li><a href="#contact" className="footer-link">Afspraak</a></li>
            </ul>
          </div>

          <div>
            <p className="caption-text text-[rgba(255,255,255,0.5)]">Direct Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-[rgba(255,255,255,0.72)]">
              <li><a href={kc.contact.phoneHref} className="footer-link">{kc.contact.phone}</a></li>
              <li><a href={`mailto:${kc.contact.email}`} className="footer-link">{kc.contact.email}</a></li>
              <li><a href={kc.contact.maps} className="footer-link">Route via Google Maps</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-[rgba(255,255,255,0.5)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {kc.brandName}. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Algemene voorwaarden</a>
            <a href="#" className="footer-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
