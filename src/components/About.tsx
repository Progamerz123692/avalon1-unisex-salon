import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface AboutProps {
  image: string;
}

export default function About({ image }: AboutProps) {
  const highlights = [
    "Certified Beauty Experts",
    "Premium International Products",
    "Luxury Private Ambience",
    "Strict Hygiene Protocols"
  ];

  return (
    <section id="about" className="section-padding bg-salon-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
            <img
              src={image}
              alt="Salon Ambience"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-400 z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-400 z-0" />
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl z-20 hidden md:block">
            <span className="text-gold-400 font-serif text-4xl block mb-1">10+</span>
            <span className="text-xs uppercase tracking-widest text-white/70">Years of Luxury <br /> Excellence</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              The Art of <span className="italic gold-gradient">Personalized Beauty</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Avalon Unisex Salon is more than just a beauty destination; it's a sanctuary of luxury in the heart of Chandigarh. 
              We believe that true beauty is refined, personal, and deserving of the finest attention.
            </p>
            <p className="text-white/60 mb-8">
              Our team of master stylists and beauty experts are dedicated to crafting bespoke looks that celebrate your individuality. 
              Using only world-class products and the latest techniques, we ensure every visit is an experience in pure indulgence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400">
                  <Check size={14} />
                </div>
                <span className="text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="inline-block border-b-2 border-gold-400 pb-1 text-gold-400 font-bold tracking-widest hover:text-white hover:border-white transition-all"
          >
            EXPLORE OUR SERVICES
          </a>
        </motion.div>
      </div>
    </section>
  );
}
