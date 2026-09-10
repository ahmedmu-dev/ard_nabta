import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LeadershipQuote from "@/components/sections/LeadershipQuote";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesSection from "@/components/sections/ServicesSection";
import NewsList from "@/components/sections/NewsList";
import ContactCTA from "@/components/sections/ContactCTA";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Ferrum Steel designs, fabricates, and erects structural steel and pre-engineered buildings for infrastructure, industrial, and commercial projects across the Middle East and Africa.",
};

// v1 homepage: sections assembled in the order defined in plan.md Section 4.
// Section ids match lib/data/nav.ts anchors exactly.
export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FeaturedProjects />
      <LeadershipQuote />
      <AboutTeaser />
      <ServicesSection />
      <NewsList />
      <ContactCTA />
    </>
  );
}
