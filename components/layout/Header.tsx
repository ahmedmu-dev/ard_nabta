import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Nav from "@/components/layout/Nav";
import MobileMenu from "@/components/layout/MobileMenu";
import { SITE_NAME } from "@/lib/constants";

/**
 * Sticky header: wordmark, desktop Nav, "Get a Quote" CTA, and the
 * MobileMenu trigger for <1024px. No standalone Logo.tsx per plan.md
 * Section 7's v1 file list — the wordmark placeholder lives here until a
 * real logo asset is supplied.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface bg-white/95 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="font-heading text-xl font-bold uppercase tracking-wide text-primary"
        >
          {SITE_NAME}
        </Link>
        <Nav />
        <div className="flex items-center gap-4">
          <Button href="#contact" className="hidden sm:inline-flex">
            Get a Quote
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
