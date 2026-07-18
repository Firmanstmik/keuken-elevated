import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { vaatwassersPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/vaatwassers")({
  head: () => ({
    meta: [
      { title: vaatwassersPage.meta.title },
      { name: "description", content: vaatwassersPage.meta.description },
      { property: "og:title", content: vaatwassersPage.meta.title },
      { property: "og:description", content: vaatwassersPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: vaatwassersPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/vaatwassers" }],
  }),
  component: VaatwassersRoute,
});

function VaatwassersRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={vaatwassersPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
