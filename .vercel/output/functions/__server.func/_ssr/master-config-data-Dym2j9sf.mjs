import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { K as KeyboardArrowDownIcon, d as HomeOutlinedIcon, C as CallOutlinedIcon, c as EmailOutlinedIcon, L as LocalOfferOutlinedIcon, b as CloseIcon, e as KeyboardArrowUpIcon, a as CheckIcon, F as FiberManualRecordIcon, S as SearchIcon, W as WestIcon, E as EastIcon } from "../_libs/mui__icons-material.mjs";
function makeIcon(Icon) {
  return function WrappedIcon(props) {
    const { size = 24, style, color, fontSize, ...rest } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Icon,
      {
        ...rest,
        style: { fontSize: typeof size === "number" ? `${size}px` : size, color, ...style }
      }
    );
  };
}
const Check = makeIcon(CheckIcon);
const ChevronDown = makeIcon(KeyboardArrowDownIcon);
const ChevronUp = makeIcon(KeyboardArrowUpIcon);
const X = makeIcon(CloseIcon);
const Circle = makeIcon(FiberManualRecordIcon);
const Search = makeIcon(SearchIcon);
const ArrowLeft = makeIcon(WestIcon);
const ArrowRight = makeIcon(EastIcon);
const HouseIcon = makeIcon(HomeOutlinedIcon);
const House = HouseIcon;
const Mail = makeIcon(EmailOutlinedIcon);
const Phone = makeIcon(CallOutlinedIcon);
const Tag = makeIcon(LocalOfferOutlinedIcon);
const logoKeuken = "/assets/logo-keuken-1-1-DR6Vt5jO.webp";
const leichtImg = "/assets/leicht-hero-CZzALZ83.webp";
const aiKuchenImg = "/assets/aikuchen-hero-Bji7Jfbo.webp";
const nobiliaImg = "/assets/nobilia-hero-Dx2s-Eqa.webp";
const zampieriImg = "/assets/zampieri-hero-B6z1yfjO.webp";
const cucinesseImg = "/assets/cucinesse-hero-CEq7NsNK.webp";
const masterBrands = [
  {
    id: "leicht",
    name: "LEICHT",
    tagline: "Duitse precisie",
    description: "Sinds 1928 staat LEICHT voor Duits keukenambacht met compromisloze precisie en een tijdloos ontwerp.",
    origin: "Duitsland",
    image: leichtImg,
    accentColor: "#8A7560"
  },
  {
    id: "ai-kuchen",
    name: "AI Küchen",
    tagline: "Hedendaagse innovatie",
    description: "Waar intelligent ontwerp en modern wonen samenkomen. AI Küchen verkent de toekomst van keukenarchitectuur met vooruitstrevende innovatie.",
    origin: "Duitsland",
    image: aiKuchenImg,
    accentColor: "#6A7A6A"
  },
  {
    id: "nobilia",
    name: "Nobilia",
    tagline: "Moderne functionaliteit",
    description: "Een van Europa's sterkste namen in functioneel keukendesign. Nobilia verbindt Duitse precisie met eigentijds wonen voor ruimtes met blijvende kwaliteit.",
    origin: "Duitsland",
    image: nobiliaImg,
    accentColor: "#7A8090"
  },
  {
    id: "zampieri",
    name: "Zampieri",
    tagline: "Italiaans design",
    description: "Ontstaan in de Venetoregio in Italie, transformeert Zampieri keukens tot ware designobjecten met uitzonderlijk Italiaans vakmanschap.",
    origin: "Italie",
    image: zampieriImg,
    accentColor: "#8A6050"
  },
  {
    id: "cucinesse",
    name: "Cucinesse",
    tagline: "Luxe leefconcepten",
    description: "Cucinesse ontwerpt zeer persoonlijke keukenomgevingen. Elk project is een verfijnd luxeconcept dat volledig op het leven van de klant is afgestemd.",
    origin: "Belgie",
    image: cucinesseImg,
    accentColor: "#B08D57"
  }
];
const masterStyles = [
  {
    id: "modern",
    name: "Modern",
    description: "Strakke lijnen, geintegreerde apparatuur en een monochroom palet bepalen deze architectonische benadering van keukendesign.",
    image: "/style-modern.webp",
    keywords: ["Minimalistisch", "Greeploos", "Architectonisch"]
  },
  {
    id: "klassiek",
    name: "Klassiek",
    description: "Tijdloze elegantie door klassieke verhoudingen, verfijnde details en materialen die met de jaren alleen maar mooier worden.",
    image: "/style-klassiek.webp",
    keywords: ["Shaker", "Traditioneel", "Tijdloos"]
  },
  {
    id: "landelijk",
    name: "Landelijk",
    description: "De warmte van natuurlijke materialen en ambachtelijke details uit het buitenleven, vertaald naar een verfijnde eigentijdse keuken.",
    image: "/style-landelijk.webp",
    keywords: ["Natuurlijk", "Warm", "Ambachtelijk"]
  },
  {
    id: "industrieel",
    name: "Industrieel",
    description: "Ruwe stedelijke materialen krijgen een hoogwaardig designkarakter. Staal, beton en zichtbare structuren zorgen voor een krachtige uitstraling.",
    image: "/style-industrieel.webp",
    keywords: ["Rauw", "Stedelijk", "Krachtig"]
  }
];
const masterCategories = [
  {
    id: "front",
    label: "Front",
    options: [
      { id: "matte-black", name: "Mat zwart", color: "#1A1A1A", description: "Ultramat gelakt in diep zwart" },
      { id: "cashmere", name: "Cashmere", color: "#C4B49A", description: "Warme greige met zachte matte afwerking" },
      { id: "taupe", name: "Taupe", color: "#8B7D6B", description: "Verfijnde aardetint in middentoon" },
      { id: "olive", name: "Olijf", color: "#6B6B4A", description: "Gedempt botanisch groen" },
      { id: "anthracite", name: "Antraciet", color: "#3D3D3D", description: "Diep leigrijs in matte afwerking" },
      { id: "cream", name: "Creme", color: "#E8E0D0", description: "Zuivere zijdewitte afwerking" }
    ]
  },
  {
    id: "worktop",
    label: "Werkblad",
    options: [
      { id: "marble-white", name: "Wit marmer", color: "#F2EFE8", description: "Calacatta Oro marmerplaat" },
      { id: "marble-grey", name: "Grijs marmer", color: "#B8B4AE", description: "Bardiglio Imperiale marmer" },
      { id: "travertine", name: "Travertin", color: "#C8B898", description: "Klassiek Romeins travertin" },
      { id: "concrete", name: "Beton", color: "#9A9690", description: "Gepolijst betonoppervlak" },
      { id: "black-stone", name: "Zwarte steen", color: "#2A2A2A", description: "Absolute Black graniet" },
      { id: "oak", name: "Massief eiken", color: "#B08050", description: "Frans eiken massief hout" }
    ]
  },
  {
    id: "sink",
    label: "Spoelbak",
    options: [
      { id: "sink-stainless", name: "RVS", color: "#C8C8C8", description: "Blanco Andano in geborsteld staal" },
      { id: "sink-white", name: "Keramisch wit", color: "#F5F3EE", description: "Villeroy & Boch keramiek" },
      { id: "sink-anthracite", name: "Antraciet", color: "#3D3D3D", description: "Blanco Silgranit graniet" },
      { id: "sink-copper", name: "Koper", color: "#B87333", description: "Handgemaakte koperen kom" }
    ]
  },
  {
    id: "appliances",
    label: "Apparatuur",
    options: [
      { id: "miele", name: "Miele", color: "#F0F0F0", description: "Miele Generation 7000 serie" },
      { id: "gaggenau", name: "Gaggenau", color: "#E0E0E0", description: "Gaggenau 400 serie" },
      { id: "siemens", name: "Siemens", color: "#D8D8D8", description: "Siemens iQ700 serie" },
      { id: "neff", name: "NEFF", color: "#D0D0D0", description: "NEFF Slide & Hide serie" }
    ]
  },
  {
    id: "quooker",
    label: "Quooker",
    options: [
      { id: "quooker-chrome", name: "Chroom", color: "#D0D0D0", description: "Quooker Fusion Classic Chroom" },
      { id: "quooker-black", name: "Mat zwart", color: "#1A1A1A", description: "Quooker Fusion Classic Zwart" },
      { id: "quooker-gold", name: "Goud", color: "#B08D57", description: "Quooker Fusion Goud" },
      { id: "quooker-none", name: "Geen", color: "#F7F5F2", description: "Zonder Quooker-kraan" }
    ]
  },
  {
    id: "bora",
    label: "BORA",
    options: [
      { id: "bora-pro", name: "BORA Pro", color: "#D0D0D0", description: "BORA Pro 3.0 integrated cooktop" },
      { id: "bora-x", name: "BORA X BO", color: "#1A1A1A", description: "BORA X BO pure induction" },
      { id: "bora-basic", name: "BORA Basic", color: "#C0C0C0", description: "BORA Basic extraction system" },
      { id: "bora-none", name: "None", color: "#F7F5F2", description: "Standard extraction hood" }
    ]
  },
  {
    id: "handles",
    label: "Grepen",
    options: [
      { id: "handle-none", name: "Greeploos", color: "#E0E0E0", description: "Geintegreerd J-profiel" },
      { id: "handle-brass", name: "Geborsteld messing", color: "#B08D57", description: "Massieve messing staafgreep" },
      { id: "handle-chrome", name: "Chroom", color: "#D0D0D0", description: "Gepolijste chromen staafgreep" },
      { id: "handle-black", name: "Mat zwart", color: "#1A1A1A", description: "Zwart gepoedercoate greep" }
    ]
  },
  {
    id: "lighting",
    label: "Verlichting",
    options: [
      { id: "light-recessed", name: "Inbouw led", color: "#F5F0E8", description: "Geintegreerde plafondspots" },
      { id: "light-pendant", name: "Hanglamp", color: "#C0A060", description: "Design hangverlichting" },
      { id: "light-under", name: "Onderkast", color: "#F0EAD8", description: "Warmwitte ledstrip" },
      { id: "light-all", name: "Compleet systeem", color: "#B08D57", description: "Volledig lichtconcept" }
    ]
  }
];
const masterBudgetRanges = {
  leicht: "€45,000 tot €85,000",
  "ai-kuchen": "€35,000 tot €65,000",
  nobilia: "€25,000 tot €50,000",
  zampieri: "€55,000 tot €110,000",
  cucinesse: "€65,000 tot €150,000"
};
const masterShowrooms = [
  "Amsterdam, P.C. Hooftstraat",
  "Rotterdam, Coolsingel",
  "Utrecht, Vredenburg",
  "Den Haag, Noordeinde",
  "Antwerpen, Meir"
];
const masterConsultationBudgets = [
  "€20,000 tot €40,000",
  "€40,000 tot €70,000",
  "€70,000 tot €120,000",
  "€120,000 tot €200,000",
  "€200,000+"
];
const masterHotspotPositions = [
  { id: "front", label: "Front", x: "30%", y: "45%" },
  { id: "worktop", label: "Werkblad", x: "52%", y: "58%" },
  { id: "sink", label: "Spoelbak", x: "62%", y: "50%" },
  { id: "appliances", label: "Apparatuur", x: "14%", y: "38%" },
  { id: "quooker", label: "Quooker", x: "68%", y: "47%" },
  { id: "bora", label: "BORA", x: "48%", y: "52%" },
  { id: "lighting", label: "Verlichting", x: "45%", y: "12%" },
  { id: "handles", label: "Grepen", x: "24%", y: "55%" }
];
export {
  ArrowLeft as A,
  Check as C,
  House as H,
  Mail as M,
  Phone as P,
  Search as S,
  Tag as T,
  X,
  ArrowRight as a,
  ChevronDown as b,
  ChevronUp as c,
  Circle as d,
  masterBudgetRanges as e,
  masterCategories as f,
  masterConsultationBudgets as g,
  masterHotspotPositions as h,
  masterShowrooms as i,
  masterStyles as j,
  logoKeuken as l,
  masterBrands as m
};
