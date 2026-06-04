import { motion } from 'motion/react';
import { Heart, Stars, Scissors, ShieldCheck, Sparkles, UserCheck, Coffee } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Stars,
      title: "4.8 Star Rated",
      desc: "Consistently delivering top-tier service quality verified by hundreds."
    },
    {
      icon: UserCheck,
      title: "905+ Reviews",
      desc: "A legacy of trust built through thousands of happy client sessions."
    },
    {
      icon: Scissors,
      title: "Beauty Experts",
      desc: "Master stylists with years of international certification and training."
    },
    {
      icon: ShieldCheck,
      title: "Premium Products",
      desc: "Only the world's finest beauty brands touch your skin and hair."
    },
    {
      icon: Heart,
      title: "Hygienic Environment",
      desc: "Strict medical-grade sanitization protocols for your peace of mind."
    },
    {
      icon: Sparkles,
      title: "Personalized Care",
      desc: "Bespoke beauty solutions designed specifically for your unique needs."
    }
  ];

  return (
    <section className="section-padding bg-salon-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4">
            Why Avalon
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            The Avalon <span className="italic gold-gradient">Advantage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
