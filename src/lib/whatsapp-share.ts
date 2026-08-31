type ConfiguratorStyle = {
  id: string;
  base?: string;
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

export function resolveKitchenImageUrl(
  state: ConfiguratorState,
  catalog: ConfiguratorCatalog,
): string {
  if (!state.style) return "";
  const style = (catalog.styles || []).find((item) => item.id === state.style);
  return style?.base || "";
}

async function kitchenImageFile(imageUrl: string): Promise<File | null> {
  try {
    const response = await fetch(imageUrl, { credentials: "same-origin" });
    if (!response.ok) return null;
    const blob = await response.blob();
    if (!blob.size) return null;
    const extension = imageUrl.includes(".webp")
      ? "webp"
      : imageUrl.includes(".png")
        ? "png"
        : "jpg";
    return new File([blob], `mijn-keukenvoorstel.${extension}`, {
      type: blob.type || `image/${extension}`,
    });
  } catch {
    return null;
  }
}

export async function openConfiguratorWhatsApp(options: {
  phone: string;
  message: string;
  imageUrl?: string;
}) {
  const { phone, message, imageUrl = "" } = options;
  const imageFile = imageUrl ? await kitchenImageFile(imageUrl) : null;

  if (imageFile && navigator.share) {
    try {
      const shareData = { text: message, files: [imageFile] };
      if (!navigator.canShare || navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
    }
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
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
}): string {
  const { name, email, phone, showroom, date, notes, state, catalog, categories } = input;
  const imageUrl = resolveKitchenImageUrl(state, catalog);
  const parts = [
    "Hallo Keuken-Centrum, ik heb zojuist mijn keukenconfiguratie samengesteld via jullie configurator.",
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
  if (imageUrl) {
    parts.push("", "Keukenvoorbeeld (afbeelding):", imageUrl);
  }
  if (notes) {
    parts.push("", "Wensen:", notes);
  }

  return parts.join("\n");
}
