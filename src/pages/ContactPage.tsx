import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Navigation } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapQuery = encodeURIComponent('26/27/14 Chinnagantyada Junction Kanithi Road Gajuwaka Visakhapatnam');

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

      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <SectionHeading title="Store " accent="Information" />

            <div className="card p-5 space-y-4">
              <ContactItem icon={MapPin} label="Address" color="text-primary bg-secondary">
                <p className="text-sm text-brand-muted leading-relaxed">
                  26/27/14, Chinnagantyada Junction,<br />
                  Kanithi Road, Gajuwaka,<br />
                  Visakhapatnam
                </p>
              </ContactItem>
              <ContactItem icon={Phone} label="Phone" color="text-primary bg-secondary">
                <a href="tel:9063821610" className="block text-sm text-brand-muted hover:text-primary transition-colors">9063821610</a>
                <a href="tel:8143078003" className="block text-sm text-brand-muted hover:text-primary transition-colors">8143078003</a>
              </ContactItem>
              <ContactItem icon={Mail} label="Email" color="text-primary bg-secondary">
                <a href="mailto:bestchoicegiftstoys@gmail.com" className="text-sm text-brand-muted hover:text-primary transition-colors break-all">
                  bestchoicegiftstoys@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={MessageCircle} label="WhatsApp" color="text-[#25D366] bg-green-50">
                <a href="https://wa.me/919063821610" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-[#25D366] transition-colors">
                  9063821610
                </a>
              </ContactItem>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/919063821610`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold rounded-full py-3 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={`https://maps.google.com/maps?q=${mapQuery}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary text-xs font-bold rounded-full py-3 hover:bg-primary hover:text-white transition-all"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-success" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2">Message Sent!</h3>
                  <p className="text-brand-muted text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-lg text-brand-text mb-5">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-brand-text block mb-1">Your Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="input-field" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-brand-text block mb-1">Phone</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile number" className="input-field" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="input-field" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Subject</label>
                      <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="input-field" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-brand-text block mb-1">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className="input-field resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      <Send size={14} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-card" style={{ height: 380 }}>
          <iframe
            title="Best Choice Location"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=15`}
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

function ContactItem({
  icon: Icon,
  label,
  children,
  color,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon size={15} />
      </div>
      <div>
        <p className="text-xs font-semibold text-brand-text mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}
