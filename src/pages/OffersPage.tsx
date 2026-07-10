import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';

export function OffersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-10 text-center">
          <h1 className="text-3xl font-black text-brand-text mb-2">
            Today's <span className="text-primary">Offers</span>
          </h1>
          <p className="text-brand-muted text-sm">Exclusive deals and discounts just for you.</p>
        </div>
      </div>
      <div className="container-max section-padding py-12">
        <SectionHeading title="Current " accent="Deals" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Free Delivery', desc: 'On all orders above ₹999', color: 'bg-emerald-50 border-emerald-200', badge: 'Active' },
            { title: 'Coupon: BEST10', desc: 'Get 10% off on your order', color: 'bg-secondary border-primary/20', badge: 'Hot' },
            { title: 'Combo Deals', desc: 'Buy 2 get 1 free on select toys', color: 'bg-yellow-50 border-yellow-200', badge: 'Limited' },
          ].map((offer) => (
            <div key={offer.title} className={`rounded-2xl border-2 p-6 ${offer.color}`}>
              <span className="inline-block bg-primary text-white text-[11px] font-bold px-2 py-0.5 rounded-full mb-3">
                {offer.badge}
              </span>
              <h3 className="font-bold text-brand-text text-lg mb-1">{offer.title}</h3>
              <p className="text-sm text-brand-muted">{offer.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/categories" className="btn-primary">Shop All Products</Link>
        </div>
      </div>
    </div>
  );
}
