import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CareersBoard from "@/components/careers/CareersBoard";
import { SITE_NAME } from "@/lib/constants";
import { JOBS } from "@/lib/data/jobs";

export const metadata: Metadata = {
  title: "Work With Us",
  description: `Open roles at ${SITE_NAME}: site engineers, supervisors, finishing, QS, project coordination, and digital roles across Hatta and Dubai.`,
};

export default function WorkWithUsPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="site-pad grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="meta text-accent">Careers</p>
            <h1 className="display-xl mt-4 text-paper">
              Work
              <br />
              with us
            </h1>
            <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-paper/75 md:text-lg">
              Join a Dubai Municipality-licensed villa contractor building in
              Hatta and across Dubai. We hire people who show up on site, respect
              the drawing, and finish clean.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#open-roles-heading" variant="accent">
                View open roles
              </Button>
              <Button href="/#contact" variant="ghost-on-ink">
                Client enquiry
              </Button>
            </div>
          </div>
          <aside className="border-2 border-paper/25 p-6 md:self-end">
            <p className="meta text-accent">At a glance</p>
            <ul className="mt-5 space-y-4 text-sm text-paper/80">
              <li className="flex justify-between gap-4 border-b border-paper/15 pb-3">
                <span>Open roles</span>
                <span className="font-display text-lg text-accent">
                  {String(JOBS.length).padStart(2, "0")}
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-paper/15 pb-3">
                <span>Primary sites</span>
                <span>Hatta / Dubai</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Apply</span>
                <Link href="#apply" className="text-accent hover:text-paper">
                  Form below
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CareersBoard />
    </>
  );
}
