import { kc } from "@/lib/kc-data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-3xl">Keuken</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span className="font-serif text-3xl italic text-gold">Centrum</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-light">
              Premium Europese keukens, samengebracht in Utrecht sinds {kc.founded}.
              Persoonlijk advies, 3D-ontwerp en vakkundige installatie — voor elk budget
              een droomkeuken.
            </p>
            <img src={kc.cbwLogo} alt="CBW Erkend" className="mt-8 h-12 brightness-0 invert opacity-60" />
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-muted-light">Showroom</p>
            <p className="mt-4 font-serif text-lg text-ivory">{kc.contact.address}</p>
            <p className="text-sm text-muted-light">{kc.contact.postal}</p>
            <div className="mt-4 space-y-1 text-sm text-muted-light">
              {kc.contact.hours.map((h) => (
                <div key={h.d} className="flex justify-between gap-4">
                  <span>{h.d}</span>
                  <span className="text-ivory/70">{h.h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-muted-light">Navigatie</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#collections" className="link-underline">Keukenstijlen</a></li>
              <li><a href="#brands" className="link-underline">Merken</a></li>
              <li><a href="#configurator" className="link-underline">Configurator</a></li>
              <li><a href="#showroom" className="link-underline">Showroom</a></li>
              <li><a href="#team" className="link-underline">Team</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-muted-light">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={kc.contact.phoneHref} className="link-underline">{kc.contact.phone}</a></li>
              <li><a href={`mailto:${kc.contact.email}`} className="link-underline">{kc.contact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-light md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {kc.brandName}. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Algemene voorwaarden</a>
            <a href="#" className="link-underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
