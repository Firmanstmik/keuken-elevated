import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { dektonPage } from "@/lib/worktop-pages/worktops";

export const Route = createFileRoute("/keukenbladen/dekton")({
  head: () => ({
    meta: [
      { title: dektonPage.meta.title },
      { name: "description", content: dektonPage.meta.description },
      { property: "og:title", content: dektonPage.meta.title },
      { property: "og:description", content: dektonPage.meta.description },
      { property: "og:image", content: dektonPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukenbladen/dekton" }],
  }),
  component: DektonRoute,
});

function DektonRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={dektonPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
