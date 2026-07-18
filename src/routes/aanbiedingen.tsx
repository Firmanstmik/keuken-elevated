import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { AanbiedingenPage } from "@/components/site/aanbiedingen/AanbiedingenPage";
import { aanbiedingen } from "@/lib/aanbiedingen";

export const Route = createFileRoute("/aanbiedingen")({
  head: () => ({
    meta: [
      { title: aanbiedingen.meta.title },
      { name: "description", content: aanbiedingen.meta.description },
      { property: "og:title", content: aanbiedingen.meta.title },
      { property: "og:description", content: aanbiedingen.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: aanbiedingen.hero.image },
    ],
    links: [{ rel: "canonical", href: "/aanbiedingen" }],
  }),
  component: AanbiedingenRoute,
});

function AanbiedingenRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <AanbiedingenPage />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
