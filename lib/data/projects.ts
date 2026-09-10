import type { Project } from "@/lib/types";

/**
 * Fictional placeholder projects (plan.md Section 4.5). Replace with real,
 * permissioned case studies (names, clients, locations, photos) before launch.
 */
export const PROJECTS: Project[] = [
  {
    slug: "meridian-metro-rail-extension",
    name: "Meridian Metro Rail Extension",
    sector: "Transit",
    oneLiner: "Structural steel package for 4 elevated station platforms.",
    image: {
      src: "/images/projects/meridian-metro-rail-extension.svg",
      alt: "Meridian Metro Rail Extension, Transit",
    },
  },
  {
    slug: "falcon-bay-airport-terminal-3",
    name: "Falcon Bay International Airport — Terminal 3",
    sector: "Aviation",
    oneLiner: "Roof steel and cladding for a 45,000 m² terminal expansion.",
    image: {
      src: "/images/projects/falcon-bay-airport-terminal-3.svg",
      alt: "Falcon Bay International Airport Terminal 3, Aviation",
    },
  },
  {
    slug: "horizon-logistics-hub",
    name: "Horizon Logistics Hub",
    sector: "Warehousing",
    oneLiner: "Pre-engineered building package across 6 warehouse units.",
    image: {
      src: "/images/projects/horizon-logistics-hub.svg",
      alt: "Horizon Logistics Hub, Warehousing",
    },
  },
  {
    slug: "crescent-power-station-upgrade",
    name: "Crescent Power Station Upgrade",
    sector: "Energy",
    oneLiner: "Structural steel support for turbine hall retrofit.",
    image: {
      src: "/images/projects/crescent-power-station-upgrade.svg",
      alt: "Crescent Power Station Upgrade, Energy",
    },
  },
];
