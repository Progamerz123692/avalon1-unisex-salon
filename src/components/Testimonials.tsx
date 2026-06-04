import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Testimonials() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            What Our <span className="italic gold-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-gold-400/20" size={40} />
              <div className="flex gap-1 text-gold-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-salon-black font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-white/40 text-xs uppercase tracking-widest">Verified Client</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
