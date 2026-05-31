import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Collections } from "@/components/site/Collections";
import { Configurator } from "@/components/site/Configurator";
import { Craft } from "@/components/site/Craft";
import { Process } from "@/components/site/Process";
import { Showroom } from "@/components/site/Showroom";
import { Offers } from "@/components/site/Offers";
import { Testimonials } from "@/components/site/Testimonials";
import { Team } from "@/components/site/Team";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { kc } from "@/lib/kc-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keuken-Centrum Utrecht · Premium Keukens · Leicht, Nobilia, Zampieri" },
      {
        name: "description",
        content:
          "Premium keukenshowroom in Utrecht sinds 1978. Leicht, Nobilia, Zampieri, Cucinesse, AI Küchen. A-merken apparatuur: Gaggenau, BORA, Quooker, Siemens, Miele.",
      },
      { property: "og:title", content: "Keuken-Centrum Utrecht · Premium Keukenshowroom" },
      { property: "og:description", content: "Europese topmerken keukens in Utrecht. Persoonlijk advies, 3D-ontwerp en vakkundige installatie." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: kc.hero.main },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: kc.hero.main },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: kc.brandName,
          image: kc.hero.main,
          telephone: kc.contact.phone,
          email: kc.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: kc.contact.address,
            postalCode: "3542 EC",
            addressLocality: "Utrecht",
            addressCountry: "NL",
          },
          openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
          url: "https://keuken-centrum.nl",
          priceRange: "€€€",
          brand: kc.kitchenBrands.map((b) => ({ "@type": "Brand", name: b.name })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink text-ivory">
      <Nav />
      <Hero />
      <Brands />
      <Collections />
      <Configurator />
      <Craft />
      <Offers />
      <Process />
      <Showroom />
      <Testimonials />
      <Team />
      <FinalCta />
      <Footer />
    </main>
  );
}
