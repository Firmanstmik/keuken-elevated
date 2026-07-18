import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { leichtPage } from "@/lib/brand-pages/leicht";
import leichtLogo from "@/assets/Leicht_Logo.webp";

export const Route = createFileRoute("/keukens/leicht/")({
  head: () => ({
    meta: [
      { title: leichtPage.meta.title },
      { name: "description", content: leichtPage.meta.description },
      { property: "og:title", content: leichtPage.meta.title },
      { property: "og:description", content: leichtPage.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: leichtPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens/leicht" }],
  }),
  component: LeichtRoute,
});

function LeichtRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={leichtPage} logoSrc={leichtLogo} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
