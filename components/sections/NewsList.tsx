import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/sections/NewsCard";
import { NEWS_ITEMS } from "@/lib/data/news";

/**
 * Section wrapper for the latest 3 news items (plan.md Section 4.9).
 */
export default function NewsList() {
  return (
    <section id="news" aria-labelledby="news-heading" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          id="news-heading"
          eyebrow="Latest Updates"
          heading="News"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.slug} news={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
