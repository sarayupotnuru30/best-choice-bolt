import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Cart', to: '/cart' },
  { label: 'Wishlist', to: '/wishlist' },
];

const categoryLinks = [
  { label: 'Gift & Toys', to: '/categories/gift-and-toys' },
  { label: 'Baby Items', to: '/categories/baby-items' },
  { label: 'Decoration Items', to: '/categories/decoration-items' },
  { label: 'Ladies Handbags', to: '/categories/ladies-handbags' },
  { label: 'Books & Stationery', to: '/categories/books-and-stationery' },
  { label: 'Cosmetics', to: '/categories/cosmetics' },
];

export function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      {/* Main footer */}
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-black text-sm">BC</span>
              </div>
              <div>
                <p className="font-black text-base leading-tight">BEST CHOICE</p>
                <p className="text-[10px] text-primary-300 font-medium">Save Money &amp; Save Time</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your one-stop destination for gifts, toys, baby products, and home lifestyle items in Visakhapatnam.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/best_choice_gajuwaka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://youtube.com/@bestchoicecollections"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="https://www.google.com/maps/place/Best+Choice/@17.6799753,83.1967153,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3969f97a076af7:0x2dd37186e6a1ee92!8m2!3d17.6799753!4d83.1992902!16s%2Fg%2F11j_8n2fnp?hl=id&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Google Maps"
              >
                <FaGoogle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {categoryLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="leading-relaxed">
                  26/27/14, Chinnagantyada Junction,<br />
                  Kanithi Road, Gajuwaka,<br />
                  Visakhapatnam
                </span>
              </li>
              <li>
                <a href="tel:9063821610" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  9063821610
                </a>
              </li>
              <li>
                <a href="tel:8143078003" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  8143078003
                </a>
              </li>
              <li>
                <a href="mailto:bestchoicegiftstoys@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors break-all">
                  <Mail size={14} className="text-primary flex-shrink-0" />
                  bestchoicegiftstoys@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919063821610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <MessageCircle size={14} className="text-primary flex-shrink-0" />
                  WhatsApp: 9063821610
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max section-padding py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Best Choice. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed with care in Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
}