import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProductCard } from '../common/ProductCard';
import { featuredProducts } from '../../data/products';
import type { Product } from '../../types';
import { QuickViewModal } from '../common/QuickViewModal';

export function FeaturedProducts() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section className="py-14 bg-white">
      <div className="container-max section-padding">
        <div className="flex items-end justify-between mb-8">
          <SectionHeading
            title="Featured "
            accent="Products"
            subtitle="Handpicked favourites — the best sellers from our store"
          />
          <Link
            to="/categories"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
