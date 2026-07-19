import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { quookerPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/quooker")({
  head: () => ({
    meta: [
      { title: quookerPage.meta.title },
      { name: "description", content: quookerPage.meta.description },
      { property: "og:title", content: quookerPage.meta.title },
      { property: "og:description", content: quookerPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: quookerPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/quooker" }],
  }),
  component: QuookerRoute,
});

function QuookerRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={quookerPage} />
      <Footer />
    </main>
  );
}
