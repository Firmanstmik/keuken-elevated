import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { KeukenbladenOverviewPage } from "@/components/site/worktop-pages/KeukenbladenOverviewPage";
import { worktopOverview } from "@/lib/worktop-pages/worktops";

export const Route = createFileRoute("/keukenbladen/")({
  head: () => ({
    meta: [
      { title: worktopOverview.meta.title },
      { name: "description", content: worktopOverview.meta.description },
      { property: "og:title", content: worktopOverview.meta.title },
      { property: "og:description", content: worktopOverview.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: worktopOverview.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukenbladen" }],
  }),
  component: KeukenbladenRoute,
});

function KeukenbladenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <KeukenbladenOverviewPage />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
