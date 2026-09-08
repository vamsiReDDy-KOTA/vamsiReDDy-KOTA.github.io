"use client";

import { motion } from "framer-motion";
import { Cpu, Network, PhoneCall, Database } from "lucide-react";

const services = [
  {
    title: "AI SaaS MVP Development (0 to 1)",
    description: "Rapid architecture and full-stack implementation of AI-native SaaS products, getting you from concept to scalable MVP in weeks, not months.",
    icon: Cpu,
  },
  {
    title: "Production RAG & GraphRAG Implementation",
    description: "Building zero-hallucination semantic search and knowledge retrieval engines using vector databases, Neo4j knowledge graphs, and LLM orchestration.",
    icon: Database,
  },
  {
    title: "Real-Time Voice AI & Telephony Integration",
    description: "Architecting sub-second latency conversational agents with Twilio, WebSockets, and leading STT/TTS models for automated inbound and outbound calling.",
    icon: PhoneCall,
  },
  {
    title: "Enterprise Cloud Microservices & ETL Pipelines",
    description: "Designing resilient, highly-concurrent distributed systems and data pipelines on AWS/GCP, tailored for complex multi-tenant environments.",
    icon: Network,
  }
];

export default function Services() {
  return (
    <section id="engineering-services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Specialized architectural consulting and hands-on engineering for high-impact AI and cloud initiatives.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex gap-6 bg-gradient-to-br from-[#111726] to-[#0A0D14] border border-[#1E293B] rounded-2xl p-8 hover:border-[#6366F1]/50 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
                <service.icon className="w-7 h-7 text-[#6366F1]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
