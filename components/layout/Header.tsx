import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Nav from "@/components/layout/Nav";
import MobileMenu from "@/components/layout/MobileMenu";
import { SITE_NAME } from "@/lib/constants";

/**
 * Sticky header: wordmark, desktop Nav, quote CTA, MobileMenu.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="max-w-[14rem] font-heading text-lg font-bold uppercase leading-tight tracking-wide text-primary sm:max-w-none sm:text-xl"
        >
          {SITE_NAME}
        </Link>
        <Nav />
        <div className="flex items-center gap-4">
          <Button href="#contact" className="hidden sm:inline-flex">
            Request a Quote
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
