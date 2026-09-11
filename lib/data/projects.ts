import type { Project } from "@/lib/types";

/**
 * Real projects, drawn from the site photos and the 3 Dubai Municipality
 * completion certificates supplied. Certificates name the private property
 * owners — that personal data is intentionally left out (see
 * CONTENT_PERSONALIZATION_PLAN.md); projects are labelled generically by
 * area instead. Replace with owner-approved project names if/when available.
 */
export const PROJECTS: Project[] = [
  {
    slug: "private-villa-hatta",
    name: "Private Villa — Hatta",
    sector: "New Villa Construction",
    oneLiner: "Ground, first floor, and roof villa build under a Dubai Municipality building permit.",
    image: {
      src: "/images/projects/private-villa-hatta.jpg",
      alt: "Private villa under construction in Hatta, Dubai",
    },
  },
  {
    slug: "family-majlis-annex-hatta",
    name: "Family Majlis & Annex — Hatta",
    sector: "New Construction",
    oneLiner: "Ground-floor family majlis with annex and external works, completed 2024.",
    image: {
      src: "/images/projects/family-majlis-annex-hatta.jpg",
      alt: "Completed family majlis and annex in Hatta, Dubai",
    },
  },
  {
    slug: "villa-extension-boundary-wall-hatta",
    name: "Villa Extension & Boundary Wall — Hatta",
    sector: "Extension & Modification",
    oneLiner: "Villa expansion with a new boundary wall and annex, completed under a building modification permit.",
    image: {
      src: "/images/projects/villa-extension-boundary-wall-hatta.jpg",
      alt: "Villa boundary wall extension in Hatta, Dubai",
    },
  },
  {
    slug: "villa-interior-fit-out-hatta",
    name: "Villa Interior Fit-Out — Hatta",
    sector: "Interior Finishing",
    oneLiner: "Ceiling, AC, and interior finishing carried through to move-in condition.",
    image: {
      src: "/images/projects/villa-interior-fit-out-hatta.jpg",
      alt: "Finished villa interior ceiling and fit-out in Hatta, Dubai",
    },
  },
];
