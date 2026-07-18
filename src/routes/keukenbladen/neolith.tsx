import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { neolithPage } from "@/lib/worktop-pages/worktops";

export const Route = createFileRoute("/keukenbladen/neolith")({
  head: () => ({
    meta: [
      { title: neolithPage.meta.title },
      { name: "description", content: neolithPage.meta.description },
      { property: "og:title", content: neolithPage.meta.title },
      { property: "og:description", content: neolithPage.meta.description },
      { property: "og:image", content: neolithPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukenbladen/neolith" }],
  }),
  component: NeolithRoute,
});

function NeolithRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={neolithPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
