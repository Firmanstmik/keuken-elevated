import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { AiKuchenPage } from "@/components/site/brand-pages/AiKuchenPage";
import { aiKuchenPage } from "@/lib/brand-pages/ai-kuchen";

export const Route = createFileRoute("/keukens/ai-kuchen")({
  head: () => ({
    meta: [
      { title: aiKuchenPage.meta.title },
      { name: "description", content: aiKuchenPage.meta.description },
      { property: "og:title", content: aiKuchenPage.meta.title },
      { property: "og:description", content: aiKuchenPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: aiKuchenPage.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: aiKuchenPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens/ai-kuchen" }],
  }),
  component: AiKuchenRoute,
});

function AiKuchenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <AiKuchenPage />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
