import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ServicesSection from "@/components/sections/ServicesSection";
import NewsList from "@/components/sections/NewsList";
import ContactCTA from "@/components/sections/ContactCTA";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Ard Nabta Building Contracting L.L.C. delivers licensed villa construction, extensions, and building contracting across Dubai.",
};

// v1 homepage: sections assembled in the order defined in plan.md Section 4.
// Section ids match lib/data/nav.ts anchors exactly.
// LeadershipQuote is omitted for now — no real leadership name/photo/quote
// has been supplied yet (see CONTENT_PERSONALIZATION_PLAN.md). Re-add the
// import and <LeadershipQuote /> below once that's provided.
export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FeaturedProjects />
      <AboutTeaser />
      <ServicesSection />
      <NewsList />
      <ContactCTA />
    </>
  );
}
