import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const pcss = fs.readFileSync(path.join(root, "src/styles.pcss"), "utf8").split(/\r?\n/);
const start = pcss.findIndex((l) => l.includes("/* ── Brand kitchen pages"));
const end = pcss.findIndex((l, i) => i > start && l.includes("/* ─── Apparatuur pages"));
if (start < 0 || end < 0) throw new Error("Could not find brand CSS block");

// Dedent nested @layer content (usually 2 spaces).
let chunk = pcss
  .slice(start, end)
  .map((l) => (l.startsWith("  ") ? l.slice(2) : l))
  .join("\n");

const kitchenStart = pcss.findIndex((l) => l.trim() === ".kitchen-eyebrow-mark {");
let kitchenEnd = kitchenStart;
let depth = 0;
for (let i = kitchenStart; i < pcss.length; i++) {
  for (const ch of pcss[i]) {
    if (ch === "{") depth++;
    if (ch === "}") depth--;
  }
  if (i > kitchenStart && depth === 0) {
    kitchenEnd = i;
    break;
  }
}
const kitchen = pcss
  .slice(kitchenStart, kitchenEnd + 1)
  .map((l) => (l.startsWith("  ") ? l.slice(2) : l))
  .join("\n");

const helpers = `/* Keukens / brand pages — React parity (flattened from styles.pcss) */

:root {
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

body.kc-keukens-route .site-main { padding-top: 0; }
body.kc-keukens-route .site-main--keukens { min-height: 60vh; }

.brand-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--green);
}
.brand-eyebrow--light { color: var(--green-highlight); }
.brand-eyebrow--light .kitchen-eyebrow-mark {
  border-color: rgba(200, 169, 107, 0.42);
  background:
    radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.22), transparent 42%),
    linear-gradient(145deg, rgba(200, 169, 107, 0.15), rgba(139, 197, 64, 0.1));
}

.brand-page-hero { position: relative; min-height: 88vh; overflow: hidden; }
.brand-page-hero--tall { min-height: 96vh; }
.brand-page-hero__media { position: absolute; inset: 0; }
.brand-page-hero__media img { width: 100%; height: 100%; object-fit: cover; }
.brand-page-hero__gradient {
  position: absolute; inset: 0;
  background: linear-gradient(118deg,rgba(10,20,12,0.92) 0%,rgba(10,20,12,0.5) 46%,rgba(10,20,12,0.72) 100%);
}
.brand-page-hero__radial {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 18% 85%,rgba(139,197,64,0.16) 0%,transparent 52%);
}
.brand-page-hero__vignette {
  position: absolute; inset: 0;
  box-shadow: inset 0 0 180px 60px rgba(5,10,6,0.55);
}
.brand-page-hero__fade {
  pointer-events: none; position: absolute; inset-inline: 0; bottom: 0; z-index: 1; height: 9rem;
  background: linear-gradient(180deg,transparent 0%,var(--kc-surface) 100%);
}
.brand-page-hero__content {
  position: relative; z-index: 2; display: flex; min-height: 88vh; flex-direction: column;
  justify-content: flex-end; padding: calc(var(--kc-header-height) + 4rem) 0 6rem; max-width: 54rem;
}
.brand-page-hero--tall .brand-page-hero__content { min-height: 96vh; padding-bottom: 7rem; }
.brand-page-hero__title {
  margin-top: 1.5rem; font-family: var(--font-display); font-size: clamp(3rem,6.5vw,5.2rem);
  line-height: 0.98; letter-spacing: -0.025em; color: #fff;
}
.brand-page-hero__title em { font-style: italic; color: var(--green-highlight); }
.brand-page-hero__lede {
  margin-top: 1.75rem; max-width: 36rem; font-size: 1.08rem; font-weight: 300;
  line-height: 1.8; color: rgba(255,255,255,0.78);
}
.brand-page-hero__actions { margin-top: 2.5rem; display: flex; flex-wrap: wrap; gap: 1rem; }
.brand-page-hero__actions .premium-pill-button--ghost {
  border-color: rgba(255,255,255,0.22); color: #fff; background: rgba(255,255,255,0.06);
}
.brand-page-hero__scroll {
  position: absolute; bottom: 2rem; right: 2rem; z-index: 2; display: none;
  width: 2.75rem; height: 2.75rem; place-items: center; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.22); color: rgba(255,255,255,0.7);
  animation: kc-hero-bob 2.2s ease-in-out infinite;
}
@media (min-width: 768px) { .brand-page-hero__scroll { display: grid; } }
@keyframes kc-hero-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.keukens-intro-grid { display: grid; gap: 3rem; }
@media (min-width: 1024px) { .keukens-intro-grid { grid-template-columns: 0.9fr 1.1fr; } }
.keukens-section-title {
  margin-top: 1.25rem; font-family: var(--font-display); font-size: clamp(2rem,3.4vw,2.85rem);
  line-height: 1.12; letter-spacing: -0.015em; color: var(--secondary);
}
.keukens-section-title em { font-style: italic; color: var(--green); }
.keukens-section-title--light { color: #fff; }
.keukens-section-title--light em { color: var(--green-highlight); }
.keukens-body-copy { font-size: 1rem; font-weight: 300; line-height: 1.8; color: var(--text-soft); }
.keukens-body-copy + .keukens-body-copy { margin-top: 1.25rem; }
.keukens-body-copy--light { color: rgba(255,255,255,0.72); }
.keukens-brands-section {
  border-block: 1px solid rgba(139,197,64,0.1);
  background: linear-gradient(180deg,rgba(139,197,64,0.045) 0%,transparent 100%);
}
.keukens-brands-section__head { margin-bottom: 3rem; }
.keukens-brand-grid { display: grid; gap: 1rem; }
@media (min-width: 768px) { .keukens-brand-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1200px) { .keukens-brand-grid { grid-template-columns: repeat(3, 1fr); } }
.keukens-brand-card {
  display: flex; flex-direction: column; height: 100%; overflow: hidden;
  border-radius: 1.5rem; border: 1px solid rgba(139,197,64,0.14);
  background: rgba(255,255,255,0.72); text-decoration: none; color: inherit;
  transition: transform 0.45s var(--ease-premium), box-shadow 0.45s var(--ease-premium), border-color 0.45s;
}
.keukens-brand-card:hover {
  transform: translateY(-4px); border-color: rgba(139,197,64,0.35);
  box-shadow: 0 28px 60px -36px rgba(20,40,18,0.45);
}
.keukens-brand-card__media { position: relative; height: 12.5rem; overflow: hidden; }
.keukens-brand-card__image {
  width: 100%; height: 100%; object-fit: cover; transition: transform 0.9s var(--ease-premium);
}
.keukens-brand-card:hover .keukens-brand-card__image { transform: scale(1.05); }
.keukens-brand-card__body { padding: 1.35rem 1.4rem 1.55rem; }
.keukens-brand-card__meta { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
.keukens-brand-card__country {
  font-size: 0.62rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--green);
}
.keukens-brand-card__arrow {
  width: 1rem; height: 1rem; color: var(--text-soft);
  transition: transform 0.3s var(--ease-premium), color 0.3s;
}
.keukens-brand-card:hover .keukens-brand-card__arrow { color: var(--green); transform: translate(2px,-2px); }
.keukens-brand-card__name {
  margin-top: 0.75rem; font-family: var(--font-display); font-size: 1.75rem; line-height: 1; color: var(--secondary);
}
.keukens-brand-card__tagline {
  margin-top: 0.5rem; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--text-soft);
}
.keukens-brand-card__desc {
  margin-top: 1rem; font-size: 0.95rem; font-weight: 300; line-height: 1.7; color: var(--text-soft);
}
.keukens-value-grid { display: grid; gap: 1.25rem; }
@media (min-width: 768px) { .keukens-value-grid { grid-template-columns: repeat(2, 1fr); } }
.keukens-value-card {
  position: relative; overflow: hidden; border-radius: 1.6rem;
  border: 1px solid rgba(139,197,64,0.14); background: rgba(255,255,255,0.75);
  padding: 2rem; color: var(--secondary);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.85), 0 18px 44px -38px rgba(20,40,18,0.4);
  transition: transform 0.5s var(--ease-premium), border-color 0.5s, box-shadow 0.5s;
}
.keukens-value-card:hover {
  transform: translateY(-4px); border-color: rgba(139,197,64,0.3);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.85), 0 30px 64px -34px rgba(20,40,18,0.48);
}
.keukens-value-card::after {
  content: ""; position: absolute; right: -2.2rem; top: -2.2rem; width: 7rem; height: 7rem;
  border-radius: 9999px; background: radial-gradient(circle, rgba(139,197,64,0.1) 0%, transparent 68%);
  pointer-events: none;
}
.keukens-value-card--dark {
  background: linear-gradient(145deg, #142010 0%, #2a4718 100%);
  border-color: rgba(168,217,90,0.2); color: #fff;
}
.keukens-value-card__num {
  font-family: var(--font-display); font-style: italic; font-size: 2rem; line-height: 1; color: var(--green);
}
.keukens-value-card--dark .keukens-value-card__num { color: var(--green-highlight); }
.keukens-value-card h3 {
  margin-top: 2rem; font-family: var(--font-display); font-size: 1.85rem; line-height: 1.15; letter-spacing: -0.01em;
}
.keukens-value-card--dark h3 { color: #fff; }
.keukens-value-card p { margin-top: 1.25rem; font-size: 0.98rem; font-weight: 300; line-height: 1.75; opacity: 0.8; }
.keukens-value-card--dark p { color: rgba(255,255,255,0.82); }
.keukens-custom-wrap { max-width: 52rem; }
.keukens-custom-wrap .keukens-body-copy:first-of-type { margin-top: 2rem; }
.keukens-faq-grid { display: grid; gap: 3.5rem; }
@media (min-width: 1024px) { .keukens-faq-grid { grid-template-columns: 0.85fr 1.15fr; } }
.keukens-advisor-grid { display: grid; gap: 1.25rem; }
@media (min-width: 768px) { .keukens-advisor-grid { grid-template-columns: repeat(3, 1fr); } }
.keukens-partnership-copy { position: relative; z-index: 1; max-width: 48rem; }
.keukens-partnership-copy .premium-pill-button { margin-top: 2rem; }
.section-shell--border-top { border-top: 1px solid rgba(139,197,64,0.1); }
.section-shell--soft-green { background: rgba(139,197,64,0.03); }

.brand-faq__item > summary { list-style: none; cursor: pointer; }
.brand-faq__item > summary::-webkit-details-marker { display: none; }
.brand-faq__item[open] {
  border-color: rgba(139,197,64,0.28);
  box-shadow: 0 18px 44px -32px rgba(20,40,18,0.35);
}
.brand-faq__item[open] .brand-faq__num { color: var(--green); }
.brand-faq__item[open] summary svg { transform: rotate(180deg); }
.brand-faq__contact-inner { position: relative; z-index: 1; display: flex; align-items: center; gap: 1rem; }
.brand-faq__contact-label {
  display: block; font-size: 0.62rem; font-weight: 500; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(255,255,255,0.5);
}
.brand-faq__contact-phone {
  display: block; margin-top: 0.25rem; font-family: var(--font-display); font-size: 1.4rem;
  color: #fff; text-decoration: none;
}
.brand-faq__question { flex: 1; }
.brand-advisor-card__head { display: flex; align-items: flex-start; justify-content: space-between; }
.brand-advisor-card h3 {
  margin-top: 2rem; font-family: var(--font-display); font-size: 2rem; line-height: 1; color: var(--secondary);
}
.brand-advisor-card p { margin-top: 1.25rem; }
.brand-showroom-cta .keukens-body-copy { margin-top: 1.25rem; }

[data-reveal] {
  opacity: 0; transform: translateY(22px);
  transition: opacity 0.65s var(--ease-premium), transform 0.65s var(--ease-premium);
}
[data-reveal].is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; transition: none; }
  .brand-page-hero__scroll { animation: none; }
}

`;

const out = path.join(root, "wordpress/keuken-centrum/assets/css/keukens-brand-pages.css");
const body = helpers + "\n" + kitchen + "\n\n" + chunk + "\n";
fs.writeFileSync(out, body);

const open = (body.match(/\{/g) || []).length;
const close = (body.match(/\}/g) || []).length;
console.log("Wrote", out, "open=", open, "close=", close, "delta=", open - close);
