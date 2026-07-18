import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { ContactPage } from "@/components/site/contact/ContactPage";

const title = "Contact · Keuken-Centrum Utrecht | Zonnebaan 8";
const description =
  "Neem contact op met Keuken-Centrum Utrecht. Bel 030 241 5122, mail info@keuken-centrum.nl of bezoek onze showroom op Zonnebaan 8, 3542 EC Utrecht.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <ContactPage />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
