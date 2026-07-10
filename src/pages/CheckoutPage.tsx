import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

type Step = 'address' | 'payment' | 'review';

const PAYMENT_OPTIONS = [
  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
  { id: 'upi', label: 'UPI / Google Pay / PhonePe', icon: '📱' },
  { id: 'card', label: 'Debit / Credit Card', icon: '💳' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
];

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>('address');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [guestMode] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const delivery = subtotal >= 999 ? 0 : 60;
  const total = subtotal + delivery;

  const [address, setAddress] = useState({
    name: '', phone: '', email: '', street: '', city: '', state: '', pincode: '',
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-brand-section flex items-center justify-center p-4">
        <div className="card max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-xl font-bold text-brand-text mb-2">Order Placed!</h2>
          <p className="text-sm text-brand-muted mb-6">
            Thank you for shopping at Best Choice! We'll contact you soon to confirm your order.
          </p>
          <Link to="/" className="btn-primary w-full text-center block">Back to Home</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-brand-text mb-2">No items to checkout</h2>
          <Link to="/categories" className="text-primary hover:underline">Browse products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-section">
      <div className="container-max section-padding py-8">
        <h1 className="text-2xl font-bold text-brand-text mb-6">Checkout</h1>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-8 text-xs font-medium">
          {(['address', 'payment', 'review'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={14} className="text-brand-muted" />}
              <span className={`flex items-center gap-1.5 ${step === s ? 'text-primary' : steps.indexOf(s) < steps.indexOf(step) ? 'text-success' : 'text-brand-muted'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step === s ? 'bg-primary text-white' : steps.indexOf(s) < steps.indexOf(step) ? 'bg-success text-white' : 'bg-brand-border text-brand-muted'}`}>
                  {i + 1}
                </span>
                <span className="hidden sm:inline capitalize">{s}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main form */}
          <div className="lg:col-span-2">
            {step === 'address' && (
              <div className="card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-brand-text flex items-center gap-2">
                    <Truck size={17} className="text-primary" /> Delivery Address
                  </h2>
                  {guestMode && (
                    <span className="text-xs text-brand-muted">
                      Guest checkout •{' '}
                      <Link to="/account" className="text-primary hover:underline">Login</Link>
                    </span>
                  )}
                </div>
                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Full Name *</label>
                      <input required value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} placeholder="Your full name" className="input-field" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Phone *</label>
                      <input required type="tel" value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} placeholder="10-digit mobile number" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-brand-text block mb-1">Email</label>
                    <input type="email" value={address.email} onChange={(e) => setAddress({ ...address, email: e.target.value })} placeholder="your@email.com" className="input-field" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-brand-text block mb-1">Street Address *</label>
                    <textarea required rows={2} value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} placeholder="House no., street, area" className="input-field resize-none" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">City *</label>
                      <input required value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder="City" className="input-field" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">State *</label>
                      <input required value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} placeholder="State" className="input-field" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Pincode *</label>
                      <input required value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} placeholder="6-digit pincode" className="input-field" />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full mt-2">Continue to Payment</button>
                </form>
              </div>
            )}

            {step === 'payment' && (
              <div className="card p-6">
                <h2 className="font-bold text-brand-text flex items-center gap-2 mb-5">
                  <CreditCard size={17} className="text-primary" /> Payment Options
                </h2>
                <div className="space-y-3">
                  {PAYMENT_OPTIONS.map((opt) => (
                    <label key={opt.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === opt.id ? 'border-primary bg-secondary' : 'border-brand-border hover:border-primary/40'}`}>
                      <input type="radio" name="payment" value={opt.id} checked={paymentMethod === opt.id} onChange={() => setPaymentMethod(opt.id)} className="accent-primary" />
                      <span className="text-lg">{opt.icon}</span>
                      <span className="text-sm font-medium text-brand-text">{opt.label}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => setStep('address')} className="btn-outline flex-1">Back</button>
                  <button onClick={() => setStep('review')} className="btn-primary flex-1">Review Order</button>
                </div>
              </div>
            )}

            {step === 'review' && (
              <div className="card p-6">
                <h2 className="font-bold text-brand-text flex items-center gap-2 mb-5">
                  <Lock size={17} className="text-primary" /> Review & Place Order
                </h2>
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover bg-brand-section" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-brand-text line-clamp-1">{item.product.name}</p>
                        <p className="text-xs text-brand-muted">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-brand-section rounded-xl p-4 text-sm space-y-2 mb-5">
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Delivery to:</span>
                    <span className="font-medium text-right">{address.name}, {address.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-muted">Payment:</span>
                    <span className="font-medium">{PAYMENT_OPTIONS.find(o => o.id === paymentMethod)?.label}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep('payment')} className="btn-outline flex-1">Back</button>
                  <button onClick={handlePlaceOrder} className="btn-primary flex-1">Place Order ₹{total.toLocaleString()}</button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div>
            <div className="card p-5 sticky top-24">
              <h3 className="font-semibold text-sm text-brand-text mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-muted">Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Delivery</span>
                  <span className={delivery === 0 ? 'text-success' : ''}>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
                </div>
                <div className="border-t border-brand-border pt-2 flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps: Step[] = ['address', 'payment', 'review'];
