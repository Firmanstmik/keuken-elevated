import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Experience } from "@/components/site/Experience";
import { ShowroomJourneySection, WhyWithUsSection } from "@/components/site/MasterJourneySections";
import { Process } from "@/components/site/Process";
import { PremiumShowcase } from "@/components/site/PremiumShowcase";
import { Collections } from "@/components/site/Collections";
import { Testimonials } from "@/components/site/Testimonials";
import { ConsultationSection } from "@/components/site/ConsultationSection";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { kc } from "@/lib/kc-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keuken-Centrum Utrecht · De Premium Keukenbestemming van Utrecht" },
      {
        name: "description",
        content:
          "Premium German and Italian kitchen showroom in Utrecht sinds 1978. Persoonlijk showroomadvies, geselecteerde topmerken en een verfijnde keukenervaring.",
      },
      { property: "og:title", content: "Keuken-Centrum Utrecht · Premium Keukenshowroom" },
      { property: "og:description", content: "De premium keukenbestemming van Utrecht voor German precision, Italian elegance en persoonlijk showroomadvies." },
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
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      {/* 1. HERO — Emotional impact */}
      <Hero />

      {/* 2. BRANDS — Instant credibility: "We work with Europe's top brands" */}
      <Brands />

      {/* 3. WHY CHOOSE US — Build trust & authority */}
      <WhyWithUsSection />

      {/* 4. PREMIUM SHOWROOM — Luxury centerpiece, dark prestige */}
      <PremiumShowcase />

      {/* 5. DIGITAL JOURNEY — "Een showroom die naar u toe komt" */}
      <ShowroomJourneySection />

      {/* 6. KITCHEN INSPIRATION — "What kitchens can I create?" */}
      <Experience />

      {/* 7. STYLE WORLDS — Modern, Klassiek, Landelijk, Industrieel */}
      <Collections />

      {/* 8. CONFIGURATOR PROCESS — How the journey works */}
      <Process />

      {/* 9. CONFIGURATOR CTA — Start your dream kitchen */}
      <FinalCta />

      {/* 10. TESTIMONIALS — Social proof after configurator introduction */}
      <Testimonials />

      {/* 11. CONSULTATION — Final lead generation */}
      <ConsultationSection />

      <Footer />
      <StickyConversionBar />
    </main>
  );
}
