import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const pcss = fs.readFileSync(path.join(root, "src/styles.pcss"), "utf8").split(/\r?\n/);
const start = pcss.findIndex((l) => l.includes("/* ── Brand kitchen pages"));
const end = pcss.findIndex((l, i) => i > start && l.includes("/* ─── Apparatuur pages"));
if (start < 0 || end < 0) throw new Error("Could not find brand CSS block");

let chunk = pcss.slice(start, end).join("\n");
chunk = chunk.replace(/^@layer components \{\s*/m, "").replace(/\s*\}\s*$/m, "");

const kitchenStart = pcss.findIndex((l) => l.trim() === ".kitchen-eyebrow-mark {");
const kitchenEnd = pcss.findIndex((l, i) => i > kitchenStart && l.trim() === "}");
const kitchen = pcss.slice(kitchenStart, kitchenEnd + 1).join("\n");

const aliases = `:root {
  --green: var(--kc-green);
  --green-highlight: var(--kc-green-highlight);
  --green-soft: var(--kc-green-soft);
  --secondary: var(--kc-dark-soft);
  --text-soft: var(--kc-muted);
  --background: var(--kc-surface);
  --foreground: var(--kc-text);
  --ease-premium: var(--kc-ease);
  --motion-premium: var(--kc-motion-premium);
}
.site-container { width: var(--kc-shell); margin: 0 auto; }
.brand-page { background: var(--kc-surface); color: var(--kc-text); }
.brand-eyebrow { display: inline-flex; align-items: center; gap: 0.85rem; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; color: var(--green); }
.brand-eyebrow--light { color: var(--green-highlight); }
`;

const hero = `
.brand-page-hero { position: relative; min-height: 88vh; overflow: hidden; }
.brand-page-hero--tall { min-height: 96vh; }
.brand-page-hero__media { position: absolute; inset: 0; }
.brand-page-hero__media img { width: 100%; height: 100%; object-fit: cover; }
.brand-page-hero__gradient { position: absolute; inset: 0; background: linear-gradient(118deg,rgba(10,20,12,0.92) 0%,rgba(10,20,12,0.5) 46%,rgba(10,20,12,0.72) 100%); }
.brand-page-hero__radial { position: absolute; inset: 0; background: radial-gradient(ellipse at 18% 85%,rgba(139,197,64,0.16) 0%,transparent 52%); }
.brand-page-hero__fade { pointer-events: none; position: absolute; inset-inline: 0; bottom: 0; z-index: 1; height: 9rem; background: linear-gradient(180deg,transparent 0%,var(--kc-surface) 100%); }
.brand-page-hero__content { position: relative; z-index: 2; display: flex; min-height: 88vh; flex-direction: column; justify-content: flex-end; padding: calc(var(--kc-header-height) + 4rem) 0 6rem; max-width: 52rem; }
.brand-page-hero--tall .brand-page-hero__content { min-height: 96vh; padding-bottom: 7rem; }
.brand-page-hero__title { margin-top: 1.5rem; font-family: var(--font-display); font-size: clamp(3rem,6.5vw,5rem); line-height: 0.98; letter-spacing: -0.025em; color: #fff; }
.brand-page-hero__title em { font-style: italic; color: var(--green-highlight); }
.brand-page-hero__lede { margin-top: 1.75rem; max-width: 36rem; font-size: 1.08rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.78); }
.brand-page-hero__actions { margin-top: 2.5rem; display: flex; flex-wrap: wrap; gap: 1rem; }
.brand-page-hero__actions .premium-pill-button--ghost { border-color: rgba(255,255,255,0.22); color: #fff; background: rgba(255,255,255,0.06); }
.keukens-intro-grid { display: grid; gap: 3rem; }
@media (min-width: 1024px) { .keukens-intro-grid { grid-template-columns: 0.9fr 1.1fr; } }
.keukens-section-title { margin-top: 1.25rem; font-family: var(--font-display); font-size: clamp(2rem,3.4vw,2.85rem); line-height: 1.12; letter-spacing: -0.015em; color: var(--secondary); }
.keukens-section-title em { font-style: italic; color: var(--green); }
.keukens-body-copy { font-size: 1rem; font-weight: 300; line-height: 1.8; color: var(--text-soft); }
.keukens-body-copy + .keukens-body-copy { margin-top: 1.25rem; }
.keukens-brands-section { border-block: 1px solid rgba(139,197,64,0.1); background: linear-gradient(180deg,rgba(139,197,64,0.045) 0%,transparent 100%); }
.keukens-brand-card__arrow { width: 1rem; height: 1rem; color: var(--text-soft); transition: transform 0.3s var(--ease-premium), color 0.3s; }
.keukens-brand-card:hover .keukens-brand-card__arrow { color: var(--green); transform: translate(2px,-2px); }
.keukens-brand-card__meta { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
.keukens-brand-card__country { font-size: 0.62rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--green); }
.keukens-brand-card__name { margin-top: 0.75rem; font-family: var(--font-display); font-size: 1.75rem; line-height: 1; color: var(--secondary); }
.keukens-brand-card__tagline { margin-top: 0.5rem; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-soft); }
.keukens-brand-card__desc { margin-top: 1rem; font-size: 0.95rem; font-weight: 300; line-height: 1.7; color: var(--text-soft); }
.keukens-custom-wrap { max-width: 52rem; }
.keukens-faq-grid { display: grid; gap: 3.5rem; }
@media (min-width: 1024px) { .keukens-faq-grid { grid-template-columns: 0.85fr 1.15fr; } }
[data-reveal] { opacity: 0; transform: translateY(22px); transition: opacity 0.65s var(--ease-premium), transform 0.65s var(--ease-premium); }
[data-reveal].is-revealed { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { [data-reveal] { opacity: 1; transform: none; transition: none; } }
`;

const out = path.join(root, "wordpress/keuken-centrum/assets/css/keukens-brand-pages.css");
fs.writeFileSync(
  out,
  "/* Keukens / brand pages — React parity (auto-extracted + hero/layout helpers) */\n\n" +
    aliases +
    "\n" +
    hero +
    "\n" +
    kitchen +
    "\n\n" +
    chunk +
    "\n"
);
console.log("Wrote", out);
