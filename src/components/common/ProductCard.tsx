import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [imgError, setImgError] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  return (
    <div className="card group relative flex flex-col overflow-hidden hover:shadow-card-hover">
      {/* Discount badge */}
      {product.discount > 0 && (
        <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </span>
      )}

      {/* New badge */}
      {product.isNew && (
        <span className="absolute top-3 left-3 z-10 bg-success text-white text-xs font-bold px-2 py-1 rounded-full">
          NEW
        </span>
      )}

      {/* Wishlist button */}
      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
          inWishlist ? 'bg-primary text-white' : 'bg-white text-brand-muted hover:bg-primary hover:text-white'
        }`}
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={14} fill={inWishlist ? 'currentColor' : 'none'} />
      </button>

      {/* Image container */}
      <Link to={`/products/${product.slug}`} className="relative overflow-hidden bg-brand-section aspect-square block">
        <img
          src={imgError ? 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600' : product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick view overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm py-3 px-4 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); onQuickView?.(product); }}
            className="flex items-center gap-1.5 text-xs font-semibold text-brand-text hover:text-primary transition-colors"
          >
            <Eye size={14} />
            Quick View
          </button>
        </div>
      </Link>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-brand-text line-clamp-2 hover:text-primary transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`text-xs ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-brand-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2 flex-1 items-end">
          <span className="text-base font-bold text-brand-text">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-brand-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className={`mt-3 w-full rounded-full py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            inCart
              ? 'bg-success text-white'
              : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
          }`}
        >
          <ShoppingCart size={13} />
          {inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
