import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as masterBrands, i as masterStyles, e as masterCategories, h as masterShowrooms, f as masterConsultationBudgets, a as ArrowRight } from "./master-config-data-BZ9UlS_D.mjs";
import { I as Input, T as Textarea } from "./textarea-D7-ZYNFV.mjs";
import { F as FlowNav } from "./FlowNav-D726xZkj.mjs";
import { u as useConfigurator } from "./router-ClnlMJnD.mjs";
import "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/mui__icons-material.mjs";
import "../_libs/mui__material.mjs";
import "../_libs/mui__utils.mjs";
import "../_libs/react-is.mjs";
import "../_libs/clsx.mjs";
import "../_libs/mui__system.mjs";
import "../_libs/mui__styled-engine.mjs";
import "../_libs/emotion__styled.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/emotion__react.mjs";
import "../_libs/emotion__cache.mjs";
import "../_libs/emotion__sheet.mjs";
import "../_libs/stylis.mjs";
import "../_libs/emotion__weak-memoize.mjs";
import "../_libs/emotion__memoize.mjs";
import "../_libs/hoist-non-react-statics.mjs";
import "../_libs/emotion__utils.mjs";
import "../_libs/emotion__serialize.mjs";
import "../_libs/emotion__hash.mjs";
import "../_libs/emotion__unitless.mjs";
import "../_libs/@emotion/use-insertion-effect-with-fallbacks+[...].mjs";
import "../_libs/emotion__is-prop-valid.mjs";
import "./Nav-CK8htA75.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zethictech__iconsax-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SelectionPreview({
  overline,
  title,
  description,
  image,
  imageAlt,
  accentColor = "#B08D57",
  details,
  selections,
  ctaLabel,
  onContinue,
  footerNote
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.section,
    {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      className: "mt-8 overflow-hidden rounded-[22px] border border-[rgba(17,17,17,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,245,242,0.94))] shadow-[0_24px_70px_-46px_rgba(17,17,17,0.18)] md:mt-10",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[280px] overflow-hidden md:min-h-[340px]", children: [
          image ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 bg-cover bg-center",
                style: { backgroundImage: `url(${image})` },
                role: "img",
                "aria-label": imageAlt ?? title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.06)_0%,rgba(10,10,10,0.18)_32%,rgba(10,10,10,0.48)_100%)]" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: `linear-gradient(135deg, ${accentColor}22 0%, rgba(247,245,242,0.96) 55%, rgba(255,255,255,0.98) 100%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-5 top-5 h-14 w-14 rounded-full blur-2xl",
              style: { backgroundColor: accentColor, opacity: 0.45 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.12)_22%,rgba(10,10,10,0.6)_100%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-5 md:p-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[28rem]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 block text-[0.68rem] uppercase tracking-[0.28em] text-[#D1AF78]", children: overline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "max-w-[13rem] text-[clamp(1.18rem,3.3vw,2rem)] leading-[1.04] tracking-[-0.026em] text-[#F7F5F2] sm:max-w-[14rem] md:max-w-[15rem] lg:max-w-[13rem]",
                style: { fontFamily: '"Playfair Display", serif', fontWeight: 400 },
                children: title
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between p-5 md:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.24em] text-[#B08D57]", children: "Ontwerpvoorstel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-[1.75rem] leading-[1.15] text-[#111111]",
                style: { fontFamily: '"Playfair Display", serif', fontWeight: 400 },
                children: title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[34rem] text-[0.95rem] leading-[1.75] text-[#666666]", children: description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: details.map((detail) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-[16px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.7)] px-4 py-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 block text-[0.65rem] uppercase tracking-[0.18em] text-[#B08D57]", children: detail.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    detail.color ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "h-3 w-3 shrink-0 rounded-full border border-[rgba(17,17,17,0.12)]",
                        style: { backgroundColor: detail.color }
                      }
                    ) : null,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-[1rem] leading-[1.45] text-[#111111]",
                        style: { fontFamily: '"Playfair Display", serif', fontWeight: 400 },
                        children: detail.value
                      }
                    )
                  ] })
                ]
              },
              `${detail.label}-${detail.value}`
            )) }),
            selections?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-[rgba(17,17,17,0.08)] pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 block text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Samengestelde materialen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2", children: selections.map((selection) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between gap-3 rounded-[14px] border border-[rgba(17,17,17,0.07)] bg-[rgba(255,255,255,0.78)] px-3 py-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 block text-[0.62rem] uppercase tracking-[0.18em] text-[#B08D57]", children: selection.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[0.92rem] leading-[1.45] text-[#111111]", children: selection.value })
                    ] }),
                    selection.color ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "h-4 w-4 shrink-0 rounded-full border border-[rgba(17,17,17,0.12)]",
                        style: { backgroundColor: selection.color }
                      }
                    ) : null
                  ]
                },
                `${selection.label}-${selection.value}`
              )) })
            ] }) : null
          ] }),
          (ctaLabel || footerNote) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-col gap-3 border-t border-[rgba(17,17,17,0.08)] pt-5", children: [
            ctaLabel && onContinue ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: onContinue, className: "btn-primary self-start", children: [
              ctaLabel,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) : null,
            footerNote ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.85rem] leading-[1.7] text-[#777777]", children: footerNote }) : null
          ] })
        ] })
      ] })
    }
  );
}
function ConsultationPage() {
  const {
    config
  } = useConfigurator();
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    showroom: "",
    budget: config.budget ?? "",
    date: "",
    notes: ""
  });
  const selectedBrand = reactExports.useMemo(() => masterBrands.find((brand) => brand.id === config.brand) ?? null, [config.brand]);
  const selectedStyle = reactExports.useMemo(() => masterStyles.find((style) => style.id === config.style) ?? null, [config.style]);
  const configuredCount = reactExports.useMemo(() => masterCategories.filter((category) => config.selections[category.id]).length, [config.selections]);
  const selectedMaterials = reactExports.useMemo(() => masterCategories.map((category) => {
    const selection = config.selections[category.id];
    if (!selection) return null;
    return {
      label: category.label,
      value: selection.name,
      color: selection.color
    };
  }).filter((item) => item !== null), [config.selections]);
  const heroImage = selectedStyle?.image ?? selectedBrand?.image ?? "/consultation-showroom.webp";
  reactExports.useEffect(() => {
    if (config.budget && !form.budget) {
      setForm((current) => ({
        ...current,
        budget: config.budget ?? ""
      }));
    }
  }, [config.budget, form.budget]);
  const isValid = Boolean(form.name && form.email && form.showroom);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#F7F5F2]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlowNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.section, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.55,
      ease: "easeOut"
    }, className: "relative min-h-screen md:h-screen md:overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen md:h-screen md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: -24
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.65,
        ease: "easeOut"
      }, className: `relative min-h-[340px] ${submitted ? "hidden md:block" : "block"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[340px] overflow-hidden md:sticky md:top-0 md:h-screen", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-cover bg-center", style: {
          backgroundImage: `url(${heroImage})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,27,0.28)_0%,rgba(7,17,27,0.14)_18%,rgba(7,17,27,0.44)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(7,17,27,0.52)_0%,rgba(7,17,27,0.22)_42%,rgba(7,17,27,0)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(7,17,27,0)_0%,rgba(7,17,27,0.18)_26%,rgba(7,17,27,0.62)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[36rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 block text-[0.7rem] uppercase tracking-[0.28em] text-[#D1AF78]", children: "Ontwerpconsultatie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "max-w-[26rem] text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#F7F5F2] md:text-[3rem]", style: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400
          }, children: [
            config.brandName ?? "Uw",
            " ",
            config.styleName ? `${config.styleName.toLowerCase()} ` : "",
            "keukenvoorstel"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[31rem] text-[0.98rem] leading-[1.8] text-[rgba(247,245,242,0.76)]", children: "Uw configuratie is klaar voor de laatste bespreking. Plan uw afspraak en ontvang een verfijnd ontwerpvoorstel dat aansluit op uw gekozen materialen en stijl." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid max-w-[34rem] gap-x-8 gap-y-3 sm:grid-cols-2", children: [{
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PersonMark, {}),
            text: "Persoonlijk ontwerpadvies"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarMark, {}),
            text: "Flexibele afspraakplanning"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneMark, {}),
            text: "Showroom of online consultatie"
          }, {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleMark, {}),
            text: `${configuredCount} details samengesteld`
          }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 border-b border-[rgba(247,245,242,0.12)] pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#D1AF78]", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.88rem] text-[rgba(247,245,242,0.82)]", children: item.text })
          ] }, item.text)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: 24
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.65,
        ease: "easeOut",
        delay: 0.15
      }, className: "bg-[#F7F5F2] md:h-screen md:overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[760px] px-4 pb-10 pt-28 md:px-8 md:pb-16 md:pt-32 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -16
      }, transition: {
        duration: 0.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectionPreview, { overline: "Stap 05 laatste controle", title: `${config.brandName ?? "Uw"} keukenconsultatie`, description: "Controleer uw merk, stijl, budget en geselecteerde materialen. Alles hieronder vormt de basis voor uw persoonlijke ontwerpgesprek.", image: selectedStyle?.image ?? selectedBrand?.image, imageAlt: "Laatste projectvoorvertoning", accentColor: selectedBrand?.accentColor ?? "#B08D57", details: [{
          label: "Merk",
          value: config.brandName ?? "Niet gekozen"
        }, {
          label: "Stijl",
          value: config.styleName ?? "Niet gekozen"
        }, {
          label: "Samengestelde onderdelen",
          value: `${configuredCount} gekozen details`
        }, {
          label: "Budget",
          value: form.budget || "Kies uw budget"
        }], selections: selectedMaterials, footerNote: "Met het formulier hieronder verstuurt u uw keukenvoorstel naar ons consultatieteam." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 mt-8 md:mb-8 md:mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]", children: "Stap 05 van 05" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-2 text-[2rem] text-[#111111] md:text-[2.35rem]", style: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400,
            lineHeight: 1.2
          }, children: "Plan een consultatie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[42rem] text-[1rem] leading-[1.7] text-[#666666]", children: "Vul het formulier in en uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om uw project verder uit te werken." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-[rgba(255,255,255,0.72)] p-4 shadow-[0_26px_70px_-52px_rgba(17,17,17,0.18)] backdrop-blur-[14px] md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (event) => {
          event.preventDefault();
          if (!isValid) return;
          setSubmitted(true);
        }, className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Volledige naam", value: form.name, onChange: (event) => setForm((current) => ({
            ...current,
            name: event.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "E-mailadres", value: form.email, onChange: (event) => setForm((current) => ({
            ...current,
            email: event.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "tel", placeholder: "Telefoonnummer", value: form.phone, onChange: (event) => setForm((current) => ({
            ...current,
            phone: event.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.showroom, onChange: (event) => setForm((current) => ({
            ...current,
            showroom: event.target.value
          })), className: "flex h-12 w-full rounded-[16px] border border-input bg-white/82 px-4 py-2 text-[1rem] font-light leading-[1.7] text-[#111111] outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Gewenste showroom" }),
            masterShowrooms.map((showroom) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: showroom, children: showroom }, showroom))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.budget, onChange: (event) => setForm((current) => ({
            ...current,
            budget: event.target.value
          })), className: "flex h-12 w-full rounded-[16px] border border-input bg-white/82 px-4 py-2 text-[1rem] font-light leading-[1.7] text-[#111111] outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Projectbudget" }),
            masterConsultationBudgets.map((budget) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: budget, children: budget }, budget))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: form.date, onChange: (event) => setForm((current) => ({
            ...current,
            date: event.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Vertel ons meer over uw project, planning of specifieke wensen...", value: form.notes, onChange: (event) => setForm((current) => ({
            ...current,
            notes: event.target.value
          })) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: !isValid, className: "inline-flex min-h-14 w-full items-center justify-center rounded-[16px] border px-4 text-[0.8125rem] uppercase tracking-[0.15em] transition-colors duration-300 disabled:cursor-not-allowed", style: {
            backgroundColor: isValid ? "#B08D57" : "rgba(0,0,0,0.1)",
            borderColor: isValid ? "#B08D57" : "rgba(0,0,0,0.1)",
            color: isValid ? "#F7F5F2" : "rgba(0,0,0,0.3)"
          }, children: "Consultatie plannen" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-[0.75rem] leading-[1.6] text-[#AAAAAA]", children: "Uw gegevens worden volledig discreet behandeld. Wij delen uw informatie nooit met derden." })
        ] }) })
      ] }, "form") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.6
      }, className: "flex min-h-[70vh] flex-col items-center justify-center py-8 text-center md:min-h-[calc(100vh-9rem)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          scale: 0,
          opacity: 0
        }, animate: {
          scale: 1,
          opacity: 1
        }, transition: {
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20
        }, className: "mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border-[1.5px] border-[#B08D57] bg-white/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleMark, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]", children: "Consultatie aangevraagd" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mb-3 max-w-[420px] text-[2.1rem] text-[#111111] md:text-[2.35rem]", style: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400,
            lineHeight: 1.2
          }, children: "Wij kijken ernaar uit uw droomkeuken te ontwerpen" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mb-2 max-w-[380px] text-[1rem] leading-[1.8] text-[#666666]", children: [
            "Dank u, ",
            form.name.split(" ")[0],
            ". Uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om de afspraak te bevestigen."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto my-5 h-px w-[120px] bg-[#B08D57]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-1 text-[0.875rem] text-[#999999]", children: [
            "Showroom: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#555555]", children: form.showroom })
          ] }),
          form.date ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-5 text-[0.875rem] text-[#999999]", children: [
            "Gewenste datum: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#555555]", children: form.date })
          ] }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Keuken Centrum Utrecht" })
        ] })
      ] }, "success") }) }) })
    ] }) })
  ] });
}
function PersonMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", r: "3.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.5 19a6.5 6.5 0 0 1 13 0" })
  ] });
}
function CalendarMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 3v4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 3v4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "5", width: "16", height: "15", rx: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 9.5h16" })
  ] });
}
function PhoneMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.8 4h2.4l1.2 4-1.8 1.8a15 15 0 0 0 4.6 4.6l1.8-1.8 4 1.2v2.4a1.8 1.8 0 0 1-2 1.8C10.7 17.8 6.2 13.3 6 6a1.8 1.8 0 0 1 1.8-2Z" }) });
}
function CheckCircleMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-8 w-8 fill-none stroke-[#B08D57] stroke-[1.8]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m8.5 12 2.3 2.4 4.7-5.2" })
  ] });
}
export {
  ConsultationPage as component
};
