import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { homeCategories } from '../../data/categories';

function CategoryCard({ category, index }: { category: typeof homeCategories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/categories/${category.slug}`}
        className="group block card overflow-hidden hover:shadow-card-hover"
      >
        <div className="relative overflow-hidden aspect-square bg-brand-section">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="px-3 py-3 text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-brand-text group-hover:text-primary transition-colors line-clamp-1">
            {category.name}
          </h3>
          <p className="text-[11px] text-brand-muted mt-0.5">{category.productCount}+ items</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function Categories() {
  return (
    <section className="bg-brand-section py-14">
      <div className="container-max section-padding">
        <div className="flex items-end justify-between mb-8">
          <SectionHeading
            title="Shop by "
            accent="Category"
            subtitle="Find everything you need across our wide range of categories"
          />
          <Link
            to="/categories"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {homeCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary hover:text-white transition-all duration-200 active:scale-95"
          >
            View All Categories
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
