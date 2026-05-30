export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Keuken</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span className="font-serif text-3xl italic">Centrum</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              Premium architectural kitchens, designed in Utrecht. Crafted in the
              ateliers of Germany, the Netherlands and Italy since 1978.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/50">Atelier</p>
            <p className="mt-4 font-serif text-lg">Atoomweg 50</p>
            <p className="text-sm text-ivory/60">3542 AB Utrecht</p>
            <p className="mt-4 text-sm text-ivory/60">Ma – Za · 10:00 – 17:00</p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-ivory/50">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#collections" className="link-underline">Collections</a></li>
              <li><a href="#configurator" className="link-underline">Configurator</a></li>
              <li><a href="#craft" className="link-underline">Craft</a></li>
              <li><a href="#showroom" className="link-underline">Showroom</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-ivory/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="tel:+31302410012" className="link-underline">+31 (0)30 241 0012</a></li>
              <li><a href="mailto:atelier@keuken-centrum.nl" className="link-underline">atelier@keuken-centrum.nl</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Keuken-Centrum Utrecht. All rights reserved.</p>
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
