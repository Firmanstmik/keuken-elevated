import { useLocation } from "@tanstack/react-router";
import { ArrowLeft2, CloseCircle } from "@zethictech/iconsax-react";
import type { CSSProperties } from "react";
import { Nav } from "@/components/site/Nav";
import logoKeuken from "@/assets/logo-keuken-centrum-transparent.png";
import { configuratorSteps, getConfiguratorStep } from "@/lib/configurator-steps";

export function FlowNav() {
  const location = useLocation();
  const step = getConfiguratorStep(location.pathname);
  const stepIndex = step ? configuratorSteps.findIndex((candidate) => candidate.id === step.id) : 0;

  return (
    <>
      <div className="hidden md:block">
        <Nav />
      </div>
      <header className="configurator-mobile-header md:hidden">
        <div className="configurator-mobile-header__row">
          <a
            href={step?.backHref ?? "/"}
            aria-label="Ga terug"
            className="configurator-mobile-header__action"
          >
            <ArrowLeft2 size={20} variant="Linear" />
          </a>
          <a href="/" aria-label="Naar de homepage" className="min-w-0">
            <img src={logoKeuken} alt="KeukenCentrum.nl" className="h-6 w-auto" />
          </a>
          <a
            href="/"
            aria-label="Configuratie sluiten"
            className="configurator-mobile-header__action"
          >
            <CloseCircle size={20} variant="Linear" />
          </a>
        </div>
        <div className="configurator-mobile-header__progress">
          <span>
            Stap {stepIndex + 1} van {configuratorSteps.length}
          </span>
          <strong>{step?.shortLabel ?? "Ontwerp"}</strong>
          <span
            className="configurator-mobile-header__progress-bar"
            aria-hidden="true"
            style={
              {
                "--flow-progress": `${((stepIndex + 1) / configuratorSteps.length) * 100}%`,
              } as CSSProperties
            }
          />
        </div>
      </header>
    </>
  );
}
