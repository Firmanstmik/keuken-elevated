import { CalendarTick, Home2, Shop, Gallery } from "@zethictech/iconsax-react";
import { matchesRoute } from "./shell-routes";

const items = [
  { label: "Home", href: "/", Icon: Home2 },
  { label: "Keukens", href: "/keukens", Icon: Shop },
  { label: "Showroom", href: "/showroom-keukens", Icon: Gallery },
  { label: "Afspraak", href: "/consultation", Icon: CalendarTick, primary: true },
] as const;

export function ContextBottomNav({ pathname }: { pathname: string }) {
  return (
    <nav className="mobile-app-bottom-nav" aria-label="Mobiele hoofdnavigatie">
      <div className="mobile-app-bottom-nav__inner">
        {items.map(({ label, href, Icon, primary }) => {
          const active =
            matchesRoute(pathname, href) ||
            (href === "/keukens" &&
              (pathname.startsWith("/keukenbladen") || pathname.startsWith("/apparatuur"))) ||
            (href === "/showroom-keukens" && pathname === "/contact");

          return (
            <a
              key={label}
              href={href}
              className={`mobile-app-bottom-nav__item ${
                active ? "mobile-app-bottom-nav__item--active" : ""
              } ${primary ? "mobile-app-bottom-nav__item--primary" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-app-bottom-nav__icon">
                <Icon size={20} variant={active || primary ? "Bold" : "Linear"} />
              </span>
              <span>{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
