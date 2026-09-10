import { Compass, Factory, HardHat } from "lucide-react";
import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    slug: "structural-design",
    name: "Structural Design",
    description:
      "In-house engineering team delivers structural analysis and design optimized for cost, speed, and code compliance.",
    icon: Compass,
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    description:
      "State-of-the-art fabrication facilities producing precision steel components at scale.",
    icon: Factory,
  },
  {
    slug: "erection",
    name: "Erection",
    description:
      "Experienced field crews handle safe, on-schedule erection from foundation to final steel.",
    icon: HardHat,
  },
];
