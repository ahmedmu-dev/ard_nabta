import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  /** v2 note: when true this will become a real route instead of an in-page anchor. */
  isRoute?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Project {
  slug: string;
  name: string;
  sector: string;
  oneLiner: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface NewsItem {
  slug: string;
  date: string;
  headline: string;
  summary: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
