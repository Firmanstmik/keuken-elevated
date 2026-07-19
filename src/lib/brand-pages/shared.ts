import type { BrandPageData } from "./types";

export const sharedKitchenFaq: BrandPageData["faq"]["items"] = [
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
];

export const sharedCustomBlock: BrandPageData["custom"] = {
  eyebrow: "Op maat",
  titleBefore: "Écht",
  titleHighlight: "alles",
  titleAfter: "is mogelijk",
  body: "Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassieke keuken: bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.",
  secondary:
    "Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee. Compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.",
};

export const sharedAdvisors: BrandPageData["advisors"] = [
  {
    name: "Hans",
    role: "Keukenadviseur",
    email: "hans@keuken-centrum.nl",
    bio: "Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen.",
  },
  {
    name: "Danny",
    role: "Keukenadviseur",
    email: "danny@keuken-centrum.nl",
    bio: "Samen maken we uw woonwensen zo concreet en helder mogelijk en passen daar de keuken op aan, zodat u nog jaren kunt genieten.",
  },
];

export const defaultPartnershipStats: BrandPageData["partnership"]["stats"] = [
  { icon: "factory", label: "Directe fabriek", value: "Beste prijs" },
  { icon: "shield", label: "CBW + 10 jaar", value: "Garantie" },
  { icon: "clock", label: "Gemiddelde levertijd", value: "6 tot 8 weken" },
  { icon: "award", label: "ISO 9001 gecertificeerd", value: "Kwaliteit" },
];

export const wp = "https://keuken-centrum.nl/wp-content/uploads";
