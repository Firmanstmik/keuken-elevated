import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useLocation } from "../_libs/tanstack__react-router.mjs";
import { l as logoKeuken, b as ChevronDown, a as ArrowRight } from "./master-config-data-Dym2j9sf.mjs";
import { k as kc } from "./router-DMLCtDoQ.mjs";
import { b as useReducedMotion, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { C as Call, H as House, S as Sms } from "../_libs/zethictech__iconsax-react.mjs";
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
const desktopMenu = [
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
      { label: "Keuken op maat", href: "/#showroom" }
    ]
  },
  {
    label: "Keukenbladen",
    items: [
      { label: "Silestone", href: "/#collections" },
      { label: "Dekton", href: "/#collections" },
      { label: "Neolith", href: "/#collections" },
      { label: "Sensa", href: "/#collections" }
    ]
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
      { label: "Wave afzuigkappen", href: "/#showroom" }
    ]
  },
  { label: "Aanbiedingen", href: "/#collections" },
  {
    label: "Contact",
    items: [
      { label: "Showroom keukens", href: "/#showroom" },
      { label: "Offerte op maat", href: "/consultation" }
    ]
  }
];
const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Keukens", href: "/#collections" },
  { label: "Keukenbladen", href: "/#collections" },
  { label: "Apparatuur", href: "/#showroom" },
  { label: "Aanbiedingen", href: "/#collections" },
  { label: "Contact", href: "/#contact" }
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
                              className: "absolute left-1/2 top-full z-50 mt-4 w-[280px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-[#E5DCD3]/50 bg-[rgba(250,249,246,0.92)] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.7)_inset] backdrop-blur-2xl",
                              role: "menu",
                              "aria-label": item.label,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 flex flex-col gap-0.5", children: item.items?.map((sub, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                motion.span,
                                {
                                  initial: reduceMotion ? false : { opacity: 0, x: -8 },
                                  animate: reduceMotion ? void 0 : { opacity: 1, x: 0 },
                                  transition: { delay: 0.05 + index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                                  className: "group relative flex cursor-pointer items-center justify-between rounded-[14px] px-4 py-3 text-[0.92rem] font-medium tracking-[0.01em] text-[#555555] transition-all duration-300 hover:bg-white hover:text-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
                                  role: "menuitem",
                                  "aria-disabled": true,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 transition-transform duration-300 group-hover:translate-x-1", children: sub.label }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F2EC] opacity-0 transition-all duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-[#C8A96B] -translate-x-1 transition-transform duration-300 group-hover:translate-x-0" }) })
                                  ]
                                },
                                sub.label
                              )) })
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-cta cursor-default opacity-85", "aria-disabled": true, children: "Plan showroombezoek" })
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
                        staggerChildren: 0.08,
                        delayChildren: 0.08
                      }
                    }
                  },
                  className: "w-full max-w-[18rem]",
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
                        className: "nav-mobile-meta text-center",
                        children: "Navigatie"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-col items-center gap-6", children: mobileLinks.map((l) => l.href === "/" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.a,
                      {
                        href: l.href,
                        onClick: () => {
                          setOpen(false);
                        },
                        className: "nav-mobile-link",
                        "data-active": isActiveLink(location.pathname, currentHash, l.href),
                        variants: {
                          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: motionDuration.premium, ease: motionEase.premium }
                          }
                        },
                        children: l.label
                      },
                      l.href
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "nav-mobile-link cursor-default opacity-75",
                        "aria-disabled": true,
                        variants: {
                          hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: motionDuration.premium, ease: motionEase.premium }
                          }
                        },
                        children: l.label
                      },
                      l.href
                    )) }),
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
                        className: "mt-14",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-mobile-cta cursor-default opacity-75", "aria-disabled": true, children: "Start uw ontwerp" })
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
  motionEase as a,
  motionViewport as b,
  staggerList as c,
  fadeUp as f,
  motionDuration as m,
  staggerHeader as s
};
