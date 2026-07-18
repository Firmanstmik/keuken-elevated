import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { silestonePage } from "@/lib/worktop-pages/worktops";

export const Route = createFileRoute("/keukenbladen/silestone")({
  head: () => ({
    meta: [
      { title: silestonePage.meta.title },
      { name: "description", content: silestonePage.meta.description },
      { property: "og:title", content: silestonePage.meta.title },
      { property: "og:description", content: silestonePage.meta.description },
      { property: "og:image", content: silestonePage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukenbladen/silestone" }],
  }),
  component: SilestoneRoute,
});

function SilestoneRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={silestonePage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
