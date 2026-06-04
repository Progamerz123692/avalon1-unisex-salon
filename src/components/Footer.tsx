import { Instagram, Facebook, Twitter, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
  ];

  const services = [
    'Hair Styling',
    'Bridal Makeup',
    'Skin Care',
    'Manicure',
    'Personal Grooming',
  ];

  return (
    <footer className="pt-20 pb-10 bg-salon-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-3xl font-serif font-bold tracking-widest text-white">
              AVALON<span className="text-gold-400">.</span>
            </span>
            <p className="text-white/40 text-sm leading-relaxed">
              Excellence in unisex beauty and wellness. Chandler's premier destination for luxury grooming and bridal artistry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-gold-400 transition-colors uppercase tracking-widest">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Our Specialties</h4>
            <ul className="space-y-4">
              {services.map(service => (
                <li key={service}>
                  <span className="text-sm text-white/40 uppercase tracking-widest">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Reach Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-white/40 text-sm">
                <MapPin size={18} className="text-gold-400 flex-shrink-0" />
                <span>Sector 21C, Chandigarh, 160022</span>
              </div>
              <div className="flex gap-3 text-white/40 text-sm">
                <Phone size={18} className="text-gold-400 flex-shrink-0" />
                <span>+91 79861 90972</span>
              </div>
              <div className="pt-4">
                <a
                  href="https://wa.me/917986190972"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-salon-black font-bold rounded-full text-xs transition-all hover:scale-105"
                >
                  <MessageSquare size={16} />
                  WHATSAPP SUPPORT
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">
            © 2026 AVALON UNISEX SALON. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
