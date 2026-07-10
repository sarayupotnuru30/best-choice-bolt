import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, ZoomIn, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/common/ProductCard';
import { SectionHeading } from '../components/common/SectionHeading';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug || p.id === slug);
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-2">Product Not Found</h2>
          <Link to="/categories" className="text-primary hover:underline">Browse Categories</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const allImages = product.images.length > 0 ? product.images : [product.image];
  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-4">
          <nav className="text-xs text-brand-muted flex items-center gap-1.5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={12} />
            <Link to="/categories" className="hover:text-primary">Categories</Link>
            <ChevronRight size={12} />
            <Link to={`/categories/${product.categorySlug}`} className="hover:text-primary">{product.category}</Link>
            <ChevronRight size={12} />
            <span className="text-brand-text font-medium line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-max section-padding py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-brand-section aspect-square group">
              <motion.img
                key={selectedImage}
                src={allImages[selectedImage]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={16} className="text-brand-text" />
              </button>
              {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-primary font-semibold mb-2">{product.brand}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-brand-text leading-snug mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={15} className={s <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
                ))}
              </div>
              <span className="text-sm text-brand-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-border">
              <span className="text-3xl font-black text-brand-text">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-base text-brand-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-success-light text-success text-sm font-bold px-3 py-1 rounded-full">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-brand-muted leading-relaxed mb-6">{product.description}</p>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-success' : 'bg-error'}`} />
              <span className={`text-sm font-medium ${product.inStock ? 'text-success' : 'text-error'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-brand-text">Qty:</span>
              <div className="flex items-center border border-brand-border rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-brand-text hover:bg-brand-section transition-colors text-sm font-bold"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-semibold text-brand-text">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-brand-text hover:bg-brand-section transition-colors text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold text-sm transition-all active:scale-95 disabled:opacity-50 ${
                  inCart ? 'bg-success text-white' : 'bg-primary text-white hover:bg-primary-600 shadow-soft'
                }`}
              >
                <ShoppingCart size={16} />
                {inCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`w-12 h-12 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${
                  inWishlist ? 'border-primary bg-primary text-white' : 'border-brand-border text-brand-muted hover:border-primary hover:text-primary'
                }`}
              >
                <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Specifications */}
            {Object.keys(product.specifications).length > 0 && (
              <div>
                <h3 className="font-bold text-sm text-brand-text mb-3">Specifications</h3>
                <div className="rounded-xl border border-brand-border overflow-hidden">
                  {Object.entries(product.specifications).map(([key, val], i) => (
                    <div key={key} className={`flex text-sm ${i % 2 === 0 ? 'bg-brand-section' : 'bg-white'}`}>
                      <span className="w-2/5 px-4 py-2.5 text-brand-muted font-medium">{key}</span>
                      <span className="w-3/5 px-4 py-2.5 text-brand-text">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <SectionHeading title="Related " accent="Products" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
