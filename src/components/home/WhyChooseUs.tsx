import { motion } from 'framer-motion';
import { Package, Tag, ShieldCheck, Truck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

const features = [
  {
    icon: Package,
    title: '1000+ Products',
    description: 'Massive selection across gifts, toys, baby, home & lifestyle categories.',
    color: 'text-primary',
    bg: 'bg-secondary',
  },
  {
    icon: Tag,
    title: 'Affordable Prices',
    description: 'Best prices guaranteed. Save more on every purchase with our regular offers.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Store',
    description: 'Hundreds of happy families trust Best Choice for quality and authenticity.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free delivery above ₹999. Quick dispatch and reliable delivery to your door.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 bg-white">
      <div className="container-max section-padding">
        <SectionHeading
          title="Why Choose "
          accent="Best Choice?"
          subtitle="We're committed to delivering the best shopping experience"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-6 text-center hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mx-auto mb-4`}>
                <f.icon size={26} className={f.color} />
              </div>
              <h3 className="font-bold text-base text-brand-text mb-2">{f.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
