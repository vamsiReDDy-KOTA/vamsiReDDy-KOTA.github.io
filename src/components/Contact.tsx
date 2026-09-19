"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Architect Your Next Big Thing.</h2>
        <p className="text-slate-400 mb-16 text-lg leading-relaxed max-w-2xl mx-auto">
          Available for consulting, MVP development, and architectural design contracts. Reach out directly to discuss your project.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-[#10B981] transition-colors shadow-lg">
              <Mail className="w-6 h-6 text-[#10B981]" />
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
              <a href="mailto:kotavamsi16@gmail.com" className="text-base text-white font-semibold hover:text-[#10B981] transition-colors">kotavamsi16@gmail.com</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-[#6366F1] transition-colors shadow-lg">
              <Phone className="w-6 h-6 text-[#6366F1]" />
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
              <a href="tel:+919381379743" className="text-base text-white font-semibold hover:text-[#6366F1] transition-colors">+91 9381379743</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-pink-500 transition-colors shadow-lg">
              <MapPin className="w-6 h-6 text-pink-500" />
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium mb-1">Availability</p>
              <p className="text-base text-white font-semibold">Worldwide Remote</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
