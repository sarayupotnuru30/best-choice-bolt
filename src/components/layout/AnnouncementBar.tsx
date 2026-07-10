import { Phone } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-xs py-2">
      <div className="container-max section-padding">
        <div className="hidden sm:flex items-center justify-between">
          <span className="font-medium">Free Delivery Above ₹999 | Shop Now &amp; Save More!</span>
          <span className="font-semibold italic">Save Money &amp; Save Time</span>
          <a href="tel:9063821610" className="flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity">
            <Phone size={13} />
            9063821610
          </a>
        </div>
        {/* Mobile: marquee effect via CSS animation */}
        <div className="sm:hidden overflow-hidden">
          <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            <span>Free Delivery Above ₹999</span>
            <span>•</span>
            <span>Save Money &amp; Save Time</span>
            <span>•</span>
            <a href="tel:9063821610" className="flex items-center gap-1">
              <Phone size={11} /> 9063821610
            </a>
            <span>•</span>
            <span>Free Delivery Above ₹999</span>
            <span>•</span>
            <span>Save Money &amp; Save Time</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
