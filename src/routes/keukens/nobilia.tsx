import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { nobiliaPage } from "@/lib/brand-pages/nobilia";
import nobiliaLogo from "@/assets/Nobilia_Logo.webp";

export const Route = createFileRoute("/keukens/nobilia")({
  head: () => ({
    meta: [
      { title: nobiliaPage.meta.title },
      { name: "description", content: nobiliaPage.meta.description },
      { property: "og:title", content: nobiliaPage.meta.title },
      { property: "og:description", content: nobiliaPage.meta.description },
      { property: "og:image", content: nobiliaPage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens/nobilia" }],
  }),
  component: NobiliaRoute,
});

function NobiliaRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={nobiliaPage} logoSrc={nobiliaLogo} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
