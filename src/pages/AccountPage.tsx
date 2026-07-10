import { User, ShoppingBag, Heart, Settings, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccountPage() {
  return (
    <div className="min-h-screen bg-brand-section flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-4">
        <div className="card p-8 text-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <User size={28} className="text-primary" />
          </div>
          <h1 className="text-xl font-bold text-brand-text mb-1">My Account</h1>
          <p className="text-brand-muted text-sm mb-6">Sign in to access your orders and wishlist.</p>

          <div className="space-y-3">
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <LogIn size={16} /> Login
            </button>
            <button className="btn-outline w-full">Create Account</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: ShoppingBag, label: 'My Orders', to: '/cart' },
            { icon: Heart, label: 'Wishlist', to: '/wishlist' },
            { icon: Settings, label: 'Settings', to: '#' },
            { icon: User, label: 'Profile', to: '#' },
          ].map((item) => (
            <Link key={item.label} to={item.to} className="card p-4 flex flex-col items-center gap-2 hover:shadow-card-hover transition-all text-center">
              <item.icon size={20} className="text-primary" />
              <span className="text-xs font-medium text-brand-text">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
