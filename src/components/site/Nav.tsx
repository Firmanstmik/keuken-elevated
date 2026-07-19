import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGAttributes } from "react";
import {
  Call as IconsaxCall,
  Sms as IconsaxSms,
  ArrowRight2 as IconsaxArrowRight2,
  Award as IconsaxAward,
  Layer as IconsaxLayer,
  Designtools as IconsaxDesigntools,
  RulerPen as IconsaxRulerPen,
  Shop as IconsaxShop,
  Messages as IconsaxMessages,
  Export as IconsaxExport,
  Award,
  Diamonds as Gem,
  MagicStar as Sparkles,
  Layer as Layers,
  Heart,
  Discover as Compass,
  Setting2 as Wrench,
  Shield,
  Gallery as Mountain,
  Candle2 as Flame,
  Grid4 as Grid,
  CloudSnow as Snowflake,
  Drop as Droplet,
  Wind,
  Location as MapPin,
  DocumentText as FileText,
  Export as ArrowUpRight,
  ArrowRight2 as LucideArrowRight,
  ShieldTick as ShieldCheck,
  TruckFast as Truck,
} from "@zethictech/iconsax-react";
import { ChevronDown, ArrowRight } from "@/components/ui/icons";
import { kc } from "@/lib/kc-data";
import logoKeuken from "@/assets/logo-keuken-1-1.webp";
import { motionDuration, motionEase } from "@/lib/motion";

// Import featured cover images
import showroomImg from "@/assets/showroom.jpg";
import marmerImg from "@/assets/marmer-img.webp";
import boraImg from "@/assets/Bora-img.webp";
import aiKuchenHero from "@/assets/brands/aikuchen-hero.webp";
import leichtHero from "@/assets/brands/leicht-hero.webp";
import zampieriHero from "@/assets/brands/zampieri-hero.webp";

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
  /** Compact single-line link groups used by the desktop megamenu. */
  groups?: Array<{
    title: string;
    items: Array<{ label: string; href: string }>;
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
    href: "/keukens",
    items: [
      {
        label: "AI Küchen",
        href: "/keukens/ai-kuchen",
        description: "Innovatieve en moderne keukens, ontworpen met AI en Duitse precisie.",
        icon: Sparkles,
      },
      {
        label: "Leicht",
        href: "/keukens/leicht",
        description: "Duitse topkwaliteit en architectonisch design voor uw droomkeuken.",
        icon: Layers,
      },
      {
        label: "Leicht Bossa",
        href: "/keukens/leicht/bossa",
        description:
          "Verticale structuur en Bossa Concrete, vertaald naar sculpturale showroomkeukens.",
        icon: Layers,
      },
      {
        label: "Leicht Taj Mahal",
        href: "/keukens/leicht/taj-mahal",
        description: "Monumentaal Leicht-design met elegante rust in de showroom.",
        icon: Award,
      },
      {
        label: "Leicht Ronde Wangen",
        href: "/keukens/leicht/ronde-wangen",
        description: "Zachte rondingen met Duitse precisie, live te ervaren in Utrecht.",
        icon: Compass,
      },
      {
        label: "Leicht Kyoto",
        href: "/keukens/leicht/kyoto",
        description: "Japandi-rust ontmoet Duitse architectuur in een serene showroomserie.",
        icon: Sparkles,
      },
      {
        label: "Nobilia",
        href: "/keukens/nobilia",
        description: "De absolute marktleider in Europa. Veelzijdig, betrouwbaar en modern.",
        icon: Award,
      },
      {
        label: "Zampieri",
        href: "/keukens/zampieri",
        description: "Exclusief Italiaans design. Minimalistisch, verfijnd en elegant.",
        icon: Gem,
      },
      {
        label: "Cucinesse",
        href: "/keukens/cucinesse",
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
        href: "/configure",
        description: "Volledig gepersonaliseerd ontwerp, afgestemd op uw ruimte en wensen.",
        icon: Wrench,
      },
    ],
    groups: [
      {
        title: "Merken",
        items: [
          { label: "AI Küchen", href: "/keukens/ai-kuchen" },
          { label: "Leicht", href: "/keukens/leicht" },
          { label: "Nobilia", href: "/keukens/nobilia" },
          { label: "Zampieri", href: "/keukens/zampieri" },
          { label: "Cucinesse", href: "/keukens/cucinesse" },
        ],
      },
      {
        title: "Leicht series",
        items: [
          { label: "Bossa", href: "/keukens/leicht/bossa" },
          { label: "Taj Mahal", href: "/keukens/leicht/taj-mahal" },
          { label: "Ronde Wangen", href: "/keukens/leicht/ronde-wangen" },
          { label: "Kyoto", href: "/keukens/leicht/kyoto" },
        ],
      },
      {
        title: "Ontdekken",
        items: [
          { label: "Keukenstijlen", href: "/#collections" },
          { label: "Keuken op maat", href: "/configure" },
          { label: "Showroom keukens", href: "/showroom-keukens" },
        ],
      },
    ],
    featured: {
      title: "Duitse & Italiaanse Kwaliteit",
      description:
        "Ervaar vakmanschap in onze showroom te Utrecht. Al meer dan 45 jaar uw keukenspecialist.",
      buttonText: "Alle keukenmerken",
      buttonHref: "/keukens",
      imageSrc: showroomImg,
    },
  },
  {
    label: "Keukenbladen",
    href: "/keukenbladen",
    items: [
      {
        label: "Silestone",
        href: "/keukenbladen/silestone",
        description: "Kwartscomposiet bladen met extreme hardheid en prachtige kleuren.",
        icon: Gem,
      },
      {
        label: "Dekton",
        href: "/keukenbladen/dekton",
        description: "Ultra-compact oppervlak, bestand tegen hitte, krassen en vlekken.",
        icon: Shield,
      },
      {
        label: "Neolith",
        href: "/keukenbladen/neolith",
        description: "Gesinterde steenbladen voor een luxueuze, natuurlijke uitstraling.",
        icon: Mountain,
      },
      {
        label: "Sensa",
        href: "/keukenbladen/sensa",
        description: "Exclusief natuursteen met een unieke, vlekbestendige bescherming.",
        icon: Sparkles,
      },
    ],
    groups: [
      {
        title: "Materialen",
        items: [
          { label: "Silestone", href: "/keukenbladen/silestone" },
          { label: "Dekton", href: "/keukenbladen/dekton" },
          { label: "Neolith", href: "/keukenbladen/neolith" },
          { label: "Sensa", href: "/keukenbladen/sensa" },
        ],
      },
      {
        title: "Advies",
        items: [
          { label: "Alle keukenbladen", href: "/keukenbladen" },
          { label: "Offerte op maat", href: "/consultation" },
        ],
      },
    ],
    featured: {
      title: "Natuursteen & Composiet",
      description:
        "Kies uit honderden kleuren en afwerkingen. Van hittebestendig Dekton tot luxe marmerlook.",
      buttonText: "Ontdek Materialen",
      buttonHref: "/keukenbladen",
      imageSrc: marmerImg,
    },
  },
  {
    label: "Apparatuur",
    href: "/apparatuur",
    items: [
      {
        label: "Quooker",
        href: "/apparatuur/quooker",
        description: "De kraan die alles kan: 100°C kokend, gekoeld en bruisend water.",
        icon: Droplet,
      },
      {
        label: "Kookplaten",
        href: "/apparatuur/kookplaten",
        description: "Inductiekookplaten van topmerken voor optimaal kookcomfort.",
        icon: Grid,
      },
      {
        label: "Fornuizen",
        href: "/apparatuur/fornuizen",
        description: "Professionele fornuizen voor de ultieme culinaire ervaring.",
        icon: Flame,
      },
      {
        label: "Afzuigkappen",
        href: "/apparatuur/afzuigkappen",
        description: "Stijlvolle afzuigkappen die design en prestaties perfect combineren.",
        icon: Wind,
      },
      {
        label: "Werkblad afzuiging",
        href: "/apparatuur/werkblad-afzuiging",
        description: "Geavanceerde kookveldafzuiging die geuren direct bij de bron weghaalt.",
        icon: Wind,
      },
      {
        label: "Koelkasten & Vriezers",
        href: "/apparatuur/koelkasten-vriezers",
        description: "Geavanceerde koelapparatuur met slimme vershoudzones.",
        icon: Snowflake,
      },
      {
        label: "Vaatwassers",
        href: "/apparatuur/vaatwassers",
        description: "Stille, inbouwvaatwassers voor een perfect schone vaat.",
        icon: Droplet,
      },
      {
        label: "Wave afzuigkappen",
        href: "/apparatuur/wave-afzuigkappen",
        description: "Exclusieve design afzuigkappen als statement in uw keuken.",
        icon: Wind,
      },
    ],
    groups: [
      {
        title: "Koken",
        items: [
          { label: "Kookplaten", href: "/apparatuur/kookplaten" },
          { label: "Fornuizen", href: "/apparatuur/fornuizen" },
          { label: "Quooker", href: "/apparatuur/quooker" },
        ],
      },
      {
        title: "Ventilatie",
        items: [
          { label: "Afzuigkappen", href: "/apparatuur/afzuigkappen" },
          { label: "Werkblad afzuiging", href: "/apparatuur/werkblad-afzuiging" },
          { label: "Wave afzuigkappen", href: "/apparatuur/wave-afzuigkappen" },
        ],
      },
      {
        title: "Koelen & vaat",
        items: [
          { label: "Koelkasten & Vriezers", href: "/apparatuur/koelkasten-vriezers" },
          { label: "Vaatwassers", href: "/apparatuur/vaatwassers" },
        ],
      },
    ],
    featured: {
      title: "Hoogwaardige Inbouwapparatuur",
      description:
        "Ontdek de nieuwste systemen van Miele, Bora en Quooker geïntegreerd in onze showroom.",
      buttonText: "Bekijk Apparatuur",
      buttonHref: "/apparatuur",
      imageSrc: boraImg,
    },
  },
  { label: "Aanbiedingen", href: "/aanbiedingen" },
  {
    label: "Contact",
    href: "/contact",
    items: [
      {
        label: "Contact & route",
        href: "/contact",
        description: "Stuur een bericht, bel ons of plan uw route naar de Zonnebaan.",
        icon: MapPin,
      },
      {
        label: "Showroom keukens",
        href: "/showroom-keukens",
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

const kitchenMenuCategories = [
  {
    label: "Keukenmerken",
    icon: IconsaxAward,
    eyebrow: "Uitgelichte keukenmerken",
    title: "Europees design, geselecteerd in Utrecht",
    footer: "5 premium merken",
    detail: "Duitse precisie & Italiaanse finesse",
    linkLabel: "Alle keukenmerken",
    href: "/keukens",
    highlights: [
      {
        label: "AI Küchen",
        note: "Innovatief & modern",
        href: "/keukens/ai-kuchen",
        image: aiKuchenHero,
      },
      {
        label: "Leicht",
        note: "Architectonisch design",
        href: "/keukens/leicht",
        image: leichtHero,
      },
      {
        label: "Zampieri",
        note: "Italiaanse verfijning",
        href: "/keukens/zampieri",
        image: zampieriHero,
      },
    ],
  },
  {
    label: "Leicht collecties",
    icon: IconsaxLayer,
    eyebrow: "Leicht signature series",
    title: "Architecturale collecties met karakter",
    footer: "4 showroomseries",
    detail: "Van sculpturale Bossa tot serene Kyoto",
    linkLabel: "Alle Leicht collecties",
    href: "/keukens/leicht",
    highlights: [
      {
        label: "Bossa",
        note: "Verticale structuur",
        href: "/keukens/leicht/bossa",
        image: "https://keuken-centrum.nl/wp-content/uploads/Leicht-Bossa-showroom--scaled.webp",
      },
      {
        label: "Taj Mahal",
        note: "Monumentale elegantie",
        href: "/keukens/leicht/taj-mahal",
        image: "https://keuken-centrum.nl/wp-content/uploads/Leicht-keukens.webp",
      },
      {
        label: "Kyoto",
        note: "Japandi rust",
        href: "/keukens/leicht/kyoto",
        image: "https://keuken-centrum.nl/wp-content/uploads/Leicht-Kyoto-showroom.webp",
      },
    ],
  },
  {
    label: "Keukenstijlen",
    icon: IconsaxDesigntools,
    eyebrow: "Vind uw eigen stijl",
    title: "Van minimalistisch tot warm en tijdloos",
    footer: "Voor iedere woonstijl",
    detail: "Ontdek materialen, kleuren en vormen",
    linkLabel: "Alle keukenstijlen",
    href: "/#collections",
    highlights: [
      { label: "Modern", note: "Strak & greeploos", href: "/#collections", image: kc.hero.main },
      { label: "Japandi", note: "Warm & sereen", href: "/#collections", image: kc.hero.alt1 },
      {
        label: "Industrieel",
        note: "Krachtig & karaktervol",
        href: "/#collections",
        image: kc.hero.alt2,
      },
    ],
  },
  {
    label: "Keuken op maat",
    icon: IconsaxRulerPen,
    eyebrow: "Persoonlijk maatwerk",
    title: "Ontworpen rond uw ruimte en dagelijks leven",
    footer: "Volledig persoonlijk",
    detail: "Van eerste schets tot perfecte montage",
    linkLabel: "Start uw ontwerp",
    href: "/configure",
    highlights: [
      { label: "3D ontwerp", note: "Uw ideeën in beeld", href: "/configure", image: kc.hero.alt2 },
      {
        label: "Materiaalkeuze",
        note: "Voel het verschil",
        href: "/configure",
        image: kc.hero.alt3,
      },
      { label: "Montage", note: "Zorgeloos geplaatst", href: "/configure", image: kc.hero.alt4 },
    ],
  },
  {
    label: "Showroomkeukens",
    icon: IconsaxShop,
    eyebrow: "Direct te ervaren",
    title: "Inspiratie en voordeel in onze showroom",
    footer: "Showroom Utrecht",
    detail: "Bekijk, voel en vergelijk in alle rust",
    linkLabel: "Bekijk showroomkeukens",
    href: "/showroom-keukens",
    highlights: [
      {
        label: "Nieuwe opstellingen",
        note: "Live te bekijken",
        href: "/showroom-keukens",
        image: kc.showroomImg,
      },
      {
        label: "Showroomdeals",
        note: "Direct voordeel",
        href: "/aanbiedingen",
        image: kc.aanbiedingenImg,
      },
      {
        label: "Direct leverbaar",
        note: "Snel in huis",
        href: "/aanbiedingen",
        image: kc.aanbiedingen2,
      },
    ],
  },
  {
    label: "Persoonlijk advies",
    icon: IconsaxMessages,
    eyebrow: "Advies van onze specialisten",
    title: "Samen maken we van uw wensen een ontwerp",
    footer: "45+ jaar ervaring",
    detail: "Persoonlijk advies zonder verplichtingen",
    linkLabel: "Plan een showroombezoek",
    href: "/consultation",
    highlights: [
      {
        label: "Kennismaken",
        note: "Vertel ons uw wensen",
        href: "/consultation",
        image: kc.hero.alt3,
      },
      {
        label: "Ontwerpsessie",
        note: "Samen aan tafel",
        href: "/consultation",
        image: showroomImg,
      },
      {
        label: "Vrijblijvende offerte",
        note: "Helder & persoonlijk",
        href: "/consultation",
        image: kc.hero.alt4,
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
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"
      />
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
  const [activeKitchenCategory, setActiveKitchenCategory] = useState(0);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (!open) {
        const delta = currentY - lastY;
        // Direction-aware auto-hide: hide while scrolling down past the hero
        // top, reveal as soon as the user scrolls back up.
        if (currentY <= 96) {
          setHidden(false);
        } else if (delta > 6) {
          setHidden(true);
        } else if (delta < -6) {
          setHidden(false);
        }
      }

      lastY = currentY;
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

  const forceSolidNav = ["/brands", "/style", "/moodboard", "/consultation"].includes(
    location.pathname,
  );
  const elevated = scrolled || open || forceSolidNav;
  // Transparent over the dark hero at the top; once scrolled the navbar gains
  // a light glass background, so links switch to the dark treatment.
  const heroNav = !elevated;
  const currentHash = location.href.includes("#") ? `#${location.href.split("#")[1]}` : "";
  const activeKitchenMenu = kitchenMenuCategories[activeKitchenCategory];

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
        <div
          className={`nav-band nav-topbar-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : "nav-topbar-hero"}`}
        >
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
                <Truck className="nav-topbar-icon nav-topbar-accent-icon" variant="Linear" />
                Snelle levering
              </span>
              <span className="nav-topbar-sep" />
              <span className="nav-topbar-item">
                <ShieldCheck className="nav-topbar-icon nav-topbar-accent-icon" variant="Linear" />
                +5 jaar garantie
              </span>
              <span className="nav-topbar-sep" />
              <a href={kc.contact.phoneHref} className="nav-topbar-item hover:text-[#F5F2EC]">
                <NavCall className="nav-topbar-icon nav-topbar-accent-icon" />
                {kc.contact.phone}
              </a>
              <span className="nav-topbar-sep" />
              <a
                href={`mailto:${kc.contact.email}`}
                className="nav-topbar-item hover:text-[#F5F2EC]"
              >
                <NavSms className="nav-topbar-icon nav-topbar-accent-icon" />
                {kc.contact.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className={`nav-header-wash ${elevated || forceSolidNav ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
      />

      <div
        className={`nav-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : ""}`}
      >
        <div
          className={`site-container transition-[padding] duration-500 ${elevated ? "py-3" : "py-4"}`}
        >
          <div
            className={`nav-frame nav-shell flex items-center justify-between gap-6 ${elevated ? "nav-shell-elevated" : "nav-shell-top"}`}
          >
            <motion.a
              href="/"
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: motionDuration.premium,
                ease: motionEase.premium,
                delay: 0.06,
              }}
              className="flex shrink-0 items-center"
            >
              <img
                src={logoKeuken}
                alt="KeukenCentrum.nl"
                className={`nav-logo w-auto transition-all duration-300 ${elevated ? "h-7 md:h-8" : "h-8 md:h-9"}`}
                width={280}
                height={48}
              />
            </motion.a>

            <motion.nav
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: motionDuration.premium,
                ease: motionEase.premium,
                delay: 0.34,
              }}
              className="hidden flex-1 items-center justify-end xl:flex"
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
                className="flex items-center gap-6 2xl:gap-7"
              >
                {desktopMenu.map((item) => {
                  const hasDropdown = Boolean(item.items?.length);
                  const isOpen = openDropdown === item.label;
                  const isMegamenu =
                    item.label === "Keukens" ||
                    item.label === "Keukenbladen" ||
                    item.label === "Apparatuur";

                  return (
                    <motion.div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasDropdown) setOpenDropdown(item.label);
                      }}
                      onMouseLeave={() => {
                        if (hasDropdown)
                          setOpenDropdown((value) => (value === item.label ? null : value));
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
                        <motion.a
                          href={item.href}
                          className="nav-link"
                          data-active={
                            item.href
                              ? isActiveLink(location.pathname, currentHash, item.href)
                              : false
                          }
                        >
                          {item.label}
                        </motion.a>
                      )}

                      <AnimatePresence initial={false}>
                        {hasDropdown && isOpen ? (
                          <motion.div
                            initial={
                              reduceMotion
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 12, scale: 0.99 }
                            }
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.99 }}
                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                            className={`absolute z-50 mt-4 overflow-hidden rounded-[26px] border backdrop-blur-2xl ${
                              heroNav
                                ? "border-[rgba(200,169,107,0.18)] bg-[rgba(14,17,10,0.92)] shadow-[0_42px_110px_-28px_rgba(0,0,0,0.82),0_0_0_1px_rgba(255,255,255,0.035)_inset]"
                                : "border-[rgba(200,169,107,0.24)] bg-[linear-gradient(145deg,rgba(255,254,251,0.99),rgba(245,241,232,0.985))] shadow-[0_40px_100px_-30px_rgba(23,25,20,0.38),0_0_0_1px_rgba(255,255,255,0.95)_inset]"
                            } ${
                              isMegamenu
                                ? `left-1/2 -translate-x-1/2 ${item.label === "Keukens" ? "w-[min(980px,calc(100vw-3rem))]" : "w-[min(840px,calc(100vw-3rem))]"}`
                                : "left-1/2 w-[280px] -translate-x-1/2 p-2.5"
                            }`}
                            role="menu"
                            aria-label={item.label}
                          >
                            {/* Gold-green hairline along the top edge — jewellery detail */}
                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,107,0.82)] to-transparent"
                            />
                            <div
                              aria-hidden
                              className={`pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full blur-3xl ${heroNav ? "bg-[rgba(139,197,64,0.08)]" : "bg-[rgba(139,197,64,0.07)]"}`}
                            />
                            {isMegamenu ? (
                              item.label === "Keukens" ? (
                                <div
                                  className={`relative grid grid-cols-[290px_1fr] text-left ${heroNav ? "text-[#F5F2EC]" : "text-[#20231A]"}`}
                                >
                                  <div
                                    className={`border-r px-5 py-6 ${
                                      heroNav
                                        ? "border-white/[0.08] bg-white/[0.025]"
                                        : "border-[#E6E2D8] bg-[#F7F7F4]"
                                    }`}
                                  >
                                    <div
                                      className={`mb-4 px-3 text-[0.56rem] font-semibold uppercase tracking-[0.26em] ${heroNav ? "text-[#C8A96B]" : "text-[#86724C]"}`}
                                    >
                                      Ontdek onze keukens
                                    </div>
                                    <div className="space-y-1.5">
                                      {kitchenMenuCategories.map((category, index) => {
                                        const CategoryIcon = category.icon;
                                        return (
                                          <motion.button
                                            key={category.label}
                                            type="button"
                                            onMouseEnter={() => setActiveKitchenCategory(index)}
                                            onFocus={() => setActiveKitchenCategory(index)}
                                            initial={reduceMotion ? false : { opacity: 0, x: -7 }}
                                            animate={
                                              reduceMotion ? undefined : { opacity: 1, x: 0 }
                                            }
                                            transition={{
                                              delay: 0.04 + index * 0.035,
                                              duration: 0.38,
                                              ease: [0.22, 1, 0.36, 1],
                                            }}
                                            aria-pressed={activeKitchenCategory === index}
                                            className={`group/category flex w-full items-center gap-3 rounded-[12px] border px-3 py-3 text-left transition-all duration-300 ${
                                              activeKitchenCategory === index
                                                ? heroNav
                                                  ? "border-[rgba(200,169,107,0.22)] bg-[rgba(200,169,107,0.12)] text-[#E7D2A5]"
                                                  : "border-[rgba(200,169,107,0.22)] bg-white text-[#8A6429] shadow-[0_10px_30px_-22px_rgba(30,32,19,0.45)]"
                                                : heroNav
                                                  ? "border-transparent text-white/72 hover:border-white/[0.06] hover:bg-white/[0.045] hover:text-white"
                                                  : "border-transparent text-[#394035] hover:border-[#E7E4DB] hover:bg-white hover:text-[#537D25]"
                                            }`}
                                          >
                                            <span
                                              className={`grid h-9 w-9 shrink-0 place-items-center rounded-[10px] transition-colors duration-300 ${
                                                activeKitchenCategory === index
                                                  ? "bg-[linear-gradient(145deg,#D4B16F,#B48B43)] text-white shadow-[0_8px_18px_-10px_rgba(166,125,55,0.9)]"
                                                  : heroNav
                                                    ? "bg-white/[0.05] text-[#C8A96B]"
                                                    : "bg-white text-[#A88A51] shadow-[0_6px_18px_-14px_rgba(30,32,19,0.5)]"
                                              }`}
                                            >
                                              <CategoryIcon
                                                className="h-4 w-4"
                                                size={16}
                                                variant="Linear"
                                              />
                                            </span>
                                            <span className="flex-1 text-[0.76rem] font-medium tracking-[0.01em]">
                                              {category.label}
                                            </span>
                                            <IconsaxArrowRight2
                                              size={11}
                                              variant="Linear"
                                              className="opacity-35 transition-all duration-300 group-hover/category:translate-x-0.5 group-hover/category:opacity-100"
                                            />
                                          </motion.button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div className="flex min-w-0 flex-col p-7 pb-5">
                                    <div className="mb-5 flex items-end justify-between gap-6">
                                      <div>
                                        <span
                                          className={`block text-[0.55rem] font-semibold uppercase tracking-[0.26em] ${heroNav ? "text-[#C8A96B]" : "text-[#8F774A]"}`}
                                        >
                                          {activeKitchenMenu.eyebrow}
                                        </span>
                                        <span
                                          className={`mt-2 block font-display text-[1.35rem] leading-tight tracking-[-0.02em] ${heroNav ? "text-[#F5F2EC]" : "text-[#20231A]"}`}
                                        >
                                          {activeKitchenMenu.title}
                                        </span>
                                      </div>
                                      <span
                                        className={`shrink-0 font-serif text-[0.68rem] italic ${heroNav ? "text-white/32" : "text-[#202020]"}`}
                                      >
                                        Curated by KC
                                      </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                      {activeKitchenMenu.highlights.map((highlight, index) => (
                                        <motion.a
                                          key={`${activeKitchenMenu.label}-${highlight.label}`}
                                          href={highlight.href}
                                          onClick={() => setOpenDropdown(null)}
                                          initial={reduceMotion ? false : { opacity: 0, y: 7 }}
                                          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                          transition={{
                                            delay: 0.08 + index * 0.055,
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                          }}
                                          className={`group/card overflow-hidden rounded-[15px] border transition-all duration-500 hover:-translate-y-1 ${
                                            heroNav
                                              ? "border-white/[0.09] bg-white/[0.04] shadow-[0_20px_44px_-22px_rgba(0,0,0,0.8)] hover:border-[rgba(200,169,107,0.28)]"
                                              : "border-[#E7E3D9] bg-[#FAFAF7] shadow-[0_18px_38px_-26px_rgba(29,32,22,0.45)] hover:border-[rgba(200,169,107,0.42)] hover:shadow-[0_24px_44px_-24px_rgba(29,32,22,0.38)]"
                                          }`}
                                        >
                                          <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                              src={highlight.image}
                                              alt={`${highlight.label} keuken`}
                                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.06]"
                                              loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
                                            <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-white/25 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/card:opacity-100">
                                              <IconsaxExport size={12} variant="Linear" />
                                            </span>
                                          </div>
                                          <div className="px-4 py-3.5">
                                            <div
                                              className={`text-[0.78rem] font-semibold ${heroNav ? "text-white/90" : "text-[#272B22]"}`}
                                            >
                                              {highlight.label}
                                            </div>
                                            <div className="mt-1.5 text-[0.62rem] font-medium text-[#A67C3D]">
                                              {highlight.note}
                                            </div>
                                          </div>
                                        </motion.a>
                                      ))}
                                    </div>

                                    <div
                                      className={`mt-5 flex items-center justify-between border-t pt-4 ${heroNav ? "border-white/[0.08]" : "border-[#E5E1D7]"}`}
                                    >
                                      <span
                                        className={`text-[0.65rem] ${heroNav ? "text-white/45" : "text-[#202020]"}`}
                                      >
                                        <strong
                                          className={heroNav ? "text-[#E8D5AC]" : "text-[#8B6931]"}
                                        >
                                          {activeKitchenMenu.footer}
                                        </strong>
                                        <span className="mx-2 opacity-35">•</span>
                                        {activeKitchenMenu.detail}
                                      </span>
                                      <a
                                        href={activeKitchenMenu.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className={`group/all flex items-center gap-2 text-[0.63rem] font-semibold uppercase tracking-[0.12em] transition-colors ${heroNav ? "text-[#D8BE87] hover:text-white" : "text-[#98743B] hover:text-[#527C24]"}`}
                                      >
                                        {activeKitchenMenu.linkLabel}
                                        <IconsaxArrowRight2
                                          size={12}
                                          variant="Linear"
                                          className="transition-transform duration-300 group-hover/all:translate-x-1"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="relative grid grid-cols-[1.55fr_0.75fr]">
                                  {/* Left: editorial link index */}
                                  <div className="p-8 pr-7 text-left">
                                    <div className="flex items-start justify-between gap-5">
                                      <div>
                                        <div className="mb-4 flex items-center gap-3">
                                          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(200,169,107,0.38)] bg-[linear-gradient(145deg,rgba(255,255,255,0.15),rgba(200,169,107,0.13))] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_24px_-14px_rgba(200,169,107,0.8)]">
                                            <span className="absolute inset-[4px] rounded-full border border-[rgba(200,169,107,0.16)]" />
                                            <Gem
                                              className="relative h-4 w-4 text-[#C8A96B]"
                                              variant="Linear"
                                            />
                                          </span>
                                          <div>
                                            <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.3em] text-[#A68A53]">
                                              Premium collectie
                                            </span>
                                            <span
                                              className={`mt-1 block text-[0.55rem] font-light tracking-[0.08em] ${heroNav ? "text-white/38" : "text-[#202020]"}`}
                                            >
                                              Met zorg geselecteerd in Utrecht
                                            </span>
                                          </div>
                                        </div>
                                        <span
                                          className={`font-display text-[1.35rem] leading-[1.15] tracking-[-0.02em] ${heroNav ? "text-[#F5F2EC]" : "text-[#1E2013]"}`}
                                        >
                                          {item.label === "Keukens" &&
                                            "Duitse en Italiaanse keukenmerken"}
                                          {item.label === "Keukenbladen" &&
                                            "Stijlvolle en duurzame keukenbladen"}
                                          {item.label === "Apparatuur" &&
                                            "Hoogwaardige inbouwapparatuur"}
                                        </span>
                                      </div>
                                      <span
                                        className={`mt-1 font-serif text-[0.72rem] italic ${heroNav ? "text-white/30" : "text-[#202020]"}`}
                                      >
                                        Curated by KC
                                      </span>
                                    </div>
                                    <div
                                      className={`mb-6 mt-5 h-px bg-gradient-to-r ${
                                        heroNav
                                          ? "from-[rgba(200,169,107,0.5)] via-white/10 to-transparent"
                                          : "from-[rgba(200,169,107,0.42)] via-[rgba(23,25,28,0.07)] to-transparent"
                                      }`}
                                    />

                                    <div
                                      className={`grid gap-x-6 gap-y-6 ${(item.groups?.length ?? 0) >= 3 ? "grid-cols-3" : "grid-cols-2"}`}
                                    >
                                      {item.groups?.map((group, groupIndex) => (
                                        <motion.div
                                          key={group.title}
                                          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                                          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                          transition={{
                                            delay: 0.05 + groupIndex * 0.05,
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                          }}
                                        >
                                          <div className="mb-2.5 flex items-center gap-2">
                                            <span
                                              className={`font-serif text-[0.68rem] italic ${heroNav ? "text-[#C8A96B]/55" : "text-[#A68A53]/65"}`}
                                            >
                                              0{groupIndex + 1}
                                            </span>
                                            <div
                                              className={`text-[0.58rem] font-semibold uppercase tracking-[0.2em] ${heroNav ? "text-[#C8A96B]" : "text-[#8E7950]"}`}
                                            >
                                              {group.title}
                                            </div>
                                          </div>
                                          <ul className="space-y-1">
                                            {group.items.map((sub) => (
                                              <li key={sub.label}>
                                                <a
                                                  href={sub.href}
                                                  onClick={() => setOpenDropdown(null)}
                                                  role="menuitem"
                                                  className={`group/link -mx-2 flex items-center justify-between rounded-[9px] border border-transparent px-2.5 py-2 text-[0.79rem] font-medium tracking-[0.01em] transition-all duration-300 ${
                                                    heroNav
                                                      ? "text-[rgba(245,242,236,0.8)] hover:border-white/[0.06] hover:bg-white/[0.045] hover:text-[#CDEB9C]"
                                                      : "text-[#35382D] hover:border-[rgba(139,197,64,0.13)] hover:bg-[rgba(139,197,64,0.065)] hover:text-[#3E6317]"
                                                  }`}
                                                >
                                                  <span>{sub.label}</span>
                                                  <span
                                                    className={`flex h-5 w-5 -translate-x-1 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100 ${heroNav ? "bg-white/[0.06]" : "bg-white/80"}`}
                                                  >
                                                    <IconsaxArrowRight2
                                                      size={10}
                                                      variant="Linear"
                                                      className="text-[#8BC540]"
                                                    />
                                                  </span>
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Right: immersive featured card */}
                                  <div
                                    className={`relative flex flex-col border-l p-6 ${
                                      heroNav
                                        ? "border-white/[0.07] bg-white/[0.025]"
                                        : "border-[rgba(200,169,107,0.16)] bg-[linear-gradient(155deg,rgba(246,244,239,0.68),rgba(235,230,219,0.88))]"
                                    }`}
                                  >
                                    <div
                                      aria-hidden
                                      className="pointer-events-none absolute inset-0 opacity-50"
                                      style={{
                                        background:
                                          "radial-gradient(circle at 80% 55%, rgba(139,197,64,0.09), transparent 32%), radial-gradient(circle at 20% 85%, rgba(200,169,107,0.08), transparent 34%)",
                                      }}
                                    />
                                    <div
                                      className={`group/feature overflow-hidden rounded-[18px] ${
                                        heroNav
                                          ? "shadow-[0_24px_54px_-18px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
                                          : "shadow-[0_22px_50px_-22px_rgba(23,25,20,0.42)] ring-1 ring-[rgba(200,169,107,0.12)]"
                                      }`}
                                    >
                                      <div className="relative aspect-[5/4] overflow-hidden">
                                        <img
                                          src={item.featured?.imageSrc}
                                          alt=""
                                          aria-hidden
                                          className="absolute inset-0 h-full w-full object-cover saturate-[0.9] transition-[transform,filter] duration-700 group-hover/feature:scale-[1.055] group-hover/feature:saturate-100"
                                          loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,16,9,0.96)] via-[rgba(13,16,9,0.24)] to-transparent" />
                                        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[0.48rem] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
                                          <Award
                                            className="h-2.5 w-2.5 text-[#D8BE87]"
                                            variant="Linear"
                                          />
                                          Showroom keuze
                                        </span>
                                        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                                          <div className="font-display text-[1rem] leading-tight tracking-[-0.01em] text-white">
                                            {item.featured?.title}
                                          </div>
                                          <div className="mt-2 text-[0.67rem] font-light leading-[1.55] text-white/68">
                                            {item.featured?.description}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className={`relative my-4 grid grid-cols-2 divide-x ${heroNav ? "divide-white/10" : "divide-[rgba(200,169,107,0.2)]"}`}
                                    >
                                      <div className="pr-3">
                                        <span
                                          className={`block font-serif text-[1.05rem] leading-none ${heroNav ? "text-[#F5F2EC]" : "text-[#22251A]"}`}
                                        >
                                          45+
                                        </span>
                                        <span
                                          className={`mt-1.5 block text-[0.48rem] font-semibold uppercase tracking-[0.18em] ${heroNav ? "text-white/38" : "text-[#202020]"}`}
                                        >
                                          Jaar ervaring
                                        </span>
                                      </div>
                                      <div className="pl-4">
                                        <span
                                          className={`flex items-center gap-1.5 font-serif text-[0.82rem] leading-none ${heroNav ? "text-[#F5F2EC]" : "text-[#22251A]"}`}
                                        >
                                          <MapPin
                                            className="h-3 w-3 text-[#8BC540]"
                                            variant="Linear"
                                          />
                                          Utrecht
                                        </span>
                                        <span
                                          className={`mt-1.5 block text-[0.48rem] font-semibold uppercase tracking-[0.18em] ${heroNav ? "text-white/38" : "text-[#202020]"}`}
                                        >
                                          Eigen showroom
                                        </span>
                                      </div>
                                    </div>

                                    <a
                                      href={item.featured?.buttonHref}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group/cta relative mt-auto inline-flex w-full items-center justify-between overflow-hidden rounded-[12px] border border-[rgba(168,217,90,0.62)] bg-[linear-gradient(135deg,#A8D95A_0%,#8BC540_55%,#74AA31_100%)] px-4 py-3.5 text-[0.6rem] font-bold uppercase tracking-[0.17em] text-[#14200A] shadow-[0_16px_30px_-16px_rgba(139,197,64,0.72),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5E88A] hover:brightness-105 hover:shadow-[0_20px_36px_-14px_rgba(139,197,64,0.82),inset_0_1px_0_rgba(255,255,255,0.42)]"
                                    >
                                      <span className="relative z-10">
                                        {item.featured?.buttonText}
                                      </span>
                                      <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(20,32,10,0.12)] transition-transform duration-300 group-hover/cta:rotate-6 group-hover/cta:scale-105">
                                        <ArrowUpRight
                                          size={12}
                                          className="text-[#14200A] transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                                        />
                                      </span>
                                      <span
                                        aria-hidden
                                        className="absolute -left-12 top-0 h-full w-10 -skew-x-12 bg-white/25 blur-sm transition-transform duration-700 group-hover/cta:translate-x-[290px]"
                                      />
                                    </a>
                                  </div>
                                </div>
                              )
                            ) : (
                              <div className="flex flex-col gap-0.5 text-left">
                                {item.items?.map((sub, index) => {
                                  const IconComponent = sub.icon;
                                  return (
                                    <motion.a
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setOpenDropdown(null)}
                                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                                      transition={{
                                        delay: 0.05 + index * 0.04,
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                      }}
                                      className={`group relative flex cursor-pointer items-center justify-between rounded-[12px] px-4 py-3 text-[0.92rem] font-medium tracking-[0.01em] transition-colors duration-200 ${heroNav ? "hover:bg-[rgba(139,197,64,0.12)]" : "hover:bg-[rgba(139,197,64,0.08)]"}`}
                                      role="menuitem"
                                    >
                                      <span className="flex items-center gap-3">
                                        {IconComponent && (
                                          <IconComponent className="h-4 w-4 text-[#8BC540]" />
                                        )}
                                        <span
                                          className={`text-[13px] font-medium transition-colors duration-200 ${
                                            heroNav
                                              ? "text-[rgba(245,242,236,0.88)] group-hover:text-[#CDEB9C]"
                                              : "text-[#2E3128] group-hover:text-[#3E6317]"
                                          }`}
                                        >
                                          {sub.label}
                                        </span>
                                      </span>
                                    </motion.a>
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
              transition={{
                duration: motionDuration.premium,
                ease: motionEase.premium,
                delay: 0.52,
              }}
              className="hidden items-center gap-5 lg:flex xl:gap-6"
            >
              <span className="nav-divider hidden xl:block" aria-hidden="true" />
              <a href="/consultation" className="nav-cta">
                <span className="relative z-10">Plan showroombezoek</span>
                <span className="nav-cta__arrow relative z-10" aria-hidden="true">
                  <IconsaxArrowRight2 size={14} variant="Linear" />
                </span>
              </a>
            </motion.div>

            <button
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
              className={`nav-mobile-toggle flex h-12 w-12 items-center justify-center rounded-[14px] border xl:hidden ${
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
            className="xl:hidden"
          >
            <div className="fixed inset-0 z-[90] bg-[rgba(247,245,242,0.96)] backdrop-blur-[6px]">
              <nav className="nav-mobile-panel flex h-[100dvh] flex-col overflow-y-auto overscroll-contain">
                <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/[0.05] bg-[rgba(247,245,242,0.94)] px-5 pb-4 pt-[calc(env(safe-area-inset-top)+1rem)] backdrop-blur-xl">
                  <a href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <img
                      src={logoKeuken}
                      alt="KeukenCentrum.nl"
                      className="h-9 w-auto"
                      width={280}
                      height={48}
                    />
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

                <div className="flex flex-1 flex-col items-center justify-start px-5 pb-[calc(env(safe-area-inset-bottom)+6rem)] pt-7 text-center sm:px-8">
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
                                      transition: {
                                        duration: motionDuration.premium,
                                        ease: motionEase.premium,
                                      },
                                    },
                                  }}
                                >
                                  <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] border-b border-[#E5DCD3]/30 hover:text-[#8BC540]"
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
                                    transition: {
                                      duration: motionDuration.premium,
                                      ease: motionEase.premium,
                                    },
                                  },
                                }}
                              >
                                <a
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] border-b border-[#E5DCD3]/30 hover:text-[#8BC540]"
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
                                  transition: {
                                    duration: motionDuration.premium,
                                    ease: motionEase.premium,
                                  },
                                },
                              }}
                            >
                              <AccordionItem
                                value={item.label.toLowerCase()}
                                className="border-b border-[#E5DCD3]/30"
                              >
                                <AccordionTrigger className="py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] hover:no-underline hover:text-[#8BC540] [&[data-state=open]]:text-[#8BC540] [&[data-state=open]>svg]:rotate-180">
                                  {item.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1">
                                  <div className="flex flex-col gap-2 pl-3">
                                    {item.items?.map((sub) => {
                                      const SubIcon = sub.icon;
                                      return (
                                        <a
                                          key={sub.label}
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className="flex items-start gap-3 rounded-lg py-2.5 px-3 transition-colors duration-200 active:bg-white/70"
                                        >
                                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#E5DCD3]/30 bg-white">
                                            {SubIcon && (
                                              <SubIcon className="h-4.5 w-4.5 text-[#C8A96B]" />
                                            )}
                                          </span>
                                          <div className="flex flex-col text-left">
                                            <span className="text-[13px] font-semibold text-[#111111]">
                                              {sub.label}
                                            </span>
                                            <span className="text-[11px] text-[#5A5A5A]/80 leading-normal font-light">
                                              {sub.description}
                                            </span>
                                          </div>
                                        </a>
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
                          transition: {
                            duration: motionDuration.premium,
                            ease: motionEase.premium,
                            delay: 0.06,
                          },
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
