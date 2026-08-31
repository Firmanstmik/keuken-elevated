type ConfiguratorStyle = {
  id: string;
  base?: string;
  image?: string;
};

type ConfiguratorCatalog = {
  styles?: ConfiguratorStyle[];
};

type ConfiguratorState = {
  brand?: string | null;
  brandName?: string | null;
  style?: string | null;
  styleName?: string | null;
  selections?: Record<string, { name?: string }>;
};

export function buildConfiguratorShareUrl(
  state: ConfiguratorState,
  moodboardPath = "/moodboard/",
): string {
  const url = new URL(moodboardPath, window.location.origin);
  if (state.brand) url.searchParams.set("merk", state.brand);
  if (state.style) url.searchParams.set("stijl", state.style);
  return url.toString();
}

export function openConfiguratorWhatsApp(options: { phone: string; message: string }) {
  const { phone, message } = options;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

export function buildConfiguratorWhatsAppMessage(input: {
  name: string;
  email: string;
  phone?: string;
  showroom: string;
  date?: string;
  notes?: string;
  state: ConfiguratorState;
  catalog: ConfiguratorCatalog;
  categories: Array<{ id: string; label: string }>;
  moodboardPath?: string;
}): string {
  const { name, email, phone, showroom, date, notes, state, catalog, categories, moodboardPath } =
    input;
  const shareUrl = buildConfiguratorShareUrl(state, moodboardPath);
  const parts = [
    "Hallo Keuken-Centrum, ik heb zojuist mijn keukenconfiguratie samengesteld via jullie configurator.",
    "",
    "Bekijk mijn keukenvoorstel:",
    shareUrl,
    "",
    `Naam: ${name}`,
    `E-mail: ${email}`,
  ];

  if (phone) parts.push(`Telefoon: ${phone}`);
  parts.push(`Showroom: ${showroom}`);
  if (date) parts.push(`Gewenste datum: ${date}`);
  parts.push("", "Mijn keukenconfiguratie:");
  if (state.brandName || state.brand) parts.push(`Merk: ${state.brandName || state.brand}`);
  if (state.styleName || state.style) parts.push(`Stijl: ${state.styleName || state.style}`);

  const selections = categories
    .map((category) => {
      const selection = state.selections?.[category.id];
      return selection?.name ? `- ${category.label}: ${selection.name}` : null;
    })
    .filter((line): line is string => Boolean(line));

  if (selections.length) {
    parts.push("", ...selections);
  }
  if (notes) {
    parts.push("", "Wensen:", notes);
  }

  return parts.join("\n");
}
