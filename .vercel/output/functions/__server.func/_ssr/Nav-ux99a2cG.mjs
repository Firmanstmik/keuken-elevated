import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation } from "../_libs/tanstack__react-router.mjs";
import { l as logoKeuken, b as ChevronDown } from "./master-config-data-Dym2j9sf.mjs";
import { k as kc } from "./router-eUMbNvNS.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as useReducedMotion, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { g as Sparkles, L as Layers, b as Award, G as Gem, H as Heart, C as Compass, h as Wrench, S as Shield, e as Mountain, D as Droplet, d as Grid3x3, c as Flame, W as Wind, f as Snowflake, M as MapPin, F as FileText, a as ArrowUpRight, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as ArrowRight2, C as Call, H as House, S as Sms } from "../_libs/zethictech__iconsax-react.mjs";
const motionDuration = {
  normal: 0.25,
  premium: 0.4,
  luxury: 0.6,
  count: 1.2
};
const motionEase = {
  precise: [0.35, 0, 0.15, 1],
  premium: [0.22, 1, 0.36, 1],
  soft: [0.16, 1, 0.3, 1]
};
const motionViewport = {
  once: true,
  amount: 0.16
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.premium,
      ease: motionEase.premium
    }
  }
};
const staggerHeader = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02
    }
  }
};
const staggerList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};
const showroomImage = "/assets/showroom-BIgnA1P8.jpg";
const marmerImg = "/assets/marmer-img-BdUOzDgc.webp";
const boraImg = "/assets/Bora-img-sX3CWUxs.webp";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const desktopMenu = [
  { label: "Home", href: "/" },
  {
    label: "Keukens",
    items: [
      {
        label: "AI Küchen",
        href: "/#brands",
        description: "Innovatieve en moderne keukens, ontworpen met AI en Duitse precisie.",
        icon: Sparkles
      },
      {
        label: "Leicht",
        href: "/#brands",
        description: "Duitse topkwaliteit en architectonisch design voor uw droomkeuken.",
        icon: Layers
      },
      {
        label: "Nobilia",
        href: "/#brands",
        description: "De absolute marktleider in Europa. Veelzijdig, betrouwbaar en modern.",
        icon: Award
      },
      {
        label: "Zampieri",
        href: "/#brands",
        description: "Exclusief Italiaans design. Minimalistisch, verfijnd en elegant.",
        icon: Gem
      },
      {
        label: "Cucinesse",
        href: "/#brands",
        description: "Warme Italiaanse sfeer gecombineerd met functionaliteit en passie.",
        icon: Heart
      },
      {
        label: "Keukenstijlen",
        href: "/#collections",
        description: "Ontdek welke stijl bij u past: van modern tot landelijk of industrieel.",
        icon: Compass
      },
      {
        label: "Keuken op maat",
        href: "/#showroom",
        description: "Volledig gepersonaliseerd ontwerp, afgestemd op uw ruimte en wensen.",
        icon: Wrench
      }
    ],
    featured: {
      title: "Duitse & Italiaanse Kwaliteit",
      description: "Ervaar vakmanschap in onze showroom te Utrecht. Al meer dan 45 jaar uw keukenspecialist.",
      buttonText: "Plan showroombezoek",
      buttonHref: "/consultation",
      imageSrc: showroomImage
    }
  },
  {
    label: "Keukenbladen",
    items: [
      {
        label: "Silestone",
        href: "/#collections",
        description: "Kwartscomposiet bladen met extreme hardheid en prachtige kleuren.",
        icon: Gem
      },
      {
        label: "Dekton",
        href: "/#collections",
        description: "Ultra-compact oppervlak, bestand tegen hitte, krassen en vlekken.",
        icon: Shield
      },
      {
        label: "Neolith",
        href: "/#collections",
        description: "Gesinterde steenbladen voor een luxueuze, natuurlijke uitstraling.",
        icon: Mountain
      },
      {
        label: "Sensa",
        href: "/#collections",
        description: "Exclusief natuursteen met een unieke, vlekbestendige bescherming.",
        icon: Sparkles
      }
    ],
    featured: {
      title: "Natuursteen & Composiet",
      description: "Kies uit honderden kleuren en afwerkingen. Van hittebestendig Dekton tot luxe marmerlook.",
      buttonText: "Ontdek Materialen",
      buttonHref: "/#collections",
      imageSrc: marmerImg
    }
  },
  {
    label: "Apparatuur",
    items: [
      {
        label: "Quooker",
        href: "/#showroom",
        description: "De kraan die alles kan: 100°C kokend, gekoeld en bruisend water.",
        icon: Droplet
      },
      {
        label: "Kookplaten",
        href: "/#showroom",
        description: "Inductiekookplaten van topmerken voor optimaal kookcomfort.",
        icon: Grid3x3
      },
      {
        label: "Fornuizen",
        href: "/#showroom",
        description: "Professionele fornuizen voor de ultieme culinaire ervaring.",
        icon: Flame
      },
      {
        label: "Afzuigkappen",
        href: "/#showroom",
        description: "Stijlvolle afzuigkappen die design en prestaties perfect combineren.",
        icon: Wind
      },
      {
        label: "Werkblad afzuiging",
        href: "/#showroom",
        description: "Geavanceerde kookveldafzuiging die geuren direct bij de bron weghaalt.",
        icon: Wind
      },
      {
        label: "Koelkasten & Vriezers",
        href: "/#showroom",
        description: "Geavanceerde koelapparatuur met slimme vershoudzones.",
        icon: Snowflake
      },
      {
        label: "Vaatwassers",
        href: "/#showroom",
        description: "Stille, inbouwvaatwassers voor een perfect schone vaat.",
        icon: Droplet
      },
      {
        label: "Wave afzuigkappen",
        href: "/#showroom",
        description: "Exclusieve design afzuigkappen als statement in uw keuken.",
        icon: Wind
      }
    ],
    featured: {
      title: "Premium Inbouwapparatuur",
      description: "Ontdek de nieuwste systemen van Miele, Bora en Quooker geïntegreerd in onze showroom.",
      buttonText: "Bekijk Apparatuur",
      buttonHref: "/#showroom",
      imageSrc: boraImg
    }
  },
  { label: "Aanbiedingen", href: "/#collections" },
  {
    label: "Contact",
    items: [
      {
        label: "Showroom keukens",
        href: "/#showroom",
        description: "Kom langs in onze showroom in Utrecht en laat u inspireren.",
        icon: MapPin
      },
      {
        label: "Offerte op maat",
        href: "/consultation",
        description: "Vraag online een vrijblijvende offerte aan voor uw droomkeuken.",
        icon: FileText
      }
    ]
  }
];
function isActiveLink(pathname, hash, href) {
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
function makeNavIcon(Icon) {
  return function WrappedNavIcon(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, variant: "Linear", ...props });
  };
}
const NavCall = makeNavIcon(Call);
const NavHouse = makeNavIcon(House);
const NavSms = makeNavIcon(Sms);
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [hidden, setHidden] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [openDropdown, setOpenDropdown] = reactExports.useState(null);
  const lastScrollY = reactExports.useRef(0);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.href]);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const forceSolidNav = location.pathname === "/moodboard" || location.pathname === "/consultation";
  const elevated = scrolled || open || forceSolidNav;
  const heroNav = location.pathname === "/" && !elevated;
  const currentHash = location.href.includes("#") ? `#${location.href.split("#")[1]}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -16, opacity: 0 },
      animate: { y: hidden && !open ? -132 : 0, opacity: 1 },
      transition: { duration: motionDuration.luxury, ease: motionEase.premium },
      className: `fixed inset-x-0 top-0 z-50 ${heroNav ? "nav-hero" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: reduceMotion ? false : { opacity: 0, y: -18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.16 },
            className: `nav-topbar-wrap ${elevated ? "nav-topbar-wrap-elevated" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `nav-band nav-topbar-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site-container nav-topbar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden min-h-11 items-center justify-end gap-4 text-[0.72rem] tracking-[0.18em] text-[rgba(245,242,236,0.78)] md:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-4 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-topbar-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavHouse, { className: "nav-topbar-icon text-[#C8A96B]/70" }),
                "Zonnebaan 8, 3542 EC Utrecht"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-topbar-sep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: kc.contact.phoneHref, className: "nav-topbar-item hover:text-[#F5F2EC]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavCall, { className: "nav-topbar-icon text-[#C8A96B]/70" }),
                kc.contact.phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-topbar-sep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${kc.contact.email}`, className: "nav-topbar-item hover:text-[#F5F2EC]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(NavSms, { className: "nav-topbar-icon text-[#C8A96B]/70" }),
                kc.contact.email
              ] })
            ] }) }) }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `nav-header-wash ${elevated || forceSolidNav ? "opacity-0" : "opacity-100"} transition-opacity duration-500` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `nav-band ${forceSolidNav ? "nav-band-forced" : elevated ? "nav-band-elevated" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site-container py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `nav-frame nav-shell flex items-center justify-between gap-6 ${elevated ? "nav-shell-elevated" : "nav-shell-top"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.a,
            {
              href: "/",
              initial: reduceMotion ? false : { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.06 },
              className: "flex shrink-0 items-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoKeuken, alt: "Keuken Centrum logo", className: "h-8 w-auto md:h-9", width: 343, height: 56 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.nav,
            {
              initial: reduceMotion ? false : { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.34 },
              className: "hidden flex-1 items-center justify-center xl:flex",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: reduceMotion ? false : "hidden",
                  animate: "visible",
                  variants: {
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.38
                      }
                    }
                  },
                  className: "flex items-center gap-9",
                  children: desktopMenu.map((item) => {
                    const hasDropdown = Boolean(item.items?.length);
                    const isOpen = openDropdown === item.label;
                    const isHome = item.label === "Home";
                    const isMegamenu = item.label === "Keukens" || item.label === "Keukenbladen" || item.label === "Apparatuur";
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "relative",
                        onMouseEnter: () => {
                          if (hasDropdown) setOpenDropdown(item.label);
                        },
                        onMouseLeave: () => {
                          if (hasDropdown) setOpenDropdown((value) => value === item.label ? null : value);
                        },
                        variants: {
                          hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: motionDuration.normal, ease: motionEase.premium }
                          }
                        },
                        children: [
                          hasDropdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "nav-link flex cursor-default items-center gap-2",
                              "aria-haspopup": "menu",
                              "aria-expanded": isOpen,
                              "aria-disabled": true,
                              onClick: (event) => {
                                event.preventDefault();
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronDown,
                                  {
                                    className: `h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
                                  }
                                )
                              ]
                            }
                          ) : isHome ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.a,
                            {
                              href: item.href,
                              className: "nav-link",
                              "data-active": item.href ? isActiveLink(location.pathname, currentHash, item.href) : false,
                              children: item.label
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-link cursor-default opacity-80", "aria-disabled": true, children: item.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: hasDropdown && isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15, scale: 0.98, filter: "blur(10px)" },
                              animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                              exit: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" },
                              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                              className: `absolute z-50 mt-4 overflow-hidden rounded-[24px] border border-[#E5DCD3]/50 bg-[#FAF8F4]/95 shadow-[0_32px_64px_-12px_rgba(23,25,28,0.12),0_0_0_1px_rgba(255,255,255,0.7)_inset] backdrop-blur-2xl ${isMegamenu ? "left-1/2 w-[860px] -translate-x-1/2" : "left-1/2 w-[280px] -translate-x-1/2 p-2.5"}`,
                              role: "menu",
                              "aria-label": item.label,
                              children: isMegamenu ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.22fr_0.78fr]", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-left", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium tracking-[0.15em] text-[#C8A96B] uppercase", children: item.label }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 font-display text-xl leading-normal text-[#111111] tracking-tight", children: [
                                      item.label === "Keukens" && "Duitse en Italiaanse keukenmerken.",
                                      item.label === "Keukenbladen" && "Stijlvolle en duurzame keukenbladen.",
                                      item.label === "Apparatuur" && "Hoogwaardige inbouwapparatuur."
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 h-px bg-[#E5DCD3]/30" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-1.5 ${item.label === "Keukens" || item.label === "Apparatuur" ? "grid-cols-2" : "grid-cols-1"}`, children: item.items?.map((sub, index) => {
                                    const IconComponent = sub.icon;
                                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      motion.div,
                                      {
                                        initial: reduceMotion ? false : { opacity: 0, x: -8 },
                                        animate: reduceMotion ? void 0 : { opacity: 1, x: 0 },
                                        transition: { delay: 0.04 + index * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                                        className: "group flex items-start gap-3 rounded-xl border border-transparent bg-transparent p-2.5 cursor-default",
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#E5DCD3]/30 bg-white shadow-[0_4px_12px_-4px_rgba(23,25,28,0.06)] group-hover:bg-[#FAF8F4] transition-colors duration-300", children: IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-4 w-4 text-[#C8A96B] group-hover:text-[#3D9A42] transition-colors duration-300" }) }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold tracking-[0.02em] text-[#111111] transition-colors duration-300 group-hover:text-[#3D9A42]", children: sub.label }) }),
                                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[#5A5A5A]/80 font-light", children: sub.description })
                                          ] })
                                        ]
                                      },
                                      sub.label
                                    );
                                  }) })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l border-[#E5DCD3]/40 bg-[#FAF8F4]/30 p-6 flex flex-col justify-between", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left text-[10px] font-medium tracking-[0.15em] text-[#C8A96B] uppercase", children: "Uitgelicht" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 overflow-hidden rounded-xl border border-[#E5DCD3]/40 bg-white shadow-[0_12px_32px_-12px_rgba(23,25,28,0.12)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden group/featured", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        "img",
                                        {
                                          src: item.featured?.imageSrc,
                                          alt: "",
                                          "aria-hidden": true,
                                          className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105",
                                          loading: "lazy"
                                        }
                                      ),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 text-left", children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-semibold text-white tracking-[0.02em]", children: item.featured?.title }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] leading-relaxed text-white/80 font-light", children: item.featured?.description })
                                      ] })
                                    ] }) })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3D9A42]/50 px-4 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/80 uppercase cursor-default shadow-sm",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.featured?.buttonText }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 13 })
                                      ]
                                    }
                                  ) })
                                ] })
                              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-0.5 text-left", children: item.items?.map((sub, index) => {
                                const IconComponent = sub.icon;
                                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    initial: reduceMotion ? false : { opacity: 0, x: -8 },
                                    animate: reduceMotion ? void 0 : { opacity: 1, x: 0 },
                                    transition: { delay: 0.05 + index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                    className: "group relative flex cursor-default items-center justify-between rounded-[14px] px-4 py-3 text-[0.92rem] font-medium tracking-[0.01em] text-[#555555]",
                                    role: "menuitem",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                                      IconComponent && /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-4 w-4 text-[#C8A96B]" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-[#111111]", children: sub.label })
                                    ] })
                                  },
                                  sub.label
                                );
                              }) })
                            }
                          ) : null })
                        ]
                      },
                      item.label
                    );
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: reduceMotion ? false : { opacity: 0, y: -8 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.52 },
              className: "hidden items-center gap-5 lg:flex",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-cta cursor-default opacity-85", "aria-disabled": true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Plan showroombezoek" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight2, { size: 15, variant: "Linear", className: "relative z-10" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((value) => !value),
              "aria-label": open ? "Sluit menu" : "Open menu",
              "aria-expanded": open,
              className: `nav-mobile-toggle flex h-12 w-12 items-center justify-center rounded-[2px] border lg:hidden ${elevated ? "border-[rgb(7,17,27,0.12)] bg-[rgba(255,255,255,0.82)] text-[var(--foreground)]" : "border-[rgb(7,17,27,0.12)] bg-[rgba(246,244,238,0.78)] text-[var(--foreground)] backdrop-blur-xl"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-mobile-toggle-lines", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
              ] })
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 },
            transition: { duration: motionDuration.premium, ease: motionEase.premium },
            className: "lg:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[90] bg-[rgba(247,245,242,0.96)] backdrop-blur-[6px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "nav-mobile-panel flex min-h-[100dvh] flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoKeuken, alt: "Keuken Centrum logo", className: "h-7 w-auto", width: 343, height: 56 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen(false),
                    "aria-label": "Sluit menu",
                    className: "nav-mobile-close flex h-11 w-11 items-center justify-center text-[var(--foreground)]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "nav-mobile-close-lines", "aria-hidden": "true", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-col items-center justify-center px-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: reduceMotion ? false : "hidden",
                  animate: "visible",
                  variants: {
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.05
                      }
                    }
                  },
                  className: "w-full max-w-[20rem]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        variants: {
                          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: motionDuration.normal, ease: motionEase.premium }
                          }
                        },
                        className: "nav-mobile-meta text-center mb-6",
                        children: "Navigatie"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full text-left", children: desktopMenu.map((item, index) => {
                      const hasDropdown = Boolean(item.items?.length);
                      if (!hasDropdown) {
                        if (item.label === "Home") {
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              variants: {
                                hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                                visible: {
                                  opacity: 1,
                                  y: 0,
                                  transition: { duration: motionDuration.premium, ease: motionEase.premium }
                                }
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "a",
                                {
                                  href: item.href,
                                  onClick: () => setOpen(false),
                                  className: "flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] border-b border-[#E5DCD3]/30 hover:text-[#3D9A42]",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-[#C8A96B]" })
                                  ]
                                }
                              )
                            },
                            item.label
                          );
                        }
                        return /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            variants: {
                              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: motionDuration.premium, ease: motionEase.premium }
                              }
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "flex items-center justify-between py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#5A5A5A]/60 border-b border-[#E5DCD3]/30 cursor-default",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
                              }
                            )
                          },
                          item.label
                        );
                      }
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          variants: {
                            hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: motionDuration.premium, ease: motionEase.premium }
                            }
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            AccordionItem,
                            {
                              value: item.label.toLowerCase(),
                              className: "border-b border-[#E5DCD3]/30",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-3.5 text-[15px] font-medium tracking-[0.06em] text-[#111111] hover:no-underline hover:text-[#3D9A42] [&[data-state=open]]:text-[#3D9A42] [&[data-state=open]>svg]:rotate-180", children: item.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-4 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 pl-3", children: item.items?.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: "flex items-start gap-3 rounded-lg py-2.5 px-3 transition-colors duration-200",
                                      children: [
                                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#E5DCD3]/30 bg-white", children: SubIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(SubIcon, { className: "h-4.5 w-4.5 text-[#C8A96B]" }) }),
                                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col text-left", children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-[#111111]", children: sub.label }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#5A5A5A]/80 leading-normal font-light", children: sub.description })
                                        ] })
                                      ]
                                    },
                                    sub.label
                                  );
                                }) }) })
                              ]
                            }
                          )
                        },
                        item.label
                      );
                    }) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        variants: {
                          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: motionDuration.premium, ease: motionEase.premium, delay: 0.06 }
                          }
                        },
                        className: "mt-10",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-mobile-cta cursor-default opacity-75 text-center", "aria-disabled": true, children: "Start uw ontwerp" })
                      }
                    )
                  ]
                }
              ) })
            ] }) })
          }
        ) : null })
      ]
    }
  );
}
export {
  Nav as N,
  motionDuration as a,
  boraImg as b,
  cn as c,
  motionEase as d,
  motionViewport as e,
  fadeUp as f,
  staggerHeader as g,
  staggerList as h,
  marmerImg as m,
  showroomImage as s
};
