import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FlowActionBar } from "@/components/configurator/FlowActionBar";
import { FlowNav } from "@/components/configurator/FlowNav";
import { PageHeader } from "@/components/configurator/PageHeader";
import { Check } from "@/components/ui/icons";
import { useConfigurator } from "@/context/configurator-context";
import { masterBrands, masterStyles } from "@/lib/master-config-data";

export const Route = createFileRoute("/style")({
  component: StylePage,
});

function StylePage() {
  const navigate = useNavigate();
  const { config, setStyle } = useConfigurator();
  const [hovered, setHovered] = useState<string | null>(null);
  const selectedStyle = useMemo(
    () => masterStyles.find((style) => style.id === config.style) ?? null,
    [config.style],
  );
  const selectedBrand = useMemo(
    () => masterBrands.find((brand) => brand.id === config.brand) ?? null,
    [config.brand],
  );

  useEffect(() => {
    if (!config.brand) {
      navigate({ to: "/brands" });
    }
  }, [config.brand, navigate]);

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      <FlowNav />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="pb-36 pt-24 md:pb-40 md:pt-36"
      >
        <div className="mx-auto w-[min(calc(100%-3rem),1536px)] md:w-[min(calc(100%-6rem),1536px)]">
          <PageHeader
            overline="Stap 02 van 05"
            title="Kies uw stijl"
            subtitle="Bepaal de architectonische taal van uw keuken. Elke stijl biedt een eigen sfeer en beleving."
          />

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {masterStyles.map((style, index) => {
              const selected = config.style === style.id;
              const isHovered = hovered === style.id;

              return (
                <motion.button
                  key={style.id}
                  type="button"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onClick={() => setStyle(style.id, style.name)}
                  onMouseEnter={() => setHovered(style.id)}
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
                      backgroundImage: `url(${style.image})`,
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                      filter: isHovered ? "brightness(0.82)" : "brightness(0.92)",
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

                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6"
                    animate={{ y: isHovered ? -6 : 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="mb-1 block text-[0.625rem] uppercase tracking-[0.2em] text-[#B08D57]">
                      {style.keywords[0]}
                    </p>
                    <h2
                      className="mb-0.5 text-[1.35rem] leading-[1.2] text-[#F7F5F2] sm:text-[1.5rem] md:text-[1.75rem]"
                      style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
                    >
                      {style.name}
                    </h2>
                    <p className="mb-2 block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(247,245,242,0.65)]">
                      {style.keywords.join(", ")}
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
                          {style.description}
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
        <FlowActionBar
          overline="Geselecteerd"
          title={selectedStyle?.name ?? "Kies uw stijl"}
          subtitle={
            selectedStyle
              ? `${selectedBrand?.name ?? "Merk"} met ${selectedStyle.name} is klaar voor stap 3`
              : "Kies eerst een stijl om door te gaan naar stap 3"
          }
          backLabel="Terug"
          onBack={() => (selectedStyle ? setStyle("", "") : navigate({ to: "/brands" }))}
          continueLabel="Verder naar stap 3"
          onContinue={() => navigate({ to: "/configure" })}
          continueDisabled={!selectedStyle}
        />
      </AnimatePresence>
    </main>
  );
}
