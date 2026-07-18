import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { afzuigkappenPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/afzuigkappen")({
  head: () => ({
    meta: [
      { title: afzuigkappenPage.meta.title },
      { name: "description", content: afzuigkappenPage.meta.description },
      { property: "og:title", content: afzuigkappenPage.meta.title },
      { property: "og:description", content: afzuigkappenPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: afzuigkappenPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/afzuigkappen" }],
  }),
  component: AfzuigkappenRoute,
});

function AfzuigkappenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={afzuigkappenPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
