import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, e as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-C2cU3AaK.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const STORAGE_KEY = "kc-master-config";
const defaultConfig = {
  brand: null,
  brandName: null,
  style: null,
  styleName: null,
  selections: {},
  budget: null
};
const ConfiguratorContext = reactExports.createContext(null);
function ConfiguratorProvider({ children }) {
  const [config, setConfig] = reactExports.useState(defaultConfig);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      setConfig({
        ...defaultConfig,
        ...parsed,
        selections: parsed.selections ?? {}
      });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);
  const setBrand = reactExports.useCallback((id, name) => {
    setConfig((prev) => ({
      ...prev,
      brand: id,
      brandName: name,
      style: prev.style,
      styleName: prev.styleName
    }));
  }, []);
  const setStyle = reactExports.useCallback((id, name) => {
    setConfig((prev) => ({
      ...prev,
      style: id,
      styleName: name
    }));
  }, []);
  const setSelection = reactExports.useCallback(
    (categoryId, optionId, name, color) => {
      setConfig((prev) => ({
        ...prev,
        selections: {
          ...prev.selections,
          [categoryId]: { id: optionId, name, color }
        }
      }));
    },
    []
  );
  const setBudget = reactExports.useCallback((budget) => {
    setConfig((prev) => ({
      ...prev,
      budget
    }));
  }, []);
  const resetConfig = reactExports.useCallback(() => {
    setConfig(defaultConfig);
  }, []);
  const value = reactExports.useMemo(
    () => ({
      config,
      setBrand,
      setStyle,
      setSelection,
      setBudget,
      resetConfig
    }),
    [config, resetConfig, setBrand, setBudget, setSelection, setStyle]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfiguratorContext.Provider, { value, children });
}
function useConfigurator() {
  const value = reactExports.useContext(ConfiguratorContext);
  if (!value) {
    throw new Error("useConfigurator must be used within ConfiguratorProvider");
  }
  return value;
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Keuken-Centrum Utrecht" },
      { name: "description", content: "Premium kitchen showroom in Utrecht sinds 1978." },
      { name: "author", content: "Keuken-Centrum Utrecht" },
      { property: "og:title", content: "Keuken-Centrum Utrecht" },
      { property: "og:description", content: "Premium German and Italian kitchen showroom in Utrecht sinds 1978." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@keukencentrum" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "nl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ConfiguratorProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$5 = () => import("./style-L7S4MVxD.mjs");
const Route$5 = createFileRoute("/style")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./moodboard-BtSyJMh1.mjs");
const Route$4 = createFileRoute("/moodboard")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./consultation-DCIfI_oz.mjs");
const Route$3 = createFileRoute("/consultation")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./configure-u7cS6--B.mjs");
const Route$2 = createFileRoute("/configure")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./brands-D81kA8Kx.mjs");
const Route$1 = createFileRoute("/brands")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const wp = "https://keuken-centrum.nl/wp-content/uploads";
const kc = {
  brandName: "Keuken-Centrum Utrecht",
  founded: 1978,
  cbwLogo: `${wp}/cbw.webp`,
  contact: {
    address: "Zonnebaan 8",
    postal: "3542 EC Utrecht",
    phone: "030 241 5122",
    phoneHref: "tel:+31302415122",
    email: "info@keuken-centrum.nl",
    hours: [
      { d: "Maandag tot Vrijdag", h: "09:00 tot 18:00" },
      { d: "Zaterdag", h: "09:00 tot 17:00" },
      { d: "Zondag", h: "Gesloten" }
    ]
  },
  hero: {
    main: `${wp}/IMG_0654-LEICHT-JAPANDI-scaled.webp`
  },
  showroomImg: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.26-1024x768.webp`,
  // Real kitchen brands
  kitchenBrands: [
    { id: "leicht", name: "Leicht", country: "Duitsland", logo: `${wp}/1200px-Leicht_K%C3%BCchen_logo.svg-1024x325.webp`, story: "Bauhaus-erfgoed sinds 1928. Architectonische precisie uit Waldstetten." },
    { id: "nobilia", name: "Nobilia", country: "Duitsland", logo: `${wp}/Logo-524-112-1.webp`, story: "Marktleider in Europa. Volledig op maat met Duitse betrouwbaarheid." },
    { id: "aikuchen", name: "AI Küchen", country: "Duitsland", logo: `${wp}/Ai-kuchen-keukens-logo-blauw.webp`, story: "Häcker brengt moderne Duitse keukens met onmiskenbaar karakter." },
    { id: "zampieri", name: "Zampieri", country: "Italië", logo: `${wp}/download-1.webp`, story: "Italiaans design in zijn puurste vorm. Materialen die spreken." },
    { id: "cucinesse", name: "Cucinesse", country: "Italië", logo: `${wp}/cucinesse-logo.webp`, story: "Italiaanse maatwerkkeukens met sculpturale rust." }
  ],
  // Real kitchen styles
  styles: [
    {
      id: "design",
      n: "I",
      t: "Design Keukens",
      d: "Strakke lijnen, hoogwaardige materialen en oog voor detail. Leicht · Zampieri · Cucinesse · AI Küchen.",
      img: `${wp}/IMG_0654-LEICHT-JAPANDI-scaled.webp`
    },
    {
      id: "modern",
      n: "II",
      t: "Moderne Keukens",
      d: "Minimalistisch wit tot warme houttinten, volledig op maat met de nieuwste apparatuur.",
      img: `${wp}/IMG_0642-1024x768.webp`
    },
    {
      id: "landelijk",
      n: "III",
      t: "Landelijk Klassiek",
      d: "Tijdloze intimiteit. Natuurlijke materialen voor wie wonen serieus neemt.",
      img: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.27.webp`
    },
    {
      id: "industrieel",
      n: "IV",
      t: "Industriële Look",
      d: "Robuust karakter. Staal, beton en hout in architectonische harmonie.",
      img: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.25.webp`
    }
  ],
  // Configurator option sets
  config: {
    budgets: [
      { id: "10-20", label: "€ 10.000 tot € 20.000" },
      { id: "20-35", label: "€ 20.000 tot € 35.000" },
      { id: "35-55", label: "€ 35.000 tot € 55.000" },
      { id: "55+", label: "€ 55.000+" }
    ]
  }
};
const $$splitComponentImporter = () => import("./index-DfMNJXgN.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Keuken-Centrum Utrecht · De Premium Keukenbestemming van Utrecht"
    }, {
      name: "description",
      content: "Premium German and Italian kitchen showroom in Utrecht sinds 1978. Persoonlijk showroomadvies, geselecteerde topmerken en een verfijnde keukenervaring."
    }, {
      property: "og:title",
      content: "Keuken-Centrum Utrecht · Premium Keukenshowroom"
    }, {
      property: "og:description",
      content: "De premium keukenbestemming van Utrecht voor German precision, Italian elegance en persoonlijk showroomadvies."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: kc.hero.main
    }, {
      property: "og:url",
      content: "/"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: kc.hero.main
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: kc.brandName,
        image: kc.hero.main,
        telephone: kc.contact.phone,
        email: kc.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: kc.contact.address,
          postalCode: "3542 EC",
          addressLocality: "Utrecht",
          addressCountry: "NL"
        },
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
        url: "https://keuken-centrum.nl",
        priceRange: "€€€",
        brand: kc.kitchenBrands.map((b) => ({
          "@type": "Brand",
          name: b.name
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StyleRoute = Route$5.update({
  id: "/style",
  path: "/style",
  getParentRoute: () => Route$6
});
const MoodboardRoute = Route$4.update({
  id: "/moodboard",
  path: "/moodboard",
  getParentRoute: () => Route$6
});
const ConsultationRoute = Route$3.update({
  id: "/consultation",
  path: "/consultation",
  getParentRoute: () => Route$6
});
const ConfigureRoute = Route$2.update({
  id: "/configure",
  path: "/configure",
  getParentRoute: () => Route$6
});
const BrandsRoute = Route$1.update({
  id: "/brands",
  path: "/brands",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  BrandsRoute,
  ConfigureRoute,
  ConsultationRoute,
  MoodboardRoute,
  StyleRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  kc as k,
  router as r,
  useConfigurator as u
};
