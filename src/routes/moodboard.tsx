import { useEffect, useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import jsPDF from "jspdf";
import { toast } from "sonner";
import companyLogo from "@/assets/Logo_Keuken_Centrum.png";
import { FlowActionBar } from "@/components/configurator/FlowActionBar";
import { FlowNav } from "@/components/configurator/FlowNav";
import { ArrowRight } from "@/components/ui/icons";
import { useConfigurator } from "@/context/configurator-context";
import { masterBrands, masterBudgetRanges, masterCategories, masterStyles } from "@/lib/master-config-data";

// Import base configurator images for each style
import modernBase from "@/assets/configurator/modern-base.webp";
import klassiekBase from "@/assets/configurator/klassiek-base.webp";
import landelijkBase from "@/assets/configurator/landelijk-base.webp";
import industrieelBase from "@/assets/configurator/industrieel-base.webp";

const configuratorImages = {
  modern: modernBase,
  klassiek: klassiekBase,
  landelijk: landelijkBase,
  industrieel: industrieelBase,
};

export const Route = createFileRoute("/moodboard")({
  component: MoodboardPage,
});

function MoodboardPage() {
  const navigate = useNavigate();
  const { config } = useConfigurator();

  useEffect(() => {
    if (!config.brand) navigate({ to: "/brands" });
    else if (!config.style) navigate({ to: "/style" });
  }, [config.brand, config.style, navigate]);

  const configuredItems = useMemo(
    () =>
      masterCategories
        .map((category) => ({
          category: category.label,
          selection: config.selections[category.id],
        }))
        .filter((item) => item.selection),
    [config.selections],
  );

  const budget = config.brand ? masterBudgetRanges[config.brand] ?? "€35,000 tot €85,000" : "€35,000 tot €85,000";
  const selectedBrand = useMemo(
    () => masterBrands.find((brand) => brand.id === config.brand) ?? null,
    [config.brand],
  );
  const selectedStyle = useMemo(
    () => masterStyles.find((style) => style.id === config.style) ?? null,
    [config.style],
  );

  const selectedStyleKey = selectedStyle
    ? typeof selectedStyle === "string"
      ? selectedStyle
      : (selectedStyle.id || (selectedStyle as any).slug || (selectedStyle as any).name || "")
    : "";

  const activeImage =
    (selectedStyleKey ? configuratorImages[selectedStyleKey.toLowerCase() as keyof typeof configuratorImages] : null) ??
    modernBase;

  async function getImageDataUrl(src: string) {
    return new Promise<{ dataUrl: string; width: number; height: number }>((resolve, reject) => {
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
          height: image.naturalHeight,
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
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 18;
    const accent = [176, 141, 87] as const;
    const dark = [17, 17, 17] as const;
    const muted = [102, 102, 102] as const;
    const light = [247, 245, 242] as const;
    const soft = [244, 240, 233] as const;

    const proposalTitle = `${config.brandName ?? "Keuken"} voorstel`;
    const generatedDate = new Date().toLocaleDateString("nl-NL", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const logo = await getImageDataUrl(companyLogo);

    doc.setFillColor(dark[0], dark[1], dark[2]);
    doc.rect(0, 0, pageWidth, 48, "F");

    const logoWidth = 44;
    const logoHeight = (logo.height / logo.width) * logoWidth;
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

    const summaryItems = [
      { label: "Merk", value: config.brandName ?? "Niet gekozen" },
      { label: "Stijl", value: config.styleName ?? "Niet gekozen" },
      { label: "Budgetindicatie", value: budget },
      { label: "Samengestelde onderdelen", value: `${configuredItems.length}` },
    ];

    summaryItems.forEach((item, index) => {
      const columnX = margin + 5 + (index % 2) * 85;
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
    configuredItems.slice(0, 8).forEach(({ category, selection }) => {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(margin, currentY - 5, pageWidth - margin * 2, 11.5, 2, 2, "F");
      doc.setDrawColor(230, 225, 217);
      doc.roundedRect(margin, currentY - 5, pageWidth - margin * 2, 11.5, 2, 2, "S");

      doc.setFillColor(selection!.color);
      doc.roundedRect(margin + 3.5, currentY - 1.7, 6.5, 6.5, 1.2, 1.2, "F");

      doc.setTextColor(muted[0], muted[1], muted[2]);
      doc.setFontSize(7);
      doc.text(category.toUpperCase(), margin + 13, currentY);

      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.setFontSize(9.5);
      doc.text(selection!.name, margin + 13, currentY + 4);
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
    const nextStepText =
      "Bespreek materialen, technische details en ontvang een uitgewerkt voorstel in onze showroom.";
    doc.text(nextStepText, margin + 5, nextStepY + 12, { maxWidth: pageWidth - margin * 2 - 10 });

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
        description: "Uw keukenvoorstel is opgeslagen als professioneel pdf-document.",
      });
    } catch {
      toast.error("Pdf kon niet worden gemaakt", {
        description: "Probeer het opnieuw. Als het probleem blijft, laat het mij weten.",
      });
    }
  }

  function handleSaveProject() {
    try {
      const payload = {
        savedAt: new Date().toISOString(),
        config,
        budget,
      };
      window.localStorage.setItem("kc-saved-moodboard", JSON.stringify(payload));
      toast.success("Project opgeslagen", {
        description: "Uw laatste moodboard en keuzes zijn lokaal bewaard op dit apparaat.",
      });
    } catch {
      toast.error("Project kon niet worden opgeslagen", {
        description: "Controleer de browserinstellingen en probeer het opnieuw.",
      });
    }
  }

  async function handleShareProject() {
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: "Keuken Centrum Utrecht voorstel",
      text: `${config.brandName ?? "Mijn"} keukenvoorstel met ${config.styleName ?? "geselecteerde stijl"}`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Project gedeeld", {
          description: "Uw voorstel is succesvol gedeeld.",
        });
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link gekopieerd", {
          description: "De deellink van uw voorstel staat nu op het klembord.",
        });
        return;
      }

      toast.message("Delen niet beschikbaar", {
        description: "Deze browser ondersteunt delen of kopieren niet volledig.",
      });
    } catch {
      toast.error("Delen is niet gelukt", {
        description: "Probeer het opnieuw of gebruik een andere browser.",
      });
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <FlowNav />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <div className="relative h-[60vh] overflow-hidden md:h-[80vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_70%,rgba(247,245,242,1)_100%)]" />

          <div className="absolute inset-x-0 bottom-[60px] px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.3em] text-[#B08D57]">
                Uw ontwerpvoorstel
              </p>
              <h1
                className="mb-2 text-[2.25rem] text-[#F7F5F2] md:text-[3.5rem]"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                {config.brandName ?? "Uw"} keuken
              </h1>
              <p className="text-[1.125rem] font-light text-[rgba(247,245,242,0.75)]">
                {config.styleName ? `${config.styleName}, ` : ""}persoonlijk samengesteld
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto w-[min(calc(100%-4rem),1200px)] pt-6 pb-32 md:w-[min(calc(100%-6rem),1200px)] md:pt-10 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-wrap justify-center gap-2 md:mb-12">
              <ActionButton icon={<DownloadMark />} label="Pdf downloaden" onClick={handleDownloadPdf} />
              <ActionButton icon={<BookmarkMark />} label="Project opslaan" onClick={handleSaveProject} />
              <ActionButton icon={<ShareMark />} label="Project delen" onClick={handleShareProject} />
              <button
                type="button"
                onClick={() => navigate({ to: "/consultation" })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[#B08D57] bg-[#B08D57] px-4 text-[0.7rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]"
              >
                Consultatie boeken
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-4 block text-[0.6875rem] uppercase tracking-[0.25em] text-[#B08D57]">
                Configuratiedetails
              </p>

              <div className="mb-5">
                <h2
                  className="mb-3 text-[1.375rem] text-[#111111]"
                  style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                >
                  Merk en stijl
                </h2>
                <div className="grid gap-3 grid-cols-2">
                  <InfoCard label="Merk" value={config.brandName ?? "Niet gekozen"} />
                  <InfoCard label="Stijl" value={config.styleName ?? "Niet gekozen"} />
                </div>
              </div>

              <div className="mb-5 border-t border-[rgba(0,0,0,0.08)] pt-5">
                <h2
                  className="mb-3 text-[1.375rem] text-[#111111]"
                  style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                >
                  Materialen en afwerkingen
                </h2>

                {configuredItems.length ? (
                  <div className="flex flex-col gap-2">
                    {configuredItems.map(({ category, selection }, index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.06 }}
                      >
                        <div className="flex items-center gap-3 border border-[rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.5)] p-2.5 transition-colors duration-300 hover:border-[rgba(176,141,87,0.4)]">
                          <span
                            className="h-10 w-10 shrink-0 border border-[rgba(0,0,0,0.08)]"
                            style={{ backgroundColor: selection!.color }}
                          />
                          <div className="flex-1">
                            <p className="mb-0.5 block text-[0.75rem] uppercase tracking-[0.1em] text-[#999999]">
                              {category}
                            </p>
                            <p className="text-[0.9rem] font-normal text-[#111111]">{selection!.name}</p>
                          </div>
                          <span className="inline-flex h-[22px] items-center border border-[rgba(176,141,87,0.3)] bg-[rgba(176,141,87,0.1)] px-2 text-[0.5625rem] text-[#B08D57]">
                            Gekozen
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-[0.875rem] text-[#999999]">
                      Er zijn nog geen materialen samengesteld.{" "}
                      <button
                        type="button"
                        onClick={() => navigate({ to: "/configure" })}
                        className="text-[#B08D57] hover:underline"
                      >
                        Ga terug naar de configurator
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="mb-4 border border-[rgba(176,141,87,0.3)] bg-[#111111] p-4">
                <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[rgba(247,245,242,0.4)]">
                  Geschatte investering
                </p>
                <p
                  className="mb-1 text-[2rem] text-[#B08D57]"
                  style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                >
                  {budget}
                </p>
                <p className="text-[0.75rem] leading-[1.5] text-[rgba(247,245,242,0.35)]">
                  Indicatieve inschatting inclusief kasten, werkbladen en gekozen apparatuur. De
                  definitieve offerte ontvangt u tijdens de consultatie.
                </p>
              </div>

              <div className="border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.75)] p-4">
                <p className="mb-2 block text-[0.6875rem] uppercase tracking-[0.2em] text-[#B08D57]">
                  Volgende stap
                </p>
                <h2
                  className="mb-2 text-[1.125rem] text-[#111111]"
                  style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                >
                  Plan uw ontwerpconsultatie
                </h2>
                <p className="mb-4 text-[0.875rem] leading-[1.7] text-[#666666]">
                  Bespreek uw concept met een persoonlijke ontwerpadviseur, bekijk materialen van
                  dichtbij en ontvang een uitgewerkt projectvoorstel.
                </p>

                <div className="mb-4 flex flex-col gap-1.5">
                  {[
                    "Persoonlijk ontwerpadvies",
                    "Beoordeling van materiaalstalen",
                    "Technische planning en inmeting",
                    "Uitgebreide budgetbegeleiding",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <span className="h-px w-4 shrink-0 bg-[#B08D57]" />
                      <span className="text-[0.8125rem] text-[#555555]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => navigate({ to: "/consultation" })}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[14px] border border-[#B08D57] bg-[#B08D57] px-4 text-[0.8125rem] uppercase tracking-[0.15em] text-[#F7F5F2] transition-colors duration-300 hover:border-[#8A6D3A] hover:bg-[#8A6D3A]"
                >
                  Consultatie plannen
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        <FlowActionBar
          overline="Voorstel gereed"
          title={`${config.brandName ?? "Uw"} keuken`}
          subtitle={`${configuredItems.length} samengestelde details staan klaar voor de laatste consultatie`}
          backLabel="Terug"
          onBack={() => navigate({ to: "/configure" })}
          continueLabel="Verder naar consultatie"
          onContinue={() => navigate({ to: "/consultation" })}
        />
      </AnimatePresence>
    </main>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void | Promise<void>;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        void onClick();
      }}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[#111111] px-3 text-[0.7rem] uppercase tracking-[0.15em] text-[#111111] transition-colors duration-300 hover:border-[#B08D57] hover:text-[#B08D57]"
    >
      {icon}
      {label}
    </button>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.6)] p-3">
      <p className="mb-1 block text-[0.75rem] uppercase tracking-[0.1em] text-[#B08D57]">{label}</p>
      <p
        className="text-[1.125rem] text-[#111111]"
        style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
      >
        {value}
      </p>
    </div>
  );
}

function DownloadMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 18h14" />
    </svg>
  );
}

function BookmarkMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
      <path d="M7 4h10v16l-5-3.5L7 20V4Z" />
    </svg>
  );
}

function ShareMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
      <path d="M15 8l4-4" />
      <path d="M14 4h5v5" />
      <path d="M10 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}
