import type { BrandPageData } from "@/lib/brand-pages/types";
import { sharedAdvisors, sharedKitchenFaq, wp } from "@/lib/brand-pages/shared";

export const applianceBrands = [
  { name: "Miele", logo: `${wp}/mieleMerken.webp` },
  { name: "Siemens", logo: `${wp}/siemensMerken.webp` },
  { name: "Bosch", logo: `${wp}/boschMerken.webp` },
  { name: "Gaggenau", logo: `${wp}/gaggenauMerken.webp` },
  { name: "Neff", logo: `${wp}/neffMerken.webp` },
  { name: "AEG", logo: `${wp}/aegMerken.webp` },
  { name: "SMEG", logo: `${wp}/smegMerken.webp` },
  { name: "Pelgrim", logo: `${wp}/pelgrimMerken.webp` },
  { name: "BORA", logo: `${wp}/bora.webp` },
  { name: "Quooker", logo: `${wp}/quookerMerken.webp` },
] as const;

export const applianceFaq: BrandPageData["faq"]["items"] = [
  ...sharedKitchenFaq,
  {
    q: "Welke merken keukenapparatuur levert Keuken-Centrum?",
    a: "Wij leveren onder andere Miele, Siemens, Bosch, Gaggenau, Neff, AEG, SMEG, ATAG, Pelgrim, BORA, AGA, Falcon, La Cornue, Lofra, Viking, KitchenAid en Quooker. Ziet u uw model niet? Wij bestellen vrijwel alles.",
  },
  {
    q: "Kunnen jullie apparatuur ook apart leveren?",
    a: "Ja. Wij verkopen keukeninbouwapparatuur ook apart — tegen zeer voordelige prijzen — en combineren bekende topmerken met kwalitatieve, scherp geprijsde alternatieven.",
  },
];

export type ApparatuurTypeCard = {
  title: string;
  body: string;
  image: string;
};

export type ApparatuurCategoryData = {
  slug: string;
  name: string;
  meta: { title: string; description: string };
  hero: {
    image: string;
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    badges: { value: string; label: string }[];
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  types: ApparatuurTypeCard[];
  brandsNote?: string;
  valueProps?: { title: string; body: string }[];
  faq: BrandPageData["faq"]["items"];
  advisors: BrandPageData["advisors"];
  showroomCta: {
    title: string;
    highlight: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

const advisors = sharedAdvisors;

const showroomBase = (title: string, highlight: string): ApparatuurCategoryData["showroomCta"] => ({
  title,
  highlight,
  body: "Bekijk de apparatuur live in onze showroom op de Zonnebaan — persoonlijk advies, scherpe prijs en snelle levering.",
  primaryLabel: "Boek een afspraak",
  secondaryLabel: "Bel direct",
});

export const apparatuurOverview = {
  meta: {
    title: "Keukenapparatuur · Inbouwapparatuur | Keuken-Centrum Utrecht",
    description:
      "Ontdek keukenapparatuur van Miele, Siemens, BORA, Quooker en meer bij Keuken-Centrum Utrecht. Afzuigkappen, kookplaten, fornuizen, koelkasten, vaatwassers en Quooker.",
  },
  hero: {
    image: `${wp}/2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp`,
    eyebrow: "Inbouwapparatuur",
    title: "Apparatuur",
    highlight: "die meekookt.",
    subtitle:
      "Van stille vaatwassers tot BORA-afzuiging en de Quooker die alles kan — topmerken geïntegreerd in één keukenontwerp, met de beste prijsgarantie.",
    badges: [
      { value: "15+", label: "Topmerken" },
      { value: "Beste", label: "Prijs" },
      { value: "2 dgn", label: "Levering*" },
    ],
  },
  intro: {
    eyebrow: "Keukenapparatuur",
    title: "Topmerken, scherpe prijzen, complete integratie",
    paragraphs: [
      "In alle keukens komt inbouwapparatuur voor. Denk daarbij aan vaatwassers, magnetrons, ijskasten enzovoorts. Wij als keukencentrum bieden een breed assortiment in de meest bekende merken inbouwapparatuur.",
      "We noemen enkele merken zoals Bosch, Siemens, Miele, ATAG, Gaggenau, Pelgrim, Neff, AEG, AGA, Falcon en KitchenAid. Daarnaast leveren we ook andere merken die voordeliger zijn dan de bekende namen, maar kwalitatief zeer goed.",
      "Daardoor combineren wij kwaliteit en een scherpere prijs. Wij verkopen keukeninbouwapparatuur ook apart — tegen zeer voordelige prijzen. Ziet u uw model niet? Geen probleem: wij kunnen vrijwel alles bestellen.",
    ],
  },
  categories: [
    {
      id: "afzuigkappen",
      name: "Afzuigkappen",
      tagline: "Eiland · Schouw · Inbouw · Plafond · BORA",
      description:
        "Breed assortiment afzuigkappen voor elke keukenstijl. Vooral eiland- en schouwkappen hangen prominent in het zicht — daarom kiezen wij voor design én vermogen.",
      image: `${wp}/2019/01/eiland-afzuigkappen-keukens.webp`,
      href: "/apparatuur/afzuigkappen",
    },
    {
      id: "werkblad-afzuiging",
      name: "Werkblad afzuiging",
      tagline: "BORA · kookveldafzuiging",
      description:
        "Geuren worden direct bij de bron weggezogen. Geen overhangende kap nodig — vrij zicht, stil vermogen en een ultraminimaal keukenbeeld.",
      image: `${wp}/2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp`,
      href: "/apparatuur/werkblad-afzuiging",
    },
    {
      id: "kookplaten",
      name: "Kookplaten",
      tagline: "Inductie · Keramisch · Domino · Afzuiging",
      description:
        "Inductie, keramisch, domino-elementen en kookplaten met geïntegreerde afzuiging van topmerken zoals Siemens, Miele, Bosch en BORA.",
      image: `${wp}/inductie_kookplaat.webp`,
      href: "/apparatuur/kookplaten",
    },
    {
      id: "fornuizen",
      name: "Fornuizen",
      tagline: "AGA · Falcon · La Cornue · Lofra",
      description:
        "Exclusieve fornuizen van AGA, Falcon, Steel, La Cornue, Lofra en Viking — met strakke prijzen en in principe een korte levertijd van 2 dagen.",
      image: `${wp}/2018/03/LaCornue.webp`,
      href: "/apparatuur/fornuizen",
    },
    {
      id: "koelkasten-vriezers",
      name: "Koelkasten & Vriezers",
      tagline: "Inbouw · Vrijstaand · Wijnkoelers",
      description:
        "Keeping it cool. Inbouwkoelkasten die verdwijnen in uw design, of een vrijstaande koelkast of wijnkoeler als eye-catcher.",
      image: `${wp}/2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp`,
      href: "/apparatuur/koelkasten-vriezers",
    },
    {
      id: "vaatwassers",
      name: "Vaatwassers",
      tagline: "Siemens · Bosch · Miele",
      description:
        "Stille, efficiënte inbouwvaatwassers van Siemens, Bosch en Miele — volledig geïntegreerd in uw keukenfront.",
      image: `${wp}/2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp`,
      href: "/apparatuur/vaatwassers",
    },
    {
      id: "quooker",
      name: "Quooker",
      tagline: "100°C · Gekoeld · Bruisend",
      description:
        "De kraan die alles kan: direct kokend water, en optioneel gekoeld of bruisend. Fusion, Flex, Nordic Classic — altijd op voorraad in de showroom.",
      image: `${wp}/fusion_square_black_carbon_kook_model_3-1.webp`,
      href: "/apparatuur/quooker",
    },
    {
      id: "wave-afzuigkappen",
      name: "Wave afzuigkappen",
      tagline: "Design · Maatwerk · Verlichting",
      description:
        "Wave Design staat synoniem voor bijzondere afzuigkappen en verlichting. Hoogwaardige afwerking tot in het kleinste detail — volledig op maat.",
      image: `${wp}/Wave-Model-2119-Alphenberg.webp`,
      href: "/apparatuur/wave-afzuigkappen",
    },
  ],
  valueProps: [
    {
      title: "Topmerken & alternatieven",
      body: "Bekende merken én scherp geprijsde kwaliteitsalternatieven — zodat u kwaliteit en prijs in balans houdt.",
    },
    {
      title: "Apart of geïntegreerd",
      body: "Apparatuur los kopen of volledig geïntegreerd in uw keukenontwerp. Wij adviseren over passend vermogen en formaten.",
    },
    {
      title: "Showroom & snelle levering",
      body: "Ervaar de systemen live. Veel fornuizen en Quookers zijn snel leverbaar — vaak binnen enkele dagen.",
    },
  ],
  faq: applianceFaq,
};

export const afzuigkappenPage: ApparatuurCategoryData = {
  slug: "afzuigkappen",
  name: "Afzuigkappen",
  meta: {
    title: "Afzuigkappen · Eiland, schouw, inbouw & BORA | Keuken-Centrum",
    description:
      "Breed assortiment afzuigkappen bij Keuken-Centrum Utrecht: eilandkappen, onderbouw, schouwkappen, inbouwkappen, plafondunits en BORA-afzuigingen.",
  },
  hero: {
    image: `${wp}/2019/01/eiland-afzuigkappen-keukens.webp`,
    eyebrow: "Keukenventilatie",
    title: "Afzuigkappen",
    highlight: "met karakter.",
    subtitle:
      "Bij Keuken-Centrum vindt u een breed assortiment afzuigkappen voor uiteenlopende doeleinden. Vooral eiland- en schouwkappen hangen prominent in het zicht — daarom kiezen we voor stijl én prestatie.",
    badges: [
      { value: "6", label: "Typen" },
      { value: "BORA", label: "In showroom" },
      { value: "Beste", label: "Prijs" },
    ],
  },
  intro: {
    eyebrow: "Afzuiging",
    title: "Design dat ook écht afzuigt",
    paragraphs: [
      "Een afzuigkap is onmisbaar voor goede keukenventilatie. Bij Keuken-Centrum geloven we dat een afzuigkap niet alleen functioneel, maar ook decoratief bijdraagt aan uw keuken.",
      "Van subtiele onderbouwmodellen tot statement eilandkappen en BORA-werkbladafzuiging: wij helpen u het juiste type, vermogen en design te kiezen — passend bij uw kookplaat, plafondhoogte en keukenstijl.",
    ],
  },
  types: [
    {
      title: "Eilandkappen",
      body: "Statement boven het eiland. Cilindrische, piramidevormige of vrijhangende designunits die evenveel aanwezig zijn als krachtig.",
      image: `${wp}/2019/01/eiland-afzuigkappen-keukens.webp`,
    },
    {
      title: "Onderbouwmodellen",
      body: "Discreet onder de bovenkast. Ideaal wanneer u maximale opslag wilt behouden zonder zichtbare kap.",
      image: `${wp}/2019/01/onderbouw-afzuigkappen-keukens.webp`,
    },
    {
      title: "Schouwkappen",
      body: "Klassiek of modern wandmodel. Van strak zwart tot rvs — het icoon aan de wand boven uw kookplaat.",
      image: `${wp}/2019/01/wand-afzuigkappen-keukens.webp`,
    },
    {
      title: "Inbouwkappen",
      body: "Volledig geïntegreerd in een omkasting of plafonddoos. Onzichtbaar design, zichtbare spotlights en puur vermogen.",
      image: `${wp}/2019/01/inbouw-afzuigkappen-keukens.webp`,
    },
    {
      title: "Plafond afzuigkap",
      body: "Vlak geïntegreerd in het plafond. Minimale uitstraling, maximale ruimtebeleving — perfect boven een eiland.",
      image: `${wp}/2019/01/plafond-afzuigkappen-keukens.webp`,
    },
    {
      title: "BORA Afzuigingen",
      body: "Werkbladafzuiging die damp direct bij de pan wegzuigt. Geen overhangende kap — vrij zicht en stil vermogen.",
      image: `${wp}/2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp`,
    },
  ],
  brandsNote: "Afzuigkappen van BORA, Wave, Siemens, Bosch, Miele, Neff, AEG, Gaggenau en meer.",
  valueProps: [
    {
      title: "Stijl per type",
      body: "Eiland en schouw vragen om design; onderbouw en inbouw om discretie. Wij matchen type aan uw keukenbeeld.",
    },
    {
      title: "Vermogen & geluid",
      body: "Wij adviseren over m³/uur, recirculatie of afvoer, en hoe stil het systeem in de praktijk is.",
    },
    {
      title: "Showroomvergelijking",
      body: "Vergelijk BORA, Wave en klassieke kappen side-by-side in onze showroom in Utrecht.",
    },
  ],
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Afzuigkappen in het echt", "bekijken?"),
};

export const werkbladAfzuigingPage: ApparatuurCategoryData = {
  slug: "werkblad-afzuiging",
  name: "Werkblad afzuiging",
  meta: {
    title: "Werkblad afzuiging · BORA & Wave | Keuken-Centrum Utrecht",
    description:
      "Ontdek werkbladafzuiging van BORA en Wave bij Keuken-Centrum Utrecht. Damp weg bij de bron — stil, krachtig en designgericht.",
  },
  hero: {
    image: `${wp}/2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp`,
    eyebrow: "Kookveldafzuiging",
    title: "Werkblad",
    highlight: "afzuiging.",
    subtitle:
      "Damp, geur en vet worden direct bij de pan afgezogen. Geen overhangende kap — wel vrij zicht, stil vermogen en een ultraminimaal keukenbeeld.",
    badges: [
      { value: "BORA", label: "Specialist" },
      { value: "Wave", label: "Design" },
      { value: "Stil", label: "Vermogen" },
    ],
  },
  intro: {
    eyebrow: "Direct bij de bron",
    title: "Afzuiging die uw keukenbeeld vrijhoudt",
    paragraphs: [
      "Werkbladafzuiging (ook wel kookveldafzuiging) zuigt damp direct naast of tussen de kookzones weg. Dat maakt een overhangende kap overbodig — ideaal bij eilanden en open woonkeukens.",
      "Keuken-Centrum is verkooppunt van BORA en Wave. In de showroom ervaart u hoe stil, krachtig en schoon deze systemen in de praktijk zijn.",
    ],
  },
  types: [
    {
      title: "BORA Pure",
      body: "Iconische kookveldafzuiging met verwisselbare zones. Scherp design, intuïtief bedienbaar en stil tot hoge vermogens.",
      image: `${wp}/2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp`,
    },
    {
      title: "BORA systemen",
      body: "Van compacte units tot professionele opstellingen — met recirculatie of afvoer, afgestemd op uw woning.",
      image: `${wp}/2020/03/kookplaat_met_afzuiging-1.webp`,
    },
    {
      title: "Wave designunits",
      body: "Bijzondere designoplossingen waarbij afzuiging en verlichting naadloos samenkomen — volledig maatwerk.",
      image: `${wp}/Wave-Model-2119-Alphenberg.webp`,
    },
  ],
  brandsNote: "Gespecialiseerd in BORA en Wave werkbladafzuiging.",
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("BORA ervaren", "in de showroom?"),
};

export const kookplatenPage: ApparatuurCategoryData = {
  slug: "kookplaten",
  name: "Kookplaten",
  meta: {
    title: "Kookplaten · Inductie, keramisch & met afzuiging | Keuken-Centrum",
    description:
      "Kookplaten van Siemens, Miele, Bosch, Gaggenau en meer. Inductie, keramisch, domino-elementen en kookplaten met afzuiging.",
  },
  hero: {
    image: `${wp}/inductie_kookplaat.webp`,
    eyebrow: "Kookcomfort",
    title: "Kookplaten",
    highlight: "op maat.",
    subtitle:
      "Inductie, keramisch, domino of met geïntegreerde afzuiging — topmerken inbouwapparatuur voor optimaal kookcomfort in elke keuken.",
    badges: [
      { value: "Inductie", label: "Snel & veilig" },
      { value: "Flex", label: "Zones" },
      { value: "Top", label: "Merken" },
    ],
  },
  intro: {
    eyebrow: "Inbouw kookplaten",
    title: "De juiste plaat voor uw manier van koken",
    paragraphs: [
      "Wij bieden een breed assortiment inbouwapparatuur van bekende merken zoals Bosch, Siemens, Miele, ATAG, Gaggenau, Pelgrim, Neff, AEG, AGA, Falcon en KitchenAid.",
      "Of u nu flexzones, bridge-functies, wokbranders of een kookplaat met geïntegreerde afzuiging zoekt: wij adviseren over vermogen, aansluiting en passend design.",
    ],
  },
  types: [
    {
      title: "Inductie kookplaten",
      body: "Snel, veilig en energiezuinig. Precisie per zone — met modern design in zwart glas of rvs.",
      image: `${wp}/inductie_kookplaat.webp`,
    },
    {
      title: "Keramische kookplaten",
      body: "Klassieke warmte-overdracht met strak glasoppervlak. Bekend, betaalbaar en eenvoudig te onderhouden.",
      image: `${wp}/2020/03/keramisch.webp`,
    },
    {
      title: "Domino elementen",
      body: "Modulaire zones — combineer inductie, teppanyaki, wok of grill tot een persoonlijk kooklandschap.",
      image: `${wp}/2020/03/dominokeuken.webp`,
    },
    {
      title: "Kookplaten met afzuiging",
      body: "Alles-in-één: koken en afzuigen in het werkblad. Vrij zicht, stil vermogen en een clean eilandontwerp.",
      image: `${wp}/2020/03/kookplaat_met_afzuiging-1.webp`,
    },
  ],
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Kookplaten vergelijken", "in Utrecht?"),
};

export const fornuizenPage: ApparatuurCategoryData = {
  slug: "fornuizen",
  name: "Fornuizen",
  meta: {
    title: "Fornuizen · AGA, Falcon, La Cornue | Keuken-Centrum Utrecht",
    description:
      "Exclusieve fornuizen van AGA, Falcon, Steel, La Cornue, Lofra en Viking. Strakke prijzen, korte levertijd vanaf 2 dagen.",
  },
  hero: {
    image: `${wp}/2018/03/LaCornue.webp`,
    eyebrow: "Culinaire statement pieces",
    title: "Fornuizen",
    highlight: "met allure.",
    subtitle:
      "Keuken-Centrum Utrecht biedt exclusieve fornuizen van o.a. AGA, Falcon, Steel, La Cornue, Lofra en Viking — met strakke prijzen en in principe een korte levertijd van 2 dagen.",
    badges: [
      { value: "2 dgn", label: "Levertijd*" },
      { value: "90–100", label: "cm" },
      { value: "Exclusief", label: "Merken" },
    ],
  },
  intro: {
    eyebrow: "Range cookers",
    title: "Professioneel koken, thuis",
    paragraphs: [
      "Bij onze showroom in Utrecht kunt u terecht voor fornuizen van topmerken. Wij bieden complete maatwerkkeukens én losse fornuizen — inclusief accessoires.",
      "Kies de juiste breedte (90 of 100 cm), branders/ovens-combinatie en afwerking. Onze adviseurs helpen u met aansluiting, ventilatie en passend werkblad.",
    ],
  },
  types: [
    {
      title: "La Cornue",
      body: "Franse haute cuisine in uw keuken. Ambachtelijk, iconisch en volledig op maat te configureren.",
      image: `${wp}/2018/03/LaCornue.webp`,
    },
    {
      title: "Falcon",
      body: "Britse range cookers met karakter — krachtige ovens, betrouwbare branders en een tijdloze silhouet.",
      image: `${wp}/2018/03/Falcon.webp`,
    },
    {
      title: "AGA",
      body: "Het icoon van cast-iron koken. Warmte, sfeer en een lifestyle die generaties meegaat.",
      image: `${wp}/2018/03/AGA.webp`,
    },
    {
      title: "Lofra & meer",
      body: "Italiaanse precisie en andere exclusieve merken — ook Steel en Viking, met snelle levering.",
      image: `${wp}/2018/03/Lofra.webp`,
    },
  ],
  brandsNote: "AGA, Falcon, Steel, La Cornue, Lofra, Viking — accessoires leverbaar.",
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Fornuis kiezen", "met advies?"),
};

export const koelkastenPage: ApparatuurCategoryData = {
  slug: "koelkasten-vriezers",
  name: "Koelkasten & Vriezers",
  meta: {
    title: "Koelkasten & Vriezers · Inbouw en vrijstaand | Keuken-Centrum",
    description:
      "Inbouw- en vrijstaande koelkasten en vriezers van Siemens, Miele en meer. Incl. wijnkoelers als eye-catcher.",
  },
  hero: {
    image: `${wp}/2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp`,
    eyebrow: "Cooling",
    title: "Koelkasten",
    highlight: "& vriezers.",
    subtitle:
      "Keeping it cool. Een vrijstaande koelkast of wijnkoeler als eye-catcher — of inbouwkoelkasten die volledig verdwijnen in uw keukenontwerp.",
    badges: [
      { value: "Inbouw", label: "Invisible" },
      { value: "Fresh", label: "Zones" },
      { value: "Quiet", label: "Night" },
    ],
  },
  intro: {
    eyebrow: "Vers houden",
    title: "Koeling die past bij uw design",
    paragraphs: [
      "Benieuwd hoe een koelkast werkt, of hoeveel deze per jaar kost? Wij zetten de praktische keuzes voor u op een rij — van energieklasse tot hyperFresh-zones.",
      "Kies inbouw voor een naadloos front, of een vrijstaand statement-model. Onze adviseurs helpen u met nismaten, scharnierkanten en vriescapaciteit.",
    ],
  },
  types: [
    {
      title: "Inbouw koelkasten",
      body: "Volledig geïntegreerd achter keukenfronten. Onzichtbaar design, maximale koeling.",
      image: `${wp}/MCMI02130334_studioLine_KI86SSD40_DE.webp`,
    },
    {
      title: "Onderbouw koelkasten",
      body: "Compact onder het werkblad — ideaal als tweede koelzone of in kleinere keukens.",
      image: `${wp}/MCIM01003124_F6810_17_P_hyperfresh_mixed.webp`,
    },
    {
      title: "Vrijstaande koelkasten",
      body: "Statement of multifunctioneel. Inclusief side-by-side en wijnkoelers als blikvanger.",
      image: `${wp}/2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp`,
    },
    {
      title: "Vriezers",
      body: "Inbouw- of vrijstaande vriezers met NoFrost, snelle diepvries en efficiënte indeling.",
      image: `${wp}/MCMI02130349_studioLine_KI86SSD40_REU.webp`,
    },
  ],
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Koeladvies", "in de showroom?"),
};

export const vaatwassersPage: ApparatuurCategoryData = {
  slug: "vaatwassers",
  name: "Vaatwassers",
  meta: {
    title: "Vaatwassers · Siemens, Bosch, Miele | Keuken-Centrum Utrecht",
    description:
      "Inbouwvaatwassers van Siemens, Bosch en Miele. Stil, efficiënt en volledig geïntegreerd in uw keukenfront.",
  },
  hero: {
    image: `${wp}/2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp`,
    eyebrow: "Dishwashing",
    title: "Vaatwassers",
    highlight: "die stil werken.",
    subtitle:
      "Stille, efficiënte inbouwvaatwassers van Siemens, Bosch en Miele — volledig geïntegreerd, met programma’s voor kristalglas tot intensieve kookpannen.",
    badges: [
      { value: "Silent", label: "Nachttijd" },
      { value: "A", label: "Energie" },
      { value: "Top", label: "Merken" },
    ],
  },
  intro: {
    eyebrow: "Inbouwvaatwassers",
    title: "Schoon resultaat, onzichtbaar geïntegreerd",
    paragraphs: [
      "Wij bieden een breed assortiment inbouwapparatuur van bekende merken. Voor vaatwassers focussen wij op Siemens, Bosch en Miele — merken die stilte, reinigingskracht en duurzaamheid combineren.",
      "Kies volledig geïntegreerd of met bedieningspaneel. Wij helpen u met hoogte (standaard of XXL), bestekladen en aansluiting op uw keukenontwerp.",
    ],
  },
  types: [
    {
      title: "Siemens vaatwassers",
      body: "Innovatie en design — van varioSpeed tot intelligent sensor-reinigen in studioLine-uitvoeringen.",
      image: `${wp}/2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp`,
    },
    {
      title: "Bosch vaatwassers",
      body: "Betrouwbaar, stil en doordacht. Perfecte integratie in moderne keukenfronten.",
      image: `${wp}/Schermafbeelding-2021-10-13-om-11.17.47.webp`,
    },
    {
      title: "Miele vaatwassers",
      body: "Premium afwerking, lange levensduur en uitzonderlijke reinigingsresultaten — merk met garantie op kwaliteit.",
      image: `${wp}/Schermafbeelding-2021-10-13-om-13.29.28.webp`,
    },
  ],
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Vaatwasser kiezen", "met advies?"),
};

export const quookerPage: ApparatuurCategoryData = {
  slug: "quooker",
  name: "Quooker",
  meta: {
    title: "Quooker · Fusion, Flex, Nordic | Keuken-Centrum Utrecht",
    description:
      "Quooker kokendwaterkranen: Fusion, Flex, Classic Nordic en meer. Direct 100°C, optioneel gekoeld en bruisend water.",
  },
  hero: {
    image: `${wp}/fusion_square_black_carbon_kook_model_3-1.webp`,
    eyebrow: "Kokendwaterkraan",
    title: "Quooker",
    highlight: "die alles kan.",
    subtitle:
      "Direct 100°C kokend water — en optioneel gekoeld of bruisend. Van Fusion tot Flex en Nordic Classic: ervaar Quooker in onze showroom.",
    badges: [
      { value: "100°C", label: "Direct" },
      { value: "Cube", label: "Gekoeld & bruis" },
      { value: "Design", label: "Iconisch" },
    ],
  },
  intro: {
    eyebrow: "Quooker",
    title: "Eén kraan. Alle water.",
    paragraphs: [
      "De Quooker is meer dan een kraan: het is een systeem. Kokend water voor thee, koken of steriliseren — zonder fluitketel. Met Quooker Cube ook gefilterd gekoeld en bruisend water.",
      "Keuken-Centrum is Quooker-specialist in Utrecht. Onze adviseurs helpen u met keuze van model, afwerking (chroom, rvs, zwart, goud) en de juiste boiler of COMBI+ opslag.",
    ],
  },
  types: [
    {
      title: "Fusion",
      body: "Iconische vierkante kraan. Kokend, warm en koud uit één elegant silhouet — beschikbaar in meerdere afwerkingen.",
      image: `${wp}/fusion_square_black_carbon_kook_model_3-1.webp`,
    },
    {
      title: "Flex",
      body: "Flexibele uitloop voor maximale reikwijdte. Ideaal bij grote spoelbakken en intensief koken.",
      image: `${wp}/fusion_square_black_carbon_kook_model_3-1.webp`,
    },
    {
      title: "Classic Nordic",
      body: "Tijdloze rondingen met klassieke allure. Perfect in landelijke en klassieke keukens.",
      image: `${wp}/quookerMerken.webp`,
    },
    {
      title: "Nordic TwinTaps",
      body: "Aparte kranen voor kokend en kraanwater — een strak twin-tap arrangement op het blad.",
      image: `${wp}/quookerMerken.webp`,
    },
  ],
  brandsNote: "Officieel Quooker-assortiment: Fusion, Flex, Classic, Nordic — met Cube-optie.",
  faq: [
    ...applianceFaq,
    {
      q: "Wat is Quooker Cube?",
      a: "Cube voegt gefilterd gekoeld en bruisend water toe aan uw Quooker-systeem. Zo heeft u kokend, koud, warm, gekoeld en bruisend water uit één installatie.",
    },
  ],
  advisors,
  showroomCta: showroomBase("Quooker proberen", "in de showroom?"),
};

export const wavePage: ApparatuurCategoryData = {
  slug: "wave-afzuigkappen",
  name: "Wave afzuigkappen",
  meta: {
    title: "Wave afzuigkappen & verlichting | Keuken-Centrum Utrecht",
    description:
      "Wave Design afzuigkappen en verlichting bij Keuken-Centrum Utrecht. Efficiënt, innovatief en stijlvol — volledig op maat.",
  },
  hero: {
    image: `${wp}/Wave-Model-2119-Alphenberg.webp`,
    eyebrow: "Wave Design",
    title: "Wave",
    highlight: "afzuigkappen.",
    subtitle:
      "Efficiënt, innovatief & stijlvol: de afzuigkappen en verlichting van Wave zijn een must voor elke keuken. Garantie op de beste prijs — direct leverbaar.",
    badges: [
      { value: "Maatwerk", label: "100%" },
      { value: "Design", label: "Lighting" },
      { value: "Beste", label: "Prijs" },
    ],
  },
  intro: {
    eyebrow: "Wave Kitchen Products",
    title: "Specialist in afzuiging én verlichting",
    paragraphs: [
      "Wave Design is een ware specialist in afzuigkappen en bijzondere verlichting voor in de keuken. Het merk staat synoniem voor bijzondere oplossingen, als u zoekt naar design afzuigkappen en verlichting. Daar wordt een hoogwaardige afwerking doorgevoerd tot in het kleinste detail.",
      "Bij ons in de showroom hebben we verschillende plafondunits en lampen van Wave Design hangen, die onze adviseurs u graag laten zien. Het toont de mogelijkheden en de hoge kwaliteit, terwijl u altijd de keuze hebt om alles helemaal naar wens samen te stellen.",
      "Dat geldt voor de afzuigkappen en de verlichting, waarmee er tot in de puntjes maatwerk mogelijk is. Uw vraag vormt onze uitdaging — het resultaat ziet u terug in collecties waarin techniek en design volledig integreren.",
    ],
  },
  types: [
    {
      title: "Plafondunits",
      body: "Vlakke of sculpturale units in het plafond — met geïntegreerde LED en krachtige afzuiging.",
      image: `${wp}/Wave-Model-2119-Alphenberg.webp`,
    },
    {
      title: "Frame & designframes",
      body: "Wave Frame in rvs of maatwerkafwerking — architecturale lijnen die de keuken structureren.",
      image: `${wp}/Wave_Frame_2056_RVS_A_L_1920-1200x800h.webp`,
    },
    {
      title: "Inbouwunits",
      body: "Discrete inbouwunits die verdwijnen in omkasting of plafonddoos — puur functioneel design.",
      image: `${wp}/2120_B.webp`,
    },
    {
      title: "Verlichting",
      body: "Bijzondere keukenverlichting die samensmelt met afzuiging — sfeer én taaklicht in één systeem.",
      image: `${wp}/1627_A.webp`,
    },
  ],
  brandsNote: "Officieel Wave verkooppunt — Zonnebaan 8, 3542 EC Utrecht.",
  valueProps: [
    {
      title: "Maatwerk tot in detail",
      body: "Afmetingen, afwerking en lichtkleur volledig naar wens — tot in het kleinste detail.",
    },
    {
      title: "Showroomexperiëntie",
      body: "Verschillende plafondunits en lampen hangen klaar om live te ervaren.",
    },
    {
      title: "Beste prijsgarantie",
      body: "Garantie op de beste prijs bij Keuken-Centrum — snel en deskundig geadviseerd.",
    },
  ],
  faq: applianceFaq,
  advisors,
  showroomCta: showroomBase("Wave Design", "in Utrecht ontdekken?"),
};

export const apparatuurPages: Record<string, ApparatuurCategoryData> = {
  afzuigkappen: afzuigkappenPage,
  "werkblad-afzuiging": werkbladAfzuigingPage,
  kookplaten: kookplatenPage,
  fornuizen: fornuizenPage,
  "koelkasten-vriezers": koelkastenPage,
  vaatwassers: vaatwassersPage,
  quooker: quookerPage,
  "wave-afzuigkappen": wavePage,
};
