import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { SITE_PHOTOS } from "@/lib/data/home";

export default function SitePhotoStrip() {
  return (
    <section
      id="site-photos"
      aria-labelledby="site-photos-heading"
      className="border-b-2 border-ink bg-ink text-paper"
    >
      <Reveal className="site-pad py-12 md:py-16">
        <h2 id="site-photos-heading" className="display-lg text-paper">
          From the plot
        </h2>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-paper/75">
          Real photography from Hatta villas, annexes, and modifications. Owner
          names stay private. The build record does not.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-0 border-t-2 border-ink sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[12rem]">
        {SITE_PHOTOS.map((photo, index) => (
          <Reveal
            key={photo.src}
            delay={Math.min(index * 40, 160)}
            className={`relative min-h-[14rem] border-b-2 border-ink sm:border-r-2 ${photo.className}`}
          >
            <MediaFrame className="absolute inset-0 h-full w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </MediaFrame>
            <p className="absolute bottom-0 left-0 z-[1] border-t-2 border-paper/20 bg-ink/80 px-3 py-2 meta text-paper/80">
              {photo.caption}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="site-pad flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm leading-relaxed text-paper/70">
          Twenty site photos across four sample sets on the projects page.
        </p>
        <Button href="/projects" variant="accent" className="w-fit">
          Open project samples
        </Button>
      </Reveal>

      <p className="sr-only">
        Full galleries live at <Link href="/projects">/projects</Link>.
      </p>
    </section>
  );
}
