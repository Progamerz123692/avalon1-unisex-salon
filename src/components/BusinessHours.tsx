import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { BUSINESS_HOURS } from '../data';

export default function BusinessHours() {
  return (
    <section className="section-padding bg-salon-black">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-20 rounded-[50px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-400/20 flex items-center justify-center text-gold-400 mb-6">
                <Clock size={32} />
              </div>
              <h2 className="text-5xl font-serif font-bold text-white leading-tight">
                Open <span className="italic gold-gradient">Every Day</span> <br />
                For Your Luxury.
              </h2>
              <p className="text-white/50 text-lg">
                We believe beauty shouldn't wait. Our doors are open seven days a week to accommodate your busy lifestyle.
              </p>
            </div>

            <div className="md:w-1/2 w-full space-y-3">
              {BUSINESS_HOURS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-4 border-b border-white/5 group hover:border-gold-400/30 transition-colors"
                >
                  <span className="font-bold text-white/80 group-hover:text-white transition-colors">{item.day}</span>
                  <div className="flex-1 mx-4 border-t border-dotted border-white/20" />
                  <span className="text-gold-400 font-medium">{item.hours}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
