export type MobileShellMode = "marketing" | "flow" | "configure";

const flowRoutes = new Set(["/brands", "/style", "/moodboard", "/consultation"]);

export function getMobileShellMode(pathname: string): MobileShellMode {
  if (pathname === "/configure") return "configure";
  if (flowRoutes.has(pathname)) return "flow";
  return "marketing";
}

export function isConfiguratorPath(pathname: string) {
  return getMobileShellMode(pathname) !== "marketing";
}

export function matchesRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
