import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, Tag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const delivery = subtotal >= 999 ? 0 : 60;
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount + delivery;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'BEST10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setCouponApplied(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <ShoppingBag size={64} className="mx-auto text-brand-border mb-4" />
          <h2 className="text-2xl font-bold text-brand-text mb-2">Your cart is empty</h2>
          <p className="text-brand-muted text-sm mb-6">Looks like you haven't added anything yet.</p>
          <Link to="/categories" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-section">
      <div className="container-max section-padding py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-brand-text">Shopping Cart <span className="text-primary text-lg">({items.length})</span></h1>
          <button onClick={clearCart} className="text-xs text-brand-muted hover:text-error transition-colors">Clear All</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="card p-4 flex gap-4">
                <Link to={`/products/${item.product.slug}`} className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-brand-section">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary font-medium">{item.product.brand}</p>
                  <Link to={`/products/${item.product.slug}`}>
                    <h3 className="text-sm font-semibold text-brand-text hover:text-primary transition-colors line-clamp-2 mt-0.5">
                      {item.product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-brand-text">₹{item.product.price.toLocaleString()}</span>
                      {item.product.originalPrice > item.product.price && (
                        <span className="text-xs text-brand-muted line-through">₹{item.product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-brand-border rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-brand-section transition-colors text-sm font-bold"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-brand-section transition-colors text-sm font-bold"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-brand-muted hover:text-error transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-4">
            {/* Coupon */}
            <div className="card p-5">
              <h3 className="font-semibold text-sm text-brand-text mb-3 flex items-center gap-2">
                <Tag size={15} className="text-primary" /> Coupon Code
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => { setCoupon(e.target.value.toUpperCase()); setCouponError(''); setCouponApplied(false); }}
                  placeholder="Enter coupon"
                  className="input-field text-xs py-2"
                />
                <button onClick={applyCoupon} className="btn-primary text-xs py-2 px-4">Apply</button>
              </div>
              {couponApplied && <p className="text-xs text-success mt-1.5 font-medium">10% discount applied!</p>}
              {couponError && <p className="text-xs text-error mt-1.5">{couponError}</p>}
              <p className="text-xs text-brand-muted mt-2">Try: BEST10</p>
            </div>

            {/* Order summary */}
            <div className="card p-5">
              <h3 className="font-semibold text-sm text-brand-text mb-4">Order Summary</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-muted">Subtotal ({items.length} items)</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-success">
                    <span>Coupon Discount</span>
                    <span>−₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-brand-muted">Delivery</span>
                  <span className={delivery === 0 ? 'text-success font-medium' : 'font-medium'}>
                    {delivery === 0 ? 'FREE' : `₹${delivery}`}
                  </span>
                </div>
                {delivery === 0 && (
                  <p className="text-[11px] text-success">You qualify for free delivery!</p>
                )}
                {delivery > 0 && (
                  <p className="text-[11px] text-brand-muted">Add ₹{(999 - subtotal).toLocaleString()} more for free delivery</p>
                )}
                <div className="border-t border-brand-border pt-2.5 flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-4 block btn-primary w-full text-center"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/categories"
                className="mt-2 block text-center text-xs text-brand-muted hover:text-primary transition-colors py-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
