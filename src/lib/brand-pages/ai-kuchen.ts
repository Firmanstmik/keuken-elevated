import aiKuchenLogo from "@/assets/aiKuchen_Logo.webp";
/**
 * Original remotes under keuken-centrum.nl/wp-content/uploads/AI-KUCHEN-… return HTTP 404.
 * Recovered authentic showroom photos from the live keuken-centrum.nl SPA (__l5e assets):
 * - AI-KUCHEN-Hacker-keukens-utrecht2-scaled.webp
 * - AI-KUCHEN-Hacker-keukens-utrecht-Keuken-scaled.webp
 */
import aiKuchenShowroom1 from "@/assets/brands/aikuchen-showroom-1.webp";
import aiKuchenShowroom2 from "@/assets/brands/aikuchen-showroom-2.webp";

export const aiKuchenPage = {
  id: "ai-kuchen",
  name: "AI Küchen",
  legacyName: "Häcker",
  country: "Duitsland",
  meta: {
    title: "AI Küchen keukens · Häcker bij Keuken-Centrum Utrecht",
    description:
      "Ontdek AI Küchen (Häcker) bij Keuken-Centrum Utrecht. Ambitieuze systeemkeukens met Duitse precisie, maatwerk en de scherpste prijs via directe fabrieksrelatie.",
  },
  logo: aiKuchenLogo,
  hero: {
    image: aiKuchenShowroom1,
    eyebrow: "Duitse systeemkeukens",
    title: "AI Küchen",
    highlight: "Design dat leeft.",
    subtitle:
      "Een ambitieus, designgericht systeemkeukenconcept dat creatief doordacht, technisch verfijnd en volledig op maat samen te stellen is.",
    cta: {
      primary: "Bezoek showroom",
      primaryHref: "/#consultation",
      secondary: "Bel direct",
      secondaryHref: "tel:+31302415122",
    },
    badges: [
      { value: "ISO 9001", label: "Kwaliteitsnorm" },
      { value: "6 tot 8 wkn", label: "Levertijd" },
      { value: "10 jr", label: "Garantie keuken" },
    ],
  },
  intro: {
    eyebrow: "Het merk",
    title: "Moderne architectuur met innovatie in elk detail",
    paragraphs: [
      "Een ambitieus, designgerichte systeemkeukenconcept. Dat zijn de eigenschappen van de AI Küchen keukens. Een keukenontwerp waarbij het design creatief én goed doordacht is.",
      "Door de speciale indeling van vormen die AI Küchen toepast, krijgen alle vormen de vrijheid om geproduceerd te worden. Daardoor kunnen ze gemakkelijk belast worden en bevatten de meeste ook uittrekbare elementen of bijzondere schap- en kastoplossingen, zodat u alles uit uw opbergruimte haalt.",
      "De AI Küchen keukens voldoen aan de hoogste eisen. Een bijzondere combinatie van moderne architectuur die rekening houdt met innovatie, duurzaamheid en functionaliteit.",
    ],
    image: aiKuchenShowroom2,
  },
  pillars: [
    {
      title: "AI Küchen",
      description:
        "AI Küchen produceert moderne inbouwkeukens die voldoen aan de hoogste eisen op het gebied van kwaliteit, functionaliteit, duurzaamheid en design.",
      icon: "sparkles" as const,
    },
    {
      title: "AI Küchen Keukens",
      description:
        "Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.",
      icon: "layers" as const,
    },
    {
      title: "Keukens",
      description:
        "Trendy decors, een grote variatie aan ontwerpen, unieke doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.",
      icon: "grid" as const,
    },
  ],
  partnership: {
    eyebrow: "Direct van fabrikant",
    title: "AI Küchen keukens voor de scherpste prijs",
    body: "Ben je op zoek naar een keuken van AI Küchen? AI Küchen staat bekend als het ambitieuze, designgerichte systeemkeukenconcept dat voldoet aan de hoogste eisen. Keuken-Centrum verkoopt al jaren AI Küchen keukens. Omdat wij direct met de fabrikant samenwerken, leveren wij de beste prijzen zonder concessies aan kwaliteit.",
    highlights: [
      "Betrouwbare service en gedreven procesorganisatie",
      "Snelle en flexibele leveringstermijnen",
      "Directe samenwerking met de fabrikant",
      "Wij verslaan vrijwel elke offerte",
    ],
  },
  gallery: [
    {
      src: aiKuchenShowroom1,
      title: "Moderne lijnvoering",
      tag: "Showroom Utrecht",
      span: "large" as const,
    },
    {
      src: aiKuchenShowroom2,
      title: "Op maat samengesteld",
      tag: "Maatwerk",
      span: "medium" as const,
    },
    {
      src: aiKuchenShowroom2,
      title: "Detail & afwerking",
      tag: "Kwaliteit",
      span: "medium" as const,
    },
    {
      src: aiKuchenShowroom1,
      title: "Systeemoplossingen",
      tag: "Functionaliteit",
      span: "wide" as const,
    },
  ],
  custom: {
    eyebrow: "Op maat",
    title: "Écht alles is mogelijk",
    body: "Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassieke keuken: bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.",
    secondary:
      "Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee. Compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.",
  },
  faq: [
    {
      q: "Hoe kan ik een afspraak maken?",
      a: "Op onze contactpagina kunt u uw gegevens achterlaten en vermelden wanneer u wilt komen. Een medewerker neemt zo snel mogelijk contact op. U kunt ons ook bellen via 030 241 5122.",
    },
    {
      q: "Hoe kan Keuken-Centrum kwaliteit garanderen?",
      a: "Wij werken alleen met geselecteerde fabrikanten. Onze Duitse keukenfabrieken beschikken over moderne technologie en produceren volgens de ISO 9001:2000-norm, met gegarandeerde klantgerichtheid en proceskwaliteit.",
    },
    {
      q: "Wat kost een nieuwe keuken?",
      a: "De prijs hangt af van smaak, ruimte, gebruiksgemak, merk- en materiaalkeuze. Iedere keuken is anders. Wij nodigen u graag uit voor een vrijblijvend gesprek in onze showroom voor een gerichte schatting of concrete opgave.",
    },
    {
      q: "Wat is de levertijd?",
      a: "De levertijd hangt af van fabrikant, apparatuur en werkbladen. In de meeste gevallen leveren wij binnen 6 tot 8 weken.",
    },
    {
      q: "Hoe zit het met de garantie?",
      a: "Keuken-Centrum is CBW-erkend (2 jaar via CBW). Daarnaast bieden wij kosteloos tien jaar productgarantie op keukenmeubelen en werkbladen.",
    },
    {
      q: "Hoe kan Keuken-Centrum de beste prijs bieden?",
      a: "Wij maken deel uit van een van de grootste inkooporganisaties van Europa. Heeft u al een offerte? Neem die mee. Wij bieden u vrijwel altijd een betere prijs.",
    },
  ],
  advisors: [
    {
      name: "Hans",
      role: "Keukenadviseur",
      email: "hans@keuken-centrum.nl",
      bio: "Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen.",
    },
    {
      name: "Danny",
      role: "Keukenadviseur",
      email: "memis@keuken-centrum.nl",
      bio: "Samen maken we uw woonwensen zo concreet en helder mogelijk en passen daar de keuken op aan, zodat u nog jaren kunt genieten.",
    },
  ],
  showroomCta: {
    eyebrow: "In de showroom",
    title: "AI Küchen in het echt bekijken?",
    subtitle: "Meerdere modellen in onze showroom. Kom langs in Utrecht.",
    button: "Boek een afspraak",
    href: "/#consultation",
  },
} as const;
