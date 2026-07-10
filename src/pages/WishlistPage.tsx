import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/common/ProductCard';
import { SectionHeading } from '../components/common/SectionHeading';

export function WishlistPage() {
  const { items, count } = useWishlist();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-8">
          <SectionHeading title="My " accent="Wishlist" subtitle={`${count} item${count !== 1 ? 's' : ''} saved`} />
        </div>
      </div>

      <div className="container-max section-padding py-10">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={64} className="mx-auto text-brand-border mb-4" />
            <h2 className="text-xl font-bold text-brand-text mb-2">Your wishlist is empty</h2>
            <p className="text-brand-muted text-sm mb-6">Save items you love and come back to them later.</p>
            <Link to="/categories" className="btn-primary">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Link to="/cart" className="btn-outline flex items-center gap-2">
              <ShoppingBag size={16} /> View Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
