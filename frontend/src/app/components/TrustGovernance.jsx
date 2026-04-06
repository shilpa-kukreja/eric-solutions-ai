"use client";

import { motion } from "framer-motion";

const principles = [
  {
    img: "/trust/1.png",
    title: "AI-assisted, human-verified workflows",
  },
  {
    img: "/trust/2.png",
    title: "Full traceability and audit trails",
  },
  {
    img: "/trust/3.png",
    title: "Standards-driven outputs (CDISC / SDTM)",
  },
  {
    img: "/trust/4.png",
    title: "PHI de-identification and data security",
  },
  {
    img: "/trust/5.png",
    title: "Transparent AI behavior",
  },
 
];

export default function TrustGovernance() {
  return (
    <div className="bg-[#0B5EA8] text-white py-12">

      {/* HEADING */}
      <section>
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Trust & Governance
          </h1>
          <p className="text-xl text-white/80">
            Responsible AI for Regulated Clinical Environments
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="max-w-6xl mx-auto px-6 pt-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer bg-white border border-white/20 rounded-md p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* IMAGE ICON */}
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-medium text-black">
                  {item.title}
                </h3>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}