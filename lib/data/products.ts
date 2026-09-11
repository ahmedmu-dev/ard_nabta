import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    slug: "new-villa-construction",
    name: "New Villa Construction",
    description:
      "Turnkey villa builds from foundation through structure, envelope, and Dubai Municipality handover. One licensed contractor owns the programme on site.",
    highlights: [
      "G+1 / G+2 villa structures",
      "Permit coordination with DM",
      "Full structural & finishing package",
      "Completion certificate support",
    ],
    image: {
      src: "/images/products/new-villa-construction.jpg",
      alt: "New villa under construction",
    },
  },
  {
    slug: "villa-extensions-annexes",
    name: "Extensions & Annexes",
    description:
      "Majlis halls, family annexes, and approved structural modifications that expand an existing villa without disrupting daily life more than necessary.",
    highlights: [
      "Majlis & guest annex builds",
      "Modification permits",
      "Structural tie-ins to existing villa",
      "External works as required",
    ],
    image: {
      src: "/images/products/villa-extensions-annexes.jpg",
      alt: "Villa annex and extension exterior",
    },
  },
  {
    slug: "interior-fit-out-finishing",
    name: "Fit-Out & Finishing",
    description:
      "Ceilings, wet areas, kitchens, flooring, and MEP finishing carried to move-in standard as part of the same build team.",
    highlights: [
      "Bathrooms & wet areas",
      "False ceilings & lighting",
      "AC & MEP finishing",
      "Joinery coordination",
    ],
    image: {
      src: "/images/products/interior-fit-out-finishing.jpg",
      alt: "Finished villa bathroom interior",
    },
  },
  {
    slug: "boundary-walls-external-works",
    name: "Walls & External Works",
    description:
      "Perimeter walls, gates, landscaping edges, and external hardscape coordinated with the main villa package.",
    highlights: [
      "Boundary walls & fencing",
      "Entrance gates",
      "External paving & drains",
      "Site grading support",
    ],
    image: {
      src: "/images/products/boundary-walls-external-works.jpg",
      alt: "Villa boundary wall and gate",
    },
  },
];
