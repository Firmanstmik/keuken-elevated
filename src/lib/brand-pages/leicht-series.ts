import { wp } from "./shared";

export type LeichtSeriesContent = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string[];
  heroImage: string;
  gallery: Array<{ src: string; title: string }>;
};

export const leichtSeriesPages: Record<string, LeichtSeriesContent> = {
  kyoto: {
    id: "kyoto",
    name: "Leicht Kyoto",
    slug: "kyoto",
    tagline: "Japandi calm meets Duitse precisie",
    description: [
      "Leicht Kyoto brengt rust, horizontale lijnen en warme materialen samen in een architectonische keuken. De serie is te zien in onze showroom in Utrecht — ideaal voor open woonkeukens met een serene, Japandi-geïnspireerde sfeer.",
      "Als officiële Leicht-dealer ontwerpen wij Kyoto volledig op maat: fronts, werkbladen, verlichting en opbergoplossingen worden afgestemd op uw woning, lichtinval en woonstijl.",
    ],
    heroImage: `${wp}/Leicht-Kyoto-showroom.webp`,
    gallery: [
      { src: `${wp}/Leicht-Kyoto-showroom.webp`, title: "Kyoto showroom" },
      { src: `${wp}/CM-1697-095-final_Koje-03.webp`, title: "Architecturale openheid" },
      { src: `${wp}/leicht_verve_820px_2.webp`, title: "Materiaal & detail" },
    ],
  },
  bossa: {
    id: "bossa",
    name: "Leicht Bossa",
    slug: "bossa",
    tagline: "Verticale structuur. Betonnen rust.",
    description: [
      "Leicht Bossa — inclusief Bossa Concrete — kenmerkt zich door krachtige verticale profilering en speelse teksturen. In onze showroom ervaart u hoe houtlook, betonlook en greeploze fronten samen een sculpturale keuken vormen.",
      "Van Bossa Concrete tot Bossa-E, KERA-E en BOSSA F 45c: de familie biedt talloze combinaties voor moderne, expressieve keukens met Duitse afwerkingskwaliteit.",
    ],
    heroImage: `${wp}/Leicht-Bossa-showroom--scaled.webp`,
    gallery: [
      { src: `${wp}/Leicht-Bossa-showroom--scaled.webp`, title: "Bossa showroom" },
      { src: `${wp}/BOSSA_dunkel_12.webp`, title: "Bossa donker" },
      { src: `${wp}/BOSSA_dunkel_7_Render.webp`, title: "Bossa render" },
      { src: `${wp}/01_c_Leicht.webp`, title: "BOSSA F 45c" },
    ],
  },
  "taj-mahal": {
    id: "taj-mahal",
    name: "Leicht Taj Mahal",
    slug: "taj-mahal",
    tagline: "Monumentaal design, elegante rust",
    description: [
      "Leicht Taj Mahal is een van de meest herkenbare showroomseries bij Keuken-Centrum Utrecht. Monumentale volumes, verfijnde materialen en een serene compositie geven de keuken een exclusieve allure.",
      "Onze adviseurs helpen u Taj Mahal te vertalen naar uw plattegrond — van eilandkeuken tot compacte L-opstelling — altijd met originele Leicht-componenten en de scherpste prijs via onze directe fabrieksrelatie.",
    ],
    heroImage: `${wp}/Leicht-keukens.webp`,
    gallery: [
      { src: `${wp}/Leicht-keukens.webp`, title: "Taj Mahal" },
      { src: `${wp}/219-213-269-M01-298-025-312-j18-2.webp`, title: "Leicht detail" },
      { src: `${wp}/713-269-M02-103-316-j19.webp`, title: "Leicht collectie" },
    ],
  },
  "ronde-wangen": {
    id: "ronde-wangen",
    name: "Leicht Ronde Wangen",
    slug: "ronde-wangen",
    tagline: "Zachte rondingen. Strakke techniek.",
    description: [
      "Leicht Ronde Wangen laat zien hoe architectuur en soft design samenkomen: afgeronde zijpanelen, vloeiende overgangen en hoogwaardige materialen zonder in te leveren op functionaliteit.",
      "Bekijk de serie in onze Utrechtse showroom en ontdek hoe ronde wangen eilandkeukens zachter, veiliger en visueel rijker maken — volledig configureerbaar binnen het Leicht-systeem.",
    ],
    heroImage: `${wp}/Ronde-wangen-Leicht-scaled.webp`,
    gallery: [
      { src: `${wp}/Ronde-wangen-Leicht-scaled.webp`, title: "Ronde wangen" },
      { src: `${wp}/BOSSA_dunkel_2-1.webp`, title: "Vorm & contrast" },
      { src: `${wp}/leicht_verve_820px_2.webp`, title: "Leicht afwerking" },
    ],
  },
};
