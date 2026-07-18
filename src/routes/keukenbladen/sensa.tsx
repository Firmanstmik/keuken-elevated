import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { sensaPage } from "@/lib/worktop-pages/worktops";

export const Route = createFileRoute("/keukenbladen/sensa")({
  head: () => ({
    meta: [
      { title: sensaPage.meta.title },
      { name: "description", content: sensaPage.meta.description },
      { property: "og:title", content: sensaPage.meta.title },
      { property: "og:description", content: sensaPage.meta.description },
      { property: "og:image", content: sensaPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukenbladen/sensa" }],
  }),
  component: SensaRoute,
});

function SensaRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={sensaPage} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
