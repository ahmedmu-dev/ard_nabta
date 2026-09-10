import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    slug: "structural-steel",
    name: "Structural Steel",
    description:
      "Custom-engineered steel frameworks fabricated to project-specific load and design requirements.",
    image: {
      src: "/images/products/structural-steel.svg",
      alt: "Structural Steel fabricated by Ferrum Steel",
    },
  },
  {
    slug: "pre-engineered-buildings",
    name: "Pre-Engineered Buildings",
    description:
      "Fast-track, factory-fabricated steel buildings optimized for cost and speed of erection.",
    image: {
      src: "/images/products/pre-engineered-buildings.svg",
      alt: "Pre-Engineered Buildings fabricated by Ferrum Steel",
    },
  },
  {
    slug: "building-subsystems",
    name: "Building Subsystems",
    description:
      "Mezzanines, crane systems, and secondary structures integrated into your primary steel frame.",
    image: {
      src: "/images/products/building-subsystems.svg",
      alt: "Building Subsystems fabricated by Ferrum Steel",
    },
  },
  {
    slug: "sheeting-systems",
    name: "Sheeting Systems",
    description:
      "Roof and wall cladding systems engineered for weather performance and thermal efficiency.",
    image: {
      src: "/images/products/sheeting-systems.svg",
      alt: "Sheeting Systems fabricated by Ferrum Steel",
    },
  },
  {
    slug: "steel-decking",
    name: "Steel Decking",
    description:
      "Composite and non-composite decking solutions for floor and roof slab construction.",
    image: {
      src: "/images/products/steel-decking.svg",
      alt: "Steel Decking fabricated by Ferrum Steel",
    },
  },
  {
    slug: "crane-bridge-girders",
    name: "Crane Bridge Girders",
    description:
      "Heavy-duty girders engineered for industrial crane systems and material-handling loads.",
    image: {
      src: "/images/products/crane-bridge-girders.svg",
      alt: "Crane Bridge Girders fabricated by Ferrum Steel",
    },
  },
];
