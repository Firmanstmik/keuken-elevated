import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-none border border-input bg-white/70 px-4 py-2 text-[1rem] font-light leading-[1.7] text-foreground shadow-none transition-[border-color,box-shadow] duration-300 file:border-0 file:bg-transparent file:text-[1rem] file:font-light file:text-foreground placeholder:text-muted-foreground focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
