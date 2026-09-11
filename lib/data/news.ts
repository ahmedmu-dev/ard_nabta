import type { NewsItem } from "@/lib/types";

/**
 * Milestones drawn directly from the 3 Dubai Municipality completion
 * certificates supplied (dates and work descriptions are real; no
 * certificate images or owner names are published — see
 * CONTENT_PERSONALIZATION_PLAN.md).
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "villa-extension-boundary-wall-completed",
    date: "July 2026",
    headline: "Villa Extension & Boundary Wall Completed in Hatta",
    summary:
      "Completed a villa and boundary wall extension under a Dubai Municipality building modification permit.",
  },
  {
    slug: "new-villa-handed-over",
    date: "June 2026",
    headline: "New Villa Handed Over in Hatta",
    summary:
      "Delivered a ground, first floor, and roof villa build under a full Dubai Municipality completion certificate.",
  },
  {
    slug: "family-majlis-annex-completed",
    date: "June 2024",
    headline: "Family Majlis & Annex Completed in Hatta",
    summary:
      "Completed a family majlis with annex and external works for a private client in Hatta.",
  },
];
