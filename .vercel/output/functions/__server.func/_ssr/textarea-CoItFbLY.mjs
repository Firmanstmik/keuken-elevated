import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./Nav-BKej9vdn.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-12 w-full rounded-none border border-input bg-white/70 px-4 py-2 text-[1rem] font-light leading-[1.7] text-foreground shadow-none transition-[border-color,box-shadow] duration-300 file:border-0 file:bg-transparent file:text-[1rem] file:font-light file:text-foreground placeholder:text-muted-foreground focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[132px] w-full rounded-none border border-input bg-white/70 px-4 py-3 text-[1rem] font-light leading-[1.7] text-foreground shadow-none placeholder:text-muted-foreground transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
export {
  Input as I,
  Textarea as T
};
