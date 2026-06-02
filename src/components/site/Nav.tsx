import { useEffect, useRef, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGAttributes } from "react";
import {
  Call as IconsaxCall,
  House as IconsaxHouse,
  Sms as IconsaxSms,
} from "@zethictech/iconsax-react";
import { ChevronDown } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import logoKeuken from "@/assets/logo-keuken-1-1.webp";
import { motionDuration, motionEase } from "@/lib/motion";

type NavMenuItem = {
  label: string;
  href?: string;
  items?: Array<{ label: string; href: string }>;
};

const desktopMenu: NavMenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Keukens",
    items: [
      { label: "AI Küchen", href: "/#brands" },
      { label: "Leicht", href: "/#brands" },
      { label: "Nobilia", href: "/#brands" },
      { label: "Zampieri", href: "/#brands" },
      { label: "Cucinesse", href: "/#brands" },
      { label: "Keukenstijlen", href: "/#collections" },
      { label: "Keuken op maat", href: "/#showroom" },
    ],
  },
  {
    label: "Keukenbladen",
    items: [
      { label: "Silestone", href: "/#collections" },
      { label: "Dekton", href: "/#collections" },
      { label: "Neolith", href: "/#collections" },
      { label: "Sensa", href: "/#collections" },
    ],
  },
  {
    label: "Apparatuur",
    items: [
      { label: "Afzuigkappen", href: "/#showroom" },
      { label: "Werkblad afzuiging", href: "/#showroom" },
      { label: "Fornuizen", href: "/#showroom" },
      { label: "Kookplaten", href: "/#showroom" },
      { label: "Koelkasten & Vriezers", href: "/#showroom" },
      { label: "Vaatwassers", href: "/#showroom" },
      { label: "Quooker", href: "/#showroom" },
      { label: "Wave afzuigkappen", href: "/#showroom" },
    ],
  },
  { label: "Aanbiedingen", href: "/#collections" },
  {
    label: "Contact",
    items: [
      { label: "Showroom keukens", href: "/#showroom" },
      { label: "Offerte op maat", href: "/consultation" },
    ],
  },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Keukens", href: "/#collections" },
  { label: "Keukenbladen", href: "/#collections" },
  { label: "Apparatuur", href: "/#showroom" },
  { label: "Aanbiedingen", href: "/#collections" },
  { label: "Contact", href: "/#contact" },
] as const;

function isActiveLink(pathname: string, hash: string, href: string) {
  if (href === "/brands") {
    return pathname === "/brands" || pathname === "/style";
  }

  if (href === "/configure") {
    return pathname === "/configure" || pathname === "/moodboard" || pathname === "/consultation";
  }

  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }

  return pathname === href;
}

type NavIconProps = SVGAttributes<SVGSVGElement> & {
  size?: string | number;
  variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
};

function makeNavIcon(Icon: ComponentType<NavIconProps>) {
  return function WrappedNavIcon(props: NavIconProps) {
    return <Icon size={18} variant="Linear" {...props} />;
  };
}

const NavCall = makeNavIcon(IconsaxCall);
const NavHouse = makeNavIcon(IconsaxHouse);
const NavSms = makeNavIcon(IconsaxSms);
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (!open) {
        if (currentY > lastScrollY.current && currentY > 140) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.href]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const forceSolidNav = location.pathname === "/moodboard" || location.pathname === "/consultation";
  const elevated = scrolled || open || forceSolidNav;
  const heroNav = location.pathname === "/" && !elevated;
  const currentHash = location.href.includes("#") ? `#${location.href.split("#")[1]}` : "";

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: hidden && !open ? -132 : 0, opacity: 1 }}
      transition={{ duration: motionDuration.luxury, ease: motionEase.premium }}
      className={`fixed inset-x-0 top-0 z-50 ${heroNav ? "nav-hero" : ""}`}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.16 }}
        className={`nav-topbar-wrap ${elevated ? "nav-topbar-wrap-elevated" : ""}`}
      >
        <div className={`nav-band nav-topbar-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : ""}`}>
          <div className="site-container nav-topbar">
            <div className="hidden min-h-11 items-center justify-end gap-4 text-[0.72rem] tracking-[0.18em] text-[rgba(245,242,236,0.78)] md:flex">
              <div className="flex items-center justify-end gap-4 whitespace-nowrap">
                <span className="nav-topbar-item">
                  <NavHouse className="nav-topbar-icon text-[#C8A96B]/70" />
                  Zonnebaan 8, 3542 EC Utrecht
                </span>
                <span className="nav-topbar-sep" />
                <a href={kc.contact.phoneHref} className="nav-topbar-item hover:text-[#F5F2EC]">
                  <NavCall className="nav-topbar-icon text-[#C8A96B]/70" />
                  {kc.contact.phone}
                </a>
                <span className="nav-topbar-sep" />
                <a href={`mailto:${kc.contact.email}`} className="nav-topbar-item hover:text-[#F5F2EC]">
                  <NavSms className="nav-topbar-icon text-[#C8A96B]/70" />
                  {kc.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={`nav-header-wash ${elevated || forceSolidNav ? "opacity-0" : "opacity-100"} transition-opacity duration-500`} />

      <div className={`nav-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : ""}`}>
        <div className="site-container py-4">
          <div className={`nav-frame nav-shell flex items-center justify-between gap-6 ${elevated ? "nav-shell-elevated" : "nav-shell-top"}`}>
            <motion.a
              href="/"
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.06 }}
              className="flex shrink-0 items-center"
            >
              <img src={logoKeuken} alt="Keuken Centrum logo" className="h-8 w-auto md:h-9" width={343} height={56} />
            </motion.a>

            <motion.nav
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.34 }}
              className="hidden flex-1 items-center justify-center xl:flex"
            >
              <motion.div
                initial={reduceMotion ? false : "hidden"}
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.38,
                    },
                  },
                }}
                className="flex items-center gap-9"
              >
                {desktopMenu.map((item) => {
                  const hasDropdown = Boolean(item.items?.length);
                  const isOpen = openDropdown === item.label;
                  const isHome = item.label === "Home";

                  return (
                    <motion.div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasDropdown) setOpenDropdown(item.label);
                      }}
                      onMouseLeave={() => {
                        if (hasDropdown) setOpenDropdown((value) => (value === item.label ? null : value));
                      }}
                      variants={{
                        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: motionDuration.normal, ease: motionEase.premium },
                        },
                      }}
                    >
                      {hasDropdown ? (
                        <button
                          type="button"
                          className="nav-link flex cursor-default items-center gap-2"
                          aria-haspopup="menu"
                          aria-expanded={isOpen}
                          aria-disabled
                          onClick={(event) => {
                            event.preventDefault();
                          }}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : (
                        isHome ? (
                          <motion.a
                            href={item.href}
                            className="nav-link"
                            data-active={item.href ? isActiveLink(location.pathname, currentHash, item.href) : false}
                          >
                            {item.label}
                          </motion.a>
                        ) : (
                          <span className="nav-link cursor-default opacity-80" aria-disabled>
                            {item.label}
                          </span>
                        )
                      )}

                      <AnimatePresence initial={false}>
                        {hasDropdown && isOpen ? (
                          <motion.div
                            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(10px)" }}
                            transition={{ duration: 0.35, ease: motionEase.premium }}
                            className="absolute left-1/2 top-full z-50 mt-4 w-[300px] -translate-x-1/2 overflow-hidden rounded-[14px] border border-[rgba(7,17,27,0.08)] bg-[rgba(247,245,242,0.96)] shadow-[0_40px_100px_-70px_rgba(7,17,27,0.55)] backdrop-blur-xl"
                            role="menu"
                            aria-label={item.label}
                          >
                            <div className="p-2">
                              {item.items?.map((sub) => (
                                <span
                                  key={sub.label}
                                  className="group flex cursor-default items-center justify-between gap-4 rounded-[12px] px-4 py-3 text-[0.98rem] font-normal tracking-[-0.01em] text-[rgba(7,17,27,0.84)] transition-colors duration-300 hover:bg-[rgba(7,17,27,0.05)] hover:text-[rgba(7,17,27,0.98)]"
                                  role="menuitem"
                                  aria-disabled
                                >
                                  <span>{sub.label}</span>
                                  <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(201,164,106,0),rgba(201,164,106,0.75),rgba(201,164,106,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.nav>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.52 }}
              className="hidden items-center gap-5 lg:flex"
            >
              <span className="nav-cta cursor-default opacity-85" aria-disabled>
                Plan showroombezoek
              </span>
            </motion.div>

            <button
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
              className={`nav-mobile-toggle flex h-12 w-12 items-center justify-center rounded-[2px] border lg:hidden ${
                elevated
                  ? "border-[rgb(7,17,27,0.12)] bg-[rgba(255,255,255,0.82)] text-[var(--foreground)]"
                  : "border-[rgb(7,17,27,0.12)] bg-[rgba(246,244,238,0.78)] text-[var(--foreground)] backdrop-blur-xl"
              }`}
            >
              <span className="nav-mobile-toggle-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: motionDuration.premium, ease: motionEase.premium }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-[90] bg-[rgba(247,245,242,0.96)] backdrop-blur-[6px]">
              <nav className="nav-mobile-panel flex min-h-[100dvh] flex-col">
                <div className="flex items-center justify-between px-6 py-7">
                  <a href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <img src={logoKeuken} alt="Keuken Centrum logo" className="h-7 w-auto" width={343} height={56} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Sluit menu"
                    className="nav-mobile-close flex h-11 w-11 items-center justify-center text-[var(--foreground)]"
                  >
                    <span className="nav-mobile-close-lines" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center px-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-6 text-center">
                  <motion.div
                    initial={reduceMotion ? false : "hidden"}
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.08,
                        },
                      },
                    }}
                    className="w-full max-w-[18rem]"
                  >
                    <motion.p
                      variants={{
                        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: motionDuration.normal, ease: motionEase.premium },
                        },
                      }}
                      className="nav-mobile-meta text-center"
                    >
                      Navigatie
                    </motion.p>
                    <div className="mt-10 flex flex-col items-center gap-6">
                      {mobileLinks.map((l) => (
                        l.href === "/" ? (
                          <motion.a
                            key={l.href}
                            href={l.href}
                            onClick={() => {
                              setOpen(false);
                            }}
                            className="nav-mobile-link"
                            data-active={isActiveLink(location.pathname, currentHash, l.href)}
                            variants={{
                              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: motionDuration.premium, ease: motionEase.premium },
                              },
                            }}
                          >
                            {l.label}
                          </motion.a>
                        ) : (
                          <motion.div
                            key={l.href}
                            className="nav-mobile-link cursor-default opacity-75"
                            aria-disabled
                            variants={{
                              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: motionDuration.premium, ease: motionEase.premium },
                              },
                            }}
                          >
                            {l.label}
                          </motion.div>
                        )
                      ))}
                    </div>

                    <motion.div
                      variants={{
                        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.06 },
                        },
                      }}
                      className="mt-14"
                    >
                      <div className="nav-mobile-cta cursor-default opacity-75" aria-disabled>
                        Start uw ontwerp
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
