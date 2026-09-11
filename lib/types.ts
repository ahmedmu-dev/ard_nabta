import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Project {
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  oneLiner: string;
  details: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface SampleImage {
  src: string;
  alt: string;
}

/** Photo gallery set for the dedicated /projects samples page. */
export interface SampleProject {
  slug: string;
  name: string;
  sector: string;
  location: string;
  year: string;
  oneLiner: string;
  images: SampleImage[];
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

export interface NewsItem {
  slug: string;
  date: string;
  headline: string;
  summary: string;
}

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
