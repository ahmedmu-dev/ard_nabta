import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SitePhotoStrip from "@/components/sections/SitePhotoStrip";
import ProductGrid from "@/components/sections/ProductGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import SiteCommitments from "@/components/sections/SiteCommitments";
import AboutTeaser from "@/components/sections/AboutTeaser";
import NewsList from "@/components/sections/NewsList";
import ContactCTA from "@/components/sections/ContactCTA";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description:
    "Ard Nabta Building Contracting L.L.C. delivers licensed villa construction, extensions, and building contracting across Dubai.",
};

/**
 * Homepage — industrial neon-brutalist composition.
 * Order: proof (work + site photos) → scope → process → commitments → about → news → contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SitePhotoStrip />
      <ProductGrid />
      <ServicesSection />
      <SiteCommitments />
      <AboutTeaser />
      <NewsList />
      <ContactCTA />
    </>
  );
}
