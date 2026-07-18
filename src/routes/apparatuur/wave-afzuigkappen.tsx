import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { wavePage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/wave-afzuigkappen")({
  head: () => ({
    meta: [
      { title: wavePage.meta.title },
      { name: "description", content: wavePage.meta.description },
      { property: "og:title", content: wavePage.meta.title },
      { property: "og:description", content: wavePage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: wavePage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/wave-afzuigkappen" }],
  }),
  component: WaveRoute,
});

function WaveRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={wavePage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
