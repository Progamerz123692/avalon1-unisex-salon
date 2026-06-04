import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone } from 'lucide-react';
import { SERVICES } from '../data';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Avalon Salon! I'd like to book an appointment.
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917986190972?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-salon-black">
      <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-[40px] relative overflow-hidden border-gold-400/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Book Your <span className="italic gold-gradient">Indulgence</span>
            </h2>
            <p className="text-white/50">
              Fill out the form below or reach out directly via WhatsApp for VIP scheduling.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold-400 font-bold">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold-400 font-bold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="+91 00000 00000"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold-400 font-bold">Select Service</label>
              <select
                name="service"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none"
                onChange={handleChange}
              >
                <option value="" className="bg-salon-black">Choose a service</option>
                {SERVICES.map(s => <option key={s.id} value={s.title} className="bg-salon-black">{s.title}</option>)}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold-400 font-bold">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold-400 font-bold">Special Notes</label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="Tell us about any specific requirements..."
                onChange={handleChange}
              />
            </div>
            
            <div className="md:col-span-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gold-400 hover:bg-gold-500 text-salon-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-colors text-lg"
              >
                <Send size={20} />
                CONFIRM VIA WHATSAPP
              </motion.button>
              
              <div className="flex items-center justify-center mt-6 gap-2 text-white/40">
                <Phone size={14} />
                <span className="text-xs tracking-widest uppercase font-medium">Or Call: +91 79861 90972</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
