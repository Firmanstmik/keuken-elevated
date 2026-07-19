export type ConfiguratorStepId = "brand" | "style" | "configure" | "moodboard" | "consultation";

export type ConfiguratorStep = {
  id: ConfiguratorStepId;
  path: "/brands" | "/style" | "/configure" | "/moodboard" | "/consultation";
  label: string;
  shortLabel: string;
  backHref: "/" | ConfiguratorStep["path"];
  nextHref?: ConfiguratorStep["path"];
  requires?: Array<"brand" | "style">;
};

export const configuratorSteps: readonly ConfiguratorStep[] = [
  {
    id: "brand",
    path: "/brands",
    label: "Kies uw merk",
    shortLabel: "Merk",
    backHref: "/",
    nextHref: "/style",
  },
  {
    id: "style",
    path: "/style",
    label: "Kies uw stijl",
    shortLabel: "Stijl",
    backHref: "/brands",
    nextHref: "/configure",
    requires: ["brand"],
  },
  {
    id: "configure",
    path: "/configure",
    label: "Stel uw keuken samen",
    shortLabel: "Samenstellen",
    backHref: "/style",
    nextHref: "/moodboard",
    requires: ["brand", "style"],
  },
  {
    id: "moodboard",
    path: "/moodboard",
    label: "Bekijk uw voorstel",
    shortLabel: "Voorstel",
    backHref: "/configure",
    nextHref: "/consultation",
    requires: ["brand", "style"],
  },
  {
    id: "consultation",
    path: "/consultation",
    label: "Plan uw consultatie",
    shortLabel: "Afspraak",
    backHref: "/moodboard",
    requires: ["brand", "style"],
  },
] as const;

export function getConfiguratorStep(pathname: string) {
  return configuratorSteps.find((step) => step.path === pathname) ?? null;
}

export function getFirstMissingPrerequisite(
  pathname: string,
  config: { brand?: string | null; style?: string | null },
) {
  const step = getConfiguratorStep(pathname);
  if (!step?.requires) return null;
  if (step.requires.includes("brand") && !config.brand) return "/brands";
  if (step.requires.includes("style") && !config.style) return "/style";
  return null;
}
