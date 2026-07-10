import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List, X, ChevronDown } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/common/ProductCard';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { brands } from '../data/brands';
import type { FilterState, ViewMode, Product } from '../types';
import { QuickViewModal } from '../components/common/QuickViewModal';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Top Rated' },
];

const DEFAULT_FILTERS: FilterState = {
  priceRange: [0, 5000],
  brands: [],
  inStockOnly: false,
  sortBy: 'relevance',
};

function applyFilters(items: Product[], filters: FilterState): Product[] {
  let result = [...items];
  result = result.filter(
    (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
  );
  if (filters.brands.length > 0) {
    result = result.filter((p) => filters.brands.includes(p.brand));
  }
  if (filters.inStockOnly) {
    result = result.filter((p) => p.inStock);
  }
  switch (filters.sortBy) {
    case 'price-low': result.sort((a, b) => a.price - b.price); break;
    case 'price-high': result.sort((a, b) => b.price - a.price); break;
    case 'newest': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    case 'rating': result.sort((a, b) => b.rating - a.rating); break;
  }
  return result;
}

export function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = useMemo(
    () => products.filter((p) => p.categorySlug === slug || (!slug ? true : false)),
    [slug]
  );

  const filteredProducts = useMemo(() => {
    let items = categoryProducts;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter((p) => p.name.toLowerCase().includes(q));
    }
    return applyFilters(items, filters);
  }, [categoryProducts, filters, searchQuery]);

  const categoryBrands = useMemo(
    () => [...new Set(categoryProducts.map((p) => p.brand))],
    [categoryProducts]
  );

  const toggleBrand = (brand: string) => {
    setFilters((f) => ({
      ...f,
      brands: f.brands.includes(brand) ? f.brands.filter((b) => b !== brand) : [...f.brands, brand],
    }));
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-text mb-2">Category Not Found</h2>
          <Link to="/categories" className="text-primary hover:underline">Back to Categories</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-8">
          <nav className="text-xs text-brand-muted mb-3">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/categories" className="hover:text-primary">Categories</Link>
            <span className="mx-2">›</span>
            <span className="text-brand-text font-medium">{category.name}</span>
          </nav>
          <SectionHeading title={category.name} subtitle={category.description} />
        </div>
      </div>

      <div className="container-max section-padding py-8">
        <div className="flex gap-6">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categoryBrands={categoryBrands}
              toggleBrand={toggleBrand}
              allBrands={brands.map((b) => b.name)}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex-1 min-w-[200px]">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in this category..."
                  className="input-field text-xs py-2"
                />
              </div>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value as FilterState['sortBy'] }))}
                className="input-field w-auto text-xs py-2 cursor-pointer"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-brand-section text-brand-muted hover:text-brand-text'}`}
                >
                  <Grid size={15} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-brand-section text-brand-muted hover:text-brand-text'}`}
                >
                  <List size={15} />
                </button>
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-1.5 border border-brand-border rounded-full px-3 py-2 text-xs font-medium text-brand-text hover:border-primary"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
            </div>

            <p className="text-xs text-brand-muted mb-4">{filteredProducts.length} products found</p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted text-base">No products found.</p>
                <button
                  onClick={() => { setFilters(DEFAULT_FILTERS); setSearchQuery(''); }}
                  className="mt-3 text-primary text-sm hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredProducts.map((product) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="relative ml-auto w-72 bg-white h-full overflow-y-auto p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-brand-text">Filters</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categoryBrands={categoryBrands}
              toggleBrand={toggleBrand}
              allBrands={brands.map((b) => b.name)}
            />
          </div>
        </div>
      )}

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </div>
  );
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  categoryBrands: string[];
  toggleBrand: (brand: string) => void;
  allBrands: string[];
}

function FilterSidebar({ filters, setFilters, categoryBrands, toggleBrand }: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Price */}
      <div>
        <h4 className="font-semibold text-sm text-brand-text mb-3 flex items-center justify-between">
          Price Range <ChevronDown size={14} />
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            value={filters.priceRange[1]}
            onChange={(e) => setFilters((f) => ({ ...f, priceRange: [f.priceRange[0], +e.target.value] }))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-brand-muted">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      {categoryBrands.length > 0 && (
        <div>
          <h4 className="font-semibold text-sm text-brand-text mb-3">Brands</h4>
          <div className="space-y-2">
            {categoryBrands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="accent-primary"
                />
                <span className="text-sm text-brand-muted group-hover:text-brand-text transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Availability */}
      <div>
        <h4 className="font-semibold text-sm text-brand-text mb-3">Availability</h4>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => setFilters((f) => ({ ...f, inStockOnly: e.target.checked }))}
            className="accent-primary"
          />
          <span className="text-sm text-brand-muted">In Stock Only</span>
        </label>
      </div>

      {/* Reset */}
      <button
        onClick={() => setFilters(DEFAULT_FILTERS)}
        className="w-full rounded-full border border-brand-border text-xs font-medium py-2 text-brand-muted hover:border-primary hover:text-primary transition-all"
      >
        Reset Filters
      </button>
    </div>
  );
}

function ProductListItem({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="card flex gap-4 p-4 hover:shadow-card-hover transition-all">
      <Link to={`/products/${product.slug}`} className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-brand-section">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-primary font-medium">{product.brand}</p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-semibold text-sm text-brand-text hover:text-primary transition-colors mt-0.5">{product.name}</h3>
        </Link>
        <p className="text-xs text-brand-muted mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-3 mt-3">
          <span className="font-bold text-brand-text">₹{product.price.toLocaleString()}</span>
          <span className="text-xs text-brand-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
          <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">-{product.discount}%</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-shrink-0">
        <button onClick={() => addToCart(product)} className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${isInCart(product.id) ? 'bg-success text-white' : 'bg-primary text-white hover:bg-primary-600'}`}>
          {isInCart(product.id) ? 'In Cart' : 'Add'}
        </button>
        <button onClick={() => toggleWishlist(product)} className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all ${isInWishlist(product.id) ? 'border-primary text-primary' : 'border-brand-border text-brand-muted hover:border-primary hover:text-primary'}`}>
          {isInWishlist(product.id) ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}

