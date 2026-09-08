"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Voice AI & Agentic Platforms",
    projects: [
      {
        title: "Chi AI — Real-Time Voice AI & Agent-as-a-SaaS Platform",
        tech: ["Python", "FastAPI", "Twilio", "Gemini", "GPT-4o", "ElevenLabs", "Deepgram STT", "WebSockets", "MCP", "PostgreSQL", "LangGraph", "React"],
        highlights: "Sub-second voice pipeline via bi-directional WebSockets; automated multi-tenant Twilio phone provisioning; extensible MCP tool execution runtime; meta-agent that builds tailored agents via voice prompts.",
      }
    ]
  },
  {
    name: "LegalTech & Document Intelligence",
    projects: [
      {
        title: "CaseNote AI — Meeting Intelligence & Legal GraphRAG",
        tech: ["Python", "FastAPI", "LangChain", "OpenAI", "MCP", "Qdrant", "Neo4j", "Recall.ai", "Next.js", "React"],
        highlights: "Automated meeting bot transcribing conversations; hybrid GraphRAG fusing Qdrant vector search with Neo4j knowledge graphs for legal citations; MCP agents orchestrating action items, case briefs, and calendar syncing.",
      },
      {
        title: "Go-Perla — Enterprise AI Document Management System (DMS)",
        tech: ["Python", "FastAPI", "AWS Bedrock", "MongoDB", "React", "Stripe"],
        highlights: "Multi-tenant DMS with AWS Bedrock OCR; citation-aware semantic RAG search; fine-grained RBAC/ReBAC file-level permissions; automated document expiration and deadline tracking.",
      }
    ]
  },
  {
    name: "HealthTech & Life Sciences",
    projects: [
      {
        title: "ASP-RCM — Enterprise Healthcare Revenue Cycle Platform",
        tech: ["Next.js", "NestJS", "Python", "FastAPI", "Google Cloud", "n8n", "ETL", "PostgreSQL", "MongoDB"],
        highlights: "Managed full product lifecycle across the complete claims workflow (Eligibility → Prior Auth → Coding → Denials → Payment Posting); architected cloud ETL pipelines reconciling multi-EMR data; automated claim submissions via n8n; integrated AI for automated medical coding.",
      },
      {
        title: "Gaia — Maternal Health Platform",
        tech: ["Next.js", "React Native", "GraphQL", "AWS Amplify", "DynamoDB", "AWS Lambda"],
        highlights: "Cross-platform telehealth suite for doctors and expectant mothers; live remote vitals monitoring; digital doctor video/audio consultations; AI-driven personalized maternal fitness and nutrition recommendation engine.",
      }
    ]
  },
  {
    name: "Cloud Infrastructure & Experiment Platforms",
    projects: [
      {
        title: "Redington Cloud — Cloud Services Reselling Marketplace",
        tech: ["Next.js", "NestJS", "Medusa.js", "MongoDB", "PostgreSQL", "Stripe", "Razorpay"],
        highlights: "Scalable B2B marketplace reselling AWS, Azure, and GCP resources; automated tenant provisioning and lifecycle tracking; multi-gateway subscription billing with Stripe and Razorpay.",
      },
      {
        title: "TestRunz — AI Experiment & Testing Platform",
        tech: ["Python", "FastAPI", "Next.js", "Moleculer.js", "OpenAI", "MongoDB", "Grafana", "AWS"],
        highlights: "Distributed microservices platform running automated AI experiment pipelines; real-time team collaboration with WebSockets; live Grafana observability dashboards tracking execution metrics.",
      }
    ]
  },
  {
    name: "PropTech & Real Estate",
    projects: [
      {
        title: "KeyWe — Real Estate Property Discovery & Virtual Tours",
        tech: ["Next.js", "Node.js", "WebSockets", "MongoDB", "AWS"],
        highlights: "Interactive geospatial map search for property discovery; instant buyer-seller messaging over WebSockets; scheduling workflows for site visits; embedded virtual tour experiences.",
      }
    ]
  }
];

export default function ProjectShowcase() {
  return (
    <section id="featured-projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1E293B]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">A showcase of production-ready platforms engineered across diverse domains.</p>
      </div>

      <div className="space-y-16">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-[#1E293B] flex-1"></div>
              <h3 className="text-[#10B981] font-semibold text-lg">{category.name}</h3>
              <div className="h-px bg-[#1E293B] flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#111726] border border-[#1E293B] rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                      <FolderGit2 className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <Link href="#contact" className="p-2 rounded-full hover:bg-slate-800 transition-colors">
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.highlights}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/50 text-[#6366F1] border border-[#6366F1]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
