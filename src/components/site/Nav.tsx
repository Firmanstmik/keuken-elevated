import { useEffect, useState } from "react";
import { kc } from "@/lib/kc-data";

const links = [
  { label: "Keukens", href: "#collections" },
  { label: "Merken", href: "#brands" },
  { label: "Configurator", href: "#configurator" },
  { label: "Showroom", href: "#showroom" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[oklch(0.14_0_0/0.78)] backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      } text-ivory`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-serif text-2xl tracking-tight">Keuken</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span className="font-serif text-2xl italic tracking-tight text-gold">Centrum</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[11px] uppercase tracking-[0.24em] text-ivory/85 hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={kc.contact.phoneHref} className="text-[11px] uppercase tracking-[0.22em] text-ivory/70 hover:text-ivory">
            {kc.contact.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ivory/70 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:bg-ivory hover:text-ink"
          >
            Plan bezoek
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "max-h-[600px] border-t border-white/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-serif text-2xl text-ivory"
            >
              {l.label}
            </a>
          ))}
          <a href={kc.contact.phoneHref} className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">
            {kc.contact.phone}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-6 self-start">
            Plan bezoek
          </a>
        </nav>
      </div>
    </header>
  );
}
