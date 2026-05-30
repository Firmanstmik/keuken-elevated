import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Collections } from "@/components/site/Collections";
import { Configurator } from "@/components/site/Configurator";
import { Craft } from "@/components/site/Craft";
import { Process } from "@/components/site/Process";
import { Showroom } from "@/components/site/Showroom";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keuken-Centrum · Premium Architectural Kitchens · Utrecht" },
      {
        name: "description",
        content:
          "Premium Dutch kitchens crafted with European precision. Leicht, Nobilia, Gaggenau and more — designed in Utrecht since 1978.",
      },
      { property: "og:title", content: "Keuken-Centrum · Premium Architectural Kitchens" },
      {
        property: "og:description",
        content: "European kitchen atelier in Utrecht. Architectural design, German precision, timeless craft.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory text-foreground">
      <Nav />
      <Hero />
      <Brands />
      <Collections />
      <Configurator />
      <Craft />
      <Process />
      <Showroom />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
