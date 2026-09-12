import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/data/nav";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="site-pad grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="meta text-accent">Contractor</p>
          <p className="mt-3 font-display text-2xl uppercase leading-none tracking-tight text-ink md:text-3xl">
            {SITE_NAME}
          </p>
          <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted">
            Dubai Municipality registered contractor. Villas, annexes, and
            extensions - one team from permit to keys.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="meta text-ink">Index</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta text-ink">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.emailInfo}`}
                  className="hover:text-accent"
                >
                  {CONTACT.emailInfo}
                </a>
              </li>
              <li>
                {CONTACT.building}
                <br />
                {CONTACT.plot}
                <br />
                {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-ink">
        <div className="site-pad flex flex-col gap-2 py-4 meta text-muted sm:flex-row sm:justify-between">
          <span>© 2026 {SITE_NAME}</span>
          <span>Dubai · UAE</span>
        </div>
      </div>
    </footer>
  );
}
