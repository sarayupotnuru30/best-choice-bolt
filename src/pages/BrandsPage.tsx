import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { brands } from '../data/brands';

const brandColors: Record<string, string> = {
  Milton: 'bg-blue-50 text-blue-700',
  Borosil: 'bg-emerald-50 text-emerald-700',
  Cello: 'bg-orange-50 text-orange-700',
  Barbie: 'bg-pink-50 text-pink-600',
  Funskool: 'bg-yellow-50 text-yellow-700',
  Disney: 'bg-sky-50 text-sky-700',
  'Hot Wheels': 'bg-red-50 text-red-600',
  "Johnson's Baby": 'bg-rose-50 text-rose-600',
};

export function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-10 text-center">
          <h1 className="text-3xl font-black text-brand-text mb-2">
            Our <span className="text-primary">Brands</span>
          </h1>
          <p className="text-brand-muted text-sm">We stock only genuine products from these trusted brands.</p>
        </div>
      </div>

      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className="group card p-8 flex flex-col items-center text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black mb-4 ${brandColors[brand.name] || 'bg-secondary text-primary'}`}>
                  {brand.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="font-bold text-brand-text group-hover:text-primary transition-colors">{brand.name}</h3>
                <p className="text-xs text-brand-muted mt-1">{brand.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
