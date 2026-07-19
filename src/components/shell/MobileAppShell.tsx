import type { ReactNode } from "react";
import { ContextBottomNav } from "./ContextBottomNav";
import { getMobileShellMode } from "./shell-routes";

export function MobileAppShell({ pathname, children }: { pathname: string; children: ReactNode }) {
  const mode = getMobileShellMode(pathname);

  return (
    <div className="mobile-app-shell" data-mobile-shell-mode={mode}>
      <div className="mobile-app-shell__content">{children}</div>
      {mode === "marketing" && <ContextBottomNav pathname={pathname} />}
    </div>
  );
}
