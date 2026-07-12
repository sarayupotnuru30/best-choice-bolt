import { Phone, Mail, MapPin, MessageCircle, Navigation, Instagram, Youtube } from 'lucide-react';

export function ContactPage() {
  const mapUrl = "https://www.google.com/maps/place/Best+Choice/@17.6799753,83.1967153,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3969f97a076af7:0x2dd37186e6a1ee92!8m2!3d17.6799753!4d83.1992902!16s%2Fg%2F11j_8n2fnp?hl=id&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-section border-b border-brand-border">
        <div className="container-max section-padding py-10 text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 block">Get in Touch</span>
          <h1 className="text-3xl font-black text-brand-text mb-2">Contact <span className="text-primary">Us</span></h1>
          <p className="text-brand-muted text-sm">We'd love to hear from you. Visit our store or reach out anytime.</p>
        </div>
      </div>

      <div className="container-max section-padding py-12 space-y-10">
        
        {/* Redesigned Side-by-Side Store Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Block */}
          <div className="card p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary bg-secondary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-text uppercase tracking-wider mb-1.5">Address</p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  26/27/14, Chinnagantyada Junction,<br />
                  Kanithi Road, Gajuwaka,<br />
                  Visakhapatnam
                </p>
              </div>
            </div>
            <div className="pt-4 mt-auto">
              <a
                href={mapUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary text-xs font-bold rounded-full py-2.5 hover:bg-primary hover:text-white transition-all"
              >
                <Navigation size={13} /> Get Directions
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Block */}
          <div className="card p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary bg-secondary">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-text uppercase tracking-wider mb-2">Phone &amp; Chat</p>
                <div className="space-y-1.5">
                  <a href="tel:9063821610" className="block text-sm text-brand-muted hover:text-primary transition-colors font-medium">
                    Call: 9063821610
                  </a>
                  <a href="tel:8143078003" className="block text-sm text-brand-muted hover:text-primary transition-colors font-medium">
                    Call: 8143078003
                  </a>
                  <a href="https://wa.me/919063821610" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brand-muted hover:text-[#25D366] transition-colors font-medium pt-0.5">
                    <MessageCircle size={15} className="text-[#25D366] flex-shrink-0" /> WhatsApp: 9063821610
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-auto">
              <a 
                href="https://wa.me/919063821610" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold rounded-full py-2.5 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={13} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Email & Social Media Block */}
          <div className="card p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary bg-secondary">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-brand-text uppercase tracking-wider mb-2">Email &amp; Connect</p>
                <div className="space-y-2">
                  <a href="mailto:bestchoicegiftstoys@gmail.com" className="block text-sm text-brand-muted hover:text-primary transition-colors break-all font-medium mb-1">
                    bestchoicegiftstoys@gmail.com
                  </a>
                  <a href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-brand-muted hover:text-[#E1306C] transition-colors font-medium">
                    <Instagram size={14} className="text-[#E1306C] flex-shrink-0" /> Instagram: @best_choice_gajuwaka
                  </a>
                  <a href="https://youtube.com/@bestchoicecollections" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-brand-muted hover:text-[#FF0000] transition-colors font-medium">
                    <Youtube size={14} className="text-[#FF0000] flex-shrink-0" /> YouTube: @bestchoicecollections
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-auto">
              <a 
                href="mailto:bestchoicegiftstoys@gmail.com" 
                className="w-full text-center block border-2 border-primary text-primary text-xs font-bold rounded-full py-2.5 hover:bg-primary hover:text-white transition-all"
              >
                Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden shadow-card" style={{ height: 450 }}>
          <iframe
            title="Best Choice Location Map"
            src="https://maps.google.com/maps?q=Best%20Choice,%20Kanithi%20Road,%20Gajuwaka,%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
      </div>
    </div>
  );
}