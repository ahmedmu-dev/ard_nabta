import { Compass, HardHat, KeyRound } from "lucide-react";
import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    slug: "design-permitting",
    name: "Design & Permitting",
    description:
      "We work with licensed consultants to prepare drawings and secure Dubai Municipality approvals before breaking ground.",
    icon: Compass,
  },
  {
    slug: "construction",
    name: "Construction",
    description:
      "Our on-site teams manage the full build — structure, fit-out, and external works — under one licensed contractor.",
    icon: HardHat,
  },
  {
    slug: "handover",
    name: "Handover",
    description:
      "Final inspection and Dubai Municipality completion certification, then keys handed over to the client.",
    icon: KeyRound,
  },
];
