import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { koelkastenPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/koelkasten-vriezers")({
  head: () => ({
    meta: [
      { title: koelkastenPage.meta.title },
      { name: "description", content: koelkastenPage.meta.description },
      { property: "og:title", content: koelkastenPage.meta.title },
      { property: "og:description", content: koelkastenPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: koelkastenPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/koelkasten-vriezers" }],
  }),
  component: KoelkastenRoute,
});

function KoelkastenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={koelkastenPage} />
      <Footer />
    </main>
  );
}
