import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import type { Product } from '../../types';
import { X, Heart, ShoppingCart, Star } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square bg-brand-section">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <button onClick={() => toggleWishlist(product)} className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow ${isInWishlist(product.id) ? 'bg-primary text-white' : 'bg-white text-brand-muted'}`}>
              <Heart size={15} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="p-6 flex flex-col">
            <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <X size={14} />
            </button>
            <p className="text-xs text-primary font-semibold mb-1">{product.brand}</p>
            <h3 className="font-bold text-lg text-brand-text leading-snug mb-2">{product.name}</h3>
            <div className="flex items-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => <Star key={s} size={12} className={s <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />)}
              <span className="text-xs text-brand-muted ml-1">({product.reviewCount})</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-black text-brand-text">₹{product.price.toLocaleString()}</span>
              <span className="text-sm text-brand-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">-{product.discount}%</span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed mb-4 flex-1">{product.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => addToCart(product)}
                className={`flex-1 rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all ${isInCart(product.id) ? 'bg-success text-white' : 'bg-primary text-white hover:bg-primary-600'}`}
              >
                <ShoppingCart size={14} />
                {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
              <Link to={`/products/${product.slug}`} onClick={onClose} className="px-4 rounded-full border-2 border-brand-border text-xs font-semibold text-brand-text hover:border-primary hover:text-primary transition-all flex items-center">
                View
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
