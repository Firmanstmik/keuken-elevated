import { createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyConversionBar } from "@/components/site/StickyConversionBar";
import { LeichtSeriesPage } from "@/components/site/brand-pages/LeichtSeriesPage";
import { leichtSeriesPages } from "@/lib/brand-pages/leicht-series";

export const Route = createFileRoute("/keukens/leicht/$slug")({
  loader: ({ params }) => {
    const series = leichtSeriesPages[params.slug];
    if (!series) throw notFound();
    return series;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.name ?? "Leicht"} · Keuken-Centrum Utrecht`,
      },
      {
        name: "description",
        content:
          loaderData?.description[0] ??
          "Ontdek deze Leicht serie bij Keuken-Centrum Utrecht — officiële dealer.",
      },
      { property: "og:image", content: loaderData?.heroImage },
    ],
  }),
  component: LeichtSeriesRoute,
});

function LeichtSeriesRoute() {
  const series = Route.useLoaderData();
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <LeichtSeriesPage series={series} />
      <Footer />
      <StickyConversionBar />
    </main>
  );
}
