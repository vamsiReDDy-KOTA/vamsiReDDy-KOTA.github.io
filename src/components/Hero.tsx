"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const techStack = [
  "Python", "FastAPI", "Next.js", "React", "NestJS", 
  "LangChain", "LangGraph", "RAG", "Model Context Protocol (MCP)", 
  "Neo4j", "Qdrant", "ETL", "Twilio Voice", "WebSockets",
  "AWS", "Google Cloud", "Docker", "Kubernetes",
  "CI/CD", "GitHub Actions", "Grafana"
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]"></span>
        </span>
        AVAILABLE FOR HIGH-IMPACT FREELANCE & MVP ARCHITECTURE CONTRACTS
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl"
      >
        Engineering Scalable Multi-Tenant Platforms, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#6366F1]">Voice AI & Production GraphRAG.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed"
      >
        Senior Full-Stack & AI Engineer pairing 4+ years of cross-domain software delivery with cutting-edge agentic workflows. Specializing in low-latency voice, intelligent document processing, and cloud-native microservices.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
      >
        <Link 
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.4)] gap-2 group"
        >
          Book Architecture Sprint
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link 
          href="#featured-projects"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111726] border border-[#1E293B] hover:border-[#6366F1]/50 hover:bg-[#1E293B] text-white text-base font-semibold transition-all hover:scale-105 active:scale-95 gap-2"
        >
          <Terminal className="w-5 h-5" />
          View All Case Studies
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 max-w-4xl"
      >
        {techStack.map((tech) => (
          <span 
            key={tech}
            className="px-4 py-2 rounded-full bg-[#111726] border border-[#1E293B] text-slate-300 text-sm font-medium hover:border-[#10B981]/50 hover:text-white transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
