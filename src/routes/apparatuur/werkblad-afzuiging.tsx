import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { werkbladAfzuigingPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/werkblad-afzuiging")({
  head: () => ({
    meta: [
      { title: werkbladAfzuigingPage.meta.title },
      { name: "description", content: werkbladAfzuigingPage.meta.description },
      { property: "og:title", content: werkbladAfzuigingPage.meta.title },
      { property: "og:description", content: werkbladAfzuigingPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: werkbladAfzuigingPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/werkblad-afzuiging" }],
  }),
  component: WerkbladAfzuigingRoute,
});

function WerkbladAfzuigingRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={werkbladAfzuigingPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
