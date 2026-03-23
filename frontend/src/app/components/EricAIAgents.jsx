"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const agents = [
  {
    name: "Eric AI DB Designer",
    desc: "Rapid protocol-to-CRF design with edit checks and SDTM-ready structures.",
    img: "/logo.gif",
    link: "/agents/db-designer",
  },
  {
    name: "Eric AI Data Entry",
    desc: "AI-assisted ingestion of scanned source documents with PHI de-identification.",
    img: "/logo.gif",
    link: "/agents/data-entry",
  },
  {
    name: "Eric AI CRA",
    desc: "Remote, risk-based monitoring using de-identified source data.",
    img: "/logo.gif",
    link: "/agents/cra",
  },
  {
    name: "Eric AI Statistics",
    desc: "Real-time analytics and analysis-ready datasets.",
    img: "/logo.gif",
    link: "/agents/statistics",
  },
  {
    name: "Eric AI Medical Writer",
    desc: "AI-assisted drafting of clinical documents with human review.",
    img: "/logo.gif",
    link: "/agents/medical-writer",
  },
  {
    name: "Eric AI Document Manager",
    desc: "Continuous eTMF completeness and inspection readiness.",
    img: "/logo.gif",
    link: "/agents/document-manager",
  },
  {
    name: "Eric AI Project Manager",
    desc: "Predictive insights into timelines, risks, and execution.",
    img: "/logo.gif",
    link: "/agents/project-manager",
  },
];

export default function EricAIAgents() {
  const router = useRouter();

  return (
    <div className="bg-[#0B5EA8]">

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div
            className="text-center pb-16"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Eric AI Agents
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                onClick={() => router.push(agent.link)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#0B5EA8] transition">
                    {agent.name}
                  </h3>

                  <p className="text-sm text-gray-600 flex-1">
                    {agent.desc}
                  </p>

                  {/* Learn More (Bottom Right) */}
                  <div className="mt-4 flex justify-end">
                    <span className="text-sm font-medium text-[#0B5EA8] opacity-0 group-hover:opacity-100 transition duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}