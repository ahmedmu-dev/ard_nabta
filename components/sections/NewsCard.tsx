import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  news: NewsItem;
}

/**
 * Single news date/headline/summary block.
 */
export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="rounded-lg border border-surface bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
      <p className="font-heading text-xs font-semibold uppercase tracking-wide text-accent-contrast">
        {news.date}
      </p>
      <h3 className="mt-3 text-lg font-medium text-heading">{news.headline}</h3>
      <p className="mt-2 text-sm text-body">{news.summary}</p>
    </article>
  );
}
