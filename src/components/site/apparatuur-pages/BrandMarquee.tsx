"use client";

import { applianceBrands } from "@/lib/apparatuur-pages/apparatuur";

type BrandItem = (typeof applianceBrands)[number];

function MarqueeRow({ brands, reverse = false }: { brands: readonly BrandItem[]; reverse?: boolean }) {
  return (
    <div className={`app-brand-marquee ${reverse ? "app-brand-marquee--reverse" : ""}`}>
      <div className="app-brand-marquee__track">
        {/* Content is duplicated once so the loop wraps seamlessly */}
        {[false, true].map((clone) => (
          <div
            key={clone ? "clone" : "original"}
            aria-hidden={clone || undefined}
            className="flex shrink-0 items-center gap-[var(--marquee-gap)]"
          >
            {brands.map((brand) => (
              <div key={brand.name} className="app-brand-marquee__item">
                <img src={brand.logo} alt={clone ? "" : brand.name} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  const rowA = applianceBrands.slice(0, 5);
  const rowB = applianceBrands.slice(5);

  return (
    <div>
      <MarqueeRow brands={rowA} />
      <MarqueeRow brands={rowB} reverse />
    </div>
  );
}
