# Official Site Asset Audit — keuken-centrum.nl

Scanned: homepage (`https://keuken-centrum.nl/`)  
Compared against local React + WP theme asset folders.

## Summary

The live official site hosts **34 homepage images** on their CDN (`/__l5e/assets-v1/{uuid}/{filename}`). Several are **new or refreshed** compared to our current migration stack.

**Yes — we can fetch these URLs.** They are public, hotlinkable, and same brand. Recommended workflow: download → optimize (WebP) → place in `wordpress/keuken-centrum/assets/img/` + `src/assets/` for parity.

---

## High priority — adopt soon

| Asset | Why | URL |
|-------|-----|-----|
| `logo-keuken-centrum-transparent.png` | New transparent header logo on official site | [link](https://keuken-centrum.nl/__l5e/assets-v1/2f3a17ca-beba-4c65-839d-76d2531cb05a/logo-keuken-centrum-transparent.png) |
| `logo-keuken-centrum-footer.png` | Dedicated footer wordmark (cleaner than inverted webp) | [link](https://keuken-centrum.nl/__l5e/assets-v1/01fdb991-f5a1-49e8-afa6-bbe34fe11f90/logo-keuken-centrum-footer.png) |
| `keukenspecialist.png` | Trust badge in hero (official shows next to CBW) | [link](https://keuken-centrum.nl/__l5e/assets-v1/764cb01b-6524-43b8-bfdf-29362ecc48dd/keukenspecialist.png) |
| `cbw-erkend.png` | Updated CBW badge (we have `cbw.svg` but official uses raster) | [link](https://keuken-centrum.nl/__l5e/assets-v1/90249382-8752-40a6-8420-4f0f32a1b54e/cbw-erkend.png) |
| `showroom-elegant-samenspel-nieuw.jpg` | Fresh showroom hero — "elegant samenspel" section | [link](https://keuken-centrum.nl/__l5e/assets-v1/0cd4baa0-3d8a-44fb-88a0-cc32ff503457/showroom-elegant-samenspel-nieuw.jpg) |

---

## Keukenstijl / collections (official refresh)

Official site uses a **"geleefd"** style set (4 PNGs) plus updated lifestyle shots:

- `geleefd-1.png` … `geleefd-4.png` — new worn/lived-in style tiles
- `luxe.webp`, `scandi.jpg`, `luxe-rosso.jpg` — style carousel
- `modern.webp`, `klassiek.webp` — already overlap with our stack

**Recommendation:** Pull `geleefd-*` + `luxe.webp` if we want 1:1 parity with official homepage style picker.

---

## Brand marquee logos

Official homepage brand strip uses updated files:

| File | Notes |
|------|-------|
| `leicht.svg` | Vector — crisp at any size |
| `nobilia.webp` | WebP brand lockup |
| `aikuchen-new.png` | **New** AI Küchen / Häcker asset |
| `bora.png`, `miele.png`, `gaggenau.png`, `smeg.png`, `bosch.png` | Appliance logos |
| `aeg.svg` | Vector AEG |

**Recommendation:** Replace legacy brand PNGs in hero marquee for sharper retina display.

---

## Bora / Quooker feature block

Official has dedicated product photography:

- `bora-cooktop.png` — integrated cooktop shot
- `quooker-kokendwaterkraan.jpg` — Quooker tap lifestyle
- `quooker.webp` — brand mark (we may already have)

Good for apparatuur / homepage appliance sections.

---

## Showroom & project photography

| File | Use |
|------|-----|
| `IMG_0619_LEICHT_Aluro.JPG` | Leicht Aluro project |
| `IMG_0626-scaled.webp` | Already referenced in audits |
| `IMG_0628.JPG`, `IMG_0638.JPG`, `IMG_0655.jpg` | Realized kitchen gallery |
| `showroom-keuken.png` | Showroom promo card |

---

## Blog / stories thumbnails

- `onderhoud-story.jpg` — maintenance tips article
- `ronde-wangen-keuken.JPG` — rounded kitchen trend story

Useful if we migrate the official blog/trends section.

---

## What we should NOT blindly copy

- **Copy text** — official site copy differs from our approved React twin in places
- **Layout** — official site is a different stack (`__l5e`); we only take **assets**, not structure
- **Apparatuur section** — FROZEN per project rules; brand logos OK for marquee only

---

## Next step (if approved)

1. Download high-priority pack (logos + badges + showroom hero)
2. Convert large JPGs → WebP ~1600px
3. Wire into WP `kc_theme_img()` + React imports
4. Theme sync + visual compare at 1280 / 390

Probe scripts: `scripts/audit-out/probe-official-assets.mjs`, `official-asset-compare.mjs`
