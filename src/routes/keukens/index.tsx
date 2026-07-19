import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { KeukensOverviewPage } from "@/components/site/brand-pages/KeukensOverviewPage";
import { keukensOverview } from "@/lib/brand-pages/keukens-overview";

export const Route = createFileRoute("/keukens/")({
  head: () => ({
    meta: [
      { title: keukensOverview.meta.title },
      { name: "description", content: keukensOverview.meta.description },
      { property: "og:title", content: keukensOverview.meta.title },
      { property: "og:description", content: keukensOverview.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: keukensOverview.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens" }],
  }),
  component: KeukensOverviewRoute,
});

function KeukensOverviewRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <KeukensOverviewPage />
      <Footer />
    </main>
  );
}
