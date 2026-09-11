import type { Service } from "@/lib/types";
import { Compass, HardHat, KeyRound } from "lucide-react";

export const SERVICES: Service[] = [
  {
    slug: "design-permitting",
    name: "Design & Permitting",
    description:
      "We work with licensed consultants to prepare drawings and secure Dubai Municipality approvals before ground breaks — so the site starts clean.",
    deliverables: [
      "Consultant coordination",
      "Drawing package review",
      "DM permit submissions",
      "Pre-construction checklist",
    ],
    icon: Compass,
  },
  {
    slug: "construction",
    name: "Construction",
    description:
      "On-site teams manage structure, envelope, fit-out, and external works under one licensed contractor — one programme, one point of contact.",
    deliverables: [
      "Structural & blockwork",
      "MEP rough-in coordination",
      "Finishes & wet areas",
      "External walls & gates",
    ],
    icon: HardHat,
  },
  {
    slug: "handover",
    name: "Handover",
    description:
      "Final inspection, snagging, and Dubai Municipality completion certification, then keys handed to the client.",
    deliverables: [
      "Snag list close-out",
      "Completion certificate",
      "As-built notes as agreed",
      "Client key handover",
    ],
    icon: KeyRound,
  },
];
