import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApparatuurCategoryPage } from "@/components/site/apparatuur-pages/ApparatuurCategoryPage";
import { kookplatenPage } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/kookplaten")({
  head: () => ({
    meta: [
      { title: kookplatenPage.meta.title },
      { name: "description", content: kookplatenPage.meta.description },
      { property: "og:title", content: kookplatenPage.meta.title },
      { property: "og:description", content: kookplatenPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: kookplatenPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur/kookplaten" }],
  }),
  component: KookplatenRoute,
});

function KookplatenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurCategoryPage data={kookplatenPage} />
      <Footer />
    </main>
  );
}
