import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { zampieriPage } from "@/lib/brand-pages/zampieri";
import zampieriLogo from "@/assets/Zampieri_Logo.webp";

export const Route = createFileRoute("/keukens/zampieri")({
  head: () => ({
    meta: [
      { title: zampieriPage.meta.title },
      { name: "description", content: zampieriPage.meta.description },
      { property: "og:title", content: zampieriPage.meta.title },
      { property: "og:description", content: zampieriPage.meta.description },
      { property: "og:image", content: zampieriPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens/zampieri" }],
  }),
  component: ZampieriRoute,
});

function ZampieriRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={zampieriPage} logoSrc={zampieriLogo} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
