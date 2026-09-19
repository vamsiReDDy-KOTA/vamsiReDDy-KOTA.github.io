"use client";

import { motion } from "framer-motion";
import { HeartPulse, Scale, Mic, Cloud, Building, Activity } from "lucide-react";

const domains = [
  {
    title: "HealthTech & Revenue Cycle Management (RCM)",
    icon: HeartPulse,
    description: "End-to-end knowledge of clinical workflows, claims lifecycles (Eligibility, Prior Auth, Coding, Denials, Posting), EMR/EHR data reconciliation, HIPAA/audit compliance, and remote patient monitoring.",
    color: "group-hover:text-pink-500",
    bg: "group-hover:bg-pink-500/10",
  },
  {
    title: "LegalTech & Enterprise Knowledge Intelligence",
    icon: Scale,
    description: "Deep expertise in legal case discovery, contract compliance, meeting intelligence, multi-tenant RBAC/ReBAC security, and zero-hallucination GraphRAG search over unstructured document stores.",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    title: "Real-Time Telephony & Voice AI Infrastructure",
    icon: Mic,
    description: "Sub-second latency streaming architectures, Twilio PSTN routing, multi-tenant telephony provisioning, bi-directional WebSockets, and conversational voice agents.",
    color: "group-hover:text-[#10B981]",
    bg: "group-hover:bg-[#10B981]/10",
  },
  {
    title: "FinTech, Cloud Reselling & Multi-Tenant eCommerce",
    icon: Cloud,
    description: "Complex recurring subscription billing (Stripe, Razorpay), cloud provider provisioning pipelines (AWS/Azure/GCP), marketplace architectures, and high-concurrency microservices.",
    color: "group-hover:text-[#6366F1]",
    bg: "group-hover:bg-[#6366F1]/10",
  },
  {
    title: "PropTech & Real Estate",
    icon: Building,
    description: "Interactive geospatial map search, instant buyer-seller messaging over WebSockets, scheduling workflows, and virtual tours.",
    color: "group-hover:text-amber-500",
    bg: "group-hover:bg-amber-500/10",
  },
  {
    title: "Developer Tooling & QA Observability",
    icon: Activity,
    description: "Distributed microservices, automated AI experiment pipelines, real-time team collaboration, and live Grafana observability dashboards.",
    color: "group-hover:text-purple-500",
    bg: "group-hover:bg-purple-500/10",
  }
];

export default function DomainGrid() {
  return (
    <section id="domain-expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Domain Knowledge</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Deep vertical expertise combined with modern software architecture to solve complex industry-specific problems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[#111726] border border-[#1E293B] rounded-2xl p-6 hover:border-[#6366F1]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] overflow-hidden"
          >
            <div className={`w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 transition-colors duration-300 ${domain.bg}`}>
              <domain.icon className={`w-6 h-6 text-slate-400 transition-colors duration-300 ${domain.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">{domain.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{domain.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
