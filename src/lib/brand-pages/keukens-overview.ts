import type { BrandPageData } from "./types";
import { wp, sharedKitchenFaq, sharedAdvisors } from "./shared";

export type KeukensOverviewData = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    image: string;
    images: string[];
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  brands: Array<{
    id: string;
    name: string;
    country: string;
    tagline: string;
    description: string;
    image: string;
    href: string;
    logo?: string;
  }>;
  leichtNote: string;
  valueProps: Array<{ title: string; body: string }>;
  customNote: string[];
  faq: BrandPageData["faq"]["items"];
  advisors: BrandPageData["advisors"];
};

export const keukensOverview = {
  meta: {
    title: "Keukens · A-merk keukens bij Keuken-Centrum Utrecht",
    description:
      "Breed assortiment A-merk keukens van Leicht, Nobilia, AI Küchen, Zampieri en Cucinesse, met betaalbare prijzen, 3D-ontwerp en gegarandeerd de scherpste prijs in Utrecht.",
  },
  hero: {
    image: `${wp}/Schermafbeelding-2021-05-19-om-10.29.17.webp`,
    images: [
      `${wp}/Schermafbeelding-2021-05-19-om-10.29.17.webp`,
      `${wp}/713-269-M02-103-316-j19.webp`,
      `${wp}/Schermafbeelding-2021-05-17-om-21.06.15.webp`,
    ],
    eyebrow: "A-merk keukens",
    title: "Keukens",
    highlight: "Kom langs.",
    subtitle:
      "Leicht. Nobilia. Zampieri. AI Küchen. Cucinesse. Een breed assortiment A-merk keukens en apparatuur tegen betaalbare prijzen, volledig op maat ontworpen met onze 3D-software.",
  },
  intro: {
    eyebrow: "Ons assortiment",
    title: "Van wens tot droomkeuken, stap voor stap",
    paragraphs: [
      "Wij bieden een breed assortiment A-merk keukens en apparatuur tegen betaalbare prijzen. Een klant vertelt ons eerst wat voor soort keuken ze willen, of wij achterhalen met het stellen van vragen hun eisen en wensen. We leggen de mogelijkheden en nieuwste trends uit.",
      "Vervolgens komt de gewenste en noodzakelijke inbouwapparatuur en de grote variatie aan merken die wij daarin bieden aan bod. Daarna gaan we nog dieper in op de gewenste keuken: welk type werkblad geschikt is, de overige accessoires, levertijden en tips voor de montage.",
      "Nostalgisch, landelijk, modern of trendy design: op basis van het type keuken dat u wenst en de beschikbare ruimte adviseren wij over de meest handige opstelling. Vervolgens ontwerpen wij de keuken met onze 3D-software geheel naar wens, stap voor stap.",
    ],
  },
  brands: [
    {
      id: "ai-kuchen",
      name: "AI Küchen",
      country: "Duitsland",
      tagline: "Häcker · modern inbouwkeuken",
      description:
        "Häcker produceert moderne inbouwkeukens die voldoen aan de hoogste eisen op het gebied van kwaliteit, functionaliteit, duurzaamheid en design.",
      image: `${wp}/AI-KUCHEN-Hacker-keukens-utrecht0-scaled.webp`,
      href: "/keukens/ai-kuchen",
      logo: `${wp}/Ai-kuchen-keukens-logo-blauw.webp`,
    },
    {
      id: "leicht",
      name: "Leicht",
      country: "Duitsland",
      tagline: "Ruimten van hoogste individualiteit",
      description:
        "LEICHT keukens creëren ruimten van hoogste individualiteit, waarin het waarlijk een genoegen is om bij het koken en een goed gesprek veel tijd met het gezin, familie en vrienden door te brengen.",
      image: `${wp}/CM-1697-095-final_Koje-03.webp`,
      href: "/keukens/leicht",
      logo: `${wp}/1200px-Leicht_K%C3%BCchen_logo.svg-1024x325.webp`,
    },
    {
      id: "nobilia",
      name: "Nobilia",
      country: "Duitsland",
      tagline: "Trendy decors & Duitse degelijkheid",
      description:
        "Met name op trendy decors, een grote variatie aan ontwerpen, een unieke en doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.",
      image: `${wp}/453_flash.webp`,
      href: "/keukens/nobilia",
      logo: `${wp}/Logo-524-112-1.webp`,
    },
    {
      id: "zampieri",
      name: "Zampieri",
      country: "Italië",
      tagline: "Made in Italy · keukens & kasten",
      description:
        "Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.",
      image: `${wp}/cucina3.webp`,
      href: "/keukens/zampieri",
      logo: `${wp}/download-1.webp`,
    },
    {
      id: "cucinesse",
      name: "Cucinesse",
      country: "Italië",
      tagline: "Modulaire keukens sinds 1979",
      description:
        "Modulaire keukens met oneindig veel oplossingen: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, aangevuld met bijpassende livingmeubels op maat.",
      image: `${wp}/cucinesse-cucina-LAB-3-3.webp`,
      href: "/keukens/cucinesse",
      logo: `${wp}/cucinesse-logo.webp`,
    },
  ],
  leichtNote:
    "Hoge kwaliteit wat het product en de service betreft staat op de voorgrond. LEICHT keukens creëren ruimten van hoogste individualiteit, waarin het waarlijk een genoegen is om bij het koken en een goed gesprek veel tijd met het gezin, familie en vrienden door te brengen. Leefruimten die de luxe van welbevinden scheppen en daarmee ook een belangrijke meerwaarde. Bij ons kunt u rekenen op vakbekwaam advies en een deskundig antwoord op al uw vragen.",
  valueProps: [
    {
      title: "Écht alles is mogelijk",
      body: "Een uitdagende moderne designkeuken? Een robuuste industrielook? Of de nostalgische intimiteit van een landelijk klassieke keuken? Bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.",
    },
    {
      title: "Wij verslaan elke prijs",
      body: "Welke keuken u ook kiest, u wilt er niet te veel voor betalen. En waarom zou u? Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee, compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.",
    },
  ],
  customNote: [
    "Een keuken kan in vele verschillende stijlen worden uitgevoerd. We kennen keukens met een landelijke of klassieke uitstraling, maar ook in een moderne stijl of luxe uitvoering met kookeiland. Sommige trends zijn blijvend. Zo zien we steeds vaker een combinatie van stijlen, zoals een 'moderne, landelijke keuken' of 'strakke, stoere keuken'. Bij deze keukens is de grens tussen twee stijlen vervaagd.",
    "Wat uw stijl ook is, bij Keuken-Centrum hebben wij altijd de oplossing. Wij kunnen uw keuken geheel op maat maken en met onze vakkennis adviseren wij u over de combinaties en materialen die mogelijk zijn. Ook de keukenapparatuur en de plaatsing ervan is geheel afhankelijk van uw wensen, van een luxe stoomoven of wijnkoeler tot een combi-oven of extra breed gasfornuis.",
  ],
  faq: sharedKitchenFaq,
  advisors: [
    ...sharedAdvisors,
    {
      name: "Frank",
      role: "Apparatuuradviseur",
      email: "frank@keuken-centrum.nl",
      bio: "Ik ben een vakidioot, liefhebber van A-merken apparatuur. Ik hou van mijn werk en vind het leuk om anderen te laten zien wat er allemaal mogelijk is met de nieuwste gadgets op de markt. Kom langs en laat mij u inspireren.",
    },
  ],
} as const satisfies KeukensOverviewData;
