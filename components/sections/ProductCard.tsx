import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

/**
 * Single product image/name/description card.
 * plan.md 6.5: surface bg, rounded-lg, fixed aspect-[4/3] image, hover lift.
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-surface bg-white shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-heading">{product.name}</h3>
        <p className="mt-2 text-sm text-body">{product.description}</p>
      </div>
    </article>
  );
}
