import { useSearchParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Search } from 'lucide-react';
import { searchProducts } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { SectionHeading } from '../components/common/SectionHeading';

export function SearchResultsPage() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';

  const results = useMemo(() => (query ? searchProducts(query) : []), [query]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-8">
          <nav className="text-xs text-brand-muted mb-3">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-brand-text font-medium">Search Results</span>
          </nav>
          <SectionHeading
            title={`Results for `}
            accent={`"${query}"`}
            subtitle={`${results.length} product${results.length !== 1 ? 's' : ''} found`}
          />
        </div>
      </div>

      <div className="container-max section-padding py-10">
        {!query ? (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-brand-border mb-4" />
            <p className="text-brand-muted">Use the search bar to find products.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-brand-border mb-4" />
            <h2 className="text-lg font-bold text-brand-text mb-2">No results for "{query}"</h2>
            <p className="text-brand-muted text-sm mb-6">Try a different keyword or browse our categories.</p>
            <Link to="/categories" className="btn-primary">Browse Categories</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
