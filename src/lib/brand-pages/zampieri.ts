import type { BrandPageData } from "./types";
import {
  wp,
  sharedKitchenFaq,
  sharedCustomBlock,
  sharedAdvisors,
  defaultPartnershipStats,
} from "./shared";

export const zampieriPage = {
  id: "zampieri",
  name: "Zampieri",
  country: "Italië",
  meta: {
    title: "Zampieri keukens · Italiaans design bij Keuken-Centrum Utrecht",
    description:
      "Ontdek Zampieri bij Keuken-Centrum Utrecht. Italiaanse keukens en kasten met comfort, ergonomie en schoonheid — made in Italy, gegarandeerd laagste prijs en eigen montagedienst.",
  },
  hero: {
    image: `${wp}/cucina3.webp`,
    eyebrow: "Gemaakt in Italië",
    title: "Zampieri",
    highlight: "Comfort. Ergonomie. Schoonheid.",
    subtitle:
      "Het Italiaanse merk Zampieri verrast met stijlvolle, functionele meubels — made in Italy, in vele kleuren, maten en configuraties volledig naar uw smaak samen te stellen.",
    cta: {
      primary: "Bezoek showroom",
      primaryHref: "/#consultation",
      secondary: "Bel direct",
      secondaryHref: "tel:+31302415122",
    },
    badges: [
      { value: "IT", label: "Kwaliteit" },
      { value: "Beste", label: "Prijs" },
      { value: "5 jr", label: "Garantie" },
    ],
  },
  intro: {
    eyebrow: "Het merk",
    titleBefore: "De keuken die u verrast met",
    titleHighlight: "comfort",
    titleAfter: ", ergonomie en schoonheid",
    paragraphs: [
      "Zampieri — de keuken zal u verrassen met zijn comfort, ergonomie en schoonheid. Het bekende Italiaanse bedrijf maakt stijlvolle, functionele en betrouwbare meubels voor een van de belangrijkste kamers van elk appartement of elke woning.",
      "In de catalogus worden verschillende oplossingen 'made in Italy' gepresenteerd in diverse kleuren, maten en configuraties. Ze helpen om van uw keuken de perfecte ruimte te maken om te koken, maar passen ook naadloos in het interieur van compacte studio-appartementen.",
      "Een grote verscheidenheid aan modellen en de mogelijkheid van individuele bestellingen maken het kopen van Zampieri-meubels gemakkelijk en plezierig — zelfs de kleinste details kunnen worden aangepast aan uw smaak en behoeften.",
    ],
    image: `${wp}/fbef50e4763d4463f7f6119f92163f02-grey-kitchens-contemporary-kitchens.webp`,
    signature: [
      { value: "100%", label: "Made in Italy" },
      { value: "∞", label: "Configuraties" },
      { value: "IT", label: "Design" },
    ],
    roundel: "ZAMPIERI · GEMAAKT IN ITALIË · KEUKENS & KASTEN ·",
    caption: {
      tag: "Showroom Utrecht",
      title: "Italiaanse stijl live te ervaren",
    },
  },
  pillars: {
    eyebrow: "Drie pijlers",
    titleBefore: "Italiaanse kwaliteit, maatwerk en",
    titleHighlight: "stijl",
    titleAfter: "in balans",
    lead: "Zampieri combineert hoogwaardige functionaliteit met een stijlvolle uitstraling — volledig aanpasbaar tot in het kleinste detail.",
    items: [
      {
        title: "Comfort & ergonomie",
        description:
          "Zampieri verrast met comfort en ergonomie — keukens ontworpen voor dagelijks gebruik, waarin koken een genot wordt.",
        icon: "heart",
        image: `${wp}/cucina3.webp`,
      },
      {
        title: "Individuele details",
        description:
          "Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.",
        icon: "layers",
        image: `${wp}/fbef50e4763d4463f7f6119f92163f02-grey-kitchens-contemporary-kitchens.webp`,
      },
      {
        title: "Made in Italy",
        description:
          "Hoogwaardige, functionele en zeer stijlvolle meubels — een grote verscheidenheid aan modellen in diverse kleuren, maten en configuraties.",
        icon: "sparkles",
        image: `${wp}/unnamed.webp`,
      },
    ],
  },
  partnership: {
    ghost: "Zampieri",
    eyebrow: "Direct van fabrikant",
    titleBefore: "Zampieri keukens voor de",
    titleHighlight: "scherpste prijs",
    body: "U koopt een Zampieri keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Zampieri heeft een uitermate breed assortiment — wij nodigen u van harte uit om in onze showroom te komen kijken.",
    highlights: [
      "Italiaanse kwaliteit en degelijkheid",
      "Gegarandeerd de laagste prijs",
      "Geen zorgen over installatie dankzij onze eigen montagedienst",
      "Standaard vijf jaar garantie",
      "Altijd één jaar garantie op montagewerkzaamheden",
    ],
    note: "Al een offerte elders? Neem deze mee — wij bieden vrijwel altijd beter.",
    stats: defaultPartnershipStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Zampieri",
    titleHighlight: "in beeld",
    lead: "Italiaanse keukenopstellingen — stijlvol, functioneel en volledig aanpasbaar.",
    items: [
      {
        src: `${wp}/cucina3.webp`,
        title: "Italiaanse elegantie",
        tag: "Showroom Utrecht",
        span: "large",
      },
      {
        src: `${wp}/fbef50e4763d4463f7f6119f92163f02-grey-kitchens-contemporary-kitchens.webp`,
        title: "Contemporary kitchens",
        tag: "Design",
        span: "medium",
      },
      {
        src: `${wp}/unnamed.webp`,
        title: "Detail & afwerking",
        tag: "Maatwerk",
        span: "medium",
      },
    ],
    cta: {
      titleBefore: "Liever",
      titleHighlight: "in het echt",
      body: "Zampieri opstellingen staan voor u klaar op de Zonnebaan — ontdek het assortiment in onze showroom.",
      label: "Boek een afspraak",
      href: "/#consultation",
    },
  },
  custom: sharedCustomBlock,
  faq: {
    titleBefore: "Alles wat u wilt weten over",
    titleHighlight: "Zampieri",
    items: sharedKitchenFaq,
  },
  advisors: sharedAdvisors,
  showroomCta: {
    eyebrow: "In de showroom",
    titleBefore: "Zampieri",
    titleHighlight: "in het echt",
    titleAfter: "bekijken?",
    subtitle: "Italiaanse keukens en kasten in onze showroom — kom langs in Utrecht.",
    button: "Boek een afspraak",
    href: "/#consultation",
  },
} satisfies BrandPageData;
