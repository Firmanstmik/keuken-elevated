import { useEffect, useState } from "react";

const links = [
  { label: "Collecties", href: "#collections" },
  { label: "Configurator", href: "#configurator" },
  { label: "Vakmanschap", href: "#craft" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
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
          ? "bg-ivory/90 backdrop-blur-xl border-b border-border text-foreground"
          : "bg-transparent text-ivory"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Keuken</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span className="font-serif text-2xl italic tracking-tight">Centrum</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-xs uppercase tracking-[0.22em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 border px-5 py-2.5 text-xs uppercase tracking-[0.22em] transition-colors duration-500 ${
            scrolled
              ? "border-ink text-ink hover:bg-ink hover:text-ivory"
              : "border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"
          }`}
        >
          Maak afspraak
        </a>
      </div>
    </header>
  );
}
