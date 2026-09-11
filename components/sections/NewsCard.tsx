import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-surface p-6 md:p-7">
      <p className="meta-label">{news.date}</p>
      <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-heading">
        {news.headline}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{news.summary}</p>
    </article>
  );
}
