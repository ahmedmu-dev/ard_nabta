import type { Product } from "@/lib/types";

/**
 * Ard Nabta's building scope, based on the 3 Dubai Municipality completion
 * certificates supplied (villa new-builds, a majlis/annex, and a villa +
 * boundary wall extension). Confirm the full service list with the company
 * before treating this as exhaustive — see CONTENT_PERSONALIZATION_PLAN.md.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "new-villa-construction",
    name: "New Villa Construction",
    description:
      "Full turnkey villa builds from foundation to handover, managed under Dubai Municipality-licensed permits.",
    image: {
      src: "/images/products/new-villa-construction.jpg",
      alt: "New villa under construction, built by Ard Nabta Building Contracting",
    },
  },
  {
    slug: "villa-extensions-annexes",
    name: "Villa Extensions & Annexes",
    description:
      "Majlis additions, family annexes, and approved structural modifications to existing villas.",
    image: {
      src: "/images/products/villa-extensions-annexes.jpg",
      alt: "Completed villa annex built by Ard Nabta Building Contracting",
    },
  },
  {
    slug: "interior-fit-out-finishing",
    name: "Interior Fit-Out & Finishing",
    description:
      "Flooring, ceilings, bathrooms, and kitchens finished to move-in standard as part of the build.",
    image: {
      src: "/images/products/interior-fit-out-finishing.jpg",
      alt: "Finished villa bathroom fit-out by Ard Nabta Building Contracting",
    },
  },
  {
    slug: "boundary-walls-external-works",
    name: "Boundary Walls & External Works",
    description:
      "Perimeter walls, gates, and external works coordinated alongside the main villa build.",
    image: {
      src: "/images/products/boundary-walls-external-works.jpg",
      alt: "Villa boundary wall built by Ard Nabta Building Contracting",
    },
  },
];
