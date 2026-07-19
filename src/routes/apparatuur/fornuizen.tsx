import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { fornuizenPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/fornuizen")({
  head: () => ({
    meta: [
      { title: fornuizenPage.meta.title },
      { name: "description", content: fornuizenPage.meta.description },
      { property: "og:title", content: fornuizenPage.meta.title },
      { property: "og:description", content: fornuizenPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: fornuizenPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/fornuizen" }],
  }),
  component: FornuizenRoute,
});

function FornuizenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={fornuizenPage} />
      <Footer />
    </main>
  );
}
