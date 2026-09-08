"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Direct Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Architect Your Next Big Thing.</h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">
            Available for consulting, MVP development, and architectural design contracts. Reach out directly or fill out the intake form to discuss your project.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-[#10B981] transition-colors">
                <Mail className="w-5 h-5 text-[#10B981]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <a href="mailto:kotavamsi16@gmail.com" className="text-lg text-white font-semibold hover:text-[#10B981] transition-colors">kotavamsi16@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-[#6366F1] transition-colors">
                <Phone className="w-5 h-5 text-[#6366F1]" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <a href="tel:+919381379743" className="text-lg text-white font-semibold hover:text-[#6366F1] transition-colors">+91 9381379743</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#1E293B] flex items-center justify-center group-hover:border-pink-500 transition-colors">
                <MapPin className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Availability</p>
                <p className="text-lg text-white font-semibold">Worldwide Remote / US & EU Friendly</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Intake Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#111726] border border-[#1E293B] rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="absolute inset-0 bg-[#111726]/90 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-center p-8">
              <CheckCircle2 className="w-16 h-16 text-[#10B981] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h3>
              <p className="text-slate-400">I&apos;ll review your project details and get back to you shortly to schedule our strategy call.</p>
            </div>
          ) : null}

          <h3 className="text-2xl font-bold text-white mb-6">Project Intake</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                <input required type="text" id="name" className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400">Work Email</label>
                <input required type="email" id="email" className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="domain" className="text-sm font-medium text-slate-400">Project Domain</label>
              <select required id="domain" className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all appearance-none">
                <option value="" disabled selected>Select an area of focus...</option>
                <option value="Voice AI">Voice AI & Agents</option>
                <option value="Healthcare">Healthcare / RCM</option>
                <option value="Legal">Legal / Document AI</option>
                <option value="MVP">Full-Stack MVP</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-slate-400">Estimated Budget</label>
              <select required id="budget" className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all appearance-none">
                <option value="" disabled selected>Select a budget range...</option>
                <option value="<3k">&lt; $3,000</option>
                <option value="3k-7k">$3,000 - $7,000</option>
                <option value="7k+">$7,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium text-slate-400">Project Details</label>
              <textarea required id="details" rows={4} className="w-full bg-[#0A0D14] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all resize-none" placeholder="Tell me about your architecture needs, timeline, and goals..."></textarea>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white text-base font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.2)] gap-2 group">
              Submit Inquiry
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
