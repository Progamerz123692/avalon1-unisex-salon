import { motion } from 'motion/react';
import { MessageSquare, Calendar, Star } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Luxury Salon"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black via-salon-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-salon-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">
              Premium Beauty Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Experience Luxury <br />
            <span className="italic gold-gradient">Beauty & Wellness</span>
          </h1>

          <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
            Chandigarh's trusted premium unisex salon with <span className="text-white font-medium">905+ happy reviews</span>. 
            Blending artistry with high-end luxury to reveal your most radiant self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#booking"
              className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-salon-black font-bold rounded-full transition-all flex items-center justify-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Calendar size={20} />
              BOOK APPOINTMENT
            </a>
            <a
              href="https://wa.me/917986190972"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-md border border-white/10"
            >
              <MessageSquare size={20} />
              WHATSAPP NOW
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">4.8</span>
              <div className="flex items-center gap-1 text-gold-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-xs text-white/50 uppercase tracking-widest">Global Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">905+</span>
              <div className="h-1 w-8 bg-gold-400 my-2" />
              <span className="text-xs text-white/50 uppercase tracking-widest">Happy Reviews</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">10k+</span>
              <div className="h-1 w-8 bg-gold-400 my-2" />
              <span className="text-xs text-white/50 uppercase tracking-widest">Satisfied Clients</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  );
}
