import type { ReactNode } from "react";

type KitchenEyebrowProps = {
  children: ReactNode;
  light?: boolean;
  align?: "start" | "center";
  className?: string;
};

export function KitchenEyebrow({
  children,
  light = false,
  align = "start",
  className = "",
}: KitchenEyebrowProps) {
  return (
    <span
      className={[
        "brand-eyebrow",
        light ? "brand-eyebrow--light" : "",
        align === "center" ? "justify-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="kitchen-eyebrow-mark" aria-hidden="true" />
      <span>{children}</span>
    </span>
  );
}
