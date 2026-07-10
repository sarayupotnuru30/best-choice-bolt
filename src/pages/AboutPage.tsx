import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-secondary to-white border-b border-brand-border">
        <div className="container-max section-padding py-14 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">Our Story</span>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-text mb-4">
              About <span className="text-primary">Best Choice</span>
            </h1>
            <p className="text-brand-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Visakhapatnam's most loved destination for gifts, toys, baby products, and home lifestyle items.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-max section-padding py-14 space-y-16">
        {/* Who we are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionHeading title="Who " accent="We Are" />
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              Best Choice is a premier retail store located in Gajuwaka, Visakhapatnam, dedicated to bringing you the finest selection of gifts, toys, baby products, and home lifestyle items at unbeatable prices.
            </p>
            <p className="text-brand-muted text-sm leading-relaxed mb-4">
              We believe that every family deserves access to quality products without breaking the bank. That's our promise — <strong className="text-brand-text">Save Money &amp; Save Time</strong>.
            </p>
            <p className="text-brand-muted text-sm leading-relaxed">
              From trusted brands like Milton, Borosil, Barbie, Funskool, and Hot Wheels, to unique local finds — our curated collection of 1000+ products ensures there's something for everyone.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-video bg-brand-section">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Best Choice store"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card p-8 border-l-4 border-primary"
          >
            <h3 className="text-lg font-bold text-brand-text mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Our Mission
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              To be Visakhapatnam's most trusted one-stop shop for gifts, toys and lifestyle products — delivering genuine quality at honest prices, while making every customer's shopping experience delightful and effortless.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="card p-8 border-l-4 border-emerald-500"
          >
            <h3 className="text-lg font-bold text-brand-text mb-3 flex items-center gap-2">
              <span className="text-2xl">🌟</span> Our Vision
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              To expand across Andhra Pradesh as the most recognized brand for affordable premium gifting and lifestyle products, serving families and businesses with a wide range of world-class products.
            </p>
          </motion.div>
        </div>

        {/* Store images */}
        <div>
          <SectionHeading title="Our " accent="Store" subtitle="Visit us at our beautiful store in Gajuwaka, Visakhapatnam" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600',
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-card aspect-video bg-brand-section">
                <img src={img} alt={`Store ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <SectionHeading title="Our " accent="Values" centered />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { icon: '🤝', title: 'Trust', desc: 'Building lasting relationships with every customer.' },
              { icon: '💎', title: 'Quality', desc: 'Only genuine, tested products on our shelves.' },
              { icon: '💰', title: 'Value', desc: 'Best prices without compromising on quality.' },
              { icon: '❤️', title: 'Care', desc: 'Treating every customer like family.' },
            ].map((v) => (
              <div key={v.title} className="card p-5 text-center hover:shadow-card-hover transition-all">
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h4 className="font-bold text-brand-text text-sm mb-1">{v.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
