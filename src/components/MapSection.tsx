import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3 space-y-8"
        >
          <div>
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4">Visit Us</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Our <span className="italic gold-gradient">Location</span></h2>
            <p className="text-white/50 leading-relaxed">
              Find us in the heart of Chandigarh. Experience premium grooming in a refined atmosphere.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Address</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  First Floor, SCO-29, Sector 21C, Sector 21, Chandigarh, 160022
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Contact</h4>
                <p className="text-white/50 text-sm">7986190972</p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir//Avalon+Unisex+Salon/@30.7259464,76.7725988,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-3 border border-white/10 transition-all uppercase tracking-widest text-sm"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-2/3 h-[450px] rounded-3xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://maps.google.com/maps?q=Avalon%20Unisex%20Salon%20Sector%2021C%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.85) brightness(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
