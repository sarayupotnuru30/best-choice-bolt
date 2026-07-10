import { Phone, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export function StoreLocation() {
  const mapQuery = encodeURIComponent('26/27/14 Chinnagantyada Junction Kanithi Road Gajuwaka Visakhapatnam');

  return (
    <section className="py-14 bg-brand-section">
      <div className="container-max section-padding">
        <SectionHeading
          title="Visit Our "
          accent="Store"
          subtitle="Come experience the Best Choice difference in person"
          centered
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card min-h-[300px] bg-gray-100">
            <iframe
              title="Best Choice Store Location"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=15`}
              width="100%"
              height="100%"
              style={{ minHeight: '320px', border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Store details */}
          <div className="lg:col-span-2 card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-white font-black text-sm">BC</span>
                </div>
                <div>
                  <h3 className="font-black text-base text-brand-text">BEST CHOICE</h3>
                  <p className="text-[11px] text-primary font-medium">Gift &amp; Lifestyle Store</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-text mb-0.5">Store Address</p>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      26/27/14, Chinnagantyada Junction,<br />
                      Kanithi Road, Gajuwaka,<br />
                      Visakhapatnam
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-text mb-0.5">Phone Numbers</p>
                    <a href="tel:9063821610" className="block text-xs text-brand-muted hover:text-primary transition-colors">9063821610</a>
                    <a href="tel:8143078003" className="block text-xs text-brand-muted hover:text-primary transition-colors">8143078003</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-text mb-0.5">Email</p>
                    <a href="mailto:bestchoicegiftstoys@gmail.com" className="text-xs text-brand-muted hover:text-primary transition-colors break-all">
                      bestchoicegiftstoys@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919063821610`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold rounded-full py-2.5 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
              <a
                href={`https://maps.google.com/maps?q=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary text-xs font-bold rounded-full py-2.5 hover:bg-primary hover:text-white transition-all"
              >
                <Navigation size={13} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
