import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Variant = "blue" | "ghost" | "ghost-light";
type Size = "sm" | "md" | "lg";
type Shape = "pill" | "rounded";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  className?: string;
  badgeClassName?: string;
  children: ReactNode;
};

type LinkProps = BaseProps &
  ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

export type PremiumPillButtonProps = LinkProps | ButtonProps;

export function PremiumPillButton({
  variant = "blue",
  size = "md",
  shape = "pill",
  className,
  badgeClassName,
  children,
  href,
  ...props
}: PremiumPillButtonProps) {
  const classes = cn(
    "premium-pill-button",
    `premium-pill-button--${variant}`,
    `premium-pill-button--${size}`,
    shape === "rounded" && "premium-pill-button--rounded",
    className,
  );

  const content = (
    <>
      <span className="premium-pill-button__label">{children}</span>
      <span className={cn("premium-pill-button__badge", badgeClassName)} aria-hidden="true">
        <ArrowRight className="premium-pill-button__icon" />
      </span>
    </>
  );

  if (href) {
    const { ...anchorProps } = props as ComponentPropsWithoutRef<"a">;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ComponentPropsWithoutRef<"button">;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
