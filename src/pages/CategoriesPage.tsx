import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { categories } from '../data/categories';

export function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-8">
          <nav className="text-xs text-brand-muted mb-3">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-brand-text font-medium">All Categories</span>
          </nav>
          <SectionHeading
            title="All "
            accent="Categories"
            subtitle={`Explore all ${categories.length} product categories`}
          />
        </div>
      </div>

      <div className="container-max section-padding py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                to={`/categories/${cat.slug}`}
                className="group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-square bg-brand-section">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-3 text-center bg-white">
                  <h3 className="text-xs sm:text-sm font-semibold text-brand-text group-hover:text-primary transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-brand-muted mt-0.5">{cat.productCount}+ items</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
