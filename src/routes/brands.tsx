import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FlowActionBar } from "@/components/configurator/FlowActionBar";
import { FlowNav } from "@/components/configurator/FlowNav";
import { PageHeader } from "@/components/configurator/PageHeader";
import { Check } from "@/components/ui/icons";
import { useConfigurator } from "@/context/configurator-context";
import { masterBrands } from "@/lib/master-config-data";
import leichtLogo from "@/assets/Leicht_Logo.webp";
import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
import nobiliaLogo from "@/assets/Nobilia_Logo.webp";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";
import cucinesseLogo from "@/assets/Cucinesse_Logo.webp";

export const Route = createFileRoute("/brands")({
  component: BrandsPage,
});

const brandLogos: Record<string, { src: string; alt: string; widthClass: string }> = {
  leicht: {
    src: leichtLogo,
    alt: "LEICHT logo",
    widthClass: "w-[92px]",
  },
  "ai-kuchen": {
    src: aiKuchenLogo,
    alt: "AI Kuchen logo",
    widthClass: "w-[84px]",
  },
  nobilia: {
    src: nobiliaLogo,
    alt: "Nobilia logo",
    widthClass: "w-[92px]",
  },
  zampieri: {
    src: zampieriLogo,
    alt: "Zampieri logo",
    widthClass: "w-[92px]",
  },
  cucinesse: {
    src: cucinesseLogo,
    alt: "Cucinesse logo",
    widthClass: "w-[98px]",
  },
};

function BrandsPage() {
  const navigate = useNavigate();
  const { config, setBrand, resetConfig } = useConfigurator();
  const [hovered, setHovered] = useState<string | null>(null);
  const selectedBrand = useMemo(
    () => masterBrands.find((brand) => brand.id === config.brand) ?? null,
    [config.brand],
  );

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <FlowNav />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className={`pt-24 md:pt-36 ${selectedBrand ? "pb-36 md:pb-40" : "pb-20 md:pb-32"}`}
      >
        <div className="mx-auto w-[min(calc(100%-3rem),1536px)] md:w-[min(calc(100%-6rem),1536px)]">
          <PageHeader
            overline="Stap 01 van 05"
            title="Kies uw merk"
            subtitle="Selecteer de Europese keukenfabrikant die past bij uw visie. Elk merk brengt een eigen ontwerpfilosofie en erfgoed mee."
          />

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {masterBrands.map((brand, index) => {
              const selected = config.brand === brand.id;
              const isHovered = hovered === brand.id;
              const logo = brandLogos[brand.id];
              const preserveUppercase = brand.id === "leicht";

              return (
                <motion.button
                  key={brand.id}
                  type="button"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setBrand(brand.id, brand.name)}
                  onMouseEnter={() => setHovered(brand.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative h-[320px] cursor-pointer overflow-hidden rounded-[18px] border text-left sm:h-[360px] md:h-[460px]"
                  style={{
                    borderColor: selected ? "#B08D57" : "rgba(0,0,0,0.08)",
                    boxShadow: selected
                      ? "0 0 0 1px #B08D57, 0 20px 60px rgba(176,141,87,0.15)"
                      : isHovered
                        ? "0 16px 48px rgba(0,0,0,0.12)"
                        : "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      backgroundImage: `url(${brand.image})`,
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
                      opacity: isHovered ? 0.85 : 0.7,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute right-0 top-0 z-[1] h-28 w-40 md:h-32 md:w-44"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(247,245,242,0.68) 0%, rgba(247,245,242,0.34) 34%, rgba(247,245,242,0.12) 52%, rgba(247,245,242,0) 76%)",
                      opacity: isHovered ? 0.92 : 0.82,
                    }}
                  />

                  {logo ? (
                    <div className="absolute right-4 top-4 z-10 px-1 py-1 md:right-5 md:top-5">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`h-auto ${logo.widthClass} drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)]`}
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6"
                    animate={{ y: isHovered ? -6 : 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="mb-1 block text-[0.625rem] uppercase tracking-[0.2em] text-[#B08D57]">
                      {brand.origin}
                    </p>
                    <h2
                      className="mb-0.5 text-[1.35rem] leading-[1.2] text-[#F7F5F2] sm:text-[1.5rem] md:text-[1.75rem]"
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 400,
                        textTransform: preserveUppercase ? "uppercase" : "none",
                      }}
                    >
                      {brand.name}
                    </h2>
                    <p className="mb-2 block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(247,245,242,0.65)]">
                      {brand.tagline}
                    </p>

                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <motion.p
                          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="max-w-[32rem] text-[0.82rem] leading-[1.6] text-[rgba(247,245,242,0.75)] normal-case sm:text-[0.875rem]"
                          style={{ textTransform: "none", letterSpacing: "0.01em" }}
                        >
                          {brand.description}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>

                  <AnimatePresence>
                    {selected ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute left-5 top-5"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center bg-[#B08D57] text-[#F7F5F2]">
                          <Check className="h-[18px] w-[18px]" />
                        </span>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

        </div>
      </motion.section>

      <AnimatePresence>
        {selectedBrand ? (
          <FlowActionBar
            overline="Geselecteerd"
            title={selectedBrand.name}
            backLabel="Terug"
            onBack={() => resetConfig()}
            continueLabel="Verder naar stijl"
            onContinue={() => navigate({ to: "/style" })}
          />
        ) : null}
      </AnimatePresence>
    </main>
  );
}
