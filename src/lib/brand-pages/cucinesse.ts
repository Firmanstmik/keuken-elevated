import type { BrandPageData } from "./types";
import {
  wp,
  sharedKitchenFaq,
  sharedCustomBlock,
  sharedAdvisors,
  defaultPartnershipStats,
} from "./shared";

export const cucinessePage = {
  id: "cucinesse",
  name: "Cucinesse",
  country: "Italië",
  founded: "1979",
  meta: {
    title: "Cucinesse keukens · Italiaans maatwerk bij Keuken-Centrum Utrecht",
    description:
      "Ontdek Cucinesse bij Keuken-Centrum Utrecht. Modulaire Italiaanse keukens sinds 1979, met oneindig veel oplossingen, bijpassende livingmeubels en meer dan 25 jaar ervaring bij Keuken-Centrum.",
  },
  hero: {
    image: `${wp}/cucinesse-cucina-LAB-3-3.webp`,
    eyebrow: "Gemaakt in Italië · sinds 1979",
    title: "Cucinesse",
    highlight: "Modulair. Uniek. Tijdloos.",
    subtitle:
      "Modulaire keukens met oneindig veel oplossingen: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, aangevuld met bijpassende livingmeubels op maat.",
    cta: {
      primary: "Bezoek showroom",
      primaryHref: "/#consultation",
      secondary: "Bel direct",
      secondaryHref: "tel:+31302415122",
    },
    badges: [
      { value: "1979", label: "Opgericht" },
      { value: "IT", label: "Maatwerk" },
      { value: "5 jr", label: "Garantie" },
    ],
  },
  intro: {
    eyebrow: "Het merk",
    titleBefore: "Van Sergio Pazzaglia's werkplaats tot",
    titleHighlight: "wereldspeler",
    titleAfter: "in modulaire keukens",
    paragraphs: [
      "Het verhaal van het Italiaanse keukenmerk Cucinesse begint in 1979, wanneer de jonge Sergio Pazzaglia zijn werkervaring in hout wilde benutten om zijn eigen werkplaats te openen voor de productie en montage van meubels.",
      "Ruim veertig jaar later is Cucinesse getransformeerd tot een hoofdrolspeler in de productie van modulaire keukens met klanten over de hele wereld. Cucinesse biedt oneindig veel oplossingen om uw keuken uniek te maken, zoals handgrepen op kasten en lades, werkbladen en fronts in vele vormen en afwerkingen.",
      "Bijpassend bij de keukens kunnen ook maatwerk meubels van Cucinesse voor de living in uw ontwerp worden meegenomen: audio meubels, salontafels en wandmeubels op maat, helemaal in stijl met de keuken voor meer rust en eenheid.",
    ],
    image: `${wp}/cucinesse-cucina-lab-4-5.webp`,
    signature: [
      { value: "1979", label: "Opgericht" },
      { value: "25+", label: "Jaar KC-partner" },
      { value: "IT", label: "Modulair" },
    ],
    roundel: "CUCINESSE · GEMAAKT IN ITALIË · MODULAIRE KEUKENS ·",
    caption: {
      tag: "Showroom Utrecht",
      title: "Modulaire keukens en 3D-ontwerp",
    },
  },
  pillars: {
    eyebrow: "Drie pijlers",
    titleBefore: "Creativiteit, vakmanschap en",
    titleHighlight: "ervaring",
    titleAfter: "van A tot Z",
    lead: "Uw unieke keuken vraagt om creativiteit en vakmanschap. Bij Keuken-Centrum combineren wij dat met ruim 25 jaar ervaring sinds 1997.",
    items: [
      {
        title: "Modulaire vrijheid",
        description:
          "Oneindig veel oplossingen om uw keuken uniek te maken: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, volledig naar wens.",
        icon: "grid",
        image: `${wp}/cucinesse-cucina-LAB-3-3.webp`,
      },
      {
        title: "Living in stijl",
        description:
          "Bijpassende maatwerk meubels voor de living, zoals audio meubels, salontafels en wandmeubels op maat, helemaal in stijl met de keuken voor tijdloze eenheid.",
        icon: "layers",
        image: `${wp}/cucinesse-cucina-lab-4-5.webp`,
      },
      {
        title: "Vakmanschap & service",
        description:
          "Creativiteit om het ideale ontwerp te maken en vakmanschap om een prachtig plan om te zetten in resultaat. Van A tot Z wordt u op uw wenken bediend, binnen budget en volgens planning.",
        icon: "award",
        image: `${wp}/3d-ontwerp-1.3.webp`,
      },
    ],
  },
  partnership: {
    ghost: "Cucinesse",
    eyebrow: "Direct van fabrikant",
    titleBefore: "Cucinesse keukens voor de",
    titleHighlight: "scherpste prijs",
    body: "U koopt een Cucinesse keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Cucinesse heeft een uitermate breed assortiment. Wij nodigen u van harte uit om in onze showroom te komen kijken. Ons gevoel en ruim 25 jaar ervaring sinds 1997 spelen daarbij een grote rol.",
    highlights: [
      "Italiaanse kwaliteit en degelijkheid",
      "Gegarandeerd de laagste prijs",
      "Geen zorgen over installatie dankzij onze eigen montagedienst",
      "Standaard vijf jaar garantie",
      "Altijd één jaar garantie op montagewerkzaamheden",
    ],
    note: "Al een offerte elders? Neem deze mee. Wij bieden vrijwel altijd beter.",
    stats: defaultPartnershipStats,
  },
  gallery: {
    eyebrow: "Inspiratie",
    titleBefore: "Cucinesse",
    titleHighlight: "in beeld",
    lead: "Modulaire keukenopstellingen en 3D-ontwerpen, volledig op maat samen te stellen.",
    items: [
      {
        src: `${wp}/cucinesse-cucina-LAB-3-3.webp`,
        title: "Cucina LAB",
        tag: "Showroom Utrecht",
        span: "large",
      },
      {
        src: `${wp}/cucinesse-cucina-lab-4-5.webp`,
        title: "Modulaire opstelling",
        tag: "Design",
        span: "medium",
      },
      {
        src: `${wp}/3d-ontwerp-1.3.webp`,
        title: "3D-ontwerp",
        tag: "Maatwerk",
        span: "medium",
      },
      {
        src: `${wp}/3d-ontwerp-2.3.webp`,
        title: "Stap voor stap ontwerpen",
        tag: "3D-software",
        span: "wide",
      },
      {
        src: `${wp}/10-1.webp`,
        title: "Detail & afwerking",
        tag: "Kwaliteit",
        span: "medium",
      },
    ],
    cta: {
      titleBefore: "Liever",
      titleHighlight: "in het echt",
      body: "Cucinesse opstellingen en 3D-ontwerpen staan voor u klaar. Kom langs op de Zonnebaan.",
      label: "Boek een afspraak",
      href: "/#consultation",
    },
  },
  custom: sharedCustomBlock,
  faq: {
    titleBefore: "Alles wat u wilt weten over",
    titleHighlight: "Cucinesse",
    items: sharedKitchenFaq,
  },
  advisors: sharedAdvisors,
  showroomCta: {
    eyebrow: "In de showroom",
    titleBefore: "Cucinesse",
    titleHighlight: "in het echt",
    titleAfter: "bekijken?",
    subtitle: "Modulaire Italiaanse keukens en 3D-ontwerp in onze showroom. Kom langs in Utrecht.",
    button: "Boek een afspraak",
    href: "/#consultation",
  },
} satisfies BrandPageData;
