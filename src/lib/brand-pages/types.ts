export type BrandPillarIcon = "sparkles" | "layers" | "grid" | "shield" | "award" | "heart";

export type BrandGallerySpan = "large" | "medium" | "wide";

export type BrandPageData = {
  id: string;
  name: string;
  legacyName?: string;
  country: string;
  founded?: string;
  meta: {
    title: string;
    description: string;
  };
  /** Remote logo URL (optional — prefer `logoSrc` prop for local assets). */
  logo?: string;
  hero: {
    image: string;
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: {
      primary: string;
      primaryHref: string;
      secondary: string;
      secondaryHref: string;
    };
    badges: Array<{ value: string; label: string }>;
  };
  intro: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    paragraphs: string[];
    image: string;
    signature: Array<{ value: string; label: string }>;
    roundel: string;
    caption: { tag: string; title: string };
  };
  pillars: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    lead: string;
    items: Array<{
      title: string;
      description: string;
      icon: BrandPillarIcon;
      image?: string;
    }>;
  };
  partnership: {
    ghost: string;
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    body: string;
    highlights: string[];
    note: string;
    stats: Array<{
      icon: "factory" | "shield" | "clock" | "award";
      label: string;
      value: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    lead: string;
    items: Array<{
      src: string;
      title: string;
      tag: string;
      span: BrandGallerySpan;
      href?: string;
    }>;
    cta: {
      titleBefore: string;
      titleHighlight: string;
      body: string;
      label: string;
      href: string;
    };
  };
  /** Optional series / model grid (used heavily by Leicht). */
  series?: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    lead: string;
    items: Array<{
      id: string;
      name: string;
      image: string;
      tag?: string;
      href?: string;
      featured?: boolean;
    }>;
  };
  catalogs?: Array<{ title: string; href: string; subtitle?: string }>;
  custom: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    body: string;
    secondary: string;
  };
  faq: {
    titleBefore: string;
    titleHighlight: string;
    items: Array<{ q: string; a: string }>;
  };
  advisors: Array<{
    name: string;
    role: string;
    email: string;
    bio: string;
  }>;
  showroomCta: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter?: string;
    subtitle: string;
    button: string;
    href: string;
  };
};
