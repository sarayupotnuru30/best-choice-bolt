import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero/image.png',
    tag: 'Everything Under One Roof',
    title: 'BEST CHOICE',
    subtitle: 'Save Money & Save Time',
    cta: 'Shop Now',
    ctaLink: '/categories',
    bgColor: 'from-primary-900/70 to-primary-800/40',
    overlay: true,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'For Every Kid',
    title: 'Toys Collection',
    subtitle: 'Explore 500+ fun & educational toys for all ages',
    cta: 'Explore Toys',
    ctaLink: '/categories/gift-and-toys',
    bgColor: 'from-pink-900/60 to-pink-700/30',
    overlay: true,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'Gentle & Safe',
    title: 'Baby Collection',
    subtitle: 'Premium baby products trusted by thousands of moms',
    cta: 'Shop Baby',
    ctaLink: '/categories/baby-items',
    bgColor: 'from-rose-900/60 to-rose-700/30',
    overlay: true,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tag: 'Perfect for Every Occasion',
    title: 'Gift Collection',
    subtitle: 'Beautiful gifts for birthdays, anniversaries & festivals',
    cta: 'Find Gifts',
    ctaLink: '/categories/gift-and-toys',
    bgColor: 'from-pink-900/60 to-fuchsia-700/30',
    overlay: true,
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-gray-900" style={{ height: 'clamp(360px, 55vw, 620px)' }}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {slide.overlay && (
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max section-padding w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="max-w-xl"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-white/30">
                {slide.tag}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3 drop-shadow-sm">
                {slide.title}
              </h1>
              <p className="text-white/90 text-sm sm:text-base mb-6 max-w-sm leading-relaxed">
                {slide.subtitle}
              </p>
              <Link
                to={slide.ctaLink}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-full px-7 py-3.5 text-sm shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-200 active:scale-95"
              >
                {slide.cta}
                <span className="text-base">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="text-brand-text" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="text-brand-text" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
