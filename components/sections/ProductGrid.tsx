import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/sections/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

/**
 * Section wrapper + heading for the 6-item product grid.
 * plan.md 6.3: 1 col mobile, 2 col tablet, 3 col desktop.
 */
export default function ProductGrid() {
  return (
    <section id="products" aria-labelledby="products-heading" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          id="products-heading"
          eyebrow="What We Build"
          heading="Building Types"
          subtext="From new villas to extensions and finishing work, delivered under one licensed contractor."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
