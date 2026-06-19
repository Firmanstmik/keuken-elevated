import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGAttributes } from "react";
import {
  Call as IconsaxCall,
  Sms as IconsaxSms,
  ArrowRight2 as IconsaxArrowRight2,
} from "@zethictech/iconsax-react";
import { ChevronDown, ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import logoKeuken from "@/assets/keukencentrum_logo_transparent_medium_centered_stripe.png";
import { motionDuration, motionEase } from "@/lib/motion";

// Import Lucide icons for mega menu sub-items
import {
  Award,
  Gem,
  Sparkles,
  Layers,
  Heart,
  Compass,
  Wrench,
  Shield,
  Mountain,
  Flame,
  Grid,
  Snowflake,
  Droplet,
  Wind,
  MapPin,
  FileText,
  ArrowUpRight,
  ArrowRight as LucideArrowRight,
  ShieldCheck,
  Truck,
} from "lucide-react";

// Import featured cover images
import showroomImg from "@/assets/showroom.jpg";
import marmerImg from "@/assets/marmer-img.webp";
import boraImg from "@/assets/Bora-img.webp";

// Import mobile menu accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavMenuItem = {
  label: string;
  href?: string;
  items?: Array<{
    label: string;
    href: string;
    description?: string;
    icon?: ComponentType<{ className?: string }>;
  }>;
  featured?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    imageSrc: string;
  };
};

const desktopMenu: NavMenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Keukens",
    items: [
      {
        label: "AI Küchen",
        href: "/#brands",
        description: "Innovatieve en moderne keukens, ontworpen met AI en Duitse precisie.",
        icon: Sparkles,
      },
      {
        label: "Leicht",
        href: "/#brands",
        description: "Duitse topkwaliteit en architectonisch design voor uw droomkeuken.",
        icon: Layers,
      },
      {
        label: "Nobilia",
        href: "/#brands",
        description: "De absolute marktleider in Europa. Veelzijdig, betrouwbaar en modern.",
        icon: Award,
      },
      {
        label: "Zampieri",
        href: "/#brands",
        description: "Exclusief Italiaans design. Minimalistisch, verfijnd en elegant.",
        icon: Gem,
      },
      {
        label: "Cucinesse",
        href: "/#brands",
        description: "Warme Italiaanse sfeer gecombineerd met functionaliteit en passie.",
        icon: Heart,
      },
      {
        label: "Keukenstijlen",
        href: "/#collections",
        description: "Ontdek welke stijl bij u past: van modern tot landelijk of industrieel.",
        icon: Compass,
      },
      {
        label: "Keuken op maat",
        href: "/#showroom",
        description: "Volledig gepersonaliseerd ontwerp, afgestemd op uw ruimte en wensen.",
        icon: Wrench,
      },
    ],
    featured: {
      title: "Duitse & Italiaanse Kwaliteit",
      description: "Ervaar vakmanschap in onze showroom te Utrecht. Al meer dan 45 jaar uw keukenspecialist.",
      buttonText: "Plan showroombezoek",
      buttonHref: "/consultation",
      imageSrc: showroomImg,
    },
  },
  {
    label: "Keukenbladen",
    items: [
      {
        label: "Silestone",
        href: "/#collections",
        description: "Kwartscomposiet bladen met extreme hardheid en prachtige kleuren.",
        icon: Gem,
      },
      {
        label: "Dekton",
        href: "/#collections",
        description: "Ultra-compact oppervlak, bestand tegen hitte, krassen en vlekken.",
        icon: Shield,
      },
      {
        label: "Neolith",
        href: "/#collections",
        description: "Gesinterde steenbladen voor een luxueuze, natuurlijke uitstraling.",
        icon: Mountain,
      },
      {
        label: "Sensa",
        href: "/#collections",
        description: "Exclusief natuursteen met een unieke, vlekbestendige bescherming.",
        icon: Sparkles,
      },
    ],
    featured: {
      title: "Natuursteen & Composiet",
      description: "Kies uit honderden kleuren en afwerkingen. Van hittebestendig Dekton tot luxe marmerlook.",
      buttonText: "Ontdek Materialen",
      buttonHref: "/#collections",
      imageSrc: marmerImg,
    },
  },
  {
    label: "Apparatuur",
    items: [
      {
        label: "Quooker",
        href: "/#showroom",
        description: "De kraan die alles kan: 100°C kokend, gekoeld en bruisend water.",
        icon: Droplet,
      },
      {
        label: "Kookplaten",
        href: "/#showroom",
        description: "Inductiekookplaten van topmerken voor optimaal kookcomfort.",
        icon: Grid,
      },
      {
        label: "Fornuizen",
        href: "/#showroom",
        description: "Professionele fornuizen voor de ultieme culinaire ervaring.",
        icon: Flame,
      },
      {
        label: "Afzuigkappen",
        href: "/#showroom",
        description: "Stijlvolle afzuigkappen die design en prestaties perfect combineren.",
        icon: Wind,
      },
      {
        label: "Werkblad afzuiging",
        href: "/#showroom",
        description: "Geavanceerde kookveldafzuiging die geuren direct bij de bron weghaalt.",
        icon: Wind,
      },
      {
        label: "Koelkasten & Vriezers",
        href: "/#showroom",
        description: "Geavanceerde koelapparatuur met slimme vershoudzones.",
        icon: Snowflake,
      },
      {
        label: "Vaatwassers",
        href: "/#showroom",
        description: "Stille, inbouwvaatwassers voor een perfect schone vaat.",
        icon: Droplet,
      },
      {
        label: "Wave afzuigkappen",
        href: "/#showroom",
        description: "Exclusieve design afzuigkappen als statement in uw keuken.",
        icon: Wind,
      },
    ],
    featured: {
      title: "Hoogwaardige Inbouwapparatuur",
      description: "Ontdek de nieuwste systemen van Miele, Bora en Quooker geïntegreerd in onze showroom.",
      buttonText: "Bekijk Apparatuur",
      buttonHref: "/#showroom",
      imageSrc: boraImg,
    },
  },
  { label: "Aanbiedingen", href: "/#collections" },
  {
    label: "Contact",
    items: [
      {
        label: "Showroom keukens",
        href: "/#showroom",
        description: "Kom langs in onze showroom in Utrecht en laat u inspireren.",
        icon: MapPin,
      },
      {
        label: "Offerte op maat",
        href: "/consultation",
        description: "Vraag online een vrijblijvende offerte aan voor uw droomkeuken.",
        icon: FileText,
      },
    ],
  },
];

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
const NavSms = makeNavIcon(IconsaxSms);

const GOOGLE_RATING = "4,9";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z" />
    </svg>
  );
}

function TopbarStars() {
  return (
    <span className="nav-topbar-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3 w-3 fill-[#C8A96B]">
          <path d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.47l-3.52 1.85.67-3.92L2.3 5.34l3.94-.57L8 1.2z" />
        </svg>
      ))}
    </span>
  );
}
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (!open) {
        setHidden(currentY > 16);
      }
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
      animate={{ y: hidden && !open ? "-100%" : 0, opacity: hidden && !open ? 0 : 1 }}
      transition={{ duration: motionDuration.luxury, ease: motionEase.premium }}
      className={`fixed inset-x-0 top-0 z-50 ${heroNav ? "nav-hero" : ""} ${hidden && !open ? "pointer-events-none" : ""}`}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDuration.premium, ease: motionEase.premium, delay: 0.16 }}
        className={`nav-topbar-wrap ${elevated ? "nav-topbar-wrap-elevated" : ""}`}
      >
        <div className={`nav-band nav-topbar-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : "nav-topbar-hero"}`}>
          <div className="site-container nav-topbar">
            <div className="hidden min-h-11 items-center justify-end gap-0 text-[0.72rem] tracking-[0.06em] text-[rgba(245,242,236,0.82)] md:flex">
              <a
                href={kc.contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-topbar-google-pill nav-topbar-item hover:text-[#F5F2EC]"
              >
                <GoogleLogo className="h-4 w-4 shrink-0" />
                <span className="font-semibold text-[#C8A96B]">{GOOGLE_RATING}</span>
                <TopbarStars />
                <span className="text-[rgba(245,242,236,0.72)]">Google Reviews</span>
              </a>
              <span className="nav-topbar-sep" />
              <span className="nav-topbar-item">
                <Truck className="nav-topbar-icon nav-topbar-accent-icon" strokeWidth={1.8} />
                Snelle levering
              </span>
              <span className="nav-topbar-sep" />
              <span className="nav-topbar-item">
                <ShieldCheck className="nav-topbar-icon nav-topbar-accent-icon" strokeWidth={1.8} />
                +5 jaar garantie
              </span>
              <span className="nav-topbar-sep" />
              <a href={kc.contact.phoneHref} className="nav-topbar-item hover:text-[#F5F2EC]">
                <NavCall className="nav-topbar-icon nav-topbar-accent-icon" />
                {kc.contact.phone}
              </a>
              <span className="nav-topbar-sep" />
              <a href={`mailto:${kc.contact.email}`} className="nav-topbar-item hover:text-[#F5F2EC]">
                <NavSms className="nav-topbar-icon nav-topbar-accent-icon" />
                {kc.contact.email}
              </a>
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
              <img src={logoKeuken} alt="Keuken Centrum logo" className={`w-auto transition-all duration-300 ${elevated ? "h-7 md:h-8" : "h-8 md:h-10"}`} width={343} height={56} />
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
                  const isMegamenu = item.label === "Keukens" || item.label === "Keukenbladen" || item.label === "Apparatuur";

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
                            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className={`absolute z-50 mt-4 overflow-hidden rounded-[24px] border border-[#E5DCD3]/50 bg-[#FAF8F4]/95 shadow-[0_32px_64px_-12px_rgba(23,25,28,0.12),0_0_0_1px_rgba(255,255,255,0.7)_inset] backdrop-blur-2xl ${isMegamenu
                              ? "left-1/2 w-[860px] -translate-x-1/2"
                              : "left-1/2 w-[280px] -translate-x-1/2 p-2.5"
                              }`}
                            role="menu"
                            aria-label={item.label}
                          >
                            {isMegamenu ? (
                              <div className="grid grid-cols-[1.22fr_0.78fr]">
                                {/* Left Column: Sub-items list */}
                                <div className="p-6 text-left">
                                  <div>
                                    <div className="text-[10px] font-medium tracking-[0.15em] text-[#C8A96B] uppercase">
                                      {item.label}
                                    </div>
                                    <div className="mt-1.5 font-display text-xl leading-normal text-[#111111] tracking-tight">
                                      {item.label === "Keukens" && "Duitse en Italiaanse keukenmerken."}
                                      {item.label === "Keukenbladen" && "Stijlvolle en duurzame keukenbladen."}
                                      {item.label === "Apparatuur" && "Hoogwaardige inbouwapparatuur."}
                                    </div>
                                  </div>
                                  <div className="my-4 h-px bg-[#E5DCD3]/30" />

                                  <div className={`grid gap-1.5 ${item.label === "Keukens" || item.label === "Apparatuur" ? "grid-cols-2" : "grid-cols-1"}`}>
                                    {item.items?.map((sub, index) => {
                                      const IconComponent = sub.icon;
                                      return (
                                        <motion.div
                                          key={sub.label}
                                          initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                                          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                          transition={{ delay: 0.04 + index * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                          className="group flex items-start gap-3 rounded-xl border border-transparent bg-transparent p-2.5 cursor-default"
                                        >
                                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#E5DCD3]/30 bg-white shadow-[0_4px_12px_-4px_rgba(23,25,28,0.06)] group-hover:bg-[#FAF8F4] transition-colors duration-300">
                                            {IconComponent && <IconComponent className="h-4 w-4 text-[#23B9C4] group-hover:text-[#163847] transition-colors duration-300" />}
                                          </span>
                                          <span className="min-w-0 flex-1">
                                            <span className="flex items-center justify-between gap-2">
                                              <span className="text-[12px] font-semibold tracking-[0.02em] text-[#111111] transition-colors duration-300 group-hover:text-[#23B9C4]">
                                                {sub.label}
                                              </span>
                                            </span>
                                            <span className="mt-0.5 block text-[11px] leading-relaxed text-[#5A5A5A]/80 font-light">
                                              {sub.description}
                                            </span>
                                          </span>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Right Column: Featured image card */}
                                <div className="relative border-l border-[#E5DCD3]/40 bg-[#FAF8F4]/30 p-6 flex flex-col justify-between">
                                  <div>
                                    <div className="text-left text-[10px] font-medium tracking-[0.15em] text-[#C8A96B] uppercase">
                                      Uitgelicht
                                    </div>
                                    <div className="mt-3 overflow-hidden rounded-xl border border-[#E5DCD3]/40 bg-white shadow-[0_12px_32px_-12px_rgba(23,25,28,0.12)]">
                                      <div className="relative aspect-[16/10] overflow-hidden group/featured">
                                        <img
                                          src={item.featured?.imageSrc}
                                          alt=""
                                          aria-hidden
                                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                          loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                                          <div className="text-[12px] font-semibold text-white tracking-[0.02em]">
                                            {item.featured?.title}
                                          </div>
                                          <div className="mt-1 text-[11px] leading-relaxed text-white/80 font-light">
                                            {item.featured?.description}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-5 text-left">
                                    <div
                                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#23B9C4]/50 px-4 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/80 uppercase cursor-default shadow-sm"
                                    >
                                      <span>{item.featured?.buttonText}</span>
                                      <ArrowUpRight size={13} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-col gap-0.5 text-left">
                                {item.items?.map((sub, index) => {
                                  const IconComponent = sub.icon;
                                  return (
                                    <motion.div
                                      key={sub.label}
                                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                      transition={{ delay: 0.05 + index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                      className="group relative flex cursor-default items-center justify-between rounded-[14px] px-4 py-3 text-[0.92rem] font-medium tracking-[0.01em] text-[#555555]"
                                      role="menuitem"
                                    >
                                      <span className="flex items-center gap-3">
                                        {IconComponent && <IconComponent className="h-4 w-4 text-[#C8A96B]" />}
                                        <span className="text-[13px] font-medium text-[#111111]">
                                          {sub.label}
                                        </span>
                                      </span>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            )}
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
                <span className="relative z-10">Plan showroombezoek</span>
                <IconsaxArrowRight2 size={15} variant="Linear" className="relative z-10" />
              </span>
            </motion.div>

            <button
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
              className={`nav-mobile-toggle flex h-12 w-12 items-center justify-center rounded-[2px] border lg:hidden ${elevated
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
                    <img src={logoKeuken} alt="Keuken Centrum logo" className="h-10 w-auto" width={343} height={56} />
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
                          staggerChildren: 0.05,
                          delayChildren: 0.05,
                        },
                      },
                    }}
                    className="w-full max-w-[20rem]"
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
                      className="nav-mobile-meta text-center mb-6"
                    >
                      Navigatie
                    </motion.p>
                    <div className="flex flex-col gap-1 w-full">
                      <Accordion type="single" collapsible className="w-full text-left">
                        {desktopMenu.map((item, index) => {
                          const hasDropdown = Boolean(item.items?.length);
                          if (!hasDropdown) {
                            if (item.label === "Home") {
                              return (
                                <motion.div
                                  key={item.label}
                                  variants={{
                                    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                                    visible: {
                                      opacity: 1,
                                      y: 0,
                                      transition: { duration: motionDuration.premium, ease: motionEase.premium },
                                    },
                                  }}
                                >
                                  <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] border-b border-[#E5DCD3]/30 hover:text-[#23B9C4]"
                                  >
                                    <span>{item.label}</span>
                                    <LucideArrowRight className="h-4 w-4 text-[#C8A96B]" />
                                  </a>
                                </motion.div>
                              );
                            }

                            return (
                              <motion.div
                                key={item.label}
                                variants={{
                                  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                                  visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: motionDuration.premium, ease: motionEase.premium },
                                  },
                                }}
                              >
                                <div
                                  className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#5A5A5A]/60 border-b border-[#E5DCD3]/30 cursor-default"
                                >
                                  <span>{item.label}</span>
                                </div>
                              </motion.div>
                            );
                          }

                          return (
                            <motion.div
                              key={item.label}
                              variants={{
                                hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  transition: { duration: motionDuration.premium, ease: motionEase.premium },
                                },
                              }}
                            >
                              <AccordionItem
                                value={item.label.toLowerCase()}
                                className="border-b border-[#E5DCD3]/30"
                              >
                                <AccordionTrigger className="py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] hover:no-underline hover:text-[#23B9C4] [&[data-state=open]]:text-[#23B9C4] [&[data-state=open]>svg]:rotate-180">
                                  {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1">
                                  <div className="flex flex-col gap-2 pl-3">
                                    {item.items?.map((sub) => {
                                      const SubIcon = sub.icon;
                                      return (
                                        <div
                                          key={sub.label}
                                          className="flex items-start gap-3 rounded-lg py-2.5 px-3 transition-colors duration-200"
                                        >
                                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#E5DCD3]/30 bg-white">
                                            {SubIcon && <SubIcon className="h-4.5 w-4.5 text-[#C8A96B]" />}
                                          </span>
                                          <div className="flex flex-col text-left">
                                            <span className="text-[13px] font-semibold text-[#111111]">
                                              {sub.label}
                                            </span>
                                            <span className="text-[11px] text-[#5A5A5A]/80 leading-normal font-light">
                                              {sub.description}
                                            </span>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </motion.div>
                          );
                        })}
                      </Accordion>
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
                      className="mt-10"
                    >
                      <a
                        href="/consultation"
                        onClick={() => setOpen(false)}
                        className="nav-mobile-cta text-center"
                      >
                        Plan Showroombezoek
                      </a>
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
