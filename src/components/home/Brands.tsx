import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { brands } from '../../data/brands';

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

export function Brands() {
  return (
    <section className="py-14 bg-brand-section">
      <div className="container-max section-padding">
        <SectionHeading
          title="Top "
          accent="Brands"
          subtitle="We stock only genuine products from trusted brands"
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className="group flex flex-col items-center justify-center card p-6 text-center hover:shadow-card-hover hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black mb-3 ${brandColors[brand.name] || 'bg-secondary text-primary'}`}>
                  {brand.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-sm font-bold text-brand-text group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-brand-muted mt-1 line-clamp-1">{brand.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
