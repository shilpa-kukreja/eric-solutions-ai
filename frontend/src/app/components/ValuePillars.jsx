"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "Go from protocol to live EDC in hours, not months.",
  },
  {
    icon: "💰",
    title: "Cost",
    desc: "Reduce data collection and monitoring costs by up to 80–90%.",
  },
  {
    icon: "🛡️",
    title: "Trust",
    desc: "AI-assisted, human-verified outputs with full auditability.",
  },
  {
    icon: "🔗",
    title: "Modularity",
    desc: "Activate only the AI agents you need. Scale as your trial grows.",
  },
];

export default function ValuePillars() {
  return (
    <section className="py-16 bg-[#0B5EA8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <motion.div
        className="text-center pb-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Value Pillars
        </h2>
      </motion.div>
        <p className="text-gray-600 mb-12 text-white">
          Built for speed, efficiency, and scalability
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}