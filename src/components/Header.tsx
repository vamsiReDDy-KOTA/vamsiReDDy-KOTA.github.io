"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0D14]/80 backdrop-blur-md border-b border-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Vamsi Kota <span className="text-[#10B981]">| AI Solutions Architect</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Domain Expertise", "Featured Projects", "Engineering Services", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Schedule Strategy Call
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
