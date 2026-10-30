export type ServiceCategory = "cybersecurity" | "web-development";

export interface Project {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  accentGlyph?: string;
  image?: string;
  href?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
