import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-[14px] border text-[0.8125rem] font-normal uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_42%),linear-gradient(135deg,#5f8b5d_0%,#4f7a4d_48%,#6e9a69_100%)] text-primary-foreground shadow-[0_18px_44px_-32px_rgba(79,122,77,0.42),inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(56,88,53,0.24)] hover:-translate-y-0.5",
        destructive: "border-destructive bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-input bg-transparent text-foreground hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]",
        secondary: "border-secondary bg-secondary text-secondary-foreground shadow-[0_18px_44px_-32px_rgba(17,17,17,0.48)] hover:-translate-y-0.5 hover:bg-secondary/92",
        ghost: "border-transparent hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-[0.72rem]",
        lg: "h-12 px-8",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
