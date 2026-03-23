"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "AI Interprets Intent",
    desc: "Protocols, source data, and workflows are intelligently analyzed to understand context and objectives.",
  },
  {
    title: "Structured Outputs Generated",
    desc: "CRFs, datasets, analytics, and documents are automatically created in standardized formats.",
  },
  {
    title: "Human Expert Review",
    desc: "Experienced professionals validate and refine outputs to ensure accuracy and compliance.",
  },
  {
    title: "Full Traceability",
    desc: "Every action is logged with complete audit trails for transparency and regulatory confidence.",
  },
];

export default function HowEricAIWorks() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
        <motion.div
        className="text-center pb-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          How Eric AI Works
        </h2>
      </motion.div>
          <p className="text-gray-600 text-lg">
            A seamless blend of AI automation and human expertise to deliver
            speed, accuracy, and compliance.
          </p>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                
                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Circle */}
                <div className="relative flex items-center justify-center">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      {/* <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 font-medium">
            This balance enables speed without compromising quality or compliance.
          </p>
        </div>
      </section> */}

    </div>
  );
}