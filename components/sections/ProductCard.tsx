import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

/**
 * Product tile — sits in a gap-px blueprint grid (parent supplies rules).
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-surface">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-rule">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-heading">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-body">
          {product.description}
        </p>
      </div>
    </article>
  );
}
