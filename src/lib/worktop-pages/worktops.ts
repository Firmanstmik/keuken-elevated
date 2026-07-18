import type { BrandPageData } from "@/lib/brand-pages/types";
import {
  defaultPartnershipStats,
  sharedAdvisors,
  sharedKitchenFaq,
  wp,
} from "@/lib/brand-pages/shared";

export const worktopCustomBlock: BrandPageData["custom"] = {
  eyebrow: "Op maat",
  titleBefore: "Écht",
  titleHighlight: "alles",
  titleAfter: "is mogelijk",
  body: "Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassiek werkblad — bij Keuken-Centrum Utrecht koopt u het keukenwerkblad van uw dromen voor een verrassend betaalbare prijs.",
  secondary:
    "Graniet, composiet, hardsteen, keramiek, betonlook of marmerlook: wij adviseren over materiaal, kleur, dikte, formaat, randafwerking en praktische eigenschappen zodat het blad perfect past bij uw keukenstijl.",
};

export const worktopFaq: BrandPageData["faq"]["items"] = [
  ...sharedKitchenFaq,
  {
    q: "Welke keukenbladen kan Keuken-Centrum leveren?",
    a: "Keuken-Centrum levert onder andere (natuur)stenen, staal, graniet, composiet, hardsteen, keramiek, marmerlook en betonlook keukenwerkbladen in uiteenlopende kleuren, diktes, formaten en randafwerkingen.",
  },
  {
    q: "Kan mijn keukenblad volledig op maat worden gemaakt?",
    a: "Ja. Wij maken uw keukenblad op maat en adviseren over materiaalkeuze, spoelbakken, randafwerking en combinaties die passen bij uw keuken, gebruik en budget.",
  },
];

export const worktopOverview = {
  meta: {
    title: "Keukenbladen · Werkbladen op maat | Keuken-Centrum Utrecht",
    description:
      "Ontdek keukenbladen van Silestone, Dekton, Neolith en Sensa bij Keuken-Centrum Utrecht. Natuursteen, composiet, keramiek, betonlook en marmerlook op maat.",
  },
  hero: {
    image: `${wp}/jkkj.webp`,
    eyebrow: "Keukenbladen op maat",
    title: "Keukenbladen",
    highlight: "die de toon zetten.",
    subtitle:
      "Het aanrechtblad is praktisch én bepalend voor de uitstraling van uw keuken. Wij leveren (natuur)stenen en staal keukenwerkbladen in elk mogelijk design, formaat, kleur, dikte en randafwerking.",
    badges: [
      { value: "100%", label: "Op maat" },
      { value: "50+", label: "Kleuren" },
      { value: "Beste", label: "Prijs" },
    ],
  },
  intro: {
    eyebrow: "Keuken-Bladen",
    title: "Materiaal, kleur, dikte en randafwerking in balans",
    paragraphs: [
      "Bent u op zoek naar een nieuw keukenwerkblad? Keuken-Centrum is gespecialiseerd in het leveren van (natuur)stenen en staal keukenwerkbladen in elk mogelijk design en formaat.",
      "Het aanrechtblad is een essentieel onderdeel van de keuken. Ten eerste vanuit praktisch oogpunt, omdat een aanrecht met name dient voor de bereiding van eten. Daarnaast is de uitstraling minstens zo belangrijk: hiermee zet u de toon voor uw keukenstijl.",
      "Wij hebben keukenbladen in alle soorten en maten, variërend in materiaal, kleur, dikte, formaat en randafwerking. Onze adviseurs geven tips en inspiratie, zodat u precies weet waar u op moet letten bij het kiezen van uw nieuwe keukenblad.",
    ],
  },
  materials: [
    {
      id: "silestone",
      name: "Silestone",
      country: "Cosentino",
      tagline: "Kwartscomposiet · vlek- en krasbestendig",
      description:
        "Silestone is een vrijwel niet-poreus oppervlak dat bestand is tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap. Het natuurlijke kwarts zorgt voor hoge krasbestendigheid en vertrouwen in dagelijks gebruik.",
      image: `${wp}/Silestone-Kitchen-HD-Desert-Silver.webp`,
      href: "/keukenbladen/silestone",
    },
    {
      id: "dekton",
      name: "Dekton",
      country: "Cosentino",
      tagline: "Ultracompact · hitte- en krasbestendig",
      description:
        "Dekton is een ultracompact materiaal, ontwikkeld door Cosentino. Onder hoge druk en temperatuur ontstaat een sterk oppervlak met natuursteen- en betonlooks, bestand tegen krassen, vlekken en hoge temperaturen.",
      image: `${wp}/Dekton-Taga-xgloss-MOW-2019.webp`,
      href: "/keukenbladen/dekton",
    },
    {
      id: "neolith",
      name: "Neolith",
      country: "Kitchen Lounge",
      tagline: "Keramiek · design en robuustheid",
      description:
        "Neolith combineert design en functionaliteit, elegantie en robuustheid. Het oppervlak is extreem bestand tegen krassen, hoge temperaturen, chemicaliën en uv-stralen, met een porositeit van bijna 0%.",
      image: `${wp}/Neolith_blog_febrero04.webp`,
      href: "/keukenbladen/neolith",
    },
    {
      id: "sensa",
      name: "Sensa",
      country: "Cosentino",
      tagline: "Natuursteen · 15 jaar bescherming",
      description:
        "Sensa by Cosentino kwartsiet en graniet zijn behandeld met een anti-vlekbehandeling. Zo geniet u van natuurlijke schoonheid, duurzaamheid en weerstand zonder zorgen over vlekken.",
      image: `${wp}/Sensa-Kitchen-Graphite-Grey-lr.webp`,
      href: "/keukenbladen/sensa",
      logo: `${wp}/Sensa-Logo.webp`,
    },
  ],
  styles: [
    {
      title: "Marmer",
      body: "Uw marmer keukenblad in alle mogelijke kleuren en designs. Geef uw keuken een exclusieve, klassieke uitstraling.",
      image: `${wp}/Calacatta-gold-silestone-composiet-keukenblad-Eternal-collectie-Stonecenter-01.webp`,
    },
    {
      title: "Betonlook",
      body: "Een betonnen aanrechtblad heeft een stoere uitstraling. Vooral voor industriële keukens is betonlook een krachtige toevoeging.",
      image: `${wp}/Dekton-Laos-scaled.webp`,
    },
    {
      title: "Keramiek",
      body: "Keramiek is hittebestendig, vlekbestendig en krasbestendig. Bladen vanaf 12 mm zijn betaalbaarder dan ooit, met persoonlijke begeleiding.",
      image: `${wp}/Neolith-Countertops-Gallery-2019-53.webp`,
    },
  ],
  customNote: [
    "Graniet, composiet en hardstenen keukenbladen geven uw keuken een prachtige en unieke uitstraling. Keuken-Centrum beschikt over een zeer gevarieerd assortiment.",
    "Graniet keukenbladen zijn beschikbaar in diverse maten, met of zonder natuursteen spoelbak. Wij maken uw hardstenen keukenblad voor u op maat en adviseren over de juiste afwerkingstechnieken.",
    "Composiet keukenbladen combineren gemakkelijk met elke stijl keuken die u maar wenst.",
  ],
  faq: worktopFaq,
  advisors: sharedAdvisors,
} as const;

const baseWorktopStats: BrandPageData["partnership"]["stats"] = [
  { icon: "factory", label: "Materiaaladvies", value: "Op maat" },
  { icon: "shield", label: "CBW zekerheid", value: "Garantie" },
  { icon: "clock", label: "Heldere planning", value: "Advies" },
  { icon: "award", label: "Geselecteerde merken", value: "Kwaliteit" },
];

export const silestonePage = {
  id: "silestone",
  name: "Silestone",
  country: "Cosentino",
  meta: {
    title: "Silestone keukenbladen · Keuken-Centrum Utrecht",
    description:
      "Silestone werkbladen op maat bij Keuken-Centrum Utrecht. Kwartscomposiet, vrijwel niet-poreus, vlekbestendig en krasbestendig.",
  },
  hero: {
    image: `${wp}/Silestone-Kitchen-HD-Desert-Silver.webp`,
    eyebrow: "Silestone werkbladen",
    title: "Silestone",
    highlight: "kwarts met karakter.",
    subtitle:
      "Een vrijwel niet-poreus oppervlak dat bestand is tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap — met de kracht en krasbestendigheid van natuurlijk kwarts.",
    cta: { primary: "Bezoek showroom", primaryHref: "/#consultation", secondary: "Bel direct", secondaryHref: "tel:+31302415122" },
    badges: [
      { value: "Quartz", label: "Natuurlijk kwarts" },
      { value: "Vlek", label: "Bestendig" },
      { value: "Op maat", label: "Randafwerking" },
    ],
  },
  intro: {
    eyebrow: "Keuken-Bladen",
    titleBefore: "Silestone voor ",
    titleHighlight: "dagelijks",
    titleAfter: " gebruik",
    paragraphs: [
      "Bent u op zoek naar een nieuw keukenwerkblad van Silestone? Keuken-Centrum levert Silestone werkbladen in elk mogelijk design en formaat.",
      "Het aanrechtblad is een essentieel onderdeel van de keuken: praktisch voor de bereiding van eten en visueel bepalend voor de keukenstijl.",
      "Silestone is verkrijgbaar in uiteenlopende kleuren, diktes, formaten en randafwerkingen. Wij helpen u kiezen wat past bij uw keuken, smaak en budget.",
    ],
    image: `${wp}/Calacatta-gold-silestone-composiet-keukenblad-Eternal-collectie-Stonecenter-01.webp`,
    signature: [
      { value: "Quartz", label: "Materiaal" },
      { value: "Vlek", label: "Bestendig" },
      { value: "Maat", label: "Gemaakt" },
    ],
    roundel: "SILESTONE · COSENTINO · KWARTSCOMPOSIET ·",
    caption: { tag: "Cosentino", title: "Vlekbestendig, schokbestendig en krasbestendig" },
  },
  pillars: {
    eyebrow: "Eigenschappen",
    titleBefore: "Rustig mooi, ",
    titleHighlight: "sterk",
    titleAfter: " in gebruik",
    lead: "Silestone combineert esthetiek met praktische zekerheid voor intensief dagelijks keukengebruik.",
    items: [
      { title: "Vrijwel niet-poreus", description: "Bestand tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap.", icon: "shield", image: `${wp}/big-kitchen-silestone.webp` },
      { title: "Schokbestendig", description: "De hoge schokbestendigheid geeft vertrouwen bij pannen, dienbladen en dagelijks gebruik.", icon: "award", image: `${wp}/silestone-arden-blue-voorbeeld-1.webp` },
      { title: "Krasbestendig", description: "Omdat Silestone vervaardigd is uit natuurlijk kwarts, is het een zeer krasbestendig materiaal.", icon: "sparkles", image: `${wp}/Silestone-Kitchen-HD-Desert-Silver.webp` },
    ],
  },
  partnership: {
    ghost: "Silestone",
    eyebrow: "Beste prijs",
    titleBefore: "Silestone keukenbladen voor de ",
    titleHighlight: "scherpste prijs",
    body: "Wij leveren Silestone op maat en adviseren over kleur, dikte, formaat en randafwerking. Heeft u al een offerte? Neem deze mee — wij kijken graag hoe wij een betere prijs kunnen bieden.",
    highlights: ["Vrijwel niet-poreus oppervlak", "Bestand tegen koffie, wijn en citroensap", "Hoge schok- en krasbestendigheid", "Advies in materiaal, kleur en afwerking"],
    note: "Silestone live bekijken? Kom langs in onze showroom in Utrecht.",
    stats: baseWorktopStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Silestone in ",
    titleHighlight: "beeld",
    lead: "Van rustige marmerlook tot karaktervolle kleuren — Silestone zet de toon voor uw keukenstijl.",
    items: [
      { src: `${wp}/Silestone-Kitchen-HD-Desert-Silver.webp`, title: "Desert Silver", tag: "Silestone", span: "large" },
      { src: `${wp}/Calacatta-gold-silestone-composiet-keukenblad-Eternal-collectie-Stonecenter-01.webp`, title: "Calacatta Gold", tag: "Marmerlook", span: "medium" },
      { src: `${wp}/big-kitchen-silestone.webp`, title: "Royale keuken", tag: "Cosentino", span: "medium" },
      { src: `${wp}/silestone-arden-blue-voorbeeld-1.webp`, title: "Arden Blue", tag: "Kleur", span: "wide" },
    ],
    cta: { titleBefore: "Silestone ", titleHighlight: "ervaren?", body: "Bekijk kleuren en afwerkingen in onze showroom.", label: "Boek een afspraak", href: "/#consultation" },
  },
  custom: worktopCustomBlock,
  faq: { titleBefore: "Veel ", titleHighlight: "gestelde vragen", items: worktopFaq },
  advisors: sharedAdvisors,
  showroomCta: { eyebrow: "Showroom Utrecht", titleBefore: "Silestone ", titleHighlight: "live", titleAfter: " bekijken?", subtitle: "Neem uw wensen mee — wij adviseren over kleur, dikte, rand en prijs.", button: "Boek een afspraak", href: "/#consultation" },
} as const satisfies BrandPageData;

export const dektonPage = {
  id: "dekton",
  name: "Dekton",
  country: "Cosentino",
  meta: {
    title: "Dekton keukenbladen · Keuken-Centrum Utrecht",
    description:
      "Dekton werkbladen op maat: ultracompact, krasbestendig, vlekbestendig en bestand tegen hoge temperaturen.",
  },
  logo: `${wp}/Dekton-Logo-Ampquartz.webp`,
  hero: {
    image: `${wp}/Dekton-Taga-xgloss-MOW-2019.webp`,
    eyebrow: "Dekton werkbladen",
    title: "Dekton",
    highlight: "ultracompact design.",
    subtitle:
      "Een sterk materiaal van Cosentino, verwant aan keramiek en geproduceerd met technieken uit de glas- en composietindustrie onder hoge druk en temperatuur.",
    cta: { primary: "Bezoek showroom", primaryHref: "/#consultation", secondary: "Bel direct", secondaryHref: "tel:+31302415122" },
    badges: [
      { value: "Ultra", label: "Compact" },
      { value: "Hitte", label: "Bestendig" },
      { value: "Kras", label: "Bestendig" },
    ],
  },
  intro: {
    eyebrow: "Keuken-Bladen",
    titleBefore: "Dekton: ",
    titleHighlight: "keramische",
    titleAfter: " kracht",
    paragraphs: [
      "Dekton is ontwikkeld door Cosentino, bekend van composietmerk Silestone. Het kleurenprogramma groeit en omvat egale kleuren, natuursteenlooks en betonlooks.",
      "Dekton is sterk verwant aan keramiek. Door technieken en ingrediënten uit de glas- en composietindustrie ontstaat onder hoge druk en temperatuur een ultracompacte massa.",
      "Wij leveren Dekton keukenbladen in verschillende designs, formaten, diktes en randafwerkingen — altijd passend bij uw keukenstijl.",
    ],
    image: `${wp}/ed83ddc34ftieleman_keukens_arte_granieten_keukenbladen-dekton-1.webp`,
    signature: [
      { value: "Ultra", label: "Compact" },
      { value: "Cos", label: "Cosentino" },
      { value: "Maat", label: "Gemaakt" },
    ],
    roundel: "DEKTON · COSENTINO · ULTRACOMPACT ·",
    caption: { tag: "Cosentino", title: "Sterk, modern en onderhoudsvriendelijk" },
  },
  pillars: {
    eyebrow: "Eigenschappen",
    titleBefore: "Bestand tegen ",
    titleHighlight: "intensief",
    titleAfter: " leven",
    lead: "Dekton is gemaakt voor moderne keukens waar design, onderhoudsgemak en hoge prestaties samenkomen.",
    items: [
      { title: "Hoge krasbestendigheid", description: "Keukengerei zal Dekton niet krassen.", icon: "shield", image: `${wp}/Rem-2.webp` },
      { title: "Vlekbestendig", description: "Bestand tegen hardnekkige vlekken en eenvoudig schoon te maken en te onderhouden.", icon: "sparkles", image: `${wp}/Soke-1024x683-1.webp` },
      { title: "Brand- en hittebestendig", description: "Dekton is bestand tegen hoge temperaturen en voorkomt schade aan het oppervlak.", icon: "award", image: `${wp}/mintkg-moonee-ponds-display.webp` },
    ],
  },
  partnership: {
    ghost: "Dekton",
    eyebrow: "Beste prijs",
    titleBefore: "Dekton werkbladen voor de ",
    titleHighlight: "beste prijs",
    body: "Dekton biedt een premium combinatie van natuursteenlook, betonlook en ultracompacte techniek. Wij adviseren over toepassingen, onderhoud, diktes en afwerkingen.",
    highlights: ["Natuursteen- en betonlook mogelijk", "Hoge krasbestendigheid", "Vlek-, brand- en hittebestendig", "Op maat gemaakt voor uw keuken"],
    note: "Heeft u al een offerte? Wij bieden vaak een betere prijs.",
    stats: baseWorktopStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Dekton in ",
    titleHighlight: "beeld",
    lead: "Dekton past bij strakke, moderne en industriële keukens met krachtige materiaalexpressie.",
    items: [
      { src: `${wp}/Dekton-Taga-xgloss-MOW-2019.webp`, title: "Taga XGloss", tag: "Dekton", span: "large" },
      { src: `${wp}/ed83ddc34ftieleman_keukens_arte_granieten_keukenbladen-dekton-1.webp`, title: "Arte granietlook", tag: "Look-a-like", span: "medium" },
      { src: `${wp}/Rem-2.webp`, title: "Rem", tag: "Cosentino", span: "medium" },
      { src: `${wp}/Soke-1024x683-1.webp`, title: "Soke", tag: "Betonlook", span: "wide" },
    ],
    cta: { titleBefore: "Dekton ", titleHighlight: "kiezen?", body: "Bekijk de mogelijkheden in kleur, dikte en randafwerking.", label: "Boek een afspraak", href: "/#consultation" },
  },
  custom: worktopCustomBlock,
  faq: { titleBefore: "Veel ", titleHighlight: "gestelde vragen", items: worktopFaq },
  advisors: sharedAdvisors,
  showroomCta: { eyebrow: "Showroom Utrecht", titleBefore: "Dekton ", titleHighlight: "live", titleAfter: " bekijken?", subtitle: "Ontdek welke Dekton-look past bij uw keukenstijl en dagelijks gebruik.", button: "Boek een afspraak", href: "/#consultation" },
} as const satisfies BrandPageData;

export const neolithPage = {
  id: "neolith",
  name: "Neolith",
  country: "Kitchen Lounge",
  meta: {
    title: "Neolith keukenbladen · Keuken-Centrum Utrecht",
    description:
      "Neolith werkbladen op maat: extreem kras-, hitte-, chemie- en uv-bestendig, vlekresistent en bijna nul porositeit.",
  },
  hero: {
    image: `${wp}/Neolith_blog_febrero04.webp`,
    eyebrow: "Neolith werkbladen",
    title: "Neolith",
    highlight: "minimalistisch sterk.",
    subtitle:
      "NEOLITH Kitchen Lounge ziet de keuken als een omgeving waar design en functionaliteit, elegantie en robuustheid, esthetiek en techniek samenkomen.",
    cta: { primary: "Bezoek showroom", primaryHref: "/#consultation", secondary: "Bel direct", secondaryHref: "tel:+31302415122" },
    badges: [
      { value: "0%", label: "Bijna porositeit" },
      { value: "50+", label: "Modellen" },
      { value: "10 jr", label: "Fabrieksgarantie" },
    ],
  },
  intro: {
    eyebrow: "Keuken-Bladen",
    titleBefore: "Design en ",
    titleHighlight: "robuustheid",
    titleAfter: " hand in hand",
    paragraphs: [
      "De lijn Kitchen Lounge van Neolith ziet de keuken als een omgeving waarin design en functionaliteit, elegantie en robuustheid, esthetische details en technische eigenschappen hand in hand gaan.",
      "Neolith heeft een oppervlak gecreëerd dat extreem bestand is tegen krassen, hoge temperaturen, chemicaliën en uv-stralen. Het is vlekresistent en de absorptiegraad is praktisch nul dankzij de porositeit van bijna 0%.",
      "Met meer dan 50 modellen en verschillende afwerklagen is er keuze voor uiteenlopende smaken, wensen en trends. Neolith Sinks maakt bovendien geïntegreerde, minimalistische spoelbakken mogelijk.",
    ],
    image: `${wp}/Neolith-Countertops-Gallery-2019-53.webp`,
    signature: [
      { value: "50+", label: "Modellen" },
      { value: "0%", label: "Porositeit" },
      { value: "10 jr", label: "Garantie" },
    ],
    roundel: "NEOLITH · KITCHEN LOUNGE · KERAMIEK ·",
    caption: { tag: "Kitchen Lounge", title: "Meer dan 150.000 werkbladen sinds 2010" },
  },
  pillars: {
    eyebrow: "Eigenschappen",
    titleBefore: "Het materiaal van de ",
    titleHighlight: "toekomst",
    lead: "Neolith is onderhoudsvriendelijk, niet-poreus en ideaal voor moderne consumenten die strakke afwerking en sterke prestaties zoeken.",
    items: [
      { title: "NEOLITH Skins", description: "Bijpassende spoelbakken kunnen uit hetzelfde materiaal worden gemaakt voor een integraal en minimalistisch design.", icon: "layers", image: `${wp}/Neolith-Countertops-Gallery-2019-00.webp` },
      { title: "Krasvrij", description: "Keramiek is krasbestendig, hittebestendig, vlekbestendig en bovendien niet poreus.", icon: "shield", image: `${wp}/Neolith-Countertops-Gallery-2019-35.webp` },
      { title: "10 jaar garantie", description: "Wereldwijd zijn er meer dan 150.000 keukenwerkbladen geïnstalleerd sinds 2010, met 10 jaar fabrieksgarantie.", icon: "award", image: `${wp}/Neolith-Countertops-Gallery-2019-10.webp` },
    ],
  },
  partnership: {
    ghost: "Neolith",
    eyebrow: "Beste prijs",
    titleBefore: "Neolith keukenbladen voor ",
    titleHighlight: "lange termijn",
    body: "Neolith biedt een sterk, onderhoudsvriendelijk en minimalistisch oppervlak voor hoogwaardige keukens. Wij helpen u de juiste afwerking, kleur en toepassing kiezen.",
    highlights: ["Extreem bestand tegen krassen en hitte", "Bestand tegen chemicaliën en uv-stralen", "Vlekresistent en bijna nul absorptie", "Meer dan 50 modellen en afwerklagen"],
    note: "Bekijk de Neolith-mogelijkheden in onze showroom in Utrecht.",
    stats: baseWorktopStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Neolith in ",
    titleHighlight: "beeld",
    lead: "Robuust, strak en architectonisch — Neolith past bij een minimalistische keukenbeleving.",
    items: [
      { src: `${wp}/Neolith_blog_febrero04.webp`, title: "Kitchen Lounge", tag: "Neolith", span: "large" },
      { src: `${wp}/Neolith-Countertops-Gallery-2019-53.webp`, title: "Gallery 53", tag: "Werkblad", span: "medium" },
      { src: `${wp}/Neolith-Countertops-Gallery-2019-00.webp`, title: "Gallery 00", tag: "Minimalistisch", span: "medium" },
      { src: `${wp}/Neolith-Countertops-Gallery-2019-35.webp`, title: "Gallery 35", tag: "Design", span: "wide" },
    ],
    cta: { titleBefore: "Neolith ", titleHighlight: "ontdekken?", body: "Laat u adviseren over de juiste afwerking en toepassing.", label: "Boek een afspraak", href: "/#consultation" },
  },
  custom: worktopCustomBlock,
  faq: { titleBefore: "Veel ", titleHighlight: "gestelde vragen", items: worktopFaq },
  advisors: sharedAdvisors,
  showroomCta: { eyebrow: "Showroom Utrecht", titleBefore: "Neolith ", titleHighlight: "live", titleAfter: " bekijken?", subtitle: "Ontdek de combinatie van elegantie, robuustheid en minimaal onderhoud.", button: "Boek een afspraak", href: "/#consultation" },
} as const satisfies BrandPageData;

export const sensaPage = {
  id: "sensa",
  name: "Sensa",
  country: "Cosentino",
  meta: {
    title: "Sensa keukenbladen · Keuken-Centrum Utrecht",
    description:
      "Sensa natuurstenen werkbladen by Cosentino: vlekbestendig kwartsiet en graniet met natuurlijke schoonheid en 15 jaar garantie.",
  },
  logo: `${wp}/Sensa-Logo.webp`,
  hero: {
    image: `${wp}/Sensa-Kitchen-Graphite-Grey-lr.webp`,
    eyebrow: "Sensa werkbladen",
    title: "Sensa",
    highlight: "natuurlijke schoonheid.",
    subtitle:
      "Vlekbestendige natuurlijke schoonheid: Sensa by Cosentino kwartsiet en graniet zijn behandeld met een anti-vlekbehandeling zodat uw werkblad er altijd als nieuw uit blijft zien.",
    cta: { primary: "Bezoek showroom", primaryHref: "/#consultation", secondary: "Bel direct", secondaryHref: "tel:+31302415122" },
    badges: [
      { value: "15 jr", label: "Garantie" },
      { value: "Graniet", label: "Kwartsiet" },
      { value: "Vlek", label: "Bescherming" },
    ],
  },
  intro: {
    eyebrow: "Keuken-Bladen",
    titleBefore: "Natuursteen zonder ",
    titleHighlight: "zorgen",
    paragraphs: [
      "Sensa keukenwerkbladen bieden ontwerp, duurzaamheid en weerstand van natuursteen zonder zorgen over vlekken.",
      "Sensa by Cosentino kwartsiet en graniet zijn behandeld met een nieuwe anti-vlekbehandeling die uw werkblad beschermt en er altijd als nieuw uit laat zien.",
      "De Premium Collection is verkrijgbaar in drie afwerkingen: gepolijst voor helder gereflecteerd licht, Caresse voor een verfijnde matte textuur en Leather voor een origineel effect.",
    ],
    image: `${wp}/cabecera_sensa.webp`,
    signature: [
      { value: "15 jr", label: "Garantie" },
      { value: "3", label: "Afwerkingen" },
      { value: "Stone", label: "Natuurlijk" },
    ],
    roundel: "SENSA · COSENTINO · NATUURSTEEN ·",
    caption: { tag: "Cosentino", title: "Gepolijst, Caresse of Leather afwerking" },
  },
  pillars: {
    eyebrow: "Kleurwerelden",
    titleBefore: "Voor elke ",
    titleHighlight: "smaak",
    lead: "Sensa biedt natuurlijke kleuren vol persoonlijkheid — van helder wit tot krachtig zwart en warme aardetinten.",
    items: [
      { title: "Witte kleuren", description: "Natuursteen biedt unieke wittinten voor levendige, minimalistische, tijdloze of klassieke ruimtes.", icon: "sparkles", image: `${wp}/7-8-1.webp` },
      { title: "Krachtige zwarte kleuren", description: "Donkere tinten creëren intieme ruimtes in moderne, klassieke of minimalistische stijl.", icon: "layers", image: `${wp}/11-6.webp` },
      { title: "Voor elke smaak", description: "Crème, grijs, oranje, klassieke texturen of sterke contrasten — Cosentino biedt oneindig veel mogelijkheden.", icon: "heart", image: `${wp}/Sensa-Kitchen-Graphite-Grey-lr.webp` },
    ],
  },
  partnership: {
    ghost: "Sensa",
    eyebrow: "Beste prijs",
    titleBefore: "Sensa natuursteen met ",
    titleHighlight: "15 jaar garantie",
    body: "Sensa combineert natuurlijke uitstraling met eenvoudige reiniging en onderhoud. Wij adviseren over kleur, afwerking, toepassing en maatvoering.",
    highlights: ["Anti-vlekbehandeling", "Kwartsiet en graniet", "Gepolijst, Caresse of Leather", "Eenvoudig onderhoud en reiniging"],
    note: "Kom langs en ervaar de natuurlijke kleuren en texturen van Sensa.",
    stats: baseWorktopStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Sensa in ",
    titleHighlight: "beeld",
    lead: "Natuursteen met karakter, bescherming en tijdloze klasse.",
    items: [
      { src: `${wp}/Sensa-Kitchen-Graphite-Grey-lr.webp`, title: "Graphite Grey", tag: "Sensa", span: "large" },
      { src: `${wp}/cabecera_sensa.webp`, title: "Natuursteen", tag: "Cosentino", span: "medium" },
      { src: `${wp}/7-8-1.webp`, title: "Witte tinten", tag: "Licht", span: "medium" },
      { src: `${wp}/11-6.webp`, title: "Donkere tinten", tag: "Black", span: "wide" },
    ],
    cta: { titleBefore: "Sensa ", titleHighlight: "voelen?", body: "Bekijk de afwerkingen en natuursteenstructuren in onze showroom.", label: "Boek een afspraak", href: "/#consultation" },
  },
  custom: worktopCustomBlock,
  faq: { titleBefore: "Veel ", titleHighlight: "gestelde vragen", items: worktopFaq },
  advisors: sharedAdvisors,
  showroomCta: { eyebrow: "Showroom Utrecht", titleBefore: "Sensa ", titleHighlight: "live", titleAfter: " bekijken?", subtitle: "Ervaar natuursteen met anti-vlekbescherming en 15 jaar garantie.", button: "Boek een afspraak", href: "/#consultation" },
} as const satisfies BrandPageData;

export const worktopPages = {
  silestone: silestonePage,
  dekton: dektonPage,
  neolith: neolithPage,
  sensa: sensaPage,
} as const;
