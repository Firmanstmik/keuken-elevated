import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ShowroomKeukensPage } from "@/components/site/contact/ShowroomKeukensPage";
import { showroomKeukens } from "@/lib/showroom-keukens";

export const Route = createFileRoute("/showroom-keukens")({
  head: () => ({
    meta: [
      { title: showroomKeukens.meta.title },
      { name: "description", content: showroomKeukens.meta.description },
      { property: "og:title", content: showroomKeukens.meta.title },
      { property: "og:description", content: showroomKeukens.meta.description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/showroom-keukens" }],
  }),
  component: ShowroomKeukensRoute,
});

function ShowroomKeukensRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ShowroomKeukensPage />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
