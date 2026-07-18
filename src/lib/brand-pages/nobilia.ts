import type { BrandPageData } from "./types";
import {
  wp,
  sharedKitchenFaq,
  sharedCustomBlock,
  sharedAdvisors,
  defaultPartnershipStats,
} from "./shared";

export const nobiliaPage = {
  id: "nobilia",
  name: "Nobilia",
  country: "Duitsland",
  meta: {
    title: "Nobilia keukens · Duitse kwaliteit bij Keuken-Centrum Utrecht",
    description:
      "Ontdek Nobilia bij Keuken-Centrum Utrecht. Officieel Duits merk, gegarandeerd laagste prijs, eigen montagedienst en vijf jaar standaardgarantie — ruim een half miljoen keukens per jaar.",
  },
  logo: `${wp}/Logo-524-112-1.webp`,
  hero: {
    image: `${wp}/453_flash.webp`,
    eyebrow: "Gemaakt in Duitsland",
    title: "Nobilia",
    highlight: "Duitse kwaliteit. Scherpe prijs.",
    subtitle:
      "Europa's meest verkochte keukenmerk — trendy decors, eindeloze variatie en betrouwbare Duitse degelijkheid, snel geleverd en professioneel gemonteerd.",
    cta: {
      primary: "Bezoek showroom",
      primaryHref: "/#consultation",
      secondary: "Bel direct",
      secondaryHref: "tel:+31302415122",
    },
    badges: [
      { value: "DE", label: "Kwaliteit" },
      { value: "Beste", label: "Prijs" },
      { value: "5 jr", label: "Garantie" },
    ],
  },
  intro: {
    eyebrow: "Het merk",
    titleBefore: "Bijna een half miljoen keukens per jaar —",
    titleHighlight: "kwaliteit",
    titleAfter: "die nooit uit het oog verloren gaat",
    paragraphs: [
      "Nobilia is het officiële Duitse keukenmerk dat jaarlijks bijna een half miljoen keukens produceert en verkoopt. Ruim dertig procent van de complete productie vindt zijn weg naar Duitse huishoudens — een bewijs van vertrouwen in de thuismarkt.",
      "Bij dit schaalbare productieproces gaat kwaliteit nooit verloren. Processen verlopen probleemloos, waardoor elke keuken dezelfde Duitse degelijkheid en betrouwbaarheid uitstraalt — van trendy decors tot innovatieve kwaliteitsverbeteringen tot in detail.",
      "Niet alleen de betaalbaarheid maakt Nobilia aantrekkelijk, maar ook de zekerheid die wij bieden: snelle levering, professionele montage door onze eigen montagedienst en gegarandeerd de laagste prijs van topkwaliteit met topservice.",
    ],
    image: `${wp}/Schermafbeelding-2021-06-07-om-16.37.15.webp`,
    signature: [
      { value: "~500k", label: "Keukens per jaar" },
      { value: "30%", label: "Verkoop in DE" },
      { value: "DE", label: "Productie" },
    ],
    roundel: "NOBILIA · GEMAAKT IN DUITSLAND · EUROPA'S KEUKENMERK ·",
    caption: {
      tag: "Showroom Utrecht",
      title: "Uitermate breed assortiment live te ervaren",
    },
  },
  pillars: {
    eyebrow: "Drie pijlers",
    titleBefore: "Trendy design, doorlopende lijnvoering en",
    titleHighlight: "innovatie",
    titleAfter: "tot in detail",
    lead: "Nobilia combineert een enorme variatie aan ontwerpen met unieke lijnvoering en continue kwaliteitsverbeteringen.",
    items: [
      {
        title: "Trendy decors & variatie",
        description:
          "Met name op trendy decors, een grote variatie aan ontwerpen, unieke doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.",
        icon: "grid",
        image: `${wp}/453_flash.webp`,
      },
      {
        title: "Duitse kwaliteit",
        description:
          "Duitse kwaliteit en degelijkheid — bijna een half miljoen keukens per jaar, zonder concessies aan productieprocessen of afwerking.",
        icon: "shield",
        image: `${wp}/Schermafbeelding-2021-06-07-om-16.37.15.webp`,
      },
      {
        title: "Snelle levering & montage",
        description:
          "Doordat wij de keuken snel kunnen leveren en monteren, bent u in no-time aan de slag in uw nieuwe keuken — zonder zorgen over installatie.",
        icon: "award",
        image: `${wp}/Schermafbeelding-2021-06-07-om-16.39.24.webp`,
      },
    ],
  },
  partnership: {
    ghost: "Nobilia",
    eyebrow: "Direct van fabrikant",
    titleBefore: "Nobilia keukens voor de",
    titleHighlight: "scherpste prijs",
    body: "U koopt een Nobilia keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Nobilia heeft een uitermate breed assortiment — wij nodigen u van harte uit om in onze showroom te komen kijken.",
    highlights: [
      "Duitse kwaliteit en degelijkheid",
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
    titleBefore: "Nobilia",
    titleHighlight: "in beeld",
    lead: "Officiële keukenopstellingen — trendy decors en eindeloze configuratiemogelijkheden.",
    items: [
      {
        src: `${wp}/453_flash.webp`,
        title: "Trendy decors",
        tag: "Showroom Utrecht",
        span: "large",
      },
      {
        src: `${wp}/Schermafbeelding-2021-06-07-om-16.37.15.webp`,
        title: "Doorlopende lijnvoering",
        tag: "Design",
        span: "medium",
      },
      {
        src: `${wp}/Schermafbeelding-2021-06-07-om-16.39.24.webp`,
        title: "Detail & afwerking",
        tag: "Kwaliteit",
        span: "medium",
      },
    ],
    cta: {
      titleBefore: "Liever",
      titleHighlight: "in het echt",
      body: "Nobilia opstellingen staan voor u klaar op de Zonnebaan — kom langs en ontdek het volledige assortiment.",
      label: "Boek een afspraak",
      href: "/#consultation",
    },
  },
  custom: sharedCustomBlock,
  faq: {
    titleBefore: "Alles wat u wilt weten over",
    titleHighlight: "Nobilia",
    items: sharedKitchenFaq,
  },
  advisors: sharedAdvisors,
  showroomCta: {
    eyebrow: "In de showroom",
    titleBefore: "Nobilia",
    titleHighlight: "in het echt",
    titleAfter: "bekijken?",
    subtitle: "Uitermate breed assortiment in onze showroom — kom langs in Utrecht.",
    button: "Boek een afspraak",
    href: "/#consultation",
  },
} satisfies BrandPageData;
