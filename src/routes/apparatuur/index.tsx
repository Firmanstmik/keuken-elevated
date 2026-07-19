import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ApparatuurOverviewPage } from "@/components/site/apparatuur-pages/ApparatuurOverviewPage";
import { apparatuurOverview } from "@/lib/apparatuur-pages/apparatuur";

export const Route = createFileRoute("/apparatuur/")({
  head: () => ({
    meta: [
      { title: apparatuurOverview.meta.title },
      { name: "description", content: apparatuurOverview.meta.description },
      { property: "og:title", content: apparatuurOverview.meta.title },
      { property: "og:description", content: apparatuurOverview.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: apparatuurOverview.hero.image },
    ],
    links: [{ rel: "canonical", href: "/apparatuur" }],
  }),
  component: ApparatuurRoute,
});

function ApparatuurRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ApparatuurOverviewPage />
      <Footer />
    </main>
  );
}
