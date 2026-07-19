import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BrandPage } from "@/components/site/brand-pages/BrandPage";
import { cucinessePage } from "@/lib/brand-pages/cucinesse";
import cucinesseLogo from "@/assets/Cucinesse_Logo_Official.png";

export const Route = createFileRoute("/keukens/cucinesse")({
  head: () => ({
    meta: [
      { title: cucinessePage.meta.title },
      { name: "description", content: cucinessePage.meta.description },
      { property: "og:title", content: cucinessePage.meta.title },
      { property: "og:description", content: cucinessePage.meta.description },
      { property: "og:image", content: cucinessePage.hero.image },
    ],
    links: [{ rel: "canonical", href: "/keukens/cucinesse" }],
  }),
  component: CucinesseRoute,
});

function CucinesseRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <BrandPage data={cucinessePage} logoSrc={cucinesseLogo} />
      <Footer />
    </main>
  );
}
