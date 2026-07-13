import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      searchRef.current?.blur();
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-brand-border'}`}>
      {/* Main navbar row */}
      <div className="container-max section-padding">
        <div className="flex items-center gap-3 sm:gap-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img 
              src="/images/hero/logo.jpeg" 
              alt="Best Choice Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="hidden xs:block">
              <p className="font-black text-base leading-tight text-brand-text tracking-tight">BEST CHOICE</p>
              <p className="text-[10px] text-primary font-medium leading-none">Save Money &amp; Save Time</p>
            </div>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 min-w-0">
            <div className={`relative flex items-center border-2 rounded-full transition-all duration-200 ${searchFocused ? 'border-primary shadow-soft' : 'border-brand-border'}`}>
              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search gifts, toys, baby items..."
                className="w-full bg-transparent text-sm px-4 py-2.5 outline-none text-brand-text placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex-shrink-0 w-10 h-10 mr-1 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Search size={15} />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link to="/wishlist" className="relative p-2 rounded-full hover:bg-secondary transition-colors group" aria-label="Wishlist">
              <Heart size={20} className="text-brand-text group-hover:text-primary transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/account" className="hidden sm:flex p-2 rounded-full hover:bg-secondary transition-colors group" aria-label="Account">
              <User size={20} className="text-brand-text group-hover:text-primary transition-colors" />
            </Link>

            <Link to="/cart" className="relative p-2 rounded-full hover:bg-secondary transition-colors group" aria-label="Cart">
              <ShoppingCart size={20} className="text-brand-text group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav links */}
      <nav className="hidden lg:block border-t border-brand-border">
        <div className="container-max section-padding">
          <ul className="flex items-center gap-1 py-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-primary bg-secondary'
                        : 'text-brand-text hover:text-primary hover:bg-secondary'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                  {link.label === 'Categories' && (
                    <ChevronDown size={13} />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white shadow-nav">
          <nav className="container-max section-padding py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                        isActive ? 'text-primary bg-secondary' : 'text-brand-text hover:bg-brand-section'
                      }`
                    }
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 border-t border-brand-border mt-2">
                <Link
                  to="/account"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl text-brand-text hover:bg-brand-section transition-colors"
                >
                  <User size={16} /> My Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}