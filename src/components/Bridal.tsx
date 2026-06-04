import { motion } from 'motion/react';

interface BridalProps {
  image: string;
}

export default function Bridal({ image }: BridalProps) {
  const bridalServices = [
    { title: "Bridal Makeup", desc: "Timeless elegance for your special day." },
    { title: "Pre-Wedding Grooming", desc: "Complete skin & hair prep routines." },
    { title: "Elite Hair Styling", desc: "Signature buns, braids and luxurious flows." },
    { title: "Luxury Skin Treatments", desc: "Advanced facials for that bridal glow." }
  ];

  return (
    <section id="bridal" className="section-padding bg-zinc-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4"
          >
            The Bridal Suite
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight"
          >
            Unveil Your <br />
            <span className="italic gold-gradient">Bridal Brilliance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 text-lg mb-12 max-w-xl"
          >
            Your wedding is a once-in-a-lifetime journey. At Avalon, we curate an exclusive beauty experience to make you feel like royalty as you walk down the aisle.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bridalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-gold-400/30 pl-6 py-2"
              >
                <h4 className="text-white font-bold mb-1 tracking-wider uppercase text-sm">{service.title}</h4>
                <p className="text-white/40 text-xs">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="#booking"
              className="px-10 py-4 border border-gold-400 text-gold-400 font-bold rounded-full hover:bg-gold-400 hover:text-salon-black transition-all"
            >
              BOOK BRIDAL CONSULTATION
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex-1 order-1 lg:order-2 w-full"
        >
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
              <img
                src={image}
                alt="Bridal Showcase"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Soft Shadow effect */}
            <div className="absolute -inset-4 bg-gold-400/10 blur-2xl rounded-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
