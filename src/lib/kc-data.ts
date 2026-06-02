// Real data extracted from https://keuken-centrum.nl
// All imagery hosted on keuken-centrum.nl/wp-content/uploads/

const wp = "https://keuken-centrum.nl/wp-content/uploads";

export const kc = {
  brandName: "Keuken-Centrum Utrecht",
  tagline: "De weg naar uw Droomkeuken",
  founded: 1978,
  logo: `${wp}/2018/03/ks-logo-300x121.webp`,
  cbwLogo: `${wp}/cbw.webp`,

  contact: {
    address: "Zonnebaan 8",
    postal: "3542 EC Utrecht",
    phone: "030 241 5122",
    phoneHref: "tel:+31302415122",
    email: "info@keuken-centrum.nl",
    hours: [
      { d: "Maandag tot Vrijdag", h: "09:00 tot 18:00" },
      { d: "Zaterdag", h: "09:00 tot 17:00" },
      { d: "Zondag", h: "Gesloten" },
    ],
    maps: "https://www.google.com/maps/place/Keuken-centrum.nl/",
  },

  hero: {
    main: `${wp}/IMG_0654-LEICHT-JAPANDI-scaled.webp`,
    alt1: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.25.webp`,
    alt2: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.26-1024x768.webp`,
    alt3: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.27.webp`,
    alt4: `${wp}/IMG_0642-1024x768.webp`,
  },

  showroomImg: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.26-1024x768.webp`,
  aanbiedingenImg: `${wp}/keukenshowroom-aanbiedingen-1.webp`,
  aanbiedingen2: `${wp}/keukens-uit-showroom-beste-prijs-.webp`,
  boraImg: `${wp}/Schermafbeelding-2021-05-17-om-22.15.38.webp`,
  quookerImg: `${wp}/quooker_fusion_round_chroom_kraan-978x1024.webp`,
  waveImg: `${wp}/Wave-Model-2119-Alphenberg-1024x1024.webp`,

  // Real kitchen brands
  kitchenBrands: [
    { id: "leicht", name: "Leicht", country: "Duitsland", logo: `${wp}/1200px-Leicht_K%C3%BCchen_logo.svg-1024x325.webp`, story: "Bauhaus-erfgoed sinds 1928. Architectonische precisie uit Waldstetten." },
    { id: "nobilia", name: "Nobilia", country: "Duitsland", logo: `${wp}/Logo-524-112-1.webp`, story: "Marktleider in Europa. Volledig op maat met Duitse betrouwbaarheid." },
    { id: "aikuchen", name: "AI Küchen", country: "Duitsland", logo: `${wp}/Ai-kuchen-keukens-logo-blauw.webp`, story: "Häcker brengt moderne Duitse keukens met onmiskenbaar karakter." },
    { id: "zampieri", name: "Zampieri", country: "Italië", logo: `${wp}/download-1.webp`, story: "Italiaans design in zijn puurste vorm. Materialen die spreken." },
    { id: "cucinesse", name: "Cucinesse", country: "Italië", logo: `${wp}/cucinesse-logo.webp`, story: "Italiaanse maatwerkkeukens met sculpturale rust." },
  ],

  // Real appliance brands
  applianceBrands: [
    { id: "bora", name: "BORA", logo: `${wp}/Logo-524-112-1.webp`, story: "Het BORA principe. Afzuiging naar beneden, daar waar de damp ontstaat." },
    { id: "siemens", name: "Siemens", logo: `${wp}/siemens-logo-1024x431.webp`, story: "studioLine: intelligente apparatuur, naadloos geïntegreerd." },
    { id: "gaggenau", name: "Gaggenau", logo: `${wp}/gaggenau-logo.webp`, story: "Sinds 1683. Apparatuur als professionele keukenarchitectuur." },
    { id: "quooker", name: "Quooker", logo: `${wp}/quookerlogotransparent-1-1536x371.webp`, story: "Kokend water uit de kraan. Veilig, snel, energiezuinig." },
    { id: "miele", name: "Miele" },
    { id: "aeg", name: "AEG" },
    { id: "atag", name: "ATAG" },
    { id: "smeg", name: "Smeg" },
    { id: "bosch", name: "Bosch" },
    { id: "wave", name: "Wave" },
  ],

  // Real worktops
  worktops: [
    { id: "silestone", name: "Silestone", description: "Composiet met hybride mineralen. Vlekbestendig." },
    { id: "dekton", name: "Dekton", description: "Ultracompact. UV-bestendig, voor binnen én buiten." },
    { id: "neolith", name: "Neolith", description: "Sintered stone met grootformaat platen tot 3,6m." },
    { id: "sensa", name: "Sensa", description: "Behandeld natuursteen graniet met 15 jaar garantie." },
  ],

  // Real kitchen styles
  styles: [
    {
      id: "design",
      n: "I",
      t: "Design Keukens",
      d: "Strakke lijnen, hoogwaardige materialen en oog voor detail. Leicht · Zampieri · Cucinesse · AI Küchen.",
      img: `${wp}/IMG_0654-LEICHT-JAPANDI-scaled.webp`,
    },
    {
      id: "modern",
      n: "II",
      t: "Moderne Keukens",
      d: "Minimalistisch wit tot warme houttinten, volledig op maat met de nieuwste apparatuur.",
      img: `${wp}/IMG_0642-1024x768.webp`,
    },
    {
      id: "landelijk",
      n: "III",
      t: "Landelijk Klassiek",
      d: "Tijdloze intimiteit. Natuurlijke materialen voor wie wonen serieus neemt.",
      img: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.27.webp`,
    },
    {
      id: "industrieel",
      n: "IV",
      t: "Industriële Look",
      d: "Robuust karakter. Staal, beton en hout in architectonische harmonie.",
      img: `${wp}/WhatsApp-Image-2023-09-20-at-13.53.25.webp`,
    },
  ],

  // Real team
  team: [
    { name: "Hans", role: "Keukenadviseur", email: "hans@keuken-centrum.nl",
      bio: "Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen." },
    { name: "Danny", role: "Keukenadviseur", email: "danny@keuken-centrum.nl",
      bio: "Samen maken we uw woonwensen concreet en helder, zodat u nog jaren kunt genieten van een keuken die perfect past." },
    { name: "Frank", role: "Apparatuurspecialist", email: "frank@keuken-centrum.nl",
      bio: "Vakidioot en liefhebber van A-merken apparatuur. Kom langs en laat mij u inspireren met wat er allemaal mogelijk is." },
  ],

  // Real services
  services: [
    { t: "Advies op maat", d: "Van A-merken inbouwapparatuur tot werkbladen, kranen, accessoires en verlichting. Alles voor uw keuken." },
    { t: "3D ontwerp", d: "Met onze 3D keukenontwerp software visualiseren wij naar wens werkblad, fronten en apparatuur, exact zoals het wordt." },
    { t: "Levering", d: "Onze adviseur stemt de levering met u af. Persoonlijk contact via e-mail of telefoon." },
    { t: "Installatie", d: "Ervaren monteurs plaatsen uw keuken snel en vakkundig. Wij ontzorgen u van A tot Z." },
  ],

  // Real reviews
  reviews: [
    { a: "Adam", q: "Ik had nog niet eerder van Leicht keukens gehoord, maar toen ik de showroom binnenstapte werd ik snel enthousiast: prachtige keukens die kwaliteit uitstralen met een gave styling!" },
    { a: "Mila", q: "Nergens werd zo goed met ons meegedacht als bij Keuken Centrum Utrecht. Direct een scherpe prijs, in plaats van te moeten onderhandelen. Dankzij Hans hebben wij nu een droomkeuken!" },
    { a: "Mike", q: "Goede prijs en snelle levering. Maar veel belangrijker: geduldig en vakkundig personeel. Alles werd direct opgelost." },
  ],

  // Configurator option sets
  config: {
    brands: ["Leicht", "Nobilia", "AI Küchen", "Zampieri", "Cucinesse"],
    styles: [
      { id: "design", label: "Design", hint: "Strak · monolithisch" },
      { id: "modern", label: "Modern", hint: "Licht · functioneel" },
      { id: "landelijk", label: "Landelijk", hint: "Warm · tijdloos" },
      { id: "industrieel", label: "Industrieel", hint: "Robuust · stoer" },
    ],
    layouts: [
      { id: "rechte", label: "Rechte wand" },
      { id: "l", label: "L-Opstelling" },
      { id: "u", label: "U-Opstelling" },
      { id: "eiland", label: "Met kookeiland" },
      { id: "parallel", label: "Parallel" },
    ],
    finishes: [
      { id: "matwit", label: "Mat Wit", color: "#F1EEE8" },
      { id: "matzwart", label: "Mat Zwart", color: "#1A1A1A" },
      { id: "eiken", label: "Natuur Eiken", color: "#B08A5C" },
      { id: "antraciet", label: "Antraciet", color: "#33373B" },
      { id: "kashmir", label: "Kashmir Beige", color: "#C9BFA8" },
      { id: "klei", label: "Klei Grijs", color: "#8E8B82" },
    ],
    worktops: ["Silestone", "Dekton", "Neolith", "Sensa"],
    appliances: ["Siemens studioLine", "Gaggenau 200 Serie", "Miele Generation 7000", "AEG Mastery", "Bosch Serie 8"],
    sinks: ["Onderbouw RVS", "Composiet Antraciet", "Naadloos in werkblad"],
    quooker: ["Geen", "Quooker Fusion", "Quooker Flex", "Quooker CUBE"],
    bora: ["Geen", "BORA Pure", "BORA X Pure", "BORA Classic 2.0", "BORA Professional"],
    accessories: ["LED-verlichting", "Soft-close lades", "Kruidenrek", "Cargo-systeem", "Hoekoplossing carrousel"],
    budgets: [
      { id: "10-20", label: "€ 10.000 tot € 20.000" },
      { id: "20-35", label: "€ 20.000 tot € 35.000" },
      { id: "35-55", label: "€ 35.000 tot € 55.000" },
      { id: "55+",  label: "€ 55.000+" },
    ],
  },
};
