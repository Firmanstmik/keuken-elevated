import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { e as masterCategories, d as masterBudgetRanges, m as masterBrands, h as masterStyles, a as ArrowRight, l as logoKeuken } from "./master-config-data-CQ2gS3IZ.mjs";
import { F as FlowActionBar } from "./FlowActionBar-cZUVzyYV.mjs";
import { F as FlowNav } from "./FlowNav-BjNeHEo0.mjs";
import { u as useConfigurator } from "./router-CLBAZ2Sh.mjs";
import { i as industrieelBase, l as landelijkBase, m as modernBase } from "./industrieel-base-C_gCI_to.mjs";
import { k as klassiekBase } from "./klassiek-base-ByI9UL1v.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "fs";
import "path";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/mui__icons-material.mjs";
import "../_libs/mui__material.mjs";
import "../_libs/mui__utils.mjs";
import "../_libs/react-is.mjs";
import "../_libs/clsx.mjs";
import "../_libs/mui__system.mjs";
import "../_libs/mui__styled-engine.mjs";
import "../_libs/emotion__styled.mjs";
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
import "./Nav-BWd-9Dyc.mjs";
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
const configuratorImages = {
  modern: modernBase,
  klassiek: klassiekBase,
  landelijk: landelijkBase,
  industrieel: industrieelBase
};
function MoodboardPage() {
  const navigate = useNavigate();
  const {
    config
  } = useConfigurator();
  reactExports.useEffect(() => {
    if (!config.brand) navigate({
      to: "/brands"
    });
    else if (!config.style) navigate({
      to: "/style"
    });
  }, [config.brand, config.style, navigate]);
  const configuredItems = reactExports.useMemo(() => masterCategories.map((category) => ({
    category: category.label,
    selection: config.selections[category.id]
  })).filter((item) => item.selection), [config.selections]);
  const budget = config.brand ? masterBudgetRanges[config.brand] ?? "€35,000 tot €85,000" : "€35,000 tot €85,000";
  reactExports.useMemo(() => masterBrands.find((brand) => brand.id === config.brand) ?? null, [config.brand]);
  const selectedStyle = reactExports.useMemo(() => masterStyles.find((style) => style.id === config.style) ?? null, [config.style]);
  const selectedStyleKey = selectedStyle ? typeof selectedStyle === "string" ? selectedStyle : selectedStyle.id || selectedStyle.slug || selectedStyle.name || "" : "";
  const activeImage = (selectedStyleKey ? configuratorImages[selectedStyleKey.toLowerCase()] : null) ?? modernBase;
  async function getImageDataUrl(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas context unavailable"));
          return;
        }
        context.drawImage(image, 0, 0);
        resolve({
          dataUrl: canvas.toDataURL("image/png"),
          width: image.naturalWidth,
          height: image.naturalHeight
        });
      };
      image.onerror = () => reject(new Error("Image failed to load"));
      image.src = src;
    });
  }
  async function createPdfProposal() {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    const accent = [176, 141, 87];
    const dark = [17, 17, 17];
    const muted = [102, 102, 102];
    const light = [247, 245, 242];
    const soft = [244, 240, 233];
    const proposalTitle = `${config.brandName ?? "Keuken"} voorstel`;
    const generatedDate = (/* @__PURE__ */ new Date()).toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
    const logo = await getImageDataUrl(logoKeuken);
    doc.setFillColor(dark[0], dark[1], dark[2]);
    doc.rect(0, 0, pageWidth, 48, "F");
    const logoWidth = 44;
    const logoHeight = logo.height / logo.width * logoWidth;
    doc.addImage(logo.dataUrl, "PNG", pageWidth - margin - logoWidth, 10, logoWidth, logoHeight);
    doc.setTextColor(light[0], light[1], light[2]);
    doc.setFont("times", "normal");
    doc.setFontSize(9);
    doc.text("Keuken Centrum Utrecht", margin, 14);
    doc.setFontSize(22);
    doc.text("Persoonlijk keukenvoorstel", margin, 27);
    doc.setFontSize(11);
    doc.text(`${config.brandName ?? "Merk"} ${config.styleName ? `· ${config.styleName}` : ""}`, margin, 36);
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, 55, pageWidth - margin, 55);
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.setFontSize(8);
    doc.text("Samenvatting", margin, 64);
    doc.setTextColor(dark[0], dark[1], dark[2]);
    doc.setFontSize(18);
    doc.text(proposalTitle, margin, 73);
    doc.setTextColor(muted[0], muted[1], muted[2]);
    doc.setFontSize(9);
    doc.text(`Opgesteld op ${generatedDate}`, margin, 79);
    doc.setFillColor(soft[0], soft[1], soft[2]);
    doc.roundedRect(margin, 87, pageWidth - margin * 2, 28, 3, 3, "F");
    const summaryItems = [{
      label: "Merk",
      value: config.brandName ?? "Niet gekozen"
    }, {
      label: "Stijl",
      value: config.styleName ?? "Niet gekozen"
    }, {
      label: "Budgetindicatie",
      value: budget
    }, {
      label: "Samengestelde onderdelen",
      value: `${configuredItems.length}`
    }];
    summaryItems.forEach((item, index) => {
      const columnX = margin + 5 + index % 2 * 85;
      const rowY = 96 + Math.floor(index / 2) * 11;
      doc.setTextColor(accent[0], accent[1], accent[2]);
      doc.setFontSize(7);
      doc.text(item.label.toUpperCase(), columnX, rowY);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.setFontSize(10);
      doc.text(item.value, columnX, rowY + 5);
    });
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.setFontSize(8);
    doc.text("Materialen en afwerkingen", margin, 126);
    let currentY = 133;
    configuredItems.slice(0, 8).forEach(({
      category,
      selection
    }) => {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(margin, currentY - 5, pageWidth - margin * 2, 11.5, 2, 2, "F");
      doc.setDrawColor(230, 225, 217);
      doc.roundedRect(margin, currentY - 5, pageWidth - margin * 2, 11.5, 2, 2, "S");
      doc.setFillColor(selection.color);
      doc.roundedRect(margin + 3.5, currentY - 1.7, 6.5, 6.5, 1.2, 1.2, "F");
      doc.setTextColor(muted[0], muted[1], muted[2]);
      doc.setFontSize(7);
      doc.text(category.toUpperCase(), margin + 13, currentY);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.setFontSize(9.5);
      doc.text(selection.name, margin + 13, currentY + 4);
      currentY += 14;
    });
    const nextStepY = 249;
    doc.setFillColor(soft[0], soft[1], soft[2]);
    doc.roundedRect(margin, nextStepY - 8, pageWidth - margin * 2, 24, 3, 3, "F");
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.setFontSize(8);
    doc.text("Volgende stap", margin + 5, nextStepY);
    doc.setTextColor(dark[0], dark[1], dark[2]);
    doc.setFontSize(11);
    doc.text("Plan uw ontwerpconsultatie", margin + 5, nextStepY + 6);
    doc.setTextColor(muted[0], muted[1], muted[2]);
    doc.setFontSize(8.5);
    const nextStepText = "Bespreek materialen, technische details en ontvang een uitgewerkt voorstel in onze showroom.";
    doc.text(nextStepText, margin + 5, nextStepY + 12, {
      maxWidth: pageWidth - margin * 2 - 10
    });
    doc.setFontSize(9);
    doc.setTextColor(130, 130, 130);
    doc.text("Keuken Centrum Utrecht · Premium keukens sinds 1978", margin, pageHeight - 12);
    return doc;
  }
  async function handleDownloadPdf() {
    try {
      const doc = await createPdfProposal();
      const fileName = `keuken-voorstel-${(config.brandName ?? "project").toLowerCase().replace(/\s+/g, "-")}.pdf`;
      doc.save(fileName);
      toast.success("Pdf-voorstel gedownload", {
        description: "Uw keukenvoorstel is opgeslagen als professioneel pdf-document."
      });
    } catch {
      toast.error("Pdf kon niet worden gemaakt", {
        description: "Probeer het opnieuw. Als het probleem blijft, laat het mij weten."
      });
    }
  }
  function handleSaveProject() {
    try {
      const payload = {
        savedAt: (/* @__PURE__ */ new Date()).toISOString(),
        config,
        budget
      };
      window.localStorage.setItem("kc-saved-moodboard", JSON.stringify(payload));
      toast.success("Project opgeslagen", {
        description: "Uw laatste moodboard en keuzes zijn lokaal bewaard op dit apparaat."
      });
    } catch {
      toast.error("Project kon niet worden opgeslagen", {
        description: "Controleer de browserinstellingen en probeer het opnieuw."
      });
    }
  }
  async function handleShareProject() {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: "Keuken Centrum Utrecht voorstel",
      text: `${config.brandName ?? "Mijn"} keukenvoorstel met ${config.styleName ?? "geselecteerde stijl"}`,
      url: shareUrl
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Project gedeeld", {
          description: "Uw voorstel is succesvol gedeeld."
        });
        return;
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link gekopieerd", {
          description: "De deellink van uw voorstel staat nu op het klembord."
        });
        return;
      }
      toast.message("Delen niet beschikbaar", {
        description: "Deze browser ondersteunt delen of kopieren niet volledig."
      });
    } catch {
      toast.error("Delen is niet gelukt", {
        description: "Probeer het opnieuw of gebruik een andere browser."
      });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#F7F5F2]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlowNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.45,
      ease: "easeInOut"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] overflow-hidden md:h-[80vh]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
          backgroundImage: `url(${activeImage})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_70%,rgba(247,245,242,1)_100%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-[60px] px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.3em] text-[#B08D57]", children: "Uw ontwerpvoorstel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-2 text-[2.25rem] text-[#F7F5F2] md:text-[3.5rem]", style: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)"
          }, children: [
            config.brandName ?? "Uw",
            " keuken"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[1.125rem] font-light text-[rgba(247,245,242,0.75)]", children: [
            config.styleName ? `${config.styleName}, ` : "",
            "persoonlijk samengesteld"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-[min(calc(100%-4rem),1200px)] pt-6 pb-32 md:w-[min(calc(100%-6rem),1200px)] md:pt-10 md:pb-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap justify-center gap-2 md:mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadMark, {}), label: "Pdf downloaden", onClick: handleDownloadPdf }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkMark, {}), label: "Project opslaan", onClick: handleSaveProject }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButton, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareMark, {}), label: "Project delen", onClick: handleShareProject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
            to: "/consultation"
          }), className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[#B08D57] bg-[#B08D57] px-4 text-[0.7rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]", children: [
            "Consultatie boeken",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -20
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.7,
            delay: 0.2
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]", children: "Configuratiedetails" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 text-[1.375rem] text-[#111111]", style: {
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400
              }, children: "Merk en stijl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { label: "Merk", value: config.brandName ?? "Niet gekozen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { label: "Stijl", value: config.styleName ?? "Niet gekozen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 border-t border-[rgba(0,0,0,0.08)] pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-3 text-[1.375rem] text-[#111111]", style: {
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400
              }, children: "Materialen en afwerkingen" }),
              configuredItems.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: configuredItems.map(({
                category,
                selection
              }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                opacity: 0,
                x: -12
              }, animate: {
                opacity: 1,
                x: 0
              }, transition: {
                delay: 0.3 + index * 0.06
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.5)] p-2.5 transition-colors duration-300 hover:border-[rgba(176,141,87,0.4)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 shrink-0 border border-[rgba(0,0,0,0.08)]", style: {
                  backgroundColor: selection.color
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0.5 block text-[0.75rem] uppercase tracking-[0.1em] text-[#999999]", children: category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.9rem] font-normal text-[#111111]", children: selection.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-[22px] items-center border border-[rgba(176,141,87,0.3)] bg-[rgba(176,141,87,0.1)] px-2 text-[0.5625rem] text-[#B08D57]", children: "Gekozen" })
              ] }) }, category)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[0.875rem] text-[#999999]", children: [
                "Er zijn nog geen materialen samengesteld.",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => navigate({
                  to: "/configure"
                }), className: "text-[#B08D57] hover:underline", children: "Ga terug naar de configurator" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: 20
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.7,
            delay: 0.3
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 border border-[rgba(176,141,87,0.3)] bg-[#111111] p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[rgba(247,245,242,0.4)]", children: "Geschatte investering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[2rem] text-[#B08D57]", style: {
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400
              }, children: budget }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.75rem] leading-[1.5] text-[rgba(247,245,242,0.35)]", children: "Indicatieve inschatting inclusief kasten, werkbladen en gekozen apparatuur. De definitieve offerte ontvangt u tijdens de consultatie." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.75)] p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]", children: "Volgende stap" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-2 text-[1.125rem] text-[#111111]", style: {
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400
              }, children: "Plan uw ontwerpconsultatie" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-[0.875rem] leading-[1.7] text-[#666666]", children: "Bespreek uw concept met een persoonlijke ontwerpadviseur, bekijk materialen van dichtbij en ontvang een uitgewerkt projectvoorstel." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-col gap-1.5", children: ["Persoonlijk ontwerpadvies", "Beoordeling van materiaalstalen", "Technische planning en inmeting", "Uitgebreide budgetbegeleiding"].map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-4 shrink-0 bg-[#B08D57]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.8125rem] text-[#555555]", children: benefit })
              ] }, benefit)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
                to: "/consultation"
              }), className: "inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[14px] border border-[#B08D57] bg-[#B08D57] px-4 text-[0.8125rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]", children: [
                "Consultatie plannen",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowActionBar, { overline: "Voorstel gereed", title: `${config.brandName ?? "Uw"} keuken`, subtitle: `${configuredItems.length} samengestelde details staan klaar voor de laatste consultatie`, backLabel: "Terug", onBack: () => navigate({
      to: "/configure"
    }), continueLabel: "Verder naar consultatie", onContinue: () => navigate({
      to: "/consultation"
    }) }) })
  ] });
}
function ActionButton({
  icon,
  label,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
    void onClick();
  }, className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[#111111] px-3 text-[0.7rem] uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:border-[#B08D57] hover:text-[#B08D57]", children: [
    icon,
    label
  ] });
}
function InfoCard({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.6)] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 block text-[0.75rem] uppercase tracking-[0.1em] text-[#B08D57]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[1.125rem] text-[#111111]", style: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400
    }, children: value })
  ] });
}
function DownloadMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4v10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m8 10 4 4 4-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 18h14" })
  ] });
}
function BookmarkMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 4h10v16l-5-3.5L7 20V4Z" }) });
}
function ShareMark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", className: "h-4 w-4 fill-none stroke-current stroke-[1.7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 8l4-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 4h5v5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" })
  ] });
}
export {
  MoodboardPage as component
};
