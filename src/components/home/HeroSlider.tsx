import { Link } from 'react-router-dom';

const HERO_DATA = {
  image: '/images/hero/image.png',
  titleAlt: 'BEST CHOICE',
  ctaLink: '/categories',
};

export function HeroSlider() {
  return (
    <section className="relative overflow-hidden bg-gray-900" style={{ height: 'clamp(360px, 55vw, 620px)' }}>
      {/* Whole Hero Made Clickable */}
      <Link 
        to={HERO_DATA.ctaLink} 
        className="absolute inset-0 block group cursor-pointer"
        aria-label="Shop Now"
      >
        <img
          src={HERO_DATA.image}
          alt={HERO_DATA.titleAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </Link>
    </section>
  );
}