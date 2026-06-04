import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Luxury <span className="italic gold-gradient">Service Menu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            From precision grooming to advanced aesthetic treatments, discover a comprehensive range of services tailored for the discerning individual.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl group transition-all duration-500 hover:border-gold-400/50"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-salon-black transition-colors duration-500">
                  {IconComponent && <IconComponent size={30} />}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#booking"
                  className="flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 hover:text-white transition-colors uppercase"
                >
                  Book Now
                  <LucideIcons.ChevronRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
